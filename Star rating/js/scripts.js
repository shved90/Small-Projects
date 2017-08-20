(function(){
	
	var star_rating_default = 10;
	var pageWidgets = document.getElementsByClassName("star-rating-widget");
	
	document.addEventListener("mousemove", function(event){
		for (var i=0;i<pageWidgets.length;i++){ // loop through all existing widgets on the page
			var currentWidget = pageWidgets[i]; 
			for(var j=0;j<star_rating_default;j++){ // loop through stars
				var currentStar = currentWidget.getElementsByClassName("icon")[j].getElementsByTagName("use")[0];
				if(event.target == currentStar){ // check if hovering on a star
					for(var k=0;k<=j;k++){ // loop through stars until current one.. this can probably be replaced by indexOf, if done correctly
						if(k<j){
							currentWidget.getElementsByClassName("icon")[k].classList.add("hover"); // add hover class on all stars before the current hover one
						} 
					}
				} else {
					currentWidget.getElementsByClassName("icon")[j].classList.remove("hover"); // remove hover class from stars coming after current
				}
			}
		}
	})

	document.addEventListener("click", function(event){
		if (event.target.parentNode.classList.contains("icon")){
			var parent = event.target.parentNode.parentNode; //can be done better
			var currentStar = Array.prototype.indexOf.call(parent.getElementsByTagName("use"), event.target) + 1; //magic from stackoverflow, didnt want to copy the above code
			for(var i=0;i<star_rating_default;i++){
				parent.getElementsByClassName("icon")[i].classList.remove("active");
			}
			parent.setAttribute("data-rating", currentStar);
			buildStarRatingWidget();
		}
	})

	function buildStarRatingWidget() { // show correct number of stars on initial page load
		for (var i=0;i<pageWidgets.length;i++){
			var currentRating = pageWidgets[i].getAttribute("data-rating");
			for(var j=0;j<currentRating;j++){
				pageWidgets[i].getElementsByClassName("icon")[j].classList.add("active");
			}
		}
	}

	buildStarRatingWidget();

})();



