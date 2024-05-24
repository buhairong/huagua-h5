<template>
	<view>
		<!-- <Header /> -->
		
		<image class="header-bg" src="/static/header_bg.png"></image>
		
		<view class="container">
			<view class="card">
				<view class="card-title-wrap">
					<view class="card-title">订阅方案</view>
					<image src="/static/info-circle.png" style="width:36rpx;height:36rpx;margin-left:8rpx;" @click="openPopup"></image>
				</view>
				
				<view class="card-item">
					<view class="left">订阅周期</view>
					<view class="right">6期</view>
				</view>
				
				<view class="card-item" style="box-shadow: none;">
					<view class="left">订阅费用</view>
					<view class="middle">（{{isCalculator ? calculatorText : formatThousandNumber(monthPayment)}}元/月）</view>
					<view class="right">
						<text v-if="isCalculator" class="calculator-text">{{calculatorText}}</text>
						<text v-else>{{formatThousandNumber(paymentTotal)}} 元</text>
					</view>
				</view>
					
				<view class="movable">
					
					<image class="movable-img" src="/static/minus.png" mode="widthFix" @click="minus"></image>
					
					<movable-area class="movable-area" ref="movable">
						<view class="process" :style="{width: processWidth+'px'}"></view>
						<movable-view ref="ball" class="movable-view" :x="x" direction="horizontal" @change="onChange"></movable-view>
					</movable-area>
					
					<image class="movable-img" src="/static/plus.png" mode="widthFix" @click="plus"></image>
					
				</view>
				
				<view class="card-item">
					<view class="left">订阅押金</view>
					<view class="right">
						<text v-if="isCalculator" class="calculator-text">{{calculatorText}}</text>
						<text v-else>{{formatThousandNumber(deposit)}} 元</text>
					</view>
				</view>
			</view>
			
			<view class="card card2">
				<view class="card-title-wrap">
					<view class="card-title">期末方案</view>
				</view>
				
				<view class="card-item">
					<view class="left">留购车辆</view>
					<view class="middle">（押金可抵扣）</view>
					<view class="right">
						<text v-if="isCalculator" class="calculator-text">{{calculatorText}}</text>
						<text v-else>{{formatThousandNumber(buyoutsFee)}} 元</text>
					</view>
				</view>
				
				<view class="card-item">
					<view class="left">继续订阅</view>
					<view class="middle">（{{isCalculator ? calculatorText : formatThousandNumber(nextMonthPayment)}}元/月）</view>
					<view class="right">
						<text v-if="isCalculator" class="calculator-text">{{calculatorText}}</text>
						<text v-else>{{formatThousandNumber(nextPaymentTotal)}} 元</text>
					</view>
				</view>
				
				<view class="card-item">
					<view class="left">退回车辆</view>
					<view class="right">押金原路退还</view>
				</view>
			</view>
			
			<view class="btn" @click="goPrevPage">
				<image style="width:23rpx;height:24rpx;margin-right:16rpx;" src="/static/arrow-left.png"></image>
				上一步
			</view>
		</view>
		
		<view v-if="showPopup" class="mask" @click="closePopup">
			<view class="popup" @click.stop>
				<view class="popup-title-wrap">
					订阅流程
					<image class="close-btn" src="/static/close.png" @click="closePopup"></image>
				</view>
				
				<view class="popup-item">
					<view class="popup-item-title">
						<image class="title-icon" src="/static/arrow-right.png"></image>
						<view class="popup-item-title-text">1.定制产品</view>
					</view>
					<view class="popup-item-content">
						选择适合您的订阅方案，选择签约主体，个性化定制车辆颜色和增配项
					</view>
				</view>
				
				<view class="popup-item">
					<view class="popup-item-title">
						<image class="title-icon" src="/static/arrow-right.png"></image>
						<view class="popup-item-title-text">2.资质认证</view>
					</view>
					<view class="popup-item-content">
						资金方需要对订阅主体的身份进行审核认证，审核通过即可在线签约
					</view>
				</view>
				
				<view class="popup-item">
					<view class="popup-item-title">
						<image class="title-icon" src="/static/arrow-right.png"></image>
						<view class="popup-item-title-text">3.签约付款</view>
					</view>
					<view class="popup-item-content">
						在线完成订阅合约签订，支付车辆押金费用后，商户开始备车
					</view>
				</view>
				
				<view class="popup-item">
					<view class="popup-item-title">
						<image class="title-icon" src="/static/arrow-right.png"></image>
						<view class="popup-item-title-text">4.喜提爱车</view>
					</view>
					<view class="popup-item-content">
						商户完成车辆采购、落地上牌流程后，会与您预约具体交车时间，原则上车辆准备周期不超过30天，特殊情况除外
					</view>
				</view>
				
				<view class="popup-item">
					<view class="popup-item-title">
						<image class="title-icon" src="/static/arrow-right.png"></image>
						<view class="popup-item-title-text">5.期末选择</view>
					</view>
					<view class="popup-item-content">
						订阅期结束30天前，您可以随时选择期末（留购车辆、继续订阅车辆、无损退回车辆）
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
import Header from '../../components/Header.vue'
import { formatThousandNumber } from '../../utils/index.js'
import { PMT, PPMT } from '../../utils/execl.js'

