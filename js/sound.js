var ObjectSound = function(){
	this.synth = new Tone.AMSynth();
}

ObjectSound.prototype.init = function(){
	this.synth.toMaster();
}

ObjectSound.prototype.playSynth = function(){
	this.synth.triggerAttackRelease(220,"16n");
}
