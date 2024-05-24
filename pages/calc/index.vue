<template>
	<view class="page">
		<view>
		<!-- <Header /> -->
		
		<image class="header-bg" src="/static/header_bg.png"></image>
		
		<view class="container">
			<view class="card">
				<view class="input-wrap">
					<view class="left">车辆售价</view>
					<view class="right">
						<input class="input" inputmode="numeric" placeholder="请输入车辆对我司售价" v-model="price" />
						<view class="unit">元</view>
					</view>
				</view>
			</view>
			
			<view class="bright">
				<view class="bright-wrap">
					<view class="bright-title-wrap">
						<view class="bright-title-left">订阅产品亮点</view>
						<view class="bright-title-right" @click="openBright" v-if="!showBright">
							<image style="width:32rpx;" src="/static/arrow-down.png" mode="widthFix"></image>
						</view>
					</view>
					
					<transition name="fade">
						<view class="bright-content" v-if="showBright">
							<view class="bright-content-item-title">1.门槛更低、压力更小</view>
							<view class="bright-content-item">
								仅需一次性支付当期订阅费用和车辆押金即可提车，且价格远低于其他租车平台。无需考虑首付、购置税、月还款等问题，轻松拥有车辆。
							</view>
							
							<view class="bright-content-item-title">2.先试后买、不怕买错</view>
							<view class="bright-content-item">
								订阅期末，客户可依据喜好，灵活选择续订、留购或将车辆退回等多种方式，不用担心买错。如选择续订，价格更低，性价比更高。
							</view>
							
							<view class="bright-content-item-title">3.手续简单、拒绝套路</view>
							<view class="bright-content-item">
								选择订阅服务时，客户仅需提供身份证、驾驶证即可申请，无手续费或套路陷阱。
							</view>
							
							<view class="bright-content-item-title">4.想换就换、贬值无忧</view>
							<view class="bright-content-item">
								开腻了想换车？订阅期末退回车辆即可，押金将原路退回，再无车辆贬值或未还完款的烦恼，真正做到说换就换。
							</view>
							
							<view class="bright-bottom" @click="closeBright">
								收起 
								<image style="margin-left:16rpx;width:28rpx;transform:rotate(180deg);" src="/static/arrow-down.png" mode="widthFix"></image>
							</view>
						</view>
					</transition>
				</view>
			</view>
			
			
			<view class="rule">
				<view class="rule-title">
					<view class="border"></view>
					<view class="rule-title-text">准入标准</view>
				</view>
				
				<view class="rule-item" style="display:flex;align-items: center;">
					1.价格：15万 - 80万之间  
					<view style="color:#197EF5;padding-left:8rpx;" @click="goRulePage">查看价格认定标准</view>
				</view>
				<view class="rule-item">
					2.里程：1年车龄不超过1.5万公里，2年车龄不超过3万公里
				</view>
				<view class="rule-item">
					3.车龄：不超过24个月
				</view>
				<view class="rule-item">
					4.评估：有可为车况承保的评估报告
				</view>
				<view class="rule-item">
					5.证照：合格证、产证（未在抵押状态）、行驶证
				</view>
				<view class="rule-item">
					6.事故：无大事故、无火烧、无水泡
				</view>
			</view>
			</view>
			
			
			
		</view>
		<view class="btn-wrap">
			<view class="btn" @click="goNextPage">
				下一步
				<image style="width:23rpx;height:24rpx;margin-left:16rpx;" src="/static/arrow-right.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
import Header from '../../components/Header.vue'

export default {
	components: {
		Header,
	},
	
	data() {
		return {
			price: undefined,
			showBright: false,
		}
	},
	
	onLoad() {
		
	},
	
	methods: {
		goRulePage() {
			uni.navigateTo({
				url: '/pages/rule/rule'
			})
		},
		
		goNextPage() {
			if (!this.price) {
				uni.showToast({
					title: '请输入车辆对我司售价',
					duration: 2000,
					icon: 'none'
				})
				return
			}
			
			uni.navigateTo({
				url: `/pages/calculator/calculator?price=${this.price}`
			})
		},
		
		openBright() {
			this.showBright = true
		},
		
		closeBright() {
			this.showBright = false
		},
	},
}
</script>

<style>
.page {
	min-height: 100vh;
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-sizing: border-box;
}
.header-bg {
	width: 100vw;
}

.container {
	margin-top: -170rpx;
	padding: 0 32rpx;
	position: relative;
	z-index: 100;
}

.card {
	padding: 20px 40rpx;
	width: 100%;
	height: 152rpx;
	border-top-left-radius: 24rpx;
	border-top-right-radius: 24rpx;
	opacity: 1;
	background: #FFFFFF;
	box-shadow: 0px -2px 32px 0px rgba(10, 15, 45, 0.02),0px 8px 24px 0px rgba(10, 15, 45, 0.04);
	box-sizing: border-box;
	display: flex;
	align-items: center;
}

.input-wrap {
	flex: 1;
	height: 44rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.left {
	height: 100%;
	font-size: 30rpx;
	color: #0A0F2D;
}

.right {
	height: 100%;
	display: flex;
}

.input {
	margin-right: 8rpx;
	height: 44rpx;
	width: 300rpx;
}

>>> .uni-input-wrapper {
	height: 44rpx;
}

>>> .uni-input-placeholder {
	height: 100%;
	line-height: 44rpx;
	color: rgba(10, 15, 45, 0.3);
	font-size: 30rpx;
}

.unit {
	font-size: 30rpx;
	color: #0A0F2D;
}

.rule {
	margin-top: 28px;
}

.rule-title {
	margin-bottom: 12px;
	display: flex;
	align-items: center;
}

.border {
	margin-right: 16rpx;
	width: 4rpx;
	height: 24rpx;
	border-radius: 4rpx;
	background: #0A0F2D;
}

.rule-title-text {
	font-size: 30rpx;
	color: #0A0F2D;
}

.rule-item {
	line-height: 60rpx;
	font-size: 24rpx;
	color: #0A0F2D;
}

.btn-wrap {
	margin-top: 44px;
	width: 100%;
	box-sizing: border-box;
	padding: 0 32rpx;
}

.btn {
	width: 100%;
	height: 116rpx;
	border-radius: 16rpx;
	background: #0A0F2D;
	font-size: 34rpx;
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}

.bright {
	width: 100%;
	height: 80rpx;
	position: relative;
}

.bright-wrap {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	border-radius: 0px 0px 24rpx 24rpx;
	background: #4d4d4d;
	box-shadow: 0px -2px 32px 0px rgba(10, 15, 45, 0.02),0px 8px 24px 0px rgba(10, 15, 45, 0.04);
	box-sizing: border-box;
}

.bright-title-wrap {
	width: 100%;
	padding-left: 40rpx;
	height: 80rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
}

.bright-title-left {
	font-size: 28rpx;
	font-weight: 500;
	color: #FFFFFF;
}

.bright-title-right {
	width: 110rpx;
	height: 80rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.bright-content {
	padding: 12px 40rpx 20px;
	width: 100%;
	box-sizing: border-box;
}

.bright-content-item-title {
	color: #fff;
	font-size: 28rpx;
	font-weight: 500;
	margin-top: 24px;
	height: 44rpx;
	line-height: 44rpx;
}

.bright-content-item-title:first-child {
	margin-top: 0;
}

.bright-content-item {
	margin-top: 8px;
	line-height: 36rpx;
	font-size: 24rpx;
	color: rgba(255, 255, 255, 0.8);
}

.bright-bottom {
	margin-top: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24rpx;
	color: #fff;
}

.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
