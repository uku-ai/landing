//
// Place any custom JS here
///////////////////////////////////////////
// JavaScript to handle opening the modal and setting the industry
function openForm(industry) {
    const modal = new bootstrap.Modal(document.getElementById('waitingListModal'));
    document.getElementById('userIndustry').value = industry; // Pre-fill the industry field
    modal.show();
  }