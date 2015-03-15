var ObjectUI = function(){
	this.canvas = document.createElement("canvas");
	this.context = this.canvas.getContext("2d");
	this.gif = new SuperGif({
		gif : document.getElementById("gif1"),
		draw_while_loading : false,
		auto_play : false,
		//loop_mode : false,
		on_end : this.pauseGif	
	});
};

ObjectUI.prototype.init= function(){
	this.canvas.style.border = "1px solid";
	this.canvas.width = 300;
	this.canvas.height = 200;

	document.body.appendChild(this.canvas)
	this.context.fillStyle = '#23F0A2';
	this.context.fillRect(0,0,this.canvas.width,this.canvas.height);

	this.gif.load(function(){
		console.log('gif laoded');
	});
}

ObjectUI.prototype.playGif = function(){
	//this.gif.move_to(0);
	//this.gif.pause();
	console.log(this.gif);
	this.gif.play();
}

ObjectUI.prototype.pauseGif = function(){
	//this.gif.get_length();
	console.log(this.gif);
	this.gif.pause();
}
