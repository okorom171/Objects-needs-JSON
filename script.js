const networkBanner = document.getElementById("networkBanner");

function updateNetworkStatus() {
  networkBanner.hidden = navigator.onLine;
}

window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

updateNetworkStatus();
