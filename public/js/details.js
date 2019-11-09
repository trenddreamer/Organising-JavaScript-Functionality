var Details = (function() {
  var $content;

  async function loadPerson(ID) {
    const response = await fetch(ID);
    const content = await response.text();
    $content.html(content);
  }

  Evt.on("init", init);

  function selectAnotherPerson(evt) {
    evt.preventDefault();
    var ID = evt.target.getAttribute("data-item");
    Evt.emit("person-selected", ID);
    Evt.emit("person-selected-move", 750);
  }

  function init() {
    $content = $("[rel=js-details]");
    $content.on("click", selectAnotherPerson);
    Evt.on("person-selected", loadPerson);
  }
  return { init: init, loadPerson: loadPerson };
})();
