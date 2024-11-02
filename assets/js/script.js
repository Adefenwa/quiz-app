'use strict;'
import {API_URL} from './config.js'
import { getJSON } from './helpers.js'

// LOAD API
const loadAPI = async function() {
    try {
        const data = await getJSON(`${API_URL}`)
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

loadAPI()

// TOGGLE SWITCH MODE FUNCTIONALITY
const sModeEL = document.querySelector('.switch__mode');
const containerBody = document.querySelector('body')
const iconDarkMode = document.querySelector('.dark-mode')
const iconLightMode = document.querySelector('.light-mode')
const svgDM = document.querySelector('#dm')
const svgLM = document.querySelector('#lm')
const whiteSwitch = document.querySelector('.switch')
 const toggleSwitch = function() {
    sModeEL.addEventListener('click', function(){
        containerBody.classList.toggle('dark__mode')
        iconDarkMode.classList.toggle('icon__dark-mode')
        iconLightMode.classList.toggle('icon__light-mode')
        svgDM.classList.toggle('icon__dm')
        svgLM.classList.toggle('icon__lm')
        whiteSwitch.classList.toggle('switch__two')
    })
 }

 toggleSwitch()