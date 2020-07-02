const routes = [
  '/',
  '/gacha',
  '/interviews',
  '/about/company',
  '/about/creater',
  '/circles/u-lab',
]

describe('すべてのページで500エラーが表示されない', () => {
  let page

  beforeAll(async () => {
    jest.setTimeout(50000)
    page = await browser.newPage()
  })

  afterAll(async () => {
    await page.close()
  })

  for (const route of routes) {
    it(`エラーが表示されない(${route})`, async () => {
      await page.goto(`http://localhost:3000${route}`)

      const text = await page.evaluate(
        () => document.querySelector('h1').textContent
      )
      expect(text).not.toBe('An error occurred')
      expect(text).not.toBe('404 Not Found')
    })
  }
})
