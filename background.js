chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {redirectUrl: "https://app.100xdevs.com/courses/"};
    },
    {urls: ["*://www.instagram.com/*"]},
    ["blocking"]
  );