export default {
	components: {
		Header,
	},
	
	data() {
		return {
			processWidth: 0,
			x: 0,
			width: 0,
			min: 9,
			max: 11,
			allSlide: 2,
			price: 0,
			showPopup: false,
			calculatorText: '计算中',
			isCalculator: true,
			amortizeRate: 9.6, // 首段期间摊销比例
			IRR: 0.1,
			firstPaymentRate: 0.1, // 首付款比例
			depositRate: 0, // 保证金比例
			viewDepositRate: 0.1, // 保证金比例
			finalResidualRate :0.3, // 36期后残值比例=30%
			monthPayment: null, // 订阅费用 - 月付
			paymentTotal: null, // 订阅费用 - 总金额
			deposit: null, // 订阅押金
			buyoutsFee: null, // 留购车辆
			nextMonthPayment: null, // 继续订阅费用 - 月付
			nextPaymentTotal: null, // 继续订阅费用 - 总金额
			init: true,
			MSRPMin: 2.95,
			MSRPMax: 3.05,
			profit: 5.5,
		}
	},
	
	onLoad(options) {
		this.price = options.price
		this.calculator()
	},
	
	mounted() {
		const movableWidth = this.$refs.movable.width
		const ballWidth = this.$refs.ball.width
		this.width = movableWidth - ballWidth
		this.moveX()
		
	},
	
	methods: {
		getMSRP(price, profit, monthPayment) {
			return ((price * profit)/100 - monthPayment) / price
		},
		
		calculator() {
			console.log('amortizeRate', this.amortizeRate)
			console.log('profit', this.profit)
			this.isCalculator = true
			// 设备金额=对我司售价*1.05+1000
			const devicePrice = this.price * ((100+this.profit)/100) + 1000
			
			// 保证金(F13)=设备金额*保证金比例   devicePrice:设备金额  this.depositRate：保证金比例 0
			const deposit = devicePrice * this.depositRate
			
			// 摊销金额(E21)=设备金额*首段期间摊销比例
			const amortizePrice = devicePrice * this.amortizeRate / 100 // 第一阶段摊销金额
			
			// 首付款=设备金额*首付款比例
			const firstPayment = devicePrice * this.firstPaymentRate
			
			// 第一阶段残值比例 = 100% - 首付款比例 - 首段期间摊销比例
			const residualRate1 = 1 - this.firstPaymentRate - (this.amortizeRate / 100)
			
			
			// 残值金额(I21)=设备金额*残值比例
			const residual1 = (devicePrice * (residualRate1*1000))/1000 // 第一阶段残值金额 
			
			console.log('this.IRR/2', this.IRR/2)
			// PMT(IRR/2,1,-摊销金额,null,true)
			const PMTValue = PMT(
				this.IRR/2,
				1,
				-amortizePrice,
				null,
				true
			)
			
			// 订阅费用(月)=(PMT(IRR/2,1,-摊销金额,null,true)+(残值金额-保证金)*IRR/2)/6
			this.monthPayment = (PMTValue + ((residual1-deposit)*this.IRR/2))/6
			console.log('monthPayment1', this.monthPayment)
			this.monthPayment = this.formatPrice(this.monthPayment)
			
			let MSRP = this.getMSRP(this.price, this.profit, this.monthPayment)
			MSRP = MSRP * 100
			console.log('MSRP', MSRP)
			
			if (MSRP < this.MSRPMin || MSRP > this.MSRPMax) {
				if (MSRP < this.MSRPMin) {
					this.profit =  (this.profit*10 + 1)/10
				}
				
				if (MSRP > this.MSRPMax) {
					this.profit =  (this.profit*10 - 1)/10
				}
				this.calculator()
			}
			
			this.paymentTotal = this.monthPayment*6
			
			
			this.deposit = this.formatPrice(devicePrice * this.viewDepositRate, 4)
			// 留购金额=残值金额+首付金额
			this.buyoutsFee = this.formatPrice(residual1 + firstPayment)
			
			// 残值 = 设备金额 * 残值比例
			const finalResidual = devicePrice * this.finalResidualRate
			
			// 后续第N个阶摊销比例=PPMT(IRR/2,1,2.5*2,(设备金额-首付款-上阶段摊销金额-残值金额)*-1,0)/设备金额*100
			const PPMTValue = PPMT(
				this.IRR/2,
				1,
				2.5*2,
				(devicePrice-firstPayment-amortizePrice-finalResidual)*(-1),
				0
			)
			
			const amortizeRate2 = PPMTValue/devicePrice // 第二阶段摊销比例
			
			
			// 摊销金额(E21)=设备金额*摊销比例
			const amortizePrice2 = devicePrice * amortizeRate2 / 100 // 第二阶段摊销金额
			
			
			// 下一阶段的订阅费用(月)=PMT(IRR/12,30,(设备金额-首付款-上一阶段摊销金额)*-1,残值,true)-保证金*IRR/12
			const PMTValue2 = PMT(
				this.IRR/12,
				30,
				(devicePrice-firstPayment-amortizePrice)*(-1),
				finalResidual,
				true
			)
			
			// 下一阶段的订阅费用(月)=PMT-保证金*IRR/12
			this.nextMonthPayment = this.formatPrice(PMTValue2 - (deposit*this.IRR/12))
			console.log('monthPayment2', (PMTValue2 - (deposit*this.IRR/12)))
			
			this.nextPaymentTotal = this.nextMonthPayment*6
			
			this.isCalculator = false
			 
		},
		
		moveX() {
			this.init = true
			this.x = (this.amortizeRate - this.min) / this.allSlide * this.width
			this.processWidth = this.x
			this.calculator()
			setTimeout(() => {
				this.init = false
			}, 1000)
		},
		
		minus() {
			if (this.amortizeRate <= this.min) {
				return
			}
			this.amortizeRate = (this.amortizeRate*10 - 1) / 10
			this.moveX()
		},
		
		plus() {
			if (this.amortizeRate >= this.max) {
				return
			}
			this.amortizeRate = (this.amortizeRate*10 + 1) / 10
			this.moveX()
		},
		
		onChange(e) {
			if (!this.init) {
				this.x = e.detail.x
				if (this.x === 0) {
					this.amortizeRate = this.min
					this.processWidth = 0
				} else if (this.x >= this.width) {
					this.amortizeRate = this.max
					this.processWidth = this.width
				} else {
					this.amortizeRate = Math.floor((this.x / this.width * this.allSlide + this.min)*10)
					this.amortizeRate = this.amortizeRate / 10
					this.processWidth = this.x
				}
				
				this.calculator()
			}
		},
		
		openPopup() {
			this.showPopup = true
		},
		
		closePopup() {
			this.showPopup = false
		},
		
		goPrevPage() {
			uni.navigateBack({
				delta: 1
			})
		},
		
		formatThousandNumber(num) {
			if (num) {
				return formatThousandNumber(num)
			}
			
			return 0
		},
		
		formatPrice(num, pow=2) {
				const powNumber = Math.pow(10, pow)
				let res = num / powNumber
				res = Math.ceil(res)
				res = res * powNumber
				return res
		},
	},
}
</script>

