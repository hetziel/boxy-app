(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))b(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&b(g)}).observe(document,{childList:!0,subtree:!0});function u(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function b(c){if(c.ep)return;c.ep=!0;const f=u(c);fetch(c.href,f)}})();const app_min="",home=()=>({saludos:1,div:"<div>hola</div>"}),second=()=>({saludos:"adios"}),routes=async t=>{let i={home,second};t&&i.hasOwnProperty(t)?(await boot(t,i[t]),scripts(t,i[t])):t&&await boot(t)},callbackLive=(t,i)=>{for(const u of t)u.type==="childList"&&(_onView&&boxyView(),_onCode&&boxyCode())},observerLive=new MutationObserver(callbackLive),targetNodeLive=document.body,configLive={attributes:!0,childList:!0,subtree:!0};observerLive.observe(targetNodeLive,configLive);let viewContainer=[],codeContainer=[],_onView=!0,_onCode=!0;const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"/></svg>';boxyView();boxyCode();liveEvents();window.addEventListener("load",t=>{console.log("Boxy Live is mounted")});function get_data(t,i,u){const b=i;fetch(t+".html").then(c=>{c.status==404?u(`<div error>la vista ${t} no se ha encontrado en la ruta establecida <span code class="mt1">${b}</span></div>`):c.status==403?u(`<div error> Error en <span code>${b}</span> no se ha encontrado en la ruta establecida.</div>`):c.text().then(f=>{u(f)})})}function boxyView(){let t=document.querySelector("[b-view]");t&&_onView&&(document.body.style.display="none",_onView=!1,fillData(t,"view").then(i=>{t.outerHTML=`${i}`,_onView=!0,document.body.style.display="revert"}))}function fillData(t,i){let u,b,c;switch(i){case"view":u=viewContainer,b="b-view",c="/views/";break;case"code":u=codeContainer,b="b-code",c="/data/";break}let f=t.outerHTML;return f=f.replace(/</g,"&lt;").replace(/>/g,"&gt;"),t=t.getAttribute(b).replace(".","/"),new Promise((g,p)=>{u[t]?g(u[t]):get_data(c+t.trim(),f,function(m){u[t]=m,g(m)})})}function boxyCode(){let t=document.querySelector("[b-code]");t&&_onCode&&t.getAttribute("b-code")!=""&&(_onCode=!1,fillData(t,"code").then(i=>{const u=document.createElement("span");u.innerHTML=svg,u.classList.add("copy-icon");const b=document.createTextNode(i),c=document.createElement("pre");c.appendChild(b),t.appendChild(c),w3CodeColor(t),t.appendChild(u),t.removeAttribute("b-code"),t.setAttribute("code",""),_onCode=!0}))}function liveEvents(){document.addEventListener("click",function(t){let i=t.target.closest("[code] .copy-icon");i&&appCopy(i.parentNode.children[0])})}function w3CodeColor(t,i){var u=i||"html",b=document.getElementById(t)||t,c=b.innerHTML,f="#0dcaf0",g="#eb6b06",p="#c58dff",m="#ffff00",y="green",x="brown",j="red",T="mediumblue",C="black",k="red",q="black",I="mediumblue",W="brown",z="red",B="black";b.style.fontFamily="Consolas,'Courier New', monospace",u||(u="html"),u=="html"&&(c=R(c)),u=="css"&&(c=L(c)),u=="js"&&(c=P(c)),b.innerHTML=c;function H(s,e,a,r,o){for(var n,l,d="",h=[];s.search(e)>-1;)n=s.search(e),l=s.indexOf(a,n),l==-1&&(l=s.length),o?(h.push(r(s.substring(n,l+a.length))),s=s.substring(0,n)+o+s.substr(l+a.length)):(d+=s.substring(0,n),d+=r(s.substring(n,l+a.length)),s=s.substr(l+a.length));this.rest=d+s,this.arr=h}function R(s){var e=s,a="",r,o,n,l,d;for(r=new H(e,"&lt;!--","--&gt;",O,"W3HTMLCOMMENTPOS"),e=r.rest;e.indexOf("&lt;")>-1;)l="",o=e.indexOf("&lt;"),e.substr(o,9).toUpperCase()=="&LT;STYLE"&&(l="css"),e.substr(o,10).toUpperCase()=="&LT;SCRIPT"&&(l="javascript"),n=e.indexOf("&gt;",o),n==-1&&(n=e.length),a+=e.substring(0,o),a+=D(e.substring(o,n+4)),e=e.substr(n+4),l=="css"&&(n=e.indexOf("&lt;/style&gt;"),n>-1&&(a+=L(e.substring(0,n)),e=e.substr(n))),l=="javascript"&&(n=e.indexOf("&lt;/script&gt;"),n>-1&&(a+=P(e.substring(0,n)),e=e.substr(n)));for(e=a+e,d=0;d<r.arr.length;d++)e=e.replace("W3HTMLCOMMENTPOS",r.arr[d]);return e}function D(s){for(var e=s,a="",r,o,n;e.search(/(\s|<br>)/)>-1;)r=e.search(/(\s|<br>)/),o=e.indexOf("&gt;"),o==-1&&(o=e.length),a+=e.substring(0,r),a+=$(e.substring(r,o)),e=e.substr(o);return n=a+e,n="<span style=color:"+f+">&lt;</span>"+n.substring(4),n.substr(n.length-4,4)=="&gt;"&&(n=n.substring(0,n.length-4)+"<span style=color:"+f+">&gt;</span>"),"<span style=color:"+g+">"+n+"</span>"}function $(s){for(var e=s,a="",r,o,n,l,d;e.indexOf("=")>-1;)o=-1,r=e.indexOf("="),n=e.indexOf("'",r),l=e.indexOf('"',r),d=e.indexOf(" ",r+2),d>-1&&(d<n||n==-1)&&(d<l||l==-1)?o=e.indexOf(" ",r):l>-1&&(l<n||n==-1)&&(l<d||d==-1)?o=e.indexOf('"',e.indexOf('"',r)+1):n>-1&&(n<l||l==-1)&&(n<d||d==-1)&&(o=e.indexOf("'",e.indexOf("'",r)+1)),(!o||o==-1||o<r)&&(o=e.length),a+=e.substring(0,r),a+=K(e.substring(r,o+1)),e=e.substr(o+1);return"<span style=color:"+p+">"+a+e+"</span>"}function K(s){return"<span style=color:"+m+">"+s+"</span>"}function O(s){return"<span style=color:"+y+">"+s+"</span>"}function L(s){var e=s,a="",r,o,n,l,d,h,v;for(n=new H(e,/\/\*/,"*/",O,"W3CSSCOMMENTPOS"),e=n.rest;e.search("{")>-1;){for(r=e.search("{"),d=e.substr(r+1),v=1,h=0,l=0;l<d.length&&(d.substr(l,1)=="{"&&(v++,h++),d.substr(l,1)=="}"&&v--,v!=0);l++);for(v!=0&&(h=0),o=r,l=0;l<=h;l++)o=e.indexOf("}",o+1);o==-1&&(o=e.length),a+=e.substring(0,r+1),a+=F(e.substring(r+1,o)),e=e.substr(o)}for(e=a+e,e=e.replace(/{/g,"<span style=color:"+C+">{</span>"),e=e.replace(/}/g,"<span style=color:"+C+">}</span>"),l=0;l<n.arr.length;l++)e=e.replace("W3CSSCOMMENTPOS",n.arr[l]);return"<span style=color:"+x+">"+e+"</span>"}function F(s){var e=s,a="",r,o,n,l;if(e.indexOf("{")>-1)return L(e);for(;e.search(":")>-1;){for(r=e.search(":"),l=!0,n=r;l==!0;)l=!1,o=e.indexOf(";",n),e.substring(o-5,o+1)=="&nbsp;"&&(l=!0,n=o+1);o==-1&&(o=e.length),a+=e.substring(0,r),a+=J(e.substring(r,o+1)),e=e.substr(o+1)}return"<span style=color:"+j+">"+a+e+"</span>"}function J(s){var e=s,a="",r;for(e="<span style=color:"+C+">:</span>"+e.substring(1);e.search(/!important/i)>-1;)r=e.search(/!important/i),a+=e.substring(0,r),a+=U(e.substring(r,r+10)),e=e.substr(r+10);return result=a+e,result.substr(result.length-1,1)==";"&&result.substr(result.length-6,6)!="&nbsp;"&&result.substr(result.length-4,4)!="&lt;"&&result.substr(result.length-4,4)!="&gt;"&&result.substr(result.length-5,5)!="&amp;"&&(result=result.substring(0,result.length-1)+"<span style=color:"+C+">;</span>"),"<span style=color:"+T+">"+result+"</span>"}function U(s){return"<span style=color:"+k+";font-weight:bold;>"+s+"</span>"}function P(s){var e=s,a="",r=[],o,n,l="",d,h,v,M,S,E,w,N,_;for(o=0;o<e.length;o++)n=e.substr(o,1),n=="\\"&&(r.push(e.substr(o,2)),n="W3JSESCAPE",o++),l+=n;for(e=l,_=1;_==1&&(d=A(e,"'","'",V),h=A(e,'"','"',V),v=A(e,/\/\*/,"*/",O),M=A(e,/\/\//,"<br>",O),E=te(e,Y),S=ee("js",e,G),N=X(e,Q),!(Math.max(E[0],d[0],h[0],v[0],M[0],S[0],N[0])==-1||(w=Z(E,d,h,v,M,S,N),w[0]==-1)));)w[0]>-1&&(a+=e.substring(0,w[0]),a+=w[2](e.substring(w[0],w[1])),e=e.substr(w[1]));for(e=a+e,o=0;o<r.length;o++)e=e.replace("W3JSESCAPE",r[o]);return"<span style=color:"+q+">"+e+"</span>"}function V(s){return"<span style=color:"+W+">"+s+"</span>"}function G(s){return"<span style=color:"+I+">"+s+"</span>"}function Y(s){return"<span style=color:"+z+">"+s+"</span>"}function Q(s){return"<span style=color:"+B+">"+s+"</span>"}function X(s,e){var a,r,o,n,l,d=[".","<"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%"];if(n=s.indexOf("."),n>-1){for(a=s.substr(n+1),o=0;o<a.length;o++)for(cc=a[o],r=0;r<d.length;r++)if(cc.indexOf(d[r])>-1)return l=o,[n+1,l+n+1,e]}return[-1,-1,e]}function Z(){var s,e=[];for(s=0;s<arguments.length;s++)arguments[s][0]>-1&&(e.length==0||arguments[s][0]<e[0])&&(e=arguments[s]);return e.length==0&&(e=arguments[s]),e}function ee(s,e,a){var r,o,n,l=-1,d=-1,h;for(s=="js"&&(r=["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"]),o=0;o<r.length;o++)n=e.indexOf(r[o]),n>-1&&(h=/\W/g,e.substr(n+r[o].length,1).match(h)&&e.substr(n-1,1).match(h)&&n>-1&&(l==-1||n<l)&&(l=n,d=l+r[o].length));return[l,d,a]}function A(s,e,a,r){var o,n;return o=s.search(e),n=s.indexOf(a,o+a.length),n==-1&&(n=s.length),[o,n+a.length,r]}function te(s,e){var a=["<br>"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%","="],r,o,n,l=0,d,h;for(r=0;r<s.length;r++)for(o=0;o<a.length;o++)if(n=s.substr(r,a[o].length),n==a[o]){if(n=="-"&&(s.substr(r-1,1)=="e"||s.substr(r-1,1)=="E"))continue;if(d=r,l<d&&(h=s.substring(l,d),!isNaN(h)))return[l,d,e];r+=a[o].length,l=r,r-=1;break}return[-1,-1,e]}}function appCopy(t){var i=document.createRange();i.selectNodeContents(t),window.getSelection().removeAllRanges(),window.getSelection().addRange(i),document.execCommand("copy"),window.getSelection().removeRange(i)}const boxy="0.3.2.1006";window.addEventListener("load",t=>{console.log("Boxy "+boxy+" is mounted"),boxyVersion(!0),bgImg(),bEvents()});let hash2="",_switch=!1;const targetNode=document.body,config={attributes:!0,childList:!0,subtree:!0},callback=(t,i)=>{setColor(),bgImg()},observer=new MutationObserver(callback);observer.observe(targetNode,config);function boxyVersion(t=!1){t?document.body.setAttribute("version",boxy):document.body.removeAttribute("version")}function bgImg(){document.querySelectorAll("[bg-img]").forEach(function(t){let i=t.getAttribute("bg-img");i&&(t.style.backgroundImage="url("+i+")",t.setAttribute("bg-img",""))})}function setColor(t,i){if(t&&i)changeColor("color",t,i,!0),changeColor("bg",t,i,!0),changeColor("tx",t,i,!0);else{let u=[];u.primary="blue",u.secondary="gray",u.success="green",u.warning="yellow",u.danger="red",u.info="light-blue",u.light="white",u.dark="dark-gray";for(let b in u)changeColor("color",b,u[b]),changeColor("bg",b,u[b]),changeColor("tx",b,u[b])}}function changeColor(t,i,u,b){document.querySelectorAll("["+t+"]").forEach(function(c){b?c.attributes[t]&&c.attributes[t].value==i&&(c.removeAttribute(t),c.setAttribute(t,u)):c.attributes[t].value==i&&(c.setAttribute("rs",c.attributes[t].value),c.setAttribute(t,u))})}const getHash=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";function bEvents(){document.body.addEventListener("click",function(t){let i=t.target.closest("[mobile-side]"),u=document.querySelector(".b-side[opened]");i&&(i.parentNode.hasAttribute("opened")?i.parentNode.removeAttribute("opened"):(u&&u.removeAttribute("opened"),i.parentNode.setAttribute("opened",""))),!t.target.closest(".b-side[opened]")&&u&&u.removeAttribute("opened");let c=t.target.closest("[open-nav]");if(c&&hash2!=getHash()&&(_switch=!1),!_switch)c&&(c.parentNode.querySelector("[bx-content]").setAttribute("opened",""),_switch=!0,hash2=getHash());else if(!t.target.closest(".b-header [bx-content][opened]")){let p=document.querySelector(".b-header [bx-content][opened]");p&&(p.removeAttribute("opened"),_switch=!1)}let f=t.target.closest("[bx-title]");if(f){let g=f.parentNode.hasAttribute("autoclose"),p=f.parentNode.querySelectorAll("[bx-title]"),m=f.parentNode.querySelectorAll("[bx-content]"),y=f.nextElementSibling;g&&p&&m&&(p.forEach(x=>{x!=f&&x.removeAttribute("active")}),m.forEach(x=>{x!=y&&(x.style.maxHeight=null)})),f.setAttribute("active",""),y.hasAttribute("bx-content")&&(y.style.maxHeight?(y.style.maxHeight=null,f.removeAttribute("active")):y.style.maxHeight=y.scrollHeight+"px")}})}let main={};async function render(view,data=null){if(typeof data=="function"&&(data=data()),main.hasOwnProperty(view))return eval("`"+main[view]+"`");{let response=await fetch("../view/"+view+".html"),text=await response.text();return main[view]=text,eval("`"+text+"`")}}function scripts(t,i=null){let u=document.querySelectorAll("[b-value]"),b=document.querySelectorAll("[b-model]");typeof i=="function"&&(i=i(),b.forEach(g=>{let p=g.getAttribute("b-model");f(i,p)?g.value=i[p]:i[p]=g.value,u.forEach(m=>{m.textContent=i[p]})})),document.addEventListener("input",g=>{let p=g.target.getAttribute("b-model");p&&(i[p]=g.target.value,c())});function c(){u.forEach(g=>{let p=g.getAttribute("b-value");f(i,p)&&(g.textContent=i[p])})}function f(g,p){return g[p]!==void 0}}async function boot(t,i=null){document.querySelector("#app").innerHTML=await render(t,i)}async function run(t){routes(t)}document.addEventListener("click",t=>{let i=t.target.closest("[b-go]");i&&i.getAttribute("b-go")!=""&&(history.pushState({page:1},"Página 1","/"),run(i.getAttribute("b-go")))});(async function(){let t="home";const i=location.pathname;run(i.replace("/","").toLocaleLowerCase()||t)})();
