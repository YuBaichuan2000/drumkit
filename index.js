// annoynomous function
// document.querySelector('button').addEventListener("click", function() {
//     alert("I got clicked!");
// })

// document.querySelectorAll('.drum').forEach(item => {
//     item.addEventListener('click', event => {
//         alert("I got clicked!");
//     })
// })

var length = document.querySelectorAll('.drum').length;
for (var i=0; i<length; i++) {
    // mouse click
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonHTML = this.innerHTML; 
        play(buttonHTML);}
    )
    // keyboard press
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event){
        var keyboard = event.key;
        play(keyboard);}
    ) 
}

function play(sound) {
    switch (sound) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log('Warning!')
    }
}

// construction function
// function HouseKeeper (name, age, experience) {
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
//     this.moveSuitcase = function() {alert("Moved!")};
// }

// var houseKeeper1 = new HouseKeeper('Candy', 18, 10);

