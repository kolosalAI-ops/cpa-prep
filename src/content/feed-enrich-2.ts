import type { FeedCard } from './feedData';

export const enrichedFeedCards2: FeedCard[] = [
  // ===== MANAJEMEN BISNIS DASAR (10 cards) =====

  // 1. Quiz — Fungsi Manajemen POAC
  {
    id: 'enrich-mbd-01',
    type: 'quiz',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Fungsi Manajemen POAC',
    content: 'Urutan fungsi manajemen POAC yang benar adalah...',
    options: [
      'Planning, Organizing, Actuating, Controlling',
      'Planning, Operating, Actuating, Controlling',
      'Preparing, Organizing, Actuating, Checking',
      'Planning, Organizing, Allocating, Controlling',
    ],
    correctIndex: 0,
    explanation:
      'POAC adalah singkatan dari Planning (perencanaan), Organizing (pengorganisasian), Actuating (pelaksanaan/pengarahan), dan Controlling (pengendalian). Keempat fungsi ini membentuk siklus manajemen yang saling berkaitan.',
  },

  // 2. Quiz — Analisis SWOT
  {
    id: 'enrich-mbd-02',
    type: 'quiz',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Komponen Analisis SWOT',
    content:
      'Dalam analisis SWOT, faktor "Opportunities" dan "Threats" termasuk dalam kategori...',
    options: [
      'Faktor internal perusahaan',
      'Faktor eksternal perusahaan',
      'Faktor finansial perusahaan',
      'Faktor operasional perusahaan',
    ],
    correctIndex: 1,
    explanation:
      'Opportunities (peluang) dan Threats (ancaman) adalah faktor eksternal yang berasal dari lingkungan luar perusahaan. Sebaliknya, Strengths (kekuatan) dan Weaknesses (kelemahan) adalah faktor internal yang berada di dalam kendali perusahaan.',
  },

  // 3. Quiz — Teori Motivasi Maslow
  {
    id: 'enrich-mbd-03',
    type: 'quiz',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Hierarki Kebutuhan Maslow',
    content:
      'Menurut teori hierarki kebutuhan Maslow, kebutuhan apa yang berada pada puncak piramida (tingkat tertinggi)?',
    options: [
      'Kebutuhan rasa aman (safety needs)',
      'Kebutuhan sosial (social needs)',
      'Kebutuhan penghargaan (esteem needs)',
      'Kebutuhan aktualisasi diri (self-actualization)',
    ],
    correctIndex: 3,
    explanation:
      'Maslow menyusun hierarki kebutuhan dari bawah ke atas: (1) Fisiologis, (2) Keamanan, (3) Sosial/Kasih Sayang, (4) Penghargaan, dan (5) Aktualisasi Diri. Aktualisasi diri adalah puncak tertinggi, yaitu dorongan untuk mencapai potensi penuh seseorang.',
  },

  // 4. Quiz — Teori Dua Faktor Herzberg
  {
    id: 'enrich-mbd-04',
    type: 'quiz',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Teori Dua Faktor Herzberg',
    content:
      'Dalam teori dua faktor Herzberg, manakah yang termasuk "faktor motivator" (bukan faktor higiene)?',
    options: [
      'Gaji dan tunjangan',
      'Kondisi lingkungan kerja',
      'Pencapaian dan pengakuan atas prestasi',
      'Kebijakan perusahaan',
    ],
    correctIndex: 2,
    explanation:
      'Herzberg membedakan faktor higiene (ekstrinsik) seperti gaji, kondisi kerja, dan kebijakan perusahaan — yang hanya mencegah ketidakpuasan — dengan faktor motivator (intrinsik) seperti pencapaian, pengakuan, tanggung jawab, dan kemajuan — yang benar-benar mendorong kepuasan dan motivasi kerja.',
  },

  // 5. Quiz — Rekrutmen & Seleksi SDM
  {
    id: 'enrich-mbd-05',
    type: 'quiz',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Proses Rekrutmen SDM',
    content:
      'Rekrutmen internal memiliki keunggulan dibandingkan rekrutmen eksternal, yaitu...',
    options: [
      'Mendatangkan ide dan perspektif segar dari luar',
      'Memperluas jaringan talenta perusahaan',
      'Meningkatkan moral dan motivasi karyawan yang ada',
      'Mengurangi biaya pelatihan dasar secara signifikan',
    ],
    correctIndex: 2,
    explanation:
      'Rekrutmen internal (promosi atau mutasi dari dalam) meningkatkan moral karyawan karena mereka melihat adanya peluang karier. Rekrutmen eksternal justru lebih cocok untuk mendatangkan ide segar, memperluas jaringan talenta, dan mengisi posisi yang tidak bisa dipenuhi dari dalam.',
  },

  // 6. Quiz — Gaya Kepemimpinan
  {
    id: 'enrich-mbd-06',
    type: 'quiz',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Gaya Kepemimpinan',
    content:
      'Seorang manajer membuat semua keputusan sendiri tanpa melibatkan tim. Gaya kepemimpinan apa yang diterapkannya?',
    options: [
      'Demokratis (participative)',
      'Laissez-faire (delegatif)',
      'Transformasional',
      'Otoriter (autokratis)',
    ],
    correctIndex: 3,
    explanation:
      'Gaya kepemimpinan otoriter (autokratis) ditandai oleh pemimpin yang membuat keputusan secara sepihak tanpa partisipasi anggota tim. Gaya demokratis melibatkan anggota dalam pengambilan keputusan, laissez-faire mendelegasikan penuh kepada tim, dan transformasional berfokus pada menginspirasi dan mengubah anggota.',
  },

  // 7. Quiz — Struktur Organisasi
  {
    id: 'enrich-mbd-07',
    type: 'quiz',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Struktur Organisasi Matriks',
    content:
      'Kelemahan utama struktur organisasi matriks adalah...',
    options: [
      'Tidak ada spesialisasi fungsi',
      'Karyawan dapat memiliki dua atasan sekaligus, memicu konflik perintah',
      'Tidak fleksibel terhadap perubahan proyek',
      'Sulit diterapkan di perusahaan berskala besar',
    ],
    correctIndex: 1,
    explanation:
      'Pada struktur matriks, seorang karyawan melaporkan kepada manajer fungsional sekaligus manajer proyek. Kondisi ini dapat menciptakan ambiguitas wewenang dan konflik perintah (dual authority conflict), yang merupakan kelemahan utamanya.',
  },

  // 8. Flashcard — Manajemen Perubahan
  {
    id: 'enrich-mbd-08',
    type: 'flashcard',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Model Perubahan Lewin',
    content:
      'Sebutkan tiga tahap model manajemen perubahan Kurt Lewin dan jelaskan masing-masing secara singkat.',
    answer:
      '1. Unfreezing (Pencairan): mempersiapkan organisasi untuk menerima perubahan dengan menciptakan kesadaran bahwa status quo perlu diubah. 2. Changing (Perubahan): melaksanakan perubahan aktual — perilaku, proses, atau struktur baru diterapkan. 3. Refreezing (Pembekuan ulang): menstabilkan dan mengintegrasikan perubahan ke dalam budaya organisasi agar menjadi norma baru.',
  },

  // 9. Flashcard — Struktur Organisasi Fungsional vs Divisi
  {
    id: 'enrich-mbd-09',
    type: 'flashcard',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Struktur Fungsional vs Struktur Divisi',
    content:
      'Apa perbedaan utama antara struktur organisasi fungsional dan struktur divisional?',
    answer:
      'Struktur fungsional mengelompokkan karyawan berdasarkan fungsi atau keahlian (mis. departemen Pemasaran, Keuangan, Produksi). Struktur divisional mengelompokkan berdasarkan produk, wilayah, atau segmen pelanggan, sehingga setiap divisi bersifat semi-otonom dan memiliki fungsinya sendiri. Fungsional cocok untuk perusahaan dengan produk tunggal; divisional cocok untuk perusahaan dengan lini produk atau pasar yang beragam.',
  },

  // 10. Flashcard — Analisis SWOT Strategi
  {
    id: 'enrich-mbd-10',
    type: 'flashcard',
    subject: 'Manajemen Bisnis Dasar',
    level: 'cafb',
    difficulty: 'lanjutan',
    title: 'Matriks Strategi SWOT',
    content:
      'Dari pertemuan empat kuadran analisis SWOT, strategi apa yang dihasilkan dari kombinasi Kekuatan (S) dan Peluang (O)?',
    answer:
      'Strategi SO (Strengths-Opportunities) disebut juga strategi agresif atau pertumbuhan. Perusahaan memanfaatkan kekuatan internalnya untuk merebut peluang eksternal yang ada. Contoh: perusahaan dengan teknologi unggul (kekuatan) memanfaatkan tren digitalisasi pasar (peluang) dengan meluncurkan produk baru berbasis digital.',
  },

  // ===== EKONOMI & STATISTIK BISNIS (10 cards) =====

  // 11. Quiz — Elastisitas Harga
  {
    id: 'enrich-esb-01',
    type: 'quiz',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Rumus Elastisitas Harga Permintaan',
    content:
      'Rumus elastisitas harga permintaan (Ed) yang benar adalah...',
    options: [
      'Ed = (% perubahan harga) / (% perubahan kuantitas diminta)',
      'Ed = (% perubahan kuantitas diminta) / (% perubahan harga)',
      'Ed = (perubahan harga) x (perubahan kuantitas)',
      'Ed = (perubahan kuantitas) - (perubahan harga)',
    ],
    correctIndex: 1,
    explanation:
      'Ed = (% perubahan kuantitas yang diminta) dibagi (% perubahan harga). Nilai Ed biasanya negatif (karena harga dan kuantitas berlawanan arah), namun sering disajikan dalam nilai absolut. Jika |Ed| > 1 maka permintaan elastis; jika |Ed| < 1 maka inelastis; jika |Ed| = 1 maka elastis uniter.',
  },

  // 12. Quiz — Kategori Elastisitas
  {
    id: 'enrich-esb-02',
    type: 'quiz',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Kategori Elastisitas Permintaan',
    content:
      'Harga bensin naik 10%, namun kuantitas yang diminta hanya turun 2%. Berdasarkan nilai elastisitasnya, permintaan bensin bersifat...',
    options: [
      'Elastis (Ed > 1)',
      'Elastis uniter (Ed = 1)',
      'Inelastis (Ed < 1)',
      'Elastis sempurna (Ed = tidak terhingga)',
    ],
    correctIndex: 2,
    explanation:
      'Ed = 2% / 10% = 0,2. Karena |Ed| = 0,2 < 1, permintaan bersifat inelastis. Artinya, konsumen tidak terlalu sensitif terhadap perubahan harga. Barang kebutuhan pokok seperti bensin (tanpa substitusi mudah) cenderung memiliki permintaan yang inelastis.',
  },

  // 13. Quiz — Elastisitas Pendapatan
  {
    id: 'enrich-esb-03',
    type: 'quiz',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Elastisitas Pendapatan Permintaan',
    content:
      'Jika elastisitas pendapatan permintaan suatu barang bernilai negatif, barang tersebut dikategorikan sebagai...',
    options: [
      'Barang normal',
      'Barang mewah (luxury goods)',
      'Barang inferior',
      'Barang Giffen',
    ],
    correctIndex: 2,
    explanation:
      'Elastisitas pendapatan (Ei) = % perubahan kuantitas / % perubahan pendapatan. Jika Ei < 0 (negatif), barang disebut barang inferior: ketika pendapatan naik, permintaannya justru turun karena konsumen beralih ke barang yang lebih berkualitas. Jika Ei > 0, barang bersifat normal; jika Ei > 1, barang dikategorikan mewah.',
  },

  // 14. Quiz — Struktur Pasar Monopoli
  {
    id: 'enrich-esb-04',
    type: 'quiz',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Ciri Pasar Monopoli',
    content:
      'Manakah pernyataan yang BENAR mengenai pasar monopoli?',
    options: [
      'Terdapat banyak penjual dengan produk yang identik',
      'Harga ditentukan oleh mekanisme pasar secara bebas',
      'Terdapat satu penjual yang menguasai penuh pasar dan menjadi price maker',
      'Tidak ada hambatan masuk bagi perusahaan baru',
    ],
    correctIndex: 2,
    explanation:
      'Monopoli ditandai oleh satu penjual tunggal yang menguasai seluruh pasokan produk dan bertindak sebagai price maker (penentu harga). Terdapat hambatan masuk yang tinggi (barriers to entry) sehingga perusahaan baru sulit masuk. Pasar persaingan sempurna-lah yang memiliki banyak penjual, produk identik, dan tidak ada hambatan masuk.',
  },

  // 15. Quiz — Kebijakan Fiskal
  {
    id: 'enrich-esb-05',
    type: 'quiz',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Kebijakan Fiskal Ekspansif',
    content:
      'Untuk mengatasi resesi ekonomi, pemerintah menerapkan kebijakan fiskal ekspansif. Langkah yang TEPAT adalah...',
    options: [
      'Menaikkan tarif pajak dan memangkas belanja pemerintah',
      'Mengurangi jumlah uang beredar melalui bank sentral',
      'Menurunkan tarif pajak dan meningkatkan belanja pemerintah',
      'Menaikkan suku bunga acuan untuk menekan inflasi',
    ],
    correctIndex: 2,
    explanation:
      'Kebijakan fiskal ekspansif bertujuan merangsang perekonomian saat resesi melalui dua instrumen utama: (1) penurunan pajak agar daya beli masyarakat meningkat, dan (2) peningkatan belanja pemerintah untuk mendorong permintaan agregat. Menaikkan pajak dan memangkas belanja adalah kebijakan fiskal kontraktif.',
  },

  // 16. Quiz — Standar Deviasi
  {
    id: 'enrich-esb-06',
    type: 'quiz',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Interpretasi Standar Deviasi',
    content:
      'Dua produk investasi memiliki rata-rata imbal hasil yang sama. Produk A memiliki standar deviasi 5%, sedangkan Produk B memiliki standar deviasi 15%. Kesimpulan yang benar adalah...',
    options: [
      'Produk B lebih menguntungkan karena standar deviasinya lebih besar',
      'Produk A lebih berisiko karena standar deviasinya lebih kecil',
      'Produk A lebih stabil dan kurang berisiko dibandingkan Produk B',
      'Keduanya memiliki risiko yang sama karena rata-ratanya sama',
    ],
    correctIndex: 2,
    explanation:
      'Standar deviasi mengukur seberapa jauh data menyebar dari rata-rata (dispersi). Standar deviasi yang lebih besar menunjukkan variabilitas yang lebih tinggi, artinya lebih tidak stabil dan lebih berisiko. Produk A dengan standar deviasi 5% lebih konsisten dan berisiko lebih rendah dibandingkan Produk B dengan standar deviasi 15%.',
  },

  // 17. Quiz — Z-Score Distribusi Normal
  {
    id: 'enrich-esb-07',
    type: 'quiz',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'lanjutan',
    title: 'Z-Score dan Distribusi Normal',
    content:
      'Nilai rata-rata ujian adalah 70 dengan standar deviasi 10. Seorang mahasiswa mendapat nilai 85. Berapa Z-score mahasiswa tersebut?',
    options: [
      'Z = 0,5',
      'Z = 1,0',
      'Z = 1,5',
      'Z = 2,0',
    ],
    correctIndex: 2,
    explanation:
      'Z-score = (nilai - rata-rata) / standar deviasi = (85 - 70) / 10 = 15 / 10 = 1,5. Z-score mengukur berapa standar deviasi suatu nilai berada di atas atau di bawah rata-rata. Z = 1,5 berarti nilai mahasiswa tersebut 1,5 standar deviasi di atas rata-rata.',
  },

  // 18. Flashcard — Inflasi dan GDP
  {
    id: 'enrich-esb-08',
    type: 'flashcard',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Perbedaan GDP Nominal dan GDP Riil',
    content:
      'Apa perbedaan antara GDP nominal dan GDP riil, dan mengapa GDP riil lebih berguna untuk perbandingan antar tahun?',
    answer:
      'GDP nominal mengukur nilai output menggunakan harga berlaku (harga tahun berjalan), sehingga nilainya bisa meningkat hanya karena inflasi meskipun produksi fisik tidak bertambah. GDP riil mengukur nilai output menggunakan harga konstan (tahun dasar tertentu), sehingga kenaikannya mencerminkan pertumbuhan produksi yang sesungguhnya. GDP riil lebih berguna untuk perbandingan karena telah mengeliminasi pengaruh inflasi.',
  },

  // 19. Flashcard — Rata-rata, Median, Modus
  {
    id: 'enrich-esb-09',
    type: 'flashcard',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'dasar',
    title: 'Ukuran Tendensi Sentral: Rata-rata, Median, Modus',
    content:
      'Jelaskan perbedaan antara rata-rata (mean), median, dan modus. Kapan sebaiknya menggunakan median daripada rata-rata?',
    answer:
      'Rata-rata (mean) adalah jumlah semua nilai dibagi banyaknya data. Median adalah nilai tengah data setelah diurutkan. Modus adalah nilai yang paling sering muncul. Median lebih baik digunakan daripada rata-rata ketika data bersifat miring (skewed) atau terdapat nilai ekstrem (outlier), karena median tidak dipengaruhi oleh outlier. Contoh: distribusi gaji yang sangat tidak merata lebih tepat digambarkan dengan median.',
  },

  // 20. Flashcard — Persaingan Sempurna vs Monopoli
  {
    id: 'enrich-esb-10',
    type: 'flashcard',
    subject: 'Ekonomi & Statistik Bisnis',
    level: 'cafb',
    difficulty: 'menengah',
    title: 'Persaingan Sempurna vs Monopoli: Perbandingan Harga dan Output',
    content:
      'Dibandingkan pasar persaingan sempurna, mengapa harga di pasar monopoli cenderung lebih tinggi dan output lebih rendah?',
    answer:
      'Pada persaingan sempurna, banyak perusahaan bersaing sehingga harga ditekan ke tingkat biaya marginal (P = MC), menghasilkan efisiensi alokasi. Pada monopoli, perusahaan tunggal memiliki kekuatan pasar dan memaksimalkan laba pada MR = MC, namun karena kurva permintaan miring ke bawah, harga yang dikenakan (P) selalu lebih besar dari MC. Akibatnya terjadi deadweight loss: harga lebih tinggi dan kuantitas yang diproduksi lebih sedikit dibandingkan kondisi persaingan sempurna.',
  },
];
