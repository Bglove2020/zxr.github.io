let password_input =document.querySelector("#pass");
let password_tu =document.querySelector("#pass_tu");
password_tu.zhuangtai =1;
password_tu.onclick =function (){
    if(password_tu.zhuangtai==1){
        password_tu.src="resource/eye_open.svg";
        password_input.type="text";
        password_tu.zhuangtai=0;
    }
    else{
        password_tu.src="resource/eye_close.svg";
        password_input.type="password";
        password_tu.zhuangtai=1;
    }
}