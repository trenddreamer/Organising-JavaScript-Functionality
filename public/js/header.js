var Header = (function() {
  async function handleModel(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    var url = evt.target.getAttribute("href");

    const response = await fetch(url);
    const content = await response.text();

    document.getElementById("modal").innerHTML = content;
    document.getElementById("modal").style.display = "block";
  }

  function init() {
    var modelItems = document.querySelectorAll(
      "[rel*='js-register'],[rel*='js-login']"
    );

    modelItems.forEach(element => {
      element.addEventListener("click", handleModel);
    });
  }
  Evt.on("init", init);
  return { init: init };
})();
