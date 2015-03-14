var ObjectUI = function(){
	this.canvas = document.createElement("canvas");
	this.context = this.canvas.getContext("2d");
}

ObjectUI.prototype.init= function(){
	this.canvas.style.border = "1px solid";
	this.canvas.width = 300;
	this.canvas.height = 200;

	document.body.appendChild(this.canvas)
	this.context.fillStyle = '#23F0A2';
	this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
}
