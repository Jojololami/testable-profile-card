(function () {
  var el = document.getElementById("user-time");
  if (!el) return;
  function tick() {
    var now = Date.now();
    el.textContent = String(now);
    }
  tick();
  setInterval(tick, 1000);
})();
