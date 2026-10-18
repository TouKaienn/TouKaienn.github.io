// Keep the photo above its trigger and inside narrow viewports.
document.querySelectorAll('.cat-preview').forEach(function (preview) {
  var photo = preview.querySelector('.cat-preview-photo');

  function positionPhoto() {
    var triggerBounds = preview.getBoundingClientRect();
    var photoWidth = photo.getBoundingClientRect().width;
    var viewportWidth = document.documentElement.clientWidth;
    var centeredLeft = triggerBounds.left + (triggerBounds.width - photoWidth) / 2;
    var left = Math.max(16, Math.min(centeredLeft, viewportWidth - photoWidth - 16));
    preview.style.setProperty('--cat-preview-left', (left - triggerBounds.left) + 'px');
  }

  preview.addEventListener('mouseenter', positionPhoto);
  preview.addEventListener('focusin', positionPhoto);
  window.addEventListener('resize', positionPhoto);
  positionPhoto();
});
