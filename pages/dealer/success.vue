<template>
	<view class="page">
		<image class="img" src="/static/guarantor/complete.png"></image>
		<view class="title">提交成功</view>
		<view class="sub-title">我们会尽快与您联系，感谢您的耐心等待和支持。</view>
		
		<view class="btn" @click="goWecars">
			打开WECARS
			<image
				class="detail-arrow"
				src="https://image.51cheyaoshi.com/xcx/app/static/right_green.png"
			/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scheme: '',
			}
		},
		
		computed: {
			
		},
		
		onLoad(options) {
			this.scheme = options.scheme
		},
		
		methods: {
			goWecars() {
				location.href = this.scheme
			},
		}
	}
</script>

<style>
.page {
	width: 100vw;
	padding: 140rpx 40rpx 0;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.img {
	width: 120rpx;
	height: 120rpx;
}

.title {
	margin-top: 32rpx;
	margin-bottom: 36rpx;
	height: 48rpx;
	font-size: 32rpx;
	line-height: 48rpx;
	color: rgba(0, 0, 0, 0.6);
}

.sub-title {
	height: 34rpx;
	font-size: 24rpx;
	line-height: 34rpx;
	color: #999999;
}

.btn {
	margin-top: 400rpx;
	width: 100%;
	height: 116rpx;
	border-radius: 16rpx;
	background: #0A0F2D;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 34rpx;
	color: #FFFFFF;
	font-weight: 500;
	.detail-arrow {
		margin-left: 10rpx;
		width: 16rpx;
		height: 16rpx;
	}
}
</style>
