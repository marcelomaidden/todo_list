document.querySelector(".submit").addEventListener("click",(function(e){e.preventDefault(),console.log("clicked")}),!1),document.querySelector(".cancel").addEventListener("click",(function(){document.querySelectorAll("input").forEach((e=>{e.value=""}))}),!1);