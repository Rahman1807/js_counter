let add = document.getElementById("increment");
let sub = document.getElementById("decrement");

let int = document.getElementById("number");
let integer =0;

add.addEventListener("click",function(){
    integer += 1;
    int.innerHTML =integer;
})

sub.addEventListener("click",function(){
    integer -= 1;
    int.innerHTML = integer;
})