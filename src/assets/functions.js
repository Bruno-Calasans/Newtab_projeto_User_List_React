export function moneyFormat(string, cifra='R$') {

    const valor = string
      .replace(/\D/g, '')
      .replace(/^0*/, '')
      .padStart(3, '0')
      
    let p1 = valor.slice(0, -2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    let p2 = valor.slice(-2)

    return  `${cifra} ${p1},${p2}`
}

export function numericFormat(string) {
    return Number(string.replace(/[^\d,]+/gi, '').replace(/,/gi, '.'))
}
