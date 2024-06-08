import{S as f,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const r="https://pixabay.com/api/",o=new URLSearchParams({key:"44085737-801aedd726c9c1496368a8656",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${r}?${o}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function h({webformatURL:i,largeImageURL:r,tags:o,likes:n,views:e,comments:t,downloads:s}){return`
    <li class="gallery-item">
        <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${i}" alt="${o}"/>
        <ul class="info">
        <li class="info-item"> <h3 class="info-title">Likes</h3><p class="info-text">${n}</p></li>
        <li class="info-item"> <h3 class="info-title">Views</h3><p class="info-text">${e}</p></li>
        <li class="info-item"> <h3 class="info-title">Comments</h3><p class="info-text">${t}</p></li>
        <li class="info-item"> <h3 class="info-title">Downloads</h3><p class="info-text">${s}</p></li>
        </ul>
        </a>
    </li>
    `}function d(i){return i.map(h).join("")}const y=new f(".gallery a",{captionDelay:250,captionsData:"alt"}),c=document.querySelector("#search-form");document.querySelector("#search-input");const u=document.querySelector(".loader"),l=document.querySelector(".gallery");let a="";c.addEventListener("input",i=>{a=i.target.value.trim()});c.addEventListener("submit",g);function g(i){if(i.preventDefault(),l.innerHTML="",L(),a!=="")return p(a).then(r=>{if(r.hits.length===0)return m.error({...b});const o=d(r.hits);l.innerHTML=o,y.refresh()}).catch(r=>console.log(r)).finally(()=>{S()}),i.target.reset()}function L(){u.style.display="inline-block"}function S(){u.style.display="none"}const b={position:"topRight",timeout:1800,maxWidth:300,icon:"none",message:"Sorry, there are no images matching your search query. Please try again!"};
//# sourceMappingURL=commonHelpers.js.map
