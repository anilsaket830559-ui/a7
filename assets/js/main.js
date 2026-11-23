(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
function chips(id,cb){var w=$(id);if(!w)return;[].forEach.call(w.querySelectorAll('button'),function(b){b.setAttribute('aria-pressed',b.classList.contains('on'));b.addEventListener('click',function(){[].forEach.call(w.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(+b.getAttribute('data-v'));});});}
var bs=$('bf-s');if(bs){var LIM=[1,5,11,19,28,38,49,61,74,88,102,117,999],NM=['Calm','Light air','Light breeze','Gentle breeze','Moderate breeze','Fresh breeze','Strong breeze','Near gale','Gale','Strong gale','Storm','Violent storm','Hurricane force'],
 LAND=['Smoke rises straight up; leaves are still.','Smoke drifts; weather vanes do not move.','You feel wind on your face; leaves rustle.','Leaves and small twigs move constantly; flags extend.','Dust and loose paper lift; small branches sway.','Small trees sway; crested wavelets form on lakes.','Large branches move; umbrellas are hard to use.','Whole trees sway; walking into the wind is an effort.','Twigs break off trees; walking is difficult.','Slight damage to buildings; roof tiles may lift.','Trees uprooted; considerable damage. Stay indoors.','Widespread damage. Stay indoors.','Severe devastation. Follow official safety advice.'],
 WEAR=['Anything you like.','A light layer is plenty.','A light layer, or a windbreaker in cool weather.','A windbreaker takes the edge off.','A windbreaker with a hood: perfect conditions for one.','A windbreaker over a warm mid layer; cinch the hood.','A windbreaker over a fleece; choose sheltered routes.','Full layers and a shell. Avoid exposed ridges and coasts.','Stay off exposed ground. Postpone walks and rides.','Stay indoors where possible.','Stay indoors.','Stay indoors.','Stay indoors and follow official advice.'];
 var sc=$('bf-sc').children;function bf(){var v=+bs.value,f=0;while(v>=LIM[f])f++;$('bf-so').textContent=v+' km/h';$('bf-n').textContent=f;$('bf-t').textContent=NM[f];$('bf-m').textContent=Math.round(v*.621)+' mph · '+Math.round(v*.54)+' knots';$('bf-l').textContent=LAND[f];$('bf-w').textContent=WEAR[f];
  [].forEach.call(sc,function(x,i){x.classList.toggle('on',i===f);});var ang=Math.max(-5,72-Math.min(v,40)*1.9);$('bf-sk').style.transform='rotate('+ang+'deg) scaleX('+(0.55+Math.min(v,40)/40*0.45).toFixed(2)+')';}
 bs.addEventListener('input',bf);bf();}
var lt=$('ly-t');if(lt){var rain=0,lw=$('ly-w');function wc(t,v){if(t>10||v<4.8)return t;return 13.12+0.6215*t-11.37*Math.pow(v,0.16)+0.3965*t*Math.pow(v,0.16);}
 function ly(){var t=+lt.value,v=+lw.value,f=Math.round(wc(t,v));$('ly-to').innerHTML=t+'&deg;C';$('ly-wo').textContent=v+' km/h';$('ly-f').innerHTML=f+'&deg;';$('ly-fd').textContent=t-f>=3?(t-f)+'° colder than the air':'Close to the air temperature';
  var on={base:t<18,mid:f<10,wind:v>=12||f<14,shell:rain===2||(rain===1&&f<12)};if(rain===1&&!on.shell)on.wind=true;
  [].forEach.call($('ly-l').children,function(li){li.classList.toggle('on',!!on[li.getAttribute('data-k')]);});
  $('ly-n').textContent=f<0?'Below freezing with the wind: add a hat and gloves too.':rain===2?'A waterproof shell replaces the windbreaker in steady rain.':on.wind?'A windbreaker is the lightest way to block the wind today.':'Calm and mild: one light layer is all you need.';}
 [lt,lw].forEach(function(e){e.addEventListener('input',ly);});chips('ly-r',function(v){rain=v;ly();});ly();}
})();
