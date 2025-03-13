// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="u1a.html"><strong aria-hidden="true">1.</strong> Course Intro</a></li><li class="chapter-item expanded "><a href="u1b.html"><strong aria-hidden="true">2.</strong> Session 1</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="u1c.html"><strong aria-hidden="true">2.1.</strong> Core Concepts</a></li><li class="chapter-item expanded "><a href="u1d.html"><strong aria-hidden="true">2.2.</strong> Add-Ons</a></li><li class="chapter-item expanded "><a href="u1e.html"><strong aria-hidden="true">2.3.</strong> Customizing UI</a></li><li class="chapter-item expanded "><a href="u1f.html"><strong aria-hidden="true">2.4.</strong> Modelling the Bottle</a></li><li class="chapter-item expanded "><a href="u1g.html"><strong aria-hidden="true">2.5.</strong> Modelling the Label</a></li><li class="chapter-item expanded "><a href="u1h.html"><strong aria-hidden="true">2.6.</strong> Modelling the Cork</a></li><li class="chapter-item expanded "><a href="u1i.html"><strong aria-hidden="true">2.7.</strong> Modelling the String</a></li><li class="chapter-item expanded "><a href="u1j.html"><strong aria-hidden="true">2.8.</strong> Wax Dip</a></li><li class="chapter-item expanded "><a href="u1k.html"><strong aria-hidden="true">2.9.</strong> Wax Seal</a></li></ol></li><li class="chapter-item expanded "><a href="u2a.html"><strong aria-hidden="true">3.</strong> Session 2</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="u2b.html"><strong aria-hidden="true">3.1.</strong> Procedural vs. Image Map</a></li><li class="chapter-item expanded "><a href="u2c.html"><strong aria-hidden="true">3.2.</strong> Workspace Setup</a></li><li class="chapter-item expanded "><a href="u2d.html"><strong aria-hidden="true">3.3.</strong> Wax Texture Nodes</a></li><li class="chapter-item expanded "><a href="u2e.html"><strong aria-hidden="true">3.4.</strong> Label Image Mapping</a></li><li class="chapter-item expanded "><a href="u2f.html"><strong aria-hidden="true">3.5.</strong> Creating our Glass Material</a></li><li class="chapter-item expanded "><a href="u2g.html"><strong aria-hidden="true">3.6.</strong> Backdrop Material</a></li><li class="chapter-item expanded "><a href="u2h.html"><strong aria-hidden="true">3.7.</strong> Cork Material</a></li><li class="chapter-item expanded "><a href="u2i.html"><strong aria-hidden="true">3.8.</strong> Camera Setup</a></li><li class="chapter-item expanded "><a href="u2g.html"><strong aria-hidden="true">3.9.</strong> Focus Object</a></li><li class="chapter-item expanded "><a href="u2h.html"><strong aria-hidden="true">3.10.</strong> Scene Setup</a></li><li class="chapter-item expanded "><a href="u2i.html"><strong aria-hidden="true">3.11.</strong> Rendering</a></li></ol></li><li class="chapter-item expanded "><a href="downloads.html"><strong aria-hidden="true">4.</strong> Downloads</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
