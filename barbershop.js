var link = document.querySelector (".login-link");
var popup = document.querySelector (".modal-login");
var close = document.querySelector (".modal-close");
var login = popup.querySelector ("[name=login]");

 link.addEventListener ("click", function (evt) {
     evt.preventDefault();
     popup.classList.add("modal-show");
     login.focus();
     
 });

 close.addEventListener ("click", function (evt) {
     evt.preventDefault();
     popup.classList.remove("modal-show");
 });

 window.addEventListener("keydown", function (evt){
     if (evt.keyCode === 27){
         if (popup.classList.contains("modal-show")){
             popup.classList.remove("modal-show");
         }}});