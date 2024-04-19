/*!
* Start Bootstrap - Business Frontpage v5.0.9 (https://startbootstrap.com/template/business-frontpage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function openForm(industry) {
	const modal = new bootstrap.Modal(
		document.getElementById("waitingListModal")
	);
	document.getElementById("userIndustry").value = industry; // Pre-fill the industry field
	modal.show();
}