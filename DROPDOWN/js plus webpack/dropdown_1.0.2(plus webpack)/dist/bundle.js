(()=>{"use strict";const e=(e,t)=>{e.classList.toggle(t)},t=e=>{if("checkbox"===e.target.type)return;const t=e.currentTarget.querySelector("input[type='checkbox']");t.checked=!t.checked},c=new Set(["ruby","sql"]),o=new Set(["css","js","html"]),n=new Set([...c,...o]),l=(e=[],t=[])=>t.every((t=>e.includes(t)));console.log(l()),console.log(c),console.log(o),console.log(n),console.log("TEST fn ChekSubset: "),console.log(l(n,o));const s=(e,t,c,o="")=>{const n=document.querySelectorAll(o);let l=0;n.forEach((e=>{e.checked&&l++})),e.textContent=l?c+String(l):t},r=document.querySelector(".select-btn"),i=r.querySelector(".text-content").innerText,d=document.querySelector(".list-items"),u=d.querySelectorAll(".item"),S=document.querySelector(".text-content");r.addEventListener("click",e.bind(void 0,r,"active")),r.addEventListener("click",e.bind(void 0,d,"exists")),u.forEach((e=>{e.addEventListener("click",t),e.addEventListener("click",s.bind(void 0,S,i,"Selected ",".list-items__item__checkbox"))}))})();
//# sourceMappingURL=bundle.js.map