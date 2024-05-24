<template>
	<view class="wrap">
		<view class="video-wrap">
			<video id="video" :controls="false"></video>
		</view>
		<canvas v-if="canvasW && canvasH" :style="{
			width: `${canvasW}px`,
			height: `${canvasH}px`,
		}" canvas-id="firstCanvas" id="firstCanvas"></canvas>
		
		<view class="tip">{{tip}}</view>
		
		<view class="">
			myVideo: {{myVideo}}
		</view>
		<view class="">
			canvas: {{canvas}}
		</view>
		<view class="">
			canvasW: {{canvasW}}
		</view>
		<view class="">
			canvasH: {{canvasH}}
		</view>
		<view class="">
			tempFilePaths: {{tempFilePaths}}
		</view>
		<view class="">
			src: {{src}}
		</view>
		<view class="">
			info: {{info}}
		</view>
		<view class="">
			error: {{error}}
		</view>
		
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
				this.info = 1
				this.myVideo = document.querySelector('.uni-video-video')
				// 前置摄像头
				if ('mediaDevices' in window.navigator && 'getUserMedia' in window.navigator.mediaDevices) { 
					this.info = 2
					// 浏览器支持
					this.videoStream = await window.navigator.mediaDevices.getUserMedia(constraints)
					// 调用将询问用户是否允许访问摄像机。如果用户拒绝，它将引发异常并且不返回流。因此，必须在 try/catch 块内处理这种情况,它返回一个Promise，必须使用 async/await 或 then 块
					this.myVideo.srcObject = this.videoStream
					this.myVideo.play()
					this.info = 3
					setTimeout(() => {
						this.screenshot()
					}, 3000)
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
				this.info = 6
				this.timer = setTimeout(async () => {
					this.canvas = uni.createCanvasContext('firstCanvas')
					this.canvasW = this.myVideo.videoWidth
					this.canvasH = this.myVideo.videoHeight
					this.canvas.drawImage(this.myVideo, 0, 0)
					this.info = 7
					uni.canvasToTempFilePath({
					  x: 0,
						y: 0,
						width: this.canvasW,
						height: this.canvasH,
						canvasId: 'firstCanvas',
						fileType: 'jpg',
						destWidth: this.canvasW,
						destHeight: this.canvasH,
					  success: (res) => {
							this.tempFilePaths = res.tempFilePath
							this.$getFileUpload(this.tempFilePaths).then(upload => {
								if(upload.code == 0) {
									this.src = upload.data.src
									this.$getRequest(api.faceAudit, 'POST', {
										imageUrl: this.src,
										idNum: this.idcard,
										name: this.name,
									}).then(async result => {
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
					  },
						fail: (res) => {
							console.log('图片生成失败', res)
							this.error = `图片生成失败: ${res}`
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
				uni.reLaunch({
					url: `/pages/guarantor/result?isAgree=1&name=${this.params.applicantName}`
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
}

#video {
	width:100%;
	height:100%;
	border-radius:50%;
	-webkit-backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);	
}

</style>