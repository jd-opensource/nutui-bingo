import{c as e}from"./mobile.37d580fb.js";import{_ as t}from"./index.7b1cf79c.js";import{m as r,a as i,r as s,e as n,j as o,g as a,o as m}from"./vendor.da7cad2a.js";const{createDemo:p}=e("turntable"),g=p({setup(){const e=r("300px"),t=r("300px"),s=r([{id:"xiaomi",prizeName:"小米手机",prizeImg:"https://img14.360buyimg.com/imagetools/jfs/t1/104165/34/15186/96522/5e6f1435E46bc0cb0/d4e878a15bfd9362.png"},{id:"blue",prizeColor:"rgb(251, 219, 216)",prizeName:"蓝牙耳机",prizeImg:"https://img13.360buyimg.com/imagetools/jfs/t1/91864/11/15108/139003/5e6f146dE1c7b511d/1ddc5aa6e502060a.jpg"},{id:"apple",prizeName:"apple watch",prizeImg:"https://img11.360buyimg.com/imagetools/jfs/t1/105385/19/15140/111093/5e6f1506E48bd0dfb/829a98a8cdb4c27f.png"},{id:"fruit",prizeColor:"rgba(246, 142, 46, 0.5)",prizeName:"迪士尼苹果",prizeImg:"https://img11.360buyimg.com/imagetools/jfs/t1/108308/11/8890/237603/5e6f157eE489cccf1/26e0437cfd93b9c8.png"},{id:"fish",prizeName:"海鲜套餐",prizeImg:"https://img14.360buyimg.com/imagetools/jfs/t1/90507/38/15165/448364/5e6f15b4E5df0c718/4bd4c3d375eec312.png"},{id:"thanks",prizeName:"谢谢参与",prizeImg:"https://img11.360buyimg.com/imagetools/jfs/t1/96116/38/15085/5181/5e6f15d1E48e31d30/71353b61dff705d4.png"}]),n=r(5),o=r(5),a=i({prizeBgColors:["rgb(255, 231, 149)","rgb(255, 247, 223)","rgb(255, 231, 149)","rgb(255, 247, 223)","rgb(255, 231, 149)","rgb(255, 247, 223)"],borderColor:"#ff9800"}),m=r(-1),p=r(!1),g=r(5);return{luckWidth:e,luckheight:t,pointerStyle:{width:"80px",height:"80px",backgroundImage:'url("https://img11.360buyimg.com/imagetools/jfs/t1/89512/11/15244/137408/5e6f15edEf57fa3ff/cb57747119b3bf89.png")',backgroundSize:"contain",backgroundRepeat:"no-repeat"},prizeList:s,turnsNumber:n,turnsTime:o,styleOpt:a,prizeIndex:m,lock:p,num:g,startTurns:()=>{const e=Math.floor(Math.random()*s.value.length);m.value=e},endTurns:()=>{alert("中奖了")}}}}),d={class:"demo"},u=a("h2",null,"基础用法",-1);var l=t(g,[["render",function(e,t,r,i,a,p){const g=s("nutbig-turntable");return m(),n("div",d,[u,o(g,{class:"turntable",width:e.luckWidth,height:e.luckheight,"prize-list":e.prizeList,"turns-number":e.turnsNumber,"turns-time":e.turnsTime,"prize-index":e.prizeIndex,"style-opt":e.styleOpt,"pointer-style":e.pointerStyle,onStartTurns:e.startTurns,onEndTurns:e.endTurns},null,8,["width","height","prize-list","turns-number","turns-time","prize-index","style-opt","pointer-style","onStartTurns","onEndTurns"])])}]]);export{l as default};
