/**
 * 英小文字に変換
 *
 * @param {String} str
 */
export const convertToSnsStr = (str) => str.toLowerCase()

/**
 * Facebookかどうか
 *
 * @param {String} str
 */
export const isFacebook = (str) => convertToSnsStr(str) === 'facebook'

/**
 * FormかGoogle Formかどうか
 *
 * @param {String} str
 */
export const isForm = (str) => {
  str = convertToSnsStr(str)
  return str === 'form' || str === 'googleform'
}

/**
 * GitHubかどうか
 *
 * @param {String} str
 */
export const isGithub = (str) => convertToSnsStr(str) === 'github'

/**
 * HomeかHomePageかHpどうか
 *
 * @param {String} str
 */
export const isHome = (str) => {
  str = convertToSnsStr(str)
  return str === 'home' || str === 'homepage' || str === 'hp'
}

/**
 * Instagramかどうか
 *
 * @param {String} str
 */
export const isInstagram = (str) => {
  str = convertToSnsStr(str)
  return str === 'instagram' || str === 'insta'
}

/**
 * Lineかどうか
 *
 * @param {String} str
 */
export const isLine = (str) => convertToSnsStr(str) === 'line'

/**
 * Mailかどうか
 *
 * @param {String} str
 */
export const isMail = (str) => {
  str = convertToSnsStr(str)
  return str === 'mail' || str === 'email'
}

/**
 * Peingかどうか
 *
 * @param {String} str
 */
export const isPeing = (str) => convertToSnsStr(str) === 'peing'

/**
 * Twitterかどうか
 *
 * @param {String} str
 */
export const isTwitter = (str) => convertToSnsStr(str) === 'twitter'

/**
 * Youtubeかどうか
 *
 * @param {String} str
 */
export const isYoutube = (str) => convertToSnsStr(str) === 'youtube'
