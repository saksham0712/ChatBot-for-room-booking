
let currentstep = 1
// quiz bot relying with specific question with suggestions
function myfunction1(question1) {

    if(currentstep < 7){
        var nextchat = document.createElement("div")
        nextchat.setAttribute("class", "questionHaiyeh")
        nextchat.textContent = question1.question
        var quizContainer = document.getElementById("quiz-container");
        quizContainer.appendChild(nextchat);
    }



    if (currentstep <= 7) {
        question1.option.forEach((option, index) => {
            var optionsOf = document.createElement("div")
            optionsOf.setAttribute("class", "options")
            optionsOf.textContent = option
            nextchat.appendChild(optionsOf)
        })
    }

    if (currentstep >= 7) {
        console.log(nextchat)
        var nextchat = document.createElement("div")
        nextchat.textContent = question1.question
        nextchat.setAttribute("class", "sabsebada")
        
        var quizContainer = document.getElementById("quiz-container");
        quizContainer.appendChild(nextchat);

        // document.getElementsByClassName('sabsebada')[1].style.fontSize="x-large";

    }

}
const randomT = 1000 + Math.floor(Math.random() * 12000)
// greetings
const question11 = {
    question: "Hello! I am your friendly AI Room booking Bot. How can I assist",
    option: ["Yes", "No"]
}
// for states
const question2 = {
    question: "That's great!!,  please select any states where you want to book a room",
    option: ["Punjab", "j&k", "Delhi", "Bihar"]
}

//for punjab
const question31 = {
    question: "please select your city. ",
    option: ["Bathinda", "Mohali", "Chandigarh", "Amritsar"]
}
//for jk
const question33 = {
    question: "please select your city. ",
    option: ["Srinagar", "Jammu", "Anantnag", "Barmulla"]
}
//for dehli
const question32 = {
    question: "please select your city. ",
    option: ["Near CP", "Near red fort", "Near nehru palace"]
}
//for bihar
const question34 = {
    question: "please select your city. ",
    option: ["Patna", "Siwan", "Rajgir", "Arra"]
}


const question4 = {
    question: "Okay, let's select the Royality",
    option: ["5star", "4star", "3star"]
}

const question51 = {
    question: "Please select a hotel which suits you",
    option: ["Hotel royal INN", "Hotel Saphire INN"]
}

const question52 = {
    question: "Please select a hotel which suits you",
    option: ["krishna hotel", "babu hotel"]
}

const question53 = {
    question: "Please select a hotel which suits you",
    option: ["paras hotel", "chirag hotel"]
}

const question55 = {
    question: "Thank you for provding me all valid information now last step, please confirm your booking.",
    option: ["Confirm", "No"]
}

const question6 = {
    question: `Thank you, your booking is confirmed.. your ticket.no: ${randomT}`
}



document.getElementById('inputAnswer').addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        myFunction()
        this.value= '';
    }
});
// function removeInput() {
//     const re = document.getElementsByClassName('bottom')[0].remove();
//     re.reset()
// }


function myFunction() {
    let val = document.getElementById("inputAnswer").value
    let answer = document.getElementById("inputAnswer").value.toLowerCase()
    // console.log(val)


    // asking for hotel bokking
    if (currentstep == 1) {
        myfunction1(question11)
        currentstep += 1

    } else if (currentstep == 2) {
        if (answer == "yes") {           // asking for state
            myfunction1(question2);
            currentstep += 1
            //  val.reset();
            //  console.log(val)
        } else if (answer == "no") {
            alert("okay if you are not interested you can leave this ppage!!")
        } else {
            alert("please justify us 'yes' or 'no' only");    //   kuch nahi dala isko thee kro
        }

    } else if (currentstep == 3) {
        if (answer == "punjab") {
            myfunction1(question31)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "delhi") {
            myfunction1(question32)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "j&k") {
            myfunction1(question33)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "bihar") {
            myfunction1(question34)
            currentstep += 1
            //  useanswer.value = "";
        } else {
            alert('Invalid State')
        }
    } else if (currentstep == 4) {                                                         //for punjab
        if (answer == "bathinda") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "mohali") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "chandigarh") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "amritsar") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "near cp") {                                                 // for delhi
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "near red fort") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "near nehru palace") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "srinagar") {      //for jammu
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "jammu") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "anantnag") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "anantnag") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "patna") {   // for bihar
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "siwan") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "rajgir") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else if (answer == "arra") {
            myfunction1(question4)
            currentstep += 1
            //  useanswer.value = "";
        } else {
            alert('Please enter valid city name');
        }
    } else if (currentstep == 5) {                                 // selecting hotel stars
        if (answer == "5star") {
            myfunction1(question51)
            currentstep += 1
        } else if (answer == "4star") {
            myfunction1(question52)
            currentstep += 1
        } else if (answer == "3star") {
            myfunction1(question53)
            currentstep += 1
        } else {
            alert('please give us a valid royality');
        }
    } else if (currentstep == 6) {
        if (answer == "hotel royal inn") {
            myfunction1(question55)                                        // seleting hotel 5starname
            currentstep += 1
        } else if (answer == "hotel saphire inn") {
            myfunction1(question55)
            currentstep += 1
        } else if (answer == "krishna hotel") {
            myfunction1(question55)
            currentstep += 1                                     // 4star
        } else if (answer == "babu hotel") {
            myfunction1(question55)
            currentstep += 1
        } else if (answer == "paras hotel") {                            //3star
            myfunction1(question55)
            currentstep += 1
        } else if (answer == "chirag hotel") {
            myfunction1(question55)
            currentstep += 1
        } else {
            alert('please give us a valid hotel name');
        }
    } else if (currentstep == 7) {
        if (answer == "confirm") {
            currentstep += 1
            // console.log(document.getElementsByClassName('bottom')[0])
            // removeInput()
            myfunction1(question6)
        }
        else {
            alert('please try again')
        }
    }
}
myFunction()