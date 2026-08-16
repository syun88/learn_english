(() => {
 const BASE='/learn_english/';
 const labels=[['Home',''],['Grammar','grammar/'],['Vocabulary','vocabulary/'],['Pronunciation','pronunciation/'],['Listening','listening/'],['Reading','reading/'],['Speaking','speaking/'],['Writing','writing/'],['TOEIC','toeic/'],['Review','review/']];
 const page=document.body.dataset.page||'home';
 const header=document.getElementById('siteHeader');
 if(header) header.className='site-header', header.innerHTML=`<a class="logo" href="${BASE}">English Mastery Lab</a><nav class="site-nav">${labels.map(([n,p])=>`<a class="${n.toLowerCase()===page?'active':''}" href="${BASE}${p}">${n}</a>`).join('')}</nav><div class="header-tools"><button id="langToggle" class="tool-btn">JP+繁中</button><button id="themeToggle" class="tool-btn">Dark</button></div>`;
 const root=document.getElementById('pageRoot'); if(root && window.PAGE_CONTENT?.[page]) root.innerHTML=window.PAGE_CONTENT[page];
 const themeKey='eml-theme',langKey='eml-lang',body=document.body,themeBtn=document.getElementById('themeToggle'),langBtn=document.getElementById('langToggle');
 function applyTheme(){const dark=localStorage.getItem(themeKey)==='dark';body.classList.toggle('dark',dark);if(themeBtn)themeBtn.textContent=dark?'Light':'Dark'}
 function applyLang(){const lang=localStorage.getItem(langKey)||'both';body.classList.remove('lang-jp','lang-tc');if(lang==='jp')body.classList.add('lang-jp');if(lang==='tc')body.classList.add('lang-tc');if(langBtn)langBtn.textContent=lang==='both'?'JP+繁中':lang==='jp'?'JP':'繁中'}
 themeBtn?.addEventListener('click',()=>{localStorage.setItem(themeKey,body.classList.contains('dark')?'light':'dark');applyTheme()});
 langBtn?.addEventListener('click',()=>{const c=localStorage.getItem(langKey)||'both',n=c==='both'?'jp':c==='jp'?'tc':'both';localStorage.setItem(langKey,n);applyLang()});
 setTimeout(()=>{const e=document.getElementById('errorLog');if(e){e.value=localStorage.getItem('eml-error-log')||'';e.addEventListener('input',()=>localStorage.setItem('eml-error-log',e.value))}},0);
 applyTheme();applyLang();
})();