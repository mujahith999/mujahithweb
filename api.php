<?php
require_once __DIR__ . '/config.php';
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        if (!is_dir(__DIR__ . '/data')) {
            mkdir(__DIR__ . '/data', 0775, true);
        }
        file_put_contents(__DIR__ . '/data/portfolio_data.json', $raw);
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("INSERT INTO portfolio_state (id, state_json) VALUES (1, ?) ON DUPLICATE KEY UPDATE state_json = VALUES(state_json)");
                $stmt->execute([$raw]);
            } catch (Exception $e) {}
        }
        echo json_encode(['status' => 'ok']);
        exit;
    }
}
echo json_encode(['status' => 'error']);
?>
