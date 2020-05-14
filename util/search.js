import sanitizeHTML from 'sanitize-html'
import { kanaToHira } from '@/util/string'

const isDisplay = (circle, search) => {
  return (
    ('name' in circle &&
      ~sanitizeHTML(kanaToHira(circle.name.toLowerCase())).indexOf(search)) ||
    ('shortname' in circle &&
      ~sanitizeHTML(kanaToHira(circle.shortname.toLowerCase())).indexOf(
        search
      )) ||
    ('id' in circle &&
      ~sanitizeHTML(kanaToHira(circle.id.toLowerCase())).indexOf(search)) ||
    ('kana' in circle &&
      ~sanitizeHTML(kanaToHira(circle.kana.toLowerCase())).indexOf(search)) ||
    ('type' in circle && sanitizeHTML(circle.type.toLowerCase()) === search)
  )
}

/**
 * 英数字大小区別なし ( 大文字英数字 → 小文字英数字 )
 * ひらカナ区別なし ( カタカナ → ひらがな )
 * サニタイズ
 */
export const filterCircle = (circles, search) => {
  sanitizeHTML(kanaToHira(search.toLowerCase()))
  return circles.filter((circle) => {
    return isDisplay(circle, search)
  })
}
