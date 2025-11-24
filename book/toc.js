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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="maholviNama.html">Maholvi-Nama</a></li><li class="chapter-item expanded affix "><a href="how.html">How to read this book</a></li><li class="chapter-item expanded "><a href="madanMaholvi.html">Madan Maholvi- मदन महोलवी </a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fikr/fkp_000_title.html">Fikr Ke Parinde - फ़िक्र के परिंदे </a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fikr/fkp_001_khyaalKeeKompal.html">Kompal - कोंपल </a></li><li class="chapter-item expanded "><a href="fikr/fkp_002_meraSaya.html">Saya - साया </a></li><li class="chapter-item expanded "><a href="fikr/fkp_003_bantwara.html">Bantwara - बँटवारा </a></li><li class="chapter-item expanded "><a href="fikr/fkp_004_tuAyegiKaise.html">Aayegi Kaise - आएग़ी कैसे</a></li><li class="chapter-item expanded "><a href="fikr/fkp_005_ratJagoKaMausam.html">Ratjagon - रतजगों </a></li><li class="chapter-item expanded "><a href="fikr/fkp_006_tumKhudaBhiHo.html">Khuda - ख़ुदा </a></li><li class="chapter-item expanded "><a href="fikr/fkp_007_mainHoon.html">Main Hoon - मैं हूँ  </a></li><li class="chapter-item expanded "><a href="fikr/fkp_000_vatayan.html">Vatayan - वातायन </a></li><li class="chapter-item expanded "><a href="fikr/fkp_000_drishtikon.html">Drishtikon - दृष्टिकोण </a></li><li class="chapter-item expanded "><a href="fikr/fkp_000_yatra.html">Yatra - यात्रा </a></li></ol></li><li class="chapter-item expanded "><a href="RTM/title.html">Rasta Tou Mile </a></li><li><ol class="section"><li class="chapter-item expanded "><a href="RTM/jagtaPatthar.html">Jagta Patthar</a></li><li class="chapter-item expanded "><a href="RTM/jidd.html">Jidd</a></li><li class="chapter-item expanded "><a href="RTM/rastaTauMile.html">Rasta Tou Mile</a></li><li class="chapter-item expanded "><a href="RTM/humDono.html">Hum Dono</a></li><li class="chapter-item expanded "><a href="RTM/usPaar.html">Us Paar</a></li><li class="chapter-item expanded "><a href="RTM/khushbu.html">Khushbu</a></li><li class="chapter-item expanded "><a href="RTM/lunchTime.html">Lunch Time</a></li><li class="chapter-item expanded "><a href="RTM/bolKavi.html">Bol Kavi</a></li><li class="chapter-item expanded "><a href="RTM/lekin.html">Lekin</a></li><li class="chapter-item expanded "><a href="RTM/usNe.html">Us Ne</a></li><li class="chapter-item expanded "><a href="RTM/pyaas.html">Pyaas</a></li><li class="chapter-item expanded "><a href="RTM/padYatra.html">Padyatra</a></li><li class="chapter-item expanded "><a href="RTM/krishn.html">Krishn</a></li><li class="chapter-item expanded "><a href="RTM/aaBandh.html">Aa Baandh</a></li><li class="chapter-item expanded "><a href="RTM/jangKiBaarish.html">Jang Ki Barish</a></li><li class="chapter-item expanded "><a href="RTM/anantShunya.html">Anant Shunya</a></li><li class="chapter-item expanded "><a href="RTM/raahGujarKeLiye.html">Raah Gujer Ke Liye</a></li><li class="chapter-item expanded "><a href="RTM/aasPaas.html">Aas Paas</a></li><li class="chapter-item expanded "><a href="RTM/mujheKhatLikhna.html">Mujhe Khat Likhna</a></li><li class="chapter-item expanded "><a href="RTM/andhereSaybaan.html">Andhere Saybaan</a></li><li class="chapter-item expanded "><a href="RTM/ekNaamAas.html">Ek Naam Aas</a></li><li class="chapter-item expanded "><a href="RTM/kahaanMiloge.html">Kahaan Miloge</a></li><li class="chapter-item expanded "><a href="RTM/alaav.html">Alaav</a></li><li class="chapter-item expanded "><a href="RTM/namumkin.html">Namumkin</a></li><li class="chapter-item expanded "><a href="RTM/koiTauPataHoga.html">Koi Tau Pata Hoga</a></li><li class="chapter-item expanded "><a href="RTM/yoonhiKhadaHoon.html">Yoonhi Khada Hoon</a></li><li class="chapter-item expanded "><a href="RTM/kisLiye.html">Kis Liye</a></li><li class="chapter-item expanded "><a href="RTM/ekKabira.html">Ek Kabira</a></li><li class="chapter-item expanded "><a href="RTM/nayaSaal.html">Naya Saal</a></li><li class="chapter-item expanded "><a href="RTM/tereNakshePaa.html">Tere Nakshe Paa</a></li><li class="chapter-item expanded "><a href="RTM/tumAakhir.html">Tum Aakhir</a></li><li class="chapter-item expanded "><a href="RTM/lekinTumHo.html">Lekin Tum Ho</a></li><li class="chapter-item expanded "><a href="RTM/aagJaltiRahe.html">Aag Jalti Rahe</a></li><li class="chapter-item expanded "><a href="RTM/meriMehboobaSi.html">Meri Mehbooba Si</a></li><li class="chapter-item expanded "><a href="RTM/kabhi.html">Kabhi</a></li><li class="chapter-item expanded "><a href="RTM/dharmDwaar.html">Dharm Dwaar</a></li><li class="chapter-item expanded "><a href="RTM/kuchDoorYoohin.html">Kuch Door Yoohin</a></li><li class="chapter-item expanded "><a href="RTM/kurukshetra.html">Kurukshetra</a></li><li class="chapter-item expanded "><a href="RTM/chooneTak.html">Choone Tak</a></li><li class="chapter-item expanded "><a href="RTM/kisiModPe.html">Kisi Mod Pe</a></li><li class="chapter-item expanded "><a href="RTM/achchaHua.html">Achcha Hua</a></li><li class="chapter-item expanded "><a href="RTM/maangeHueLamhe.html">Maange Hue Lamhe</a></li></ol></li><li class="chapter-item expanded "><a href="bghd/bghdTitle.html">Bahut Garam Hai Dhoop</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bghd/dua.html">Dua</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
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
