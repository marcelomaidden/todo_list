(()=>{"use strict";const e=class{constructor(e,t){this.name=e,this.color=t}},t=class{constructor(){if(localStorage.myProjects)this.myProjects=JSON.parse(localStorage.myProjects||"[]");else{const t=new e("default","hsl(204, 86%, 53%)");this.myProjects=[],this.myProjects.push(t)}localStorage.myTodos?this.myTodos=JSON.parse(localStorage.myTodos||"[]"):this.myTodos=[],this.setStorage=this.setStorage.bind(this),this.setStorage(),this.removeTodo=this.removeTodo.bind(this),this.findTodo=this.findTodo.bind(this)}setStorage(){localStorage.setItem("myProjects",JSON.stringify(this.myProjects)),localStorage.setItem("myTodos",JSON.stringify(this.myTodos))}findTodo(e){return this.myTodos.filter((t=>t.id===e))}removeTodo(e){const t=this.myTodos.filter((t=>t.id!==e));this.myTodos=t,this.setStorage()}addTodo(e){this.myTodos.push(e),this.setStorage()}addProject(e){this.myProjects.push(e),this.setStorage()}},o=new t;class c{constructor(e,t,o,s,r){this.id=c.id,this.project=e,this.title=t,this.description=o,this.dueDate=s,this.priority=r,this.createCard=this.createCard.bind(this),c.id+=1}static deleteTodo(e){const t=o.findTodo(e)[0],c=document.querySelector(`.${t.project}`),s=`.todo${e}`,r=document.querySelector(s);c.removeChild(r),o.removeTodo(e)}createCard(){const e=document.createElement("div");e.setAttribute("class",`card todo${this.id}`);const t=document.createElement("div");t.setAttribute("class","card-content");const o=document.createElement("div");o.setAttribute("class","media");const s=document.createElement("div");s.setAttribute("class","media-content");const r=document.createElement("p");r.setAttribute("class","title is-4"),r.innerText=this.title;const i=document.createElement("p");i.setAttribute("class","subtitle is-6"),i.innerText=this.description;const d=document.createElement("p");d.setAttribute("class","subtitle is-6"),d.innerText=this.priority;const n=document.createElement("p");n.setAttribute("class","subtitle is-6"),n.innerText=this.dueDate;const a=document.createElement("button");a.setAttribute("class","button submit is-link"),a.setAttribute("id",this.id),a.innerText="Delete",a.addEventListener("click",(()=>{c.deleteTodo(this.id)})),s.appendChild(r),s.appendChild(i),s.appendChild(d),s.appendChild(n),s.appendChild(a),o.appendChild(s),t.appendChild(o),e.appendChild(t),document.querySelector(`.${this.project}`).appendChild(e)}}c.id=0;const s=c,r=new t,i=new t,d=document.querySelector("main"),n=new class{createCard(e,t){const o=document.createElement("div");o.setAttribute("class",`box ${e}`),o.setAttribute("style",`background-color:${t}`);const c=document.createElement("div");c.innerText=e,o.appendChild(c),d.appendChild(o)}addProject(e){i.addProject(e),this.createCard(e.name,e.color)}listProjects(){i.myProjects.map((e=>this.createCard(e.name,e.color)))}};n.listProjects(),class{static list(){const e=[];r.myTodos.forEach((t=>{const{project:o,title:c,description:r,dueDate:i,priority:d}=t,n=new s(o,c,r,i,d);n.createCard(),e.push(n)})),r.myTodos=e,r.setStorage()}}.list();const a=new t;function l(){document.querySelectorAll("input").forEach((e=>{e.value=""}))}function u(e){const t=document.querySelector(".project"),o=document.createElement("option");o.text=e,t.add(o)}function m(){document.querySelector(".modal").setAttribute("class","modal")}document.querySelector(".submit").addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector(".project"),o=document.querySelector(".todo-title"),c=document.querySelector(".description"),r=document.querySelector(".priority"),i=document.querySelector(".due-date"),d=new s(t.value,o.value,c.value,i.value,r.value);d.createCard(),a.addTodo(d),l()}),!1),document.querySelector(".cancel").addEventListener("click",l,!1),document.querySelector(".cancel-project").addEventListener("click",m,!1),document.querySelector(".modal-close").addEventListener("click",m,!1),document.querySelector(".modal-button").addEventListener("click",(function(){document.querySelector(".modal").setAttribute("class","modal is-active")}),!1),document.querySelector(".submit-project").addEventListener("click",(function(){const t=document.querySelector(".project-name"),o=document.querySelector(".project-color"),c=new e(t.value,o.value);n.addProject(c),u(c.name),m()}),!1),document.querySelector(".project").innerHTML="",a.myProjects.map((e=>u(e.name)))})();