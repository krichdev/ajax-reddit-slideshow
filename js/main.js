$(document).ready(function(){

	$('#inputSearch').click(function(e){
		var search = $('#input').val();
		$.get('https://www.reddit.com/r/pics/search.json', {
			q: search,
			restrict_sr: "on"
		}).done(function(data){
			var imgPosts = data;
			var imgObjects = imgPosts.data.children;
			for (var i = 0; i < imgObjects.length; i++){
				showResults(imgObjects[i]);
			}
			console.log();
		}).fail(function(error){
			console.log('There was an error :(');
		})
		e.preventDefault();
		hideIntro();
	});

	function showResults(urls){
		var containerDiv = $('#display');
		var imgURL = urls.data.url;
		if (imgURL.includes('.jpg')){
			containerDiv.append('<img class="scaled" src="'+imgURL+'">')
		} else{
			console.log('No images');
		}
		createSlides();
	}

	function hideIntro(){
		$('#intro').hide();
		$('#display').prepend("<button id='reset'>Close</button>").click(function(){
			resetSearch();
		})
	}

	function resetSearch(){
		$('#intro').show();
		$('#input').val("").focus();
		$('img').remove();
		$('#reset').remove();
	}

	function createSlides(){
		console.log("create slides");
	}

});
