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

        async submit() {
            this.sending = true;
            this.status = null;

            try {
                const formData = new FormData();
                formData.append('name', this.form.name);
                formData.append('email', this.form.email);
                formData.append('message', this.form.message);

                const response = await fetch('api/contact.php', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    this.status = 'success';
                    this.statusMessage = data.message;
                    this.form = { name: '', email: '', message: '' };
                } else {
                    this.status = 'error';
                    this.statusMessage = data.message;
                }
            } catch {
                this.status = 'error';
                this.statusMessage = 'Er ging iets mis. Probeer het later opnieuw.';
            } finally {
                this.sending = false;
                setTimeout(() => { this.status = null; }, 5000);
            }
        }
    };
}
