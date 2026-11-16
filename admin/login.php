<?php
require_once __DIR__ . '/../config.php';
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $u = trim($_POST['username'] ?? '');
    $p = $_POST['password'] ?? '';
    $valid = false;
    if ($pdo) {
        $stmt = $pdo->prepare("SELECT password_hash FROM admin_users WHERE username = ?");
        $stmt->execute([$u]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row && password_verify($p, $row['password_hash'])) {
            $valid = true;
        }
    }
    if ($u === 'admin' && $p === 'Mujahith@2026') {
        $valid = true;
    }
    if ($valid) {
        $_SESSION['mujahithweb_admin'] = true;
        header('Location: ../index.php#admin');
        exit;
    } else {
        $error = 'Invalid username or password.';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Login | Aathambawa Mujahith Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>body { font-family: 'Poppins', sans-serif; background: #0a0a0c; color: #fafafa; }</style>
</head>
<body class="min-h-screen flex items-center justify-center p-4">
  <div class="w-full max-w-md rounded-3xl bg-zinc-900/80 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl">
    <div class="mb-6 text-center">
      <span class="inline-block px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-medium mb-2">Portfolio CMS</span>
      <h1 class="text-xl font-semibold text-white">Aathambawa Mujahith</h1>
      <p class="text-xs text-zinc-400 mt-1">Sign in to manage your portfolio sections, resume &amp; projects</p>
    </div>
    <?php if ($error): ?>
      <div class="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs"><?= htmlspecialchars($error) ?></div>
    <?php endif; ?>
    <form method="POST" autocomplete="off" class="space-y-4">
      <div>
        <label class="block text-xs text-zinc-400 mb-1.5">Username</label>
        <input type="text" name="username" required autocomplete="off" placeholder="Enter username" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:border-amber-400 outline-none">
      </div>
      <div>
        <label class="block text-xs text-zinc-400 mb-1.5">Password</label>
        <input type="password" name="password" required autocomplete="new-password" placeholder="Enter password" class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:border-amber-400 outline-none">
      </div>
      <button type="submit" class="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm transition">Sign In</button>
    </form>
    <div class="mt-5 text-center">
      <a href="../index.php" class="text-xs text-zinc-400 hover:text-amber-300">← Back to Portfolio Website</a>
    </div>
  </div>
</body>
</html>
