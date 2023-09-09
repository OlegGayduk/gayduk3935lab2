import {initApp} from './ui/index.jsx'
import { LocalStorage } from './ui/Utils.js'

const androidRegex = /android/
const iosRegex = /ios/

async function setupUI() {
    initApp()
}

document.addEventListener('DOMContentLoaded', () => {
    setupUI().then()
})

// TODO Description
function getUrlVars() {
    let params = []
    let str
    let url = window.location.search.substr(1)
    url = url.split('&')
    for (let i in url) {
        str = url[i].split('=')
        params[str[0]] = str[1]
    }
    return params
}

global.getUrlVars = getUrlVars
global.LocalStorage = LocalStorage 