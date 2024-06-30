export const getPriceSavings = (beforePrice, afterPrice) => {
   const savings = beforePrice - afterPrice
   return savings
}

export const formatToRupiah = (amount) => {
   if (typeof amount !== 'number') {
      throw new TypeError("Jumlah harus berupa angka");
   }

   const rupiahAmount = "Rp. " + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
   return rupiahAmount;
}

