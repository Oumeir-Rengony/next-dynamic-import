(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[330],{412:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return cn},default:function(){return sn}});var i=e(9499),o=e(6835),a=e(7294),r=e(9008),l=e.n(r),d=e(5152),p=e.n(d),c=e(9521),s=e(4834),u=e(3634),m=e(5966),g=e(3515),h=e(1023),b=e(3420),v=e(7764),x=e(9397),f=e(8363),w=e(4626),y=e(94),_=e(8401),j=e(6626),C=e(3356);function P(n){var t,e=new C.Z,i=parseInt(String(n),10),o=new Date;o.setDate(o.getDate()+i),void 0===e.get("isSmartAppBannerClosed")&&e.set("isSmartAppBannerClosed","true",{expires:o,path:"/",secure:(0,_.ZJ)(),sameSite:"strict"}),null===(t=document.getElementById("smartbanner"))||void 0===t||t.classList.add("sr-only")}function k(n,t,e,i){var o={},a=!1,r=!1;return window&&window.navigator&&(a=window.navigator.userAgent.toLowerCase().includes("android"),r=window.navigator.userAgent.toLowerCase().includes("iphone")||window.navigator.userAgent.toLowerCase().includes("ipad")),o=function(n,t,e,i){if(!(n&&n.smartAppBannerCollection&&n.smartAppBannerCollection.items[0]&&n.smartAppBannerCollection.items[0].dataConfig))return null;var o=n.smartAppBannerCollection.items[0].dataConfig,a={};return e&&(a={appName:o["data-app-name"],appIconUrl:o["data-app-icon"],appDescription:o["data-app-description"],appUrl:o["get-app-url"]||o["data-app-url"]||null,appDownloadCount:o["data-app-android-download-count"],appRatingImageUrl:o["data-app-stars-image-android"],analyticsClass:o["data-analytics-class"],analyticsCategory:o["data-analytic-category"],analyticsEventLabel:o["data-analytics-android-event-label"],installButtonText:o["data-install-button-text"],enableNewTaxonomy:!0,onClickClose:function(){P(o["data-days-hidden-close"])},onClickGetApp:function(){P(o["data-days-hidden-view"])},shouldContainNoOpenerNoReferrer:t}),i&&(a={appName:o["data-app-name"],appIconUrl:o["data-app-icon"],appDescription:o["data-app-description"],appUrl:o["data-app-url"],appDownloadCount:o["data-app-ios-download-count"],appRatingImageUrl:o["data-app-stars-image-ios"],analyticsClass:o["data-analytics-class"],analyticsCategory:o["data-analytic-category"],analyticsEventLabel:o["data-analytics-ios-event-label"],installButtonText:o["data-install-button-text"],enableNewTaxonomy:!0,onClickClose:function(){P(o["data-days-hidden-close"])},onClickGetApp:function(){P(o["data-days-hidden-view"])},shouldContainNoOpenerNoReferrer:t}),a}(n,t,a,r),o&&o&&(o.isActive=function(n,t,e){return j.SmartAppBannerActivated&&!function(n,t,e){var i=!1;if(n&&n.smartAppBannerCollection&&n.smartAppBannerCollection.items[0]&&n.smartAppBannerCollection.items[0].excludedContentsCollection&&n.smartAppBannerCollection.items[0].excludedContentsCollection.items){n.smartAppBannerCollection.items[0].excludedContentsCollection.items.forEach((function(n){n.__typename===t&&(i=!0)}))}if(n&&n.smartAppBannerCollection&&n.smartAppBannerCollection.items[0]&&n.smartAppBannerCollection.items[0].excludedSegmentUrLs){n.smartAppBannerCollection.items[0].excludedSegmentUrLs.forEach((function(n){e.match(n)&&(i=!0)}))}return i}(n,t,e)&&!function(){var n=new C.Z;return void 0!==n.get("isSmartAppBannerClosed")&&null!==n.get("isSmartAppBannerClosed")}()}(n,e,window.location.pathname)&&(a||r)),o}var S,N=e(7267),A=e(7424),O=e(7812),B=e(3969),D=j.Microservices.BIN,I=D.URL,L=D.passkey,E=D.xFunctionsKey,T=D.OcpApimSubscriptionKey,Z=function(n){var t={locale:j.locale};return(0,B.xA)(I+n+"/1/2","POST",t,{"Content-Type":"application/json",passkey:L,"x-functions-key":E,"Ocp-Apim-Subscription-Key":T}).then((function(n){var t;if(500===(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.httpStatus))return[]}))};function R(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function U(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?R(Object(e),!0).forEach((function(t){(0,i.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var M=null===j||void 0===j?void 0:j.enableAccessibilityFeatures,G=(null===j||void 0===j||null===(S=j.Analytics)||void 0===S||S.LumiUrl,A.do),z=A.Fy,F=A.y6,W=A.qQ,Y=A.$0;j.Microservices.CRM.EnableAjax;var H=e(131),q=e(5893);function J(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function K(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?J(Object(e),!0).forEach((function(t){(0,i.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):J(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var Q=A.do,$=A.Fy,V=A.y6,X=A.qQ,nn=A.$0,tn=p()((function(){return Promise.resolve().then(e.bind(e,4834)).then((function(n){return n.AccessibleBannerCarousel}))}),{loadableGenerated:{webpack:function(){return[4834]}}}),en=p()((function(){return Promise.all([e.e(272),e.e(36)]).then(e.bind(e,6276)).then((function(n){return n.Signup}))}),{loadableGenerated:{webpack:function(){return[6276]}}}),on=p()((function(){return Promise.all([e.e(272),e.e(897)]).then(e.bind(e,9823)).then((function(n){return n.HowToGetRewarded}))}),{loadableGenerated:{webpack:function(){return[9823]}}}),an=p()((function(){return e.e(391).then(e.bind(e,3599)).then((function(n){return n.AccessibleProductPushComponent}))}),{loadableGenerated:{webpack:function(){return[3599]}}}),rn=p()((function(){return Promise.all([e.e(272),e.e(590),e.e(332)]).then(e.bind(e,4954)).then((function(n){return n.SubgroupArticle}))}),{loadableGenerated:{webpack:function(){return[4954]}}}),ln=p()((function(){return e.e(636).then(e.bind(e,5831)).then((function(n){return n.default}))}),{loadableGenerated:{webpack:function(){return[5831]}}}),dn=(0,c.vJ)([".compo-ios .pregnancy-page{@media (min-width:992px){.sign-up-container .header .header-title{padding-bottom:0px !important;}}}.compo-ios .pregnancy-page,.compo-ios-chrome .pregnancy-page{.btn-wrapper span{position:relative;top:2px;}.full-width-banner1{margin-bottom:25px;.full-width-banner-container .full-width-banner .fwb_description{padding-top:24px;}.full-width-banner-container .full-width-banner .fwb_description h1{margin-bottom:12px;}@media (min-width:992px){margin-bottom:58px;.full-width-banner-container .full-width-banner .fwb_description{padding-top:4px;}.full-width-banner-container .full-width-banner .fwb_description h1{margin-bottom:15px;}}}.full-width-banner-carousel{margin-bottom:38px;@media(min-width:992px){margin-bottom:70px;}.content-mob .full-width-banner-container .full-width-banner .fwb_description{padding-top:24px;}.content-mob .full-width-banner-container .full-width-banner .fwb_description h2{margin-bottom:15px;}@media (min-width:992px){margin-bottom:31px;}}.produt-push-carousel .product-push .product-push-title{margin-bottom:18px;font-style:normal;h1{font-style:normal;}}@media (min-width:992px){.produt-push-carousel .product-push .product-push-title{margin-bottom:34px;}.produt-push-carousel .product-push .desktop .product-push{margin-bottom:17px;}.produt-push-carousel .product-push .desktop .product-module .product__bottom-section{padding:11px 20px;}.produt-push-carousel .product-push .desktop .product-module .btn-shop .ps-external{bottom:16px;}}.parenting-tool{margin-bottom:6px;}.full-width-banner2{margin-bottom:39px;.full-width-banner .fwb_description{padding-top:57px;}.full-width-banner .fwb_description h2{padding-top:9px;margin-bottom:14px;}@media (min-width:992px){margin-bottom:65px;.full-width-banner .fwb_description{padding-top:5px;}.full-width-banner .fwb_description h2{padding-top:11px;margin-bottom:14px;}}}.bsod-carousel{margin-bottom:14px;}.popular-articles{margin-bottom:14px;.sub-group .sub-group-header .sub-group-title{margin-bottom:21px;}.sub-group .small-card .title{padding-top:4px;.page-views{top:1px;}}@media (min-width:992px){margin-bottom:41px;.sub-group .sub-group-header .sub-group-title{margin-bottom:53px;}}}.full-width-banner3{.full-width-banner .fwb_description{padding-top:17px;}.full-width-banner .fwb_description h2{padding-top:9px;margin-bottom:15px;}@media (min-width:992px){.full-width-banner .fwb_description{padding-top:6px;}.full-width-banner .fwb_description h2{padding-top:11px;margin-bottom:13px;}}}.sign-up-container{.header{margin-top:30px;.content-icon img{margin-bottom:4px;}}.header .header-title{padding-bottom:16px;}.signup-btn-container{margin-top:8px;.wrap-email .form-label{top:17px;}.form-control .form-input:focus + .form-label{top:6px;font-size:calc(10px + var(--zoom));}}@media (min-width:992px){.signup-btn-container{margin-top:34px;}.signup-container:not(.embedded) .header{margin-top:40px;margin-bottom:52px;}}}.how-to-get-rewarded__container{.how-to-get-rewarded .htgr-cta{padding-top:16px;.btn-wrapper a{padding:9px 26px;}}@media (min-width:992px){.how-to-get-rewarded .htgr-cta{padding-top:15px;}.htgr-section .htgr-img{max-height:135px;}}}}"]),pn=c.ZP.div.withConfig({displayName:"slug__StyleWrapper",componentId:"sc-11c68wz-0"})([".accessible-carrousel{@media(min-width:992px){.content-desk .splide__arrow--prev{left:-20px;top:89px;}.content-desk .splide__arrow--next{right:-20px;top:89px;}}}.bsod-carousel .accessible-carrousel{@media(min-width:992px){.splide__list{display:flex;flex-direction:row;justify-content:center;}}}.full-width-banner2 .full-width-banner,.full-width-banner3 .full-width-banner{margin:0 auto;}.full-width-banner1 .full-width-banner{margin:0 auto;}.full-width-banner1 .full-width-banner-container{.shadow{box-shadow:none;}}.full-width-banner-carousel .content-mob .c-mob__list .carousel__slider{max-height:399px;}.full-width-banner-carousel .content-desk,.parenting-tool .content-desk{margin:0 auto;}.parenting-tool{margin-bottom:8px;@media(min-width:992px){.content-desk{margin-bottom:27px;}}}.parenting-tool .c-carrousel .c-introtitle__txt{margin:0 0 1px -6px;letter-spacing:0.05px;font-weight:400;}.full-width-banner1{margin-bottom:23px;}.shourtcut-carousel{.shortcut-carousel{padding:1px 0 0;}.carousel-item .item-icon{padding:0 7px;}}@media (min-width:992px){.shourtcut-carousel{display:none;}}@media (min-width:992px){.full-width-banner1 .full-width-banner-container{.shadow{box-shadow:0 0 8px 0 rgb(0 0 0 / 20%);}}.full-width-banner1{margin-top:23px;margin-bottom:55px;.full-width-banner .fwb_description h1{padding-top:13px;}}.full-width-banner1 .hero-container .article-oasis__media{max-width:1180px;margin:0 auto;}}.full-width-banner-carousel{margin-bottom:35px;}.full-width-banner-carousel .content-mob .c-mob__list .carousel__slider{margin-top:0;min-height:399px;.full-width-banner-container .full-width-banner .fwb_description .title{font-weight:400;}}.splide__arrow{border-radius:0%;}@media (min-width:992px){.full-width-banner-carousel{margin-bottom:29px;}}.produt-push-carousel{margin-bottom:31px;.product-push-container .mob .carousel{max-width:352px;margin:0 auto;}}.produt-push-carousel .product-push{margin-top:17px;@media(min-width:992px){margin-top:0}}.produt-push-carousel .product-push .product-push-title{margin-bottom:20px;font-style:normal;h1{font-weight:400;}}@media (min-width:992px){.produt-push-carousel{margin:0 auto;margin-bottom:62px;max-width:1201px;}.produt-push-carousel .product-push .desktop{margin-bottom:6px;}.produt-push-carousel .product-push .product-push-title{margin-bottom:37px;font-style:normal;font-weight:400 !important;}.product-push-cta .btn-wrapper a{padding:8px 25px;}}.full-width-banner2{margin-bottom:36px;.full-width-banner-container .fwb_description{padding-top:0px;}.full-width-banner-container .fwb_description h2{padding-top:9px;}}@media (min-width:992px){.full-width-banner2{margin-bottom:61px;.full-width-banner-container .fwb_description{padding-top:0px;}.full-width-banner-container .fwb_description h2{padding-top:11px;font-weight:400;}}}.full-width-banner3{margin-bottom:32px;.full-width-banner-container .fwb_description{padding-top:22px;}}@media (min-width:992px){.full-width-banner3{margin-bottom:60px;.full-width-banner-container .fwb_description h2{padding-top:13px;font-weight:400;}}}.bsod-carousel .c-carrousel .c-introtitle__txt{font-weight:400;}.bsod-carousel .content-desk{margin:0 auto;}.how-to-get-rewarded__container{margin-bottom:32px;.how-to-get-rewarded .htgr-section .htgr-item{margin-left:auto;margin-right:auto;}.how-to-get-rewarded .htgr-title{font-weight:400;}}@media (min-width:992px){.how-to-get-rewarded__container{margin-bottom:56px;.how-to-get-rewarded .htgr-section .htgr-item{margin-left:unset;margin-right:unset;}}}@media only screen and (min-width:992px){.bsod-carousel .c-carrousel .content-desk-secondary .c-desk.c-body{padding:26px 0 0px;}.bsod-carousel .c-carrousel .content-desk .carousel{margin-bottom:13px;}}@media (min-width:992px){.sign-up-container{margin-bottom:48px;}}.popular-articles{max-width:984px;margin:0 auto;margin-bottom:16px;}.popular-articles .subgroup-article{margin:0 auto;min-width:335px;}@media (min-width:992px){.popular-articles .sub-group .sub-group-content{margin-left:52px;}.popular-articles{margin-bottom:41px;}}.thank-you-container .box-content.on-mobile-show{top:0;z-index:3;}.thank-you-container .box-content,.thank-you-container .box-content.is-visible,.thank-you-container .on-mobile-show.is-visible{top:100px;}@media (min-width:992px){.thank-you-container .box-content.is-hidden{top:0;}.thank-you-container .box-content,.thank-you-container .box-content.is-visible,.thank-you-container .on-mobile-show.is-visible{top:78px;}.thank-you-container.teal-nav--top .box-content{top:79px;}}.sign-up-container .signup-col{padding-right:0px;padding-left:0px;}.sign-up-container{.signup-container{min-height:initial;}.header-title{padding-bottom:20px;padding-left:0;margin-left:60px;}.header{margin-top:29px;}.header-content{margin-bottom:0px;justify-content:space-between;}.content-icon{padding:0 10px;}.content-icon img{margin-bottom:2px;}.content-icon:first-child{margin-left:-5px;margin-right:-3px;}.search::placeholder{color:var(--light-indigo);}.content-icon:first-child small,.content-icon:nth-child(2) small{padding-left:0px;}.signup-container:not(.embedded) .content-icon:nth-child(2){margin-right:6px;}.content-icon:last-child{margin-right:-14px;}.content-icon:last-child img{margin-left:4px;}#signup-email.form-control{margin-left:4px;padding-left:12px;padding-bottom:18px;}.signup-form-btn{margin-top:15px;margin-left:4px;}.signup-btn-container{margin-bottom:5px;}}@media (min-width:992px){.sign-up-container{margin-bottom:1px;}.sign-up-container .signup-container--white:not(.embedded){padding-left:5px;margin-top:-22px;height:300px;.header{margin-top:36px;}}.signup-container:not(.embedded) .content-icon:first-child{margin-left:-24px !important;margin-right:-2px;}.sign-up-container{.signup-container{padding-right:4px;}.signup-container:not(.embedded) > svg{margin-left:100px;margin-right:85px;}}.sign-up-container .signup-col{margin-bottom:20px;.signup-container:not(.embedded) .header-title{padding-left:0px;margin-left:-13px;letter-spacing:0.06px;}.content-icon img{margin-bottom:0px;}.content-icon:first-child small,.content-icon:nth-child(2) small{padding-left:5px;}.signup-container:not(.embedded) .content-icon:last-child{margin-right:-37px;img{margin-left:0px;}}.signup-container.signup-container--white .signup-btn-container{margin-top:32px;}.signup-container:not(.embedded) .signup-btn-container{position:relative;right:2px;}.signup-container:not(.embedded) .signup-btn-container .form-group-flex .signup-label{margin-bottom:16px;}#signup-email.form-control{margin-left:0px;padding-bottom:14px;position:relative;right:2px;}.signup-container:not(.embedded) .signup-form-btn{margin-top:17px;position:relative;right:1px;margin-left:0px;}.signup-container:not(.embedded) .header-title{letter-spacing:unset;}}}.signup-form-btn .btn-submit{font-family:var(--font-pampers-semi-bold);}.secondary-sign-up-container .signup-col{margin-bottom:30px;}@media only screen and (min-width:992px){.secondary-sign-up-container .signup-col{margin-bottom:58px;}}.header .header-title{font-size:calc(30px + var(--zoom));}@media screen and (min-width:992px){.header .header-title{font-size:calc(36px + var(--zoom));}}.product-push-container .product-push-carousel{margin-bottom:10px;width:375px;margin:0 auto;@media(min-width:992px){width:auto;}}.product-push-container .product-push-carousel .splide__pagination{margin-right:20px;margin-top:13px;button{margin:0;}}.c-carrousel .content-mob{padding-bottom:16px;@media(min-width:992px){padding-bottom:0;}}.c-carrousel .content-mob .splide__pagination{padding-top:25px;bottom:-2.5em;}.c-carrousel .content-mob .splide__pagination .splide__pagination__page{opacity:1;margin:0 20px 0 0;}@media(min-width:992px){.c-carrousel.c-carrousel .c-body.c-desk{padding-bottom:67px;.splide__pagination{bottom:-30px;}.splide__pagination .splide__pagination__page{opacity:1;margin:0 20px 0 0;}}.product-push-container .product-push-cta{padding-top:10px;}}"]),cn=!0,sn=function(n){var t,e,i,r,d,p,c,C=n.header,P=n.footer,S=n.uiStringSet,B=n.siteSetting,D=n.homepage,I=n.smartBannerProps,L=n.getAppCta,E=a.useState(!1),T=(0,o.Z)(E,2),R=T[0],J=T[1],cn=a.useState(!1),sn=(0,o.Z)(cn,2),un=sn[0],mn=sn[1],gn=a.useState(null),hn=(0,o.Z)(gn,2),bn=hn[0],vn=hn[1],xn=a.useState((null===S||void 0===S||null===(t=S.crm)||void 0===t?void 0:t.thankYouInstantMessage)||""),fn=(0,o.Z)(xn,2),wn=fn[0],yn=fn[1],_n=a.useRef(null),jn=(0,H.YD)({triggerOnce:!0,rootMargin:"200px"}),Cn=(0,o.Z)(jn,2),Pn=Cn[0],kn=Cn[1],Sn=(0,H.YD)({triggerOnce:!0}),Nn=(0,o.Z)(Sn,2),An=Nn[0],On=Nn[1],Bn=(0,H.YD)({triggerOnce:!0,rootMargin:"200px"}),Dn=(0,o.Z)(Bn,2),In=Dn[0],Ln=Dn[1],En=(0,H.YD)({triggerOnce:!0}),Tn=(0,o.Z)(En,2),Zn=Tn[0],Rn=Tn[1],Un=(0,H.YD)({triggerOnce:!0,rootMargin:"200px"}),Mn=(0,o.Z)(Un,2),Gn=Mn[0],zn=Mn[1],Fn=(0,H.YD)({triggerOnce:!0,rootMargin:"200px"}),Wn=(0,o.Z)(Fn,2),Yn=Wn[0],Hn=Wn[1],qn=(0,H.YD)({triggerOnce:!0,rootMargin:"400px"}),Jn=(0,o.Z)(qn,2),Kn=Jn[0],Qn=Jn[1],$n=function(n,t,e,i){var a,r,l;if(null!==n&&void 0!==n&&n.productPushCarrousel&&null!==n&&void 0!==n&&n.productPushCta){var d,p,c,s,u,m,g,h,b,v,x,f,w=[],y=[],_=null!==e&&void 0!==e&&null!==(d=e.button)&&void 0!==d&&d.shopNow?e.button.shopNow:"",C=U(U({},null===n||void 0===n?void 0:n.productPushCta),{},{label:null===n||void 0===n||null===(p=n.productPushCta)||void 0===p?void 0:p.labelText,eventLabel:"".concat(null!==n&&void 0!==n&&null!==(c=n.productPushCta)&&void 0!==c&&c.url.includes("adjust")?null===G||void 0===G?void 0:G.app:null===G||void 0===G?void 0:G.eng).concat(null===W||void 0===W?void 0:W.hp).concat(null===F||void 0===F?void 0:F.other).concat(null===z||void 0===z?void 0:z.prod_push).concat(null===Y||void 0===Y?void 0:Y.all,"See more products"),eventCategory:"event_informational_action",className:"event_button_click"}),P=null!==n&&void 0!==n&&null!==(s=n.productPushCarrousel)&&void 0!==s&&null!==(u=s.linkedProductsCollection)&&void 0!==u&&u.items?Array.isArray(null===n||void 0===n||null===(m=n.productPushCarrousel)||void 0===m||null===(g=m.linkedProductsCollection)||void 0===g?void 0:g.items)&&(null===n||void 0===n||null===(h=n.productPushCarrousel)||void 0===h||null===(b=h.linkedProductsCollection)||void 0===b?void 0:b.items.map((function(n){var i,a,d,p,c,s,u,m,g,h,b,v,x=null===n||void 0===n||null===(i=n.variantSizeCollection)||void 0===i?void 0:i.items.map((function(n){var t;return null===n||void 0===n||null===(t=n.variantIdentifierCollection)||void 0===t?void 0:t.items})),f=x.map((function(n){return n}));f[0].map((function(n){w.push(null===n||void 0===n?void 0:n.gtin),y.push(null===n||void 0===n?void 0:n.sku)}));var C,P,k,S,N,O,B,D,I=(0,o.Z)(n.variantSizeCollection.items,1),L=(0,o.Z)(I[0].variantIdentifierCollection.items,1)[0],E=L.gtin,T=L.sku;return null!==n&&void 0!==n&&null!==(a=n.rnRData)&&void 0!==a&&null!==(d=a.Includes)&&void 0!==d&&d.Products&&(r=null===n||void 0===n||null===(C=n.rnRData)||void 0===C||null===(P=C.Includes)||void 0===P||null===(k=P.Products[null===n||void 0===n?void 0:n.rnRExternalId])||void 0===k||null===(S=k.ReviewStatistics)||void 0===S?void 0:S.AverageOverallRating,l=null===n||void 0===n||null===(N=n.rnRData)||void 0===N||null===(O=N.Includes)||void 0===O||null===(B=O.Products[n.rnRExternalId])||void 0===B||null===(D=B.ReviewStatistics)||void 0===D?void 0:D.TotalReviewCount),{productTitle:(null===n||void 0===n?void 0:n.title)||null,productClaim:(null===n||void 0===n?void 0:n.claim)||null,label:l||null,rating:r||null,productGTIN:E||null,activateBuyItNow:(null===n||void 0===n?void 0:n.activateBuyItNow)||null,sku:T,shopNowCTA:null!==n&&void 0!==n&&n.activateBuyItNow?null!==n&&void 0!==n&&null!==(p=n.buyItNowCta)&&void 0!==p&&p.labelText?null===n||void 0===n||null===(c=n.buyItNowCta)||void 0===c?void 0:c.labelText:_:"",styleDefault:!0,binProps:{label:null===e||void 0===e||null===(s=e.binLite)||void 0===s?void 0:s.buyNow,retailersProvider:Z,logo:null===t||void 0===t?void 0:t.logo,uiString:e,product:U(U({},n),{},{gtin:w,sku:y,label:l||null,buyItNowExternalUrl:null===n||void 0===n?void 0:n.buyItNowExternalUrl})},path:"/".concat(j.Pages.locale).concat(null!==(u=n.path)&&void 0!==u&&u.startsWith("/")?"":"/").concat(n.path).replace(/\/\//g,"/")||null,productPackshot:U({},n.packshot),productSize:(null===n||void 0===n||null===(m=n.productSizeCollection)||void 0===m?void 0:m.items)||null,productType:(null===n||void 0===n||null===(g=n.productTypeCollection)||void 0===g?void 0:g.items)||null,externalURL:(null===n||void 0===n?void 0:n.buyItNowExternalUrl)||null,dataActionDetail:"".concat(null===G||void 0===G?void 0:G.eng).concat(null===W||void 0===W?void 0:W.hp).concat(null===F||void 0===F?void 0:F.other).concat(null===z||void 0===z?void 0:z.prod_push).concat(null===Y||void 0===Y?void 0:Y.all).concat(null===n||void 0===n?void 0:n.claim,"_").concat(null===n||void 0===n?void 0:n.title),shopNowGADetail:"".concat(A.do.bin).concat(A.qQ.hp).concat(A.Fy.prod_push).concat(A.Fy.other).concat(A.$0.all).concat((null===n||void 0===n||null===(h=n.productType)||void 0===h?void 0:h.items)&&(null===n||void 0===n||null===(b=n.productType)||void 0===b||null===(v=b.items[0])||void 0===v?void 0:v.title),"_").concat((null===n||void 0===n?void 0:n.title)||null)||"",isDynamicDataActionDetail:!0,eventLabel:"".concat(null===G||void 0===G?void 0:G.bin).concat(null===W||void 0===W?void 0:W.hp).concat(null===z||void 0===z?void 0:z.prod_push).concat(null===F||void 0===F?void 0:F.other).concat(null===Y||void 0===Y?void 0:Y.all)}}))):void 0;a={title:null===n||void 0===n||null===(v=n.productPushCarrousel)||void 0===v?void 0:v.title,enableAccessibleFeatures:M,cta:U({},C),reviewLabel:null===e||void 0===e||null===(x=e.review)||void 0===x?void 0:x.reviewLabel,ratingLabel:null===e||void 0===e||null===(f=e.review)||void 0===f?void 0:f.ratingLabel,productPushProps:(0,O.Z)(P),desktopVisibleSlides:4,mobileVisibleSlides:2,provider:null===i||void 0===i?void 0:i.provider,shopNowGAClass:"event_button_click",eventLabel:"hp_"}}return a}(D,C,S,B),Vn=D.bannerType,Xn=D.seo,nt=D.fullWidthBanner1Props,tt=D.staticBannerProps,et=D.staticBannerProps1,it=D.staticBannerProps2,ot=D.fullWidthBannerCarousel,at=D.fullWidthBanner3Props,rt=D.fullWidthBanner4Props,lt=D.howToGetRewardedProps,dt=D.parentingTool,pt=D.signupProps,ct=D.bsodProps,st=D.subGroupArticleProps,ut=D.breadcrumbSeo,mt=D.shortCutCarouselProps,gt=D.signupLinks,ht=D.loginLinks,bt=[{link:"#to-home",label:null===S||void 0===S||null===(e=S.skipLinks)||void 0===e?void 0:e.toHome},{link:"#to-main-content",label:null===S||void 0===S||null===(i=S.skipLinks)||void 0===i?void 0:i.toMainContent},{link:"#to-search",label:null===S||void 0===S||null===(r=S.skipLinks)||void 0===r?void 0:r.toSearch}];return a.useEffect((function(){if("Price Spider"===B.provider&&j.PriceSpider.injectScript&&(0,f.D3)(),"Price Spider"===B.provider)var n=setInterval((function(){"undefined"!==typeof PriceSpider&&(PriceSpider.rebind(),clearInterval(n))}),500);(0,_.MY)()?(J(!0),(0,y.Dp)("showInstantMessage")&&(mn(!0),localStorage.removeItem("showInstantMessage"))):J(!1);var t=k(I.smartBannerData,w.d,I.typename,window.location.href);vn(t),(null===_n||void 0===_n?void 0:_n.current.querySelectorAll('[aria-label="slider"]')).forEach((function(n){n.removeAttribute("tabindex")}))}),[]),a.useEffect((function(){var n,t,e,i;(null===(n=window)||void 0===n||null===(t=n.localStorage)||void 0===t?void 0:t.getItem("resetEmailInstantMessage"))&&(mn(!0),yn(null===S||void 0===S||null===(e=S.resetEmail)||void 0===e?void 0:e.emailUpdatedMessage),null===(i=localStorage)||void 0===i||i.removeItem("resetEmailInstantMessage"),(0,x.EE)("event_crm_action","event_profile_update_complete","".concat(null===Q||void 0===Q?void 0:Q.eng).concat(null===X||void 0===X?void 0:X.allsite).concat(null===V||void 0===V?void 0:V.typ).concat(null===$||void 0===$?void 0:$.other).concat(null===nn||void 0===nn?void 0:nn.all,"email-updated")))}),[]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(l(),{children:[(0,f.ON)(Xn),"Price Spider"==B.provider&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("meta",{name:"ps-key",content:"".concat(null===j||void 0===j?void 0:j.PriceSpider["Ps-account"],"-").concat(null===j||void 0===j?void 0:j.PriceSpider["Ps-config"])}),(0,q.jsx)("meta",{name:"ps-country",content:null===j||void 0===j?void 0:j.PriceSpider["Ps-country"]}),(0,q.jsx)("meta",{name:"ps-language",content:null===j||void 0===j?void 0:j.PriceSpider["Ps-language"]})]}),(0,q.jsx)("script",{type:"application/ld+json",children:JSON.stringify(ut)})]}),(0,q.jsx)(x.M7,{pgDatalayer:(0,x.Nv)()}),(0,q.jsx)(h.L,{anchorLinks:bt}),(0,q.jsx)(dn,{}),(0,q.jsx)("section",{"aria-label":null===bn||void 0===bn?void 0:bn.appName,children:(null===j||void 0===j?void 0:j.SmartAppBannerActivated)&&(null===bn||void 0===bn?void 0:bn.isActive)&&(0,q.jsx)(b.N,K({},bn))}),(0,q.jsxs)(pn,{className:["pregnancy-page",null!==j&&void 0!==j&&j.enableAccessibilityFeatures?"accessible-variant":""].join(" "),"data-cy":"pregnancy-page",children:[C&&(0,q.jsx)(N.Z,{siteSetting:B,header:C,uiStringSet:S,loginLinks:ht,signUpLinks:gt,headerH1:!0,getAppCta:L}),(0,q.jsxs)("main",{id:"to-main-content",role:"main",ref:_n,children:[un&&(0,q.jsx)("div",{className:"thank-you-container ".concat(null!==j&&void 0!==j&&null!==(d=j.Header)&&void 0!==d&&d.initialNavigation?"":"teal-nav--top"),children:(0,q.jsx)(g.n,{msgLabel:wn})}),(null===mt||void 0===mt?void 0:mt.items.length)>0&&(0,q.jsx)("div",{className:"row no-gutters shourtcut-carousel",children:(0,q.jsx)(m.e,K({},mt))}),(!!nt||!!tt)&&(0,q.jsx)("div",{className:"row no-gutters d-flex justify-content-center full-width-banner1",children:(0,q.jsx)("div",{className:"col-md-12 col-sm-12",children:null!==Vn&&void 0!==Vn&&Vn.topBannerType?(0,q.jsx)(u.Z,K(K({},tt),{},{lazyLoaded:!1})):(0,q.jsx)(s.FullWidthBanner,K(K({},nt),{},{lazyLoaded:!1}))})}),!!dt&&(0,q.jsx)("div",{className:"row no-gutters parenting-tool",children:(0,q.jsx)(v.u,K(K({},dt),{},{splidePadding:{desktop:{left:89}},splideGap:{desktop:-88}}))}),!!ot&&(0,q.jsx)("div",{className:"row no-gutters full-width-banner-carousel",ref:Pn,children:kn&&(0,q.jsx)(tn,K(K({},ot),{},{isCarousel:!0}))}),!!$n&&(0,q.jsx)("div",{className:"row no-gutters d-flex justify-content-center produt-push-carousel",children:(0,q.jsx)("div",{className:"col-md-12 col-sm-12",children:(0,q.jsx)("div",{className:"product-push",ref:Zn,children:Rn&&(0,q.jsx)(an,K({},$n))})})}),!!pt&&!1===R&&j.enableHPSecondarySignUp&&(0,q.jsx)("div",{className:"row no-gutters d-flex justify-content-center secondary-sign-up-container",children:(0,q.jsx)("div",{className:"col-md-12 col-sm-12 signup-col",ref:An,children:On&&(0,q.jsx)(en,K({},pt))})}),(!!at||!!et)&&(0,q.jsx)("div",{className:"row no-gutters full-width-banner2",children:(0,q.jsx)("div",{className:"col-md-12 col-sm-12",children:null!==Vn&&void 0!==Vn&&null!==(p=Vn.fullWidthBanner)&&void 0!==p&&p.bannerType?(0,q.jsx)(u.Z,K({},et)):(0,q.jsx)(s.FullWidthBanner,K({},at))})}),!!lt&&(0,q.jsx)("div",{className:"row no-gutters d-flex justify-content-center how-to-get-rewarded__container",children:(0,q.jsx)("div",{className:"col-sm-12 col-md-12 rewarded__col",ref:Gn,children:zn&&(0,q.jsx)(on,K({},lt))})}),!!ct&&(0,q.jsx)("div",{className:"row no-gutters d-flex justify-content-center bsod-carousel",children:(0,q.jsx)(v.u,K({},ct))}),!!st&&(0,q.jsx)("div",{className:"row no-gutters popular-articles",ref:Yn,children:Hn&&(0,q.jsx)(rn,K({},st))}),(!!rt||!!it)&&(0,q.jsx)("div",{className:"row no-gutters full-width-banner3",children:(0,q.jsx)("div",{className:"col-md-12 col-sm-12",children:null!==Vn&&void 0!==Vn&&null!==(c=Vn.fullWidthBanner2)&&void 0!==c&&c.bannerType?(0,q.jsx)(u.Z,K({},it)):(0,q.jsx)(s.FullWidthBanner,K({},rt))})}),!!pt&&!1===R&&!1===j.enableHPSecondarySignUp&&(0,q.jsx)("div",{className:"row no-gutters d-flex justify-content-center sign-up-container",ref:In,children:(0,q.jsx)("div",{className:"col-md-12 col-sm-12 signup-col",children:Ln&&(0,q.jsx)(en,K({},pt))})})]}),P&&(0,q.jsx)("div",{ref:Kn,children:Qn&&(0,q.jsx)(ln,{shouldContainNoOpenerNoReferrer:w.d,footer:P})})]})]})}},881:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[...slug]",function(){return e(412)}])}},function(n){n.O(0,[774,318,80,178,512,274,888,170,179],(function(){return t=881,n(n.s=t);var t}));var t=n.O();_N_E=t}]);