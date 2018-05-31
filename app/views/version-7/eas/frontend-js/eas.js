$(document).ready(function() {
	$('.autocomplete-element').each(function() {
		var selectEl = document.querySelector('#' + $(this).attr('id') )
		accessibleAutocomplete.enhanceSelectElement({
			autoselect: true,
			defaultValue: selectEl.options[selectEl.options.selectedIndex].innerHTML,
			minLength: 0,
			selectElement: selectEl
		})
	})
})