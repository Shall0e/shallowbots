// ==UserScript==
// @name         Shallow Bots
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://scratch.mit.edu/projects/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
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
