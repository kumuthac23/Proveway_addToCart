document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const selects = document.querySelectorAll(".size-colour-input");

  // Function to activate a box
  function activateBox(box) {
    boxes.forEach((item) => item.classList.remove("active"));
    box.classList.add("active");

    const radioButton = box.querySelector(".radio-btn");
    if (radioButton) radioButton.checked = true;
  }

  // Activate the box with the checked radio button on page load
  boxes.forEach((box) => {
    const radioButton = box.querySelector(".radio-btn");
    if (radioButton && radioButton.checked) {
      activateBox(box);
    }
  });

  // Add click event to each box
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      activateBox(box);
    });

    // Add change event to radio buttons
    const radioButton = box.querySelector(".radio-btn");
    if (radioButton) {
      radioButton.addEventListener("change", () => {
        activateBox(box);
      });
    }
  });

  // Prevent event propagation when clicking on the select dropdown
  selects.forEach((select) => {
    select.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
});
