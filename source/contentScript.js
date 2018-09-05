import { getOptions } from "./utilities/chromeHelpers";
import { appendFaviconLink, removeAllFaviconLinks } from "./utilities/faviconHelpers";

getOptions().then(() => {
  chrome.runtime.onMessage.addListener(updateFavicon);
  chrome.runtime.sendMessage(null, "updated:tab");
});

function updateFavicon({ name, shouldOverride }) {
  if (shouldOverride) removeAllFaviconLinks();

  appendFaviconLink(name, shouldOverride);
}
