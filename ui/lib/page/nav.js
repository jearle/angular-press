
var menuButton;
var hamburgerBlocks;
var nav;
var navList;
var links;

var shownElements;

var showing = false;

var navAnimating = false;
var navListAnimating = false;
var linksAnimating = false;

function isAnimating () {
  return (navAnimating || navListAnimating || linksAnimating);
}

function createDelayTimes (count, delay) {
  var delayTimes = [delay];
  for (var i = 1 ; i < count; i++) {
    var previousDelayTime = delayTimes[i - 1];

    delayTimes.push(previousDelayTime + delay);
  }
  return delayTimes;
}

function createLinkDelayTimes (timeOverride) {
  return createDelayTimes(links.length, timeOverride || 150);
}

function beginAnimationTimer (link, hide, delay) {
  setTimeout(function () {
    if (hide) {
      link.removeClass('shown');
    } else {
      link.addClass('shown');
    }
  }, delay);
}

function animateLinks (hide) {
  var delayTimes = createLinkDelayTimes();
  var finalDelayTime = delayTimes[links.length - 1]

  links.each(function (i) {

    var link = $(this);
    var delay = delayTimes[i];

    beginAnimationTimer(link, hide, delay);
    
  });

  return finalDelayTime;
}

function transitionEnd (element, callback) {
  element.one(
    'transitionend',
    function () {
      callback();
    }
  );
}

function showLinks (callback) {
  animateLinks();

  var count = 0;

  linksAnimating = true;

  transitionEnd(links, function () {
    count++;

    if (count === links.length) {
      linksAnimating = false;
      doneAnimating();
    }

    if (count === links.length && callback) {
      callback();
    }
  });
}

function hideLinks (callback) {
  links.removeClass('shown');
  var count = 0;
  linksAnimating = true;
  transitionEnd(links, function () {
    count++;
    if (count === links.length) {
      linksAnimating = false;
      doneAnimating();
    }
    if (count === links.length && callback) {
      callback();
    }
  });
}

function showNav (callback) {
  nav.addClass('shown');

  navAnimating = true;
  transitionEnd(nav, function () {
    navAnimating = false;
    doneAnimating();
  });

}

function hideNav (callback) {
  nav.addClass('positive-z');
  nav.removeClass('shown');

  navAnimating = true;
  
  transitionEnd(nav, function () {
    nav.removeClass('positive-z');
    
    navAnimating = false;
    doneAnimating();
    
    if (callback) {
      callback();
    }

  });
}

function showNavList (callback) {
  navList.addClass('shown');
  navListAnimating = true;
  transitionEnd(navList, function () {
    navListAnimating = false;
    doneAnimating();
  });
}

function hideNavList (callback) {
  navList.removeClass('shown');
  navListAnimating = true;
  transitionEnd(navList, function () {
    navListAnimating = false;
    doneAnimating();
  });
}

function morphHamburgerToLine () {
  var firstBlock = $(hamburgerBlocks[0]);
  var middleBlock = $(hamburgerBlocks[1]);
  var lastBlock = $(hamburgerBlocks[2]);
  
  firstBlock.addClass('positive-top-offset');
  lastBlock.addClass('negative-top-offset');

  firstBlock.removeClass('x-1');
  lastBlock.removeClass('x-3');

  function doneRemovingXClasses () {
    middleBlock.removeClass('x-2');
  }

  transitionEnd(firstBlock, doneRemovingXClasses);

}

function morphHamburgerToX () {
  var firstBlock = $(hamburgerBlocks[0]);
  var middleBlock = $(hamburgerBlocks[1]);
  var lastBlock = $(hamburgerBlocks[2]);
  console.log('also fired');

  // firstBlock.removeClass('positive-top-offset');
  // lastBlock.removeClass('negative-top-offset');

  firstBlock.addClass('x-1');
  middleBlock.addClass('x-2');
  lastBlock.addClass('x-3');
  
}

function morphHamburgerToBurger () {
  var firstBlock = $(hamburgerBlocks[0]);
  var middleBlock = $(hamburgerBlocks[1]);
  var lastBlock = $(hamburgerBlocks[2]);
  
  firstBlock.removeClass('positive-top-offset');
  lastBlock.removeClass('negative-top-offset');
}

function doneAnimating () {
  if (isAnimating())
    return;

  if (showing) {
    morphHamburgerToX();
  } else {
    morphHamburgerToBurger();
  }
}

function menuButtonClicked () {

  if (isAnimating())
    return;

  morphHamburgerToLine();

  if (showing) {
    hideNav(function () {
      hideLinks();
      hideNavList();
    }); 
  } else {

    showNav();
    showNavList();
    showLinks();
  }

  showing = !showing;
}

function pageReady () {
  menuButton = $('#menu_button');
  nav = $('nav');
  navList = $('nav ul');
  links = $('nav li');
  hamburgerBlocks = $('#menu_button .hamburger-block');

  menuButton.on('click', menuButtonClicked);
  links.on('click', menuButtonClicked);
}

$(pageReady);
