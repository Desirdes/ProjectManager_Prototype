"use strict";var F=Math.pow;(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2349],{2349:(ve,G,g)=>{g.r(G),g.d(G,{ion_modal:()=>ee});var _=g(5861),p=g(2361),L=g(6254),K=g(4118),b=g(1643),U=g(1316),Y=g(7208),M=g(1450),re=g(2854),ie=g(7249),h=g(8015),z=g(8685),Z=g(3139);g(3509);const H=function(){var e=(0,_.Z)(function*(t,o){"function"!=typeof t.canDismiss||!(yield t.canDismiss())||(o.isRunning()?o.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(o,n){return e.apply(this,arguments)}}(),N=e=>.00255275*F(2.71828,-14.9619*e)-1.00255*F(2.71828,-.0380968*e)+1,j=(e,t)=>{const o=1/(1-t);return e*o+-t*o},J=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,n=void 0===o||o<t,i=n?`calc(var(--backdrop-opacity) * ${t})`:"0",r=(0,h.c)("backdropAnimation").fromTo("opacity",0,i);return n&&r.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:r}},Q=e=>{const{currentBreakpoint:t,backdropBreakpoint:o}=e,n=`calc(var(--backdrop-opacity) * ${j(t,o)})`,i=[{offset:0,opacity:n},{offset:1,opacity:0}],r=[{offset:0,opacity:n},{offset:o,opacity:0},{offset:1,opacity:0}],a=(0,h.c)("backdropAnimation").keyframes(0!==o?r:i);return{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},X=(e,t)=>{const{presentingEl:o,currentBreakpoint:n}=t,i=(0,b.g)(e),{wrapperAnimation:r,backdropAnimation:a}=void 0!==n?J(t):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};a.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,h.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(o){const f=window.innerWidth<768,D="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,v=(0,b.g)(o),w=(0,h.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),m=document.body;if(f){const l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",u=`translateY(${D?"-10px":l}) scale(0.93)`;w.afterStyles({transform:u}).beforeAddWrite(()=>m.style.setProperty("background-color","black")).addElement(o).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:u,borderRadius:"10px 10px 0 0"}]),d.addAnimation(w)}else if(d.addAnimation(a),D){const c=`translateY(-10px) scale(${D?.93:1})`;w.afterStyles({transform:c}).addElement(v.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:c}]);const s=(0,h.c)().afterStyles({transform:c}).addElement(v.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:c}]);d.addAnimation([w,s])}else r.fromTo("opacity","0","1")}else d.addAnimation(a);return d},q=(e,t,o=500)=>{const{presentingEl:n,currentBreakpoint:i}=t,r=(0,b.g)(e),{wrapperAnimation:a,backdropAnimation:d}=void 0!==i?Q(t):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};d.addElement(r.querySelector("ion-backdrop")),a.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const f=(0,h.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(a);if(n){const D=window.innerWidth<768,v="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,w=(0,b.g)(n),m=(0,h.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(c=>{1===c&&(n.style.setProperty("overflow",""),Array.from(l.querySelectorAll("ion-modal")).filter(u=>void 0!==u.presentingElement).length<=1&&l.style.setProperty("background-color",""))}),l=document.body;if(D){const c=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",A=`translateY(${v?"-10px":c}) scale(0.93)`;m.addElement(n).keyframes([{offset:0,filter:"contrast(0.85)",transform:A,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),f.addAnimation(m)}else if(f.addAnimation(d),v){const s=`translateY(-10px) scale(${v?.93:1})`;m.addElement(w.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:s},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const u=(0,h.c)().addElement(w.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:s},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);f.addAnimation([m,u])}else a.fromTo("opacity","1","0")}else f.addAnimation(d);return f},ce=(e,t)=>{const{currentBreakpoint:o}=t,n=(0,b.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==o?J(t):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return r.addElement(n.querySelector("ion-backdrop")),i.addElement(n.querySelector(".modal-wrapper")),(0,h.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,i])},he=(e,t)=>{const{currentBreakpoint:o}=t,n=(0,b.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==o?Q(t):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return r.addElement(n.querySelector("ion-backdrop")),i.addElement(n.querySelector(".modal-wrapper")),(0,h.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,i])},ee=class{constructor(e){(0,p.r)(this,e),this.didPresent=(0,p.e)(this,"ionModalDidPresent",7),this.willPresent=(0,p.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,p.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,p.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,p.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,p.e)(this,"didPresent",7),this.willPresentShorthand=(0,p.e)(this,"willPresent",7),this.willDismissShorthand=(0,p.e)(this,"willDismiss",7),this.didDismissShorthand=(0,p.e)(this,"didDismiss",7),this.modalIndex=be++,this.coreDelegate=(0,K.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:o,destroyTriggerInteraction:n}=this;n&&n();const i=void 0!==t?document.getElementById(t):null;i&&(this.destroyTriggerInteraction=((a,d)=>{const f=()=>{d.present()};return a.addEventListener("click",f),()=>{a.removeEventListener("click",f)}})(i,o))},this.onBackdropTap=()=>{this.dismiss(void 0,M.B)},this.onLifecycle=t=>{const o=this.usersElement,n=ge[t.type];if(o&&n){const i=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:t.detail});o.dispatchEvent(i)}}}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}swipeToCloseChanged(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,o)=>t-o))}connectedCallback(){(0,M.e)(this.el)}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,swipeToClose:o}=this;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==e&&void 0!==t)&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,Y.p)("Your breakpoints array must include the initialBreakpoint value."),o&&(0,Y.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}componentDidLoad(){!0===this.isOpen&&(0,b.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.configureTriggerInteraction()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const o=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:o,delegate:this.workingDelegate=o?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(){var e=this;return(0,_.Z)(function*(){const{canDismiss:t}=e;return void 0===t||("function"==typeof t?t():t)})()}present(){var e=this;return(0,_.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const t=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),{inline:o,delegate:n}=e.getDelegate(!0);e.usersElement=yield(0,K.a)(n,e.el,e.component,["ion-page"],t,o),yield(0,ie.e)(e.usersElement),(0,p.c)(()=>e.el.classList.add("show-modal")),e.currentTransition=(0,M.d)(e,"modalEnter",X,ce,{presentingEl:e.presentingElement,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),yield e.currentTransition,e.isSheetModal?e.initSheetGesture():(e.swipeToClose||void 0!==e.canDismiss&&void 0!==e.presentingElement)&&e.initSwipeToClose(),"undefined"!=typeof window&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,b.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(U.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.currentTransition=void 0})()}initSwipeToClose(){var e=this;if("ios"!==(0,L.b)(this))return;const t=this.leaveAnimation||L.c.get("modalLeave",q),o=this.animation=t(this.el,{presentingEl:this.presentingElement});this.gesture=((e,t,o)=>{const n=e.offsetHeight;let i=!1,r=!1;const w=(0,Z.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:m=>{const l=m.event.target;return null===l||!l.closest||null===l.closest("ion-content, ion-footer")},onStart:()=>{r=void 0!==e.canDismiss&&!0!==e.canDismiss,t.progressStart(!0,i?1:0)},onMove:m=>{const l=m.deltaY/n,c=l>=0&&r,s=c?.2:.9999,u=c?N(l/s):l,A=(0,b.k)(1e-4,u,s);t.progressStep(A)},onEnd:m=>{const l=m.velocityY,c=m.deltaY/n,s=c>=0&&r,u=s?.2:.9999,A=s?N(c/u):c,O=(0,b.k)(1e-4,A,u),y=!s&&(m.deltaY+1e3*l)/n>=.5;let I=y?-.001:.001;y?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),I+=(0,z.g)([0,0],[.32,.72],[0,1],[1,1],O)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),I+=(0,z.g)([0,0],[1,0],[.68,.28],[1,1],O)[0]);const $=((e,t)=>(0,b.k)(400,e/Math.abs(1.1*t),500))(y?c*n:(1-O)*n,l);i=y,w.enable(!1),t.onFinish(()=>{y||w.enable(!0)}).progressEnd(y?1:0,I,$),s&&O>u/4?H(e,t):y&&o()}});return w})(this.el,o,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,_.Z)(function*(){yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:o}=this;if(!e||void 0===t)return;const n=this.enterAnimation||L.c.get("modalEnter",X),i=this.animation=n(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:o});i.progressStart(!0,1);const{gesture:r,moveSheetToBreakpoint:a}=((e,t,o,n,i,r,a=[],d,f,D)=>{const m={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},l=e.querySelector("ion-content"),c=o.clientHeight;let s=n,u=0,A=!1;const C=r.childAnimations.find(k=>"wrapperAnimation"===k.id),y=r.childAnimations.find(k=>"backdropAnimation"===k.id),I=a[a.length-1],$=a[0],te=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},oe=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};C&&y&&(C.keyframes([...m.WRAPPER_KEYFRAMES]),y.keyframes([...m.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-s),s>i?te():oe()),l&&s!==I&&(l.scrollY=!1);const ne=k=>{const{breakpoint:B,canDismiss:E,breakpointOffset:S}=k,T=E&&0===B,x=T?s:B,P=0!==x;s=0,C&&y&&(C.keyframes([{offset:0,transform:`translateY(${100*S}%)`},{offset:1,transform:`translateY(${100*(1-x)}%)`}]),y.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${j(1-S,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${j(x,i)})`}]),r.progressStep(0)),W.enable(!1),r.onFinish(()=>{P&&(C&&y?(0,b.r)(()=>{C.keyframes([...m.WRAPPER_KEYFRAMES]),y.keyframes([...m.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-x),s=x,D(s),l&&s===a[a.length-1]&&(l.scrollY=!0),s>i?te():oe(),W.enable(!0)}):W.enable(!0))},{oneTimeCallback:!0}).progressEnd(1,0,500),T?H(e,r):P||f()},W=(0,Z.createGesture)({el:o,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:k=>{const B=k.event.target.closest("ion-content");return s=d(),!(1===s&&B)},onStart:()=>{A=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===$,l&&(l.scrollY=!1),(0,b.r)(()=>{e.focus()}),r.progressStart(!0,1-s)},onMove:k=>{const E=a.length>1?1-a[1]:void 0,S=1-s+k.deltaY/c,T=void 0!==E&&S>=E&&A,x=T?.95:.9999,P=T&&void 0!==E?E+N((S-E)/(x-E)):S;u=(0,b.k)(1e-4,P,x),r.progressStep(u)},onEnd:k=>{const S=s-(k.deltaY+100*k.velocityY)/c,T=a.reduce((x,P)=>Math.abs(P-S)<Math.abs(x-S)?P:x);ne({breakpoint:T,breakpointOffset:u,canDismiss:A})}});return{gesture:W,moveSheetToBreakpoint:ne}})(this.el,this.backdropEl,e,t,o,i,this.sortedBreakpoints,()=>{var d;return null!==(d=this.currentBreakpoint)&&void 0!==d?d:0},()=>this.sheetOnDismiss(),d=>{this.currentBreakpoint!==d&&(this.currentBreakpoint=d,this.ionBreakpointDidChange.emit({breakpoint:d}))});this.gesture=r,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,_.Z)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,"gesture"),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var o=this;return(0,_.Z)(function*(){if(o.gestureAnimationDismissing&&"gesture"!==t||"handler"!==t&&!(yield o.checkCanDismiss()))return!1;"undefined"!=typeof window&&o.keyboardOpenCallback&&window.removeEventListener(U.KEYBOARD_DID_OPEN,o.keyboardOpenCallback),void 0!==o.currentTransition&&(yield o.currentTransition);const n=M.h.get(o)||[];o.currentTransition=(0,M.f)(o,e,t,"modalLeave",q,he,{presentingEl:o.presentingElement,currentBreakpoint:o.currentBreakpoint||o.initialBreakpoint,backdropBreakpoint:o.backdropBreakpoint});const i=yield o.currentTransition;if(i){const{delegate:r}=o.getDelegate();yield(0,K.d)(r,o.usersElement),(0,p.c)(()=>o.el.classList.remove("show-modal")),o.animation&&o.animation.destroy(),o.gesture&&o.gesture.destroy(),n.forEach(a=>a.destroy())}return o.currentTransition=void 0,o.animation=void 0,i})()}onDidDismiss(){return(0,M.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,M.g)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,_.Z)(function*(){if(!t.isSheetModal)return void(0,Y.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,Y.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:o,moveSheetToBreakpoint:n,canDismiss:i,breakpoints:r}=t;o!==e&&n&&n({breakpoint:e,breakpointOffset:1-o,canDismiss:void 0!==i&&!0!==i&&0===r[0]})})()}getCurrentBreakpoint(){var e=this;return(0,_.Z)(function*(){return e.currentBreakpoint})()}render(){const{handle:e,isSheetModal:t,presentingElement:o,htmlAttributes:n}=this,i=!1!==e&&t,r=(0,L.b)(this),{modalId:a}=this,d=void 0!==o&&"ios"===r;return(0,p.h)(p.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},n,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[r]:!0,"modal-default":!d&&!t,"modal-card":d,"modal-sheet":t,"overlay-hidden":!0},(0,re.g)(this.cssClass)),id:a,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,p.h)("ion-backdrop",{ref:f=>this.backdropEl=f,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===r&&(0,p.h)("div",{class:"modal-shadow"}),(0,p.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:f=>this.wrapperEl=f},i&&(0,p.h)("div",{class:"modal-handle",part:"handle"}),(0,p.h)("slot",null)))}get el(){return(0,p.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},ge={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let be=0;ee.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);