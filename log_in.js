let password_input =document.querySelector("#pass");
let password_tu =document.querySelector("#pass_tu");
password_tu.onclick =function (){
    if(password_tu.dataset.flag ==0){
        console.log(password_tu.dataset.flag)
        console.log(typeof password_tu.dataset.flag)
        password_tu.src="resource/eye_open.svg";
        password_input.type="text";
        password_tu.dataset.flag=1;
    }
    else{
        console.log(password_tu.dataset.flag)
        console.log(typeof password_tu.dataset.flag)
        password_tu.src="resource/eye_close.svg";
        password_input.type="password";
        password_tu.dataset.flag=0;
    }
}
