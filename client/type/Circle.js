import { convertToArr } from '~/util/array'
const PUBLIC_LIST = {
  public: '公認団体',
  private: '非公認団体',
  student: '学生団体',
  send: '届出団体',
}

/**
 * @typedef {{
 *  detail: String,
 *  date: String|String[]
 *  description: String|String[],
 *  kana: String|null,
 *  image: String,
 *  name: String,
 *  public: String,
 *  shortname: String,
 *  sns: Object,
 *  subImage: String[]
 *  type: String,
 *  id: String
 * }} circle
 */

class Circle {
  /**
   * @param { circle } circle
   */
  constructor(circle) {
    this.detail = circle.detail || undefined
    /** @type String[] */
    this.description = convertToArr(circle.description)
      ? convertToArr(circle.description)
      : ['なし']
    this.image = circle.image
    this.kana = circle.kana
    this._name = circle.name
    this.public = circle.public || undefined
    this._shortname = circle.shortname
    this.sns = circle.sns
    this.subImage = circle.subImage
    this.type = circle.type
    this.id = circle.id

    this.setDate(circle)
  }

  /**
   * 正式名称の取得
   */
  get name() {
    return this._name || this._shortname
  }

  /**
   * 省略名の取得
   */
  get shortname() {
    return this._shortname || this._name
  }

  /**
   * @return {String}
   */
  get publicName() {
    return this.public ? PUBLIC_LIST[this.public] : ''
  }

  /**
   * 部であるか
   *
   * @return { Boolean }
   */
  isClub() {
    return ~this.name.indexOf('部')
  }

  /**
   * 公認団体か
   */
  isPublic() {
    return this.public === 'public'
  }

  /**
   * 非公認団体か
   */
  isPrivate() {
    return this.public === 'private'
  }

  /**
   * 届出団体か
   */
  isSend() {
    return this.public === 'send'
  }

  /**
   * 学生団体か
   */
  isStudent() {
    return this.public === 'student'
  }

  /**
   * @param {circle} circle
   */
  setDate(circle) {
    /** @type String[] */
    this.date = null
    if (circle.date) {
      this.date = convertToArr(circle.date)
    }

    if (circle.data) {
      this.date = convertToArr(circle.data)
    }

    if (!this.date || this.date.length === 0) {
      this.date = ['なし']
    }
  }
}

export default Circle
