/* Copy only prompt text. Keep the manual route visible when clipboard access fails. */
(() => {
  'use strict';
  const copyButtons = document.querySelectorAll('[data-copy]');

  function selectPromptText(element) {
    const selection = window.getSelection();
    if (!selection) return false;
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // Try a user-initiated legacy copy before offering manual selection.
      }
    }
    const scratch = document.createElement('textarea');
    scratch.value = text;
    scratch.setAttribute('readonly', '');
    scratch.style.position = 'fixed';
    scratch.style.top = '0';
    scratch.style.left = '-9999px';
    document.body.appendChild(scratch);
    scratch.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch (_) { /* Manual fallback below. */ }
    scratch.remove();
    return copied;
  }

  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const prompt = document.getElementById(button.dataset.copy);
      const status = document.getElementById(`${button.dataset.copy}-status`);
      if (!prompt || !status) return;
      button.disabled = true;
      const copied = await copyText(prompt.textContent.trim());
      button.disabled = false;
      if (copied) {
        button.dataset.copyState = 'success';
        button.textContent = 'Copied';
        status.textContent = 'Prompt copied. Paste it into ChatGPT.';
        button.focus({ preventScroll: true });
      } else {
        delete button.dataset.copyState;
        button.textContent = 'Copy prompt';
        prompt.focus({ preventScroll: true });
        const selected = selectPromptText(prompt);
        status.textContent = selected
          ? 'Automatic copy was blocked. The prompt is selected: use your device’s Copy command.'
          : 'Automatic copy was blocked. Select the prompt text and use your device’s Copy command.';
      }
    });
  });

  const stepLinks = [...document.querySelectorAll('.step-nav a[href^="#"]')];
  const sections = stepLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (!visible.length) return;
      const current = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target.id;
      stepLinks.forEach(link => {
        if (link.getAttribute('href') === `#${current}`) link.setAttribute('aria-current', 'step');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-5% 0px -65% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();
