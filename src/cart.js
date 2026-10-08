function applyCoupons(total, coupons) {
  const discountPercent = coupons.reduce((sum, coupon) => sum + coupon, 0);

  // Intended behavior: the combined discount should never exceed 50%.
  return total - total * (discountPercent / 100);
}

module.exports = { applyCoupons };
