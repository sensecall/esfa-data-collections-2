$(document).ready(function () {
	$('#upload-v2 input#upload').on('change',function (e) {
		// hide the file picker button
		$('#upload-select-area').addClass('hidden');

		// show the file details
		$('#file-details').removeClass('hidden');

		// write the file details to the page
		var fileName = e.target.files[0].name;
		var timestamp = new Date();
		var monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May", 
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December" 
		];
		var time = timestamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
		var fileDate = timestamp.getDate() + " " + monthNames[timestamp.getMonth()] + " " + timestamp.getFullYear() + " at " + time;
		$('.file-name').text(fileName);
		$('.file-date').text(fileDate);
		$('input[name="file-date"]').val(fileDate);

		// revert the page when clicking the change button
		var changeButton = $('#change-file');
		changeButton.on('click',function() {
			// hide the file details
			$('#file-details').addClass('hidden');

			// show the file picker button
			$('#upload-select-area').removeClass('hidden');
		})
	})

	// uploading page timeout
	if($('#uploading-content').length){
		var currentPage = window.location.href.split("?")[0];
		setTimeout(function () {
			window.location.href = currentPage + "/../../ilr-upload-complete";
		}, 8000);
	}
})