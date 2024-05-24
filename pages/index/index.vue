<template>
	<view class="page">
		<view class="tip">
			跳转中，请稍后...
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scheme: 'weixin://dl/business/?t='
			}
		},
		onLoad(options) {
			const link = this.scheme + options.query
			console.log(link)
			location.href = link
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
	.tip {
		text-align: center;
	}
}
</style>
