var RUN = {
  // AOS
  aos: function () {
    AOS.init({
      disable: window.innerWidth < 1024,
    });
  },

  // Initial
  init: function () {
    RUN.aos();
  },
};

$(document).ready(function () {
  setTimeout(function () {
    RUN.init();
    console.log(
      "%c Template...",
      "color: #ff0000; font-size: 16px; font-weight: 700"
    );
  }, 100);
});
