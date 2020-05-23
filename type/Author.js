import { convertToArr } from '@/util/array'
/**
 * @typedef {{
 *  description: String|String[],
 *  image: String,
 *  name: String,
 *  job: String,
 *  id: String
 * }} author
 */

class Author {
  /** @param { author } author */
  constructor(author) {
    /** @type String[] */
    this.description = convertToArr(author.description)
    this.image = author.image
    this.name = author.name
    this.job = author.job
    this.id = author.id
  }
}

export default Author
