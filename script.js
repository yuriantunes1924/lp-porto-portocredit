document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('.faq-accordion-trigger');
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item = trigger.closest('.faq-accordion-item');
      if (!item) return;
      var wasOpen = item.classList.contains('is-open');
      item.parentElement.querySelectorAll('.faq-accordion-item.is-open').forEach(function (el) {
        el.classList.remove('is-open');
      });
      if (!wasOpen) {
        item.classList.add('is-open');
      }
    });
  });

  var typeButtons = document.querySelectorAll('.planos-type-selector button');
  typeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      typeButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
});
