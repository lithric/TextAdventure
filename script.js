var startContainer = document.getElementById("start_container");
var playContainer = document.getElementById("play_container");
var promptText = document.getElementById("prompt");
var currentScreen = "menu";
var moveScreen = {};

var MenuOptionsAnim = "Menu-Options 1s ease-in-out 0s 1 forwards";
var MenuCreditsAnim = "Menu-Credits 1s ease-in-out 0s 1 forwards";
var OptionsMenuAnim = "Options-Menu 1s ease-in-out 0s 1 forwards";
var CreditsMenuAnim = "Credits-Menu 1s ease-in-out 0s 1 forwards";

var FadeInAnim = "FadeIn 3s ease-out 0s 1 forwards";
var FadeOutAnim = "FadeOut 3s ease-out 0s 1 forwards";

AddMoveOption("options",MenuOptionsAnim);
AddMoveOption("credits",MenuCreditsAnim);
AddMoveOption("Moptions",OptionsMenuAnim);
AddMoveOption("Mcredits",CreditsMenuAnim);

function Move(cond) {
    if (cond == "menu") {
        moveScreen[currentScreen]();
    }
    else {
        moveScreen[cond]();
    }
    currentScreen = "M"+cond;
}

function Start() {
    currentScreen = "play";
    playContainer.hidden = false;
    ChangeAnimStart(FadeOutAnim);
    ChangeAnimPlay(FadeInAnim);
    LineBlink(true,promptText,"$");
    TypeText({text:"hello world",HTMLELM:promptText,delay:5000, att:"$"});
    TypeText({text:"this",HTMLELM:promptText,delay:1000, att:"|"});
}