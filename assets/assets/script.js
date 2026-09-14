document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  // Simple contact form -> opens WhatsApp with prefilled message
  var form = document.querySelector('#enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.querySelector('#name').value.trim();
      var event = document.querySelector('#event-type').value.trim();
      var message = document.querySelector('#message').value.trim();
      var text = 'Hello Suresh Tent House, my name is ' + name +
        '. Event: ' + event + '. ' + message;
      var url = 'https://wa.me/917859928577?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }
});
