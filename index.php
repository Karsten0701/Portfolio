<?php
require_once 'includes/config.php';
require_once 'includes/header.php';
?>

    <header class="hero-section d-flex align-items-center pattern-dots">
        <div class="container text-center">
            <div x-show="loaded" x-transition:enter="transition-fade" class="hero-content">
                <span class="hero-tag mb-3">Portfolio 2026</span>
                <h1 class="display-3 fw-bold mb-3"><?= htmlspecialchars($config['site']['author']) ?></h1>
                <p class="lead mb-1"><?= htmlspecialchars($config['site']['study']) ?></p>
                <p class="text-muted mb-4"><?= htmlspecialchars($config['site']['school']) ?></p>
                <div class="d-flex justify-content-center gap-3 flex-wrap">
                    <a href="#projects" class="btn btn-accent btn-lg px-4">
                        <i class="bi bi-grid me-2"></i>Projecten
                    </a>
                    <a href="#contact" class="btn btn-outline-accent btn-lg px-4">
                        <i class="bi bi-send me-2"></i>Contact
                    </a>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section id="about" class="py-5 my-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <h2 class="section-title fw-bold mb-2">Over Mij</h2>
                        <div class="divider mb-4"></div>
                        <p class="lead-text">
                            Ik ben Karsten Lindenburg, 18 jaar oud en studeer Creative Software Development
                            aan het Grafisch Lyceum Rotterdam. Ik ben gepassioneerd over het ontwikkelen van
                            games en applicaties, met een focus op gebruikerservaring en functionele design.
                        </p>
                        <p class="lead-text">
                            Mijn interesse ligt vooral in game development en het creeren van interactieve
                            ervaringen die mensen verbinden en vermaken.
                        </p>
                        <div class="d-flex gap-3 mt-4 flex-wrap">
                            <a href="<?= $config['github']['personal']['url'] ?>" target="_blank"
                               class="btn btn-sm btn-accent">
                                <i class="bi bi-github me-1"></i> Personal GitHub
                            </a>
                            <a href="<?= $config['github']['school']['url'] ?>" target="_blank"
                               class="btn btn-sm btn-outline-accent">
                                <i class="bi bi-github me-1"></i> School GitHub
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-1 mt-5 mt-lg-0">
                        <div class="d-flex flex-column gap-3 about-stats-row">
                            <div class="about-stat">
                                <div class="stat-number">800k+</div>
                                <div class="stat-label">Game Bezoeken</div>
                            </div>
                            <div class="about-stat">
                                <div class="stat-number">5+</div>
                                <div class="stat-label">Projecten</div>
                            </div>
                            <div class="about-stat">
                                <div class="stat-number">6</div>
                                <div class="stat-label">Programmeertalen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="projects" class="py-5 my-5 pattern-grid">
            <div class="container">
                <h2 class="section-title fw-bold mb-2">Projecten</h2>
                <div class="divider mb-2"></div>
                <p class="section-subtitle mb-5">Waar ik aan heb gewerkt en mee bezig ben.</p>

                <div class="row g-4">
                    <?php foreach ($config['projects'] as $index => $project): ?>
                    <div class="col-md-6 col-lg-4" x-data="{ show: false }"
                         x-intersect:enter="show = true">
                        <div class="project-card h-100"
                             :class="{ 'visible': show }"
                             style="transition-delay: <?= $index * 100 ?>ms">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <h3 class="h5 fw-semibold mb-0"><?= htmlspecialchars($project['title']) ?></h3>
                                <span class="badge-custom <?= $project['badge_type'] === 'outline' ? 'badge-outline' : 'badge-filled' ?>"
                                      style="--badge-color: <?= $project['color'] ?>">
                                    <?= htmlspecialchars($project['badge']) ?>
                                </span>
                            </div>
                            <p class="text-muted small mb-3 flex-grow-1"><?= htmlspecialchars($project['description']) ?></p>
                            <?php if ($project['stats']): ?>
                            <div class="border-top pt-3 mt-auto">
                                <span class="small fw-semibold" style="color: <?= $project['color'] ?>">
                                    <i class="bi bi-graph-up me-1"></i><?= htmlspecialchars($project['stats']) ?>
                                </span>
                            </div>
                            <?php endif; ?>
                            <?php if ($project['link']): ?>
                            <div class="<?= $project['stats'] ? 'mt-2' : 'border-top pt-3 mt-auto' ?>">
                                <a href="<?= htmlspecialchars($project['link']) ?>" target="_blank" class="project-link">
                                    <i class="bi bi-github"></i> Bekijk op GitHub
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <section id="skills" class="py-5 skills-section">
            <div class="container py-4">
                <h2 class="section-title fw-bold mb-2">Vaardigheden</h2>
                <div class="divider mb-2"></div>
                <p class="section-subtitle mb-5">Technologieen waar ik mee werk.</p>

                <div class="row g-3">
                    <?php foreach ($config['skills'] as $index => $skill): ?>
                    <div class="col-6 col-md-4 col-lg-2" x-data="{ show: false }"
                         x-intersect:enter="show = true">
                        <div class="skill-card" :class="{ 'visible': show }"
                             style="transition-delay: <?= $index * 80 ?>ms; --skill-color: <?= $skill['color'] ?>">
                            <div class="skill-icon-wrap"
                                 style="background: <?= $skill['color'] ?>15; color: <?= $skill['color'] ?>">
                                <i class="bi <?= $skill['icon'] ?>"></i>
                            </div>
                            <h4 class="h6 fw-semibold mb-1"><?= htmlspecialchars($skill['name']) ?></h4>
                            <p class="text-muted smallest mb-0"><?= htmlspecialchars($skill['desc']) ?></p>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

        <section id="contact" class="py-5 my-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="section-title fw-bold mb-2">Contact</h2>
                        <div class="divider mb-2"></div>
                        <p class="section-subtitle mb-4">
                            Interesse in samenwerken of heb je vragen? Stuur een bericht.
                        </p>

                        <form x-data="contactForm()" @submit.prevent="submit()" method="POST">
                            <div class="mb-3">
                                <label for="name" class="form-label small">Naam</label>
                                <input type="text" class="form-control" id="name" name="name"
                                       placeholder="Je naam" x-model="form.name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label small">Email</label>
                                <input type="email" class="form-control" id="email" name="email"
                                       placeholder="je@email.com" x-model="form.email" required>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label small">Bericht</label>
                                <textarea class="form-control" id="message" name="message" rows="4"
                                          placeholder="Waar kan ik je mee helpen?"
                                          x-model="form.message" required></textarea>
                            </div>

                            <button type="submit" class="btn btn-accent px-4" :disabled="sending">
                                <span x-show="!sending"><i class="bi bi-send me-2"></i>Verstuur</span>
                                <span x-show="sending" class="d-flex align-items-center gap-2">
                                    <span class="spinner-border spinner-border-sm"></span> Verzenden...
                                </span>
                            </button>

                            <div x-show="status" x-transition class="mt-3">
                                <div class="alert rounded-3" :class="status === 'success' ? 'alert-success' : 'alert-danger'"
                                     x-text="statusMessage"></div>
                            </div>
                        </form>
                    </div>

                    <div class="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
                        <div class="contact-info h-100">
                            <h5 class="fw-semibold mb-4">Contactgegevens</h5>
                            <div class="d-flex align-items-center mb-4">
                                <div class="contact-icon me-3">
                                    <i class="bi bi-envelope-fill"></i>
                                </div>
                                <div>
                                    <p class="small text-muted mb-0">Email</p>
                                    <a href="mailto:<?= $config['site']['email'] ?>" class="text-dark text-decoration-none fw-medium">
                                        <?= htmlspecialchars($config['site']['email']) ?>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="contact-icon me-3">
                                    <i class="bi bi-mortarboard-fill"></i>
                                </div>
                                <div>
                                    <p class="small text-muted mb-0">School Email</p>
                                    <a href="mailto:<?= $config['site']['email_school'] ?>" class="text-dark text-decoration-none fw-medium">
                                        <?= htmlspecialchars($config['site']['email_school']) ?>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="contact-icon me-3">
                                    <i class="bi bi-github"></i>
                                </div>
                                <div>
                                    <p class="small text-muted mb-0">GitHub Personal</p>
                                    <a href="<?= $config['github']['personal']['url'] ?>" target="_blank"
                                       class="text-dark text-decoration-none fw-medium">
                                        <?= $config['github']['personal']['username'] ?>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4">
                                <div class="contact-icon me-3">
                                    <i class="bi bi-github"></i>
                                </div>
                                <div>
                                    <p class="small text-muted mb-0">GitHub School</p>
                                    <a href="<?= $config['github']['school']['url'] ?>" target="_blank"
                                       class="text-dark text-decoration-none fw-medium">
                                        <?= $config['github']['school']['username'] ?>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex align-items-center">
                                <div class="contact-icon me-3">
                                    <i class="bi bi-geo-alt-fill"></i>
                                </div>
                                <div>
                                    <p class="small text-muted mb-0">Opleiding</p>
                                    <span class="fw-medium"><?= htmlspecialchars($config['site']['school']) ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

<?php require_once 'includes/footer.php'; ?>
