import { convertToArr } from '~/util/array'
const PUBLIC_LIST = {
  public: '公認団体',
  private: '非公認団体',
  student: '学生団体',
  send: '届出団体'
}

// const TYPE_LIST = [
//   { name: '運動系', type: 'sports' },
//   { name: '音楽系', type: 'music' },
//   { name: '文化系', type: 'culture' },
//   { name: '製作系', type: 'mono' },
//   { name: '農業系', type: 'agri' }
// ]

class Circle {
  constructor(circle) {
    this.date = convertToArr(circle.date) ? convertToArr(circle.date) : ['なし']
    this.description = convertToArr(circle.description)
      ? convertToArr(circle.description)
      : ['なし']
    this.image = circle.image
    this.kana = circle.kana
    this._name = circle.name
    this.public = circle.public
    this._shortname = circle.shortname
    this.sns = circle.sns
    this.subImage = circle.subImage
    this.type = circle.type
    this.id = circle.id
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
    return PUBLIC_LIST[this.public]
  }

  /**
   * 部であるか
   *
   * @return { Boolean }
   */
  isClub() {
    return ~this.name.indexOf('部')
  }
}

export default Circle
