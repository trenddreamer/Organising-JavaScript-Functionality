$(document).ready(function() {
  var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
  var $content = $("[rel=js-details]");

  document
    .querySelector("[rel ='js-content']")
    .addEventListener("click", handleClick);

  async function handleClick(evt) {
    evt.preventDefault();
    var url = evt.target.getAttribute("href");
    const response = await fetch(url);
    const content = await response.text();
    $content.html(content);
  }

  // on click of a carousel item, do an Ajax request for
  // the "details/2.html" (or whatever) file for the person
  // clicked, and load those contents into the `$content` div.

  // hint: you will probably want to use "event propagation"
  // (aka "event delegation"), by attaching a single event
  // handler the `$content` element rather than individual
  // event handlers to each item in the carousel.
});
