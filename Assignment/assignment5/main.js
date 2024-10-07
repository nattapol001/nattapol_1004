window.onload = LoadPage ;

var PostComOrder =1 ;

function LoadPage() {
    alert("Welcome to the Forum");
    let Welcome = document.getElementById("top");
    Welcome.innerHTML = "Welcome to the Forum";
    console.log(welcome);
}

function postFunction(){
    var Postcom1 = document.getElementById("topic");
    var Postcom2 = document.getElementById("reply1");
    var Postcom3 = document.getElementById("reply2");

    let mess = document.getElementById("message").value;

    if (PostComOrder == 1){
        Postcom1 = document.getElementById("topic").innerHTML =mess;
        document.getElementById("message").innerHTML = "";
    }else if (PostComOrder == 2){
        Postcom2 = document.getElementById("reply1").innerHTML =mess;
        document.getElementById("message").innerHTML = "";
    }else if (PostComOrder == 3){
       Postcom3 = document.getElementById("reply2").innerHTML =mess;
        document.getElementById("message").innerHTML = "";
    }
    PostComOrder ++;
    document.getElementById("message").value = "";
}

function clearFunction (){
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    PostComOrder = 1;
}