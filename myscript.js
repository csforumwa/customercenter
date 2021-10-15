//WA.chat.sendChatMessage('Hello world', 'Mr Robot');
 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



/*Introduction Popups*/
WA.room.hideLayer('Intelligans');

let Intro00PP;
let firstIntro = 0;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro00', () => {
	if(firstIntro < 5){
    Intro01PP = WA.ui.openPopup("Intro00Rect", 'Welcome! If you want to get an introduction, please walk up. If you have already seen the intro, continue to the right', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
	firstIntro += 1;
	}
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro00', () => {
    Intro01PP.close();
});



let Intro01PP;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro01', () => {
    Intro01PP = WA.ui.openPopup("Intro01Rect", 'Welcome to the introduction. Read the "i" signs to learn about the environment', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro01', () => {
    Intro01PP.close();
});



let Intro02PP;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro02', () => {
    Intro02PP = WA.ui.openPopup("Intro02Rect", 'You can use "Shift" to run', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro02', () => {
    Intro02PP.close();
});




let Intro03PP;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro03', () => {
    Intro03PP = WA.ui.openPopup("Intro03Rect", 'When you get close to other participants, a white circle will appear and you will be able to videochat spontaneously (up to four people).', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro03', () => {
    Intro03PP.close();
});

let Intro04PP;

// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro04', () => {
    Intro04PP = WA.ui.openPopup("Intro04Rect", 'Audience / Discussion Areas are highlighted: here you can join group discussions (in small rooms)', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro04', () => {
    Intro04PP.close();
});



// listen to the main talks (on the main stage)
	

let Intro05PP;
// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro05', () => {
    Intro05PP = WA.ui.openPopup("Intro05Rect", 'Please only enter the speaker stage if you are a speaker. For questions after a talk, please use the global chat (mail icon on the top left).', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro05', () => {
    Intro05PP.close();
});



