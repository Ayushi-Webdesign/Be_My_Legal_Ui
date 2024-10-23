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

// --------active class js in  dashbard last transaction-----------
$("#transBox li .trnsBtn").on("click", function () {
  $("#transBox li .trnsBtn.active").removeClass("active"); // Remove 'active' from any currently active button
  $(this).addClass("active"); // Add 'active' to the clicked button
});

// --------conter number in dashboard-----
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".countNum");
  const speed = 300;

  const animateCount = (counter) => {
    const target = +counter.getAttribute("data-count");
    let count = 0; // Start from 0

    const updateCount = () => {
      const inc = Math.ceil(target / speed); // Increment based on target and speed

      if (count < target) {
        count += inc;
        if (count > target) count = target; // Ensure we do not exceed the target
        counter.innerText = count; // Updated this line to match your requirement
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target; // Updated this line to match your requirement
      }
    };

    updateCount();
  };

  const options = {
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

// ----checkbox for entire table-----
document.querySelectorAll(".table tbody tr, .table thead tr").forEach((row) => {
  row.addEventListener("click", function () {
    const checkbox = row.querySelector(".row-checkbox, .header-checkbox"); 
    if (checkbox) {
      checkbox.checked = !checkbox.checked; // Toggle checkbox state
      row.classList.toggle("selected", checkbox.checked); // Add class for styling if needed
    }
  });
});

// -----custom dropdown table js--------
// Select all dropdown buttons
const dropdownButtons = document.querySelectorAll(".dropdownBtn");

// Add click event to each button
dropdownButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Prevent the event from propagating to the window (so dropdown stays open when clicked)
    event.stopPropagation();

    // Get the corresponding dropdown menu (sibling div)
    const dropdownMenu = button.nextElementSibling;

    // Close all other dropdowns first
    closeAllDropdowns();

    // Toggle the 'show-custom' class for this dropdown
    dropdownMenu.classList.toggle("show-custom");
  });
});

// Function to close all dropdowns
function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-custom-content").forEach((menu) => {
    menu.classList.remove("show-custom");
  });
}

// Close the dropdown if clicked outside or anywhere else
window.onclick = function () {
  closeAllDropdowns(); // Close all dropdowns on any click outside
};
