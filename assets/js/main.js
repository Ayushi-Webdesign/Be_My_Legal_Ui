// -----------side bar scripts----------
$(".sidebar-dropdown > a").click(function () {
  $(".sidebar-submenu").slideUp(200);
  if ($(this).parent().hasClass("active")) {
    $(".sidebar-dropdown").removeClass("active");
    $(this).parent().removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this).next(".sidebar-submenu").slideDown(200);
    $(this).parent().addClass("active");
  }
});

$("#close-sidebar").click(function () {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
  $(".page-wrapper").addClass("toggled");
});

// ------image upload script-----
$(document).on("change", ".file-input", function () {
  var filesCount = $(this)[0].files.length;

  var textbox = $(this).prev();

  if (filesCount === 1) {
    var fileName = $(this).val().split("\\").pop();
    textbox.text(fileName);
  } else {
    textbox.text(filesCount + " files selected");
  }
});
