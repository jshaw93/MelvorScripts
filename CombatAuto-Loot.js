// ==UserScript==
// @name         Combat Auto-Loot
// @namespace    http://tampermonkey.net/
// @version      2024-03-11
// @description  try to take over the world!
// @author       You
// @match        https://melvoridle.com/index_game.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=melvoridle.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    function b() {
        try {
            var unparsed = document.querySelector('#combat-loot > div > div > div > div:nth-child(1) > h5').textContent;
            var button = document.querySelector('#combat-loot > div > div > div > div:nth-child(2) > h5 > button');
            unparsed = unparsed.split(' ');
            var current = parseInt(unparsed[4]);
            if(current >= 90) {
                button.click();
            }
        } catch (err) {}
    }
    var a768874 = setInterval(b, 500);
})();
