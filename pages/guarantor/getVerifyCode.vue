<template>
	<view class="page">
		<view class="top">
			<view class="title">手机号码</view>
			<view class="sub-title">请验证您的常用手机号码</view>
			
			<view class="mobile">{{hideMobile}}</view>
		</view>
		
		<button class="buttom-disabled-btn" @click="goVerifyCodePage">获取验证码</button>
	</view>
</template>

<script>
import { hideMobile } from '@/utils/index.js'

export default {
	data() {
		return {
			mobile: '',
			hideMobile: '',
		}
	},
	
	onLoad(options) {
		this.mobile = options.mobile
		this.hideMobile = hideMobile(options.mobile)
	},
	
	methods: {
		goVerifyCodePage() {
			uni.navigateTo({
				url: `/pages/guarantor/verifyCode?mobile=${this.mobile}`
			})
		},
	}
}
</script>

<style>
.page {
	width: 100vw;
	height: calc(100vh - 88rpx);
	padding: 32rpx 32rpx 80rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.title {
	height: 72rpx;
	font-size: 56rpx;
	font-weight: 500;
	line-height: 72rpx;
	color: #0A0F2D;
}

.title1 {
	margin-top: 8rpx;
	height: 44rpx;
	font-size: 28rpx;
	line-height: 44rpx;
	color: rgba(10, 15, 45, 0.5);
}

.mobile {
	margin-top: 80rpx;
	padding-left: 32rpx;
	width: 100%;
	height: 112rpx;
	line-height: 112rpx;
	border-radius: 16rpx;
	background: rgba(10, 15, 45, 0.04);
}
</style>
