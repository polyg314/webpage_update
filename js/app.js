// Code based off blogpost at http://www.bram.us/2014/01/01/skrollr-css-animations-linked-to-scroll-position/

skrollr.init({
        forceHeight: false,
});

// Create fireflies for final slide
var fireFly1 = $('#fireFly1');
	setInterval(function(){

	    fireFly1.hasClass('glow') ? fireFly1.removeClass('glow') : fireFly1.addClass('glow');
}, 1042);

var fireFly2 = $('#fireFly2');
	setInterval(function(){
	    fireFly2.hasClass('glow') ? fireFly2.removeClass('glow') : fireFly2.addClass('glow');
}, 930);

var fireFly3 = $('#fireFly3');
	setInterval(function(){

	    fireFly3.hasClass('glow') ? fireFly3.removeClass('glow') : fireFly3.addClass('glow');
}, 800);

var fireFly4 = $('#fireFly4');
	setInterval(function(){
	    fireFly4.hasClass('glow') ? fireFly4.removeClass('glow') : fireFly4.addClass('glow');
}, 900);

var fireFly5 = $('#fireFly5');
	setInterval(function(){

	    fireFly5.hasClass('glow') ? fireFly5.removeClass('glow') : fireFly5.addClass('glow');
}, 750);

var fireFly6 = $('#fireFly6');
	setInterval(function(){
	    fireFly6.hasClass('glow') ? fireFly6.removeClass('glow') : fireFly6.addClass('glow');
}, 1500);

var fireFly7 = $('#fireFly7');
	setInterval(function(){
	    fireFly7.hasClass('glow') ? fireFly7.removeClass('glow') : fireFly7.addClass('glow');
}, 1300);




function makeNewPosition(){    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];    	    
}

function animateDivs(){
    var newq = makeNewPosition();
    var oldq = $('#fireFly1').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
    $('#fireFly1').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivs();        
    });	    
};

function animateDivs2(){
    var newq = makeNewPosition();
    var oldq = $('#fireFly2').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
    $('#fireFly2').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivs2();        
    });	    
};

function animateDivs3(){
    var newq = makeNewPosition();
    var oldq = $('#fireFly3').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
    $('#fireFly3').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivs3();        
    });	    
};

function animateDivs4(){
    var newq = makeNewPosition();
    var oldq = $('#fireFly4').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
    $('#fireFly4').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivs4();        
    });	    
};

function animateDivs5(){
    var newq = makeNewPosition();
    var oldq = $('#fireFly5').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
    $('#fireFly5').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivs5();        
    });	    
};

function animateDivs6(){
    var newq = makeNewPosition();
    var oldq = $('#fireFly6').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
    $('#fireFly6').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivs6();        
    });	    
};

function animateDivs7(){
    var newq = makeNewPosition();
    var oldq = $('#fireFly7').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);	    
    $('#fireFly7').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivs7();        
    });	    
};

function calcSpeed(prev, next) {
	    
	    var x = Math.abs(prev[1] - next[1]);
	    var y = Math.abs(prev[0] - next[0]);
	    
	    var greatest = x > y ? x : y;
	    
	    var speedModifier = 0.5;

	    var speed = Math.ceil(greatest/speedModifier);

	    return speed;

}

animateDivs();
animateDivs2();
animateDivs3();
animateDivs4();
animateDivs5();
animateDivs6();
animateDivs7();
