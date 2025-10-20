document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const textToCopy = button.getAttribute('data-copy');
    await navigator.clipboard.writeText(textToCopy);
    
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    `;
    button.classList.add('copied');

    setTimeout(() => {
      button.innerHTML = `
        <svg class="copy-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `;
      button.classList.remove('copied');
    }, 1500);
  });
});
