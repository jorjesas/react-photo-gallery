import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
@charset "utf-8";
/* CSS Document */

/*------------------------------------------------------------------
[Table of contents]
0. Fonts
1. Clearfix
2. Preloader
3. Typography
4. Headings
5. Main Nav
6. Main Content
7. Column Grid
8. Content Elements
9. Icons
10. Image Hover
11. Footer
12. Lists
13. Google Maps
-------------------------------------------------------------------*/


/* =0. Fonts
--------------------------------------------------------------------------------------------------------*/
@font-face {
 font-family: 'fontello';
 src: url('../fonts/fontello.eot?3837060');
 src: url('../fonts/fontello.eot?3837060#iefix') format('embedded-opentype'), url('../fonts/fontello.woff?3837060') format('woff'), url('../fonts/fontello.ttf?3837060') format('truetype'), url('../fonts/fontello.svg?3837060#fontello') format('svg');
 font-weight: normal;
 font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windows. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'fontello';
    src: url('../font/fontello.svg?43886684#fontello') format('svg');
  }
}
*/
/* End Fonts
--------------------------------------------------------------------------------------------------------*/


/* =1. Clearfix
--------------------------------------------------------------------------------------------------------*/
.clear { clear: both; }
.clearfix:after { content: "."; display:block; height:0; clear:both; visibility:hidden; }/* ----- clear fix for floats ----- */
.clearfix { display:inline-block; }
* html .clearfix { height:1%; }/* hides clearfix from IE-mac */
.clearfix { display:block; }/* end hide from IE-mac */
.alignleft { float:left; }
.alignright { float:right; }
.aligncenter { margin:auto; display:block; }
.alignnone { clear:both; font-size:0; line-height:0; margin:0; padding:0; border:0; height:0; width:0; }
.centered { text-align:center; }
.hidden { display: none; visibility: hidden; }
/* Preventing font-rendering switches during CSS transitions inside Flexslider for Safari and Chrome under MacOSX */
*, *:before, *:after { -webkit-font-smoothing: antialiased; }
.flexslider { -webkit-transform: translateZ(0px); }
/* End Clearfix
--------------------------------------------------------------------------------------------------------*/


/* =2. Preloader
--------------------------------------------------------------------------------------------------------*/
#preloader { position:fixed; top:0; left:0; right:0; bottom:0; background:#fff; z-index:9999; }
#status { z-index:28; position:absolute; color:#000 !important; top:50%; height:220px; width:100%; margin-top:-115px; }
/* horizontal centering */
.parent { width:230px; margin:0px auto; position:relative; height:220px; z-index:11 }
.child { text-align:center; }
/* vertical centering */
.parent { display: table }
.child { display: table-cell; vertical-align: middle; padding:0; }
.child span { text-transform:uppercase; }
/* End Preloader
--------------------------------------------------------------------------------------------------------*/


