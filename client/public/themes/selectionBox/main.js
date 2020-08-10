/*dropdown-selection-box Menu*/
$(".dropdown-selection-box").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-selection-box-menu").slideToggle(300);
});
$(".dropdown-selection-box").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-selection-box-menu").slideUp(300);
});
$(".dropdown-selection-box .dropdown-selection-box-menu li").click(function () {
  $(this).parents(".dropdown-selection-box").find("span").text($(this).text());
  $(this)
    .parents(".dropdown-selection-box")
    .find("input")
    .attr("value", $(this).attr("id"));
});
/*End dropdown-selection-box Menu*/

$(".dropdown-selection-box-menu li").click(function () {
  var input =
      "<strong>" +
      $(this).parents(".dropdown-selection-box").find("input").val() +
      "</strong>",
    msg = '<span class="msg">Hidden input value: ';
  $(".msg").html(msg + input + "</span>");
});
