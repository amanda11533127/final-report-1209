function updateProgress() {
  const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
  const completed = Array.from(checkboxes).filter((box) => box.checked).length;
  const progressEl = document.getElementById('progress-text');

  if (progressEl) {
    progressEl.textContent = `目前完成進度：${completed} / ${checkboxes.length} 項`;
  }
}

document.querySelectorAll('#checklist input[type="checkbox"]').forEach((box) => {
  box.addEventListener('change', updateProgress);
});

updateProgress();
