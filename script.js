window.onload = function () {
  var banner = document.getElementById('welcome-banner');
  banner.style.display = 'block';
  setTimeout(function() {
    banner.style.display = 'none';
  }, 3000); // 3 seconds
};
