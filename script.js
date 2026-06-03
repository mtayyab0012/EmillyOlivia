var _0x4a2b=["Hello","CallingFrom2","Thanks","Greeting1","Good","DontSwitch","Staywithme","CallFrom1","Greeting2","CanUHearMe","CallFrom2","Sorry1","Pitch1","GreatQuestion","Pitch2","GoodToknow","NewHere","JustHang","IsThatOk","JustCheckOut","RUThere","HowMuch","OwnOrRent","Repeat","LimitedTimePromotion","IfWeGave","Busy","NoProblem","Few","Yes","Xfer","Xfer2","Afford","No","Xfer3","HoldOn1","AlreadyHave","HoldOn2","Upgrade","Good","OK","Ni1","BuyOut","RealPerson","Ni2","DecisionMaker"];
var _s={},_ca=null,_cs=null;
(function(_l){_l.forEach(function(_n){var _a=new Audio("sounds/"+_n+".mp3");_a.preload="auto";_s[_n]=_a;})})(_0x4a2b);
function playSound(_x){var _a=_s[_x];if(!_a)return;if(_ca&&_cs===_x&&!_ca.paused)return;if(_ca){_ca.pause();_ca.currentTime=0;}_ca=_a;_cs=_x;_ca.currentTime=0;_ca.play().catch(function(_e){});_ca.onended=function(){_ca=null;_cs=null;};}
function stopSound(){if(_ca){_ca.pause();_ca.currentTime=0;_ca=null;_cs=null;}}