<style>
.header-bg {
	width: 100vw;
}

.container {
	margin-top: -170rpx;
	padding: 0 32rpx 40px;
	position: relative;
	z-index: 100;
}

.card {
	margin-bottom: 12px;
	padding: 20px 40rpx 0;
	width: 100%;
	border-radius: 24rpx;
	opacity: 1;
	background: #FFFFFF;
	box-shadow: 0px -2px 32px 0px rgba(10, 15, 45, 0.02),0px 8px 24px 0px rgba(10, 15, 45, 0.04);
	box-sizing: border-box;
}

.card-title-wrap {
	margin-bottom: 16rpx;
	height: 48rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card-title {
	font-size: 34rpx;
	text-align: center;
	color: #0A0F2D;
}

.card-item {
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: inset 0px -1px 0px 0px rgba(10, 15, 45, 0.04);
}

.card-item:last-child {
	box-shadow: none;
}

.left {
	font-size: 30rpx;
	color: #0A0F2D;
	font-weight: 500;
}

.middle {
	font-size: 30rpx;
	color: #BFBFBF;
}

.right {
	font-size: 30rpx;
	color: #0A0F2D;
}

.calculator-text {
	color: #BFBFBF;
}

.movable {
	margin-bottom: 8px;
	display: flex;
	align-items: center;
}

.movable-img {
	width: 34rpx;
}

.movable-area {
	margin: 0 16rpx;
	width: 100%;
	height: 8rpx;
	border-radius: 4rpx;
	background: rgba(10, 15, 45, 0.08);
	position: relative;
}

.process {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	height: 8rpx;
	border-top-left-radius: 4rpx;
	border-bottom-left-radius: 4rpx;
	background: #0A0F2D;
}

.movable-view {
	width: 32rpx;
	height: 32rpx;
	background: #0A0F2D;
	border-radius: 50%;
	border: 4rpx solid #FFFFFF;
	margin-top: -12rpx;
	box-sizing: border-box;
}

.btn {
	margin-top: 12px;
	width: 100%;
	height: 116rpx;
	border-radius: 16rpx;
	background: #0A0F2D;
	font-size: 34rpx;
	color: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
}

.mask {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	background: rgba(0, 0, 0, 0.5);
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 32rpx;
	box-sizing: border-box;
}

.popup {
	width: 100%;
	background-color: #fff;
	padding: 25px 32rpx 31px;
}

.popup-title-wrap {
	margin-bottom: 50rpx;
	height: 44rpx;
	font-size: 34rpx;
	line-height: 44rpx;
	color: #0A0F2D;
	text-align: center;
	position: relative;
}

.close-btn {
	width: 36rpx;
	height: 36rpx;
	position: absolute;
	top: 4rpx;
	right: 0;
	z-index: 200;
}

.popup-item {
	margin-bottom: 52rpx;
}

.popup-item:last-child {
	margin-bottom: 0;
}

.popup-item-title {
	margin-bottom: 6px;
	height: 40rpx;
	display: flex;
	align-items: center;
}

.title-icon {
	width: 23rpx;
	height: 24rpx;
	margin-right: 8rpx;
}

.popup-item-title-text {
	font-size: 28rpx;
	color: #0A0F2D;
}

.popup-item-content {
	padding-left: 50rpx;
	line-height: 34rpx;
	font-size: 24rpx;
	color: #666666;
}
</style>
