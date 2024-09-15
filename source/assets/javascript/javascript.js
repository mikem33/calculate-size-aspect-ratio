"use strict";function calculateAspectRatio(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(isNaN(e)||isNaN(t)||isNaN(n)||isNaN(u))return{status:0,message:"A valid number is required."};if(!e||!t)return{status:0,message:"Both original width and height are required."};var i=e/t;if(n&&u)return{status:0,message:"Introduce only one measure. <br/><i>Width</i> or <i>height</i>."};if(null!==n&&""!==n){var a=n/i;return{status:1,width:n,height:Math.round(a)}}if(null!==u&&""!==u){var d=u*i;return{status:1,width:Math.round(d),height:u}}return null}function hideOutput(e){document.getElementById("loader").classList.remove("nondisplayed"),console.log("hola"),e.classList.add("nondisplayed"),e.innerHTML=""}function showOutput(e,t){console.log("adios"),document.getElementById("loader").classList.add("nondisplayed"),e.classList.remove("nondisplayed"),1==t.status?e.innerHTML="".concat(t.width," <span>x</span> ").concat(t.height):e.innerHTML="".concat(t.message)}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('input[type="number"]').forEach(function(e){e.addEventListener("keyup",function(){var e=[document.getElementById("width").value,document.getElementById("height").value,document.getElementById("new-width").value,document.getElementById("new-height").value],t=calculateAspectRatio.apply(void 0,e),n=document.getElementById("result"),u=document.getElementById("message");null===t?(hideOutput(n),hideOutput(u)):0==t.status?(hideOutput(n),showOutput(u,t)):(hideOutput(u),showOutput(n,t))})})});