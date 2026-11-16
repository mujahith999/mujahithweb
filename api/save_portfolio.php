<?php
require_once __DIR__ . '/../config/db.php';
header('Content-Type: application/json');
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON payload']);
    exit;
}
save_portfolio_state($data);
echo json_encode(['status' => 'ok', 'message' => 'Portfolio state saved to MySQL and JSON']);
?>