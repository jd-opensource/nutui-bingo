import{c as e}from"./mobile.ce33a9e8.js";import{_ as s}from"./index.68ee20d3.js";import{m as a,r as d,e as o,j as r,g as i,o as c}from"./vendor.94e5333a.js";const{createDemo:t}=e("shakedice"),m=t({props:{},setup(){const e=a(),s=a();return{jump:()=>{s.value=5,e.value.shake()},dice:e,id:s}}}),n={class:"demo"};var u=s(m,[["render",function(e,s,a,t,m,u){const p=d("nutbig-shakedice");return c(),o("div",n,[r(p,{ref:"dice",id:e.id},null,8,["id"]),i("div",{onClick:s[0]||(s[0]=(...s)=>e.jump&&e.jump(...s)),class:"demoBtn"},"摇动")])}],["__scopeId","data-v-0c18fd04"]]);export{u as default};