let Intro06PP;
// Open the popup when we enter a given zone
WA.room.onEnterZone('Intro06', () => {
    Intro06PP = WA.ui.openPopup("Intro06Rect", 'If you want to listen to a talk, please enter the listener area (in the main hall of the customer center).', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intro06', () => {
    Intro06PP.close();
});


//SICK Videos

WA.room.onEnterZone('SICK_Videos', () => {
	var IDs = ["sA7xPesuQkc", "9bGTWOtZ1vs", "a9-UFlFSDCA", "WJ0V6batIbA", "ASqHUlKyR7I", "1YCtcWPJ2bA", "nx5En1lf4Tw", "uVhKnp9_784", "lxDH7o9qJwU", "JwC8QcyzJ7Q", "LotDsuxnP6Y", "TF-iMB6ZI6E", "VUXssRs-xlI", "6Edtkc5SK_0", "Di7ry0DP30U"];
	var idx = getRandomInt(0,IDs.length);
	var ytlink = 'https://youtube.com/embed/'+IDs[idx]+'?autoplay=1';
	WA.nav.openCoWebSite(ytlink);
});


WA.room.onLeaveZone('SICK_Videos', () => {
    WA.nav.closeCoWebSite();
});





let coffeeCounter = 0;

// Cooffee Fun
WA.room.onEnterZone('CoffeeFun', () => {
	let outSec = 1;
	coffeeCounter+=1;
	switch (coffeeCounter){
		case 1:
		WA.nav.openCoWebSite('https://youtube.com/embed/RyZyfV82CDQ?autoplay=1');
		outSec = 35;
		break;
		
		case 2:
		WA.nav.openCoWebSite('https://youtube.com/embed/DfyeXrdZZ1o?autoplay=1');
		outSec = 60;
		break;
		
		case 3:
		WA.nav.openCoWebSite('https://youtube.com/embed/Nu8kIIL-CDA?autoplay=1');
		outSec = 45;
		break;
		
		case 4:
		WA.nav.openCoWebSite('https://youtube.com/embed/AYx_pAkr16M?autoplay=1');
		outSec = 40;
		outSec = 40;
		break;
		
		case 5:
		WA.nav.openCoWebSite('https://youtube.com/embed/pWMUGH5y-l4?autoplay=1');
		outSec = 45;
		break;
		
		case 6:
		WA.nav.openCoWebSite('https://youtube.com/embed/50P0XS4qTOE?autoplay=1');
		outSec = 40;
		coffeeCounter = 0;
		break;
		
		
		default:
			coffeeCounter = 0;
		break;
	}
	
	setTimeout(function() {
			WA.nav.closeCoWebSite();
	}, (outSec * 1000));
	
   
});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('CoffeeFun', () => {
    WA.nav.closeCoWebSite();
});


// Doors
// reveal toilet
WA.room.onEnterZone('Toilet_Zone', () => {
     WA.room.hideLayer('Toilet_roof');

});

//hide Toilet
WA.room.onLeaveZone('Toilet_Zone', () => {
   WA.room.showLayer('Toilet_roof');
});


// Doors
// Open doors
WA.room.onEnterZone('doorOpener', () => {
     WA.room.hideLayer('doors');

});


// Close doors
WA.room.onLeaveZone('doorOpener', () => {
   WA.room.showLayer('doors');
});


// Intelligans

let IntGans;
let firstGans=true;
WA.room.onEnterZone('Intelligans_Zone', () => {
	
	if (!firstGans && Math.random()*10 < 1){
		WA.room.showLayer('Intelligans');
	}
	else{
		firstGans=false;
		WA.room.hideLayer('Intelligans');
		  IntGans = WA.ui.openPopup("IntGansPP", 'Sometimes you can find rare intelligent species near lakes...', [{
			label: "Close",
			className: "primary",
			callback: (popup) => {
				// Close the popup when the "Close" button is pressed.
				popup.close();
			}
		}]);
	}

});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('Intelligans_Zone', () => {
   WA.room.hideLayer('Intelligans');
   IntGans.close();
});



//FireZone
let fz = true;
WA.room.onEnterZone('FireZone', () => {
	if(fz){
		WA.nav.openCoWebSite('https://www.youtube.com/watch?v=1EBfxjSFAxQ');
	}
	else{
		WA.nav.openCoWebSite('https://www.youtube.com/watch?v=HWc3WY3fuZU&t=32s');
	}
	fz= !fz;

});

// Close the popup when we leave the zone.

WA.room.onLeaveZone('FireZone', () => { 
	WA.nav.closeCoWebSite();
});



//console.log(WA);
//console.log(WA.chat);
let schedule_txt;
WA.chat.onChatMessage(message => {
	console.log(message);
    if (message == "schedule")
	{
		schedule_txt = "asd";
		WA.chat.sendChatMessage(schedule_txt, 'Admin');
	}
});

//billboard Zone
let pictures= {1:"https://cdn.sick.com/media/workadventure/cs_forum_31.jpg",2:"https://cdn.sick.com/media/workadventure/cs_forum_32.jpg",3:"https://cdn.sick.com/media/workadventure/cs_forum_33.jpg",4:"https://cdn.sick.com/media/workadventure/cs_forum_34.jpg",5:"https://cdn.sick.com/media/workadventure/cs_forum_35.jpg",6:"https://cdn.sick.com/media/workadventure/cs_forum_36.jpg",7:"https://cdn.sick.com/media/workadventure/cs_forum_37.jpg",8:"https://cdn.sick.com/media/workadventure/cs_forum_38.jpg",9:"https://cdn.sick.com/media/workadventure/cs_forum_39.jpg",10:"https://cdn.sick.com/media/workadventure/cs_forum_40.jpg",11:"https://cdn.sick.com/media/workadventure/cs_forum_41.jpg",12:"https://cdn.sick.com/media/workadventure/cs_forum_42.jpg",13:"https://cdn.sick.com/media/workadventure/cs_forum_43.jpg",14:"https://cdn.sick.com/media/workadventure/cs_forum_44.png",15:"https://cdn.sick.com/media/workadventure/cs_forum_47.png",16:"https://cdn.sick.com/media/workadventure/cs_forum_48.png",17:"https://cdn.sick.com/media/workadventure/cs_forum_49.png",18:"https://cdn.sick.com/media/workadventure/cs_forum_50.png",19:"https://cdn.sick.com/media/workadventure/cs_forum_51.png",20:"https://cdn.sick.com/media/workadventure/cs_forum_52.png",21:"https://cdn.sick.com/media/workadventure/cs_forum_53.png",22:"https://cdn.sick.com/media/workadventure/cs_forum_54.png",23:"https://cdn.sick.com/media/workadventure/cs_forum_55.png",24:"https://cdn.sick.com/media/workadventure/cs_forum_56.png",25:"https://cdn.sick.com/media/workadventure/cs_forum_57.png",26:"https://cdn.sick.com/media/workadventure/cs_forum_58.png"};
WA.room.onEnterZone('billboard', () => {
	WA.nav.openCoWebSite(pictures[Math.round((Math.random()*100)) % Object.keys(pictures).length + 1]);
    });

WA.room.onLeaveZone('billboard', () => {
		WA.nav.closeCoWebSite();
	});

//Welcome Zone
WA.room.onEnterZone('welcomeposter', () => {
	WA.nav.openCoWebSite("");
    });

WA.room.onLeaveZone('welcomeposter',() => {
	WA.nav.closeCoWebSite();
	});