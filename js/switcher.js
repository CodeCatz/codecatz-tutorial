function updateOs(os) {
  localStorage.setItem('os',os);
}

function loadOs() {
  var storedOs = localStorage.getItem('os');
  if(storedOs) {
    $(".link-" + storedOs).click();
  } else if(detectOs()) {
    $(".link-" + detectOs()).click();
  } else {
    $(".link-wins").click();
  }
  console.log(storedOs);
  return storedOs;
}

function detectOs() {
  try {
    if (navigator.appVersion.match(/wins/i)) {
      updateOs("wins");
      return "wins";
    } else {
      updateOs("osx");
      return "osx";
    }
  } catch(e) {
    return false;
  }
}

function initializeOsSwitchers() {
  $(".os-switch").before("<div class='os-picker'>Your operating system: <a href='#' class='link-wins'>Windows</a> | <a href='#' class='link-osx'>OS X</a></div>");

  $(".link-wins").click(function(event) {
    event.preventDefault();
    updateOs("wins");
    $(".link-wins").addClass("active").siblings().removeClass("active");
    $(".os-switch").children(".osx").hide();
    $(".os-switch").children(".wins").show();
  });

  $(".link-osx").click(function(event) {
    event.preventDefault();
    updateOs("osx");
    $(".link-osx").addClass("active").siblings().removeClass("active");
    $(".os-switch").children(".wins").hide();
    $(".os-switch").children(".osx").show();
  });
}

$(document).ready(function() {
  initializeOsSwitchers();
  loadOs();
});
