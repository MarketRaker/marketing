import{M as e,l as n,t as i,C as a}from"./mobile-burger-menu-47424413.js";class r{constructor(){this.preloader(),this.init()}init(){this.loadTranslations(),new a().current(),new e().initMobileMenu()}preloader(){const t=document.getElementById("preloader");t&&setTimeout(()=>{t.style.animation="bounce 2s infinite",setTimeout(()=>{t.style.display="none"},1500)},700)}loadTranslations(){n("privacy-policy").then(()=>{document.querySelectorAll("[data-i18n]").forEach(t=>{t.getAttribute("data-i18n")&&(t.innerHTML=i(t.getAttribute("data-i18n"),t.innerHTML))})})}}new r;