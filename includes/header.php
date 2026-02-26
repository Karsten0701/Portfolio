<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($config['site']['title']) ?></title>
    <meta name="description" content="<?= htmlspecialchars($config['site']['description']) ?>">
    <meta name="author" content="<?= htmlspecialchars($config['site']['author']) ?>">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body x-data="portfolio()" x-init="init()">

    <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-scrolled': scrolled }">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">KL</a>

            <button class="navbar-toggler border-0" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Navigatie">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto gap-1">
                    <?php foreach ($config['nav'] as $item): ?>
                    <li class="nav-item">
                        <a class="nav-link" href="<?= $item['href'] ?>"><?= $item['label'] ?></a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </nav>
