// JavaScript Document

//--------------------------------------------------------index.html-----------------------------------------------

//---  check character input username--- --	
		
document.getElementsByClassName('form-control')[0].addEventListener('input',function(){
    var username=document.getElementsByClassName('form-control')[0].value;
    var username_len=username.length;
    if(username_len>5){
        document.getElementsByClassName('form-text')[0].innerHTML= '<img src="img/1.png" width="15px" alt="ok">'+username;	
        document.getElementsByClassName('form-text')[0].style.color='black';
    }else{
        document.getElementsByClassName('form-text')[0].innerHTML= '<img src="img/2.png" width="15px" alt="not-ok">نام کاربری حداقل باید 5 کاراکتر باشد';
        document.getElementsByClassName('form-text')[0].style.color='red';
    }
});
//---- check character input password------
    
document.getElementsByClassName('form-control')[1].addEventListener('input',function(){
    var password=document.getElementsByClassName('form-control')[1].value;
    var password_len=password.length;
    if(password_len>6){
        document.getElementsByClassName('form-text')[1].innerHTML='<img src="img/1.png" width="15px" alt="ok">'+password;
        document.getElementsByClassName('form-text')[1].style.color='black';
    }else{
        document.getElementsByClassName('form-text')[1].innerHTML='<img src="img/2.png" width="15px" alt="not-ok"> رمزعبور حداقل 6 کاراکتر باشد';
        document.getElementsByClassName('form-text')[1].style.color='red';
    }
    });	



//-------------------------------------------------------panel.html-----------------------------------------------

//----add new note---
document.getElementById("add-btn").addEventListener('click',function(){
console.log('salam')
//----change path-name---	
var loc=window.location.href;
console.log(loc);
window.location.href=loc+'#addNote';

//------- hidden DASHBORD ---------	
document.getElementsByClassName("div1")[0].style.display='none';
document.getElementsByClassName("div2")[0].style.display='none';
//document.getElementsByClassName("div3")[0].classList.remove('d-none');
//document.getElementsByClassName("div-asli")[0].classList.add('my-auto');

//----rotate and change context  form-box---	
document.getElementsByClassName("submit-btn")[0].addEventListener('click',function(){
    
    var val_note1=document.getElementById('note1').value;
    console.log(val_note1);
    var val_date=document.getElementById('date').value;
    console.log(val_date);
    var val_note2=document.getElementById('note2').value;
    console.log(val_note2);
    var val_attach_file=document.getElementById('attach-file').value;
    console.log(val_attach_file);
    var val_long_note=document.getElementById('long-note').value;
    console.log(val_long_note);
    
    
    document.getElementsByClassName("form-box")[0].classList.add('rotate-changeInner');
    document.getElementsByClassName("form-box")[0].innerHTML="";
//--create form-box inner----	
    document.getElementsByClassName("form-box")[0].innerHTML='<div id="para_div"><span>تاریخ امروز برابر است با:</br>'+val_date+'</span><p>اولین نوت برابر است با :</br> '+val_note1+'</p><p>دومین نوت برابر است با : </br>'+val_note2+'</p><p>متن طولانی برابر است با :</br>'+val_long_note+' </p><p>فایل ضمیمه شده برابر است با : </br>'+val_attach_file+'</p></div>';
});
});	