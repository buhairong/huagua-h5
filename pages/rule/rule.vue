<template>
	<view class="page">
		<view class="title">一、价格确定依据：车300APP</view>
		<view class="title">二、数据获取步骤：</view>
		<view class="section">
			<view class="section-text">1.打开车300APP选择“估价”</view>
			<view class="section-text">2.输入具体车型、首次上牌、行驶里程数</view>
			<view class="section-text">3.“车辆估值数据”里选择“车况良好”得出最 终的车商收购价</view>
			<view class="section-text">4.车辆价格<=车商收购价*101%</view>
		</view>
		<view class="title">三、操作参考如下：</view>
		
		<view class="imgs">
			<image class="img" src="/static/page1.png" mode="widthFix"></image>
			<image class="img" src="/static/page2.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.page {
	width: 100vw;
	padding: 12px 32rpx 0;
	box-sizing: border-box;
}

.title {
	height: 72rpx;
	line-height: 72rpx;
	font-size: 28rpx;
	color: rgba(10, 15, 45, 1);
	font-weight: 500;
}

.section {
	padding-left: 50rpx;
}

.section-text {
	line-height: 72rpx;
	font-size: 24rpx;
	color: rgba(10, 15, 45, .8);
}

.imgs {
	margin-top: 16px;
	padding: 0 44rpx;
	box-sizing: border-box;
}

.img {
	width: 100%;
	margin-bottom: 100rpx;
}
</style>
