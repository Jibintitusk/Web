function number(value){
    document.getElementById('textview').value +=value;
}
function remov(){
    document.getElementById("textview").value="";
}

function result(){
    let tag = document.getElementById('textview');
    let ren = eval(tag.value);
    tag.value = ren;
    // textview.value=eval(textview.value)
}
function calcOff(){
    let t=document.querySelectorAll('.button');
    for(var i=0;i<t.length;i++)
    {
        t[i].classList.add('disable');
    }let display=document.getElementById('textview');
    display.innerHTML='0'
}
function calcOn(){
    let t=document.querySelectorAll('.button');
    for(var i=0;i<t.length;i++)
    {
        t[i].classList.remove('disable');
    }let display=document.getElementById('textview');
    display.innerHTML='0'
}
setInterval(() => {
    let screen=document.getElementById("one").innerHTML;
    if(screen==1){
        document.getElementById("one").innerHTML="One";
        document.getElementById("two").innerHTML="Two";
        document.getElementById("three").innerHTML="Three";
        document.getElementById("four").innerHTML="Four";
        document.getElementById("five").innerHTML="Five";
        document.getElementById("six").innerHTML="Six";
        document.getElementById("seven").innerHTML="Seven";
        document.getElementById("eight").innerHTML="Eight";
        document.getElementById("nine").innerHTML="Nine";
    }
    else{
        document.getElementById("one").innerHTML="1";
        document.getElementById("two").innerHTML="2";
        document.getElementById("three").innerHTML="3";
        document.getElementById("four").innerHTML="4";
        document.getElementById("five").innerHTML="5";
        document.getElementById("six").innerHTML="6";
        document.getElementById("seven").innerHTML="7";
        document.getElementById("eight").innerHTML="8";
        document.getElementById("nine").innerHTML="9";
    }
}, 5000);
setTimeout(() => {
    document.getElementById('name').innerHTML="";
}, 4000);