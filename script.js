var _0x4a2b=["Hello","Thanks","Greeting1","CallFrom1","Greeting2","CanUHearMe","CallFrom2","Sorry1","Pitch1","GreatQuestion","Pitch2","GoodToKnow","NI1","NewHere","IsThatOk","Can_I_say_something_01","RUThere","HowMuch","OwnOrRent","CanYouRepeat","LimitedTimePromotion","IFWeGave","Busy","NoProblem","Transfer6","FewSystem Left","Yes","Xfer","Xfer2","Afford","No","Xfer3","Buyout8","HoldOn1","HoldOn2","Upgrade","Good","Ok","NI1","RealPerson","NI2","DecisionMaker"];
var _s={},_ca=null,_cs=null;
(function(_l){_l.forEach(function(_n){var _a=new Audio("sounds/"+_n+".mp3");_a.preload="auto";_s[_n]=_a;})})(_0x4a2b);
function playSound(_x){var _a=_s[_x];if(!_a)return;if(_ca&&_cs===_x&&!_ca.paused)return;if(_ca){_ca.pause();_ca.currentTime=0;}_ca=_a;_cs=_x;_ca.currentTime=0;_ca.play().catch(function(_e){});_ca.onended=function(){_ca=null;_cs=null;};}
function stopSound(){if(_ca){_ca.pause();_ca.currentTime=0;_ca=null;_cs=null;}}
