<template>
	<view class="wrap">
		<view class="video-wrap">
			<video id="video" :controls="false"></video>
		</view>
		<canvas id="canvas"></canvas>
		
		<view class="tip">{{tip}}</view>
	</view>
</template>

<script>
import { api } from '@/utils/api.js'	

// JavaScript访问设备前后摄像头
const constraints = { 
	// 初始值
	video: {
		width: {
			min: 300,
			ideal: 1920,
			max: 500,
		},
		height: {
			min: 250,
			ideal: 1080,
			max: 400,
		},
		facingMode: 'user',
		// user -- 前置 、environment -- 后置
	} ,
	// 流以正确的宽度和高度比例进入，如果它是处于纵向模式的手机，则需要进行尺寸反转
}
	
export default {
	data() {
		return {
			tip: '拍摄实际用车人人脸，请确保正对手机且光线充足',
			timer: null,
			idcard: '',
			name: '',
			myVideo: null,
			canvas: null,
			videoStream: null,
			error: '',
			src: '',
			info: '',
			tempFilePaths: '',
			canvasW: 0,
			canvasH: 0,
			params: {},
		}
	},
	onLoad(options) {
		// http://192.168.2.34:8081/h5/#/pages/guarantor/face-identity?idcard=310107198204081711&name=卜海荣
		// https://h5.51cheyaoshi.com/h5/#/pages/guarantor/face-identity?idcard=310107198204081711&name=卜海荣
		this.idcard = options.idcard
		this.name = options.name
	},
	
	onReady() {
		this.init()
	},
	
	onUnload() {
		this.clearTimer()
	},
	
	methods: {
		async init() {
			try {
				this.myVideo = document.querySelector('.uni-video-video')
				// 前置摄像头
				if ('mediaDevices' in window.navigator && 'getUserMedia' in window.navigator.mediaDevices) { 
					// 浏览器支持
					this.videoStream = await window.navigator.mediaDevices.getUserMedia(constraints)
					// 调用将询问用户是否允许访问摄像机。如果用户拒绝，它将引发异常并且不返回流。因此，必须在 try/catch 块内处理这种情况,它返回一个Promise，必须使用 async/await 或 then 块
					this.myVideo.srcObject = this.videoStream
					this.myVideo.play()
					this.screenshot()
				} else {
					this.error = '手机不支持'
				}
			} catch(err) {
				this.error = `init: ${err}`
				console.log(err)
			}
		},
		
		// 绘制canvas画布、获取data
		screenshot() {
			try {
				let canvas = document.querySelector('#canvas canvas')
				this.timer = setTimeout(() => {
					canvas.width = this.myVideo.videoWidth * 3
					canvas.height = this.myVideo.videoHeight * 3
					canvas.getContext('2d').drawImage(this.myVideo, 0, 0)
					this.tempFilePaths = canvas.toDataURL('image/jpeg')
					this.$getFileUpload(this.tempFilePaths).then(upload => {
						if(upload.code == 0) {
							this.src = upload.data.src
							this.$getRequest(api.faceAudit, 'POST', {
								imageUrl: this.src,
								idNum: this.idcard,
								name: this.name,
							}).then(result => {
								if (result.code == 0 && result.data.pass) {
									const reason = result.data.reason.split('(')
									this.tip = '认证通过'
									this.save()
								} else {
									this.tip = '抱歉，没有认出您'
									this.screenshot()
								}
							})
						} else {
							this.screenshot()
						}
					})
				}, 1000)
			} catch(err) {
				this.error = `screenshot: ${err}`
				console.log(err)
			}
		},
		
		async save() {
			const guarantorIndexOptions = uni.getStorageSync('guarantorIndexOptions')
			if (guarantorIndexOptions) {
				this.params = {
					...this.params,
					...guarantorIndexOptions,
				}
			}
			const guarantorIdCardInfo = uni.getStorageSync('guarantorIdCardInfo')
			if (guarantorIdCardInfo) {
				this.params = {
					...this.params,
					...guarantorIdCardInfo,
				}
			}
			const guarantorCompanyInfo = uni.getStorageSync('guarantorCompanyInfo')
			if (guarantorCompanyInfo) {
				this.params = {
					...this.params,
					...guarantorCompanyInfo,
				}
			}
			const params = {
				 isAgree: 1,
				 ...this.params
			}
			const result = await this.$getRequest(api.guarantorAgreeOrRefuse, 'POST', params)
			if(result.code === 0){
				this.info = 7
				uni.reLaunch({
					url: `/pages/guarantor/result?isAgree=1&name=${this.params.applicantName}`
				})
			} else {
				uni.showToast({
					title: result.msg,
					duration: 2000,
					icon: 'none'
				})
			}
		},
		
		clearTimer() {
			clearTimeout(this.timer)
			this.timer = null
		},
	},
}
</script>

<style scoped>
.wrap {
	padding: 40px 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.tip {
	margin-top: 16px;
	font-size: 16px;
	line-height: 44rpx;
	color: rgba(10, 15, 45, 0.5);
}

.video-wrap {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	overflow: hidden;
	-webkit-backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);
	background: #000000;
}

#video {
	width:100%;
	height:100%;
	border-radius:50%;
	-webkit-backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);	
}

#canvas {
	position: absolute;
	left: -10000px;
}

</style>