var clipboard = new Clipboard('.searchForm');

clipboard.on('success', function(e) {
  document.querySelector('.status').textContent = 'text copied...';
  e.clearSelection();
});
