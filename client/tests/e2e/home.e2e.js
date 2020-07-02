describe('トップページ', () => {
  let page

  beforeAll(async () => {
    jest.setTimeout(50000)
    page = await browser.newPage()
    await page.goto('http://localhost:3000')
  })

  afterAll(async () => {
    await page.close()
  })

  it('ページが表示されること', async () => {
    const text = await page.evaluate(
      () => document.querySelector('h1').textContent
    )
    expect(text).toBe('宇都宮大学のサークルビラ一覧')
  })
})
