class Rektangel{
  constructor(length, width) {
    if (this.wrongSize(length, width)) {
      return null
    }

    this.length = length
    this.width = width
  }

  setSize(length, width) {
    if (this.wrongSize(length, width)) {
      return 'Felaktig storlek'
    }

    this.length = length
    this.width = width
  }

  getArea() {
    return this.length * this.width
  }

  isSquare() {
    return this.length === this.width
  }

  // Om storleken är negativt eller om bredden är större än längden så är det inte godkända
  wrongSize(length, width) {
    if (length <= 0 || width <= 0) {
      return true
    }
    return width > length
  }
}

module.exports = Rektangel
