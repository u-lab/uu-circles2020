import { convertToArr } from '@/util/array'
/**
 * @typedef {{
 *  author: String|Number,
 *  contents: interviewContent[],
 *  description: String|String[],
 *  title: String,
 *  image: String,
 *  id: String
 * }} interview
 * @typedef {{
 *  answer: String | String[],
 *  image: String,
 *  question: String
 * }} interviewContent
 */

class Interview {
  /** @param { interview } interview */
  constructor(interview) {
    this.author = interview.author
    this.contents = interview.contents.map((o) => new InterviewContent(o))
    this.description = convertToArr(interview.description)
    this.image = interview.image
    this.title = interview.title
    this.id = interview.id
  }
}

class InterviewContent {
  /** @param { interviewContent } content */
  constructor(content) {
    /** @type String[] */
    this.answer = convertToArr(content.answer)
    this.image = content.image
    this.question = content.question
  }
}

export default Interview
