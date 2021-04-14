function AddMoveOption(option = "",anim = "") {
    moveScreen[option] = () => ChangeAnimStart(anim);
}

function ChangeAnimStart(anim) {
    return startContainer.style.animation = anim;
}

function ChangeAnimPlay(anim) {
    return playContainer.style.animation = anim;
}