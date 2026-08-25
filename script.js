
(function(){
  "use strict";

  /* ---------- SCROLL REVEAL ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  }

  /* ---------- LIGHTBOX ---------- */
  var frames = Array.prototype.slice.call(document.querySelectorAll('.frame'));
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var currentIndex = 0;

  function openLightbox(i){
    currentIndex = i;
    var img = frames[i].querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = frames[i].getAttribute('data-cap') || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function showNext(step){
    currentIndex = (currentIndex + step + frames.length) % frames.length;
    openLightbox(currentIndex);
  }

  frames.forEach(function(frame, i){
    frame.addEventListener('click', function(){ openLightbox(i); });
  });
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbNext').addEventListener('click', function(){ showNext(1); });
  document.getElementById('lbPrev').addEventListener('click', function(){ showNext(-1); });
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox){ closeLightbox(); }
  });
  document.addEventListener('keydown', function(e){
    if(!lightbox.classList.contains('open')) return;
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight') showNext(1);
    if(e.key === 'ArrowLeft') showNext(-1);
  });

  /* ---------- LIGHT A CANDLE (persisted locally) ---------- */
  var CANDLE_KEY = 'bertha_tribute_candles';
  var candleBtn = document.getElementById('candleBtn');
  var candleCount = document.getElementById('candleCount');

  function getCandles(){
    var n = parseInt(localStorage.getItem(CANDLE_KEY), 10);
    return isNaN(n) ? 0 : n;
  }
  function renderCandles(){
    var n = getCandles();
    candleCount.innerHTML = n === 0
      ? 'Sé la primera persona en encender una vela por ella.'
      : 'Se han encendido <strong>' + n + '</strong> vela' + (n === 1 ? '' : 's') + ' en su memoria en este dispositivo.';
  }
  candleBtn.addEventListener('click', function(){
    localStorage.setItem(CANDLE_KEY, getCandles() + 1);
    renderCandles();
    candleBtn.animate(
      [{ transform:'scale(1)' }, { transform:'scale(0.96)' }, { transform:'scale(1)' }],
      { duration: 220, easing: 'ease-out' }
    );
  });
  renderCandles();

  /* ---------- GUESTBOOK (persisted locally) ---------- */
  var GB_KEY = 'bertha_tribute_messages';
  var gbForm = document.getElementById('gbForm');
  var gbList = document.getElementById('gbList');

  function getMessages(){
    try {
      var raw = localStorage.getItem(GB_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch(e){ return []; }
  }
  function saveMessages(list){
    localStorage.setItem(GB_KEY, JSON.stringify(list));
  }
  function escapeHtml(str){
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
  function renderMessages(){
    var list = getMessages();
    if(list.length === 0){
      gbList.innerHTML = '<div class="gb-empty">Todavía no hay mensajes. El tuyo puede ser el primero.</div>';
      return;
    }
    gbList.innerHTML = list.slice().reverse().map(function(m){
      return '<div class="gb-entry">' +
             '<div class="who">' + escapeHtml(m.name) + '</div>' +
             '<div class="msg">' + escapeHtml(m.message) + '</div>' +
             '</div>';
    }).join('');
  }
  gbForm.addEventListener('submit', function(e){
    e.preventDefault();
    var nameEl = document.getElementById('gbName');
    var msgEl = document.getElementById('gbMsg');
    var name = nameEl.value.trim();
    var message = msgEl.value.trim();
    if(!name || !message) return;
    var list = getMessages();
    list.push({ name: name, message: message, ts: Date.now() });
    saveMessages(list);
    renderMessages();
    gbForm.reset();
  });
  renderMessages();

})();
