import sanitizeHTML from 'sanitize-html'
import { kanaToHira } from '@/util/string'

const convertToSearchStr = (str) => sanitizeHTML(kanaToHira(str.toLowerCase()))

const isDisplay = (circle, search) => {
  return (
    ('name' in circle && ~convertToSearchStr(circle.name).indexOf(search)) ||
    ('shortname' in circle &&
      ~convertToSearchStr(circle.shortname).indexOf(search)) ||
    ('id' in circle && ~convertToSearchStr(circle.id).indexOf(search)) ||
    ('kana' in circle && ~convertToSearchStr(circle.kana).indexOf(search)) ||
    ('type' in circle && sanitizeHTML(circle.type.toLowerCase()) === search)
  )
}

/**
 * 英数字大小区別なし ( 大文字英数字 → 小文字英数字 )
 * ひらカナ区別なし ( カタカナ → ひらがな )
 * サニタイズ
 */
export const filterCircle = (circles, search) => {
  search = convertToSearchStr(search)
  return circles.filter((circle) => isDisplay(circle, search))
}
