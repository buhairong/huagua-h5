<template>
	<view class="page">
		<image class="img" src="/static/guarantor/complete.png"></image>
		<view class="title">{{text[isAgree].title}}</view>
		<view class="sub-title">{{text[isAgree].subTitle}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAgree: '',
				name: '',
			}
		},
		
		computed: {
			text() {
				return {
					'1': {
						title: '认证通过',
						subTitle: '担保人信息认证通过',
					},
					'2': {
						title: '拒绝成为担保人',
						subTitle: `您已拒绝成为 ${this.name} 的担保人`,
					},
					'3': {
						title: '签约成功',
						subTitle: `您已成功签约`,
					},
				}
			}
		},
		
		onLoad(options) {
			this.isAgree = options.isAgree
			this.name = options.name
		},
		
		methods: {
			
		}
	}
</script>

<style>
.page {
	width: 100vw;
	padding-top: 140rpx;
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
</style>
