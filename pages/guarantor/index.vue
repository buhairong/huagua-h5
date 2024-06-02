<template>
	<view class="page">
		<Header />
		
		<view class="container" v-if="type != 3">
			<view class="tip">
				<view class="tip1">{{name}} 邀请您成为担保人</view>
				<view class="tip2">用于申请 WECARS {{applyService}}业务</view>
			</view>
			
			<button class="buttom-disabled-btn" @click="goIdentityPage">上传认证信息</button>
			
			<view class="refuse-btn" @click="openModel">拒绝成为担保人</view>
		</view>
	</view>
</template>

<script>
import Header from '../../components/Header.vue'
import { api } from '@/utils/api.js'

export default {
	components: {
		Header,
	},
	
	data() {
		return {
			type: 1,  // 1.免押金申请 2.租车 
			applyService: '',
			userId: '',
			mobile: '',
			name: '',
			orderId: '',
			orderServiceType: ''
		}
	},
	
	onLoad(options) {
		// https://h5.51cheyaoshi.com/h5/index.html#/pages/guarantor/index?type=2userId=44&mobile=13541730743&name=刘某
		// http://192.168.2.34:8081/h5/#/pages/guarantor/index?userId=44&mobile=13641770793&name=刘某
		// http://localhost:8082/h5/#/pages/guarantor/index?userId=68&mobile=13641770793&orderId=1317&name=刘某
		// http://192.168.3.11:8082/h5/#/pages/guarantor/index?type=3&orderId=1320
		this.type = options.type
		this.orderId = options.orderId
		this.userId = options.userId
		this.mobile = options.mobile
		this.name = options.name
		this.orderServiceType = options.orderServiceType
		if (options.type == 1) {
			this.applyService = '车辆免押金'
		} else if (options.type == 3) {
			this.getSignUrl()
		} else if (options.orderServiceType == 1) {
			this.applyService = '会员租车'
		}
		
		const params = {
			orderId: options.orderId,
			userId: options.userId,
			mobile: options.mobile,
			orderId: options.orderId,
			applicantName: options.name,
			
		}
		uni.setStorageSync('guarantorIndexOptions', params)
	},
	
	methods: {
		async getSignUrl() {
			const params = {
				 orderId: this.orderId,
				 redirectUrl: 'https://h5.51cheyaoshi.com/h5/index.html#/pages/guarantor/result?isAgree=3',
			}
			const result = await this.$getRequest(api.getContractDetail, 'GET', params)
			if(result.code === 0){
				uni.setStorageSync('url', result.data.contractUrlGuarantor)
				// uni.navigateTo({
				// 	url: `/pages/guarantor/wxbview?from=sign`
				// })
				location.href = result.data.contractUrlGuarantor
			}
		},
		
		goIdentityPage() {
			uni.navigateTo({
				url: `/pages/guarantor/getVerifyCode?mobile=${this.mobile}`
			})
		},
		
		openModel() {
			uni.showModal({
				title: '提示',
				content: '您确认拒绝为他提供担保吗？',
				success: (res) => {
					if (res.confirm) {
						this.refuse()
					}
				}
			})
		},
		
		async refuse() {
			const params = {
				 isAgree: 2,
				 orderId: this.orderId,
				 userId: this.userId,
				 mobile: this.mobile,
				 orderId: this.orderId,
			}
			const result = await this.$getRequest(api.guarantorAgreeOrRefuse, 'POST', params)
			if(result.code === 0){
				uni.reLaunch({
					url: `/pages/guarantor/result?isAgree=2&name=${this.name}`
				})
			}
		},
	}
}
</script>

<style>
.container {
	width: 100vw;
	padding: 80rpx 32rpx;
}

.tip {
	width: 100%;
	height: 387rpx;
	background-image: url('~@/static/guarantor/home-top-bg.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	padding-top: 90rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.tip1 {
	font-size: 50rpx;
	font-weight: 500;
	height: 70rpx;
	line-height: 70rpx;
	color: #FFFFFF;
	font-style: italic;
}

.tip2 {
	margin-top: 28rpx;
	height: 44rpx;
	font-size: 32rpx;
	font-weight: 500;
	line-height: 44rpx;
	color: #FFFFFF;
	font-style: italic;
}

.refuse-btn{
	margin-top: 24rpx;
	height: 48rpx;
	font-size: 28rpx;
	line-height: 48rpx;
	color: rgba(1, 43, 58, 0.8);
	text-align: center;
}

.buttom-disabled-btn {
	margin-top: 80rpx;
}
</style>
