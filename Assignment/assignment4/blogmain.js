window.onload = pageload1 ;

var post_order =1 ;

function pageload1(){
    alert("Wellcome to the Forum");
    let welcome = document.getElementById("top");
    welcome.innerHTML = "Welcome to the Forum";
    console.log(welcome);
}

function postFunction(){
var post1 = document.getElementById("topic");
var post2 = document.getElementById("reply1");
var post3 = document.getElementById("reply2");

let msg = document.getElementById("message").value;
 
 if (post_order == 1) {
    post1 =  document.getElementById("topic").innerHTML =msg;
    document.getElementById("message").innerHTML = "";
 }
 else if (post_order ==2){
    post2 =  document.getElementById("reply1").innerHTML =msg;
    document.getElementById("message").innerHTML = "";
 }else if (post_order ==3){
    post3 =  document.getElementById("reply2").innerHTML =msg;
    document.getElementById("message").innerHTML = "";
 }
post_order ++;
document.getElementById("message").value = "";

}

function clearFunction(){
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    post_order = 1;
}