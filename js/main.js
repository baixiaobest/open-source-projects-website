$(document).ready(
	function(){
		setWayPointSlide("aboutSec1","right");
		setWayPointSlide("aboutSec2","left");
		setWayPointSlide("aboutSec3","right");
    setWayPointSlide("aboutSec4","left");
    setWayPointSlide("aboutSec5", "right");
    setWayPointProperty("aboutSec5", "linkedin",socialTagFirstChildUp, socialTagFirstChildDown);
    setWayPointProperty("aboutSec5", "github",socialTagChildrenUp, socialTagChildrenDown);
    setWayPointProperty("aboutSec5", "facebook",socialTagChildrenUp, socialTagChildrenDown);
    setWayPointProperty("aboutSec5", "quora",socialTagChildrenUp, socialTagChildrenDown);
	}
);


function setWayPointSlide(ID, slideInPos, optionalId){

  var offsetVal = "70%";
  if(window.matchMedia( "(max-device-width: 700px)" ).matches)
    offsetVal = "bottom-in-view";
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
  	offset: offsetVal
	})
};


function setWayPointProperty(triggerID, ID, handlerUp, handlerDown){

  var offsetVal = "70%";
  if(window.matchMedia( "(max-device-width: 700px)" ).matches)
    offsetVal = "bottom-in-view";
  var waypoint = new Waypoint({
    element: document.getElementById(triggerID),
    handler: function(direction){
      var idSelector = "#" + ID;
      if (direction=="up" && typeof handlerUp != 'undefined'){
        handlerUp(ID);
      }else if(direction=="down" && typeof handlerDown != 'undefined'){
        handlerDown(ID);
      }
    },
    offset: offsetVal
  })
};

function socialTagFirstChildDown(id){
  $("#"+id).css("height", "50px");
  $("#"+id).css("width", "50px");
  $("#"+id).css("margin-top", "5px");
  $("#"+id).css("margin-left", "5px");
};
function socialTagFirstChildUp(id){
  $("#"+id).css("height", "0");
  $("#"+id).css("width", "0");
  $("#"+id).css("margin-top", "30px");
  $("#"+id).css("margin-left", "30px");
};

function socialTagChildrenDown(id){
  $("#"+id).css("height", "50px");
  $("#"+id).css("width", "50px");
  $("#"+id).css("margin-top", "5px");
  $("#"+id).css("margin-left", "10px");
}
function socialTagChildrenUp(id){
  $("#"+id).css("height", "0");
  $("#"+id).css("width", "0");
  $("#"+id).css("margin-top", "30px");
  $("#"+id).css("margin-left", "60px");
};
