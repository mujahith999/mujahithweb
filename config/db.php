<?php
// config/db.php — Auto-Initializing Database & JSON Storage Engine for XAMPP / cPanel
session_start();

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'mujahithweb_db');
define('DATA_JSON_FILE', __DIR__ . '/../data/portfolio_data.json');

function get_db_connection() {
    static $pdo = null;
    if ($pdo !== null) return $pdo;
    try {
        $pdo = new PDO("mysql:host=" . DB_HOST . ";charset=utf8mb4", DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
        $pdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
        $pdo->exec("USE `" . DB_NAME . "`");
        $pdo->exec("CREATE TABLE IF NOT EXISTS `portfolio_store` (
            `id` INT PRIMARY KEY DEFAULT 1,
            `json_payload` LONGTEXT NOT NULL,
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )");
        $pdo->exec("CREATE TABLE IF NOT EXISTS `contact_messages` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `fullname` VARCHAR(160) NOT NULL,
            `email` VARCHAR(160) NOT NULL,
            `phone` VARCHAR(60) DEFAULT '',
            `subject` VARCHAR(200) DEFAULT '',
            `message` TEXT NOT NULL,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )");
        return $pdo;
    } catch (Exception $e) {
        return null; // Graceful fallback to data/portfolio_data.json
    }
}

function load_portfolio_state() {
    $pdo = get_db_connection();
    if ($pdo) {
        try {
            $stmt = $pdo->query("SELECT `json_payload` FROM `portfolio_store` WHERE `id` = 1 LIMIT 1");
            $row = $stmt->fetch();
            if ($row && !empty($row['json_payload'])) {
                $decoded = json_decode($row['json_payload'], true);
                if (is_array($decoded)) return $decoded;
            }
        } catch (Exception $e) {}
    }
    if (file_exists(DATA_JSON_FILE)) {
        $raw = file_get_contents(DATA_JSON_FILE);
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) return $decoded;
    }
    return null;
}

function save_portfolio_state($data_array) {
    $json = json_encode($data_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if (!is_dir(dirname(DATA_JSON_FILE))) {
        mkdir(dirname(DATA_JSON_FILE), 0775, true);
    }
    file_put_contents(DATA_JSON_FILE, $json);
    $pdo = get_db_connection();
    if ($pdo) {
        try {
            $stmt = $pdo->prepare("INSERT INTO `portfolio_store` (`id`, `json_payload`) VALUES (1, :payload)
                                   ON DUPLICATE KEY UPDATE `json_payload` = :payload2");
            $stmt->execute([':payload' => $json, ':payload2' => $json]);
        } catch (Exception $e) {}
    }
    return true;
}
?>