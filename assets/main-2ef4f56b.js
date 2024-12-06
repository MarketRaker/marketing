var v=Object.defineProperty;var w=(l,t,e)=>t in l?v(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var m=(l,t,e)=>(w(l,typeof t!="symbol"?t+"":t,e),e);import{M as y,C as S}from"./i18n-20f8d081.js";class E{constructor(t,e=10,s=10){m(this,"xLimit",10);m(this,"yLimit",10);m(this,"selector");this.selector=t,this.xLimit=e,this.yLimit=s,this.handleMouseMove()}handleMouseMove(){document.querySelectorAll(this.selector).forEach(t=>{t.addEventListener("mousemove",e=>{t.style.setProperty("transform","none"),t.style.setProperty("transition","color 0.2s ease-in-out, background 0.2s ease-in-out");const s=e.offsetX,o=e.offsetY,{width:i,height:n}=t.getBoundingClientRect(),r=i/2,c=n/2,a=(s-r)/r*this.xLimit,u=`perspective(500px) rotateX(${(o-c)/c*this.yLimit*-1}deg) rotateY(${a}deg)`;t.style.setProperty("transform",u)}),t.addEventListener("mouseleave",()=>{t.style.setProperty("transition","transform 0.5s, color 0.2s ease-in-out, background 0.2s ease-in-out"),t.style.setProperty("transform","perspective(500px) rotateX(0deg) rotateY(0deg)")})})}}class x{init(){this.preloader(),this.heroAnimation(),this.initSlick(),this.checkScrollPosition(),this.initIndustryScroller(),this.initIndustryExpander(),this.initBioViewer(),this.updateDates(),new y().initMobileMenu(),new E(".card")}preloader(){document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("preloader");t&&setTimeout(function(){t.style.animation="bounce 2s infinite",setTimeout(function(){t.style.display="none"},1500)},700)})}heroAnimation(){const e=document.querySelector(".hero"),s=window.innerWidth>680;!e||!s||e.addEventListener("mousemove",o=>{const i=o.clientX-window.innerWidth/2,n=o.clientY-window.innerHeight/2,r=i/window.innerWidth*10,c=n/window.innerHeight*10;e.style.backgroundPosition=`${50+r}% ${60+c}%`})}async initSlick(){await fetch("https://api.raker.market/trading_pairs/recommended").then(t=>t.json()).then(t=>{const e=document.getElementById("logoElement");t.records.forEach(s=>{const o=document.createElement("div");o.innerHTML=`<img src="${s.icon}" alt="BitCoin" />`,e&&e.appendChild(o)})}).catch(t=>console.error("Error:",t)),$(".logo-slider").slick({slidesToShow:5,slidesToScroll:1,autoplay:!0,speed:3e3,arrows:!1,autoplaySpeed:0,variableWidth:!0,responsive:[{breakpoint:1100,settings:{slidesToShow:4}},{breakpoint:680,settings:{slidesToShow:3}},{breakpoint:580,settings:{slidesToShow:1}}]})}checkScrollPosition(){let t=!1,e=0,s=0;$(".handle").on("mousedown",o=>{t=!0,e=o.clientY,s=parseInt($(".handle").css("top"))||0,$(".handle").css("cursor","grabbing")}),$(document).on("mousemove",o=>{var i,n;if(t){o.preventDefault();const r=o.clientY-e,c=s+r,a=window.innerHeight,d=a/6/2,u=a,h=Math.min(u,Math.max(d,c));$(".handle").css("top",h);const p=((n=(i=$("#division-sections"))==null?void 0:i.offset())==null?void 0:n.top)||0,f=$("#division-sections").outerHeight()||1,g=(h-d)/(u-d)*f+p;window.scrollTo(0,g)}}),$(document).on("mouseup",()=>{t=!1,$(".handle").css("cursor","grab")}),document.addEventListener("scroll",()=>{var h,p;const o=$(window).scrollTop()||0,i=(p=(h=$("#division-sections"))==null?void 0:h.offset())==null?void 0:p.top,n=$("#division-sections").outerHeight();if(!o||!i||!n)return;const r=i+n-n/6;o>=i&&o<=r?$(".section-progress").addClass("is-visible"):$(".section-progress").removeClass("is-visible");const c=window.innerHeight,a=c/6/2,d=c,u=(o-i)/n*(d-a)+a;$(".handle").css("top",u)})}initIndustryScroller(){const t=document.querySelector(".motion-scroller"),e=document.querySelector(".motion-scroller > .viewport");!t||!e||t.addEventListener("mousemove",s=>{const o=s.clientX,i=e.offsetWidth,n=e.scrollWidth,r=o/i*n-i/2;e.scrollLeft=r})}initIndustryExpander(){if(window.innerWidth<=640){const t=document.querySelectorAll(".item");t.forEach(e=>{const s=e.querySelector(".title");s&&s.addEventListener("click",o=>{o.preventDefault(),t.forEach(i=>{i==e?i.classList.toggle("open"):i.classList.remove("open")})})})}}updateDates(){const t=new S;t.current(),t.yearsSince()}initBioViewer(){$(document).on("click",".js-bio-more",t=>{const s=$(t.target).closest(".member");if(s.hasClass("is-expanded")){s.removeClass("is-expanded");return}s.addClass("is-expanded")})}}const L=new x;L.init();
