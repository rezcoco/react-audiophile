function calculateVat(total) {
    const p = 2.25 / 100
    return Math.floor((total * p))
}

export default calculateVat