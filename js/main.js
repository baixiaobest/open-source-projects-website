$(document).ready(
	function(){
		setWayPoint("aboutSec1","right");
		setWayPoint("aboutSec2","left");
		setWayPoint("aboutSec3","right");
	}
);


function setWayPoint(ID, slideInPos, optionalId){
	var waypoint = new Waypoint({
  	element: document.getElementById(ID),
  	handler: function(direction) {
  		if(typeof optinalId==='undefined')
  			var IdSelector = "#"+ID;
  		else
  			var IdSelector = "#"+optionalId;
  		if (direction=="up"){
    		$(IdSelector).css('background-position', '0 0');
    	}
    	else{
    		if(slideInPos=="right")
    			$(IdSelector).css('background-position', '100% 0');
    		else if(slideInPos=="left")
    			$(IdSelector).css('background-position', '-100% 0');
    	}
  	},
  	offset: 400
	})
};

