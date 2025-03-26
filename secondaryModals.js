var secondModals = document.querySelectorAll(".secondModal");
var secondModalBtns = document.querySelectorAll("figure.mbc_container");
var closeButtons = document.getElementsByClassName("close");

// Open second modal when figure is clicked
secondModalBtns.forEach(function(btn) {
  btn.onclick = function(e) {
    var modalId = btn.getAttribute("data-target");
    var modal = document.querySelector(modalId);
    console.log("Modal ID:", modalId);
    document.querySelector("#mySecModal1").style.display = "block";

    if (modal) {
      modal.style.display = "block";
    }
  };
});

// Close second modals
Array.from(closeButtons).forEach(function(closeBtn) {
  closeBtn.onclick = function() {
    secondModals.forEach(function(modal) {
      modal.style.display = "none";
    });
  };
});

// Close when clicking outside modal
window.onclick = function(event) {
  secondModals.forEach(function(modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};