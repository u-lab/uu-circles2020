import sanitizeHTML from 'sanitize-html'
import { kanaToHira } from '@/util/string'

/**
 * @typedef {import('@/type/Circle').default} Circle
 */

/**
 * @param {String} str
 */
const convertToSearchStr = (str) => sanitizeHTML(kanaToHira(str.toLowerCase()))

/**
 * @param {Circle} circle
 * @param {string} search
 * @returns {Boolean}
 */
const isDisplay = (circle, search) => {
  return (
    (circle.name && ~convertToSearchStr(circle.name).indexOf(search)) ||
    (circle.shortname &&
      ~convertToSearchStr(circle.shortname).indexOf(search)) ||
    (circle.id && ~convertToSearchStr(circle.id).indexOf(search)) ||
    (circle.kana && ~convertToSearchStr(circle.kana).indexOf(search)) ||
    (circle.type && sanitizeHTML(circle.type.toLowerCase()) === search)
  )
}

/**
 * 英数字大小区別なし ( 大文字英数字 → 小文字英数字 )
 * ひらカナ区別なし ( カタカナ → ひらがな )
 * サニタイズ
 *
 * @param {Array<Circle>} circles
 * @param {string} search
 */
export const filterCircle = (circles, search) => {
  search = convertToSearchStr(search)
  return circles.filter((circle) => isDisplay(circle, search))
}
