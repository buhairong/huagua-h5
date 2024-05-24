export const formatTenThousandNumber= (num, unit1='万', unit2='') => {
	let res = ''
	
	if (num || num == 0) {
		if (num < 10000) {
			res = num + unit2
		} else {
			if (num % 10000 === 0) {
				res = num / 10000 + unit1
			} else {
				if (num % 1000 === 0) {
					res = (num/10000).toFixed(1) + unit1
				} else {
					res = (num/10000).toFixed(2) + unit1
				}
			}
		}
	}
	
	return res
}

/**
 * 千分位格式化
 * @param n number
 */
export function formatThousandNumber(n) {
    n = Math.floor(n) // 只考虑整数
 
    const s = n.toString()
    const arr = s.split('').reverse()
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + ',' + prev
            } else {
                return val
            }
        } else {
            return val + prev
        }
    }, '')
}

// 保证金
export function getDeposit(num) {
	if (!num) {
		if (num === 0) {
			return '减免保证金'
		} else {
			return '-'
		}
	} else {
		return `￥${formatThousandNumber(num)}`
	}
}

export function getImageInfo(src, ratio = 0.75) {
	return new Promise((resolve) => {
		uni.getImageInfo({
			src,
			success: (image) => {
				console.log('getImageInfo', image)
				let res = src
				if (image.height > image.width) {
					const w = image.width
					const h = Math.floor(image.width * ratio)
					const x = 0
					const y = Math.floor((image.height - h) / 2)
					res = `${src}?x-oss-process=image/crop,x_${x},y_${y},w_${w},h_${h}`
				}
				console.log('getImageInfo', res)
				resolve(res)
			},
			fail: (err) => {
				console.log(err)
				resolve('')
			}
		})
	})
}

/**
 * 数字转成汉字
 * @params num === 要转换的数字
 * @return 汉字
 * */
export const toChinesNum = (num) => {
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  let unit = ['', '十', '百', '千', '万']
  num = parseInt(num)
  let getWan = (temp) => {
    let strArr = temp.toString().split('').reverse()
    let newNum = ''
    let newArr = []
    strArr.forEach((item, index) => {
      newArr.unshift(item === '0' ? changeNum[item] : changeNum[item] + unit[index])
    })
    let numArr = []
    newArr.forEach((m, n) => {
      if (m !== '零') numArr.push(n)
    })
    if (newArr.length > 1) {
      newArr.forEach((m, n) => {
        if (newArr[newArr.length - 1] === '零') {
          if (n <= numArr[numArr.length - 1]) {
            newNum += m
          }
        } else {
          newNum += m
        }
      })
    } else {
      newNum = newArr[0]
    }

    return newNum
  }
  let overWan = Math.floor(num / 10000)
  let noWan = num % 10000
  if (noWan.toString().length < 4) {
    noWan = '0' + noWan
  }
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}

// 隐藏手机中间四位
export function hideMobile(mobile) {
	const reg = /(\d{3})(\d{4})(\d{4})/
	const res = mobile.replace(reg, '$1****$3')
	return res
}
