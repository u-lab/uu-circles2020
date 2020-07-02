import Author from '@/type/Author'
import AuthorsData from '@/src/infra/AuthorsData'

/**
 * Author データをまとめて取得する
 */
export const getAuthors = () => AuthorsData.map((o) => new Author(o))

/**
 *
 * @param {Author[]} authors
 * @param {String|Number} authorId
 */
export const findAuthorById = (authors, authorId) =>
  authors.find((o) => o.id === authorId)
