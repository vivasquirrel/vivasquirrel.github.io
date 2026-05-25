(function () {
  var user = "vivas" + "quirrel";
  var domain = "gmail" + ".com";
  var address = user + "@" + domain;
  document.querySelectorAll("[data-email-link]").forEach(function (el) {
    el.setAttribute("href", "mailto:" + address);
    el.setAttribute("aria-label", "Email Viva Squirrel");
  });
  document.querySelectorAll("[data-email-text]").forEach(function (el) {
    el.textContent = address;
  });
})();
