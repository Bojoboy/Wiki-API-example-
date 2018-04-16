$(document).ready(function (){
	$('#search').click(function() {
		var searchTerm = $('#searchTerm').val();
		var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchTerm + '&format=json&callback=?';
		$.ajax ({
			type: "GET",
			url: url,
			async: false,
			dataType: 'json',
			success: function(data) {
				$('#output').html("");
				for(var i = 0; i< data[1].length; i++) {
					
					$('#output').prepend('<li class="list-group-item"><a href="' + data[3][i] + '">' + data[1][i] + '</a><p>' + data[2][i] + '</p>');
					console.log(data[3][i]);
				}
				
			},
			error: function(errorMessage) {
				alert('error');
			}
		});
	});
	

});