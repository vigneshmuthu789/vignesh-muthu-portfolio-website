import{c as __fnjc}from"./fnj-content.mjs";import{t as e}from"./rolldown-runtime.Cn0fvqDa.mjs";import{A as t,F as n,L as r,N as i,O as a,_ as o,j as s,l as c,s as l,u,w as d,y as f,z as p}from"./react.CaRMUogs.mjs";import{S as m,a as h,r as g,t as _}from"./motion.BARINABm.mjs";import{$ as v,B as y,C as b,E as x,N as S,S as C,Z as w,et as T,it as E,n as D,nt as O,o as k,r as A,rt as j,t as M,ut as N}from"./framer.C-txJdHj.mjs";import{n as P,r as F}from"./FVuLWMDBd.CtLZJ6r8.mjs";function I(e){let{errorCodeLeft:t,errorCodeRight:r,dividerText:o,gridSize:s,initialSpeed:l,snakeColor:d,foodColor:f,screenBgColor:m,textColor:h,starCount:g,width:_,height:v}=e,[y,b]=n(`IDLE`),[x,S]=n([]),[C,w]=n({x:0,y:0}),[T,E]=n(`UP`),[D,O]=n(0),[k,A]=n(0),[j,M]=n([]),N=a(null),P=a(`UP`),F=a({x:0,y:0});i(()=>{let e=document.createElement(`link`);e.href=`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Outfit:wght@300;400;600;700;800&display=swap`,e.rel=`stylesheet`,document.head.appendChild(e),M(Array.from({length:g}).map(()=>({x:Math.random()*100,y:Math.random()*100,size:Math.random()*1.8+.3,delay:Math.random()*3})));try{let e=localStorage.getItem(`framer_snake_404_hi`);e&&A(parseInt(e,10))}catch{}return()=>{document.head.removeChild(e)}},[g]);let I=()=>(s-1)/2,R=(e,t)=>{let n=I(),r=e-n,i=t-n;return Math.sqrt(r*r+i*i)>=s/2},z=e=>{let t=0,n=I(),r=s/2-.5;for(;t<500;){let i=Math.floor(Math.random()*s),a=Math.floor(Math.random()*s),o=i-n,c=a-n;if(Math.sqrt(o*o+c*c)<r&&!e.some(e=>e.x===i&&e.y===a)){w({x:i,y:a});return}t++}w({x:Math.floor(n),y:Math.floor(n)})},B=()=>{let e=Math.floor(I()),t=[{x:e,y:e},{x:e,y:e+1},{x:e,y:e+2}];S(t),E(`UP`),P.current=`UP`,O(0),z(t),b(`PLAYING`)};return i(()=>{let e=e=>{if(y!==`PLAYING`)return;let t=e.key,n=T;[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(t)&&e.preventDefault(),(t===`ArrowUp`||t.toLowerCase()===`w`)&&n!==`DOWN`?P.current=`UP`:(t===`ArrowDown`||t.toLowerCase()===`s`)&&n!==`UP`?P.current=`DOWN`:(t===`ArrowLeft`||t.toLowerCase()===`a`)&&n!==`RIGHT`?P.current=`LEFT`:(t===`ArrowRight`||t.toLowerCase()===`d`)&&n!==`LEFT`&&(P.current=`RIGHT`)};return p.addEventListener(`keydown`,e),()=>p.removeEventListener(`keydown`,e)},[y,T]),i(()=>{if(y!==`PLAYING`)return;let e=Math.max(l-Math.min(D,18)*4.5,55),t=setInterval(()=>{S(e=>{if(e.length===0)return e;let t=P.current;E(t);let n={...e[0]};if(t===`UP`?--n.y:t===`DOWN`?n.y+=1:t===`LEFT`?--n.x:t===`RIGHT`&&(n.x+=1),R(n.x,n.y)||e.some(e=>e.x===n.x&&e.y===n.y))return b(`GAME_OVER`),e;let r=[n,...e];if(n.x===C.x&&n.y===C.y){let e=D+1;if(O(e),e>k){A(e);try{localStorage.setItem(`framer_snake_404_hi`,e.toString())}catch{}}z(r)}else r.pop();return r})},e);return()=>clearInterval(t)},[y,C,D,l,s,k]),i(()=>{let e=N.current;if(!e)return;let t=e.getContext(`2d`);if(!t)return;let n=e.width,r=e.height,i=n/s;t.fillStyle=m,t.fillRect(0,0,n,r);let a=n/2;t.strokeStyle=`rgba(255, 255, 255, 0.02)`,t.lineWidth=1;for(let e=0;e<=s;e++)t.beginPath(),t.moveTo(0,e*i),t.lineTo(n,e*i),t.stroke(),t.beginPath(),t.moveTo(e*i,0),t.lineTo(e*i,r),t.stroke();t.strokeStyle=`rgba(255, 255, 255, 0.03)`;for(let e=i*2;e<n/2;e+=i*3)t.beginPath(),t.arc(a,a,e,0,Math.PI*2),t.stroke();if(y===`PLAYING`){let e=Math.sin(Date.now()/120)*1.2;t.fillStyle=f,t.shadowColor=f,t.shadowBlur=6,t.beginPath(),t.arc(C.x*i+i/2,C.y*i+i/2,i/3+e/2,0,Math.PI*2),t.fill(),t.shadowBlur=0}x.forEach((e,n)=>{let r=n===0;t.fillStyle=r?`#ffffff`:d,t.shadowColor=r?`#ffffff`:d,t.shadowBlur=r?4:0,t.beginPath(),t.arc(e.x*i+i/2,e.y*i+i/2,i/2-1,0,Math.PI*2),t.fill(),t.shadowBlur=0})},[x,C,y,s,m,d,f]),u(`div`,{className:`err-container`,style:{width:typeof _==`number`?_:`100%`,height:typeof v==`number`?v:`auto`},children:[c(`style`,{dangerouslySetInnerHTML:{__html:L}}),c(`div`,{className:`space-stars`,children:j.map((e,t)=>c(`div`,{className:`space-star`,style:{left:`${e.x}%`,top:`${e.y}%`,width:`${e.size}px`,height:`${e.size}px`,animationDelay:`${e.delay}s`}},t))}),u(`div`,{className:`retro-404-row`,children:[c(`span`,{className:`retro-number`,children:t}),u(`div`,{className:`game-circle-container`,onTouchStart:e=>{if(y!==`PLAYING`)return;let t=e.touches[0];F.current={x:t.clientX,y:t.clientY}},onTouchEnd:e=>{if(y!==`PLAYING`)return;let t=e.changedTouches[0],n=t.clientX-F.current.x,r=t.clientY-F.current.y,i=T;Math.abs(n)>Math.abs(r)?Math.abs(n)>24&&(n>0&&i!==`LEFT`?P.current=`RIGHT`:n<0&&i!==`RIGHT`&&(P.current=`LEFT`)):Math.abs(r)>24&&(r>0&&i!==`UP`?P.current=`DOWN`:r<0&&i!==`DOWN`&&(P.current=`UP`))},children:[c(`canvas`,{ref:N,width:300,height:300,className:`game-canvas`}),y===`IDLE`&&c(`div`,{className:`game-circle-overlay`,onClick:B,children:c(`div`,{className:`game-play-btn`})}),y===`GAME_OVER`&&u(`div`,{className:`game-circle-overlay`,onClick:B,style:{flexDirection:`column`,gap:10},children:[c(`span`,{style:{fontSize:9,fontWeight:`bold`,color:`#ef4444`,letterSpacing:`0.15em`},className:`sim-blink`,children:__fnjc.game_over}),u(`span`,{style:{fontSize:7,color:`#ffffff`,opacity:.6},children:[__fnjc.score,D]}),c(`div`,{className:`game-play-btn`,style:{borderLeftColor:`rgba(255,255,255,0.4)`}})]})]}),c(`span`,{className:`retro-number`,children:r})]}),u(`div`,{className:`retro-footer`,children:[u(`div`,{className:`retro-divider-wrap`,children:[c(`div`,{className:`retro-divider-line`}),c(`span`,{className:`retro-divider-text`,children:o}),c(`div`,{className:`retro-divider-line`})]}),c(`div`,{children:y===`PLAYING`?u(`span`,{className:`retro-score-tag`,children:[__fnjc.score,D,__fnjc.high_score,k]}):c(`span`,{className:`retro-subtext`,children:__fnjc.use_arrow_keys_or_swipe_to_play})})]})]})}var L,R=e((()=>{r(),l(),d(),y(),L=`
    .err-container {
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #08080c;
        color: #ffffff;
        position: relative;
        overflow: hidden;
        padding: 40px 24px;
    }
    
    /* Starry background twinkle styles */
    .space-stars {
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
    }
    .space-star {
        position: absolute;
        background-color: #ffffff;
        border-radius: 50%;
        animation: star-twinkle 3s infinite ease-in-out;
    }
    @keyframes star-twinkle {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.8; }
    }

    /* Centered Row containing 4 [Circle] 4 */
    .retro-404-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: clamp(16px, 4vw, 40px);
        width: 100%;
        max-width: 720px;
        position: relative;
        z-index: 10;
        box-sizing: border-box;
    }
    .retro-number {
        font-family: 'Outfit', sans-serif;
        font-size: min(170px, 22vw);
        font-weight: 800;
        line-height: 1;
        color: transparent;
        -webkit-text-stroke: 2px #ffffff;
        letter-spacing: -0.05em;
        user-select: none;
    }
    .game-circle-container {
        width: min(320px, 45vw);
        height: min(320px, 45vw);
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.12);
        background-color: #0d0d12;
        box-shadow: 0 10px 40px rgba(0,0,0,0.5), inset 0 0 24px rgba(0,0,0,0.9);
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        touch-action: none;
    }
    .game-canvas {
        width: 100%;
        height: 100%;
        display: block;
    }
    
    /* Game menu overlays inside circle */
    .game-circle-overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(13, 13, 18, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 20;
    }
    .game-play-btn {
        width: 0;
        height: 0;
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        border-left: 22px solid rgba(255, 255, 255, 0.4);
        margin-left: 6px;
        transition: border-left-color 0.2s ease;
    }
    .game-circle-overlay:hover .game-play-btn {
        border-left-color: rgba(255, 255, 255, 0.8);
    }
    
    /* Spaced text elements below the row */
    .retro-footer {
        margin-top: 36px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        z-index: 10;
        box-sizing: border-box;
        width: 100%;
        max-width: 480px;
    }
    
    /* Spaced header with border lines */
    .retro-divider-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 16px;
    }
    .retro-divider-line {
        height: 1px;
        background-color: rgba(255, 255, 255, 0.15);
        flex-grow: 1;
    }
    .retro-divider-text {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.35em;
        text-transform: uppercase;
        color: #ffffff;
        white-space: nowrap;
        padding-left: 0.35em;
    }
    
    .retro-subtext {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.12em;
        color: #666;
        text-transform: uppercase;
        text-align: center;
    }
    .retro-score-tag {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.12em;
        color: #00ff66;
        text-transform: uppercase;
        text-shadow: 0 0 6px rgba(0,255,102,0.3);
    }
    
    .sim-blink {
        animation: sim-blink-anim 1s infinite alternate;
    }
    @keyframes sim-blink-anim {
        0% { opacity: 0.3; }
        100% { opacity: 1; }
    }
`,I.defaultProps={errorCodeLeft:`4`,errorCodeRight:`4`,dividerText:`Signal Lost`,gridSize:20,initialSpeed:120,snakeColor:`rgba(255, 255, 255, 0.25)`,foodColor:`#ffffff`,screenBgColor:`#0d0d12`,textColor:`#ffffff`,starCount:60,width:`100%`,height:`auto`},b(I,{errorCodeLeft:{type:A.String,title:`Left Number`,defaultValue:`4`},errorCodeRight:{type:A.String,title:`Right Number`,defaultValue:`4`},dividerText:{type:A.String,title:`Divider Text`,defaultValue:`Signal Lost`},starCount:{type:A.Number,title:`Star Count`,defaultValue:60,min:20,max:120,step:5},initialSpeed:{type:A.Number,title:`Initial Speed (ms)`,defaultValue:120,min:80,max:200,step:10},snakeColor:{type:A.Color,title:`Snake Body Color`,defaultValue:`rgba(255, 255, 255, 0.25)`},foodColor:{type:A.Color,title:`Food Glow Color`,defaultValue:`#ffffff`},screenBgColor:{type:A.Color,title:`Screen Background`,defaultValue:`#0d0d12`}})})),z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{l(),y(),_(),d(),R(),P(),z=S(I),B={acnE4trqj:`(min-width: 1200px)`,vXfoxxfFn:`(max-width: 1199.98px)`},V=[],H=`framer-t7eg7`,U={acnE4trqj:`framer-v-k5uwb6`,vXfoxxfFn:`framer-v-tkd17c`},W=(e,t,n)=>e&&t?`position`:n,G={Desktop:`acnE4trqj`,Phone:`vXfoxxfFn`},K=({value:e})=>O()?null:c(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),q=({height:e,id:t,width:n,...r})=>({...r,variant:G[r.variant]??r.variant??`acnE4trqj`}),J=N(o(function(e,n){let r=a(null),i=n??r,o=f(),{activeLocale:l,setLocale:d}=j();w();let{style:p,className:_,layoutId:y,variant:b,...S}=q(e);E(s(()=>F({},l),[l]));let[C,O]=T(b,B,!1),A=x(H),N=t(k)?.isLayoutTemplate,P=W(N,!!t(h)?.transition?.layout);return v({}),c(k.Provider,{value:{activeVariantId:C,humanReadableVariantMap:G,primaryVariantId:`acnE4trqj`,variantClassNames:U},children:u(g,{id:y??o,children:[c(K,{value:`html body { background: rgb(255, 255, 255); }`}),c(m.div,{...S,className:x(A,`framer-k5uwb6`,_),ref:i,style:{...p},children:c(M,{children:c(D,{className:`framer-jejrq7-container`,isAuthoredByUser:!0,layout:P,nodeId:`PPbzQv_56`,scopeId:`FVuLWMDBd`,children:c(I,{dividerText:`Signal Lost`,errorCodeLeft:`4`,errorCodeRight:`4`,foodColor:`rgb(255, 255, 255)`,height:`100%`,id:`PPbzQv_56`,initialSpeed:160,layoutId:`PPbzQv_56`,screenBgColor:`rgb(13, 13, 18)`,snakeColor:`rgba(255, 255, 255, 0.25)`,starCount:85,style:{height:`100%`,width:`100%`},width:`100%`})})})}),c(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-t7eg7.framer-5xecqt, .framer-t7eg7 .framer-5xecqt { display: block; }`,`.framer-t7eg7.framer-k5uwb6 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-t7eg7 .framer-jejrq7-container { flex: none; height: 100vh; position: relative; width: 100%; }`,`@media (max-width: 1199.98px) { .framer-t7eg7.framer-k5uwb6 { width: 390px; }}`],`framer-t7eg7`),Y=J,J.displayName=`404`,J.defaultProps={height:800,width:1200},C(J,[{explicitInter:!0,fonts:[]},...z],{supportsExplicitInterCodegen:!0}),X={exports:{default:{type:`reactComponent`,name:`FramerFVuLWMDBd`,slots:[],annotations:{framerLayoutTemplateFlowEffect:`true`,framerScrollSections:`false`,framerAcceptsLayoutTemplate:`true`,framerIntrinsicHeight:`800`,framerContractVersion:`1`,framerIntrinsicWidth:`1200`,framerImmutableVariables:`true`,framerColorSyntax:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vXfoxxfFn":{"layout":["fixed","auto"]}}}`,framerDisplayContentsDiv:`false`,framerResponsiveScreen:`true`,framerComponentViewportWidth:`true`,framerAutoSizeImages:`true`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{X as __FramerMetadata__,Y as default,V as queryParamNames};
//# sourceMappingURL=jf3SkKlRdPhOKKtkhSusyfbfAA_uN0maw_cTXR7Fx2I.v2uUsIhs.mjs.map