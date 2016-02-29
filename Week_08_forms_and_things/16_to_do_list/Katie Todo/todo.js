$(document).ready(function(){
	console.log("js loaded");

//add a todo item to the list
	$("#item_submit").submit(function( event ) {
  		alert( "Handler for .submit() called." );
  		event.preventDefault();

  		var todo = $("#itemText").val();
  		console.log(todo);

  		$("#item_list").append("<li>" + todo + "<a href='#' class='deleteItem'>x</a></li>");

  		
	});
	//Hover does not work
	// $("#item_list").on("hover", "li", function() {
	// 	debugger;
 //  		$("#deleteButton").show();
  	// });
});
