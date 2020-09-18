import { Selector } from 'testcafe'

fixture `Sample test in TestCafe`
    .page `https://www.google.com`

test('Google Search Test', async t => {
    await t.typeText('input[name="q"]', 'BrowserStack', { paste: true })
    await t.pressKey('enter')
    const pageTitle = Selector('title').innerText
    await t.expect(pageTitle).contains('BrowserStack - Google Search')
})