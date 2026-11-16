<?php
session_start();
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'mujahithweb_db';

$pdo = null;
try {
    $pdo = new PDO("mysql:host=$db_host;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$db_name` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `$db_name`");
    $pdo->exec("CREATE TABLE IF NOT EXISTS `portfolio_state` (
        `id` INT PRIMARY KEY DEFAULT 1,
        `state_json` LONGTEXT NOT NULL,
        `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )");
    $pdo->exec("CREATE TABLE IF NOT EXISTS `admin_users` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `username` VARCHAR(64) UNIQUE NOT NULL,
        `password_hash` VARCHAR(255) NOT NULL
    )");
    $stmt = $pdo->query("SELECT COUNT(*) FROM `admin_users`");
    if ($stmt->fetchColumn() == 0) {
        $hash = password_hash('Mujahith@2026', PASSWORD_DEFAULT);
        $ins = $pdo->prepare("INSERT INTO `admin_users` (`username`, `password_hash`) VALUES ('admin', ?)");
        $ins->execute([$hash]);
    }
} catch (Exception $e) {
    $pdo = null;
}
?>
