import type { FeedCard } from './feedData';

export const enrichedFeedCards1: FeedCard[] = [
  // ===== PENGANTAR AKUNTANSI & BISNIS (10 cards) =====

  // 1. Quiz — siklus akuntansi
  {
    id: 'enrich-pa-01',
    type: 'quiz',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Urutan Siklus Akuntansi',
    content: 'Manakah urutan siklus akuntansi yang benar?',
    options: [
      'Analisis transaksi → jurnal umum → buku besar → neraca saldo → laporan keuangan',
      'Buku besar → jurnal umum → neraca saldo → laporan keuangan → analisis transaksi',
      'Jurnal umum → analisis transaksi → neraca saldo → buku besar → laporan keuangan',
      'Neraca saldo → jurnal umum → buku besar → laporan keuangan → analisis transaksi',
    ],
    correctIndex: 0,
    explanation:
      'Siklus akuntansi dimulai dari analisis transaksi, kemudian pencatatan ke jurnal umum, posting ke buku besar, penyusunan neraca saldo, jurnal penyesuaian, dan diakhiri penyusunan laporan keuangan serta jurnal penutup.',
  },

  // 2. Quiz — jurnal umum debit/kredit
  {
    id: 'enrich-pa-02',
    type: 'quiz',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Aturan Debit dan Kredit',
    content:
      'Perusahaan membeli perlengkapan senilai Rp5.000.000 secara tunai. Bagaimana jurnal yang benar?',
    options: [
      'Debit Perlengkapan Rp5.000.000 | Kredit Kas Rp5.000.000',
      'Kredit Perlengkapan Rp5.000.000 | Debit Kas Rp5.000.000',
      'Debit Kas Rp5.000.000 | Kredit Perlengkapan Rp5.000.000',
      'Debit Beban Perlengkapan Rp5.000.000 | Kredit Utang Rp5.000.000',
    ],
    correctIndex: 0,
    explanation:
      'Perlengkapan adalah aset, bertambah di sisi debit. Kas adalah aset, berkurang di sisi kredit. Jurnal: Debit Perlengkapan Rp5.000.000 dan Kredit Kas Rp5.000.000.',
  },

  // 3. Quiz — persamaan akuntansi A=L+E
  {
    id: 'enrich-pa-03',
    type: 'quiz',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Persamaan Akuntansi A = L + E',
    content:
      'Jika total aset suatu perusahaan Rp120.000.000 dan total liabilitas Rp45.000.000, berapakah ekuitas pemilik?',
    options: [
      'Rp75.000.000',
      'Rp165.000.000',
      'Rp45.000.000',
      'Rp120.000.000',
    ],
    correctIndex: 0,
    explanation:
      'Dari persamaan A = L + E, maka E = A - L = Rp120.000.000 - Rp45.000.000 = Rp75.000.000.',
  },

  // 4. Quiz — buku besar & neraca saldo
  {
    id: 'enrich-pa-04',
    type: 'quiz',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Fungsi Neraca Saldo',
    content: 'Apa tujuan utama penyusunan neraca saldo (trial balance)?',
    options: [
      'Memverifikasi bahwa total debit sama dengan total kredit setelah posting',
      'Menyajikan posisi keuangan perusahaan kepada investor',
      'Menghitung laba bersih perusahaan dalam suatu periode',
      'Mencatat semua transaksi yang belum diakui secara akrual',
    ],
    correctIndex: 0,
    explanation:
      'Neraca saldo adalah daftar seluruh akun beserta saldonya yang digunakan untuk memverifikasi bahwa total saldo debit sama dengan total saldo kredit setelah semua transaksi diposting ke buku besar. Keseimbangan ini merupakan syarat dasar double-entry bookkeeping.',
  },

  // 5. Quiz — laporan arus kas
  {
    id: 'enrich-pa-05',
    type: 'quiz',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Klasifikasi Arus Kas',
    content:
      'Pembelian mesin produksi senilai Rp200.000.000 secara tunai akan diklasifikasikan dalam laporan arus kas sebagai arus kas dari aktivitas apa?',
    options: [
      'Aktivitas investasi (arus kas keluar)',
      'Aktivitas operasi (arus kas keluar)',
      'Aktivitas pendanaan (arus kas keluar)',
      'Aktivitas investasi (arus kas masuk)',
    ],
    correctIndex: 0,
    explanation:
      'Pembelian aset tetap seperti mesin produksi termasuk aktivitas investasi karena menyangkut perolehan atau pelepasan aset jangka panjang. Karena kas keluar, maka merupakan arus kas keluar dari aktivitas investasi.',
  },

  // 6. Quiz — akrual vs kas
  {
    id: 'enrich-pa-06',
    type: 'quiz',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Akrual vs Kas — Pengakuan Pendapatan',
    content:
      'Pada Oktober 2024 perusahaan menyelesaikan jasa dan mengirim faktur Rp30.000.000 kepada klien, namun pembayaran diterima Januari 2025. Kapan pendapatan diakui menurut basis akrual?',
    options: [
      'Oktober 2024, saat jasa diselesaikan dan faktur dikirim',
      'Januari 2025, saat kas diterima',
      'Dibagi rata antara Oktober 2024 dan Januari 2025',
      'Desember 2024, pada akhir tahun fiskal',
    ],
    correctIndex: 0,
    explanation:
      'Basis akrual mengakui pendapatan saat jasa diselesaikan (earned), bukan saat kas diterima. Oleh karena itu pendapatan Rp30.000.000 diakui pada Oktober 2024. Basis kas sebaliknya akan mengakui di Januari 2025.',
  },

  // 7. Quiz — aktivitas arus kas operasi
  {
    id: 'enrich-pa-07',
    type: 'quiz',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Arus Kas Aktivitas Operasi',
    content:
      'Manakah dari berikut ini yang termasuk arus kas dari aktivitas operasi?',
    options: [
      'Penerimaan kas dari pelanggan atas penjualan barang',
      'Pembayaran untuk membeli gedung kantor baru',
      'Penerimaan dari penerbitan obligasi',
      'Pembayaran dividen kepada pemegang saham',
    ],
    correctIndex: 0,
    explanation:
      'Aktivitas operasi mencakup kas yang terkait dengan kegiatan utama bisnis, termasuk penerimaan dari pelanggan dan pembayaran ke pemasok. Pembelian gedung adalah investasi, penerbitan obligasi adalah pendanaan, dan pembayaran dividen umumnya diklasifikasikan sebagai aktivitas pendanaan.',
  },

  // 8. Flashcard — definisi debit/kredit
  {
    id: 'enrich-pa-08',
    type: 'flashcard',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Aturan Normal Saldo Akun',
    content:
      'Sebutkan saldo normal (debit atau kredit) untuk masing-masing kelompok akun: Aset, Liabilitas, Ekuitas, Pendapatan, dan Beban.',
    answer:
      'Aset: saldo normal Debit. Liabilitas: saldo normal Kredit. Ekuitas: saldo normal Kredit. Pendapatan: saldo normal Kredit. Beban: saldo normal Debit. Akronim bantu: DEAD CLIC (Debit = Expenses, Assets, Dividends; Credit = Liabilities, Income, Capital).',
  },

  // 9. Flashcard — buku besar
  {
    id: 'enrich-pa-09',
    type: 'flashcard',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Pengertian Buku Besar',
    content: 'Apa yang dimaksud dengan buku besar (general ledger) dan apa fungsinya dalam siklus akuntansi?',
    answer:
      'Buku besar adalah kumpulan seluruh akun yang digunakan perusahaan, tempat setiap transaksi dari jurnal umum diposting. Fungsinya adalah merekam perubahan saldo setiap akun secara kronologis sehingga dapat dilihat saldo akhir masing-masing akun sebagai dasar penyusunan neraca saldo.',
  },

  // 10. Flashcard — laporan arus kas tiga seksi
  {
    id: 'enrich-pa-10',
    type: 'flashcard',
    subject: 'Pengantar Akuntansi & Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Tiga Seksi Laporan Arus Kas',
    content:
      'Sebutkan dan jelaskan secara singkat tiga seksi dalam laporan arus kas beserta contoh masing-masing.',
    answer:
      'Aktivitas Operasi: arus kas dari kegiatan utama bisnis, contoh: penerimaan dari pelanggan, pembayaran ke pemasok. Aktivitas Investasi: perolehan atau pelepasan aset jangka panjang, contoh: pembelian mesin, penjualan investasi. Aktivitas Pendanaan: transaksi dengan pemilik dan kreditur, contoh: penerbitan saham, pembayaran utang bank, pembayaran dividen.',
  },

  // ===== AKUNTANSI KEUANGAN DASAR (10 cards) =====

  // 1. Quiz — aset tetap perolehan
  {
    id: 'enrich-akd-01',
    type: 'quiz',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Harga Perolehan Aset Tetap',
    content:
      'Perusahaan membeli mesin seharga Rp80.000.000, biaya pengiriman Rp3.000.000, biaya instalasi Rp2.000.000, dan biaya pelatihan operator Rp1.500.000. Berapakah harga perolehan mesin yang dicatat?',
    options: [
      'Rp85.000.000',
      'Rp86.500.000',
      'Rp80.000.000',
      'Rp83.000.000',
    ],
    correctIndex: 0,
    explanation:
      'Harga perolehan aset tetap mencakup semua biaya yang diperlukan untuk menempatkan aset pada lokasi dan kondisi siap digunakan: harga beli Rp80.000.000 + pengiriman Rp3.000.000 + instalasi Rp2.000.000 = Rp85.000.000. Biaya pelatihan operator tidak dikapitalisasi karena bersifat rutin dan tidak melekat pada aset.',
  },

  // 2. Quiz — penyusutan garis lurus
  {
    id: 'enrich-akd-02',
    type: 'quiz',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Metode Penyusutan Garis Lurus',
    content:
      'Sebuah kendaraan dibeli seharga Rp120.000.000 dengan nilai residu Rp20.000.000 dan umur manfaat 5 tahun. Berapakah beban penyusutan per tahun dengan metode garis lurus?',
    options: [
      'Rp20.000.000',
      'Rp24.000.000',
      'Rp100.000.000',
      'Rp16.000.000',
    ],
    correctIndex: 0,
    explanation:
      'Metode garis lurus: (Harga perolehan - Nilai residu) / Umur manfaat = (Rp120.000.000 - Rp20.000.000) / 5 = Rp100.000.000 / 5 = Rp20.000.000 per tahun.',
  },

  // 3. Quiz — penyusutan saldo menurun
  {
    id: 'enrich-akd-03',
    type: 'quiz',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Metode Penyusutan Saldo Menurun Ganda',
    content:
      'Mesin dengan harga perolehan Rp60.000.000, nilai residu Rp6.000.000, dan umur manfaat 5 tahun disusutkan dengan metode saldo menurun ganda (double-declining balance). Berapakah beban penyusutan tahun pertama?',
    options: [
      'Rp24.000.000',
      'Rp10.800.000',
      'Rp12.000.000',
      'Rp20.000.000',
    ],
    correctIndex: 0,
    explanation:
      'Tarif garis lurus = 1/5 = 20%, tarif DDB = 2 x 20% = 40%. Tahun 1: Rp60.000.000 x 40% = Rp24.000.000. Metode DDB mengabaikan nilai residu dalam perhitungan, namun penyusutan dihentikan bila nilai buku mencapai nilai residu.',
  },

  // 4. Quiz — FIFO vs rata-rata tertimbang
  {
    id: 'enrich-akd-04',
    type: 'quiz',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Metode FIFO vs Rata-Rata Tertimbang',
    content:
      'Dalam kondisi harga persediaan yang terus naik, metode FIFO menghasilkan nilai persediaan akhir yang bagaimana dibandingkan metode rata-rata tertimbang?',
    options: [
      'Lebih tinggi, karena persediaan yang tersisa dinilai dengan harga pembelian terbaru',
      'Lebih rendah, karena biaya pokok penjualan menggunakan harga terbaru yang lebih mahal',
      'Sama, karena total biaya yang tersedia dijual tidak berbeda',
      'Lebih rendah, karena harga lama yang lebih murah digunakan untuk persediaan akhir',
    ],
    correctIndex: 0,
    explanation:
      'Dengan FIFO, barang yang lebih lama (murah) dijual terlebih dahulu. Saat harga naik, sisa persediaan akhir dinilai dengan harga pembelian paling baru (mahal), sehingga nilai persediaan akhir lebih tinggi daripada rata-rata tertimbang. Akibatnya HPP lebih rendah dan laba lebih tinggi.',
  },

  // 5. Quiz — LCNRV persediaan
  {
    id: 'enrich-akd-05',
    type: 'quiz',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'LCNRV — Penilaian Persediaan',
    content:
      'Persediaan barang dagang tercatat Rp50.000.000 (harga perolehan). Nilai realisasi neto (NRV) diestimasi Rp44.000.000. Bagaimana persediaan harus dilaporkan?',
    options: [
      'Rp44.000.000, karena persediaan dilaporkan pada nilai lebih rendah antara harga perolehan dan NRV',
      'Rp50.000.000, karena persediaan selalu dicatat pada harga perolehan historis',
      'Rp47.000.000, rata-rata antara harga perolehan dan NRV',
      'Rp44.000.000 hanya jika penurunan bersifat permanen',
    ],
    correctIndex: 0,
    explanation:
      'PSAK 14 mensyaratkan persediaan diukur pada nilai yang lebih rendah antara harga perolehan dan nilai realisasi neto (Lower of Cost or Net Realizable Value — LCNRV). Karena NRV Rp44.000.000 < harga perolehan Rp50.000.000, persediaan dilaporkan Rp44.000.000, dengan kerugian penurunan nilai Rp6.000.000 dibebankan ke laporan laba rugi.',
  },

  // 6. Quiz — piutang usaha & penyisihan
  {
    id: 'enrich-akd-06',
    type: 'quiz',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Metode Penyisihan Piutang Tak Tertagih',
    content:
      'Sebuah perusahaan memiliki saldo piutang usaha Rp200.000.000 dan mengestimasi 3% tidak akan tertagih. Saldo penyisihan piutang ragu-ragu saat ini Rp1.000.000 (kredit). Berapa beban piutang tak tertagih yang diakui?',
    options: [
      'Rp5.000.000',
      'Rp6.000.000',
      'Rp1.000.000',
      'Rp7.000.000',
    ],
    correctIndex: 0,
    explanation:
      'Estimasi penyisihan yang diperlukan = 3% x Rp200.000.000 = Rp6.000.000. Saldo penyisihan yang sudah ada = Rp1.000.000 (kredit). Beban yang diakui = Rp6.000.000 - Rp1.000.000 = Rp5.000.000. Jurnal: Debit Beban Piutang Tak Tertagih Rp5.000.000 | Kredit Penyisihan Piutang Rp5.000.000.',
  },

  // 7. Quiz — aging schedule
  {
    id: 'enrich-akd-07',
    type: 'quiz',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'lanjutan',
    title: 'Analisis Umur Piutang (Aging Schedule)',
    content:
      'Apa tujuan utama penyusunan aging schedule (analisis umur piutang)?',
    options: [
      'Mengestimasi jumlah piutang yang tidak akan tertagih berdasarkan lamanya piutang beredar',
      'Menghitung total pendapatan yang belum diterima dari seluruh pelanggan',
      'Menyajikan daftar seluruh pelanggan beserta batas kredit masing-masing',
      'Menentukan diskon yang diberikan kepada pelanggan yang membayar lebih cepat',
    ],
    correctIndex: 0,
    explanation:
      'Aging schedule mengelompokkan piutang usaha berdasarkan usia (misalnya: 0-30 hari, 31-60 hari, 61-90 hari, >90 hari). Setiap kelompok diberi persentase estimasi tidak tertagih yang berbeda — semakin tua piutang, semakin besar persentasenya. Hasilnya digunakan untuk menentukan saldo penyisihan piutang tak tertagih yang diperlukan.',
  },

  // 8. Flashcard — kapitalisasi vs beban
  {
    id: 'enrich-akd-08',
    type: 'flashcard',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Kapitalisasi vs Pembebanan Pengeluaran Aset Tetap',
    content:
      'Apa perbedaan antara pengeluaran yang dikapitalisasi (capital expenditure) dan pengeluaran yang langsung dibebankan (revenue expenditure) pada aset tetap? Berikan contoh masing-masing.',
    answer:
      'Capital expenditure (dikapitalisasi): pengeluaran yang meningkatkan kapasitas, memperpanjang umur manfaat, atau meningkatkan kualitas aset secara signifikan. Dicatat sebagai penambah nilai aset tetap. Contoh: penggantian mesin inti yang meningkatkan kapasitas produksi 30%. Revenue expenditure (langsung dibebankan): pengeluaran rutin untuk mempertahankan kondisi normal aset. Contoh: biaya servis berkala kendaraan, penggantian suku cadang kecil.',
  },

  // 9. Flashcard — FIFO persediaan
  {
    id: 'enrich-akd-09',
    type: 'flashcard',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Asumsi Arus Biaya FIFO',
    content:
      'Jelaskan asumsi arus biaya metode FIFO (First-In, First-Out) dan bagaimana pengaruhnya terhadap HPP dan persediaan akhir.',
    answer:
      'FIFO mengasumsikan barang yang pertama masuk (dibeli/diproduksi) adalah yang pertama keluar (dijual). Akibatnya: Harga Pokok Penjualan (HPP) mencerminkan harga pembelian paling lama. Persediaan akhir mencerminkan harga pembelian paling baru. Saat harga naik: HPP lebih rendah, laba lebih tinggi, persediaan akhir lebih tinggi dibanding rata-rata tertimbang.',
  },

  // 10. Flashcard — metode penyisihan
  {
    id: 'enrich-akd-10',
    type: 'flashcard',
    subject: 'Akuntansi Keuangan Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Metode Penyisihan vs Metode Penghapusan Langsung',
    content:
      'Apa perbedaan mendasar antara metode penyisihan (allowance method) dan metode penghapusan langsung (direct write-off method) untuk piutang tak tertagih?',
    answer:
      'Metode Penyisihan: membentuk estimasi piutang tak tertagih di akhir periode melalui akun kontra "Penyisihan Piutang Tak Tertagih". Mengakui beban di periode yang sama dengan pendapatan (matching principle). Digunakan sesuai PSAK dan GAAP. Metode Penghapusan Langsung: beban hanya diakui saat piutang benar-benar dinyatakan tidak tertagih. Melanggar prinsip matching, tidak diperkenankan untuk pelaporan GAAP kecuali jumlahnya tidak material.',
  },
];
