!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports["analytics-logger"]=i():t["analytics-logger"]=i()}(self,(function(){return(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);const i={schema:{interval:{default:500},appkey:{default:"test-appkey-1234-qwertyuiop"}},init(){console.log("metalitix-logger running"),this.poll=this.poll.bind(this),this.startPolling=this.startPolling.bind(this),this.stopPolling=this.stopPolling.bind(this),this.nextPoll=void 0,this.worldPosition=new THREE.Vector3,this.worldDirection=new THREE.Vector3,this.uuid=THREE.MathUtils.generateUUID(),window.aircards__analytics_logger__permission_granted=this.startPolling,window.aircards__analytics_logger__permission_denied=this.stopPolling},play(){this.startPolling()},remove(){this.stopPolling()},startPolling(){const{interval:t}=this.data;this.nextPoll=setTimeout(this.poll,t)},stopPolling(){clearTimeout(this.nextPoll)},poll(){const{el:{object3D:t},data:{interval:i,appkey:e},worldPosition:o,worldDirection:l,uuid:n}=this,s=t.getWorldPosition(o),r=t.children[0].getWorldDirection(l),a={appkey:e,sessionId:n,timestamp:Date.now(),position:{x:s.x,y:s.y,z:s.z},direction:{x:r.x,y:r.y,z:r.z}};console.log("poll",a),fetch("https://metalitix-staging.aircards.io/api/v1/xr-analytics",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),this.nextPoll=setTimeout(this.poll,i)}};return AFRAME.registerComponent("metalitix-logger",i),t})()}));