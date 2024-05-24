<template>
	<view class="page">
		<view class="top">
			<view class="title">上传身份证</view>
			<view class="sub-title">车要试出行会严格保障您的信息安全</view>
			
			<view class="section-title">
				<view class="border"></view>
				请上传清晰、无反光、无遮挡的证件照片
			</view>
			
			<view class="idcard-wrap">
				<view class="idcard" @click="uploadIdCard(1)">
					<image class="img" :src="form.idcardUrl" v-if="form.idcardUrl"></image>
					<image class="img" src="/static/guarantor/idcard_bg.png" v-else></image>
				</view>
				
				<view class="idcard" @click="uploadIdCard(2)">
					<image class="img" :src="form.idcardBackUrl" v-if="form.idcardBackUrl"></image>
					<image class="img" src="/static/guarantor/idcardback_bg.png" v-else></image>
				</view>
			</view>
			
			<view class="section-title">
				<view class="border"></view>
				请确认身份信息
			</view>
			
			<view class="input-wrap">
				<view class="label">姓名</view>
				<input class="input" placeholder="请输入真实姓名" v-model="form.name" />
			</view>
			
			<view class="input-wrap">
				<view class="label">身份证号</view>
				<input class="input" placeholder="请输入身份证号" v-model="form.idcard" />
			</view>
			
			<view class="input-wrap">
				<view class="label">有效期</view>
				<checkbox-group @change="changeCheckBox">
					<label>
						<checkbox :checked="isForever" />永久有效
					</label>
				</checkbox-group>
				<picker mode="date" :value="form.idcardValidityTimeEnd" :disabled="isForever" @change="bindDateChange">
					<view class="uni-input">{{form.idcardValidityTimeEnd ? form.idcardValidityTimeEnd : '选择有效期'}}</view>
				</picker>
			</view>
		</view>
		
		<button class="buttom-disabled-btn" :disabled="disabled" @click="goNextPage">下一步</button>
	</view>
</template>

<script>
import { api } from '@/utils/api.js'	
	
export default {
	data() {
		return {
			form: {
				idcard: '',	 // 身份证号
				idcardBackOcrLogId: '', // 身份证反面解析日志ID
				idcardBackUrl: '', //	身份证反面URL
				idcardOcrLogId: '', // 身份证正面解析日志ID
				idcardUrl: '', //	身份证正面URL
				idcardValidityTimeEnd: '', //	身份证有效期结束日期
				idcardValidityTimeStart: '',	// 身份证有效期开始日期	
				issue: '', //	签发城市
				name: '', // 姓名
				address: '',
			},
			isForever: false,
		}
	},
	
	computed: {
		disabled() {
			let res = true
			
			if (this.form.idcardUrl && this.form.idcardBackUrl && this.form.idcard && this.form.name && (this.form.idcardValidityTimeEnd || this.isForever)) {
				res = false
			}
			
			return res
		}
	},
	
	onLoad(options) {
		
	},
	
	methods: {
		// 1.正面 2.反面
		uploadIdCard(type) {
			uni.chooseImage({
				count: 1,
				success: async (chooseImageRes) => {
					uni.showLoading({
							title: '上传中'
					});
					const tempFilePaths = chooseImageRes.tempFilePaths
					const upload = await this.$getFileUpload(tempFilePaths[0])
					if(upload.code === 0) {
						if(type == 1) {
							this.form.idcardUrl = upload.data.src
						} else {
							this.form.idcardBackUrl = upload.data.src
						}
						this.OCRCard(type, upload.data.src)
					}
				}
			})
		},
		
		async OCRCard(type, src) {
			let params = {
				idcardImageUrl: src
			}
			
			if (type === 2) {
				params = {
					idcardBackImageUrl: src
				}
			}
			
			const uploadInfo = await this.$getRequest(api.ocrIdcard, 'POST', params)
			uni.hideLoading()
			
			if(uploadInfo.code === 0){
				if (type === 1) {
					this.form.name = uploadInfo.data.resultJSON.name
					this.form.idcard = uploadInfo.data.resultJSON.num
					this.form.address = uploadInfo.data.resultJSON.address
					this.form.idcardOcrLogId = uploadInfo.data.id
				} else {
					this.form.idcardValidityTimeStart = uploadInfo.data.resultJSON.start_date
					this.form.issue = uploadInfo.data.resultJSON.issue
					this.isForever = uploadInfo.data.resultJSON.is_fake
					this.form.idcardBackOcrLogId = uploadInfo.data.id
					
					if (uploadInfo.data.resultJSON.end_date) {
						const endDate = uploadInfo.data.resultJSON.end_date
						const year = endDate.slice(0, 4)
						const month = endDate.slice(4, 6)
						const day = endDate.slice(6, 8)
						this.form.idcardValidityTimeEnd = `${year}-${month}-${day}`
					}
				}
			}
		},
		
		changeCheckBox(e) {
			if (e.detail.value.length) {
				this.isForever = true
				this.form.idcardValidityTimeEnd = ''
			} else {
				this.isForever = false
			}
		},
		
		bindDateChange(e) {
			this.form.idcardValidityTimeEnd = e.detail.value
		},
		
		goNextPage() {
			uni.setStorageSync('guarantorIdCardInfo', this.form)
			uni.navigateTo({
				url: `/pages/guarantor/uploadCompanyInfo?idcard=${this.form.idcard}&name=${this.form.name}`
			})
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

.sub-title {
	margin-top: 8rpx;
	height: 44rpx;
	font-size: 28rpx;
	line-height: 44rpx;
	color: rgba(10, 15, 45, 0.5);
}

.section-title {
	margin-top: 80rpx;
	margin-bottom: 24rpx;
	display: flex;
	align-items: center;
	font-size: 30rpx;
	font-weight: 500;
	color: #0A0F2D;
}

.border {
	margin-right: 16rpx;
	width: 4rpx;
	height: 24rpx;
	border-radius: 4rpx;
	background: #0A0F2D;
}

.idcard-wrap {
	display: flex;
	justify-content: space-between;
}

.idcard {
	width: 320rpx;
	height: 200rpx;
	border-radius: 24rpx;
	overflow: hidden;
}

.idcard .img {
	width: 100%;
	height: 100%;
}

.input-wrap {
	margin-bottom: 24rpx;
	padding: 0 32rpx;
	width: 100%;
	height: 104rpx;
	border-radius: 16rpx;
	background: rgba(10, 15, 45, 0.04);
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30rpx;
	color: rgba(10, 15, 45, 0.5);
}

.input-wrap .label {
	padding-right: 32rpx;
}

.input-wrap .input {
	flex: 1;
	text-align: right;
}

.idcardDate {
	color: rgba(10, 15, 45, 0.6);
	font-size: 30rpx;
}
</style>
