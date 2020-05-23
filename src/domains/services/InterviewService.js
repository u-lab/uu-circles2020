import Interview from '@/type/Interview'
import InterviewsData from '@/src/infra/InterviewsData'

/**
 * Interview データをまとめて取得する
 */
export const getInterviews = () => InterviewsData.map((o) => new Interview(o))

/**
 *
 * @param {Interview[]} interviews
 * @param {String|Number} interviewId
 */
export const findInterviewById = (interviews, interviewId) =>
  interviews.find((o) => o.id === interviewId)
