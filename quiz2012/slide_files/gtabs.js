(function (){
  var k=true,m=null,n=false,p,q=this;function r(){}
function t(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}var v="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),w=0;function x(a,b){function c(){}c.prototype=b.prototype;a.n=b.prototype;a.prototype=new c};function y(a){this.stack=Error().stack||"";if(a)this.message=String(a)}x(y,Error);function aa(a){for(var b=1;b<arguments.length;b++){var c=String(arguments[b]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,c)}return a}
function ba(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(d.length,g.length),f=0;c==0&&f<e;f++){var h=d[f]||"",i=g[f]||"",j=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var o=j.exec(h)||["","",""],l=u.exec(i)||["","",""];if(o[0].length==0&&l[0].length==0)break;c=z(o[1].length==0?0:parseInt(o[1],10),l[1].length==0?0:parseInt(l[1],10))||z(o[2].length==0,l[2].length==0)||z(o[2],l[2])}while(c==
0)}return c}function z(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};function ca(a,b){b.unshift(a);y.call(this,aa.apply(m,b));b.shift();this.B=a}x(ca,y);function A(a,b){if(!a){var c=Array.prototype.slice.call(arguments,2),d="Assertion failed";if(b){d+=": "+b;var g=c}throw new ca(""+d,g||[]);}return a};var B=Array.prototype,C=B.indexOf?function(a,b,c){A(a.length!=m);return B.indexOf.call(a,b,c)}:function(a,b,c){c=c==m?0:c<0?Math.max(0,a.length+c):c;if(typeof a=="string"){if(typeof b!="string"||b.length!=1)return-1;return a.indexOf(b,c)}for(c=c;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function da(a){A(a.length!=m);return B.splice.apply(a,ea(arguments,1))}function ea(a,b,c){A(a.length!=m);return arguments.length<=2?B.slice.call(a,b):B.slice.call(a,b,c)};var D,fa,E,ga;function ha(){return q.navigator?q.navigator.userAgent:m}ga=E=fa=D=n;var F;if(F=ha()){var ia=q.navigator;D=F.indexOf("Opera")==0;fa=!D&&F.indexOf("MSIE")!=-1;E=!D&&F.indexOf("WebKit")!=-1;ga=!D&&!E&&ia.product=="Gecko"}var G=fa,ja=ga,ka=E,la=q.navigator,ma=(la&&la.platform||"").indexOf("Mac")!=-1,na;
a:{var H="",I;if(D&&q.opera){var oa=q.opera.version;H=typeof oa=="function"?oa():oa}else{if(ja)I=/rv\:([^\);]+)(\)|;)/;else if(G)I=/MSIE\s+([^\);]+)(\)|;)/;else if(ka)I=/WebKit\/(\S+)/;if(I){var pa=I.exec(ha());H=pa?pa[1]:""}}if(G){var qa,ra=q.document;qa=ra?ra.documentMode:undefined;if(qa>parseFloat(H)){na=String(qa);break a}}na=H}var sa={};function J(a){return sa[a]||(sa[a]=ba(na,a)>=0)};!G||J("9");G&&J("9");function ta(a){return(a=a.className)&&typeof a.split=="function"?a.split(/\s+/):[]}function ua(a){var b=ta(a),c;c=ea(arguments,1);for(var d=0,g=0;g<c.length;g++)if(!(C(b,c[g])>=0)){b.push(c[g]);d++}c=d==c.length;a.className=b.join(" ");return c}function va(a){var b=ta(a),c;c=ea(arguments,1);for(var d=0,g=0;g<b.length;g++)if(C(c,b[g])>=0){da(b,g--,1);d++}c=d==c.length;a.className=b.join(" ");return c};function K(a,b,c){c=c||document;a=a&&a!="*"?a.toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(!ka||document.compatMode=="CSS1Compat"||J("528"))&&(a||b))b=c.querySelectorAll(a+(b?"."+b:""));else if(b&&c.getElementsByClassName){c=c.getElementsByClassName(b);if(a){for(var d={},g=0,e=0,f;f=c[e];e++)if(a==f.nodeName)d[g++]=f;d.length=g;b=d}else b=c}else{c=c.getElementsByTagName(a||"*");if(b){d={};for(e=g=0;f=c[e];e++){a=f.className;if(typeof a.split=="function"&&C(a.split(/\s+/),b)>=0)d[g++]=
f}d.length=g;b=d}else b=c}return b};var wa;!G||J("9");var xa=G&&!J("8");function L(){}L.prototype.q=n;L.prototype.g=function(){if(!this.q){this.q=k;this.d()}};L.prototype.d=function(){};function M(a,b){this.type=a;this.currentTarget=this.target=b}x(M,L);M.prototype.d=function(){delete this.type;delete this.target;delete this.currentTarget};M.prototype.m=n;M.prototype.w=k;M.prototype.preventDefault=function(){this.w=n};function N(a,b){a&&this.h(a,b)}x(N,M);p=N.prototype;p.target=m;p.relatedTarget=m;p.offsetX=0;p.offsetY=0;p.clientX=0;p.clientY=0;p.screenX=0;p.screenY=0;p.button=0;p.keyCode=0;p.charCode=0;p.ctrlKey=n;p.altKey=n;p.shiftKey=n;p.metaKey=n;p.A=n;p.l=m;
p.h=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(ja)try{d=d.nodeName&&d}catch(g){d=m}}else if(c=="mouseover")d=a.fromElement;else if(c=="mouseout")d=a.toElement;this.relatedTarget=d;this.offsetX=a.offsetX!==undefined?a.offsetX:a.layerX;this.offsetY=a.offsetY!==undefined?a.offsetY:a.layerY;this.clientX=a.clientX!==undefined?a.clientX:a.pageX;this.clientY=a.clientY!==undefined?a.clientY:a.pageY;this.screenX=a.screenX||0;
this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.A=ma?a.metaKey:a.ctrlKey;this.l=a;delete this.w;delete this.m};p.preventDefault=function(){N.n.preventDefault.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else{a.returnValue=n;if(xa)try{if(a.ctrlKey||a.keyCode>=112&&a.keyCode<=123)a.keyCode=-1}catch(b){}}};
p.d=function(){N.n.d.call(this);this.relatedTarget=this.currentTarget=this.target=this.l=m};function ya(){}var za=0;p=ya.prototype;p.key=0;p.f=n;p.o=n;p.h=function(a,b,c,d,g,e){if(t(a)=="function")this.s=k;else if(a&&a.handleEvent&&t(a.handleEvent)=="function")this.s=n;else throw Error("Invalid listener argument");this.i=a;this.v=b;this.src=c;this.type=d;this.capture=!!g;this.r=e;this.o=n;this.key=++za;this.f=n};p.handleEvent=function(a){if(this.s)return this.i.call(this.r||this.src,a);return this.i.handleEvent.call(this.i,a)};function O(a,b){this.t=b;this.c=[];if(a>this.t)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var c=0;c<a;c++)this.c.push(this.a?this.a():{})}x(O,L);O.prototype.a=m;O.prototype.p=m;function P(a){if(a.c.length)return a.c.pop();return a.a?a.a():{}}function Q(a,b){a.c.length<a.t?a.c.push(b):Aa(a,b)}function Aa(a,b){if(a.p)a.p(b);else{var c=t(b);if(c=="object"||c=="array"||c=="function")if(t(b.g)=="function")b.g();else for(var d in b)delete b[d]}}
O.prototype.d=function(){O.n.d.call(this);for(var a=this.c;a.length;)Aa(this,a.pop());delete this.c};var Ba;var Ca=(Ba="ScriptEngine"in q&&q.ScriptEngine()=="JScript")?q.ScriptEngineMajorVersion()+"."+q.ScriptEngineMinorVersion()+"."+q.ScriptEngineBuildVersion():"0";var R,S,T,U,Da,Ea,Fa,Ga,Ha,Ia,Ja;
(function(){function a(){return{b:0,e:0}}function b(){return[]}function c(){function l(s){return f.call(l.src,l.key,s)}return l}function d(){return new ya}function g(){return new N}var e=Ba&&!(ba(Ca,"5.7")>=0),f;Ea=function(l){f=l};if(e){R=function(){return P(h)};S=function(l){Q(h,l)};T=function(){return P(i)};U=function(l){Q(i,l)};Da=function(){return P(j)};Fa=function(){Q(j,c())};Ga=function(){return P(u)};Ha=function(l){Q(u,l)};Ia=function(){return P(o)};Ja=function(l){Q(o,l)};var h=new O(0,600);
h.a=a;var i=new O(0,600);i.a=b;var j=new O(0,600);j.a=c;var u=new O(0,600);u.a=d;var o=new O(0,600);o.a=g}else{R=a;S=r;T=b;U=r;Da=c;Fa=r;Ga=d;Ha=r;Ia=g;Ja=r}})();var V={},W={},X={},Ka={};
function La(a,b,c,d,g){if(b)if(t(b)=="array"){for(var e=0;e<b.length;e++)La(a,b[e],c,d,g);return m}else{d=!!d;var f=W;b in f||(f[b]=R());f=f[b];if(!(d in f)){f[d]=R();f.b++}f=f[d];var h=a[v]||(a[v]=++w),i;f.e++;if(f[h]){i=f[h];for(e=0;e<i.length;e++){f=i[e];if(f.i==c&&f.r==g){if(f.f)break;return i[e].key}}}else{i=f[h]=T();f.b++}e=Da();e.src=a;f=Ga();f.h(c,e,a,b,d,g);c=f.key;e.key=c;i.push(f);V[c]=f;X[h]||(X[h]=T());X[h].push(f);if(a.addEventListener){if(a==q||!a.z)a.addEventListener(b,e,d)}else a.attachEvent(Ma(b),
e);return c}else throw Error("Invalid event type");}function Na(a,b,c,d){if(!d.j)if(d.u){for(var g=0,e=0;g<d.length;g++)if(d[g].f){var f=d[g].v;f.src=m;Fa(f);Ha(d[g])}else{if(g!=e)d[e]=d[g];e++}d.length=e;d.u=n;if(e==0){U(d);delete W[a][b][c];W[a][b].b--;if(W[a][b].b==0){S(W[a][b]);delete W[a][b];W[a].b--}if(W[a].b==0){S(W[a]);delete W[a]}}}}function Ma(a){if(a in Ka)return Ka[a];return Ka[a]="on"+a}
function Oa(a,b,c,d,g){var e=1;b=b[v]||(b[v]=++w);if(a[b]){a.e--;a=a[b];if(a.j)a.j++;else a.j=1;try{for(var f=a.length,h=0;h<f;h++){var i=a[h];if(i&&!i.f)e&=Pa(i,g)!==n}}finally{a.j--;Na(c,d,b,a)}}return Boolean(e)}
function Pa(a,b){var c=a.handleEvent(b);if(a.o){var d=a.key;if(V[d]){var g=V[d];if(!g.f){var e=g.src,f=g.type,h=g.v,i=g.capture;if(e.removeEventListener){if(e==q||!e.z)e.removeEventListener(f,h,i)}else e.detachEvent&&e.detachEvent(Ma(f),h);e=e[v]||(e[v]=++w);h=W[f][i][e];if(X[e]){var j=X[e],u=C(j,g);if(u>=0){A(j.length!=m);B.splice.call(j,u,1)}j.length==0&&delete X[e]}g.f=k;h.u=k;Na(f,i,e,h);delete V[d]}}}return c}
Ea(function(a,b){if(!V[a])return k;var c=V[a],d=c.type,g=W;if(!(d in g))return k;g=g[d];var e,f;if(wa===undefined)wa=G&&!q.addEventListener;if(wa){var h;if(!(h=b))a:{h="window.event".split(".");for(var i=q;e=h.shift();)if(i[e])i=i[e];else{h=m;break a}h=i}e=h;h=k in g;i=n in g;if(h){if(e.keyCode<0||e.returnValue!=undefined)return k;a:{var j=n;if(e.keyCode==0)try{e.keyCode=-1;break a}catch(u){j=k}if(j||e.returnValue==undefined)e.returnValue=k}}j=Ia();j.h(e,this);e=k;try{if(h){for(var o=T(),l=j.currentTarget;l;l=
l.parentNode)o.push(l);f=g[k];f.e=f.b;for(var s=o.length-1;!j.m&&s>=0&&f.e;s--){j.currentTarget=o[s];e&=Oa(f,o[s],d,k,j)}if(i){f=g[n];f.e=f.b;for(s=0;!j.m&&s<o.length&&f.e;s++){j.currentTarget=o[s];e&=Oa(f,o[s],d,n,j)}}}else e=Pa(c,j)}finally{if(o){o.length=0;U(o)}j.g();Ja(j)}return e}d=new N(b,this);try{e=Pa(c,d)}finally{d.g()}return e});function Qa(){var a=K("div","g-tab-contents"),b=K("div","g-tabs"),c=b.length,d={};if(a.length!=c)return m;for(var g=0;g<c;g++){d["set-"+g]=[];var e=b[g],f=K("div","g-tab-content",a[g]);e=K("li","g-tab",e);var h=e.length;if(f.length!=h)return m;for(var i=0;i<h;i++){var j={};j.tab=e[i];j.content=f[i];d["set-"+g].push(j)}}return d}function Ra(a,b,c){return((a=b.getElementsByTagName("a"))?a[0].hash:m)||"#tab"+c}
function Sa(a,b,c){return function(d){d=d||m;Ta(this,b,c);for(var g=K("li","g-tab"),e="",f=0,h;h=g[f];f++)if(C(ta(h),"g-tab-selected")>=0)e+=Ra(this,h,f);window.location.hash=e;d&&d.preventDefault()}}function Ta(a,b,c){a=0;for(var d=b.length;a<d;a++){va(b[a].tab,"g-tab-selected");ua(b[a].content,"g-tab-content-hidden")}ua(b[c].tab,"g-tab-selected");va(b[c].content,"g-tab-content-hidden")}
function Ua(){this.k=Qa(this);for(var a in this.k)for(var b=this.k[a],c=0,d=b.length;c<d;c++)La(b[c].tab,"click",Sa(this,b,c),n,this);a=unescape(window.location.hash).replace(/#/ig,"|#").split("|");b=0;for(var g in this.k){c=n;d=this.k[g];for(var e=0,f=d.length;e<f;e++){var h=Ra(this,d[e].tab,b++);if(C(a,h)>=0){c=k;Ta(this,d,e)}}c||Ta(this,d,0)}}var Y="gweb.ui.GTabs".split("."),Z=q;!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);
for(var $;Y.length&&($=Y.shift());)if(!Y.length&&Ua!==undefined)Z[$]=Ua;else Z=Z[$]?Z[$]:Z[$]={};
}())