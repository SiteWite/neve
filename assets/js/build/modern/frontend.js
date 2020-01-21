!function(){"use strict";var e,t=()=>window.innerWidth<=960,n=e=>{var t=e.split("#");return t.length>1?t[0]:e},r=(e,t,n)=>{(e.length?e:[e]).forEach(e=>{e.addEventListener(t,n)})},o=(e,t)=>{d(e,t,"toggle")},i=(e,t)=>{d(e,t,"add")},a=(e,t)=>{d(e,t,"remove")},d=(e,t,n)=>{var r=t.split(" ");(e.length?e:[e]).forEach(e=>{e.classList[n].apply(e.classList,r)})},l=null,c=null,u=2,s=()=>{if("enabled"!==NeveProperties.masonry||NeveProperties.masonryColumns<2)return!1;c=document.querySelector(".nv-index-posts .posts-wrapper"),imagesLoaded(c,()=>{l=new Masonry(c,{itemSelector:"article.layout-grid",columnWidth:"article.layout-grid",percentPosition:!0})})},v=()=>{if("enabled"!==NeveProperties.infiniteScroll)return!1;!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=new IntersectionObserver(e=>{e[0].intersectionRatio<=n||t()});r.observe(e)}(document.querySelector(".infinite-scroll-trigger"),()=>{if(parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(()=>{m()}),!1;m()})},m=()=>{var e=document.querySelector(".infinite-scroll-trigger");if(null===e)return!1;if(document.querySelector(".nv-loader").style.display="block",u>NeveProperties.infiniteScrollMaxPages)return e.parentNode.removeChild(e),document.querySelector(".nv-loader").style.display="none",!1;var t,n,r,o,i=document.querySelector(".nv-index-posts .posts-wrapper"),a=h(NeveProperties.infiniteScrollEndpoint+u);u++,t=a,n=e=>{i.innerHTML+=JSON.parse(e),p()},r=NeveProperties.infiniteScrollQuery,(o=new XMLHttpRequest).onload=()=>{4===o.readyState&&200===o.status&&n(o.response)},o.onerror=e=>{console.error(e)},o.open("POST",t,!0),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.send(r)},p=()=>{null!==l&&imagesLoaded(c).on("progress",e=>{l.layout(),l.reloadItems()})},h=e=>void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview),g=()=>{e=window.location.href,y(),function(){var t=document.querySelectorAll(".nv-nav-wrap a");if(0===t.length)return!1;t.forEach(t=>{t.addEventListener("click",t=>{var r=t.target.getAttribute("href");if(null===r)return!1;n(r)===n(e)&&window.HFG.toggleMenuSidebar(!1)})})}(),document.querySelectorAll(".caret-wrap").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();var n=e.parentNode.parentNode.querySelector(".sub-menu");o(e,"dropdown-open"),o(n,"dropdown-open")})}),function(){var e=document.querySelectorAll(".nv-nav-search"),n=document.querySelectorAll(".menu-item-nav-search"),r=document.querySelectorAll(".close-responsive-search");document.querySelector("html");n.forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation(),o(e,"active"),e.querySelector(".search-field").focus(),t()||function(e,t){var n=document.querySelector(".nav-clickaway-overlay");if(null!==n)return!1;n=document.createElement("div"),i(n,"nav-clickaway-overlay");var r=document.querySelector("header.header");r.parentNode.insertBefore(n,r),n.addEventListener("click",()=>{a(e,t),n.parentNode.removeChild(n)})}(e,"active")})}),e.forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation()})}),r.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),n.forEach(e=>{a(e,"active")});var t=document.querySelector(".nav-clickaway-overlay");null!==t&&t.parentNode.removeChild(t)})})}(),!0===/(Trident|MSIE|Edge)/.test(window.navigator.userAgent)&&document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu').forEach(e=>{var t=e.parentNode;t.addEventListener("mouseenter",()=>{i(e,"dropdown-open")}),t.addEventListener("mouseleave",()=>{a(e,"dropdown-open")})})},y=()=>{if(t())return!1;var e=document.querySelectorAll(".sub-menu .sub-menu");if(0===e.length)return!1;var n=window.innerWidth;e.forEach(e=>{var t=e.getBoundingClientRect(),r=t.left;/webkit.*mobile/i.test(navigator.userAgent)&&(t-=window.scrollX),r+t.width>=n&&(e.style.right="100%",e.style.left="auto")})};var f,w=function(){this.options={menuToggleDuration:300},this.init()};function b(){window.HFG=new w,(()=>{if(null===document.querySelector(".blog.nv-index-posts"))return!1;s(),v()})(),g()}function S(){y()}w.prototype.init=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=".menu-mobile-toggle";!1===e&&(t+=", #header-menu-sidebar .close-panel, .close-sidebar-panel");var n=document.querySelectorAll(t),o=function(e){e.preventDefault(),this.toggleMenuSidebar()};n.forEach(function(e){e.removeEventListener("click",o.bind(this))}.bind(this)),r(n,"click",o.bind(this));var i=document.querySelector(".header-menu-sidebar-overlay");r(i,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},w.prototype.toggleMenuSidebar=function(e){var t=document.querySelectorAll(".menu-mobile-toggle");a(document.body,"hiding-header-menu-sidebar"),document.body.classList.contains("is-menu-sidebar")||!1===e?(i(document.body,"hiding-header-menu-sidebar"),a(document.body,"is-menu-sidebar"),a(t,"is-active"),setTimeout(function(){a(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3)):(i(document.body,"is-menu-sidebar"),i(t,"is-active"))},window.addEventListener("load",()=>{b()}),window.addEventListener("resize",()=>{clearTimeout(f),f=setTimeout(S,500)})}();
