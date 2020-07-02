class InterviewsData {
  constructor() {
    const json =
      process.env.NODE_ENV !== 'test'
        ? require('../../assets/json/interviews.json')
        : require('../../assets/test/json/interviews.json')
    this.json = json
  }

  /**
   * @returns {Array}
   */
  toArray() {
    return this.json
  }
}

export default new InterviewsData().toArray()
