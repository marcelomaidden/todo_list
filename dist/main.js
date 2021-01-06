(()=>{"use strict";class t{constructor(e,s,o,i,c){this.id=t.id,this.project=e,this.title=s,this.description=o,this.dueDate=i,this.priority=c,this.createCard=this.createCard.bind(this),t.id+=1}static deleteTodo(t){let e=new s;const o=document.querySelector("main"),i=`.todo${t}`,c=document.querySelector(i);o.removeChild(c),e.deleteTodo(t)}createCard(){const e=document.createElement("div");e.setAttribute("class",`card todo${this.id}`);const s=document.createElement("div");s.setAttribute("class","card-content");const o=document.createElement("div");o.setAttribute("class","media");const i=document.createElement("div");i.setAttribute("class","media-content");const c=document.createElement("p");c.setAttribute("class","title is-4"),c.innerText=this.title;const r=document.createElement("p");r.setAttribute("class","subtitle is-6"),r.innerText=this.description;const d=document.createElement("p");d.setAttribute("class","subtitle is-6"),d.innerText=this.priority;const n=document.createElement("p");n.setAttribute("class","subtitle is-6"),n.innerText=this.dueDate;const l=document.createElement("button");l.setAttribute("class","button submit is-link"),l.setAttribute("id",this.id),l.innerText="Delete",l.addEventListener("click",(()=>{t.deleteTodo(this.id)})),i.appendChild(c),i.appendChild(r),i.appendChild(d),i.appendChild(n),i.appendChild(l),o.appendChild(i),s.appendChild(o),e.appendChild(s),document.querySelector(`.${this.project}`).appendChild(e)}}t.id=0;const e=t,s=class{constructor(){localStorage.myTodos?this.myTodos=JSON.parse(localStorage.myTodos||"[]"):this.myTodos=[],this.setStorage=this.setStorage.bind(this),this.addTodo=this.addTodo.bind(this),this.deleteTodo=this.deleteTodo.bind(this)}setStorage(){localStorage.setItem("myTodos",JSON.stringify(this.myTodos))}deleteTodo(t){let e=[];this.myTodos.map((s=>{s.id!==t&&e.push(s)})),this.myTodos=e,this.setStorage()}addTodo(t){this.myTodos.push(t),this.setStorage()}listTodos(){this.myTodos.forEach((t=>{let{project:s,title:o,description:i,priority:c,dueDate:r}=t;new e(s,o,i,c,r).createCard()}))}};let o=document.querySelector("main");new class{constructor(){if(localStorage.myProjects)this.myProjects=JSON.parse(localStorage.myProjects||"[]");else{let t=new class{constructor(t,e){this.name=t,this.color=e}}("default","hsl(204, 86%, 53%)");this.myProjects=[],this.myProjects.push(t),this.setStorage()}this.setStorage=this.setStorage.bind(this),this.listProjects()}setStorage(){localStorage.setItem("myProjects",JSON.stringify(this.myProjects))}listProjects(){this.myProjects.forEach((t=>{var e=document.createElement("div");e.setAttribute("class",`box ${t.name}`),e.setAttribute("style",`background-color:${t.color}`),o.appendChild(e)}))}};const i=new s;function c(){document.querySelectorAll("input").forEach((t=>{t.value=""}))}i.listTodos(),document.querySelector(".submit").addEventListener("click",(function(t){t.preventDefault();const s=document.querySelector(".project"),o=document.querySelector(".todo-title"),r=document.querySelector(".description"),d=document.querySelector(".priority"),n=document.querySelector(".due-date"),l=new e(s.value,o.value,r.value,n.value,d.value);l.createCard(),i.addTodo(l),c()}),!1),document.querySelector(".cancel").addEventListener("click",c,!1)})();