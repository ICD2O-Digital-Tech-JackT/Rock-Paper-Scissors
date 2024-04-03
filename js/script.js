let GameHasStarted = false;
let UserResponseInput;
let ConfimationButton;
let PlayerChoiceNumber;
let Warning;
let Tie = false;

function ValidResponse(ValidRe) {
  let Win = false
  let OpponentChoice = Math.floor(Math.random() * 1) + 1;
  document.getElementById("MSG").innerHTML = OpponentChoice
  if (OpponentChoice == 1) {
    let OpponentChoiceMsg = document.createElement("p");
    document.body.appendChild(OpponentChoiceMsg)
    OpponentChoice.innerHTML = "Your opponent chose Rock";
    if (OpponentChoice == 3) {
      Win = true
    }
  }
  if (OpponentChoice == 2) {
    let OpponentChoiceMsg = document.createElement("p");
    document.body.appendChild(OpponentChoiceMsg)
    OpponentChoiceMsg.innerHTML = "Your opponent chose Paper";
    if (OpponentChoice == 1) {
      Win = true
    }
  }
  if (OpponentChoice == 3) {
    let OpponentChoiceMsg = document.createElement("p");
    document.body.appendChild(OpponentChoiceMsg)
    OpponentChoice.innerHTML = "Your opponent chose Scissors";
    if (OpponentChoice == 2) {
      Win = true
    }
  }
  if (OpponentChoice == PlayerChoiceNumber) {

    Tie = true
    Win = true
  }

  if (Win == true) {
    if (Tie == false) {
      let OpponentChoiceMsg = document.createElement("p");
      document.body.appendChild(OpponentChoiceMsg)
      OpponentChoice.innerHTML = "You win!" + UserResponseInput.value;
    } else {
      let OpponentChoiceMsg = document.createElement("p");
      document.body.appendChild(OpponentChoiceMsg)
      OpponentChoice.innerHTML = "You tied /:" + UserResponseInput.value;
    }
  } else {
    let OpponentChoiceMsg = document.createElement("p");
    document.body.appendChild(OpponentChoiceMsg)
    OpponentChoice.innerHTML = "You did not win, Try again" + UserResponseInput.value;
  }
}


function PlayerChosenOption() {
  let ValidRe = false
  if (UserResponseInput.value == "Scissors" || UserResponseInput.value == "Rock" || UserResponseInput.value == "Paper") {
    let Message = document.createElement("p");
    Message.id = "MSG"
    //Message.innerHTML="You chose "+UserResponseInput.value;
    document.body.appendChild(Message);
    ValidRe = true

    if (UserResponseInput.value == "Rock") {
      PlayerChoiceNumber = 1
    }
    if (UserResponseInput.value == "Paper") {
      PlayerChoiceNumber = 2
    }
    if (UserResponseInput.value == "Scissors") {
      PlayerChoiceNumber = 3
    }
    ValidResponse(ValidRe)
  } else {
    let Message = document.createElement("p");
    Message.style.color = "Red"
    Message.innerHTML = UserResponseInput.value + " is not a valid option, please check your spelling";
    document.body.appendChild(Message);
  }
}


function InitiateGame() {
  if (GameHasStarted == false) {
    GameHasStarted = true;
    document.getElementById("Text").innerHTML += "This is rock paper scissors, input your choice below: <br><br>";
    let PlayerChoice = document.createElement("input", type = "text", id = "PlayerChoice");
    UserResponseInput = PlayerChoice;
    document.body.appendChild(PlayerChoice);
    let ButtonConfirm = document.createElement("button");
    ConfimationButton = ButtonConfirm;
    ButtonConfirm.innerHTML = "Confirm";
    document.getElementById("Text").innerHTML = Math.random(1,100)
    ButtonConfirm.addEventListener('click', PlayerChosenOption);
    document.body.appendChild(ButtonConfirm);
  }
}

