// Change Three to Two

const boxTwoText = document.getElementsByClassName("text-three")[0];
const fixTwo = document.getElementsByClassName("btnFixTwo")[0];

fixTwo.addEventListener("click", function() {
    boxTwoText.textContent = "TWO";
}
);

// Change Two to Three

const boxThreeText = document.getElementsByClassName("text-two")[0];
const fixThree = document.getElementsByClassName("btnFixThree")[0];

fixThree.addEventListener("click", function() {
    boxThreeText.textContent = "THREE";
}
);

// Chnage Background Color
const boxColor = document.getElementsByClassName("boxOne")[0];
const fixColor = document.getElementsByClassName("btnChangeBG")[0];

fixColor.addEventListener("click", function() {
    boxColor.style.backgroundColor = "red";
}
);

// Add box

const addBox = document.getElementsByClassName("btnAddBox")[0];

addBox.addEventListener("click", function() {
    const continer = document.getElementsByClassName("boxContainers")[0];
    const newBox = document.createElement("div");
    newBox.className = "box";
    newBox.textContent = "NEW BOX";

    continer.appendChild(newBox);
}
);