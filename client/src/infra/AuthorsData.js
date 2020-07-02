class AuthorsData {
  constructor() {
    const json =
      process.env.NODE_ENV !== 'test'
        ? require('../../assets/json/authors.json')
        : require('../../assets/test/json/authors.json')
    this.json = json
  }

  /**
   * @returns {Array}
   */
  toArray() {
    return this.json
  }
}

export default new AuthorsData().toArray()
