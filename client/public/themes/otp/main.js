$(function () {
  "use strict";

  var body = $("body");

  function goToNextInput(e) {
    var key = e.which,
      t = $(e.target),
      sib = t.next("input");

    if (t.attr("class") === "verify-code") {
      if (key != 9 && (key < 48 || key > 57)) {
        e.preventDefault();
        return false;
      }

      if (key === 9) {
        return true;
      }

      if (!sib || !sib.length) {
        sib = body.find("input").eq(0);
      }
      sib.select().focus();
    }
  }

  body.on("keyup", "input", goToNextInput);
});
