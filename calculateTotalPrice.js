function calculateTotalPrice(price, customerType, quantity) {

  function checkQuantity(rabatt) {
    if (quantity > 2) rabatt *= 0.95
    return price * quantity * rabatt
  }

  /* Switch case för customerType */
  switch (customerType) {
    case "regular":
      return checkQuantity(1)
    case "member":
      return checkQuantity(0.9)
    case "vip":
      return checkQuantity(0.8)
    default:
      return false
  }
}

module.exports = calculateTotalPrice
