<template>
	<view class="wrap">
		<view class="video-wrap">
			
		</view>
		
		<video autoplay id="video" controls="controls"></video>
		<canvas id="canvas"></canvas>
		<div id="imageData" style="width:100vw;padding:40rpx;"></div>
		<button @click="playPause">播放/暂停</button>
		<button @click="screenshot">截图</button>
		<button @click="switchDirection">切换</button>
		
		<view class="tip">{{tip}}</view>
		<view class="">
			12:56
		</view>
		<view class="">
			info: {{info}}
		</view>
		<view class="">
			myVideo.videoWidth: {{myVideo && myVideo.videoWidth}}
		</view>
		<view class="">
			myVideo.videoHeight: {{myVideo && myVideo.videoHeight}}
		</view>
		<view class="">
			error: {{error}}
		</view>
		
	</view>
</template>

<script>
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
		facingMode: { exact: 'environment' } ,
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
			canvasW: 0,
			canvasH: 0,
			myVideo: null,
			videoStream: null,
			error: '',
			info: '',
			useFrontCamera: true,
		}
	},
	onLoad(options) {
		// http://192.168.2.34:8081/h5/#/pages/guarantor/face-identity?idcard=310107198204081711&name=卜海荣
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
		init() {
			try {
				this.myVideo = document.querySelector('.uni-video-video')
				console.log('this.myVideo', this.myVideo)
				this.videoStream = null
				this.useFrontCamera = true
				// 前置摄像头
				if ('mediaDevices' in window.navigator && 'getUserMedia' in window.navigator.mediaDevices) { 
					// 检查浏览器是否支持此APIswitchDirection()
					// 浏览器支持
					this.info = '手机支持'
				} else {
					this.error = '手机不支持'
				}
			} catch(err) {
				this.error = `init: ${err}`
				console.log(err)
			}
		},
		
		playPause() {
			try {
				console.log('this.myVideo.paused', this.myVideo.paused)
				if (this.myVideo.paused) {
					this.myVideo.play()
				} else {
					this.myVideo.pause()
				}
			} catch(err) {
				this.error = `playPause: ${err}`
				console.log(err)
			}
		},
		
		// 绘制canvas画布、获取data
		screenshot() {
			try {
				let canvas = document.querySelector('#canvas canvas')
				canvas.width = this.myVideo.videoWidth * 3
				canvas.height = this.myVideo.videoHeight * 3
				canvas.getContext('2d').drawImage(this.myVideo, 0, 0)
				const img = document.createElement('img')
				img.style.width = '100%'
				img.src = canvas.toDataURL('image/png')
				let divImage = document.getElementById('imageData')
				divImage.appendChild(img)
			} catch(err) {
				this.error = `screenshot: ${err}`
				console.log(err)
			}
		},
		
		// 你想在已经播放视频的情况下更换摄像机的前后摄像头，需要先停止当前的前置或者后置的视频流，再将其替换成摄像机的前置或者后置的视频流。
		async switchDirection() {
			this.useFrontCamera = !this.useFrontCamera
			if (this.videoStream) {
				this.videoStream.getTracks().forEach((track) => {
					track.stop()
				})
			}
			
			constraints.video.facingMode = this.useFrontCamera ? 'user' : { exact: 'environment' }
			try {
				this.videoStream = await window.navigator.mediaDevices.getUserMedia(constraints)
				// 调用将询问用户是否允许访问摄像机。如果用户拒绝，它将引发异常并且不返回流。因此，必须在 try/catch 块内处理这种情况,它返回一个Promise，必须使用 async/await 或 then 块
				this.myVideo.srcObject = this.videoStream
			} catch (err) {
				this.error = `switchDirection: ${err}`
				console.log(err)
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

#videoDom {
	width:100%;
	height:100%;
	border-radius:50%;
	-webkit-backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);	
}

</style>