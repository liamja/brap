(function (global) {

  "use strict";
  var browser = kango.browser.getName();
  var timestamp = Date.now();

  // The JSON log we'll send remotely.
  var log = {
    target: "TARGET_ID",
    timestamp: timestamp,
    browser: {
      useragent: navigator.userAgent,
      platform: navigator.platform,
      plugins: navigator.plugins,
      vendor: navigator.vendor,
      product: navigator.product,
      vendorSub: navigator.vendorSub,
      productSub: navigator.productSub,
      appCodeName: navigator.appCodeName,
      appName: navigator.appName,
      appVersion: navigator.appVersion,
      onLine: navigator.onLine,
      language: navigator.language
    }
  };

  function sendLog(log) {
    console.log(log);
    kango.storage.setItem(log.timestamp, log);

    var args = {
      method: 'POST',
      url: 'http://requestb.in/p3a5imp3',
      async: true,
      params: {'log': JSON.stringify(log)},
      contentType: 'text'
    };

    kango.xhr.send(args);
  }

  // Get browser
  switch (browser) {
  case "firefox":
    break;
  case "chrome":
    break;
  case "safari":
    break;
  case "opera":
    break;
  case "ie":
    break;
  default:
    break;
  }

  // Get geolocation
  if (navigator.hasOwnProperty("geolocation")) {
    navigator.geolocation.getCurrentPosition(function (position) {
      log.geolocation = position.coords;
    });
  }

  kango.addMessageListener('channelLog', function (event) {
    sendLog(event.data);
  });

}(this));
