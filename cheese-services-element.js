(function () {

  class CheeseServices extends HTMLElement {
    connectedCallback() {
      this.style.display = 'block';
      this.style.width   = '100%';

      /* ── Create iframe ───────────────────────────────────────── */
      var iframe = document.createElement('iframe');
      iframe.src = 'https://andres199613.github.io/cheese-services/';
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('frameborder', '0');
      iframe.style.cssText =
        'width:100%;border:none;display:block;overflow:hidden;';
      iframe.height = '600'; /* initial fallback — resizer will update */
      this.appendChild(iframe);

      /* ── Load iframeResizer (parent side) and init ───────────── */
      var script = document.createElement('script');
      script.src =
        'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.9/js/iframeResizer.min.js';
      script.onload = function () {
        iFrameResize(
          { log: false, checkOrigin: false, heightCalculationMethod: 'bodyOffset' },
          iframe
        );
      };
      document.head.appendChild(script);

      /* ── Scroll to Contact section when CTA is clicked ───────── */
      window.addEventListener('message', function (e) {
        if (e.data && e.data.type === 'wix-scroll-to-anchor') {
          var el =
            document.querySelector('[data-anchor="Contact"]') ||
            document.getElementById('Contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  if (!customElements.get('cheese-services')) {
    customElements.define('cheese-services', CheeseServices);
  }

})();
