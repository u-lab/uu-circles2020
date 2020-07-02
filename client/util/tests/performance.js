import { performance } from 'perf_hooks'

/**
 * 計測用の関数
 *  @param {Function} callback
 */
export const measurePerf = (callback) => {
  const start = performance.now()
  callback()
  const end = performance.now()
  return end - start
}

/**
 * 計測用の関数(フォーマットする)
 *  @param {Function} callback
 *  @param {String} label
 */
export const measurePerfLog = (callback, label = 'timer') =>
  console.log(label + ' = ' + measurePerf(callback) + 'ms')
