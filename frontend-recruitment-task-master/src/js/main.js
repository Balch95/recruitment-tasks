
//Add click value

let clickValue = 0;

clickValue = localStorage.getItem('click')

const onClick = () =>{
    clickValue++;
    document.getElementById("counter").innerText = clickValue + ' times';
    return clickValue;
};


const setValue = () =>{
    clickValue = onClick();
}

document.getElementById('button').onclick = setValue;

// Reset button


const buttonResetSet = (value) =>{
    if(value >= 5){
        document.getElementById('reset').style.visibility = 'visible';
    }else{
        document.getElementById("reset").style.visibility = 'hidden';
    };
        
};

const onClickResetValue = () => {
    clickValue = 0;
    localStorage.setItem('click', 0);
    document.getElementById("counter").innerText = clickValue + ' times';
    return clickValue;
}

const setValueReset = () =>{
    clickValue = onClickResetValue();
}

document.getElementById('reset').addEventListener('click', setValueReset);





//Pop-up click

document.getElementById("button").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("pop-up").style.visibility = "visible";
    buttonResetSet(clickValue);
    localStorage.setItem('click', clickValue);
});
  
document.addEventListener("click", () => {
    document.getElementById("pop-up").style.visibility = 'hidden'
    document.getElementById("reset").style.visibility = 'hidden';
});
  
document.getElementById("pop-up").addEventListener("click", (e) => {
    e.stopPropagation();
});
document.getElementById("button").addEventListener("click", (e) => {
    e.stopPropagation();
});







 
