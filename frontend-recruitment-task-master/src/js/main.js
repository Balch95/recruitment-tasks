
//Add click value

let clickValue = 0;

const onClick = () =>{
    clickValue++;
    document.getElementById("counter").innerText = clickValue + ' times';
    console.log(clickValue);
}

document.getElementById('button').onclick = onClick


//Pop-up click

document.getElementById("button").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("pop-up").style.visibility = "visible";
});
  
document.addEventListener("click", () => {
    document.getElementById("pop-up").style.visibility = 'hidden';
});
  
document.getElementById("pop-up").addEventListener("click", (e) => {
    e.stopPropagation();
});







 
