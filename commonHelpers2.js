/* empty css                      */import{S as v,N as L,A as y}from"./assets/vendor-ff0ac405.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();new v(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:16,breakpoints:{1200:{slidesPerView:3,spaceBetween:24}},modules:[L],navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"}});const m=document.querySelector(".cookies-modal"),b=document.querySelector(".cookies-accept-btn"),g=document.querySelector(".cookies-decline-btn");document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("cookieAccepted")||h(),b.addEventListener("click",d),g.addEventListener("click",d)});function h(){m.classList.add("cookies-modal-active"),document.body.classList.add("no-scroll")}function d(){m.classList.remove("cookies-modal-active"),document.body.classList.remove("no-scroll"),localStorage.setItem("cookieAccepted","true")}document.addEventListener("DOMContentLoaded",function(){new y(".accordion-container",{duration:400,showMultiple:!0})});const l=document.querySelector(".faq-btn");l.addEventListener("click",()=>{setTimeout(()=>{l.blur()},100)});const E=document.querySelector(".open-modal"),r=document.querySelector(".mob-modal-overlay"),f=document.querySelectorAll(".mob-menu-link"),a=document.querySelector(".mob-menu-btn"),u=document.querySelector(".home-btn");function S(){r.classList.add("active")}function p(){r.classList.remove("active")}E.addEventListener("click",S);f.forEach(o=>{o.addEventListener("click",p)});r.addEventListener("click",o=>{o.target===r&&p()});a.addEventListener("click",()=>{setTimeout(()=>{a.blur()},100)});u.addEventListener("click",()=>{setTimeout(()=>{u.blur()},100)});const k=document.querySelector(".header").offsetHeight;f.forEach(o=>{o.addEventListener("click",function(n){n.preventDefault();const i=this.getAttribute("href").substring(1),c=document.getElementById(i);c&&window.scrollTo({top:c.offsetTop-k,behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers2.js.map