/* =3. Typography
--------------------------------------------------------------------------------------------------------*/
html, body, #wrap { height: 100%; }
body > #wrap { height: auto; min-height: 100%; }
.content-wrapper { padding-bottom: 272px; background:#fff }
html { overflow: -moz-scrollbars-vertical; overflow-y: scroll; -webkit-font-smoothing: antialiased; height:100%; -webkit-text-size-adjust: 100%; }
body { font-size: 16px; font-family: 'Merriweather', Georgia, "Times New Roman", Times, serif; color:#000; height:100% }
strong { font-weight:700; }
b { font-weight:700 }
a, a > * { -webkit-transition: all 0.2s ease 0s; -moz-transition: all 0.2s ease 0s; -o-transition: all 0.2s ease 0s; transition: all 0.2s ease 0s; }
*, *:after, *:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; padding: 0; margin: 0; }
p { line-height:1.5; padding:0 0px 13px 0px; }
.child p { padding-bottom:0; }
.align-left p {text-align:left !important; }
p.small-padding {padding-bottom:5px; }

a { text-decoration:none; }
p a { color:#c39f76; }
p a:hover { color:#000; }

.black p a {color:#fff }
.black p a:hover { color:#c39f76; }

p.small { font-size:12px; }
a p.small { color:#c39f76; border-top:1px solid #c39f76; display:inline-block; padding-top:7px; margin-top:19px; padding-bottom:0; }
p.tiny { font-size:11px; font-family:'Montserrat','Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif; font-weight:400; padding-left:2px; letter-spacing:2px; text-transform:uppercase }

span.arrow { font:20px 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif; float:right; padding-bottom:13px; padding-right:15px; -webkit-transition: all 0.2s ease 0s; transition: all 0.2s ease 0s; position:relative; top:-4px; }

.hentry blockquote:before { content:"�??"; float:left; display:block; margin-left:-64px; font-family:Georgia, "Times New Roman", Times, serif; font-size:96px; margin-top:-6px; font-weight:400 }
blockquote p.tiny { padding-top:10px; }
em { font-style:italic; font-family:'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif; color:#777; }
code { font:13px "Courier New", Courier, monospace; font-style:normal; line-height:1.5; display:block; padding-top:4px; }
pre { padding:0 30px 25px 30px; border:1px dotted #3e3e3e; margin-top:10px; margin-bottom:10px; display:inline-block }

.tile-heading { font-family:'Montserrat',"Open Sans", Arial, Helvetica, sans-serif; font-size:13px; text-transform:uppercase; letter-spacing:2px; padding:0;position:absolute; top:-7px; left:0; text-align:center; width:100%; color:#2b2b2b; font-weight:600 }
.tile-heading span { display:inline-block; background:#fff; z-index:100; padding:0 8px 0 10px; }
/* End Typography
--------------------------------------------------------------------------------------------------------*/


/* =4. Headings
--------------------------------------------------------------------------------------------------------*/
.logo-wrapper {position:relative; background:#fff }
h1#logo { display:block; position:relative; text-align:center }
h1#logo a { display:inline-block; background:url(../images/bg-logo.png) center no-repeat; background-size:60px 52px; width:60px; /*try to keep it below 52px*/ height:52px; text-indent:-9999px; }
.tagline { font-family:'Montserrat',"Open Sans", Arial, Helvetica, sans-serif; font-size:24px; font-weight:400; padding:0 0 0 0; margin:0px auto; position:relative; color:#000; display:inline-block }
.hentry h1, h2, h3, h4, h5 { line-height:1.3; display:block; position:relative; padding-bottom:13px; }
h2 { font-size:36px; font-weight:300; line-height:48px; letter-spacing:-2px; }
h2 strong { font-weight:700; letter-spacing:-1px; }
h3 { font-size:24px; font-weight:600; }
h4 { font-size:20px; font-weight:400; line-height:27px; }
h5 { font-size:18px; font-weight:400; }
.black h3 {font-weight:400; }
.col2-3 h3 {font-size:30px; font-weight:400; letter-spacing:-1px; }
.back-button h5 {padding:0 }
.col2-3.grey h3 { font-size:30px; line-height:40px; }
a h3 { text-decoration:none; color:#000; }
/* End Headings
--------------------------------------------------------------------------------------------------------*/


/* =5. Main Nav
--------------------------------------------------------------------------------------------------------*/
#menu-button { float:left; text-decoration: none; color: #fff; letter-spacing:2px; font-size: 11px; font-family: 'Montserrat',"Open Sans", Arial, Helvetica, sans-serif; padding:10px 0; text-transform: uppercase; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display:none; z-index:1000; position:relative }
.lt-ie10 #menu-button { position:relative; float:left; left:auto }
#menu-button .centralizer { display: table-cell; vertical-align: middle; }
#menu-button .centralizer .cursor { display:block; height:auto; cursor:pointer; }
#nav-button { display:inline-block; width:16px; margin:0; margin-left:5px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); vertical-align:middle }
.nav-bar { background-color:#fff; border-radius:1px; display:block; width:16px; height:2px; margin:0px auto 2px; }
 #menu-button.open #nav-button span:nth-child(1) {
 -webkit-transform: rotate(45deg);
 -moz-transform: rotate(45deg);
 -o-transform: rotate(45deg);
 -ms-transform: rotate(45deg);
 transform: rotate(45deg);
 position: relative;
 top: 2px;
 -webkit-transition: all 0.2s ease-in-out;
 -moz-transition: all 0.2s ease-in-out;
 -o-transition: all 0.2s ease-in-out;
 transition: all 0.2s ease-in-out;
}
 #menu-button.open #nav-button span:nth-child(2) {
 -webkit-transform: rotate(-45deg);
 -moz-transform: rotate(-45deg);
 -o-transform: rotate(-45deg);
 -ms-transform: rotate(-45deg);
 transform: rotate(-45deg);
 position: relative;
 top: -2px;
 -webkit-transition: all 0.3s ease-in-out;
 -moz-transition: all 0.3s ease-in-out;
 -o-transition: all 0.3s ease-in-out;
 transition: all 0.3s ease-in-out;
}
 #menu-button.open #nav-button span:nth-child(3) {
 display: none;
}

#main-nav ul#options { float:left; margin-left:10px; }
#main-nav ul#options li { display:inline-block; padding-right:25px; }
#main-nav a { text-decoration: none; color: #fff; letter-spacing:2px; font-size: 11px; font-family: 'Montserrat',"Open Sans", Arial, Helvetica, sans-serif; padding:11px 0 10px 0; text-transform: uppercase; display:block}
#main-nav > ul .active > a, #main-nav > ul a.active, #main-nav li a:hover, #options li a.current, #options li a.selected { color: #c39f76; }
#main-nav ul#options li .sub-nav { position:absolute; background:#161616; margin-left:-15px; padding-top:9px; display:none }
#main-nav ul#options li:hover .sub-nav {display:block; }
#main-nav ul#options li .sub-nav > li { display:block; border-top:1px solid #242424; padding-right:0 }
#main-nav ul#options li .sub-nav > li > a { font-size: 10px; padding: 13px 15px 14px 15px; display:block; line-height:1;  }

.element .social-list {display:inline-block; padding-bottom:0px; margin-top:10px; margin-left:15px; }
.social-list > li { float: left; margin: 0 15px 0 0; }
footer .social-list > li { margin: 0 25px 0 0; }
.social-list > li > a:before { content: ""; font-family: fontello; font-size: 14px;  }
.social-list li a { color:#000; z-index:111; }
.wrapper .social-list li a, footer .social-list li a, .black .social-list li a, header .social-list li a { color:#fff; }
.social-list li a:hover { color: #c39f76; }
.element .social-list > li > a:before { font-size: 18px; }
footer .social-list > li > a:before { font-size: 24px; }
footer .social-list { margin-left:25px; margin-top:40px; display:inline-block }
header .social-list { float:right; margin-left:-3px; }
header .social-list li a:before { padding:3px; }
header .social-list li {padding:9px 0 10px 0; margin-right:9px; }
.social-list > li > a.facebook:before { content: '\e800'; }
.social-list > li > a.dribbble:before { content: '\e801'; }
.social-list > li > a.behance:before { content: '\e802'; }
.social-list > li > a.git:before { content: '\e803'; }
.social-list > li > a.gplus:before { content: '\e804'; }
.social-list > li > a.xing:before { content: '\e805'; }
.social-list > li > a.instagram:before { content: '\e806'; }
.social-list > li > a.twitter:before { content: '\e807'; }
.social-list > li > a.youtube:before { content: '\e808'; }
.social-list > li > a.slack:before { content: '\e809'; }
.social-list > li > a.pinterest:before { content: '\e80a'; }
.social-list > li > a.tumblr:before { content: '\e80b'; }
.social-list > li > a.soundcloud:before { content: '\e80c'; }
.social-list > li > a.skype:before { content: '\e80d'; }
.social-list > li > a.linkedin:before { content: '\e80e'; }
.social-list > li > a.vimeo:before { content: '\e80f'; }
.social-list > li > a.flickr:before { content: '\e810'; }
.social-list > li > a.email:before { content: '\e811'; }
.social-list > li > a.vkontakte:before { content: '\e816'; }
/* End Main Nav
--------------------------------------------------------------------------------------------------------*/


/* =6. Main Content
--------------------------------------------------------------------------------------------------------*/
#header { z-index:555; width:100%; padding:6px 0px 6px 0; background:#161616; -webkit-transform: translateZ(0); }
#content { width:100%; position:relative; z-index:55; height:auto; padding-bottom: 50px; }
.container { padding:0px; width:1280px; position:relative; margin:0 auto; }
#container { margin:0 auto; }
/* =End Main Content
--------------------------------------------------------------------------------------------------------*/


/* =7. Column Grid
--------------------------------------------------------------------------------------------------------*/
.col3-3 { width:940px; height:auto; margin:10px; float:left; position:relative }
.col4-3 { width:1260px; height:auto; margin:10px; float:left; position:relative }
.col1-3 { width:300px; height:300px; margin:10px; float:left; position:relative }
.col2-3 { width:620px; height:620px; margin:10px; float:left; position:relative }
.col1-3.auto, .col2-3.auto, .col3-3.auto { height:auto; }
.col1-3.double { height:620px; }

.grid-fit {min-height:300px; }

.grey, .black { padding:30px 40px; background:#fff; border:2px solid #2b2b2b; text-align:center }
.col2-3.grey, .col3-3.grey, .col4-3.grey { padding:45px 80px; }
.black {background:#161616; border:2px solid #161616; color:#fff }

.col1-3 .parent {width:216px; height:236px; }
.col2-3 .parent {width:456px; height:526px; }
.col3-3.grid-fit .parent {width:756px; height:206px; }
.col1-3.double .parent {height:556px; }

.absolute {position:absolute; top:0; left:0; z-index:2; padding:45px 80px; color:#fff }
/* =End Column Grid
--------------------------------------------------------------------------------------------------------*/


/* =8. Content Elements
--------------------------------------------------------------------------------------------------------*/
.overlay { background:rgba(0,0,0,.4); position:absolute; top:0; left:0; width:100%; height:100%; z-index:1 }
.element {overflow:hidden }
.element.grey {overflow:visible; }
.break { display:block; position:relative; height:20px; width:100%; }
.small-break { display:block; position:relative; height:10px; width:100%; }
.whole-tile { position:absolute; left:0; top:0; width:100%; height:100%; display:block; z-index:55; padding:30px 35px; }
.element .tag { text-transform: none; display: inline-block; padding:0 8px 0 0; }
.element .tag > .tag-count { text-transform: none; font-family: 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif; font-size: 12px; }
/* =End Content Elements
--------------------------------------------------------------------------------------------------------*/


/* =9. Icons
--------------------------------------------------------------------------------------------------------*/
.icons { position:relative; height:48px; width:48px; margin-bottom:16px; margin-top:5px; display:inline-block }
.icon-holder { position:relative; float:left; height:48px; width:48px; border:1px solid #555; border-radius:51%; margin-top:5px; }
.col1-3 .icon-holder {  margin-right:20px; }
.centered .icons, .centered .icon-holder { float:none; display:inline-block; margin-right:0px; }
.map { background:url(../images/icons/bg-map.png) no-repeat center left; background-size:48px 48px; }
.winner { background:url(../images/icons/bg-winner.png) no-repeat center; background-size:48px 48px; }
.time { background:url(../images/icons/bg-time.png) no-repeat center; background-size:48px 48px; }
.pig { background:url(../images/icons/bg-pig.png) no-repeat center; background-size:48px 48px; }
.adjust { background:url(../images/icons/bg-adjust.png) no-repeat center; background-size:48px 48px; }
.team { background:url(../images/icons/bg-team.png) no-repeat center; background-size:48px 48px; }
.works { background:url(../images/icons/bg-works.png) no-repeat center; background-size:48px 48px; }
.chat { background:url(../images/icons/bg-chat.png) no-repeat center; background-size:48px 48px; }
.notes { background:url(../images/icons/bg-notes.png) no-repeat center; background-size:48px 48px; }
.camera { background:url(../images/icons/bg-camera.png) no-repeat center; background-size:48px 48px; }
.illustration { background:url(../images/icons/bg-illustration.png) no-repeat center; background-size:48px 48px; }
.social { background:url(../images/icons/bg-social.png) no-repeat center; background-size:48px 48px; }
.vector { background:url(../images/icons/bg-vector.png) no-repeat center; background-size:48px 48px; }
.commerce { background:url(../images/icons/bg-commerce.png) no-repeat center; background-size:48px 48px; }
.search { background:url(../images/icons/bg-search.png) no-repeat center; background-size:48px 48px; }
.like { background:url(../images/icons/bg-like.png) center no-repeat; background-size:48px 48px; }
.share { background:url(../images/icons/bg-share.png) center no-repeat; background-size:48px 48px; }
.document { background:url(../images/icons/bg-document.png) center no-repeat; background-size:48px 48px; }
.apple { background:url(../images/icons/bg-apple.png) center no-repeat; background-size:48px 48px; }
.balance { background:url(../images/icons/bg-balance.png) center no-repeat; background-size:48px 48px; }
.beaker { background:url(../images/icons/bg-beaker.png) center no-repeat; background-size:48px 48px; }
.beer { background:url(../images/icons/bg-beer.png) center no-repeat; background-size:48px 48px; }
.books { background:url(../images/icons/bg-books.png) center no-repeat; background-size:48px 48px; }
.box { background:url(../images/icons/bg-box.png) center no-repeat; background-size:48px 48px; }
.cake { background:url(../images/icons/bg-cake.png) center no-repeat; background-size:48px 48px; }
.calculator { background:url(../images/icons/bg-calculator.png) center no-repeat; background-size:48px 48px; }
.cd { background:url(../images/icons/bg-cd.png) center no-repeat; background-size:48px 48px; }
.champagne { background:url(../images/icons/bg-champagne.png) center no-repeat; background-size:48px 48px; }
.chart { background:url(../images/icons/bg-chart.png) center no-repeat; background-size:48px 48px; }
.cheese { background:url(../images/icons/bg-cheese.png) center no-repeat; background-size:48px 48px; }
.court { background:url(../images/icons/bg-court.png) center no-repeat; background-size:48px 48px; }
.delivery { background:url(../images/icons/bg-delivery.png) center no-repeat; background-size:48px 48px; }
.dvd { background:url(../images/icons/bg-dvd.png) center no-repeat; background-size:48px 48px; }
.eco { background:url(../images/icons/bg-eco.png) center no-repeat; background-size:48px 48px; }
.film { background:url(../images/icons/bg-film.png) center no-repeat; background-size:48px 48px; }
.grape { background:url(../images/icons/bg-grape.png) center no-repeat; background-size:48px 48px; }
.hot { background:url(../images/icons/bg-hot.png) center no-repeat; background-size:48px 48px; }
.house { background:url(../images/icons/bg-house.png) center no-repeat; background-size:48px 48px; }
.icecream { background:url(../images/icons/bg-icecream.png) center no-repeat; background-size:48px 48px; }
.joystick { background:url(../images/icons/bg-joystick.png) center no-repeat; background-size:48px 48px; }
.keynote { background:url(../images/icons/bg-keynote.png) center no-repeat; background-size:48px 48px; }
.link { background:url(../images/icons/bg-link.png) center no-repeat; background-size:48px 48px; }
.magic { background:url(../images/icons/bg-magic.png) center no-repeat; background-size:48px 48px; }
.mail { background:url(../images/icons/bg-mail.png) center no-repeat; background-size:48px 48px; }
.microphone { background:url(../images/icons/bg-microphone.png) center no-repeat; background-size:48px 48px; }
.network { background:url(../images/icons/bg-network.png) center no-repeat; background-size:48px 48px; }
.palette { background:url(../images/icons/bg-palette.png) center no-repeat; background-size:48px 48px; }
.plaster { background:url(../images/icons/bg-plaster.png) center no-repeat; background-size:48px 48px; }
.player { background:url(../images/icons/bg-player.png) center no-repeat; background-size:48px 48px; }
.polaroid { background:url(../images/icons/bg-polaroid.png) center no-repeat; background-size:48px 48px; }
.printer { background:url(../images/icons/bg-printer.png) center no-repeat; background-size:48px 48px; }
.pulse { background:url(../images/icons/bg-pulse.png) center no-repeat; background-size:48px 48px; }
.quote { background:url(../images/icons/bg-quote.png) center no-repeat; background-size:48px 48px; }
.radio { background:url(../images/icons/bg-radio.png) center no-repeat; background-size:48px 48px; }
.recorder { background:url(../images/icons/bg-recorder.png) center no-repeat; background-size:48px 48px; }
.scissors { background:url(../images/icons/bg-scissors.png) center no-repeat; background-size:48px 48px; }
.select { background:url(../images/icons/bg-select.png) center no-repeat; background-size:48px 48px; }
.serving { background:url(../images/icons/bg-serving.png) center no-repeat; background-size:48px 48px; }
.share { background:url(../images/icons/bg-share.png) center no-repeat; background-size:48px 48px; }
.shop { background:url(../images/icons/bg-shop.png) center no-repeat; background-size:48px 48px; }
.shopping { background:url(../images/icons/bg-shopping.png) center no-repeat; background-size:48px 48px; }
.smartphone { background:url(../images/icons/bg-smartphone.png) center no-repeat; background-size:48px 48px; }
.sofa { background:url(../images/icons/bg-sofa.png) center no-repeat; background-size:48px 48px; }
.syringe { background:url(../images/icons/bg-syringe.png) center no-repeat; background-size:48px 48px; }
.tape { background:url(../images/icons/bg-tape.png) center no-repeat; background-size:48px 48px; }
.target { background:url(../images/icons/bg-target.png) center no-repeat; background-size:48px 48px; }
.television { background:url(../images/icons/bg-television.png) center no-repeat; background-size:48px 48px; }
.video { background:url(../images/icons/bg-video.png) center no-repeat; background-size:48px 48px; }
.walkman { background:url(../images/icons/bg-walkman.png) center no-repeat; background-size:48px 48px; }
.zoom { background:url(../images/icons/bg-zoom.png) center no-repeat; background-size:48px 48px; }
.tags { background:url(../images/icons/bg-tags.png) center no-repeat; background-size:48px 48px; }
.overview { background:url(../images/icons/bg-overview.png) center no-repeat; background-size:48px 48px; }
/* End Icons
--------------------------------------------------------------------------------------------------------*/


/* =10. Image Hover
--------------------------------------------------------------------------------------------------------*/
.images { display:block; position:relative; background:#000; height: 100%; background-size: cover }
.images img { width:100%; display: block; max-width: 100% !important; z-index:9 }
.images.dark img { opacity:0.3; background:#000; }
img { box-shadow: #fff 0 0 0 }
.videos { width:1260px; height:710px; }

.description {position:absolute; bottom:0; left:0; background:rgba(0,0,0,0.4); width:300px; height:300px; padding:34px 0px; text-align:center; z-index:10; color:#fff }
.description h4 { font-size:20px; font-weight:700; padding-bottom:0px; padding-top:0; }
.description p.small {padding-bottom:5px;  }
a .description p.small {color:#fff; border-top:1px solid #fff; position:relative; }
.bottom {position:absolute; bottom:111px; left:0; text-align:center; width:300px; }
.team .bottom, .sub-page .bottom {bottom:98px; }
.wrapper { opacity:0; top:-10px; position:relative; }
.description {margin-bottom:-206px; -webkit-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s;}
.sub-page .description {margin-bottom:-186px; }
.element:hover .description {margin-bottom:0px; -webkit-transition: all 0.3s ease-in-out 0s; transition: all 0.3s ease-in-out 0s; }
.element:hover .description h4 {padding-top:82px; -webkit-transition: all 0.3s ease 0.4s; transition: all 0.3s ease 0.4s; }
.element.team:hover .description h4, .sub-page .element:hover .description h4 {padding-top:72px; -webkit-transition: all 0.3s ease 0.4s; transition: all 0.3s ease 0.4s; }
.element:hover .wrapper  {opacity:1; top:0px; -webkit-transition: all 0.2s ease 0.7s; transition: all 0.2s ease 0.7s; }
/* End Image Hover
--------------------------------------------------------------------------------------------------------*/


/* =11. Footer
--------------------------------------------------------------------------------------------------------*/
#footer { background:#0b0b0b; min-height:272px; margin:0px; width:100%; z-index:55; position:relative; webkit-transform: translateZ(0); -webkit-transform: translate3d(0, 0, 0); text-align:center; }
#footer { margin-top: -272px; z-index:500 !important; }
#footer-top { height:107px; background:#161616; position:relative }
#footer-bottom { height:165px; padding-top:47px; position:relative }
footer p, footer p a { color:#a8a8a8; font-family:'Montserrat','Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif; text-transform:uppercase;font-size:13px; padding:0; border:0; text-decoration:none; letter-spacing:2px; margin-bottom:28px;  }
footer p a:hover { color:#fff; }
footer p span {  letter-spacing:0; text-transform:none; color:#555; }
span.padding { padding:0 5px; }
/* End Footer
--------------------------------------------------------------------------------------------------------*/


/* =12. Lists
--------------------------------------------------------------------------------------------------------*/
ul.unordered-list, .hentry ul { list-style: circle; line-height:1.5; padding:0px 0px 13px 15px; text-align:left !important; font-size: 16px; font-family: 'Merriweather', Georgia, "Times New Roman", Times, serif; }
ol { list-style: decimal; line-height:1.5; padding:0px 0px 13px 15px; font-size: 16px; font-family: 'Merriweather', Georgia, "Times New Roman", Times, serif; text-align:left !important; }

ul.unordered-list li a, .hentry ul li a, ol li a { color:#555; text-decoration:underline; }
ul.unordered-list li a:hover, .hentry ul li a:hover, ol li a:hover { color:#000; text-decoration:underline; }
/* =End Lists
--------------------------------------------------------------------------------------------------------*/


/* =13. Googlemaps
--------------------------------------------------------------------------------------------------------*/
#map { width:620px; height:620px; margin:0; border:0 }
#map:before, #map:after { background: none; content: ''; left: 0; position: absolute; top: 0; width: 100%; }
#map:after { bottom: 0; top: auto; }
/* End Googlemaps
--------------------------------------------------------------------------------------------------------*/

/*----------------------------------component.css---------------------------------------------------------*/
.grid-wrap {
	clear: both;
	margin: 0 auto;
	padding: 0;
	max-width: 1260px;
}

.grid {
	margin: 30px auto;
	padding: 0;
	list-style: none;
	min-height: 500px;
}

.js .grid {
	background: url(../img/loading.gif) no-repeat 50% 100px;
}

.js .grid.loaded {
	background: none;
}

.grid li {
	display: inline-block;
	overflow: hidden;
	width: 314px;
	text-align: left;
	vertical-align: top;
}

.js .grid li {
	display: none;
	float: left;
}

.js .grid.loaded li {
	display: block;
}

/* Title box */
.title-box h2 {
	display: block;
	margin: 7px;
	padding: 20px;
	background: #2E3444;
	color: #D3EEE2;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 300;
}

.title-box h2 a {
	display: block;
	font-weight: 900;
}

.title-box h2 a:hover {
	color: #D3EEE2;
}

/* Anchor and image */
.grid li > a,
.grid li img {
	display: block;
	outline: none;
	border: none;
}

.grid li > a {
	position: relative;
	overflow: hidden;
	margin: 7px;
}

/* Curtain element */
.grid .curtain {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	height: 100%;
	background: #96cdc8;
}

.grid.swipe-right .curtain {
	-webkit-transform: translate3d(-100%,0,0);
	transform: translate3d(-100%,0,0);
}

.grid.swipe-down .curtain {
	-webkit-transform: translate3d(0,-100%,0);
	transform: translate3d(0,-100%,0);
}

.grid.swipe-rotate .curtain {
	width: 200%;
	height: 200%;
	-webkit-transform: rotate3d(0,0,1,90deg);
	transform: rotate3d(0,0,1,90deg);
	-webkit-transform-origin: top left;
	transform-origin: top left;
}

/* Shadow */
.grid .curtain::after {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,1);
	content: '';
}

.grid.swipe-right .curtain::after,
.grid.swipe-rotate .curtain::after {
	left: -100%;
}

.grid.swipe-down .curtain::after {
	top: -100%;
}

/* Title */
.grid li h3 {
	position: absolute;
	bottom: 0;
	left: 0;
	margin: 0;
	padding: 20px;
	width: 100%;
	background: #2E3444;
	color: #D3EEE2;
	text-align: right;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 800;
	font-size: 1em;
	-webkit-transition: -webkit-transform 0.2s, color 0.2s;
	transition: transform 0.2s, color 0.2s;
}

/* Pseudo element for hover effect */
.grid li > a::before {
	position: absolute;
	top: 0;
	left: 0;
	width: 100.5%;
	height: 100.5%;
	border: 0px solid transparent;
	background: rgba(0,0,0,0);
	content: '';
	-webkit-transition: border-width 0.2s, border-color 0.2s;
	transition: border-width 0.2s, border-color 0.2s;
}

/* Hover effects */
.grid li.shown:hover h3 {
	color: #fff;
	-webkit-transform: translate3d(0,-30px,0);
	transform: translate3d(0,-30px,0);
}

.grid li.shown:hover > a::before {
	border-width: 14px;
	border-color: #2E3444;
}

/* Animations */

/* Swipe right */
.grid.swipe-right li.animate .curtain {
	-webkit-animation: swipeRight 1.5s cubic-bezier(0.6,0,0.4,1) forwards;
	animation: swipeRight 1.5s cubic-bezier(0.6,0,0.4,1) forwards;
}

@-webkit-keyframes swipeRight {
	0% {} /* fixes Chrome 35.0.1916.114 issue (easing breaks) */
	50%, 60% { -webkit-transform: translate3d(0,0,0); }
	100% { -webkit-transform: translate3d(100%,0,0); }
}

@keyframes swipeRight {
	0% {}
	50%, 60% { -webkit-transform: translate3d(0,0,0); transform: translate(0); }
	100% { -webkit-transform: translate3d(100%,0,0); transform: translate3d(100%,0,0); }
} 

/* Swipe down */
.grid.swipe-down li.animate .curtain {
	-webkit-animation: swipeDown 1.5s cubic-bezier(0.6,0,0.4,1) forwards;
	animation: swipeDown 1.5s cubic-bezier(0.6,0,0.4,1) forwards;
}

@-webkit-keyframes swipeDown {
	0% {} /* fixes Chrome 35.0.1916.114 issue (easing breaks) */
	50%, 60% { -webkit-transform: translate3d(0,0,0); }
	100% { -webkit-transform: translate3d(0,100%,0); }
}

@keyframes swipeDown {
	0% {}
	50%, 60% { -webkit-transform: translate(0); transform: translate(0); }
	100% { transform: translate3d(0,100%,0); transform: translate3d(0,100%,0); }
}

/* Swipe rotate */
.grid.swipe-rotate li.animate .curtain {
	-webkit-animation: swipeRotate 1.5s ease forwards;
	animation: swipeRotate 1.5s ease forwards;
}

@-webkit-keyframes swipeRotate {
	0% {} /* fixes Chrome 35.0.1916.114 issue (easing breaks) */
	50%, 60% { -webkit-transform: rotate3d(0,0,1,0deg); }
	100% { -webkit-transform: rotate3d(0,0,1,-90deg); }
}

@keyframes swipeRotate {
	0% {}
	50%, 60% { -webkit-transform: rotate3d(0,0,1,0deg); transform: rotate3d(0,0,1,0deg); }
	100% { -webkit-transform: rotate3d(0,0,1,-90deg); transform: rotate3d(0,0,1,-90deg); }
}

/* Shadow */
.grid li.animate .curtain::after {
	-webkit-animation: fadeOut 1.5s ease forwards;
	animation: fadeOut 1.5s ease forwards;
	-webkit-animation-delay: inherit;
	animation-delay: inherit;
}

@-webkit-keyframes fadeOut {
	0% {} /* fixes Chrome 35.0.1916.114 issue (easing breaks) */
	50%, 60% { opacity: 1; }
	100% { opacity: 0; }
}

@keyframes fadeOut {
	0% {}
	50%, 60% { opacity: 1; }
	100% { opacity: 0; }
}

/* Hide image and title and show at half time */
.js .grid li img,
.js .grid li h3 {
	visibility: hidden;
}

.grid li.animate img,
.grid li.animate h3 {
	-webkit-animation: showMe 1.5s step-end forwards;
	animation: showMe 1.5s step-end forwards;
}

@-webkit-keyframes showMe {
	from { visibility: hidden; }
	60%, 100% { visibility: visible; }
}

@keyframes showMe {
	from { visibility: hidden; }
	60%, 100% { visibility: visible; }
}

.grid li.shown img,
.grid li.shown h3 {
	visibility: visible;
}
/*--------------------------------------------------------------------------------------- */

.row > .column {
	padding: 0 8px;
  }
  
  .row:after {
	content: "";
	display: table;
	clear: both;
  }
  
  .column {
	float: left;
	width: 25%;
  }
  
  /* The Modal (background) */
  .modal {
	display: none;
	position: fixed;
	z-index: 1;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: black;
  }
  
  /* Modal Content */
  .modal-content {
	position: relative;
	background-color: #fefefe;
	margin: auto;
	padding: 0;
	width: 90%;
	max-width: 1200px;
  }
  
  /* The Close Button */
  .close {
	color: white;
	position: absolute;
	top: 10px;
	right: 25px;
	font-size: 35px;
	font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
	color: #999;
	text-decoration: none;
	cursor: pointer;
  }
  
  .mySlides {
	display: none;
  }
  
  .cursor {
	cursor: pointer
  }
  
  /* Next & previous buttons */
  .prev,
  .next {
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	padding: 16px;
	margin-top: -50px;
	color: white;
	font-weight: bold;
	font-size: 20px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	user-select: none;
	-webkit-user-select: none;
  }
  
  /* Position the "next button" to the right */
  .next {
	right: 0;
	border-radius: 3px 0 0 3px;
  }
  
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
	background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* Number text (1/3 etc) */
  .numbertext {
	color: #f2f2f2;
	font-size: 12px;
	padding: 8px 12px;
	position: absolute;
	top: 0;
  }
  
  img {
	margin-bottom: -4px;
  }
  
  .caption-container {
	text-align: center;
	background-color: black;
	padding: 2px 16px;
	color: white;
  }
  
  .demo {
	opacity: 0.6;
  }
  
  .active,
  .demo:hover {
	opacity: 1;
  }
  
  img.hover-shadow {
	transition: 0.3s
  }
  
  .hover-shadow:hover {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
  }

`;
