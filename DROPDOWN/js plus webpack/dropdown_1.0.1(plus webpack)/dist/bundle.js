(()=>{"use strict";const e=(e,t)=>{e.classList.toggle(t)},t=e=>{if("checkbox"===e.target.type)return;const t=e.currentTarget.querySelector("input[type='checkbox']");t.checked=!t.checked},c=document.querySelector(".select-btn"),r=c.querySelector(".text-content").innerText,n=document.querySelector(".list-items"),o=n.querySelectorAll(".item"),i=document.querySelector(".text-content");c.addEventListener("click",(()=>{e(c,"active")})),c.addEventListener("click",(()=>{e(n,"exists")})),o.forEach((e=>{e.addEventListener("click",t),e.addEventListener("click",(()=>{((e,t,c,r="")=>{const n=document.querySelectorAll(r);let o=0;n.forEach((e=>{e.checked&&o++})),e.textContent=o?c+String(o):t})(i,r,"Selected ",".list-items__item__checkbox")}))}))})();
//# sourceMappingURL=bundle.js.map