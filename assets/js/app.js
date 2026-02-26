function portfolio() {
    return {
        scrolled: false,
        loaded: false,

        init() {
            this.loaded = true;

            window.addEventListener('scroll', () => {
                this.scrolled = window.scrollY > 20;
            });

            this.smoothScroll();
        },

        smoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const href = anchor.getAttribute('href');
                    if (href === '#') return;

                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (!target) return;

                    target.scrollIntoView({ behavior: 'smooth' });

                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) bsCollapse.hide();
                    }
                });
            });
        }
    };
}

function contactForm() {
    return {
        form: {
            name: '',
            email: '',
            message: ''
        },
        sending: false,
        status: null,
        statusMessage: '',

        submit() {
            this.sending = true;
            this.status = null;

            const subject = 'Portfolio contact van ' + encodeURIComponent(this.form.name);
            const body = 'Naam: ' + this.form.name + '\nEmail: ' + this.form.email + '\n\n' + this.form.message;
            const mailto = 'mailto:Karstenlindenburg@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(body);

            window.location.href = mailto;

            this.status = 'success';
            this.statusMessage = 'Je e-mailclient wordt geopend. Verstuur het bericht om contact op te nemen.';
            this.form = { name: '', email: '', message: '' };
            this.sending = false;
            setTimeout(() => { this.status = null; }, 6000);
        }
    };
}
