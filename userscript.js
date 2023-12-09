if ((window.location.href).includes('editor') && (window.location.href).includes('scratch.mit.edu/')) {
  var scratch = document.getElementById('app')._reactRootContainer._internalRoot.current.child.pendingProps.store.getState()
  scratch.scratchGui.mode.hasEverEnteredEditor = false
}

var data1;
fetch("https://raw.githubusercontent.com/Shall0e/shallowbots/main/multiplayerGames.json")
  .then(response => response.text())
  .then(text => (data = text))
  .catch(error => console.error(error));
eval('var data = '+data)

var usernames = [
  'dsc.gg/real-scratchers',
  'dsc.gg/scratchbots',
  'dsc.gg/multiplayerbot',
  'dsc.gg/griffbot'
]

function searchData(searcha, target) {
  for (let i = 0; i < searcha.length; i++) {
    if ((searcha[i].projecturl).replaceAll('/', '') == target.replaceAll('/', '')) {
      return searcha[i];
    }
  }
  return null;
}


if ((searchData(data, window.location.href) !== null)) {
  var projectObj = (searchData(data, window.location.href))
  var scratch = document.getElementById('app')._reactRootContainer._internalRoot.current.child.pendingProps.store.getState()
  //ignore: custom runtime functions
  // scratch.scratchGui.vm.runtime.getTargetForStage().lookupVariableByNameAndType(name, type).value = value
  // scratch.scratchGui.vm.runtime.getSpriteTargetByName(stageOrSprite).lookupVariableByNameAndType(name, type).value = value
  function setUsername(username) {
    scratch.scratchGui.vm.runtime.ioDevices.userData._username = username
  }
  setUsername((Math.floor(Math.random() * 99)) + ' / ' + usernames[Math.round(Math.random() * (usernames.length - 1) + 0)]);
  scratch.permissions.scratcher = true;
  scratch.permissions.new_scratcher = false;
  var x = (Math.random() * (5300 - 2400) + 2400);
  var y = (Math.random() * (1000 - 50) + 50)
  scratch.scratchGui.vm.runtime.greenFlag();
  scratch.scratchGui.vm.greenFlag()

  function setXY(xxx, yyy) {
    x = xxx
    y = yyy
    eval(projectObj.rules.customCode);
  }

  function getXY() {
    return {
      'x': x,
      'y': y
    }
  }
  setInterval(function() {
    eval(projectObj.rules.customCode);
  }, 2)
}
