import type { FeedCard } from './feedData';

export const enrichedFeedCards3: FeedCard[] = [
  // ===== PELAPORAN KORPORAT (10 cards) =====

  // 1. Quiz — Konsolidasi PSAK 65: definisi pengendalian
  {
    id: 'enrich-pk-01',
    type: 'quiz',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Definisi Pengendalian — PSAK 65',
    content:
      'Menurut PSAK 65, investor dinyatakan memiliki pengendalian atas investee apabila memenuhi tiga unsur. Manakah yang BUKAN merupakan salah satu unsur tersebut?',
    options: [
      'Kekuasaan atas investee',
      'Eksposur atau hak atas imbal hasil variabel dari keterlibatannya dengan investee',
      'Kemampuan menggunakan kekuasaan untuk mempengaruhi imbal hasil',
      'Kepemilikan saham mayoritas lebih dari 75%',
    ],
    correctIndex: 3,
    explanation:
      'PSAK 65 mendefinisikan pengendalian melalui tiga unsur: (1) kekuasaan atas investee, (2) eksposur atau hak atas imbal hasil variabel, dan (3) kemampuan menggunakan kekuasaan untuk mempengaruhi imbal hasil. Kepemilikan saham 75% adalah indikasi, bukan syarat mutlak — pengendalian de facto dapat terjadi tanpa mayoritas mutlak.',
  },

  // 2. Quiz — Metode akuisisi: pengukuran goodwill
  {
    id: 'enrich-pk-02',
    type: 'quiz',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Pengukuran Goodwill — Metode Akuisisi',
    content:
      'PT Alpha mengakuisisi 80% saham PT Beta. Nilai wajar aset neto teridentifikasi PT Beta adalah Rp 500 juta. Imbalan yang dialihkan adalah Rp 450 juta. Dengan metode full goodwill, nilai wajar KNP diestimasi Rp 90 juta. Berapa goodwill yang diakui?',
    options: [
      'Rp 40 juta',
      'Rp 50 juta',
      'Rp 90 juta',
      'Rp 130 juta',
    ],
    correctIndex: 0,
    explanation:
      'Full goodwill = (Imbalan dialihkan + Nilai wajar KNP) − Nilai wajar aset neto teridentifikasi = (Rp 450 juta + Rp 90 juta) − Rp 500 juta = Rp 40 juta. Metode full goodwill mengakui goodwill atas seluruh entitas, termasuk bagian KNP.',
  },

  // 3. Quiz — Full goodwill vs proportionate goodwill
  {
    id: 'enrich-pk-03',
    type: 'quiz',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Full Goodwill vs Proportionate Goodwill',
    content:
      'Perbedaan utama antara metode full goodwill dan proportionate goodwill terletak pada pengukuran apa?',
    options: [
      'Pengukuran imbalan yang dialihkan oleh pihak pengakuisisi',
      'Pengukuran kepentingan non-pengendali (KNP) pada tanggal akuisisi',
      'Pengukuran aset neto teridentifikasi milik pihak yang diakuisisi',
      'Pengakuan biaya transaksi akuisisi',
    ],
    correctIndex: 1,
    explanation:
      'Perbedaan utama terletak pada pengukuran KNP. Metode full goodwill mengukur KNP sebesar nilai wajarnya sehingga goodwill yang diakui mencakup bagian KNP. Metode proportionate mengukur KNP sebesar proporsi nilai wajar aset neto teridentifikasi sehingga goodwill hanya mencerminkan bagian pihak pengakuisisi.',
  },

  // 4. Flashcard — KNP dalam laporan posisi keuangan konsolidasi
  {
    id: 'enrich-pk-04',
    type: 'flashcard',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Kepentingan Non-Pengendali (KNP)',
    content:
      'Di mana kepentingan non-pengendali (KNP) disajikan dalam laporan keuangan konsolidasi, dan apakah ia termasuk ekuitas?',
    answer:
      'KNP disajikan dalam bagian ekuitas pada laporan posisi keuangan konsolidasi, terpisah dari ekuitas pemilik entitas induk. KNP merupakan bagian dari ekuitas konsolidasi, bukan liabilitas, sesuai PSAK 65.',
  },

  // 5. Quiz — Klasifikasi instrumen keuangan PSAK 71
  {
    id: 'enrich-pk-05',
    type: 'quiz',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Klasifikasi Aset Keuangan — PSAK 71',
    content:
      'Menurut PSAK 71, aset keuangan diklasifikasikan berdasarkan dua kriteria. Manakah pasangan kriteria yang tepat?',
    options: [
      'Jenis instrumen (ekuitas atau utang) dan masa jatuh tempo',
      'Model bisnis entitas dan karakteristik arus kas kontraktual',
      'Likuiditas instrumen dan peringkat kredit penerbit',
      'Niat manajemen dan kemampuan untuk mempertahankan hingga jatuh tempo',
    ],
    correctIndex: 1,
    explanation:
      'PSAK 71 mengklasifikasikan aset keuangan berdasarkan: (1) model bisnis entitas dalam mengelola aset keuangan, dan (2) karakteristik arus kas kontraktual aset keuangan (uji SPPI — Solely Payments of Principal and Interest). Kombinasi keduanya menentukan apakah aset diukur pada biaya perolehan diamortisasi, FVOCI, atau FVTPL.',
  },

  // 6. Flashcard — FVTPL, FVOCI, Amortized Cost
  {
    id: 'enrich-pk-06',
    type: 'flashcard',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Tiga Kategori Pengukuran Aset Keuangan',
    content:
      'Jelaskan secara singkat tiga kategori pengukuran aset keuangan menurut PSAK 71 beserta kondisi penerapannya.',
    answer:
      'Biaya perolehan diamortisasi (amortized cost): model bisnis hold-to-collect dan arus kas lulus uji SPPI. FVOCI: model bisnis hold-to-collect-and-sell dan arus kas lulus uji SPPI, atau instrumen ekuitas yang dipilih melalui OCI election. FVTPL: seluruh aset keuangan yang tidak memenuhi syarat untuk dua kategori sebelumnya, atau yang ditetapkan secara sukarela untuk mengurangi mismatch akuntansi.',
  },

  // 7. Quiz — Expected Credit Loss (ECL)
  {
    id: 'enrich-pk-07',
    type: 'quiz',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Expected Credit Loss — Tiga Tahap',
    content:
      'Dalam model penurunan nilai ECL (PSAK 71), aset keuangan pada Tahap 2 mengakui cadangan kerugian sebesar:',
    options: [
      '12-bulan ECL',
      'Lifetime ECL dan bunga dihitung atas nilai bruto',
      'Lifetime ECL dan bunga dihitung atas nilai neto (setelah dikurangi cadangan)',
      'Tidak ada cadangan yang diakui karena belum terjadi default',
    ],
    correctIndex: 1,
    explanation:
      'Tahap 2 mencakup aset keuangan yang mengalami peningkatan risiko kredit yang signifikan sejak pengakuan awal, namun belum terjadi penurunan nilai. Pada Tahap 2, cadangan diukur sebesar Lifetime ECL dan pendapatan bunga masih dihitung atas nilai bruto. Tahap 3 (credit-impaired) juga menggunakan Lifetime ECL tetapi bunga dihitung atas nilai neto.',
  },

  // 8. Quiz — Eliminasi transaksi intra-grup
  {
    id: 'enrich-pk-08',
    type: 'quiz',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Eliminasi Laba Belum Terealisasi Intra-Grup',
    content:
      'PT Induk memiliki 75% saham PT Anak. PT Anak menjual barang ke PT Induk seharga Rp 120 juta; harga pokok PT Anak atas barang tersebut Rp 80 juta. Pada akhir periode, seluruh barang masih ada di persediaan PT Induk. Berapa laba belum terealisasi yang dieliminasi dalam konsolidasi?',
    options: [
      'Rp 30 juta (75% x Rp 40 juta)',
      'Rp 40 juta (seluruh laba intra-grup)',
      'Rp 120 juta (seluruh nilai penjualan)',
      'Rp 10 juta (25% x Rp 40 juta, bagian KNP)',
    ],
    correctIndex: 1,
    explanation:
      'Laba belum terealisasi intra-grup dieliminasi seluruhnya (100%) sebesar Rp 40 juta (Rp 120 juta − Rp 80 juta), tanpa memandang persentase kepemilikan. Eliminasi dilakukan terhadap persediaan dan laba ditahan/laba periode. Bagian KNP menyerap porsinya (25% x Rp 40 juta = Rp 10 juta) sebagai pengurangan KNP, sedangkan sisanya mengurangi ekuitas pemilik induk.',
  },

  // 9. Flashcard — Goodwill impairment test
  {
    id: 'enrich-pk-09',
    type: 'flashcard',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Uji Penurunan Nilai Goodwill',
    content:
      'Bagaimana goodwill diuji penurunan nilainya menurut PSAK 48, dan mengapa goodwill tidak diamortisasi?',
    answer:
      'Goodwill dialokasikan ke unit penghasil kas (UPK) dan diuji penurunan nilai setidaknya setiap tahun (atau lebih sering bila ada indikasi). Nilai tercatat UPK (termasuk goodwill yang dialokasikan) dibandingkan dengan jumlah terpulihkan UPK (nilai tertinggi antara nilai wajar dikurangi biaya pelepasan dan nilai pakai). Jika nilai tercatat melebihi jumlah terpulihkan, rugi penurunan nilai diakui — didahulukan mengurangi goodwill. Goodwill tidak diamortisasi karena masa manfaatnya tidak dapat ditentukan secara andal; sebagai gantinya, dilakukan uji impairment tahunan.',
  },

  // 10. Quiz — Konsolidasi: eliminasi investasi
  {
    id: 'enrich-pk-10',
    type: 'quiz',
    subject: 'Pelaporan Korporat',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Jurnal Eliminasi Investasi dalam Konsolidasi',
    content:
      'Pada saat penyusunan laporan keuangan konsolidasi, akun investasi entitas induk pada entitas anak dieliminasi terhadap:',
    options: [
      'Pendapatan entitas anak selama periode berjalan',
      'Ekuitas entitas anak pada tanggal akuisisi dan goodwill yang diakui',
      'Total aset entitas anak pada tanggal pelaporan',
      'Utang entitas anak kepada entitas induk',
    ],
    correctIndex: 1,
    explanation:
      'Dalam jurnal eliminasi, akun investasi entitas induk dieliminasi terhadap ekuitas entitas anak pada tanggal akuisisi. Selisih antara nilai investasi (ditambah nilai wajar KNP pada metode full goodwill) dan nilai wajar aset neto teridentifikasi diakui sebagai goodwill. Jurnal ini menghilangkan hubungan internal agar laporan konsolidasi mencerminkan entitas tunggal.',
  },

  // ===== MANAJEMEN KEUANGAN (10 cards) =====

  // 11. Quiz — WACC formula
  {
    id: 'enrich-mk-01',
    type: 'quiz',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Formula WACC',
    content:
      'Sebuah perusahaan memiliki struktur modal: utang Rp 400 juta (biaya utang sebelum pajak 10%), ekuitas Rp 600 juta (biaya ekuitas 14%). Tarif pajak 25%. Berapa WACC perusahaan tersebut?',
    options: [
      '11,4%',
      '11,8%',
      '12,4%',
      '10,8%',
    ],
    correctIndex: 0,
    explanation:
      'WACC = (E/V x Ke) + (D/V x Kd x (1−T)). Total modal (V) = Rp 1.000 juta. Bobot ekuitas = 60%, bobot utang = 40%. WACC = (0,60 x 14%) + (0,40 x 10% x 0,75) = 8,4% + 3,0% = 11,4%.',
  },

  // 12. Flashcard — Komponen WACC
  {
    id: 'enrich-mk-02',
    type: 'flashcard',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Komponen WACC',
    content:
      'Sebutkan dan jelaskan komponen-komponen utama yang membentuk Weighted Average Cost of Capital (WACC).',
    answer:
      'WACC terdiri dari: (1) Biaya ekuitas (Ke) — tingkat imbal hasil yang disyaratkan pemegang saham, umumnya diestimasi dengan CAPM atau Dividend Discount Model. (2) Biaya utang setelah pajak (Kd x (1−T)) — bunga yang dibayar dikurangi manfaat pajak karena bunga dapat dikurangkan. (3) Bobot masing-masing komponen berdasarkan nilai pasar (bukan nilai buku). WACC mencerminkan biaya modal rata-rata tertimbang yang digunakan sebagai tingkat diskonto dalam evaluasi investasi.',
  },

  // 13. Quiz — NPV vs IRR: keputusan investasi
  {
    id: 'enrich-mk-03',
    type: 'quiz',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'NPV vs IRR — Konflik Peringkat Proyek',
    content:
      'Proyek A memiliki NPV Rp 50 juta dan IRR 18%. Proyek B memiliki NPV Rp 80 juta dan IRR 15%. WACC perusahaan adalah 10%. Jika kedua proyek mutually exclusive, proyek mana yang dipilih dan mengapa?',
    options: [
      'Proyek A, karena IRR-nya lebih tinggi',
      'Proyek B, karena NPV-nya lebih tinggi dan NPV adalah ukuran penciptaan nilai yang lebih andal',
      'Proyek A, karena return per unit modal lebih besar',
      'Keduanya ditolak karena ada konflik antara NPV dan IRR',
    ],
    correctIndex: 1,
    explanation:
      'Ketika NPV dan IRR bertentangan untuk proyek mutually exclusive, NPV diprioritaskan karena secara langsung mengukur kenaikan nilai pemegang saham. IRR mengasumsikan reinvestasi arus kas pada tingkat IRR itu sendiri (yang mungkin tidak realistis), sedangkan NPV mengasumsikan reinvestasi pada WACC. Proyek B menambah nilai Rp 80 juta lebih besar daripada Proyek A Rp 50 juta.',
  },

  // 14. Quiz — Modigliani-Miller tanpa pajak
  {
    id: 'enrich-mk-04',
    type: 'quiz',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Teorema Modigliani-Miller Tanpa Pajak',
    content:
      'Proposisi I Modigliani-Miller dalam kondisi tanpa pajak menyatakan bahwa:',
    options: [
      'Nilai perusahaan meningkat seiring bertambahnya utang karena utang lebih murah',
      'Nilai perusahaan tidak dipengaruhi oleh struktur modal — nilai ditentukan oleh arus kas operasional',
      'Perusahaan dengan utang lebih banyak selalu memiliki WACC lebih rendah',
      'Biaya ekuitas tidak berubah meskipun leverage meningkat',
    ],
    correctIndex: 1,
    explanation:
      'MM Proposisi I (tanpa pajak): nilai perusahaan bersifat independen terhadap struktur modal — V_L = V_U. Dalam pasar sempurna tanpa pajak, cara perusahaan membiayai asetnya tidak mempengaruhi nilai totalnya. Proposisi II menyatakan bahwa biaya ekuitas meningkat seiring leverage untuk mengompensasi risiko tambahan, sehingga WACC tetap konstan.',
  },

  // 15. Quiz — MM dengan pajak: tax shield
  {
    id: 'enrich-mk-05',
    type: 'quiz',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Modigliani-Miller dengan Pajak — Tax Shield',
    content:
      'Menurut Modigliani-Miller dengan pajak, nilai perusahaan berleverasi (V_L) dibandingkan perusahaan tanpa utang (V_U) adalah:',
    options: [
      'V_L = V_U (tidak ada perbedaan)',
      'V_L = V_U − T x D (nilai berkurang karena risiko kebangkrutan)',
      'V_L = V_U + T x D (nilai meningkat sebesar present value tax shield)',
      'V_L = V_U x (1 + T) (nilai meningkat secara proporsional)',
    ],
    correctIndex: 2,
    explanation:
      'Dengan memasukkan pajak, MM Proposisi I menjadi: V_L = V_U + T x D, di mana T adalah tarif pajak korporat dan D adalah nilai utang. Penghematan pajak atas bunga (tax shield) meningkatkan nilai perusahaan. Implikasinya adalah perusahaan sebaiknya menggunakan utang sebanyak mungkin — namun hal ini dibatasi oleh biaya kesulitan keuangan (bankruptcy cost) dalam Trade-off Theory.',
  },

  // 16. Flashcard — Trade-off theory
  {
    id: 'enrich-mk-06',
    type: 'flashcard',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Trade-off Theory Struktur Modal',
    content:
      'Jelaskan inti dari Trade-off Theory dalam penentuan struktur modal optimal.',
    answer:
      'Trade-off Theory menyatakan bahwa perusahaan menentukan struktur modal optimal dengan menyeimbangkan manfaat tax shield utang (V_L = V_U + PV tax shield) terhadap biaya kesulitan keuangan (financial distress cost), yang meliputi biaya kebangkrutan langsung (biaya hukum dan administrasi) dan tidak langsung (kehilangan pelanggan, pemasok, karyawan kunci). Struktur modal optimal tercapai pada titik di mana penambahan satu unit utang memberikan manfaat pajak marjinal yang sama dengan peningkatan biaya kesulitan keuangan marjinal. Nilai perusahaan: V_L = V_U + PV(tax shield) − PV(financial distress cost).',
  },

  // 17. Quiz — Pecking order theory
  {
    id: 'enrich-mk-07',
    type: 'quiz',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Pecking Order Theory',
    content:
      'Menurut Pecking Order Theory (Myers & Majluf), urutan preferensi pembiayaan perusahaan dari yang paling disukai adalah:',
    options: [
      'Penerbitan saham baru → utang → laba ditahan',
      'Utang → laba ditahan → penerbitan saham baru',
      'Laba ditahan → utang → penerbitan saham baru',
      'Laba ditahan → penerbitan saham baru → utang',
    ],
    correctIndex: 2,
    explanation:
      'Pecking Order Theory menyatakan urutan: (1) laba ditahan (internal financing) karena tidak ada biaya informasi asimetri, (2) utang karena sinyal yang lebih kecil dari saham baru, (3) penerbitan saham baru sebagai pilihan terakhir karena pasar menginterpretasikan penerbitan saham sebagai sinyal bahwa saham overvalued. Teori ini didasarkan pada informasi asimetri antara manajemen dan investor.',
  },

  // 18. Quiz — Siklus konversi kas (CCC)
  {
    id: 'enrich-mk-08',
    type: 'quiz',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Siklus Konversi Kas (CCC)',
    content:
      'Suatu perusahaan memiliki: Days Inventory Outstanding (DIO) = 45 hari, Days Sales Outstanding (DSO) = 30 hari, Days Payable Outstanding (DPO) = 20 hari. Berapa Cash Conversion Cycle (CCC)?',
    options: [
      '55 hari',
      '75 hari',
      '95 hari',
      '35 hari',
    ],
    correctIndex: 0,
    explanation:
      'CCC = DIO + DSO − DPO = 45 + 30 − 20 = 55 hari. CCC mengukur jumlah hari dari pengeluaran kas untuk pembelian bahan baku hingga penerimaan kas dari pelanggan. Semakin pendek CCC, semakin efisien manajemen modal kerja perusahaan. CCC dapat dipersingkat dengan mempercepat penagihan piutang, mempercepat perputaran persediaan, atau memperpanjang periode pembayaran utang usaha (tanpa merusak hubungan pemasok).',
  },

  // 19. Flashcard — EOQ
  {
    id: 'enrich-mk-09',
    type: 'flashcard',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Economic Order Quantity (EOQ)',
    content:
      'Tuliskan formula EOQ dan jelaskan arti setiap variabelnya, serta asumsi utama model EOQ.',
    answer:
      'EOQ = sqrt(2 x D x S / H), di mana D = permintaan tahunan (unit), S = biaya pemesanan per order (ordering cost), H = biaya penyimpanan per unit per tahun (holding cost). EOQ memberikan jumlah pemesanan yang meminimalkan total biaya persediaan (biaya pemesanan + biaya penyimpanan). Asumsi utama: permintaan konstan dan diketahui, lead time konstan, tidak ada diskon kuantitas, dan biaya per unit konstan. Pada titik EOQ, biaya pemesanan total sama dengan biaya penyimpanan total.',
  },

  // 20. Quiz — Manajemen modal kerja: kebijakan agresif vs konservatif
  {
    id: 'enrich-mk-10',
    type: 'quiz',
    subject: 'Manajemen Keuangan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Kebijakan Modal Kerja: Agresif vs Konservatif',
    content:
      'Perusahaan yang menerapkan kebijakan modal kerja agresif cenderung:',
    options: [
      'Mempertahankan kas dan persediaan dalam jumlah besar untuk mengantisipasi ketidakpastian',
      'Membiayai sebagian aset lancar permanen dengan utang jangka pendek untuk meminimalkan biaya pendanaan',
      'Menggunakan utang jangka panjang untuk membiayai seluruh aset lancar guna mengurangi risiko likuiditas',
      'Memberikan syarat kredit yang sangat ketat kepada pelanggan untuk mempercepat penerimaan kas',
    ],
    correctIndex: 1,
    explanation:
      'Kebijakan modal kerja agresif mencari imbal hasil lebih tinggi dengan menerima risiko likuiditas lebih besar: meminimalkan aset lancar (persediaan dan kas rendah) dan membiayai sebagian besar kebutuhan — termasuk aset lancar permanen — dengan utang jangka pendek yang biayanya lebih rendah. Kebijakan konservatif sebaliknya: aset lancar besar dan pendanaan jangka panjang mendominasi untuk menjamin likuiditas meskipun biaya lebih tinggi.',
  },
];
