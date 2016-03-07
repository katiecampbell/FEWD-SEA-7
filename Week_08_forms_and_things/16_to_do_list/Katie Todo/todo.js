$(document).ready(function(){
	console.log("js loaded");

//add a todo item to the list
	$("#item_submit").submit(function( event ) {
 //  		alert( "Handler for .submit() called." );
  		event.preventDefault();

  		var todo = $("#itemText").val();
  		console.log(todo);

  		$("#item_list").append("<li>" + "<a href='#' class='checkmark'>&#10004;</a>" + todo + "<a href='#' class='deleteItem'>x</a></li>");
    });

  $("#item_list").on('click', '.deleteItem', function(){
    console.log('event is happening?');
    $(this).parent('li').remove();
  });

  $("#item_list").on('click', '.checkmark', function(){
    console.log('checkmark clicked');
    $(this).parent('li').css('color', "green");
  });
});


