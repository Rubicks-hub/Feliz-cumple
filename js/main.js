(() => {
  const welcome = document.querySelector('.welcome');
  const discover = document.getElementById('discover');
  const lightbox = document.getElementById('lightbox');
  const cards = [...document.querySelectorAll('.photo-card')];
  const audio = document.getElementById('birthday-audio');
  const musicButton = document.getElementById('music-toggle');
  const photoNames = ['Un lugar para tus recuerdos', 'Un día bonito', 'Pequeños momentos especiales'];
  let activePhoto = 0;
  let musicReady = false;

  discover.addEventListener('click', () => {
    welcome.classList.add('is-leaving');
    document.body.classList.add('experience-started');
    window.setTimeout(() => {
      welcome.hidden = true;
      document.getElementById('celebracion').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }, 600);
    if (musicReady) audio.play().catch(() => {});
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  const setPhoto = index => {
    activePhoto = (index + cards.length) % cards.length;
    const card = cards[activePhoto];
    const art = card.querySelector('.photo-art');
    const dialogArt = lightbox.querySelector('.lightbox-art');
    dialogArt.className = `lightbox-art ${art.className}`;
    lightbox.querySelector('.lightbox-caption').textContent = photoNames[activePhoto];
    lightbox.querySelector('.lightbox-count').textContent = `${String(activePhoto + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  };
  cards.forEach(card => card.addEventListener('click', () => {
    setPhoto(Number(card.dataset.index));
    lightbox.showModal();
  }));
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('.previous').addEventListener('click', () => setPhoto(activePhoto - 1));
  lightbox.querySelector('.next').addEventListener('click', () => setPhoto(activePhoto + 1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') setPhoto(activePhoto - 1);
    if (event.key === 'ArrowRight') setPhoto(activePhoto + 1);
  });

  const letterToggle = document.getElementById('letter-toggle');
  const letterContent = document.getElementById('letter-content');
  letterToggle.addEventListener('click', () => {
    const open = letterToggle.getAttribute('aria-expanded') !== 'true';
    letterToggle.setAttribute('aria-expanded', String(open));
    letterToggle.querySelector('.letter-toggle-label').textContent = open ? 'Cerrar la carta' : 'Abrir la carta';
    letterContent.inert = !open;
    letterContent.setAttribute('aria-hidden', String(!open));
    letterToggle.closest('.letter-card').classList.toggle('is-open', open);
  });

  audio.addEventListener('canplay', () => {
    musicReady = true;
    musicButton.disabled = false;
    musicButton.setAttribute('aria-label', 'Reproducir o pausar la música');
    musicButton.title = 'Reproducir música';
  }, { once: true });
  audio.addEventListener('error', () => {
    musicReady = false;
    musicButton.disabled = true;
    musicButton.setAttribute('aria-label', 'Reproductor de música desactivado: agrega birthday-song.mp3');
  });
  audio.addEventListener('play', () => { musicButton.classList.add('is-playing'); musicButton.title = 'Pausar música'; });
  audio.addEventListener('pause', () => { musicButton.classList.remove('is-playing'); musicButton.title = 'Reproducir música'; });
  musicButton.addEventListener('click', () => {
    if (!musicReady) return;
    if (audio.paused) audio.play().catch(() => {}); else audio.pause();
  });
})();
