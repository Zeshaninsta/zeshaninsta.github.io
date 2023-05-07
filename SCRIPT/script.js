humbarger = document.querySelector(".humbarger");
        humbarger.onclick = function(){

         navBar = document.querySelector(".navigation");
        navBar.classList.toggle("active");
        }


function sendEmail(){
    Email.send({
        SecureToken:" 716be483-daeb-4174-bd1a-cc0edfcc6be7",
Host : "smtp.elasticemail.com",
Username : "zeshaninsta@gmail.com",
Password : "81D5D33FC22FA7572CCF9554D0D1D9021287",
To : 'urjiorphanageorganization@gmail.com',
From : "zeshaninsta@gmail.com",
ReplyTo : document.getElementById("email").value,
Subject : "New Email Request",
Body : "Name: " + document.getElementById("name").value + "<br> Email:" + document.getElementById("email").value + "<br> Message:" + 
document.getElementById("textarea").value
}).then(
message =>  alert("Your Message is sent succssfully")

);
}