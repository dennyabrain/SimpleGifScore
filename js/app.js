window.onload = function(){
	var mediator = new MicroEvent();

	//listen for some event
	mediator.route("canvasClicked",function(){
		console.log('Object canvas got clicked');
		object1Sound.playSynth();
		object1UI.playGif();
	});

	var object1UI = new ObjectUI();
	object1UI.init();
	var object1Sound = new ObjectSound();
	object1Sound.init();

	object1UI.canvas.addEventListener("click", function(){
		mediator.send('canvasClicked');
	});

	document.addEventListener('click', function(){
		//object1UI.pauseGif();
		object1UI.gif.move_to(0);
	});
}
