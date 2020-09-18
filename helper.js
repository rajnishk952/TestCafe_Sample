import { t } from 'testcafe'

export async function login(username, password) {
    await t.typeText('#username', username, { paste: true})
    await t.typeText('#password', password, { paste: true})
    await t.click('.fa-sign-in')
}