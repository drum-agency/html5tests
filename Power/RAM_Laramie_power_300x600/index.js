(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,815,278,72],[0,396,240,327],[0,0,480,394],[0,725,410,88]]},
		{name:"index_atlas_NP_", frames: [[0,0,600,1200]]}
];


// symbols:



(lib.CTA_300x600 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.image_power_300x600 = function() {
	this.initialize(ss["index_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo_300x250_v2 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.text1 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.text2 = function() {
	this.initialize(ss["index_atlas_P_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-98.7,-32.5)).s().p("AvbBzIAAjlIe3AAIAADlg")
	}.bind(this);
	this.shape.setTransform(83,72.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,61,197.5,23);


(lib.text2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-98.7,-10.5)).s().p("AvbBpIAAjRIe3AAIAADRg")
	}.bind(this);
	this.shape.setTransform(82.75,68.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,57.8,197.5,21);


(lib.text2_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],3);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-201.2,-22)).s().p("AgkDcIAAm3IBJAAIAAG3g")
	}.bind(this);
	this.shape.setTransform(9,79.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.3,57.8,7.500000000000001,44);


(lib.text1c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-123.5,-125.2)).s().p("AyMJaIAAyzIAeAAIAAFTMAj7AAAIAANgg")
	}.bind(this);
	this.shape.setTransform(98,184);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,123.8,233,120.50000000000001);


(lib.text1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-125,-62.5)).s().p("Ax9FtIAArZIAeAAIAAGtMAjdAAAIAAEsg")
	}.bind(this);
	this.shape.setTransform(103,248.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,212,230,73);


(lib.text1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-126.5,-34.5)).s().p("AxuFZIAAqxMAjdAAAIAAKxg")
	}.bind(this);
	this.shape.setTransform(102.5,221);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,186.5,227,69);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo_300x250_v2();
	this.instance.parent = this;
	this.instance.setTransform(-65.3,69.35,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.3,69.4,211.7,288.4);


