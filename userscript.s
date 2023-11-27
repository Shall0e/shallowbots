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
