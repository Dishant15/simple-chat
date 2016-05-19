var socket = io();

 document.getElementById("m")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("go").click();
    }
});

document.getElementById('go').addEventListener('click', function(){
	var $text = document.getElementById('m');
  socket.emit('chat message', $text.value);
  $text.value = "";
});

socket.on('chat message', function(msg){
  var ul = document.getElementById('messages');
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(msg));
  ul.appendChild(li);
});

socket.on('alert message', function(msg){
	var $alert = document.getElementById('alert');
  $alert.innerHTML = msg;
	$alert.style.visibility = 'visible';
	setTimeout(function(){
		document.getElementById('alert')
			.style.visibility = 'hidden';
	}, 3000);
});