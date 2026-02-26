    <footer>
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-md-4 mb-3 mb-md-0">
                    <span class="footer-brand">KL</span>
                </div>
                <div class="col-md-4 text-center mb-3 mb-md-0">
                    <div class="d-flex justify-content-center gap-2">
                        <a href="<?= $config['github']['personal']['url'] ?>" target="_blank"
                           class="footer-link" title="GitHub Personal">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="<?= $config['github']['school']['url'] ?>" target="_blank"
                           class="footer-link" title="GitHub School">
                            <i class="bi bi-github"></i>
                        </a>
                        <a href="mailto:<?= $config['site']['email'] ?>" class="footer-link" title="Email">
                            <i class="bi bi-envelope"></i>
                        </a>
                        <a href="mailto:<?= $config['site']['email_school'] ?>" class="footer-link" title="School Email">
                            <i class="bi bi-mortarboard"></i>
                        </a>
                    </div>
                </div>
                <div class="col-md-4 text-md-end">
                    <p class="text-muted small mb-0">&copy; <?= $config['site']['year'] ?> <?= htmlspecialchars($config['site']['author']) ?></p>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@alpinejs/intersect@3.14.8/dist/cdn.min.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.8/dist/cdn.min.js" defer></script>
</body>
</html>
