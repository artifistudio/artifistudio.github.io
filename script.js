
function setLang(l){
  document.documentElement.lang=l;
  const en=document.getElementById('l-en'),ko=document.getElementById('l-ko');
  if(en&&ko){
    en.classList.toggle('active',l==='en');
    ko.classList.toggle('active',l==='ko');
  }
  try{localStorage.setItem('artifi-lang',l)}catch(e){}
}
function setLegalLang(l){
  setLang(l);
  const ep=document.getElementById('legal-en'),kp=document.getElementById('legal-ko'),eb=document.getElementById('btn-en'),kb=document.getElementById('btn-ko');
  if(ep&&kp){
    ep.classList.toggle('active',l==='en');
    kp.classList.toggle('active',l==='ko');
  }
  if(eb&&kb){
    eb.classList.toggle('active',l==='en');
    kb.classList.toggle('active',l==='ko');
  }
}
try{
  const saved=localStorage.getItem('artifi-lang');
  if(saved){setLang(saved);setLegalLang(saved)}
}catch(e){}

const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform='none';
      io.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.motto,.project,.statement,.section-title,.section-copy').forEach(el=>{
  el.style.opacity=0;
  el.style.transform='translateY(24px)';
  el.style.transition='opacity .75s ease, transform .75s ease';
  io.observe(el);
});
