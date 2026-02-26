<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Ongeldige request methode.']);
    exit;
}

$name    = trim($_POST['name'] ?? '');
$email   = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Vul alle velden in.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Voer een geldig e-mailadres in.']);
    exit;
}

if (strlen($message) < 10) {
    echo json_encode(['success' => false, 'message' => 'Bericht moet minimaal 10 tekens bevatten.']);
    exit;
}

$name    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$logFile = __DIR__ . '/../data/messages.json';
$logDir  = dirname($logFile);

if (!is_dir($logDir)) {
    mkdir($logDir, 0755, true);
}

$messages = [];
if (file_exists($logFile)) {
    $existing = json_decode(file_get_contents($logFile), true);
    if (is_array($existing)) {
        $messages = $existing;
    }
}

$messages[] = [
    'name'      => $name,
    'email'     => $email,
    'message'   => $message,
    'timestamp' => date('Y-m-d H:i:s'),
    'ip'        => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
];

file_put_contents($logFile, json_encode($messages, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo json_encode(['success' => true, 'message' => 'Bedankt! Je bericht is verstuurd.']);
