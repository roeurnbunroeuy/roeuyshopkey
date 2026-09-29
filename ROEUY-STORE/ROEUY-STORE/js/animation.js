export function initAnimations(){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(!reduced && 'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}}),{threshold:.09});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('revealed'));
 if(reduced || innerWidth<768)return;
 document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*4}deg) translateY(-6px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
 const heroSection=document.querySelector('.hero');if(heroSection){heroSection.addEventListener('pointermove',e=>{const r=heroSection.getBoundingClientRect();heroSection.style.setProperty('--cursor-x',(e.clientX-r.left)+'px');heroSection.style.setProperty('--cursor-y',(e.clientY-r.top)+'px')})}
 const hero=document.querySelector('.hero-art');if(hero){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--px',`${((e.clientX-r.left)/r.width-.5)*17}px`);hero.style.setProperty('--py',`${((e.clientY-r.top)/r.height-.5)*17}px`)});hero.addEventListener('pointerleave',()=>{hero.style.setProperty('--px','0px');hero.style.setProperty('--py','0px')})}
}
