import type { FormalChapter } from './formalData';

// =============================================
// PENGANTAR AKUNTANSI & BISNIS — Extra Chapters
// =============================================

export const pengantarAkuntansiExtraChapters: FormalChapter[] = [
  {
    id: 'pengantar-siklus-akuntansi',
    title: 'Siklus Akuntansi Lengkap',
    description: 'Siklus akuntansi adalah serangkaian proses yang dilalui setiap periode akuntansi mulai dari identifikasi transaksi hingga penyusunan laporan keuangan dan penutupan buku. Pemahaman menyeluruh atas siklus ini merupakan kompetensi dasar yang diuji dalam ujian CAFB.',
    sections: [
      {
        id: 'siklus-gambaran-umum',
        title: 'Gambaran Umum Siklus Akuntansi',
        content: 'Siklus akuntansi dimulai dari identifikasi dan analisis transaksi, kemudian pencatatan ke dalam jurnal umum atau jurnal khusus, pemindahbukuan ke buku besar, penyusunan neraca saldo sebelum penyesuaian, pembuatan jurnal penyesuaian, neraca saldo setelah penyesuaian, penyusunan laporan keuangan, serta diakhiri dengan jurnal penutup dan neraca saldo setelah penutupan. Setiap langkah bersifat berurutan dan saling berkaitan sehingga kesalahan di satu tahap akan berdampak pada tahap berikutnya.',
        steps: [
          'Identifikasi dan analisis transaksi bisnis berdasarkan bukti/dokumen sumber.',
          'Pencatatan transaksi dalam jurnal (penjurnalan / journalizing).',
          'Pemindahbukuan dari jurnal ke buku besar (posting to ledger).',
          'Penyusunan neraca saldo sebelum penyesuaian (unadjusted trial balance).',
          'Penyusunan dan pencatatan jurnal penyesuaian (adjusting entries).',
          'Penyusunan neraca saldo setelah penyesuaian (adjusted trial balance).',
          'Penyusunan laporan keuangan: laporan laba rugi, laporan perubahan ekuitas, neraca, dan laporan arus kas.',
          'Pencatatan jurnal penutup (closing entries) untuk menutup akun sementara.',
          'Penyusunan neraca saldo setelah penutupan (post-closing trial balance).',
        ],
        diagram: 'Transaksi -> Jurnal -> Buku Besar -> Neraca Saldo -> Penyesuaian -> Laporan Keuangan -> Jurnal Penutup -> Neraca Saldo Penutup',
      },
      {
        id: 'siklus-jurnal-buku-besar',
        title: 'Jurnal dan Buku Besar',
        content: 'Jurnal umum adalah catatan kronologis transaksi yang menunjukkan akun-akun yang didebet dan dikredit beserta jumlahnya. Setelah penjurnalan, setiap entri dipindahbukukan ke buku besar (general ledger) yang merupakan kumpulan seluruh akun yang digunakan perusahaan. Buku besar memperlihatkan saldo akun secara individual sehingga memudahkan penyusunan neraca saldo.',
        tables: [
          {
            caption: 'Contoh Format Jurnal Umum',
            headers: ['Tanggal', 'Keterangan', 'Ref', 'Debet (Rp)', 'Kredit (Rp)'],
            rows: [
              ['01/01/2025', 'Kas', '101', '50.000.000', ''],
              ['', '  Modal Pemilik', '301', '', '50.000.000'],
              ['', '(Setoran modal awal)', '', '', ''],
              ['05/01/2025', 'Perlengkapan', '120', '3.000.000', ''],
              ['', '  Kas', '101', '', '3.000.000'],
              ['', '(Pembelian perlengkapan tunai)', '', '', ''],
            ],
          },
        ],
        rules: [
          'Total debet harus selalu sama dengan total kredit dalam setiap entri jurnal.',
          'Pemindahbukuan dilakukan dengan memindahkan jumlah debet ke sisi debet akun buku besar, dan jumlah kredit ke sisi kredit akun buku besar.',
          'Nomor referensi digunakan untuk menghubungkan entri jurnal dengan pos di buku besar dan sebaliknya.',
        ],
      },
      {
        id: 'siklus-neraca-saldo',
        title: 'Neraca Saldo dan Penyesuaian',
        content: 'Neraca saldo (trial balance) disusun setelah semua transaksi diposting ke buku besar. Neraca saldo berfungsi memverifikasi bahwa total debet sama dengan total kredit, namun tidak menjamin bahwa semua transaksi telah dicatat dengan benar. Jurnal penyesuaian kemudian dibuat untuk mencatat pendapatan yang telah diperoleh tetapi belum dicatat, beban yang telah terjadi tetapi belum dicatat, serta alokasi biaya dibayar di muka dan pendapatan diterima di muka.',
        tables: [
          {
            caption: 'Jenis-Jenis Jurnal Penyesuaian',
            headers: ['Jenis', 'Contoh', 'Debet', 'Kredit'],
            rows: [
              ['Beban masih harus dibayar (accrued expense)', 'Bunga terutang', 'Beban Bunga', 'Utang Bunga'],
              ['Pendapatan masih harus diterima (accrued revenue)', 'Jasa belum ditagih', 'Piutang Usaha', 'Pendapatan Jasa'],
              ['Biaya dibayar di muka (prepaid expense)', 'Asuransi dibayar di muka', 'Beban Asuransi', 'Asuransi Dibayar Di Muka'],
              ['Pendapatan diterima di muka (unearned revenue)', 'Uang muka pelanggan', 'Pendapatan Diterima Di Muka', 'Pendapatan Jasa'],
              ['Penyusutan aset tetap', 'Depresiasi gedung', 'Beban Penyusutan', 'Akumulasi Penyusutan'],
            ],
          },
        ],
        notes: [
          'Neraca saldo yang seimbang hanya membuktikan keseimbangan matematis debet-kredit, bukan kebenaran substansi pencatatan.',
          'Jurnal penyesuaian diperlukan agar laporan keuangan sesuai dengan prinsip akrual (accrual basis).',
        ],
      },
      {
        id: 'siklus-jurnal-penutup',
        title: 'Jurnal Penutup dan Neraca Saldo Penutup',
        content: 'Jurnal penutup (closing entries) dibuat pada akhir periode untuk menutup semua akun sementara (nominal), yaitu akun pendapatan, beban, dan prive/dividen, sehingga saldo akun-akun tersebut menjadi nol dan siap digunakan untuk periode berikutnya. Saldo bersih dari akun-akun sementara dipindahkan ke akun Modal (untuk perusahaan perseorangan) atau Laba Ditahan (untuk perseroan). Setelah jurnal penutup diposting, disusun neraca saldo setelah penutupan yang hanya berisi akun-akun riil (aset, liabilitas, ekuitas).',
        steps: [
          'Debet seluruh akun pendapatan, kredit Ikhtisar Laba Rugi.',
          'Kredit seluruh akun beban, debet Ikhtisar Laba Rugi.',
          'Tutup Ikhtisar Laba Rugi ke akun Modal atau Laba Ditahan.',
          'Tutup akun Prive/Dividen ke akun Modal atau Laba Ditahan.',
          'Susun neraca saldo setelah penutupan untuk memverifikasi saldo akun riil.',
        ],
        rules: [
          'Akun riil (aset, liabilitas, ekuitas) tidak ditutup karena saldo dibawa ke periode berikutnya.',
          'Akun nominal (pendapatan, beban, prive) harus ditutup setiap akhir periode akuntansi.',
        ],
      },
    ],
  },
  {
    id: 'pengantar-persamaan-akuntansi',
    title: 'Persamaan Akuntansi dan Analisis Transaksi',
    description: 'Persamaan akuntansi merupakan landasan sistem pembukuan berpasangan (double-entry bookkeeping). Setiap transaksi bisnis dianalisis dampaknya terhadap aset, liabilitas, dan ekuitas untuk memastikan persamaan akuntansi selalu seimbang.',
    sections: [
      {
        id: 'persamaan-dasar',
        title: 'Persamaan Akuntansi Dasar',
        content: 'Persamaan akuntansi menyatakan bahwa total aset suatu entitas selalu sama dengan total klaim atas aset tersebut, yang terdiri dari klaim kreditor (liabilitas) dan klaim pemilik (ekuitas). Persamaan ini adalah fondasi dari seluruh sistem akuntansi dan harus selalu seimbang setelah setiap transaksi dicatat.',
        formula: 'Aset = Liabilitas + Ekuitas',
        rules: [
          'Setiap transaksi memengaruhi minimal dua akun dalam persamaan akuntansi.',
          'Persamaan akuntansi harus tetap seimbang setelah setiap transaksi.',
          'Ekuitas pemilik bertambah akibat setoran modal dan laba bersih, berkurang akibat prive dan rugi bersih.',
        ],
      },
      {
        id: 'persamaan-analisis-transaksi',
        title: 'Analisis Pengaruh Transaksi',
        content: 'Setiap transaksi bisnis dianalisis dengan menentukan akun-akun yang terpengaruh, apakah bertambah atau berkurang, dan sisi mana (debet atau kredit) yang mencatatnya. Aset dan beban bertambah di sisi debet; liabilitas, ekuitas, dan pendapatan bertambah di sisi kredit.',
        tables: [
          {
            caption: 'Aturan Debet dan Kredit',
            headers: ['Kelompok Akun', 'Saldo Normal', 'Bertambah', 'Berkurang'],
            rows: [
              ['Aset', 'Debet', 'Debet', 'Kredit'],
              ['Liabilitas', 'Kredit', 'Kredit', 'Debet'],
              ['Ekuitas / Modal', 'Kredit', 'Kredit', 'Debet'],
              ['Pendapatan', 'Kredit', 'Kredit', 'Debet'],
              ['Beban', 'Debet', 'Debet', 'Kredit'],
              ['Prive / Dividen', 'Debet', 'Debet', 'Kredit'],
            ],
          },
        ],
        examples: [
          'Contoh 1 — Pembelian kendaraan tunai Rp200 juta: Kendaraan (Aset) bertambah Rp200 juta (Debet), Kas (Aset) berkurang Rp200 juta (Kredit). Total aset tidak berubah.',
          'Contoh 2 — Pinjaman bank Rp500 juta: Kas (Aset) bertambah Rp500 juta (Debet), Utang Bank (Liabilitas) bertambah Rp500 juta (Kredit).',
          'Contoh 3 — Pendapatan jasa diterima tunai Rp50 juta: Kas (Aset) bertambah Rp50 juta (Debet), Pendapatan Jasa (Pendapatan) bertambah Rp50 juta (Kredit).',
        ],
      },
      {
        id: 'persamaan-akun-t',
        title: 'Akun T dan Saldo Normal',
        content: 'Akun T adalah representasi sederhana sebuah akun buku besar yang memiliki sisi debet (kiri) dan sisi kredit (kanan). Saldo normal suatu akun adalah sisi di mana akun tersebut biasanya memiliki saldo akhir, sesuai dengan kelompok akun dalam persamaan akuntansi. Memahami saldo normal sangat penting untuk mendeteksi kesalahan pencatatan.',
        notes: [
          'Akun aset, beban, dan prive memiliki saldo normal debet.',
          'Akun liabilitas, ekuitas, dan pendapatan memiliki saldo normal kredit.',
          'Saldo kontra (contra account) memiliki saldo normal berlawanan dengan akun induknya, contoh: Akumulasi Penyusutan bersaldo normal kredit meskipun termasuk kelompok aset.',
        ],
      },
    ],
  },
  {
    id: 'pengantar-laporan-arus-kas',
    title: 'Laporan Arus Kas',
    description: 'Laporan arus kas menyajikan informasi tentang penerimaan dan pengeluaran kas suatu entitas selama satu periode. Laporan ini dibagi menjadi tiga aktivitas: operasi, investasi, dan pendanaan, serta dapat disusun menggunakan metode langsung atau tidak langsung.',
    sections: [
      {
        id: 'lak-tujuan-klasifikasi',
        title: 'Tujuan dan Klasifikasi Arus Kas',
        content: 'Laporan arus kas memberikan informasi yang membantu pengguna mengevaluasi kemampuan entitas menghasilkan kas dan setara kas, serta kebutuhan entitas untuk menggunakan arus kas tersebut. Arus kas diklasifikasikan menjadi tiga aktivitas agar pengguna dapat memahami sumber dan penggunaan kas secara lebih rinci.',
        tables: [
          {
            caption: 'Klasifikasi Aktivitas dalam Laporan Arus Kas',
            headers: ['Aktivitas', 'Definisi', 'Contoh Arus Masuk', 'Contoh Arus Keluar'],
            rows: [
              ['Operasi', 'Aktivitas utama penghasil pendapatan entitas', 'Penerimaan dari pelanggan, penerimaan bunga/dividen (metode langsung)', 'Pembayaran ke pemasok, pembayaran gaji, pembayaran pajak'],
              ['Investasi', 'Perolehan dan pelepasan aset jangka panjang', 'Penjualan aset tetap, penjualan investasi', 'Pembelian aset tetap, pembelian investasi'],
              ['Pendanaan', 'Perubahan struktur modal dan pinjaman', 'Penerimaan dari penerbitan saham, penerimaan pinjaman', 'Pembayaran dividen, pelunasan utang, pembelian kembali saham'],
            ],
          },
        ],
        rules: [
          'Setara kas (cash equivalents) adalah investasi jangka pendek yang sangat likuid, dengan jatuh tempo tidak lebih dari tiga bulan sejak tanggal perolehan.',
          'Transaksi non-kas yang signifikan (misal: konversi utang menjadi saham) diungkapkan dalam catatan atas laporan keuangan, bukan dalam laporan arus kas.',
        ],
      },
      {
        id: 'lak-metode-langsung',
        title: 'Metode Langsung (Direct Method)',
        content: 'Metode langsung menyajikan kelompok utama penerimaan kas bruto dan pengeluaran kas bruto dari aktivitas operasi. Metode ini lebih informatif karena menunjukkan secara eksplisit dari mana kas diterima dan untuk apa kas dikeluarkan dalam kegiatan operasional. Meskipun PSAK 2 menganjurkan metode langsung, metode tidak langsung lebih banyak digunakan dalam praktik.',
        steps: [
          'Hitung penerimaan kas dari pelanggan: Penjualan + Penurunan piutang (atau - Kenaikan piutang).',
          'Hitung pembayaran kas kepada pemasok: HPP + Kenaikan persediaan - Kenaikan utang usaha.',
          'Hitung pembayaran kas untuk beban operasi: Beban operasi +/- Perubahan beban dibayar di muka dan utang beban.',
          'Hitung pembayaran pajak penghasilan secara terpisah.',
          'Sajikan total arus kas bersih dari aktivitas operasi.',
        ],
        formula: 'Penerimaan dari Pelanggan = Penjualan Bersih + Penurunan Piutang Usaha (atau - Kenaikan Piutang Usaha)',
      },
      {
        id: 'lak-metode-tidak-langsung',
        title: 'Metode Tidak Langsung (Indirect Method)',
        content: 'Metode tidak langsung memulai penyusunan arus kas operasi dari laba bersih kemudian melakukan rekonsiliasi dengan menyesuaikan pos-pos non-kas dan perubahan modal kerja. Pos-pos non-kas yang harus ditambahkan kembali ke laba bersih antara lain penyusutan, amortisasi, dan kerugian penjualan aset. Perubahan modal kerja (aset lancar dan liabilitas lancar) juga disesuaikan untuk mendapatkan arus kas dari operasi.',
        steps: [
          'Mulai dengan laba bersih (net income).',
          'Tambahkan kembali beban non-kas: penyusutan, amortisasi, kerugian penurunan nilai.',
          'Kurangkan keuntungan non-kas: keuntungan penjualan aset tetap.',
          'Sesuaikan perubahan aset lancar operasi: kenaikan aset dikurangi, penurunan aset ditambahkan.',
          'Sesuaikan perubahan liabilitas lancar operasi: kenaikan liabilitas ditambahkan, penurunan liabilitas dikurangi.',
          'Hasilkan arus kas bersih dari aktivitas operasi.',
        ],
        tables: [
          {
            caption: 'Perbandingan Metode Langsung vs Tidak Langsung',
            headers: ['Aspek', 'Metode Langsung', 'Metode Tidak Langsung'],
            rows: [
              ['Titik awal', 'Penerimaan kas dari pelanggan', 'Laba bersih'],
              ['Penyajian', 'Arus kas bruto per kategori', 'Rekonsiliasi laba bersih ke arus kas operasi'],
              ['Kemudahan persiapan', 'Lebih sulit (memerlukan data kas aktual)', 'Lebih mudah (menggunakan data laporan keuangan)'],
              ['Anjuran PSAK 2', 'Dianjurkan', 'Diizinkan'],
              ['Penggunaan praktik', 'Jarang digunakan', 'Lebih umum digunakan'],
            ],
          },
        ],
        notes: [
          'Kedua metode menghasilkan total arus kas bersih dari aktivitas operasi yang sama.',
          'Arus kas dari aktivitas investasi dan pendanaan disajikan dengan cara yang sama pada kedua metode.',
        ],
      },
      {
        id: 'lak-analisis',
        title: 'Analisis dan Interpretasi Laporan Arus Kas',
        content: 'Analisis laporan arus kas membantu menilai kualitas laba dan likuiditas entitas. Perusahaan yang sehat umumnya menghasilkan arus kas operasi positif yang cukup besar untuk mendanai investasi dan membayar dividen. Pola arus kas dapat menunjukkan tahap perkembangan perusahaan: perusahaan berkembang cenderung memiliki arus kas investasi negatif yang besar karena ekspansi aset tetap.',
        tables: [
          {
            caption: 'Interpretasi Pola Arus Kas',
            headers: ['Operasi', 'Investasi', 'Pendanaan', 'Interpretasi Umum'],
            rows: [
              ['+', '-', '-', 'Perusahaan matang: operasi kuat, berinvestasi, melunasi utang/membayar dividen'],
              ['+', '-', '+', 'Perusahaan tumbuh: operasi positif, ekspansi, dan masih menarik pendanaan eksternal'],
              ['-', '-', '+', 'Perusahaan start-up atau kesulitan: bergantung pada pendanaan eksternal'],
              ['+', '+', '-', 'Perusahaan menjual aset untuk melunasi kewajiban (potensi masalah keuangan)'],
            ],
          },
        ],
      },
    ],
  },
];