(lib.image_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image_power_300x600();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2B").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CTA_300x600();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,202.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,202.5,139,36);


(lib.texty2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwLDwIAAnfMAgXAAAIAAHfg");
	mask.setTransform(82.475,77.75);

	// Layer_3
	this.instance = new lib.text2b("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(290.8,27.55,1,1,0,0,0,88.3,10);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:88.3},14,cjs.Ease.get(1)).wait(26));

	// Layer_2
	this.instance_1 = new lib.text2a("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(189.8,8.5,1,1,0,0,0,89.3,8.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:89.3},14,cjs.Ease.get(1)).wait(32));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AN5EdIAAmjIBFAAIAAGjg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AN5FKIAAmjIBFAAIAAGjg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AN5FxIAAmjIBFAAIAAGjg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AN5GTIAAmjIBFAAIAAGjg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AN5GwIAAmkIBFAAIAAGkg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AN5HIIAAmkIBFAAIAAGkg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AN5HaIAAmkIBFAAIAAGkg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AN5HnIAAmkIBFAAIAAGkg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AN5HvIAAmkIBFAAIAAGkg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AN5HyIAAmlIBFAAIAAGlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:95.85,y:28.5001}).wait(1).to({graphics:mask_1_graphics_1,x:95.85,y:32.96}).wait(1).to({graphics:mask_1_graphics_2,x:95.85,y:36.8952}).wait(1).to({graphics:mask_1_graphics_3,x:95.85,y:40.3057}).wait(1).to({graphics:mask_1_graphics_4,x:95.85,y:43.1915}).wait(1).to({graphics:mask_1_graphics_5,x:95.85,y:45.5526}).wait(1).to({graphics:mask_1_graphics_6,x:95.85,y:47.389}).wait(1).to({graphics:mask_1_graphics_7,x:95.85,y:48.7008}).wait(1).to({graphics:mask_1_graphics_8,x:95.85,y:49.4878}).wait(1).to({graphics:mask_1_graphics_9,x:95.85,y:49.7501}).wait(51));

	// Layer_1
	this.instance_2 = new lib.text2_red("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(179.55,18.8,1,1,0,0,0,3.5,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,57.8,204.8,44);


(lib.texty1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("A0uOCIAA8DMApdAAAIAAcDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:164.125,y:278.7}).wait(76));

	// Layer_4
	this.instance = new lib.text1a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-62.65,49.5,1,1,0,0,0,119.3,49.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:171.35},14,cjs.Ease.get(0.99)).wait(62));

	// Layer_3
	this.instance_1 = new lib.text1b("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58.45,63.5,1,1,0,0,0,125,63.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({x:175.05},14,cjs.Ease.get(1)).wait(55));

	// Layer_2
	this.instance_2 = new lib.text1c("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-59.25,188.55,1,1,0,0,0,123.2,61.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({x:176.75},14,cjs.Ease.get(1)).wait(48));

	// mask_line (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AA8PFIAA6ZIB4AAIAAaZg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AA8Q6IAA6ZIB4AAIAAaZg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AA8SnIAA6ZIB4AAIAAaZg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AA8UKIAA6YIB4AAIAAaYg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AA8VmIAA6ZIB4AAIAAaZg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AA8W4IAA6ZIB4AAIAAaZg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AA8YCIAA6ZIB4AAIAAaZg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AA8ZDIAA6ZIB4AAIAAaZg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AA8Z7IAA6ZIB4AAIAAaZg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AA8arIAA6aIB4AAIAAaag");
	var mask_1_graphics_10 = new cjs.Graphics().p("AA8bSIAA6aIB4AAIAAaag");
	var mask_1_graphics_11 = new cjs.Graphics().p("AA8bwIAA6aIB4AAIAAaag");
	var mask_1_graphics_12 = new cjs.Graphics().p("AA8cGIAA6aIB4AAIAAaag");
	var mask_1_graphics_13 = new cjs.Graphics().p("AA8cTIAA6aIB4AAIAAaag");
	var mask_1_graphics_14 = new cjs.Graphics().p("AA8cXIAA6aIB4AAIAAaag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:18.025,y:96.5234}).wait(1).to({graphics:mask_1_graphics_1,x:18.025,y:108.2326}).wait(1).to({graphics:mask_1_graphics_2,x:18.025,y:119.0744}).wait(1).to({graphics:mask_1_graphics_3,x:18.025,y:129.0489}).wait(1).to({graphics:mask_1_graphics_4,x:18.025,y:138.1561}).wait(1).to({graphics:mask_1_graphics_5,x:18.025,y:146.3959}).wait(1).to({graphics:mask_1_graphics_6,x:18.025,y:153.7683}).wait(1).to({graphics:mask_1_graphics_7,x:18.025,y:160.2734}).wait(1).to({graphics:mask_1_graphics_8,x:18.025,y:165.9112}).wait(1).to({graphics:mask_1_graphics_9,x:18.025,y:170.6816}).wait(1).to({graphics:mask_1_graphics_10,x:18.025,y:174.5846}).wait(1).to({graphics:mask_1_graphics_11,x:18.025,y:177.6204}).wait(1).to({graphics:mask_1_graphics_12,x:18.025,y:179.7887}).wait(1).to({graphics:mask_1_graphics_13,x:18.025,y:181.0897}).wait(1).to({graphics:mask_1_graphics_14,x:18.025,y:181.5234}).wait(76));

	// Layer_1
	this.shape = new cjs.Shape();
	var sprImg_shape = cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_P_"],2);
	sprImg_shape.onload = function(){
		this.shape.graphics.bf(sprImg_shape, null, new cjs.Matrix2D(0.5,0,0,0.5,-6.5,-92.7)).s().p("AhAOgIAA8+ICBAAIAAEDIgeAAIAAGHIgeAAIAAS0g")
	}.bind(this);
	this.shape.setTransform(34,279);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.5,186.3,240.60000000000002,182.2);


// stage content:
(lib.RAM_power_300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		loop = 0;
	}
	this.frame_381 = function() {
		//loop++
		
		//if (loop < 2) {
		//	this.gotoAndPlay(2)
		//} else {
		//	this.stop();
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(381).call(this.frame_381).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(382));

	// RAM_logo
	this.instance = new lib.logo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(152,96,1,1,0,0,0,43.5,48);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(307).to({_off:false},0).to({alpha:1},14).wait(61));

	// CTA
	this.instance_1 = new lib.cta("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152,276,1,1,0,0,0,48,12.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(321).to({_off:false},0).to({y:256,alpha:1},15,cjs.Ease.get(1)).wait(46));

	// text2
	this.instance_2 = new lib.texty2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(184,39.05,1,1,0,0,0,91.5,18.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161).to({_off:false},0).wait(130).to({mode:"single",startPosition:59},0).to({alpha:0},15).to({_off:true},1).wait(75));

	// text1
	this.instance_3 = new lib.texty1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131).to({mode:"single",startPosition:89},0).to({alpha:0},15).to({_off:true},1).wait(235));

	// fade_black
	this.instance_4 = new lib.fade("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,300,1,2.4,0,0,0,150,125);
	this.instance_4.alpha = 0.8516;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(146).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(220));

	// image1
	this.instance_5 = new lib.image_main("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(291).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,152,302);
// library properties:
lib.properties = {
	id: 'F89F51673FB59B419C72F389715AFE27',
	width: 300,
	height: 600,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_.png?1568787820448", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg?1568787820449", id:"index_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F89F51673FB59B419C72F389715AFE27'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;