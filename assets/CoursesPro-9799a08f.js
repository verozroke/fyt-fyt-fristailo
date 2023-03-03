import{h as L,_ as $,i as n,e as D,o as l,c,f as m,g as k,T as f,a as t,F as I,j as N,u as e,k as C,l as T,m as z,t as a,n as b}from"./index-d1b37c9e.js";import{P as E,_ as F,a as P}from"./Popup-97ffc1a2.js";const U=L("proStore",{state:()=>({info:{levelID:3,title:"УРОВЕНЬ 3.0. Ты - Мастер Продаж",subtitle:"Данный уровень для продвинутых сотрудников торговой команды",description:`
            Ты продвинутый сотрудник, который знает ассортимент и свойства товара.
            Пройдя тренинги по карте уровня 3.0. ты можешь изучить и/или подтвердить свои знания и навыки в
            продвинутых тренингах, таких как Свойства-Преимущество-Выгоды, ФУП и Преодоление возражений`},lectures:[{id:1,btnColor:"green",title:"КАТЕГОРИЙНАЯ ЭКСПЕРТИЗА",description:"1. Пройди обучение по графику/видео тренинги по Категорийной экспертизе",hasVideo:!0,link:"#",test:{id:1,btnColor:"red",title:"КАТЕГОРИЙНАЯ ЭКСПЕРТИЗА",link:"#"}},{id:2,btnColor:"green",title:"КОНСТРУКТОР ПО ШЕЛВИНГУ",description:`1. Пройди задания в конструкторе по шелвингу по каждой категорий
                
2. Сдай аттестацию с Супервайзером`,hasVideo:!0,link:"#",test:{id:2,btnColor:"red",title:"КОНСТРУКТОР ПО ШЕЛВИНГУ",link:"#"}}]})});const j={key:0,class:"background"},q={class:"courses"},M={class:"courses__container"},R={class:"courses__route-box"},A={class:"courses__route"},G={class:"item__title"},H={class:"item__row"},J=["id"],K=["onClick"],O=["id"],Q=["id"],W=["onClick"],X=["id"],Y={style:{display:"none"}},Z={class:"courses__card card"},ee={class:"card__title"},te={style:{"white-space":"pre-line"},class:"card__text"},se=["href"],oe={__name:"CoursesPro",setup(ie){document.addEventListener("click",s=>{i.value===!0&&!document.querySelector(".popup-inner").contains(s.target)&&!s.target.classList.contains("play-icon")&&!s.target.classList.contains("test-icon")&&y()});let i=n(!1);D(()=>{window.scrollTo(0,0)});const S=U(),x={title:n(""),desc:n(`Ты продвинутый сотрудник, который в работе использует различные техники Продаж, изученные на уровне 2.0. 

 Для того чтобы стать еще более эффективным в работе пройди категорийные тренинги, повтори SBD рекомендации и выполни задания в онлайн тренажере "Конструктор по Шелвингу" совместно с Супервайзером или Территориальным менеджером`),btnColor:n(""),hasVideo:n(!1),link:n("")};function g(s){window.screen.width>1e3?w(s):(w(s),y())}function y(){i.value=!i.value}let{title:d,desc:r,btnColor:_,hasVideo:u,link:p}=x,v=n(0);function V(s){return s[0].toUpperCase()+s.slice(1).toLowerCase()}function w(s){d.value=V(s.title),r.value=s.description,_.value=s.btnColor,u.value=s.hasVideo,p.value=s.link,v.value++}return(s,h)=>(l(),c("div",null,[m(f,{name:"backgroundich"},{default:k(()=>[e(i)?(l(),c("div",j)):C("",!0)]),_:1}),m(f,{name:"popup"},{default:k(()=>[e(i)?(l(),T(E,{key:0,onClose:h[0]||(h[0]=o=>z(i)?i.value=!1:i=!1),title:e(d),desc:e(r),"btn-color":e(_),"has-video":e(u),link:e(p)},null,8,["title","desc","btn-color","has-video","link"])):C("",!0)]),_:1}),t("div",q,[t("div",M,[t("div",R,[t("ul",A,[(l(!0),c(I,null,N(e(S).lectures,o=>(l(),c("li",{key:o.id,class:"courses__item item"},[t("div",G,a(o.id)+". "+a(o.title),1),t("div",H,[t("div",{class:"item__outer-circle-video",id:"testy"+o.test.id},[t("div",{class:b(["item__inner-circle-video",[o.btnColor]])},[t("img",{class:"play-icon",src:F,onClick:B=>g(o),alt:""},null,8,K)],2)],8,J),t("div",{class:"item__line",id:"test"+o.test.id},null,8,O),t("div",{class:"item__outer-circle-video",id:"test"+o.test.id},[t("div",{class:b(["item__inner-circle-video hidden",[o.test.btnColor]])},[t("img",{class:"test-icon",src:P,onClick:B=>g(o.test),alt:""},null,8,W)],2)],8,Q)]),t("div",{id:`endline-${o.id}`,class:"item__endline"},null,8,X)]))),128))])]),m(f,{name:"slide",mode:"out-in"},{default:k(()=>[(l(),c("div",{key:e(v),class:"courses__card-box"},[t("div",Y,a(e(v)),1),t("div",Z,[t("div",ee,a(e(d)?e(d):"Добро пожаловать!"),1),t("div",te,a(e(r)?e(r):"Время проходить тесты!"),1),e(_)?(l(),c("a",{key:0,target:"_blank",href:e(p),class:b(["card__button",[e(_)]])},a(e(r)?e(u)?e(d)==="Конструктор по шелвингу"?"Перейти по ссылке":"Посмотреть видео":"Скачать документы":"Перейти в тест"),11,se)):C("",!0)])]))]),_:1})])])]))}},ce=$(oe,[["__scopeId","data-v-b81a20c3"]]);export{ce as default};