import{x as l,f as n,l as u}from"./index-Cjyw_Vns.js";const m=l("cart",()=>{const e=n(JSON.parse(localStorage.getItem("cartItems")??"[]")),s=t=>{e.value.push(t)},r=t=>{const a=e.value.findIndex(c=>c===t);a>-1&&e.value.splice(a,1)},o=()=>{e.value=[],alert("Заказ оформлен")};return u(e,()=>{localStorage.setItem("cartItems",JSON.stringify(e.value))},{deep:!0}),{items:e,add:s,remove:r,submit:o}});export{m as u};
