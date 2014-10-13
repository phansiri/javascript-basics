"use strict";

var name = 'Lit';
var fruits = ['apple', 'banana', 'mango', 'avocado'];

// alert('Hello ' + name);

//it can be done like this or the one on the bottom
/*function onLoaded() {
    var msgElem = document.getElementById('message')
    msgElem.innerHTML = 'Hello ' + name;
}
document.addEventListener('DOMContentLoaded', onLoaded);*/

document.addEventListener('DOMContentLoaded', function() {
    var idx;
    var fruitListElem = document.getElementById('fruit-list');
    var fruitLi;
    var animalSound = document.getElementById('animal-sound');
    var msgElem = document.getElementById('message')
    msgElem.innerHTML = 'Hello ' + name;

    //lops through each array.
    for (idx = 0; idx < fruits.length; ++idx) {
        console.log(fruits[idx]);
        fruitLi = document.createElement('li');
        fruitLi.innerHTML = fruits[idx];
        fruitListElem.appendChild(fruitLi);
    }

    var animalPic = document.getElementById('animal-picture')
    animalPic.addEventListener('mouseover', function() {
        msgElem.innerHTML = 'mmmmmmmmMmmmeeeeeooooooooowwwwwWWWWWWW!!!!!!';
        animalSound.play();
    });



    animalSound.addEventListener('ended', function() {
        msgElem.innerHTML = '';
    })

    window.setInterval(function() {
        document.getElementById('clock').innerHTML = new Date().toLocaleString();
    }, 1000)
});
