(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7935)}])},3991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",a="restore",l="server-patch",u="prefetch",s="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8754),o=r(1757),i=o._(r(7294)),a=n._(r(2636)),l=r(7757),u=r(3735),s=r(3341);r(4210);let c=n._(r(7746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/scarborough-stem-alliance/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function d(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,n,o,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==o?void 0:o.current)&&o.current(e)}})}function g(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,i.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:a,className:l,imgStyle:u,blurStyle:s,isLazy:c,fetchPriority:f,fill:d,placeholder:p,loading:m,srcString:b,config:v,unoptimized:y,loader:w,onLoadRef:_,onLoadingCompleteRef:x,setBlurComplete:E,setShowAltText:j,onLoad:A,onError:C,...O}=e;return m=c?"lazy":m,i.default.createElement("img",{...O,...g(f),loading:m,width:o,height:n,decoding:"async","data-nimg":d?"fill":"1",className:l,style:{...u,...s},...r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&h(e,b,p,_,x,E,y))},[b,p,_,x,E,C,y,t]),onLoad:e=>{let t=e.currentTarget;h(t,b,p,_,x,E,y)},onError:e=>{j(!0),"blur"===p&&E(!0),C&&C(e)}})}),b=(0,i.forwardRef)((e,t)=>{var r;let n,o,{src:h,sizes:b,unoptimized:v=!1,priority:y=!1,loading:w,className:_,quality:x,width:E,height:j,fill:A,style:C,onLoad:O,onLoadingComplete:P,placeholder:M="empty",blurDataURL:R,fetchPriority:k,layout:S,objectFit:N,objectPosition:I,lazyBoundary:T,lazyRoot:L,...U}=e,z=(0,i.useContext)(s.ImageConfigContext),D=(0,i.useMemo)(()=>{let e=f||z||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[z]),F=U.loader||c.default;delete U.loader;let H="__next_img_default"in F;if(H){if("custom"===D.loader)throw Error('Image with src "'+h+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(A=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!b&&(b=t)}let B="",W=p(E),V=p(j);if("object"==typeof(r=h)&&(d(r)||void 0!==r.src)){let e=d(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,o=e.blurHeight,R=R||e.blurDataURL,B=e.src,!A){if(W||V){if(W&&!V){let t=W/e.width;V=Math.round(e.height*t)}else if(!W&&V){let t=V/e.height;W=Math.round(e.width*t)}}else W=e.width,V=e.height}}let G=!y&&("lazy"===w||void 0===w);(!(h="string"==typeof h?h:B)||h.startsWith("data:")||h.startsWith("blob:"))&&(v=!0,G=!1),D.unoptimized&&(v=!0),H&&h.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(v=!0),y&&(k="high");let[K,J]=(0,i.useState)(!1),[Y,q]=(0,i.useState)(!1),X=p(x),Q=Object.assign(A?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:I}:{},Y?{}:{color:"transparent"},C),Z="blur"===M&&R&&!K?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:W,heightInt:V,blurWidth:n,blurHeight:o,blurDataURL:R,objectFit:Q.objectFit})+'")'}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:i,width:u[c]})}}({config:D,src:h,unoptimized:v,width:W,quality:X,sizes:b,loader:F}),ee=h,et=(0,i.useRef)(O);(0,i.useEffect)(()=>{et.current=O},[O]);let er=(0,i.useRef)(P);(0,i.useEffect)(()=>{er.current=P},[P]);let en={isLazy:G,imgAttributes:$,heightInt:V,widthInt:W,qualityInt:X,className:_,imgStyle:Q,blurStyle:Z,loading:w,config:D,fetchPriority:k,fill:A,unoptimized:v,placeholder:M,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:J,setShowAltText:q,...U};return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,{...en,ref:t}),y?i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imageSrcSet:$.srcSet,imageSizes:$.sizes,crossOrigin:U.crossOrigin,...g(k)})):null)}),v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let n=r(8754),o=n._(r(7294)),i=r(4532),a=r(3353),l=r(1410),u=r(9064),s=r(370),c=r(9955),f=r(4224),d=r(508),p=r(1516),h=r(4266),g=r(3991),m=new Set;function b(e,t,r,n,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(m.has(i))return;m.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let y=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:m,children:y,prefetch:w=null,passHref:_,replace:x,shallow:E,scroll:j,locale:A,onClick:C,onMouseEnter:O,onTouchStart:P,legacyBehavior:M=!1,...R}=e;r=y,M&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let k=!1!==w,S=null===w?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,N=o.default.useContext(c.RouterContext),I=o.default.useContext(f.AppRouterContext),T=null!=N?N:I,L=!N,{href:U,as:z}=o.default.useMemo(()=>{if(!N){let e=v(l);return{href:e,as:m?v(m):e}}let[e,t]=(0,i.resolveHref)(N,l,!0);return{href:e,as:m?(0,i.resolveHref)(N,m):t||e}},[N,l,m]),D=o.default.useRef(U),F=o.default.useRef(z);M&&(n=o.default.Children.only(r));let H=M?n&&"object"==typeof n&&n.ref:t,[B,W,V]=(0,d.useIntersection)({rootMargin:"200px"}),G=o.default.useCallback(e=>{(F.current!==z||D.current!==U)&&(V(),F.current=z,D.current=U),B(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[z,H,U,V,B]);o.default.useEffect(()=>{T&&W&&k&&b(T,U,z,{locale:A},{kind:S},L)},[z,U,W,A,k,null==N?void 0:N.locale,T,L,S]);let K={ref:G,onClick(e){M||"function"!=typeof C||C(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,i,l,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:l,locale:s,scroll:u}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?o.default.startTransition(h):h()}(e,T,U,z,x,E,j,A,L,k)},onMouseEnter(e){M||"function"!=typeof O||O(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),T&&(k||!L)&&b(T,U,z,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:S},L)},onTouchStart(e){M||"function"!=typeof P||P(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),T&&(k||!L)&&b(T,U,z,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:S},L)}};if((0,u.isAbsoluteUrl)(z))K.href=z;else if(!M||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==A?A:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);K.href=t||(0,h.addBasePath)((0,s.addLocale)(z,e,null==N?void 0:N.defaultLocale))}return M?o.default.cloneElement(n,K):o.default.createElement("a",{...R,...K},r)}),w=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(7294),o=r(29),i="function"==typeof IntersectionObserver,a=new Map,l=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n||t,u=o||r,s=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&o?"1":"20")+"'/%3E"+s+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7935:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),o=r(1163),i=r(7294),a=r(1664),l=r.n(a),u=r(5675),s=r.n(u),c={src:"/scarborough-stem-alliance//_next/static/media/SSA.eea8a308.png",height:319,width:279,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA4klEQVR42mOAgeLiYt+urq79MgoKngwwoM7AoDJtysRlCxYs+j937tz/C+fP/z99zpxFDG6uSgyeGe0P5i5a8X/NikV/Fy5c+Gfxxo3/ls2a9b/DyPgmQ/jUM/f9J574n9m84N+U6TP/b8nL/3uRgeH/WQa+mww+davvxU48+l93wrF/M4JK/x9gYPi7VEH9/1kphRsMXrWrHkX3H/pvP/3M33nxjX9uMDD8PS6j9v+wqPQdBsvEVs2w5k1rHOdd+784e9L/HQwM/xlElVZM4BFUY4CDknnBJb5Zx9oZGPxhQgCXBWWsJ/uI1AAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8};let f=()=>{let e="flex justify-center items-center w-fit h-min text-grey flex flex-col",t="p-6 px-2 py-1 my-2 text-p16 after:transition after:duration-200 hover:text-black after:w-0 after:aspect-square hover:after:w-1 hover:after:rounded-full hover:after:bg-black",r="w-9 aspect-square p-0 object-contain my-2";return(0,n.jsxs)("nav",{className:"border-2 border-pink-darkest rounded-full bg-white flex flex-row justify-between items-center px-40 mt-48 fixed w-fit gap-40",children:[(0,n.jsx)(l(),{className:"".concat(e," ").concat(r," "),href:"/",children:(0,n.jsx)(s(),{className:"".concat(r),src:c})}),(0,n.jsx)(l(),{className:"".concat(e," ").concat(t),href:"/",children:"Home"}),(0,n.jsx)(l(),{className:"".concat(e," ").concat(t),href:"/works",children:"Our Works"}),(0,n.jsx)(l(),{className:"".concat(e," ").concat(t),href:"/partners",children:"Partners"}),(0,n.jsx)(l(),{className:"".concat(e," ").concat(t),href:"/team",children:"Team"}),(0,n.jsx)(l(),{className:"".concat(e," ").concat(t),href:"/contact",children:"Contact"})]})};r(6192);var d=function(e){let{Component:t,pageProps:r}=e,a=(0,o.useRouter)();return(0,i.useEffect)(()=>{a.pathname.startsWith("/scarborough-stem-alliance")&&a.replace(a.pathname.replace("/scarborough-stem-alliance",""))},[]),(0,n.jsxs)("div",{className:"bg-white flex justify-center",children:[(0,n.jsx)(f,{}),(0,n.jsx)(t,{...r})]})}},6192:function(){},5675:function(e,t,r){e.exports=r(3740)},1664:function(e,t,r){e.exports=r(5569)},1163:function(e,t,r){e.exports=r(6885)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);