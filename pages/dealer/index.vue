<template>
	<view class="wrap">
		<image class="header-bg" src="/static/header_bg1.png" mode="widthFix"></image>
		
		<view class="container">
			<view class="card">
				<view class="input-wrap">
					<view class="left">
						所在城市
						<view class="star"> *</view>
					</view>
					<view class="right no-input" @click="openCithList">
						<view v-if="form.companyCity">{{form.companyCity}}</view>
						<view class="placeholder" v-else>请选择城市</view>
						<image class="arrow" src="/static/arrow-gray-right.png" mode="widthFix"></image>
					</view>
				</view>
				
				<view class="input-wrap">
					<view class="left">
						公司名称
						<view class="star"> *</view>
					</view>
					<view class="right">
						<input class="input" placeholder="请输入公司名称" v-model="form.companyName" />
					</view>
				</view>
				
				<view class="input-wrap">
					<view class="left">
						联 系 人
						<view class="star"> *</view>
					</view>
					<view class="right">
						<input class="input" placeholder="请输入您的姓名" v-model="form.userName" />
					</view>
				</view>
				
				<view class="input-wrap">
					<view class="left">
						联系电话
						<view class="star"> *</view>
					</view>
					<view class="right">
						<input class="input" placeholder="请输入手机号码" v-model="form.userMobile" />
					</view>
				</view>
				
				<view class="btn" @click="create">
					立即报名
					<image
						class="detail-arrow"
						src="https://image.51cheyaoshi.com/xcx/app/static/right_green.png"
					/>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
import { api } from '@/utils/api.js'	
	
export default {
	data() {
		return {
			form: {
				companyCity: '',
				companyName: '',
				userName: '',
				userMobile: '',
			},
			cityList: [
				{value: '上海', text: '上海'},
				{value: '苏州', text: '苏州'},
				{value: '杭州', text: '杭州'},
				{value: '南京', text: '南京'},
				{value: '成都', text: '成都'},
				{value: '重庆', text: '重庆'},
				{value: '北京', text: '北京'},
				{value: '广州', text: '广州'},
				{value: '深圳', text: '深圳'},
				{value: '郑州', text: '郑州'},
				{value: '武汉', text: '武汉'},
				{value: '西安', text: '西安'},
				{value: '青岛', text: '青岛'},
				{value: '长沙', text: '长沙'},
				{value: '合肥', text: '合肥'},
				{value: '宁波', text: '宁波'},
				{value: '厦门', text: '厦门'},
				{value: '其他', text: '其他'},
			],
			scheme: '',
		}
	},
	
	onLoad(options) {
		this.scheme = options.scheme
		// this.getScheme()
	},
	
	methods: {
		getScheme() {
			const params = {
				path: '/pages/mine/mine',
				query: '',
			}
			
			this.$getRequest(api.getScheme, 'POST', params)
		},
		
		openCithList() {
			const itemList = [
				'上海',
				'苏州',
				'杭州',
				'南京',
				'成都',
				'重庆',
				'北京',
				'广州',
				'深圳',
				'郑州',
				'武汉',
				'西安',
				'青岛',
				'长沙',
				'合肥',
				'宁波',
				'厦门',
				'其他',
			]
			uni.showActionSheet({
				itemList,
				success: (res) => {
					this.form.companyCity = itemList[res.tapIndex]
				},
				fail: function (res) {
					console.log(res.errMsg)
				}
			})
		},
		
		async create() {
			if (!this.form.companyCity) {
				uni.showToast({
					title: '请选择城市',
					duration: 2000,
					icon: "none"
				})
				return false
			}
			
			if (!this.form.companyName) {
				uni.showToast({
					title: '请输入公司名称',
					duration: 2000,
					icon: "none"
				})
				return false
			}
			
			if (!this.form.userName) {
				uni.showToast({
					title: '请输入您的姓名',
					duration: 2000,
					icon: "none"
				})
				return false
			}
			
			if (!this.form.userMobile) {
				uni.showToast({
					title: '请输入手机号码',
					duration: 2000,
					icon: "none"
				})
				return false
			}
			
			const result = await this.$getRequest(api.inviteCompany, 'POST', this.form)
			if(result.code === 0){
				uni.navigateTo({
					url: `/pages/dealer/success?scheme=${this.scheme}`
				})
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.wrap {
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
		padding: 40rpx;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 0px -2px 32px 0px rgba(10, 15, 45, 0.02),0px 8px 24px 0px rgba(10, 15, 45, 0.04);
		border-radius: 24rpx;
	}
	
	.input-wrap {
		flex: 1;
		height: 112rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: inset 0px -1px 0px 0px rgba(10, 15, 45, 0.04);
	}
	
	.left {
		margin-right: 24rpx;
		font-size: 30rpx;
		color: #0A0F2D;
		font-weight: 500;
		display: flex;
		align-items: center;
		.star {
			color: #EA0000;
		}
	}
	
	.right {
		width: 0;
		flex: 1;
		height: 100%;
		display: flex;
		align-items: center;
		font-size: 30rpx;
		color: #0A0F2D;
	}
	
	.no-input {
		width: unset;
		flex: unset;
	}
	
	.arrow {
		margin-left: 8rpx;
		width: 14rpx;
	}
	
	.placeholder {
		color: rgba(10, 15, 45, 0.3);
	}
	
	.input {
		width: 100%;
		height: 100%;
		text-align: right;
	}
	
	>>> .uni-input-wrapper {
		width: 100%;
		height: 100%;
	}
	
	>>> .uni-input-input {
		width: 100%;
		text-align: right;
	}
	
	.uni-input-placeholder {
		height: 100%;
		line-height: 112rpx;
		color: rgba(10, 15, 45, 0.3);
		font-size: 30rpx;
		text-align: right;
	}
	
	.btn {
		margin-top: 64rpx;
		width: 100%;
		height: 116rpx;
		border-radius: 16rpx;
		background: #0A0F2D;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 34rpx;
		color: #FFFFFF;
		font-weight: 500;
		.detail-arrow {
			margin-left: 10rpx;
			width: 16rpx;
			height: 16rpx;
		}
	}
}
</style>