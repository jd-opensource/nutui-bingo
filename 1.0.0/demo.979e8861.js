import{m as n,r as t,e as s,g as e,j as r,k as a,_ as o,C as u,D as i,o as d,l as m}from"./vendor.da7cad2a.js";import{c as l}from"./mobile.a3aa0313.js";import{_ as c}from"./index.dd6d4356.js";const{createDemo:f}=l("guess-gift"),p=f({props:{},setup(){const t=n(null),s=n(3),e=n(20);return{guessgiftDom:t,turnNum:e,prizeIndex:s,gameStart:()=>{t.value.start()},startTurns:()=>{console.log("开始抽奖")},endTurns:()=>{o({title:"中奖提示",content:"您已完成抽奖，是否继续？",onCancel:()=>{},onOk:()=>{setTimeout((()=>{t.value.init()}),300)}})}}}}),g={class:"demo"},b=(n=>(u("data-v-b75fbf12"),n=n(),i(),n))((()=>e("h2",null,"基础用法",-1))),T={class:"show-demo"},v=m("开始");var x=c(p,[["render",function(n,o,u,i,m,l){const c=t("nutbig-guess-gift"),f=t("nut-button");return d(),s("div",g,[b,e("div",T,[r(c,{ref:"guessgiftDom","prize-index":n.prizeIndex,"turn-number":n.turnNum,onStartTurns:n.startTurns,onEndTurns:n.endTurns},null,8,["prize-index","turn-number","onStartTurns","onEndTurns"]),r(f,{type:"primary",onClick:n.gameStart},{default:a((()=>[v])),_:1},8,["onClick"])])])}],["__scopeId","data-v-b75fbf12"]]);export{x as default};