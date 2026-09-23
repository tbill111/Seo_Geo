/* TechInsight VN — minimal progressive-enhancement JS (no dependencies) */
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

  /* Highlight the active table-of-contents link while scrolling */
  var tocLinks = document.querySelectorAll(".toc a[href^='#']");
  var sections = Array.prototype.map.call(tocLinks, function (link) {
    return document.querySelector(link.getAttribute("href"));
  });

  if ("IntersectionObserver" in window && tocLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var index = sections.indexOf(entry.target);
          if (index === -1) return;
          if (entry.isIntersecting) {
            tocLinks.forEach(function (l) {
              l.style.color = "";
            });
            tocLinks[index].style.color = "var(--color-primary)";
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
