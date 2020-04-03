/**
 * 英小文字に変換
 *
 * @param {String} str
 */
export function convertToSnsStr(str) {
  return str.toLowerCase()
}

/**
 * Facebookかどうか
 *
 * @param {String} str
 */
export function isFacebook(str) {
  str = convertToSnsStr(str)
  return str === 'facebook'
}

/**
 * FormかGoogle Formかどうか
 *
 * @param {String} str
 */
export function isForm(str) {
  str = convertToSnsStr(str)
  return str === 'form' || str === 'googleform'
}

/**
 * GitHubかどうか
 *
 * @param {String} str
 */
export function isGithub(str) {
  str = convertToSnsStr(str)
  return str === 'github'
}

/**
 * HomeかHomePageかHpどうか
 *
 * @param {String} str
 */
export function isHome(str) {
  str = convertToSnsStr(str)
  return str === 'home' || str === 'homepage' || str === 'hp'
}

/**
 * Instagramかどうか
 *
 * @param {String} str
 */
export function isInstagram(str) {
  str = convertToSnsStr(str)
  return str === 'instagram' || str === 'insta'
}

/**
 * Lineかどうか
 *
 * @param {String} str
 */
export function isLine(str) {
  str = convertToSnsStr(str)
  return str === 'line'
}

/**
 * Mailかどうか
 *
 * @param {String} str
 */
export function isMail(str) {
  str = convertToSnsStr(str)
  return str === 'mail' || str === 'email'
}

/**
 * Peingかどうか
 *
 * @param {String} str
 */
export function isPeing(str) {
  str = convertToSnsStr(str)
  return str === 'peing'
}

/**
 * Twitterかどうか
 *
 * @param {String} str
 */
export function isTwitter(str) {
  str = convertToSnsStr(str)
  return str === 'twitter'
}

/**
 * Youtubeかどうか
 *
 * @param {String} str
 */
export function isYoutube(str) {
  str = convertToSnsStr(str)
  return str === 'youtube'
}
