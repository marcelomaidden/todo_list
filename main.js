(()=>{"use strict";function e(){document.querySelectorAll("input").forEach((e=>{e.value=""}))}document.querySelector(".submit").addEventListener("click",(function(t){t.preventDefault();let i=document.querySelector(".project"),c=document.querySelector(".todo-title"),l=document.querySelector(".description"),n=document.querySelector(".priority"),r=document.querySelector(".due-date");new class{constructor(e,t,i,c,l){this.project=e,this.title=t,this.description=i,this.dueDate=c,this.priority=l,this.createCard()}createCard(){let e=document.createElement("div");e.setAttribute("class","card");let t=document.createElement("div");t.setAttribute("class","card-content");let i=document.createElement("div");i.setAttribute("class","media");let c=document.createElement("div");c.setAttribute("class","media-content");let l=document.createElement("p");l.setAttribute("class","title is-4"),l.innerText=this.title;let n=document.createElement("p");n.setAttribute("class","subtitle is-6"),n.innerText=this.description;let r=document.createElement("p");r.setAttribute("class","subtitle is-6"),r.innerText=this.priority;let d=document.createElement("p");d.setAttribute("class","subtitle is-6"),d.innerText=this.dueDate,c.appendChild(l),c.appendChild(n),c.appendChild(r),c.appendChild(d),i.appendChild(c),t.appendChild(i),e.appendChild(t),document.querySelector("main").appendChild(e)}}(i.value,c.value,l.value,r.value,n.value),e()}),!1),document.querySelector(".cancel").addEventListener("click",e,!1)})();