// =============================================
// AKUNTANSI KEUANGAN DASAR — Extra Chapters
// =============================================

export const akuntansiKeuanganDasarExtraChapters: FormalChapter[] = [
  {
    id: 'ak-keu-aset-tetap',
    title: 'Aset Tetap: Perolehan, Penyusutan, dan Pelepasan',
    description: 'Aset tetap (property, plant, and equipment) adalah aset berwujud yang dimiliki untuk digunakan dalam produksi, penyediaan barang/jasa, disewakan, atau untuk tujuan administratif, dan diharapkan digunakan selama lebih dari satu periode. Topik ini mencakup pengakuan awal, metode penyusutan, dan penghentian pengakuan.',
    sections: [
      {
        id: 'aset-tetap-perolehan',
        title: 'Perolehan Aset Tetap',
        content: 'Aset tetap diakui sebagai aset jika kemungkinan besar manfaat ekonomi masa depan akan mengalir ke entitas dan biaya aset dapat diukur secara andal. Biaya perolehan aset tetap mencakup harga beli (setelah dikurangi diskon), semua biaya yang dapat diatribusikan langsung untuk membawa aset ke lokasi dan kondisi yang diperlukan, serta estimasi awal biaya pembongkaran dan pemindahan aset.',
        rules: [
          'Biaya perolehan termasuk: harga pembelian, bea impor, pajak pembelian yang tidak dapat dikembalikan, biaya pengiriman, biaya pemasangan dan instalasi, dan biaya uji coba.',
          'Biaya yang tidak boleh dikapitalisasi (dibebankan langsung): biaya administrasi umum, biaya pemeliharaan rutin, dan biaya operasional sebelum aset mencapai kapasitas operasional.',
          'Jika aset diperoleh dengan pertukaran aset non-moneter, biaya dicatat berdasarkan nilai wajar aset yang diserahkan atau aset yang diterima, mana yang lebih dapat diandalkan.',
        ],
        examples: [
          'Mesin dibeli seharga Rp500 juta, ongkos kirim Rp10 juta, biaya instalasi Rp15 juta. Biaya perolehan yang dikapitalisasi = Rp525 juta.',
        ],
      },
      {
        id: 'aset-tetap-penyusutan',
        title: 'Metode Penyusutan Aset Tetap',
        content: 'Penyusutan adalah alokasi sistematis jumlah yang dapat disusutkan (biaya perolehan dikurangi nilai residu) sepanjang umur manfaat aset. Tiga metode penyusutan yang lazim digunakan adalah metode garis lurus, metode saldo menurun (accelerated), dan metode unit produksi.',
        tables: [
          {
            caption: 'Perbandingan Metode Penyusutan',
            headers: ['Metode', 'Rumus', 'Karakteristik'],
            rows: [
              ['Garis Lurus (Straight-Line)', '(Biaya - Nilai Residu) / Umur Manfaat', 'Beban penyusutan sama setiap tahun; paling sederhana dan umum digunakan'],
              ['Saldo Menurun Ganda (Double Declining Balance)', 'Nilai Buku Awal x (2 / Umur Manfaat)', 'Beban penyusutan lebih besar di awal; nilai residu tidak dikurangkan dalam perhitungan tarif, tetapi nilai buku tidak boleh turun di bawah nilai residu'],
              ['Unit Produksi (Units of Production)', '(Biaya - Nilai Residu) / Total Unit Produksi x Unit Dihasilkan', 'Penyusutan bervariasi sesuai penggunaan aktual; cocok untuk mesin produksi'],
            ],
          },
        ],
        examples: [
          'Mesin biaya Rp120 juta, nilai residu Rp20 juta, umur manfaat 5 tahun. Garis lurus: penyusutan tahunan = (120-20)/5 = Rp20 juta/tahun.',
          'Saldo menurun ganda tahun 1: 120 juta x (2/5) = Rp48 juta. Tahun 2: (120-48) juta x 40% = Rp28,8 juta.',
          'Unit produksi: kapasitas 100.000 unit, tahun 1 diproduksi 25.000 unit. Penyusutan = (120-20)/100.000 x 25.000 = Rp25 juta.',
        ],
        formula: 'Nilai Buku = Biaya Perolehan - Akumulasi Penyusutan',
      },
      {
        id: 'aset-tetap-pelepasan',
        title: 'Pelepasan Aset Tetap',
        content: 'Aset tetap dihentikan pengakuannya (derecognized) pada saat dilepaskan atau ketika tidak ada manfaat ekonomi masa depan yang diharapkan dari penggunaan atau pelepasannya. Selisih antara hasil penjualan neto dan nilai buku aset pada tanggal pelepasan diakui sebagai keuntungan atau kerugian dalam laporan laba rugi.',
        steps: [
          'Hitung nilai buku aset pada tanggal pelepasan: Biaya Perolehan - Akumulasi Penyusutan.',
          'Catat penyusutan parsial untuk periode dari awal tahun sampai tanggal pelepasan (jika perlu).',
          'Debet Akumulasi Penyusutan dan Kredit Aset Tetap untuk menghapus akun aset.',
          'Catat penerimaan kas atau aset lain dari pelepasan.',
          'Akui keuntungan (kredit) jika hasil pelepasan > nilai buku, atau kerugian (debet) jika hasil pelepasan < nilai buku.',
        ],
        examples: [
          'Kendaraan biaya Rp200 juta, akumulasi penyusutan Rp150 juta, dijual Rp60 juta. Nilai buku = Rp50 juta. Keuntungan penjualan = Rp60 juta - Rp50 juta = Rp10 juta.',
          'Mesin biaya Rp80 juta, akumulasi penyusutan Rp70 juta, dibuang (tanpa penerimaan kas). Kerugian pelepasan = Rp10 juta (nilai buku).',
        ],
      },
    ],
  },
  {
    id: 'ak-keu-persediaan',
    title: 'Persediaan: Pengukuran dan Penilaian',
    description: 'Persediaan adalah aset yang tersedia untuk dijual dalam kegiatan usaha normal, dalam proses produksi untuk kemudian dijual, atau dalam bentuk bahan baku atau perlengkapan untuk digunakan dalam proses produksi atau pemberian jasa. Pengukuran persediaan berdampak langsung pada laba bersih dan total aset.',
    sections: [
      {
        id: 'persediaan-biaya',
        title: 'Biaya Persediaan',
        content: 'Biaya persediaan mencakup semua biaya pembelian, biaya konversi, dan biaya lain yang timbul untuk membawa persediaan ke kondisi dan lokasi saat ini. Biaya pembelian meliputi harga beli ditambah bea impor dan pajak lainnya, dikurangi diskon dagang dan rabat. Biaya yang tidak termasuk biaya persediaan (dibebankan langsung ke laba rugi) antara lain pemborosan bahan baku yang tidak normal, biaya penyimpanan, dan biaya overhead administratif.',
        rules: [
          'Biaya pengiriman barang masuk (freight-in) dikapitalisasi sebagai biaya persediaan.',
          'Biaya pengiriman barang keluar (freight-out) adalah beban penjualan, bukan biaya persediaan.',
          'Potongan pembelian tunai (purchase discount) mengurangi biaya persediaan jika menggunakan metode neto.',
        ],
      },
      {
        id: 'persediaan-metode-fifo',
        title: 'Metode Penilaian Persediaan: FIFO dan Rata-Rata Tertimbang',
        content: 'Metode FIFO (First-In, First-Out) mengasumsikan bahwa persediaan yang pertama dibeli adalah yang pertama dijual, sehingga persediaan akhir terdiri dari pembelian paling akhir. Dalam kondisi harga naik, FIFO menghasilkan Harga Pokok Penjualan (HPP) lebih rendah dan laba lebih tinggi. Metode rata-rata tertimbang menghitung biaya rata-rata per unit berdasarkan total biaya yang tersedia dibagi total unit yang tersedia.',
        tables: [
          {
            caption: 'Perbandingan Metode FIFO vs Rata-Rata Tertimbang (Harga Naik)',
            headers: ['Dampak', 'FIFO', 'Rata-Rata Tertimbang'],
            rows: [
              ['Harga Pokok Penjualan', 'Lebih rendah', 'Lebih tinggi dari FIFO'],
              ['Laba Kotor', 'Lebih tinggi', 'Lebih rendah dari FIFO'],
              ['Nilai Persediaan Akhir', 'Lebih tinggi (mencerminkan harga terkini)', 'Di antara FIFO'],
              ['Pajak Penghasilan', 'Lebih tinggi', 'Lebih rendah'],
              ['Arus Kas', 'Lebih rendah (pajak lebih tinggi)', 'Lebih tinggi'],
            ],
          },
        ],
        examples: [
          'Pembelian: 100 unit x Rp10.000 (Jan), 200 unit x Rp12.000 (Feb). Terjual 150 unit. FIFO: HPP = 100 x Rp10.000 + 50 x Rp12.000 = Rp1.600.000. Persediaan akhir: 150 unit x Rp12.000 = Rp1.800.000.',
          'Rata-rata tertimbang: biaya rata-rata = (100 x Rp10.000 + 200 x Rp12.000) / 300 = Rp11.333/unit. HPP = 150 x Rp11.333 = Rp1.700.000.',
        ],
        formula: 'Biaya Rata-Rata Per Unit = Total Biaya Persediaan Tersedia / Total Unit Tersedia',
        notes: [
          'PSAK 14 melarang penggunaan metode LIFO.',
          'Metode yang dipilih harus diterapkan secara konsisten antar periode.',
        ],
      },
      {
        id: 'persediaan-lcnrv',
        title: 'Penilaian Persediaan: LCNRV (Lower of Cost or Net Realisable Value)',
        content: 'PSAK 14 mensyaratkan bahwa persediaan diukur pada nilai yang lebih rendah antara biaya perolehan dan nilai realisasi neto (Net Realisable Value/NRV). NRV adalah estimasi harga jual dalam kegiatan usaha biasa dikurangi estimasi biaya penyelesaian dan estimasi biaya untuk melakukan penjualan. Penurunan nilai persediaan di bawah biaya perolehan diakui sebagai kerugian dalam laba rugi pada periode terjadinya.',
        formula: 'NRV = Estimasi Harga Jual - Biaya Penyelesaian - Biaya Penjualan',
        rules: [
          'Jika NRV < Biaya Perolehan, persediaan diturunkan ke NRV dan selisihnya diakui sebagai beban.',
          'Pemulihan penurunan nilai persediaan diakui sebagai pengurang beban persediaan (tidak boleh melebihi biaya perolehan awal).',
          'Penilaian LCNRV umumnya diterapkan per jenis persediaan, bukan secara agregat.',
        ],
        examples: [
          'Persediaan produk A: biaya Rp500.000/unit, harga jual estimasi Rp480.000/unit, biaya penjualan Rp20.000/unit. NRV = Rp460.000. Karena NRV < biaya, persediaan diturunkan ke Rp460.000/unit, kerugian Rp40.000/unit.',
        ],
      },
    ],
  },
  {
    id: 'ak-keu-piutang',
    title: 'Piutang Usaha dan Piutang Tak Tertagih',
    description: 'Piutang usaha adalah klaim terhadap pelanggan atas penjualan barang atau jasa secara kredit. Penilaian piutang yang tepat mensyaratkan pengakuan kemungkinan tidak tertagihnya sebagian piutang melalui metode penyisihan atau penghapusan langsung.',
    sections: [
      {
        id: 'piutang-pengakuan',
        title: 'Pengakuan dan Pengukuran Piutang Usaha',
        content: 'Piutang usaha diakui pada saat hak atas imbalan telah timbul, yaitu pada saat pendapatan diakui sesuai PSAK 72. Piutang usaha diukur pada nilai wajar saat pengakuan awal, yang umumnya sama dengan nilai nominal faktur. Untuk piutang usaha jangka pendek, komponen bunga tidak material sehingga tidak diperlukan diskonto.',
        rules: [
          'Piutang usaha disajikan dalam neraca sebesar nilai yang dapat direalisasi (net realisable value), yaitu setelah dikurangi penyisihan piutang tak tertagih.',
          'Piutang jangka panjang (lebih dari 12 bulan) harus didiskontokan ke nilai kini.',
          'Retur penjualan dan potongan penjualan mengurangi saldo piutang usaha.',
        ],
      },
      {
        id: 'piutang-metode-penyisihan',
        title: 'Metode Penyisihan (Allowance Method)',
        content: 'Metode penyisihan merupakan metode yang sesuai dengan PSAK karena mencerminkan prinsip akrual dan prinsip penandingan (matching principle). Entitas mengestimasi piutang yang tidak akan tertagih dan membentuk Penyisihan Piutang Tak Tertagih (akun kontra aset) di setiap akhir periode. Estimasi dapat dilakukan berdasarkan persentase penjualan kredit (income statement approach) atau berdasarkan analisis umur piutang (balance sheet approach / aging of accounts receivable).',
        steps: [
          'Akhir periode: Debet Beban Piutang Tak Tertagih, Kredit Penyisihan Piutang Tak Tertagih (mencatat estimasi).',
          'Saat piutang dihapus: Debet Penyisihan Piutang Tak Tertagih, Kredit Piutang Usaha (tidak mempengaruhi laba rugi).',
          'Jika piutang yang telah dihapus kemudian diterima kembali: Reverse jurnal penghapusan, kemudian catat penerimaan kas.',
        ],
        tables: [
          {
            caption: 'Contoh Aging Schedule Piutang Usaha',
            headers: ['Umur Piutang', 'Saldo (Rp)', 'Persentase Tak Tertagih', 'Estimasi Tak Tertagih (Rp)'],
            rows: [
              ['Belum jatuh tempo', '200.000.000', '1%', '2.000.000'],
              ['1 - 30 hari', '80.000.000', '3%', '2.400.000'],
              ['31 - 60 hari', '40.000.000', '10%', '4.000.000'],
              ['61 - 90 hari', '15.000.000', '25%', '3.750.000'],
              ['> 90 hari', '5.000.000', '50%', '2.500.000'],
              ['Total', '340.000.000', '', '14.650.000'],
            ],
          },
        ],
        formula: 'Nilai Buku Piutang = Piutang Usaha (Bruto) - Penyisihan Piutang Tak Tertagih',
      },
      {
        id: 'piutang-penghapusan-langsung',
        title: 'Metode Penghapusan Langsung (Direct Write-Off Method)',
        content: 'Pada metode penghapusan langsung, kerugian piutang tak tertagih diakui hanya pada saat piutang secara spesifik ditetapkan tidak dapat ditagih. Tidak ada penyisihan yang dibentuk sebelumnya. Metode ini sederhana tetapi tidak sesuai dengan prinsip penandingan karena beban diakui pada periode yang berbeda dari pendapatan yang terkait. Metode ini hanya dapat diterima untuk tujuan perpajakan di beberapa yurisdiksi, bukan untuk pelaporan keuangan sesuai PSAK.',
        rules: [
          'Saat penghapusan: Debet Beban Piutang Tak Tertagih, Kredit Piutang Usaha.',
          'Metode ini melanggar prinsip penandingan (matching principle) karena beban piutang tak tertagih diakui di periode berbeda dari pendapatan terkait.',
          'PSAK tidak mengizinkan metode penghapusan langsung untuk pelaporan keuangan bertujuan umum; metode penyisihan harus digunakan.',
        ],
        warning: 'Metode penghapusan langsung tidak diperkenankan untuk pelaporan keuangan sesuai PSAK. Ujian CAFB dapat menguji perbedaan antara kedua metode dan alasan mengapa metode penyisihan lebih tepat secara konseptual.',
      },
    ],
  },
];

