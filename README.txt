# Cyclops Lab V1 — Jungle Edition

Buka `index.html` melalui browser/hosting. Upload semua berkas dalam satu folder supaya PWA berjalan lewat HTTPS. Untuk pemakaian offline pertama, halaman dan ikon lokal dicache setelah instalasi service worker; gambar hero/item eksternal hanya tersedia offline jika pernah dimuat dan di-cache.

- Pilih maksimum 5 musuh dan 4 rekan tim. Cyclops tidak bisa dipilih karena ia sudah menjadi hero utama.
- Inti build: sepatu adaptif + Enchanted Talisman + Concentrated Energy.
- Tiga item sisanya dipilih berdasarkan prediksi draft (healing, HP, kemungkinan magic defense, mobilitas, dive).
- Refresh urutan: membandingkan prioritas counter lebih awal vs damage lebih awal tanpa mengganti item.
- Jika Winter Crown direkomendasikan, item bertitik biru bisa diklik untuk beralih Winter Crown ↔ alternatif damage. Default adalah alternatif damage.
- Mage Emblem: Inspire / Festival of Blood / Impure Rage (statis). Spell: Retribution (statis).
- Prediksi dibuat berbasis profil 133 hero dari Gord Lab per 11 Nov 2026; bukan pembacaan item real-time atau jaminan statistik paling optimal.
- Semua asset gambar hero/item mengambil URL sumber yang sama dengan Gord Lab. Ikon aplikasi adalah placeholder lokal yang boleh diganti.
