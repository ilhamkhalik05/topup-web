export const getPriceSavings = (beforePrice, afterPrice) => {
   const savings = beforePrice - afterPrice
   return savings
}

export const formatToRupiah = (amount) => {
   if (typeof amount !== 'number') {
      throw new TypeError("Jumlah harus berupa angka");
   }

   const rupiahAmount = amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
   return rupiahAmount;
}

export const getStockInPercent = (stock) => {
   if (typeof stock !== 'number') {
      throw new TypeError("Stok harus berupa angka");
   }

   const stockInPercent = (stock / 100) * 100
   return `${stockInPercent}%`
}