// =============================================
// MANAJEMEN BISNIS — Extra Chapters
// =============================================

export const manajemenBisnisExtraChapters: FormalChapter[] = [
  {
    id: 'manajemen-fungsi',
    title: 'Fungsi-Fungsi Manajemen',
    description: 'Manajemen adalah proses perencanaan, pengorganisasian, pengarahan, dan pengendalian sumber daya organisasi untuk mencapai tujuan yang telah ditetapkan secara efektif dan efisien. Keempat fungsi ini membentuk siklus manajemen yang berkesinambungan.',
    sections: [
      {
        id: 'fungsi-perencanaan',
        title: 'Perencanaan (Planning)',
        content: 'Perencanaan adalah fungsi manajemen yang pertama dan paling mendasar, melibatkan penetapan tujuan organisasi dan penentuan cara terbaik untuk mencapainya. Proses perencanaan mencakup analisis lingkungan, perumusan visi dan misi, penetapan tujuan dan sasaran, serta pengembangan rencana strategis, taktis, dan operasional. Perencanaan yang baik memberikan arah, mengurangi ketidakpastian, meminimalkan pemborosan, dan menetapkan standar untuk pengendalian.',
        tables: [
          {
            caption: 'Hierarki Rencana Organisasi',
            headers: ['Jenis Rencana', 'Jangka Waktu', 'Tingkat Manajemen', 'Contoh'],
            rows: [
              ['Strategis', '3-5 tahun atau lebih', 'Manajemen puncak', 'Ekspansi ke pasar baru, merjer dan akuisisi'],
              ['Taktis', '1-3 tahun', 'Manajemen menengah', 'Rencana pengembangan produk, anggaran tahunan'],
              ['Operasional', 'Mingguan - bulanan', 'Manajemen lini pertama', 'Jadwal produksi, target penjualan bulanan'],
            ],
          },
        ],
        rules: [
          'Tujuan yang baik mengikuti prinsip SMART: Specific, Measurable, Achievable, Relevant, Time-bound.',
          'Perencanaan harus fleksibel untuk dapat menyesuaikan diri dengan perubahan lingkungan bisnis.',
          'Perencanaan kontinjensi (contingency planning) disiapkan untuk mengantisipasi skenario yang tidak terduga.',
        ],
      },
      {
        id: 'fungsi-pengorganisasian',
        title: 'Pengorganisasian (Organizing)',
        content: 'Pengorganisasian adalah proses mengalokasikan dan mengatur sumber daya manusia dan non-manusia untuk mencapai tujuan organisasi. Fungsi ini meliputi perancangan struktur organisasi, pembagian tugas dan wewenang, penetapan rantai komando, serta koordinasi antar unit kerja. Hasil dari pengorganisasian adalah struktur organisasi yang menggambarkan hubungan formal antar posisi dalam organisasi.',
        tables: [
          {
            caption: 'Bentuk-Bentuk Struktur Organisasi',
            headers: ['Struktur', 'Ciri Utama', 'Kelebihan', 'Kekurangan'],
            rows: [
              ['Fungsional', 'Dikelompokkan berdasarkan fungsi (produksi, keuangan, pemasaran)', 'Spesialisasi tinggi, efisiensi dalam fungsi sejenis', 'Koordinasi lintas fungsi sulit, pandangan sempit'],
              ['Divisional', 'Dikelompokkan berdasarkan produk, wilayah, atau pelanggan', 'Responsif terhadap kebutuhan spesifik, akuntabilitas jelas', 'Duplikasi sumber daya, persaingan antar divisi'],
              ['Matriks', 'Kombinasi fungsional dan divisional; karyawan melapor ke dua manajer', 'Fleksibel, penggunaan sumber daya efisien', 'Konflik wewenang, kebingungan peran'],
            ],
          },
        ],
        notes: [
          'Rentang kendali (span of control) adalah jumlah bawahan langsung yang dapat diawasi oleh seorang manajer secara efektif.',
          'Sentralisasi berarti pengambilan keputusan terpusat di manajemen atas; desentralisasi mendelegasikan wewenang ke tingkat bawah.',
        ],
      },
      {
        id: 'fungsi-pengarahan',
        title: 'Pengarahan (Leading/Directing)',
        content: 'Pengarahan adalah fungsi manajemen yang berkaitan dengan memimpin, memotivasi, dan berkomunikasi dengan karyawan untuk mencapai tujuan organisasi. Pengarahan melibatkan gaya kepemimpinan yang tepat, komunikasi efektif, pemberian motivasi, serta penyelesaian konflik. Efektivitas pengarahan sangat dipengaruhi oleh kemampuan manajer memahami kebutuhan dan perilaku individu dalam organisasi.',
        rules: [
          'Kepemimpinan autokratis cocok untuk situasi krisis atau ketika keputusan cepat diperlukan.',
          'Kepemimpinan demokratis mendorong partisipasi karyawan dan cocok untuk pekerjaan kreatif.',
          'Kepemimpinan laissez-faire memberikan kebebasan penuh kepada karyawan yang kompeten dan termotivasi tinggi.',
        ],
      },
      {
        id: 'fungsi-pengendalian',
        title: 'Pengendalian (Controlling)',
        content: 'Pengendalian adalah proses memantau aktivitas organisasi, membandingkan kinerja aktual dengan standar yang telah ditetapkan, dan mengambil tindakan korektif apabila diperlukan. Pengendalian menutup siklus manajemen dengan memberikan umpan balik yang menjadi masukan bagi perencanaan berikutnya. Sistem pengendalian yang efektif bersifat akurat, tepat waktu, ekonomis, fleksibel, dan dipahami oleh semua pihak yang terlibat.',
        steps: [
          'Tetapkan standar kinerja yang terukur.',
          'Ukur kinerja aktual dengan metode yang tepat.',
          'Bandingkan kinerja aktual dengan standar (identifikasi deviasi).',
          'Analisis penyebab deviasi yang signifikan.',
          'Ambil tindakan korektif jika diperlukan.',
        ],
        notes: [
          'Pengendalian preventif dilakukan sebelum aktivitas dimulai (ex-ante).',
          'Pengendalian konkuren dilakukan selama aktivitas berlangsung.',
          'Pengendalian umpan balik (feedback control) dilakukan setelah aktivitas selesai.',
        ],
      },
    ],
  },
  {
    id: 'manajemen-swot-keputusan',
    title: 'Analisis SWOT dan Pembuatan Keputusan Bisnis',
    description: 'Analisis SWOT adalah alat perencanaan strategis yang mengevaluasi kekuatan, kelemahan, peluang, dan ancaman yang dihadapi suatu organisasi. Keputusan bisnis yang rasional memerlukan proses analitis yang sistematis untuk mengidentifikasi dan memilih alternatif terbaik.',
    sections: [
      {
        id: 'swot-analisis',
        title: 'Analisis SWOT',
        content: 'SWOT adalah akronim dari Strengths (Kekuatan), Weaknesses (Kelemahan), Opportunities (Peluang), dan Threats (Ancaman). Kekuatan dan kelemahan adalah faktor internal yang dapat dikendalikan oleh organisasi, sedangkan peluang dan ancaman adalah faktor eksternal dari lingkungan bisnis. Analisis SWOT menjadi dasar perumusan strategi dengan mencocokkan faktor internal dan eksternal.',
        tables: [
          {
            caption: 'Matriks SWOT dan Strategi yang Dihasilkan',
            headers: ['', 'Peluang (O)', 'Ancaman (T)'],
            rows: [
              ['Kekuatan (S)', 'SO Strategies: Gunakan kekuatan untuk memanfaatkan peluang (strategi agresif/pertumbuhan)', 'ST Strategies: Gunakan kekuatan untuk menghadapi ancaman (strategi diversifikasi)'],
              ['Kelemahan (W)', 'WO Strategies: Atasi kelemahan dengan memanfaatkan peluang (strategi turn-around)', 'WT Strategies: Minimalkan kelemahan dan hindari ancaman (strategi defensif)'],
            ],
          },
        ],
        examples: [
          'Kekuatan: merek kuat, jaringan distribusi luas. Kelemahan: biaya produksi tinggi. Peluang: pertumbuhan pasar digital. Ancaman: pesaing baru berbiaya rendah.',
          'Strategi SO: perluas penjualan online memanfaatkan merek yang kuat di platform digital.',
        ],
      },
      {
        id: 'swot-keputusan',
        title: 'Proses Pembuatan Keputusan Bisnis',
        content: 'Pembuatan keputusan adalah proses memilih satu alternatif dari beberapa pilihan yang tersedia untuk menyelesaikan masalah atau memanfaatkan peluang. Keputusan manajerial yang efektif mengikuti proses yang sistematis dan mempertimbangkan berbagai faktor kuantitatif maupun kualitatif.',
        steps: [
          'Identifikasi dan definisikan masalah secara jelas.',
          'Kumpulkan informasi relevan yang berkaitan dengan masalah.',
          'Identifikasi semua alternatif solusi yang mungkin.',
          'Evaluasi setiap alternatif berdasarkan kriteria yang telah ditetapkan.',
          'Pilih alternatif terbaik berdasarkan evaluasi.',
          'Implementasikan keputusan yang dipilih.',
          'Evaluasi hasil dan lakukan tindakan korektif jika perlu.',
        ],
        notes: [
          'Keputusan terprogram (programmed decisions) adalah keputusan rutin yang dapat distandarisasi menggunakan prosedur baku.',
          'Keputusan tidak terprogram (non-programmed decisions) adalah keputusan unik dan tidak terstruktur yang memerlukan pertimbangan mendalam.',
          'Rasionalitas terbatas (bounded rationality) mengakui bahwa pengambil keputusan memiliki keterbatasan informasi, kognitif, dan waktu.',
        ],
      },
      {
        id: 'swot-alat-analitis',
        title: 'Alat Analitis Pendukung Keputusan',
        content: 'Berbagai alat analitis digunakan manajer untuk mendukung pembuatan keputusan yang lebih objektif. Analisis biaya-manfaat membandingkan total biaya dengan total manfaat suatu keputusan. Analisis titik impas (break-even analysis) menentukan volume penjualan minimum agar tidak rugi. Pohon keputusan (decision tree) memvisualisasikan pilihan dan konsekuensi dalam kondisi ketidakpastian.',
        formula: 'Titik Impas (unit) = Biaya Tetap Total / (Harga Jual per Unit - Biaya Variabel per Unit)',
        examples: [
          'Biaya tetap Rp100 juta, harga jual Rp50.000/unit, biaya variabel Rp30.000/unit. Titik impas = 100.000.000 / (50.000 - 30.000) = 5.000 unit.',
        ],
      },
    ],
  },
  {
    id: 'manajemen-sdm',
    title: 'Manajemen Sumber Daya Manusia',
    description: 'Manajemen Sumber Daya Manusia (MSDM) adalah fungsi organisasi yang mencakup semua aktivitas yang berkaitan dengan perolehan, pengembangan, pemeliharaan, dan penggunaan sumber daya manusia untuk mencapai tujuan organisasi. MSDM modern memandang karyawan sebagai aset strategis, bukan sekadar biaya.',
    sections: [
      {
        id: 'sdm-rekrutmen-seleksi',
        title: 'Rekrutmen dan Seleksi',
        content: 'Rekrutmen adalah proses menarik calon karyawan yang berkualifikasi untuk mengisi posisi yang kosong dalam organisasi. Seleksi adalah proses memilih calon terbaik dari kumpulan pelamar melalui serangkaian uji dan evaluasi. Kualitas rekrutmen dan seleksi menentukan kualitas sumber daya manusia yang akan dimiliki organisasi.',
        tables: [
          {
            caption: 'Sumber Rekrutmen: Internal vs Eksternal',
            headers: ['Sumber', 'Contoh', 'Kelebihan', 'Kekurangan'],
            rows: [
              ['Internal', 'Promosi, rotasi, referensi karyawan', 'Biaya rendah, karyawan memahami budaya organisasi, meningkatkan motivasi', 'Pilihan terbatas, risiko konflik internal'],
              ['Eksternal', 'Iklan lowongan, agen rekrutmen, kampus rekrutmen, media sosial profesional', 'Membawa perspektif baru, pilihan lebih luas', 'Biaya lebih tinggi, waktu adaptasi lebih lama'],
            ],
          },
        ],
        steps: [
          'Analisis jabatan: identifikasi tugas, tanggung jawab, dan kualifikasi yang dibutuhkan.',
          'Perencanaan SDM: tentukan jumlah dan jenis karyawan yang dibutuhkan.',
          'Rekrutmen: tarik calon karyawan melalui berbagai sumber.',
          'Seleksi: CV screening, tes tertulis, wawancara, tes psikologi, dan pemeriksaan referensi.',
          'Penempatan: penugasan karyawan baru ke posisi yang sesuai.',
          'Orientasi dan onboarding: perkenalan karyawan baru dengan organisasi.',
        ],
      },
      {
        id: 'sdm-pelatihan',
        title: 'Pelatihan dan Pengembangan',
        content: 'Pelatihan (training) bertujuan meningkatkan kompetensi karyawan untuk pekerjaan yang sedang dilakukan saat ini, sedangkan pengembangan (development) berfokus pada persiapan karyawan untuk tanggung jawab yang lebih besar di masa depan. Program pelatihan dan pengembangan yang efektif berkontribusi pada peningkatan produktivitas, kepuasan kerja, dan retensi karyawan.',
        tables: [
          {
            caption: 'Metode Pelatihan dan Pengembangan',
            headers: ['Metode', 'Keterangan', 'Cocok Untuk'],
            rows: [
              ['On-the-job training', 'Pelatihan di tempat kerja sambil melaksanakan pekerjaan nyata', 'Keterampilan teknis operasional'],
              ['Coaching dan mentoring', 'Pendampingan oleh manajer atau karyawan senior', 'Pengembangan kepemimpinan'],
              ['Pelatihan kelas (classroom)', 'Pelatihan formal di ruang kelas dengan instruktur', 'Pengetahuan konseptual dan teori'],
              ['E-learning', 'Pelatihan berbasis teknologi digital', 'Materi yang dapat distandarisasi, skala besar'],
              ['Rotasi jabatan (job rotation)', 'Perpindahan sementara ke berbagai fungsi/departemen', 'Pengembangan wawasan lintas fungsi'],
              ['Simulasi', 'Latihan dengan kondisi yang meniru situasi nyata', 'Pengambilan keputusan, keterampilan darurat'],
            ],
          },
        ],
      },
      {
        id: 'sdm-motivasi',
        title: 'Teori Motivasi: Maslow dan Herzberg',
        content: 'Motivasi adalah dorongan internal yang menggerakkan seseorang untuk berperilaku dengan cara tertentu dalam rangka mencapai tujuan. Pemahaman tentang motivasi membantu manajer merancang lingkungan kerja dan sistem imbalan yang mendorong kinerja optimal karyawan.',
        tables: [
          {
            caption: 'Hierarki Kebutuhan Maslow',
            headers: ['Tingkat (dari bawah ke atas)', 'Kebutuhan', 'Contoh Penerapan di Tempat Kerja'],
            rows: [
              ['1 (Dasar)', 'Fisiologis', 'Gaji yang cukup untuk kebutuhan dasar, ruang istirahat, kantin'],
              ['2', 'Keamanan', 'Kontrak kerja, asuransi kesehatan, keselamatan kerja, dana pensiun'],
              ['3', 'Sosial / Rasa Memiliki', 'Tim kerja yang harmonis, kegiatan team building, budaya organisasi inklusif'],
              ['4', 'Penghargaan / Esteem', 'Pengakuan prestasi, promosi jabatan, penghargaan karyawan terbaik'],
              ['5 (Puncak)', 'Aktualisasi Diri', 'Pekerjaan yang bermakna, otonomi, kesempatan kreativitas dan inovasi'],
            ],
          },
          {
            caption: 'Teori Dua Faktor Herzberg',
            headers: ['Jenis Faktor', 'Nama Faktor', 'Contoh', 'Dampak jika Tidak Terpenuhi'],
            rows: [
              ['Hygiene Factors (Faktor Pemeliharaan)', 'Gaji, kondisi kerja, kebijakan perusahaan, hubungan interpersonal, keamanan kerja', 'Gaji di bawah pasar, lingkungan kerja tidak nyaman', 'Ketidakpuasan (dissatisfaction) — tidak memotivasi, hanya mencegah ketidakpuasan'],
              ['Motivators (Faktor Pemotivasi)', 'Prestasi, pengakuan, tanggung jawab, kemajuan, pekerjaan itu sendiri', 'Promosi, proyek menantang, otonomi kerja', 'Tidak ada motivasi ekstra — karyawan tidak termotivasi untuk berkinerja tinggi'],
            ],
          },
        ],
        notes: [
          'Menurut Herzberg, menghilangkan sumber ketidakpuasan (hygiene factors) tidak secara otomatis menimbulkan kepuasan dan motivasi.',
          'Untuk meningkatkan motivasi secara nyata, manajer harus memperkuat faktor-faktor motivator.',
          'Teori Maslow bersifat hierarkis — kebutuhan tingkat bawah harus dipenuhi sebelum seseorang termotivasi oleh kebutuhan tingkat yang lebih tinggi.',
        ],
      },
    ],
  },
];

