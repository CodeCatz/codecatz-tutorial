function saveOs(os) {
  $.cookie("os", os, { expires: 1825, path: '/' }); // expires in 5 years
}

function loadOs() {
  var osFromCookie = $.cookie("os");
  if(osFromCookie) {
    $(".link-" + osFromCookie).click();
  } else if(detectOs()) {
    $(".link-" + detectOs()).click();
  } else {
    $(".link-wins").click();
  }
  return osFromCookie;
}

function detectOs() {
  try {
    if (navigator.appVersion.match(/wins/i)) {
      return "wins";
    } else {
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
    saveOs("wins");
    $(".link-wins").addClass("active").siblings().removeClass("active");
    $(".os-switch").children(".osx").hide();
    $(".os-switch").children(".wins").show();
  });

  $(".link-osx").click(function(event) {
    event.preventDefault();
    saveOs("osx");
    $(".link-osx").addClass("active").siblings().removeClass("active");
    $(".os-switch").children(".wins").hide();
    $(".os-switch").children(".osx").show();
  });
}

$(document).ready(function() {
  initializeOsSwitchers();
  loadOs();
});
