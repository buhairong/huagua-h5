<template>
  <view>
	  <web-view :src="url" @message="handleGetMessage"></web-view>
	  
  </view>
</template>

<script>
  export default {
    data() {
      return {
				url:'',
				orderId: '',
				from: '',
				e: '',
      }
    },
		
		onLoad(options) {
			this.orderId = options.orderId
			uni.setStorageSync('orderId', this.orderId)
			this.from = options.from
			uni.setStorageSync('signfrom', this.from)
			let url = uni.getStorageSync('url')
			if (url) {
				this.url = url
			}
		},
		
		methods:{
			async handleGetMessage(e){
				console.log('handleGetMessage',e)
				this.e = e
				if (e.detail.data[0].result === 'success') {
					if(this.from === 'sign'){
						uni.reLaunch({
							url: `/pages/guarantor/result?isAgree=3`
						})
					}
				}
			},
		},
  }
</script>

<style lang="scss" scoped>
</style>
