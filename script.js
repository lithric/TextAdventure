var startContainer = document.getElementById("start_container");
var playContainer = document.getElementById("play_container");
var promptText = document.getElementById("prompt");
var currentScreen = "menu";
var moveScreen = {};

var MenuOptionsAnim = "Menu-Options 1s ease-in-out 0s 1 forwards";
var MenuCreditsAnim = "Menu-Credits 1s ease-in-out 0s 1 forwards";
var OptionsMenuAnim = "Options-Menu 1s ease-in-out 0s 1 forwards";
var CreditsMenuAnim = "Credits-Menu 1s ease-in-out 0s 1 forwards";

var FadeAnim = "FadeToBlack 3s ease-out 0s 1 forwards";

var blinking;

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
    playContainer.hidden = false;
    ChangeAnimPlay(FadeAnim);
    blinking = setInterval(() => {LineBlink()},500);
}

var lineBlinker = false;
function LineBlink(contin = true) {
    if (contin) {
        if (lineBlinker) {
            promptText.innerHTML = promptText.innerHTML.slice(0,-1);
        } else {
            promptText.innerHTML += "|";
        }
    } else {
        if (lineBlinker) {
            promptText.innerHTML = promptText.innerHTML.slice(0,-1);
            clearInterval(blinking);
        } else {
            clearInterval(blinking);
        }
    }
    lineBlinker = !lineBlinker;
}