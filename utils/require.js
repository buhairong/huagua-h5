const serverUrl =
    process.env.NODE_ENV === "development"
        ? "https://uat-api.51cheyaoshi.com/"
        : "https://api.51cheyaoshi.com/"
				
// const serverUrl = "https://api.51cheyaoshi.com/"
				
const uploadUrl = "https://api.51cheyaoshi.com/app/sysFiles/upload"

export const getRequest = (url, method, data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: serverUrl + url,
			method: method,
			data: data,
			headers: {
				"content-type": "multipart/form-data",
			},
			success: (res) => {
				resolve(res.data)
			},
			fail(err) {
				console.log(err)
			},
		})
	})
}

export const getFileUpload = (path) => {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: uploadUrl,
			filePath: path,
			name: 'file',
			formData: {
				'file': path
			},
			success: (uploadFileRes) => {
				const result = JSON.parse(uploadFileRes.data)
				if (result.code != 0 ) {
					uni.showToast({
						title: result.msg,
						duration: 2000,
						icon: 'none'
					})
				}
				resolve(result)
			},
			fail: (err) => {
				console.log(err)
			}
		})
	})
}