// =============================================
// EKONOMI & STATISTIKA — Extra Chapters
// =============================================

export const ekonomiStatistikExtraChapters: FormalChapter[] = [
  {
    id: 'ekonomi-elastisitas',
    title: 'Elastisitas: Harga, Pendapatan, dan Silang',
    description: 'Elastisitas mengukur seberapa besar respons perubahan kuantitas yang diminta atau ditawarkan terhadap perubahan variabel yang memengaruhinya. Pemahaman elastisitas sangat penting bagi pengambil keputusan bisnis dan kebijakan publik.',
    sections: [
      {
        id: 'elastisitas-harga-permintaan',
        title: 'Elastisitas Harga Permintaan (Ed)',
        content: 'Elastisitas harga permintaan mengukur persentase perubahan kuantitas yang diminta sebagai respons terhadap persentase perubahan harga. Karena harga dan kuantitas bergerak berlawanan arah (hukum permintaan), nilai elastisitas harga permintaan umumnya negatif. Dalam praktiknya digunakan nilai absolut untuk interpretasi.',
        formula: 'Ed = (% Perubahan Kuantitas Diminta) / (% Perubahan Harga) = (ΔQ/Q) / (ΔP/P)',
        tables: [
          {
            caption: 'Interpretasi Nilai Elastisitas Harga Permintaan',
            headers: ['Nilai |Ed|', 'Kategori', 'Interpretasi', 'Contoh Barang'],
            rows: [
              ['|Ed| = 0', 'Inelastis sempurna', 'Perubahan harga tidak memengaruhi kuantitas diminta sama sekali', 'Sangat langka; kebutuhan mutlak dalam kondisi ekstrem'],
              ['0 < |Ed| < 1', 'Inelastis', 'Perubahan kuantitas lebih kecil dari perubahan harga (dalam %)', 'Bahan bakar, obat-obatan, kebutuhan pokok'],
              ['|Ed| = 1', 'Elastis uniter', 'Persentase perubahan kuantitas sama dengan persentase perubahan harga', 'Kondisi teoritis'],
              ['|Ed| > 1', 'Elastis', 'Perubahan kuantitas lebih besar dari perubahan harga (dalam %)', 'Barang mewah, barang dengan banyak substitut'],
              ['|Ed| = tak hingga', 'Elastis sempurna', 'Perubahan harga sedikit saja mengakibatkan kuantitas turun ke nol', 'Pasar persaingan sempurna'],
            ],
          },
        ],
        notes: [
          'Jika permintaan elastis (|Ed| > 1), penurunan harga akan meningkatkan total penerimaan (TR = P x Q).',
          'Jika permintaan inelastis (|Ed| < 1), kenaikan harga akan meningkatkan total penerimaan.',
          'Faktor penentu elastisitas: ketersediaan substitut, proporsi pendapatan yang dibelanjakan, sifat kebutuhan (primer vs mewah), dan periode waktu.',
        ],
        examples: [
          'Harga naik dari Rp10.000 ke Rp12.000 (naik 20%), kuantitas diminta turun dari 100 ke 80 unit (turun 20%). Ed = -20%/20% = -1 (elastis uniter).',
          'Harga bahan bakar naik 10%, kuantitas diminta turun 2%. |Ed| = 0,2 (inelastis). Kenaikan harga meningkatkan penerimaan produsen.',
        ],
      },
      {
        id: 'elastisitas-pendapatan',
        title: 'Elastisitas Pendapatan (Income Elasticity)',
        content: 'Elastisitas pendapatan mengukur seberapa besar persentase perubahan kuantitas yang diminta sebagai respons terhadap persentase perubahan pendapatan konsumen. Nilai elastisitas pendapatan membedakan jenis barang menjadi barang normal (positif), barang inferior (negatif), dan barang mewah (> 1).',
        formula: 'Ey = (% Perubahan Kuantitas Diminta) / (% Perubahan Pendapatan) = (ΔQ/Q) / (ΔY/Y)',
        tables: [
          {
            caption: 'Interpretasi Elastisitas Pendapatan',
            headers: ['Nilai Ey', 'Jenis Barang', 'Interpretasi', 'Contoh'],
            rows: [
              ['Ey > 1', 'Barang mewah (luxury)', 'Permintaan meningkat lebih cepat dari kenaikan pendapatan', 'Mobil mewah, perhiasan, wisata luar negeri'],
              ['0 < Ey < 1', 'Barang normal (necessities)', 'Permintaan meningkat lebih lambat dari kenaikan pendapatan', 'Makanan pokok, pakaian sehari-hari'],
              ['Ey < 0', 'Barang inferior', 'Permintaan menurun saat pendapatan naik', 'Angkutan umum (beralih ke kendaraan pribadi), mie instan (beralih ke makanan bergizi)'],
            ],
          },
        ],
      },
      {
        id: 'elastisitas-silang',
        title: 'Elastisitas Silang (Cross-Price Elasticity)',
        content: 'Elastisitas silang mengukur seberapa besar persentase perubahan kuantitas yang diminta terhadap barang X sebagai respons terhadap persentase perubahan harga barang Y. Nilai elastisitas silang menunjukkan hubungan antara dua barang: substitut, komplemen, atau tidak terkait.',
        formula: 'Exy = (% Perubahan Kuantitas Diminta Barang X) / (% Perubahan Harga Barang Y)',
        tables: [
          {
            caption: 'Interpretasi Elastisitas Silang',
            headers: ['Nilai Exy', 'Hubungan Barang', 'Interpretasi', 'Contoh'],
            rows: [
              ['Exy > 0', 'Substitut', 'Harga Y naik -> permintaan X naik (konsumen beralih dari Y ke X)', 'Teh dan kopi; bus dan kereta'],
              ['Exy < 0', 'Komplemen', 'Harga Y naik -> permintaan X turun (keduanya digunakan bersama)', 'Mobil dan bensin; printer dan tinta'],
              ['Exy = 0', 'Tidak terkait (independen)', 'Perubahan harga Y tidak memengaruhi permintaan X', 'Sepatu dan roti'],
            ],
          },
        ],
        examples: [
          'Harga kopi naik 10%, permintaan teh naik 5%. Exy = 5%/10% = 0,5 (positif: substitut).',
          'Harga mobil naik 15%, permintaan bensin turun 6%. Exy = -6%/15% = -0,4 (negatif: komplemen).',
        ],
      },
    ],
  },
  {
    id: 'ekonomi-struktur-pasar',
    title: 'Struktur Pasar',
    description: 'Struktur pasar menggambarkan karakteristik industri atau pasar yang memengaruhi perilaku dan kinerja perusahaan di dalamnya. Empat struktur pasar utama yang dipelajari dalam ekonomi mikro adalah persaingan sempurna, monopoli, oligopoli, dan persaingan monopolistis.',
    sections: [
      {
        id: 'pasar-persaingan-sempurna',
        title: 'Persaingan Sempurna (Perfect Competition)',
        content: 'Persaingan sempurna adalah struktur pasar dengan jumlah penjual dan pembeli yang sangat banyak, produk yang homogen (identik), informasi sempurna, dan kebebasan masuk-keluar pasar. Dalam persaingan sempurna, setiap perusahaan adalah price taker — tidak memiliki kekuatan untuk memengaruhi harga pasar. Harga ditentukan oleh kekuatan permintaan dan penawaran pasar secara keseluruhan.',
        rules: [
          'Perusahaan berproduksi pada titik di mana P = MR = MC untuk memaksimalkan laba.',
          'Dalam jangka panjang, perusahaan hanya memperoleh laba normal (zero economic profit) karena entri bebas mendorong harga turun ke titik minimum ATC.',
          'Kurva permintaan yang dihadapi perusahaan individual adalah horizontal (perfectly elastic) pada tingkat harga pasar.',
        ],
      },
      {
        id: 'pasar-monopoli',
        title: 'Monopoli',
        content: 'Monopoli adalah struktur pasar dengan hanya satu penjual yang menguasai seluruh pasokan suatu produk atau jasa tanpa substitut yang dekat. Monopolis adalah price maker yang dapat menetapkan harga di atas biaya marjinal, sehingga menghasilkan deadweight loss (kehilangan kesejahteraan sosial). Monopoli dapat timbul karena hambatan masuk berupa lisensi pemerintah, kepemilikan sumber daya unik, hak paten, atau skala ekonomi (natural monopoly).',
        tables: [
          {
            caption: 'Perbandingan Persaingan Sempurna vs Monopoli',
            headers: ['Aspek', 'Persaingan Sempurna', 'Monopoli'],
            rows: [
              ['Jumlah penjual', 'Sangat banyak', 'Satu'],
              ['Produk', 'Homogen', 'Tidak ada substitut dekat'],
              ['Kekuatan harga', 'Price taker', 'Price maker'],
              ['Hambatan masuk', 'Tidak ada', 'Sangat tinggi'],
              ['Kondisi laba jangka panjang', 'Laba normal', 'Dapat mempertahankan laba supernormal'],
              ['Efisiensi', 'Efisien (P = MC)', 'Tidak efisien (P > MC, terjadi deadweight loss)'],
            ],
          },
        ],
        formula: 'Kondisi Maksimalisasi Laba: MR = MC (berlaku untuk semua struktur pasar)',
      },
      {
        id: 'pasar-oligopoli-monopolistis',
        title: 'Oligopoli dan Persaingan Monopolistis',
        content: 'Oligopoli adalah struktur pasar dengan sedikit perusahaan besar yang mendominasi industri. Perusahaan-perusahaan dalam oligopoli saling bergantung (interdependence) — keputusan satu perusahaan memengaruhi dan direspons oleh pesaingnya. Persaingan monopolistis memiliki banyak penjual seperti persaingan sempurna, tetapi setiap penjual menjual produk yang terdiferensiasi sehingga memiliki sedikit kekuatan harga.',
        tables: [
          {
            caption: 'Karakteristik Empat Struktur Pasar',
            headers: ['Karakteristik', 'Persaingan Sempurna', 'Persaingan Monopolistis', 'Oligopoli', 'Monopoli'],
            rows: [
              ['Jumlah penjual', 'Sangat banyak', 'Banyak', 'Sedikit (2-10)', 'Satu'],
              ['Diferensiasi produk', 'Tidak ada (homogen)', 'Ada (merek, kualitas)', 'Sedikit atau ada', 'Tidak ada substitut dekat'],
              ['Hambatan masuk', 'Tidak ada', 'Rendah', 'Tinggi', 'Sangat tinggi'],
              ['Kekuatan harga', 'Tidak ada', 'Terbatas', 'Signifikan', 'Besar'],
              ['Contoh industri', 'Produk pertanian', 'Restoran, salon, pakaian', 'Otomotif, telekomunikasi, rokok', 'BUMN tertentu, paten obat'],
            ],
          },
        ],
        notes: [
          'Dalam oligopoli, perusahaan sering berkolusi (kartel) untuk bertindak seperti monopolis, tetapi kolusi umumnya dilarang oleh hukum persaingan usaha.',
          'Model kurva permintaan patah (kinked demand curve) menjelaskan kekakuan harga dalam oligopoli: jika satu perusahaan menaikkan harga, pesaing tidak ikut naik; jika menurunkan harga, pesaing ikut turun.',
          'Dalam persaingan monopolistis, diferensiasi produk menciptakan loyalitas merek yang memberikan sedikit kekuatan harga kepada penjual.',
        ],
      },
    ],
  },
  {
    id: 'statistik-deskriptif',
    title: 'Statistika Deskriptif dan Distribusi Normal',
    description: 'Statistika deskriptif menyajikan, meringkas, dan menggambarkan data secara kuantitatif. Ukuran pemusatan data (mean, median, modus) dan ukuran penyebaran data (varians, standar deviasi) merupakan konsep fundamental yang diuji dalam ujian CAFB.',
    sections: [
      {
        id: 'statistik-ukuran-pemusatan',
        title: 'Ukuran Pemusatan Data: Mean, Median, dan Modus',
        content: 'Ukuran pemusatan data menggambarkan nilai yang mewakili kumpulan data secara keseluruhan. Tiga ukuran pemusatan yang paling umum adalah rata-rata (mean), nilai tengah (median), dan nilai yang paling sering muncul (modus). Pemilihan ukuran yang tepat bergantung pada distribusi data dan tujuan analisis.',
        tables: [
          {
            caption: 'Perbandingan Mean, Median, dan Modus',
            headers: ['Ukuran', 'Definisi', 'Rumus (Data Tunggal)', 'Keunggulan', 'Kelemahan'],
            rows: [
              ['Mean (Rata-Rata)', 'Jumlah semua nilai dibagi banyaknya data', 'x̄ = (Σxi) / n', 'Menggunakan semua data, cocok untuk analisis lebih lanjut', 'Sangat dipengaruhi nilai ekstrem (outlier)'],
              ['Median', 'Nilai tengah setelah data diurutkan', 'Nilai ke-(n+1)/2 untuk n ganjil; rata-rata nilai ke-n/2 dan (n/2)+1 untuk n genap', 'Tidak terpengaruh outlier, representatif untuk data miring', 'Tidak mempertimbangkan semua nilai data'],
              ['Modus', 'Nilai yang paling sering muncul', 'Nilai dengan frekuensi tertinggi', 'Mudah dipahami, dapat digunakan untuk data nominal', 'Bisa tidak ada atau lebih dari satu; tidak menggunakan semua data'],
            ],
          },
        ],
        examples: [
          'Data: 5, 7, 8, 9, 10, 12, 100. Mean = (5+7+8+9+10+12+100)/7 = 21,57. Median = 9 (nilai ke-4). Modus = tidak ada (semua nilai unik). Mean dipengaruhi outlier 100; median lebih representatif di sini.',
          'Data gaji karyawan: Rp4 juta (5 orang), Rp5 juta (8 orang), Rp6 juta (3 orang), Rp50 juta (1 orang - direktur). Median dan modus lebih tepat digunakan daripada mean untuk menggambarkan gaji "khas" karyawan.',
        ],
        formula: 'Mean (x̄) = (x1 + x2 + ... + xn) / n = Σxi / n',
      },
      {
        id: 'statistik-ukuran-penyebaran',
        title: 'Ukuran Penyebaran: Varians dan Standar Deviasi',
        content: 'Ukuran penyebaran menggambarkan seberapa jauh data tersebar dari pusatnya. Rentang (range) adalah ukuran penyebaran paling sederhana namun hanya mempertimbangkan dua nilai ekstrem. Varians dan standar deviasi adalah ukuran penyebaran yang lebih informatif karena mempertimbangkan seluruh data.',
        formula: 'Varians Populasi (σ²) = Σ(xi - μ)² / N | Varians Sampel (s²) = Σ(xi - x̄)² / (n-1) | Standar Deviasi = √Varians',
        tables: [
          {
            caption: 'Langkah Menghitung Varians dan Standar Deviasi',
            headers: ['Langkah', 'Keterangan'],
            rows: [
              ['1', 'Hitung mean (rata-rata) dari data'],
              ['2', 'Hitung selisih setiap nilai data terhadap mean: (xi - x̄)'],
              ['3', 'Kuadratkan setiap selisih: (xi - x̄)²'],
              ['4', 'Jumlahkan semua kuadrat selisih: Σ(xi - x̄)²'],
              ['5', 'Bagi dengan n (populasi) atau n-1 (sampel) untuk mendapat varians'],
              ['6', 'Akar kuadratkan varians untuk mendapat standar deviasi'],
            ],
          },
        ],
        examples: [
          'Data: 10, 12, 14, 16, 18. Mean = 14. Deviasi: -4, -2, 0, 2, 4. Deviasi kuadrat: 16, 4, 0, 4, 16. Jumlah = 40. Varians populasi = 40/5 = 8. Standar deviasi = √8 ≈ 2,83.',
        ],
        notes: [
          'Untuk data sampel, varians dihitung dengan membagi (n-1) bukan n untuk menghasilkan estimasi yang tidak bias (unbiased estimator).',
          'Standar deviasi yang lebih kecil menunjukkan data lebih terkonsentrasi di sekitar mean; standar deviasi lebih besar menunjukkan data lebih tersebar.',
          'Koefisien variasi (CV = SD/Mean x 100%) digunakan untuk membandingkan penyebaran relatif dua kumpulan data dengan satuan atau skala berbeda.',
        ],
      },
      {
        id: 'statistik-distribusi-normal',
        title: 'Distribusi Normal',
        content: 'Distribusi normal (distribusi Gaussian) adalah distribusi probabilitas simetris berbentuk lonceng yang sangat penting dalam statistika. Distribusi normal sepenuhnya dicirikan oleh dua parameter: mean (μ) yang menentukan lokasi pusat dan standar deviasi (σ) yang menentukan lebar kurva. Banyak fenomena alam dan bisnis mendekati distribusi normal, sehingga distribusi ini menjadi dasar berbagai metode statistika inferensial.',
        tables: [
          {
            caption: 'Aturan Empiris (68-95-99,7 Rule) untuk Distribusi Normal',
            headers: ['Interval', 'Persentase Data yang Tercakup', 'Interpretasi'],
            rows: [
              ['μ ± 1σ', '±68,27%', 'Sekitar 68% data berada dalam satu standar deviasi dari mean'],
              ['μ ± 2σ', '±95,45%', 'Sekitar 95% data berada dalam dua standar deviasi dari mean'],
              ['μ ± 3σ', '±99,73%', 'Hampir semua data (99,7%) berada dalam tiga standar deviasi dari mean'],
            ],
          },
        ],
        formula: 'Z-Score = (x - μ) / σ   [nilai Z menunjukkan berapa standar deviasi suatu nilai x berada dari mean]',
        examples: [
          'Nilai ujian berdistribusi normal dengan mean 70 dan SD 10. Z-score untuk nilai 85 = (85-70)/10 = 1,5. Artinya nilai 85 berada 1,5 standar deviasi di atas rata-rata.',
          'Dengan mean 70 dan SD 10: sekitar 68% siswa memperoleh nilai antara 60-80; sekitar 95% siswa memperoleh nilai antara 50-90.',
        ],
        notes: [
          'Distribusi normal standar memiliki mean = 0 dan SD = 1, dinotasikan Z ~ N(0,1).',
          'Transformasi ke Z-score memungkinkan penggunaan tabel distribusi normal standar untuk mencari probabilitas.',
          'Dalam konteks CPA, distribusi normal digunakan dalam sampling audit dan analisis risiko.',
        ],
      },
    ],
  },
];
