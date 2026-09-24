/* PhoneWise VN — minimal progressive-enhancement JS (no dependencies) */
(function () {
  "use strict";

  /* Reading progress bar */
  var progressBar = document.querySelector(".progress-bar");
  function updateProgress() {
    if (!progressBar) return;
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop;
    var height = doc.scrollHeight - doc.clientHeight;
    var pct = height > 0 ? (scrollTop / height) * 100 : 0;
    progressBar.style.width = pct + "%";
  }

  /* Back-to-top button */
  var backToTop = document.querySelector(".back-to-top");
  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 600) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateProgress();
          updateBackToTop();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  updateProgress();
  updateBackToTop();

  /* Highlight the active tab-bar link while scrolling */
  var tabLinks = document.querySelectorAll(".tab-bar a[href^='#']");
  var sections = Array.prototype.map.call(tabLinks, function (link) {
    return document.querySelector(link.getAttribute("href"));
  });

  if ("IntersectionObserver" in window && tabLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var index = sections.indexOf(entry.target);
          if (index === -1) return;
          if (entry.isIntersecting) {
            tabLinks.forEach(function (l) {
              l.classList.remove("active");
            });
            tabLinks[index].classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach(function (section) {
      if (section) observer.observe(section);
    });
  }
})();
