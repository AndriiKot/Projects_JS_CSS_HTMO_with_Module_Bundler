(()=>{"use strict";const n=n=>"function"==typeof n,t=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:n)(t)&&t()||t},e=function(n){return new Promise((t=>setTimeout(t,n)))},o=document.querySelector("button"),i=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*t+n)}.bind(void 0,0,100),l=Array(8).fill(0),r=function(){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return[...new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)].map((()=>e(e(n))))}.bind(void 0,8,i),u=(((n,t)=>{n.classList.toggle(t)}).bind(void 0,o,"animationGo"),function(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return n?function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n=n.replace(/[%/]/g,""),n=n.replace("  "," "),n}(n),function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((n=>+n))}(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ")}(n))}(n):t});o.addEventListener("click",(async function n(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10;const c=document.querySelector("button");console.log(c),console.log(o);const a=i(c.style.borderRadius),g=l();await async function(){let n=0;for(;n<8;){n=0;for(let t=0;t<a.length;t++){if(a.length!==g.length){a.push(0);break}a[t]!==g[t]?(a[t]>g[t]?a[t]-=1:a[t]+=1,c.style.borderRadius=`${a[0]}% \n        ${a[1]}% \n        ${a[2]}%\n        ${a[3]}% / \n        ${a[4]}% \n        ${a[5]}% \n        ${a[6]}% \n        ${a[7]}%`,await e(d)):n++}}}(),await n(t,c)}))})();
//# sourceMappingURL=bundle.js.map