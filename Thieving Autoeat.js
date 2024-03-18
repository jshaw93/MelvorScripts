// ==UserScript==
// @name         Thieving Autoeat
// @namespace    http://tampermonkey.net/
// @version      2024-03-01
// @description  try to take over the world!
// @author       Lore
// @match        https://melvoridle.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=melvoridle.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    function d() {
        try {
            var current = parseInt(document.querySelector('#thieving-player-hitpoints-current').textContent.replace(',', ''));
            var max = parseInt(document.querySelector('#thieving-player-hitpoints-max').textContent.replace(',', ''));
            var food = parseInt(document.querySelector('#thieving-food-container > div > button.btn.btn-outline-secondary.text-combat-smoke.font-size-sm > span:nth-child(3)').textContent.replace(',', '').replace('+', '').replace(' HP', ''));
            var button = document.querySelector('#thieving-food-container > div > button.btn.btn-outline-secondary.text-combat-smoke.font-size-sm')
        } catch (err) {
            return;
        }
        if (current < max - food) {
            button.click();
        }
    }
    var i = setInterval(d, 500);
})();
