new Clipboard('.searchForm');

document.querySelector('.searchForm').addEventListener('click', function () {
  document.querySelector('.status').textContent = 'text copied...';
});

