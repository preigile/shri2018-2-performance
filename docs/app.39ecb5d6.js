parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"mgEw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){var e=document.querySelector(".modal__value");document.querySelector(".adjust-bar.adjust-bar_theme_temp").oninput=function(){e.innerHTML=this.value>0?"+"+this.value:this.value};var t=document.querySelector(".devices__paginator .paginator__arrow_left"),o=document.querySelector(".devices__paginator .paginator__arrow_right"),n=document.querySelectorAll(".devices__panel").length,r=document.querySelector(".devices"),c=document.querySelector(".devices__paginator"),l=1;c.classList.toggle("paginator_hide",n<7),o.addEventListener("click",function(){l+=1,t.classList.toggle("paginator__arrow_disabled",1===l),r.scroll({top:0,left:1366,behavior:"smooth"})}),t.addEventListener("click",function(){l>1&&(l-=1,t.classList.toggle("paginator__arrow_disabled",1===l),r.scroll({top:0,left:-1366,behavior:"smooth"}))});var a=void 0,i=void 0,u=.42,s=-.42,d=265,_=function(e){return Math.floor(Math.abs(360*e*1.73+d)/53+26)};function m(e){e>u?e=u:e<s&&(e=s),i=e,a=_(e),document.querySelector(".modal_knob .modal__value").innerHTML="+"+a,document.querySelector(".knob__value").innerHTML="+"+a,document.querySelector(".knob__indicator").style.strokeDasharray=360*i*1.73+d+" 629",document.querySelector(".knob__arrow").style.transform="rotate("+360*i+"deg)"}function g(e,t){var o,n=[(o=t.getBoundingClientRect()).left+(o.right-o.left)/2,o.top+(o.bottom-o.top)/2],r=[e.clientX,e.clientY],c=void 0;return e.targetTouches&&e.targetTouches[0]&&(r=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]),c=Math.atan2(r[1]-n[1],r[0]-n[0]),c+=Math.PI/2}var f,p=void 0,h=null,v=null;function y(e){e.preventDefault(),e.stopPropagation();var t=g(e,document.querySelector(".knob_center"));p=!0,h=t,v=i}function q(e){p=!1}function S(e){if(p){var t=h,o=g(e,document.querySelector(".knob_center")),n=o-t;h=o,n<0&&(n+=2*Math.PI),n>Math.PI&&(n-=2*Math.PI);var r=n/Math.PI/2,c=v+r;v=c,m(c)}}(f=document.querySelector(".knob-container")).addEventListener("mousedown",y),document.addEventListener("mouseup",q),document.addEventListener("mousemove",S),f.addEventListener("touchstart",y),document.addEventListener("touchend",q),document.addEventListener("touchmove",S),m(0),document.querySelectorAll(".modal_close").forEach(function(e){e.onclick=function(){document.querySelectorAll(".modal").forEach(function(e){e.classList.toggle("modal_open",!1),document.querySelector("body").style.overflow="auto"})}});var L={manual:-10,cold:0,warm:23,hot:30};document.querySelectorAll(".modal__filter-item_temp").forEach(function(e){e.onclick=function(){document.querySelector(".adjust-bar_theme_temp").value=L[this.id],document.querySelector(".modal_temp .modal__value").innerHTML=L[this.id]>0?"+"+L[this.id]:L[this.id]}});var b=function(e){document.querySelector(e).classList.toggle("modal_open",!0),document.querySelector("body").style.overflow="hidden"};document.querySelectorAll(".panel_temp").forEach(function(e){e.onclick=function(){b(".modal_temp")}}),document.querySelectorAll(".panel_lamp").forEach(function(e){e.onclick=function(){b(".modal_light")}}),document.querySelectorAll(".panel_floor").forEach(function(e){e.onclick=function(){b(".modal_knob")}});var k=document.querySelector(".scenarios__paginator .paginator__arrow_left"),E=document.querySelector(".scenarios__paginator .paginator__arrow_right"),w=document.querySelectorAll(".scenarios__panel").length,M=document.querySelectorAll(".scenarios__page").length,A=document.querySelector(".scenarios"),T=document.querySelector(".scenarios__paginator"),P=1;T.classList.toggle("paginator_hide",w<=9),E.addEventListener("click",function(){P<M&&(P+=1,E.classList.toggle("paginator__arrow_disabled",P===M),k.classList.toggle("paginator__arrow_disabled",1===P),A.scroll({top:0,left:645,behavior:"smooth"}))}),k.addEventListener("click",function(){P>1&&(P-=1,E.classList.toggle("paginator__arrow_disabled",P===M),k.classList.toggle("paginator__arrow_disabled",1===P),A.scroll({top:0,left:-645,behavior:"smooth"}))});var x=document.querySelector(".filter__select-button"),H=document.querySelector(".filter__select-button .button__text"),I=document.querySelectorAll(".filter__select-item"),j=document.querySelector(".filter__select-popup");x.addEventListener("click",function(){j.classList.toggle("filter__select-popup_open")});var D="";window.addEventListener("scroll",function(){D+=document.querySelectorAll("body")[0].offsetWidth,document.querySelector(".stats").innerHTML=D}),I.forEach(function(e){e.addEventListener("click",function(e){document.querySelector("#"+e.target.dataset.group).checked=!0,I.forEach(function(e){return e.classList.toggle("filter__select-item_checked",!1)}),e.target.classList.toggle("filter__select-item_checked",!0),j.classList.toggle("filter__select-popup_open",!1),H.innerText=e.target.innerText})}),document.querySelector(".menu__icon").addEventListener("click",function(){document.querySelector(".menu").classList.toggle("menu_open")})};
},{}],"Oqq8":[function(require,module,exports) {
module.exports="/shri2018-2-performance/banner.49334929.jpg";
},{}],"DYpk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../assets/banner.jpg"),i=e(n);function e(n){return n&&n.__esModule?n:{default:n}}exports.default=function(){return'\n<div class="page__wrapper">\n    <div class="page__wrapper-content">\n        <header class="header">\n            <div class="logo header__logo">\n                <a href="#" class="link logo__ya"></a>\n                <a href="#" class="link logo__ya-sub"></a>\n            </div>\n\n            <nav class="menu">\n                <ul class="menu__list">\n                    <li class="menu__item">\n                        <a href="#" class="link menu__link link_active">Сводка</a>\n                    </li>\n                    <li class="menu__item">\n                        <a href="#" class="link menu__link">Устройства</a>\n                    </li>\n                    <li class="menu__item">\n                        <a href="#" class="link menu__link">Сценарии</a>\n                    </li>\n                </ul>\n            </nav>\n\n            <div class="menu__icon">\n                <svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"\n                     xmlns:xlink="http://www.w3.org/1999/xlink">\n                    <defs>\n                        <path d="M0 3.326a.995.995 0 0 1 1-.993h14c.552 0 1 .44 1 .993v.681A.995.995 0 0 1 15 5H1c-.552 0-1-.44-1-.993v-.68zM0 8.66a.995.995 0 0 1 1-.993h14c.552 0 1 .44 1 .993v.68a.995.995 0 0 1-1 .993H1c-.552 0-1-.44-1-.993v-.68zm0 5.333A.995.995 0 0 1 1 13h14c.552 0 1 .44 1 .993v.68a.995.995 0 0 1-1 .994H1c-.552 0-1-.44-1-.993v-.681z"\n                              id="a"/>\n                    </defs>\n                    <use fill="#333" xlink:href="#a" transform="translate(0 -2)" fill-rule="evenodd"/>\n                </svg>\n            </div>\n        </header>\n\n        <main class="content">\n            <div class="content__item content__item_half content__item_main">\n                <div class="content__item-header">Главное</div>\n                <section class="main">\n                    <div class="main__info">\n                        <div class="main__greeting">Привет, Геннадий!</div>\n                        <div class="main__status">Двери и окна закрыты, сигнализация включена.</div>\n                        <div class="weather main__weather">\n                            <div class="weather__item">\n                                <div class="weather__item-title">Дома</div>\n                                <div class="weather__item-temp">+23</div>\n                            </div>\n                            <div class="weather__item weather__item_outside weather__item_cloud-drizzle">\n                                <div class="weather__item-title">За окном</div>\n                                <div class="weather__item-temp">+19</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="main__upcoming-wrapper">\n                        <div class="main__upcoming">\n                            <div class="panel main__panel panel_device panel_first">\n                                <div class="panel__icon panel__icon_temp_off"></div>\n                                <div class="panel__text">\n                                    <div class="panel__title">Philips Cooler</div>\n                                    <div class="panel__sub">Начнет охлаждать в 16:30</div>\n                                </div>\n                            </div>\n                            <div class="panel main__panel panel_device">\n                                <div class="panel__icon panel__icon_light_off"></div>\n                                <div class="panel__text">\n                                    <div class="panel__title">Xiaomi Yeelight LED Smart Bulb</div>\n                                    <div class="panel__sub">Включится в 17:00</div>\n                                </div>\n                            </div>\n                            <div class="panel main__panel panel_device panel_out_bot">\n                                <div class="panel__icon panel__icon_light_off"></div>\n                                <div class="panel__text">\n                                    <div class="panel__title">Xiaomi Yeelight LED Smart Bulb</div>\n                                    <div class="panel__sub">Включится в 17:00</div>\n                                </div>\n                            </div>\n                            <div class="panel main__panel panel_device panel_out_bot">\n                                <img src="'+i.default+'">\n                            </div>\n                        </div>\n                    </div>\n                </section>\n            </div>\n\n            <div class="content__item content__item_half content__item_scenarios">\n                <div class="content__item-header">\n                    Избранные сценарии\n                </div>\n                <div class="paginator scenarios__paginator">\n                    <div class="paginator__arrow paginator__arrow_disabled paginator__arrow_left">\n                        <svg viewBox="0 0 9 16" width="100%" height="16px">\n                            <path fill="currentColor" fill-rule="evenodd"\n                                  d="M8.7 14.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-7-7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.4 8l6.3 6.3z"></path>\n                        </svg>\n                    </div>\n                    <div class="paginator__arrow paginator__arrow_right">\n                        <svg viewBox="0 0 9 16" width="100%" height="16px">\n                            <path fill="currentColor" fill-rule="evenodd"\n                                  d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"></path>\n                        </svg>\n                    </div>\n                </div>\n                <section class="scenarios">\n                    <div class="scenarios__page">\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_light_on"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Выключить весь свет в доме и во дворе</div>\n                            </div>\n                        </div>\n\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_clock"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Я ухожу</div>\n                            </div>\n                        </div>\n\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_light_on"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Включить свет в корридоре</div>\n                            </div>\n                        </div>\n\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_temp_on"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Набрать горячую ванну</div>\n                                <div class="panel__sub">Начнётся в 18:00</div>\n                            </div>\n                        </div>\n\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_light_on"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Выключить весь свет в доме и во дворе</div>\n                            </div>\n                        </div>\n\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_clock"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Я ухожу</div>\n                            </div>\n                        </div>\n\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_light_on"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Включить свет в корридоре</div>\n                            </div>\n                        </div>\n\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_temp_on"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Набрать горячую ванну</div>\n                                <div class="panel__sub">Начнётся в 18:00</div>\n                            </div>\n                        </div>\n\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_light_on"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Выключить весь свет в доме и во дворе</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="scenarios__page">\n                        <div class="panel scenarios__panel">\n                            <div class="panel__icon panel__icon_light_on"></div>\n                            <div class="panel__text">\n                                <div class="panel__title">Включить свет в корридоре</div>\n                            </div>\n                        </div>\n                    </div>\n                </section>\n            </div>\n\n            <div class="content__item content__item_devices">\n    <span class="content__item-header content__item-header_devices">\n    Избранные устройства\n</span>\n\n                <div class="filter__select">\n                    <button class="filter__select-button" type="button">\n                        <span class="button__text">Все</span>\n                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6">\n                            <path d="M10.3 0L5.5 4.7.7 0 0 .7 5.5 6 11 .7z"/>\n                        </svg>\n                    </button>\n                    <div class="filter__select-popup" aria-hidden="true">\n                        <div class="filter__select-menu">\n                            <div class="filter__select-item filter__select-item_checked" data-group="all">Все</div>\n                            <div class="filter__select-item" data-group="kitchen">Кухня</div>\n                            <div class="filter__select-item" data-group="room">Зал</div>\n                            <div class="filter__select-item" data-group="lamp">Лампочки</div>\n                            <div class="filter__select-item" data-group="cam">Камеры</div>\n                        </div>\n                    </div>\n                </div>\n\n                <input class="filter__item-radio filter__item_devices filter__item-radio_all" type="radio" name="filter"\n                       id="all" checked>\n                <label class="filter__item-label filter__item_devices" for="all">Все</label>\n                <input class="filter__item-radio filter__item_devices filter__item-radio_kitchen" type="radio"\n                       name="filter" id="kitchen">\n                <label class="filter__item-label filter__item_devices" for="kitchen">Кухня</label>\n                <input class="filter__item-radio filter__item_devices filter__item-radio_room" type="radio"\n                       name="filter" id="room">\n                <label class="filter__item-label filter__item_devices" for="room">Зал</label>\n                <input class="filter__item-radio filter__item_devices filter__item-radio_lamp" type="radio"\n                       name="filter" id="lamp">\n                <label class="filter__item-label filter__item_devices" for="lamp">Лампочки</label>\n                <input class="filter__item-radio filter__item_devices filter__item-radio_cam" type="radio" name="filter"\n                       id="cam">\n                <label class="filter__item-label filter__item_devices" for="cam">Камеры</label>\n\n                <div class="paginator devices__paginator">\n                    <div class="paginator__arrow paginator__arrow_disabled paginator__arrow_left">\n                        <svg\n                                viewBox="0 0 9 16"\n                                width="100%"\n                                height="16px">\n                            <path\n                                    fill="currentColor"\n                                    fill-rule="evenodd"\n                                    d="M8.7 14.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0l-7-7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.4 8l6.3 6.3z"></path>\n                        </svg>\n                    </div>\n\n                    <div class="paginator__arrow paginator__arrow_right">\n                        <svg\n                                viewBox="0 0 9 16"\n                                width="100%"\n                                height="16px">\n                            <path\n                                    fill="currentColor"\n                                    fill-rule="evenodd"\n                                    d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"></path>\n                        </svg>\n                    </div>\n                </div>\n\n                <section class="devices">\n                    <div class="panel panel_device devices__panel panel_room panel_floor">\n                        <div class="panel__icon panel__icon_light_on"></div>\n                        <div class="panel__text">\n                            <div class="panel__title">Xiaomi Warm Floor</div>\n                            <div class="panel__sub">Включено</div>\n                        </div>\n                    </div>\n                    <div class="panel panel_device devices__panel panel_lamp">\n                        <div class="panel__icon panel__icon_light_on"></div>\n                        <div class="panel__text">\n                            <div class="panel__title">Xiaomi Yeelight LED Smart Bulb</div>\n                            <div class="panel__sub">Включено</div>\n                        </div>\n                    </div>\n                    <div class="panel panel_device devices__panel panel_cam">\n                        <div class="panel__icon panel__icon_light_off"></div>\n                        <div class="panel__text">\n                            <div class="panel__title">D-Link Omna 180 Cam</div>\n                            <div class="panel__sub">Включится в 17:00</div>\n                        </div>\n                    </div>\n                    <div class="panel panel_device devices__panel panel_room panel_temp">\n                        <div class="panel__icon panel__icon_temp_off"></div>\n                        <div class="panel__text">\n                            <div class="panel__title">Elgato Eve Degree Connected</div>\n                            <div class="panel__sub">Включится в 17:00</div>\n                        </div>\n                    </div>\n                    <div class="panel panel_device devices__panel panel_lamp">\n                        <div class="panel__icon panel__icon_light_off"></div>\n                        <div class="panel__text">\n                            <div class="panel__title">LIFX Mini Day & Dusk A60 E27</div>\n                            <div class="panel__sub">Включится в 17:00</div>\n                        </div>\n                    </div>\n                    <div class="panel panel_device devices__panel panel_room">\n                        <div class="panel__icon panel__icon_light_on"></div>\n                        <div class="panel__text">\n                            <div class="panel__title">Xiaomi Mi Air Purifier 2S</div>\n                            <div class="panel__sub">Включено</div>\n                        </div>\n                    </div>\n                    <div class="panel panel_device devices__panel panel_lamp">\n                        <div class="panel__icon panel__icon_light_off"></div>\n                        <div class="panel__text">\n                            <div class="panel__title">Philips Zhirui</div>\n                            <div class="panel__sub">Выключено</div>\n                        </div>\n                    </div>\n                    <div class="panel panel_device devices__panel panel_kitchen">\n                        <div class="panel__icon panel__icon_light_on"></div>\n                        <div class="panel__text">\n                            <div class="panel__title">Philips Purifier</div>\n                            <div class="panel__sub">Включено</div>\n                        </div>\n                    </div>\n                </section>\n            </div>\n        </main>\n    </div>\n\n    <footer class="footer">\n        <a href="#" class="link footer__link">Помощь</a>\n        <a href="#" class="link footer__link">Обратная связь</a>\n        <a href="#" class="link footer__link">Разработчикам</a>\n        <a href="#" class="link footer__link">Условия использования</a>\n    </footer>\n</div>\n\n<div class="modal modal_temp">\n    <div class="modal__content">\n\n        <div class="modal__body">\n            <div class="modal__title">Elgato Eve Degree Connected</div>\n            <div class="modal__value modal__value_temp">+23</div>\n            <div class="modal__status">Включено</div>\n            <div class="modal__filter">\n                <div class="filter__item-label modal__filter-item_temp" id="manual">Вручную</div>\n                <div class="filter__item-label modal__filter-item_temp" id="cold">Холодно</div>\n                <div class="filter__item-label modal__filter-item_temp" id="warm">Тепло</div>\n                <div class="filter__item-label modal__filter-item_temp" id="hot">Жарко</div>\n            </div>\n            <div class="adjust-bar__container adjust-bar__container_theme_temp modal__adjust">\n                <input class="adjust-bar adjust-bar_theme_temp" type="range" name="lightRange" id="lightRange"\n                       value="23" min="-10" max="30" orient="vertical">\n            </div>\n        </div>\n\n        <div class="modal__controls">\n            <div class="button button_size_l button_color_yellow modal__button">Применить</div>\n            <div class="button button_size_l modal__button modal_close">Закрыть</div>\n        </div>\n    </div>\n\n</div>\n\n<div class="modal modal_light">\n    <div class="modal__content">\n\n        <div class="modal__body">\n            <div class="modal__title">Xiaomi Yeelight LED Smart Bulb</div>\n            <div class="modal__value modal__value_light"></div>\n            <div class="modal__status">Включено</div>\n            <div class="modal__filter">\n                <div class="filter__item-label modal__filter-item" id="manual">Вручную</div>\n                <div class="filter__item-label modal__filter-item" id="day">Дневной свет</div>\n                <div class="filter__item-label modal__filter-item" id="evening">Вечерний свет</div>\n                <div class="filter__item-label modal__filter-item" id="dawn">Рассвет</div>\n            </div>\n            <div class="adjust-bar__container adjust-bar__container_theme_light modal__adjust">\n                <input class="adjust-bar adjust-bar_theme_light" type="range" name="tempRange" id="lightRange"\n                       value="25" min="0" max="50" orient="vertical">\n            </div>\n        </div>\n\n        <div class="modal__controls">\n            <div class="button button_size_l button_color_yellow modal__button">Применить</div>\n            <div class="button button_size_l modal__button modal_close">Закрыть</div>\n        </div>\n    </div>\n</div>\n<div class="stats">\n</div>\n\n<div class="modal modal_knob">\n    <div class="modal__content">\n\n        <div class="modal__body">\n            <div class="modal__title">Xiaomi Warm Floor</div>\n            <div class="modal__value modal__value_temp">+23</div>\n            <div class="modal__status">Включено</div>\n            <div class="knob__wrapper">\n                <div class="knob">\n                    <svg viewBox="-110 -110 220 220" id="foobar">\n                        <filter id="knob-shadow">\n                            <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>\n                            <feOffset dx="2" dy="0" result="offsetblur"/>\n                            <feFlood flood-color="rgba(134,121,71,0.45)"/>\n                            <feComposite in2="offsetblur" operator="in"/>\n                            <feMerge>\n                                <feMergeNode/>\n                                <feMergeNode in="SourceGraphic"/>\n                            </feMerge>\n                        </filter>\n                        <g class="knob-container">\n                            <circle class="knob_center" cx="0" cy="0"/>\n                            <circle class="knob__indicator-bg" r="110" cx="0" cy="0"/>\n                            <circle class="knob__indicator" r="100" cx="0" cy="0"/>\n                            <circle class="knob__indicator-mask" r="100" cx="0" cy="0"/>\n                            <circle class="knob__indicator-bounds" r="100" cx="0" cy="0"/>\n                            <circle class="knob__self" r="89" cx="0" cy="0"/>\n                            \x3c!-- <polygon class="knob__arrow" points="5,-90 0,-85 10,-85" /> --\x3e\n                            <polygon class="knob__arrow" points="-90,0 -85,5 -85,-5"/>\n                        </g>\n                    </svg>\n                    <div class="knob__value">+23</div>\n                </div>\n            </div>\n        </div>\n\n        <div class="modal__controls">\n            <div class="button button_size_l button_color_yellow modal__button">Применить</div>\n            <div class="button button_size_l modal__button modal_close">Закрыть</div>\n        </div>\n    </div>\n</div>\n    '};
},{"../assets/banner.jpg":"Oqq8"}],"5baa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./Main"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}exports.default=function(){return""+(0,t.default)()};
},{"./Main":"DYpk"}],"er/v":[function(require,module,exports) {

},{"./pts55f_w.eot":[["pts55f_w.1cdc52f7.eot","7jFm"],"7jFm"],"./PTS55F_W.woff":[["PTS55F_W.a5b3ce09.woff","1h3Q"],"1h3Q"],"./pts75f_w.eot":[["pts75f_w.9ecfeea2.eot","kaFZ"],"kaFZ"],"./PTS75F_W.woff":[["PTS75F_W.8ffba88b.woff","yCLI"],"yCLI"],"./ptn57f_w.eot":[["ptn57f_w.7157b453.eot","Lkrb"],"Lkrb"],"./PTN57F_W.woff":[["PTN57F_W.94e68aa5.woff","8hFS"],"8hFS"],"./ptn77f_w.eot":[["ptn77f_w.a4d080cb.eot","hgD2"],"hgD2"],"./PTN77F_W.woff":[["PTN77F_W.798d27db.woff","8trG"],"8trG"]}],"VRcL":[function(require,module,exports) {

},{"../../fonts/pt_sans.css":"er/v"}],"3NbM":[function(require,module,exports) {

},{"./../assets/adjust-bar_light_from.svg":[["adjust-bar_light_from.f4ee95ed.svg","yQ2W"],"yQ2W"],"./../assets/adjust-bar_light_to.svg":[["adjust-bar_light_to.ea18c766.svg","HFRb"],"HFRb"],"./../assets/logo.png":[["logo.fac00eba.png","zI8m"],"zI8m"],"./../assets/sh.png":[["sh.8ecb9609.png","sx4N"],"sx4N"],"./../assets/panel__icon_temp_on.svg":[["panel__icon_temp_on.2817973d.svg","UlRE"],"UlRE"],"./../assets/panel__icon_light_off.svg":[["panel__icon_light_off.b36789e4.svg","yvgH"],"yvgH"],"./../assets/cloud-drizzle.png":[["cloud-drizzle.8a82dabb.png","N6q3"],"N6q3"],"./../assets/panel__icon_temp_off.svg":[["panel__icon_temp_off.3bc1575c.svg","n+EZ"],"n+EZ"],"./../assets/panel__icon_light_on.svg":[["panel__icon_light_on.4a2f6126.svg","HQ7B"],"HQ7B"],"./../assets/panel__icon_clock.svg":[["panel__icon_clock.984b55e0.svg","ha+F"],"ha+F"]}],"Lent":[function(require,module,exports) {
"use strict";var e=require("./scripts/scripts"),s=u(e),t=require("./components/App"),r=u(t);function u(e){return e&&e.__esModule?e:{default:e}}require("./styles/bootstrap.css"),require("./styles/styles.css");var o=document.getElementById("root");console.log("app",(0,r.default)()),o.innerHTML=""+(0,r.default)(),(0,s.default)();
},{"./scripts/scripts":"mgEw","./components/App":"5baa","./styles/bootstrap.css":"VRcL","./styles/styles.css":"3NbM"}]},{},["Lent"], null)
//# sourceMappingURL=/shri2018-2-performance/app.7c3ba676.map