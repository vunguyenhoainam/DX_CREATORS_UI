var RUN = {
  // Handle
  handle: function () {
    console.log(
      "%c RUN...",
      "color: #ff0000; font-size: 16px; font-weight: 700"
    );
  },

  init: function () {
    RUN.handle();
  },
};

$(document).ready(function () {
  setTimeout(function () {
    RUN.init();
  }, 100);
});
