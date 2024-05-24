<template>
	<view class="page">
		<view class="top">
			<view class="title">工作信息</view>
			
			<view class="page-card">
				<view class="input-wrap">
					<view class="label">所在单位名称</view>
					<input class="input" placeholder="请输入所在单位全称" v-model="form.companyName" />
				</view>
				
				<view class="tip1">请上传所在单位的相关证明照片</view>
				<view class="tip2">( 例如 社保缴纳记录、银行流水证明、明信片、工作证等 )</view>
				
				<view class="img-wrap">
					<view class="img-box" v-for="(img, index) in form.imageUrl" :key="index">
						<image class="img" mode="aspectFill" :src="img"></image>
						<image
							class="del-icon"
							src="/static/close.png"
							@click="delImg(index)"
						/>
					</view>
					
					<view class="img-box img-box1" @click="uploadImg">
						<image class="camera-img" src="/static/guarantor/camera.png"></image>
						<view class="img-tip">上传相关证明</view>
					</view>
				</view>
			</view>
		</view>
		
		<button class="buttom-disabled-btn" :disabled="disabled" @click="goNextPage">立即认证</button>
	</view>
</template>

<script>
import { api } from '@/utils/api.js'

export default {
	data() {
		return {
			form: {
				companyName: '',
				imageUrl: [],
				params: {},
			},
			idcard: '',
			name: '',
		}
	},
	
	computed: {
		disabled() {
			let res = true
			
			if (this.form.companyName && this.form.imageUrl.length) {
				res = false
			}
			
			return res
		}
	},
	
	onLoad(options) {
		this.idcard = options.idcard
		this.name = options.name
	},
	
	methods: {
		uploadImg() {
			uni.chooseImage({
				success: async (chooseImageRes) => {
					uni.showLoading({
							title: '上传中'
					});
					const tempFilePaths = chooseImageRes.tempFilePaths
					
					for(const path of tempFilePaths) {
						const upload = await this.$getFileUpload(path)
						if(upload.code === 0) {
							this.form.imageUrl.push(upload.data.src)
						}
					}
					
					uni.hideLoading()
				}
			})
		},
		
		delImg(index) {
			uni.showModal({
				title: '提示',
				content: '确定要删除这张图片吗？',
				success: (res) => {
					if (res.confirm) {
						this.form.imageUrl.splice(index, 1)
					}
				}
			})
		},
		
		goNextPage() {
			uni.setStorageSync('guarantorCompanyInfo', this.form)
			uni.navigateTo({
				url: `/pages/guarantor/face-identity-tip?idcard=${this.idcard}&name=${this.name}`
			})
			//this.save()
		}, 
		
		async save() {
			const guarantorIndexOptions = uni.getStorageSync('guarantorIndexOptions')
			if (guarantorIndexOptions) {
				this.params = {
					...this.params,
					...guarantorIndexOptions,
				}
			}
			
			const guarantorIdCardInfo = uni.getStorageSync('guarantorIdCardInfo')
			if (guarantorIdCardInfo) {
				this.params = {
					...this.params,
					...guarantorIdCardInfo,
				}
			}
			
			const guarantorCompanyInfo = uni.getStorageSync('guarantorCompanyInfo')
			if (guarantorCompanyInfo) {
				this.params = {
					...this.params,
					...guarantorCompanyInfo,
				}
			}
			
			const params = {
				 isAgree: 1,
				 ...this.params
			}
			
			const result = await this.$getRequest(api.guarantorAgreeOrRefuse, 'POST', params)
			if(result.code === 0){
				uni.reLaunch({
					url: `/pages/guarantor/result?isAgree=1&name=${this.params.applicantName}`
				})
			} else {
				uni.showToast({
					title: result.msg,
					duration: 2000,
					icon: 'none'
				})
			}
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

.page-card {
	margin-top: 48rpx;
}

.input-wrap {
	width: 100%;
	height: 104rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30rpx;
	color: rgba(10, 15, 45, 0.5);
	border-bottom: 2rpx solid #E6E6E6;
}

.input-wrap .label {
	padding-right: 32rpx;
}

.input-wrap .input {
	flex: 1;
	text-align: right;
}

.tip1 {
	margin-top: 24rpx;
	height: 44rpx;
	font-size: 28rpx;
	line-height: 44rpx;
	color: rgba(10, 15, 45, 0.8);
}

.tip2 {
	height: 44rpx;
	font-size: 20rpx;
	line-height: 44rpx;
	color: #767676;
}

.img-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.img-box {
	margin-top: 24rpx;
	width: 296rpx;
	height: 240rpx;
	border-radius: 8rpx;
	overflow: hidden;
	position: relative;
}

.img-box .img {
	width: 100%;
	height: 100%;
}

.img-box .del-icon {
	position: absolute;
	top: 20rpx;
	right: 20rpx;
	width: 40rpx;
	height: 40rpx;
	z-index: 100;
}

.img-box1 {
	background: #0A0F2D;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.img-box1 .camera-img {
	width: 48rpx;
	height: 48rpx;
}

.img-box1 .img-tip {
	margin-top: 24rpx;
	height: 40rpx;
	font-size: 28rpx;
	line-height: 40rpx;
	color: #FFFFFF;
}
</style>
