// start the scratch object "s"
const s = (document.getElementById('app')._reactRootContainer._internalRoot.current.child.pendingProps.store.getState());
const d = (await fetch('https://raw.githubusercontent.com/Shall0e/shallowbots/main/multiplayerGames.json').then(response => response.text()));

// if editor
if ((window.location.href).includes('editor') && (window.location.href).includes('scratch.mit.edu/')) {s.scratchGui.mode.hasEverEnteredEditor = false};

// global functions
function setUsername(username) {s.scratchGui.vm.runtime.ioDevices.userData._username = username};
function searchData(target) {return d[target]};
function modifyVar(name, varName, value) {
  if (name !== 'stage') {s.scratchGui.vm.runtime.getSpriteTargetByName(name).lookupVariableByNameAndType(varName, '').value = value}
  else {s.scratchGui.vm.runtime.getTargetForStage().lookupVariableByNameAndType(varName, '').value = value}};
