import{c as n}from"./mobile.37d580fb.js";import{_ as o}from"./index.7b1cf79c.js";import{m as e,b as t,r as a,e as l,l as r,t as c,j as s,C as u,D as d,g as m,o as p}from"./vendor.da7cad2a.js";const{createDemo:i}=n("luckscratch"),v=i({props:{},setup(){const n=e("初始数据");t((()=>{setTimeout((()=>{n.value="异步数据"}),1e3)}));return{text:n,opencard:()=>{alert("刮开事件完成")}}}}),b=n=>(u("data-v-80b66724"),n=n(),d(),n),g={class:"demo"},h=b((()=>m("h2",null,"基本用法",-1))),f=b((()=>m("h2",null,"内容异步",-1))),C=b((()=>m("h2",null,"刮开层和背景层都支持自定义颜色，奖品信息支持HTML",-1))),x=b((()=>m("h2",null,"刮开层支持图片",-1))),j=b((()=>m("h2",null,"事件回调",-1))),D=b((()=>m("h2",null,"设置刮开比列",-1))),I=b((()=>m("p",null,null,-1)));var O=o(v,[["render",function(n,o,e,t,u,d){const m=a("nut-bingo-luckscratch");return p(),l("div",g,[r(c(n.text)+" ",1),h,s(m,{content:"1000万"}),f,s(m,{content:n.text},null,8,["content"]),C,s(m,{coverColor:"#F9CC9D",backgroundColor:"#C3D08B",content:"<em>1000<em><strong>元</strong>"}),x,s(m,{content:"1000万",coverImg:n.coverImage},null,8,["coverImg"]),j,s(m,{content:"1000万",onOpen:n.opencard},null,8,["onOpen"]),D,s(m,{content:"1000万",onOpen:n.opencard,ratio:"0.2"},null,8,["onOpen"]),I])}],["__scopeId","data-v-80b66724"]]);export{O as default};
