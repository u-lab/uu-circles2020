class CircleData {
  constructor() {
    const json =
      process.env.NODE_ENV !== 'test'
        ? require('../../assets/json/circles.json')
        : require('../../assets/test/json/circles.json')
    this.json = json
  }

  /**
   * @returns {Array}
   */
  toArray() {
    return this.json
  }
}

export default new CircleData().toArray()
