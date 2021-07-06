class ConduitSite {

    constructor() {
        this.initOnload();
    }

    initOnload() {
        // Smooth scroll anchor links
        window.addEventListener('load', () => {
            this.initSmoothScrollHashLinks();
            this.initPlatformCodeSelector();
            this.initPlatformCodeTabs();
        });
    }

    initSmoothScrollHashLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    initPlatformCodeSelector() {
        let os = ConduitSite.getOS();

        if (os === 'ios') {
            os = 'macos';
        } else if (os === 'android') {
            os = 'windows';
        }

        for (let platform of ['macos', 'windows', 'linux']) {
            if (platform !== os) {
                // Platform specific code blocks
                document.querySelectorAll(`.platform-${platform}`).forEach(
                    block => block.setAttribute('style', 'display:none'));
            }
        }
    }

    initPlatformCodeTabs() {
        const findPlatform = (_t, pf = "") => Array.from(_t.classList).find(c => c.startsWith(`platform-${pf}`));
        document.querySelectorAll('.code-tabs').forEach(block => {

            const firstTab = block.nextElementSibling;
            if(!findPlatform(firstTab)) {
                return;
            }
            const tabs = [firstTab];

            while (true) {
                const t = tabs[tabs.length - 1].nextElementSibling;

                if (!t || !findPlatform(t)) {
                    break;
                }
                tabs.push(t);
            }

            for (let tab of tabs) {
                let pName = findPlatform(tab).split('-')[1];

                let d = document.createElement('a')
                d.setAttribute('data-platform', pName);
                d.innerText = ConduitSite.pNameToPlatformString(pName);
                const tStyle = tab.getAttribute('style');
                if (!tStyle || !/display:\s?none/.test(tStyle)) {
                    d.classList.add('active');
                }
                d.addEventListener('click', ev => {
                    ev.preventDefault();

                    const og = Array.from(block.children).find(b => b.classList.contains('active'));
                    og.classList.remove('active');

                    d.classList.add('active');
                    const pf = d.getAttribute('data-platform');
                    let _tt = firstTab;
                    console.log(pf);

                    while (_tt) {
                        if (findPlatform(_tt, pf)) {
                            _tt.setAttribute('style', '');
                        } else {
                            _tt.setAttribute('style', 'display:none');
                        }
                        _tt = _tt.nextElementSibling;
                    }
                })
                block.appendChild(d);
            }
        });
    }

    static pNameToPlatformString(pName) {
        return {
            'macos': 'macOS',
            'windows': 'Windows',
            'linux': 'Linux'
        }[pName];
    }

    /**
     * @returns {String}
     */
    static getOS() {
        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['darwin', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'macos';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'ios';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'windows';
        } else if (/Android/.test(userAgent)) {
            os = 'android';
        } else if (/Linux/.test(platform)) {
            os = 'linux';
        }

        return os;
    }
}

new ConduitSite();