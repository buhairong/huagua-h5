export function PMT (rate, nperiod, pv, fv, type) {
		if (!fv) fv = 0
    if (!type) type = 0
		if (rate == 0) return -(pv + fv)/nperiod
		
		const pvif = Math.pow(1 + rate, nperiod)
		
    let pmt = rate / (pvif - 1) * -(pv * pvif + fv)
		if (type) {
        pmt /= (1 + rate)
    }
		return pmt
}

function IPMT(pv, pmt, rate, per) { 
    const tmp = Math.pow(1 + rate, per)
    return 0 - (pv * tmp * rate + pmt * (tmp - 1))
}

export function PPMT(rate, per, nper, pv, fv, type) { 
    if (per < 1 || (per >= nper + 1)) return null
    const pmt = PMT(rate, nper, pv, fv, type)
    const ipmt = IPMT(pv, pmt, rate, per - 1)
    return pmt - ipmt
}