<template>
	<view class="page">
		<view class="title">输入验证码</view>
		<view class="sub-title">验证码已发送至 {{hideMobile}} </view>
		
		<view class="phone_code_single">
			<input class="phone_code_single_cinput" 
				adjust-position="false" 
				auto-blur="true" 
				@blur="codeNumBlurFun" 
				@input="codeNumInputFun" 
				:focus="focus" 
				v-model="code" 
				type="number" 
				maxlength="4"
			/>
			<view class="phone_code_single_codeinput">
				<view 
					class="code_box"
					v-for="(item,index) in 4" 
					:key="index" 
					@click="codefocusFun(index)" 
				>
					{{code[index]}}
				</view>
			</view> 
		</view>
		
		<view class="send-code-wrap">
			<view
			  v-if="isSms"
			  class="send-code"
			  @click="getVerifyCode"
			>
			  重新获取
			</view>
			<view v-else>
				重新获取 {{sms}}s
			</view>
		</view>
	</view>
</template>

<script>
import { hideMobile } from '@/utils/index.js'
import { api } from '@/utils/api.js'

export default {
	data() {
		return {
			mobile: '',
			hideMobile: '',
			isSms: true,
			sms: 60,
			code: "",  // 验证码  
			focus: true,
		}
	},
	
	onLoad(options) {
		this.mobile = options.mobile
		this.hideMobile = hideMobile(options.mobile)
		this.getVerifyCode()
	},
	
	methods: {
		async getVerifyCode() {
			this.isSms=false
			this.timer = setInterval(() => {
			  if (--this.sms <= 0) {
				this.sms = 60
				this.isSms = true
				clearInterval(this.timer);
			  }
			}, 1000)
			
			uni.showLoading({
				title: '正在发送'
			})
			
			const data = await this.$getRequest(api.getIdentifyingCode, 'POST', {
			  mobile: this.mobile
			})
			uni.hideLoading()
			
			if(data.code != 0) {
			  uni.showToast({
			    title: '验证码获取失败，请重试',
					icon:"none",
			    duration: 1500
			  })
			} else {
			  uni.showToast({
			    title: '验证码已发送',
					icon:"none",
			    duration: 1500
			  })
			}
		},
		
		codeNumInputFun(e){ 
			const val = e.detail.value 
			this.code = val 
			if(val.length === 4) {
				this.finishCode()
			}
		},
		
		codeNumBlurFun(e){
				const val = e.detail.value 
				this.focus = false
				if(val.length === 4) {
					this.finishCode()
				} 
		},
		
		codefocusFun(index){ 
			this.focus = true 
		},
		
		finishCode() {
			uni.showLoading({
				title: '正在发送'
			})
			
			const params = {
				mobile: this.mobile,
				identifyingCode: this.code,
			}
			
			this.$getRequest(api.checkVerifyCode, 'POST', params).then((data) => {
				if(data.code == 0) {
					uni.reLaunch({
						url: `/pages/guarantor/uploadIdCard`
					})
				}else{
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon: 'none'
					})
				}
			}).finally(() => {
				uni.hideLoading()
				this.isSms = true
				this.sms = 60
				clearInterval(this.timer)
			})
		},
		
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
	padding: 32rpx 32rpx 80rpx;
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

.send-code-wrap {
	height: 44rpx;
	font-size: 28rpx;
	line-height: 44rpx;
	color: rgba(10, 15, 45, 0.3);
}

.send-code {
	color: rgba(10, 15, 45, 1);
}

.phone_code_single {
	margin: 80rpx 0;
}

.phone_code_single_cinput {
	position: fixed;
	left: -100rpx;
	width: 50rpx;
	height: 50rpx;
}

.phone_code_single_codeinput {
	display: flex;
	justify-content: space-between;
}

.code_box {
	width: 136rpx;
	height: 152rpx;
	border-radius: 16rpx;
	background: rgba(10, 15, 45, 0.04);
	font-size: 56rpx;
	color: #000000;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
