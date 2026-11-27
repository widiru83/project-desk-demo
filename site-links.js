(() => {
  const root = document.getElementById('root');
  const downloadPage = 'https://widiru83.github.io/project-desk-/';
  const oldRelease = 'https://github.com/widiru83/project-desk-/releases/tag/v1.2.5';

  function updateDownloadLinks() {
    for (const link of root.querySelectorAll('a[href]')) {
      if (link.href === oldRelease) {
        link.href = downloadPage;
      }
    }
  }

  if (!root) return;
  updateDownloadLinks();
  new MutationObserver(updateDownloadLinks).observe(root, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['href']
  });
})();
