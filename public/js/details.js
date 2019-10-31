var Details = (function() {
  function init() {
    $content = $("[rel=js-details]");
    document
      .querySelector("[rel ='js-content']")
      .addEventListener("click", handleClick);
  }
  var $content;

  async function handleClick(evt) {
    evt.preventDefault();
    var url = evt.target.getAttribute("href");
    const response = await fetch(url);
    const content = await response.text();
    $content.html(content);
  }
  return { init: init };
})();

$(document).ready(Details.init);
