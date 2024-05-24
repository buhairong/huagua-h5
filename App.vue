<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		},
		globalData: {
			
		},
	}
</script>

<style>
* {
	box-sizing: border-box;
}

.uni-label-pointer {
	display: flex;
	align-items: center;
	color: #3D3D3D;
}

.uni-label-pointer .uni-checkbox-input {
	width: 28rpx;
	height: 28rpx;
	border-radius: 8rpx;
	background: rgba(0, 0, 0, 0);
	border: 2rpx solid #A1A1A1;
}

.uni-label-pointer .uni-checkbox-input.uni-checkbox-input-checked {
	border-color: #A1A1A1;
	color: #0A0F2D !important;
}

uni-checkbox:not([disabled]) .uni-checkbox-input:hover {
	border-color: #A1A1A1;
}

.buttom-disabled-btn {
	width: 100%;
	height: 118rpx;
	border-radius: 16rpx;
	background: #0A0F2D;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 34rpx;
	font-weight: 500;
	color: #FFFFFF;
}

.buttom-disabled-btn::after {
	border: none;
}

uni-button.buttom-disabled-btn[disabled="true"] {
	background: rgba(10, 15, 45, 0.6);
	color: #FFFFFF;
}

.page-card {
	padding: 40rpx 32rpx;
	border-radius: 24rpx;
	background: #FFFFFF;
	box-shadow: 0px -2px 32px 0px rgba(10, 15, 45, 0.02),0px 8px 24px 0px rgba(10, 15, 45, 0.06);
}

uni-actionsheet {
	line-height: 112rpx;
}
</style>
