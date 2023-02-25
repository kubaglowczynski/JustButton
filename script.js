const button = document.getElementById('button');
let value;

button.addEventListener("mouseenter", function(){
    button.style.bottom = Math.floor(Math.random() * 80)+'%';
    button.style.right = Math.floor(Math.random() * 80)+'%';
    incrementValue();
});

function incrementValue(){
    value++;
    value = isNaN(value) ? 0 : value;
    console.log(value);

    if(value > 10 && value <= 15){
        button.innerHTML = "Come on...";
    }
    else if (value > 15 && value <= 25){
        button.innerHTML = "I'm getting bored...";
    }
    else if (value > 25){
        button.innerHTML = "You're too slow, sorry";
    }
}