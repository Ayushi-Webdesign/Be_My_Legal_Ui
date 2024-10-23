// ------------------new sidebar script for active after page refresh----------
$(".sidebar-dropdown > a").click(function () {
  $(".sidebar-submenu").slideUp(200);
  if ($(this).parent().hasClass("active")) {
    $(".sidebar-dropdown").removeClass("active");
    $(this).parent().removeClass("active");
    localStorage.removeItem("activeItem"); // Remove from local storage
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this).next(".sidebar-submenu").slideDown(200);
    $(this).parent().addClass("active");
    const activeItem = $(this).parent().index();
    localStorage.setItem("activeItem", activeItem); // Save active item to local storage
  }
});
$(document).ready(function () {
  const activeItem = localStorage.getItem("activeItem");
  if (activeItem !== null) {
    const item = $(".sidebar-dropdown").eq(activeItem);
    item.addClass("active");
    item.find(".sidebar-submenu").slideDown(200);
  }
});

// -----------old side bar scripts----------
// $(".sidebar-dropdown > a").click(function () {
//   $(".sidebar-submenu").slideUp(200);
//   if ($(this).parent().hasClass("active")) {
//     $(".sidebar-dropdown").removeClass("active");
//     $(this).parent().removeClass("active");
//   } else {
//     $(".sidebar-dropdown").removeClass("active");
//     $(this).next(".sidebar-submenu").slideDown(200);
//     $(this).parent().addClass("active");
//   }
// });

$("#close-sidebar").click(function () {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
  $(".page-wrapper").addClass("toggled");
});
