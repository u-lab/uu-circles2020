/**
 * カタカナをひらがなに変換
 *
 * @param {String} str
 */
export function kanaToHira(str) {
  return str.replace(/[\u30A1-\u30F6]/g, function(match) {
    const chr = match.charCodeAt(0) - 0x60
    return String.fromCharCode(chr)
  })
}
