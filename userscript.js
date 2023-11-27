// ==UserScript==
// @name         Shallow Bots
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://scratch.mit.edu/projects/*
// @downloadURL  https://github.com/Shall0e/shallowbots/blob/main/userscript.js
// @updateURL    https://github.com/Shall0e/shallowbots/blob/main/userscript.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
  'use strict';
  var games;
  GM_xmlhttpRequest({
    method: "GET",
    url: "https://example.com/",
    headers: {
      "Content-Type": "application/json"
    },
    onload: function(response) {
      console.log(response.responseText);
      games = (response.responseText)
    }
  });
  window.onload = function() {
    alert('SHALLOWBOT LOADED, press green-flag to launch.')
    var scratch = document.getElementById('app')._reactRootContainer._internalRoot.current.child.pendingProps.store.getState()
    scratch.scratchGui.vm.runtime.ioDevices.userData._username = (Math.floor(Math.random() * 999)) + '//   sub to @shall0e on YT'
    scratch.permissions.scratcher = true
    scratch.permissions.educator = true
    scratch.scratchGui.mode.hasEverEnteredEditor = false
    scratch.permissions.new_scratcher = false
    scratch.permissions.educator_invitee = false
    scratch.scratchGui.vm.runtime.greenFlag()
    scratch.scratchGui.vm.greenFlag()
  }
})();
