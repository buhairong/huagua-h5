<template>
	<view class="wrap">
		<view class="header">
			<image
				style="width:320rpx;height:320rpx;"
				src="https://image.51cheyaoshi.com/xcx/app/static/home/face_icon.png"
			/>
			<view class="tip">拍摄实际用车人人脸，请确保正对手机且光线充足</view>
		</view>
		
		<button class="buttom-disabled-btn" @click="goSignPage">立即认证</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			idcard: '',
			name: '',
		}
	},
	
	onLoad(options) {
		this.idcard = options.idcard
		this.name = options.name
	},
	
	methods: {
		goSignPage() {
			uni.navigateTo({
				url: `/pages/guarantor/face-identity?idcard=${this.idcard}&name=${this.name}`
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.wrap {
	width: 100vw;
	height: calc(100vh - 88rpx);
	padding: 32rpx 32rpx 80rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

.header {
	text-align: center;
}

.tip {
	margin-top: 16px;
	height: 44rpx;
	font-size: 14px;
	line-height: 44rpx;
	color: rgba(10, 15, 45, 0.5);
}
</style>