// ==UserScript==
// @name         Combat Auto-Eat
// @namespace    http://tampermonkey.net/
// @version      2024-03-23
// @description  try to take over the world!
// @author       You
// @match        https://melvoridle.com/index_game.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=melvoridle.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    function d() {
        var maxHit = parseInt(document.querySelector('#combat-enemy-strength-bonus').textContent.replace('(', '').replace(')', '').replace(',', ''));
        var currentHealth = parseInt(document.querySelector('#combat-player-hitpoints-current').textContent.replace(',', ''));
        var eatButton = document.querySelector('#combat-food-container > div > button.btn.btn-outline-secondary.text-combat-smoke.font-size-sm');
        if(maxHit >= currentHealth) {
            eatButton.click();
        }
    }
    var i57487682 = setInterval(d, 500);
})();
