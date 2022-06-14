export default class MainColor {
  constructor(r, g, b, a) {
    this.fullColor = `rgba(${r}, ${g}, ${b}, ${a})`
    this.colorPart = `rgba(${r}, ${g}, ${b}, `
    this.alphaChannel = a
  }

  parseColor(color) {
    return /(rgba\(\d+, \d+, \d+, )(1|(0\.\d+))\)/g.exec(color)
  }

  get full() {
    return this.fullColor
  }

  set full(color) {
    const parsed = this.parseColor(color)

    this.fullColor = parsed[0]
    this.colorPart = parsed[1]
    this.alphaChannel = Math.floor(parsed[2] * 100)
  }

  get part() {
    return this.colorPart
  }

  get alpha() {
    return this.alphaChannel
  }

  set alpha(value) {
    this.alphaChannel = value
    this.fullColor = this.colorPart + value + ')'
  }
}
