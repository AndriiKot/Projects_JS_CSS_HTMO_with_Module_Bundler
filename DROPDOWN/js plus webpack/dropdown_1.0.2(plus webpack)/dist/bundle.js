(()=>{"use strict";const e=(e,t)=>{e.classList.toggle(t)},t=e=>{if("checkbox"===e.target.type)return;const t=e.currentTarget.querySelector("input[type='checkbox']");t.checked=!t.checked},c=(e,t,c,n="")=>{const o=document.querySelectorAll(n);let r=0;o.forEach((e=>{e.checked&&r++})),e.textContent=r?c+String(r):t},n=document.querySelector(".select-btn"),o=n.querySelector(".text-content").innerText,r=document.querySelector(".list-items"),i=r.querySelectorAll(".item"),l=document.querySelector(".text-content");n.addEventListener("click",e.bind(void 0,n,"active")),n.addEventListener("click",e.bind(void 0,r,"exists")),i.forEach(((e,n,r,i="content")=>{e.addEventListener("click",t),e.addEventListener("click",c.bind(void 0,l,o,"Selected ",".list-items__item__checkbox")),console.log(e.dataset[i])}))})();
//# sourceMappingURL=bundle.js.map