import{c as s}from"./mobile.20fbc630.js";import{_ as n}from"./index.35c4a5cd.js";import{m as r,r as e,e as t,g as a,j as o,k as u,C as d,D as i,o as c,l as m}from"./vendor.ed47e573.js";const{createDemo:l}=s("guess-gift"),f=l({props:{},setup(){const s=r(null),n=r(3),e=r(5);return{guessgiftDom:s,turnNum:e,prizeIndex:n,gameStart:()=>{s.value.start()},startTurns:()=>{console.log("开始抽奖")},endTurns:()=>{console.log("抽奖结束")}}}}),g={class:"demo"},p=(s=>(d("data-v-3cb54fdc"),s=s(),i(),s))((()=>a("h2",null,"基础用法",-1))),b={class:"show-demo"},T=m("开始");var v=n(f,[["render",function(s,n,r,d,i,m){const l=e("nutbig-guess-gift"),f=e("nut-button");return c(),t("div",g,[p,a("div",b,[o(l,{ref:"guessgiftDom","prize-index":s.prizeIndex,"turn-number":s.turnNum,onStartTurns:s.startTurns,onEndTurns:s.endTurns},null,8,["prize-index","turn-number","onStartTurns","onEndTurns"]),o(f,{type:"primary",onClick:s.gameStart},{default:u((()=>[T])),_:1},8,["onClick"])])])}],["__scopeId","data-v-3cb54fdc"]]);export{v as default};
