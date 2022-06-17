export default class MainColor {
  constructor(r, g, b, a) {
    this.fullColor = `rgba(${r}, ${g}, ${b}, ${a})`
    this.colorPart = `rgba(${r}, ${g}, ${b}, `
    this.alphaChannel = a
  }

  _parseColor(color) {
    return /(rgba\(\d+, \d+, \d+, )(1|(0\.\d+))\)/g.exec(color)
  }

  _parsePart(part) {
    return /rgba\((\d+), (\d+), (\d+), /g.exec(part)
  }

  changeIntensity(deltaY) {
    const limit = deltaY > 0 ? 255 : 0

    const parsedRgb = this._parsePart(this.colorPart)
      .slice(1)
      .map((i) => Number(i))

    if (!parsedRgb.includes(limit)) {
      const value = (deltaY / Math.abs(deltaY)) * 4
      const changedRgb = parsedRgb.map((i) => {
        let newValue = i + value

        if (newValue > 255) newValue = 255
        if (newValue < 0) newValue = 0

        return newValue
      })

      this.part = `rgba(${changedRgb[0]}, ${changedRgb[1]}, ${changedRgb[2]}, `
    }
  }

  get full() {
    return this.fullColor
  }

  set full(color) {
    const parsed = this._parseColor(color)

    this.fullColor = parsed[0]
    this.colorPart = parsed[1]
    this.alphaChannel = Math.floor(parsed[2] * 100)
  }

  get part() {
    return this.colorPart
  }

  set part(part) {
    this.fullColor = part + this.alphaChannel + ')'
    this.colorPart = part
  }

  get alpha() {
    return this.alphaChannel
  }

  set alpha(value) {
    this.alphaChannel = value
    this.fullColor = this.colorPart + value + ')'
  }
}
