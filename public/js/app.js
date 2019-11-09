window.Evt = new EventEmitter2();
function init() {
  Evt.emit("init");
}
document.addEventListener("DOMContentLoaded", init);
