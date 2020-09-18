import { Selector } from 'testcafe'
import { login } from '../helper'

fixture `Login Test`
    .page `https://the-internet.herokuapp.com/login`

test('User cannot login with invalid credentials', async t => {
    const loginButton = Selector('.fa-sign-in')
    await t.expect(loginButton.exists).ok()

    await login('invalid_user', 'invalid_pass')

    const failMessage = Selector('#flash-messages').innerText
    await t.expect(failMessage).contains('Your username is invalid!')
})

test('User can login with valid credentials', async t => {
    await t.navigateTo('https://the-internet.herokuapp.com/login')

    const loginButton = Selector('.fa-sign-in')
    await t.expect(loginButton.exists).ok()

    await login('tomsmith', 'SuperSecretPassword!')

    const successMessage = Selector('#flash-messages').innerText
    await t.expect(successMessage).contains('You logged into a secure area!')

    const signOut = Selector('.icon-signout')
    await t.click(signOut)
    const logoutMessage = Selector('#flash-messages').innerText
    await t.expect(logoutMessage).contains('You logged out of the secure area!')
})