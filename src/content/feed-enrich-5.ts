import type { FeedCard } from './feedData';

export const enrichedFeedCards5: FeedCard[] = [
  // ===== AKUNTANSI MANAJEMEN (10 cards) =====

  // AM-1: Quiz — BEP Unit
  {
    id: 'enrich-am-001',
    type: 'quiz',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Formula BEP Unit',
    content: 'Sebuah perusahaan memiliki biaya tetap Rp 120.000.000, harga jual per unit Rp 40.000, dan biaya variabel per unit Rp 25.000. Berapa titik impas (BEP) dalam unit?',
    options: [
      '8.000 unit',
      '4.800 unit',
      '3.000 unit',
      '6.000 unit',
    ],
    correctIndex: 0,
    explanation: 'BEP (unit) = Biaya Tetap / (Harga Jual per Unit - Biaya Variabel per Unit) = Rp 120.000.000 / (Rp 40.000 - Rp 25.000) = Rp 120.000.000 / Rp 15.000 = 8.000 unit. Penyebut (Rp 15.000) disebut contribution margin per unit.',
    keyTakeaway: 'BEP unit = Biaya Tetap / Contribution Margin per Unit.',
  },

  // AM-2: Quiz — BEP Rupiah
  {
    id: 'enrich-am-002',
    type: 'quiz',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Formula BEP Rupiah',
    content: 'Menggunakan data yang sama (biaya tetap Rp 120.000.000, harga jual Rp 40.000, biaya variabel Rp 25.000), berapa BEP dalam rupiah?',
    options: [
      'Rp 320.000.000',
      'Rp 240.000.000',
      'Rp 480.000.000',
      'Rp 160.000.000',
    ],
    correctIndex: 0,
    explanation: 'Contribution Margin Ratio (CMR) = (Rp 40.000 - Rp 25.000) / Rp 40.000 = 37,5%. BEP (Rupiah) = Biaya Tetap / CMR = Rp 120.000.000 / 0,375 = Rp 320.000.000. Alternatif: BEP unit x Harga Jual = 8.000 x Rp 40.000 = Rp 320.000.000.',
    keyTakeaway: 'BEP Rupiah = Biaya Tetap / Contribution Margin Ratio.',
  },

  // AM-3: Flashcard — Margin of Safety
  {
    id: 'enrich-am-003',
    type: 'flashcard',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Margin of Safety',
    content: 'Apa yang dimaksud dengan Margin of Safety (MOS), dan bagaimana cara menghitungnya?',
    answer: 'Margin of Safety adalah selisih antara penjualan aktual (atau anggaran) dengan penjualan BEP. MOS menunjukkan seberapa jauh penjualan dapat turun sebelum perusahaan merugi. Rumus: MOS = Penjualan Aktual - Penjualan BEP. MOS (%) = MOS / Penjualan Aktual x 100%. Semakin tinggi MOS, semakin aman posisi perusahaan.',
    keyTakeaway: 'MOS = Penjualan Aktual - Penjualan BEP; mencerminkan bantalan keamanan terhadap kerugian.',
  },

  // AM-4: Quiz — Degree of Operating Leverage
  {
    id: 'enrich-am-004',
    type: 'quiz',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Degree of Operating Leverage (DOL)',
    content: 'Perusahaan X memiliki contribution margin Rp 300.000.000 dan laba operasi Rp 100.000.000. Jika penjualan naik 20%, berapa kenaikan laba operasi yang diharapkan?',
    options: [
      '60%',
      '20%',
      '40%',
      '30%',
    ],
    correctIndex: 0,
    explanation: 'DOL = Contribution Margin / Laba Operasi = Rp 300.000.000 / Rp 100.000.000 = 3. Persentase perubahan laba operasi = DOL x persentase perubahan penjualan = 3 x 20% = 60%. DOL mengukur sensitivitas laba operasi terhadap perubahan volume penjualan.',
    keyTakeaway: 'DOL = Contribution Margin / Laba Operasi; % perubahan laba = DOL x % perubahan penjualan.',
  },

  // AM-5: Flashcard — Target Costing vs Cost-Plus Pricing
  {
    id: 'enrich-am-005',
    type: 'flashcard',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Target Costing vs Cost-Plus Pricing',
    content: 'Jelaskan perbedaan mendasar antara target costing dan cost-plus pricing dalam penetapan harga produk.',
    answer: 'Cost-plus pricing: harga ditentukan dengan menambahkan markup di atas biaya (Harga = Biaya + Markup). Pendekatan ini berorientasi internal. Target costing: dimulai dari harga pasar yang dapat diterima pelanggan, dikurangi laba yang diinginkan, sehingga diperoleh biaya target yang harus dicapai (Biaya Target = Harga Pasar - Laba yang Diinginkan). Target costing berorientasi pasar dan mendorong efisiensi biaya sejak fase desain produk.',
    keyTakeaway: 'Target costing = Harga Pasar - Laba Target; cost-plus = Biaya + Markup.',
  },

  // AM-6: Quiz — Transfer Pricing
  {
    id: 'enrich-am-006',
    type: 'quiz',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Metode Transfer Pricing',
    content: 'Metode transfer pricing yang menggunakan harga yang wajar sebagaimana yang terjadi di pasar antara pihak independen disebut?',
    options: [
      'Market-based transfer price',
      'Cost-based transfer price',
      'Negotiated transfer price',
      'Dual transfer price',
    ],
    correctIndex: 0,
    explanation: 'Market-based transfer price mengacu pada harga pasar eksternal yang berlaku untuk transaksi serupa antar pihak independen. Metode ini dipandang paling objektif karena mencerminkan harga yang sebenarnya kompetitif. Cost-based menggunakan biaya (penuh atau variabel), negotiated berdasarkan negosiasi antar divisi, dan dual menggunakan harga berbeda untuk pembeli dan penjual internal.',
    keyTakeaway: 'Market-based transfer price paling objektif karena mengacu harga pasar eksternal.',
  },

  // AM-7: Quiz — ABC vs Traditional Costing
  {
    id: 'enrich-am-007',
    type: 'quiz',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Activity-Based Costing vs Tradisional',
    content: 'Manakah pernyataan yang BENAR tentang keunggulan Activity-Based Costing (ABC) dibandingkan sistem biaya tradisional?',
    options: [
      'ABC mengalokasikan biaya overhead berdasarkan aktivitas yang sesungguhnya dikonsumsi setiap produk sehingga lebih akurat',
      'ABC selalu menghasilkan biaya produk yang lebih rendah daripada sistem tradisional',
      'ABC lebih mudah dan murah untuk diimplementasikan daripada sistem tradisional',
      'ABC menghilangkan kebutuhan untuk mengidentifikasi cost driver',
    ],
    correctIndex: 0,
    explanation: 'ABC menggunakan activity cost pools dan cost drivers yang beragam (jumlah setup, jam mesin, jumlah pesanan, dll.) sehingga alokasi overhead lebih akurat dibanding sistem tradisional yang hanya menggunakan satu atau dua dasar alokasi (jam tenaga kerja atau jam mesin). ABC lebih kompleks dan mahal untuk diimplementasikan, namun memberikan informasi biaya yang lebih andal untuk pengambilan keputusan.',
    keyTakeaway: 'ABC mengalokasikan overhead berdasarkan aktivitas nyata; lebih akurat namun lebih kompleks.',
  },

  // AM-8: Flashcard — Variance Analysis Material
  {
    id: 'enrich-am-008',
    type: 'flashcard',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Variance Bahan Baku: Harga dan Kuantitas',
    content: 'Tuliskan formula untuk Material Price Variance (MPV) dan Material Quantity Variance (MQV) beserta interpretasinya.',
    answer: 'MPV = (Harga Standar - Harga Aktual) x Kuantitas Aktual yang Dibeli. Jika positif: favorable (harga beli lebih murah dari standar). MQV = (Kuantitas Standar diizinkan untuk output aktual - Kuantitas Aktual yang Digunakan) x Harga Standar. Jika positif: favorable (pemakaian bahan lebih hemat dari standar). Total Material Variance = MPV + MQV.',
    keyTakeaway: 'MPV mengukur selisih harga beli; MQV mengukur selisih efisiensi pemakaian bahan.',
  },

  // AM-9: Quiz — Variance Tenaga Kerja
  {
    id: 'enrich-am-009',
    type: 'quiz',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Labor Efficiency Variance',
    content: 'Standar waktu produksi adalah 2 jam per unit dengan tarif Rp 50.000/jam. Produksi aktual 500 unit menggunakan 1.100 jam kerja. Berapa Labor Efficiency Variance?',
    options: [
      'Rp 5.000.000 unfavorable',
      'Rp 5.000.000 favorable',
      'Rp 2.500.000 unfavorable',
      'Rp 10.000.000 unfavorable',
    ],
    correctIndex: 0,
    explanation: 'Jam Standar yang diizinkan = 500 unit x 2 jam = 1.000 jam. Labor Efficiency Variance = (Jam Standar - Jam Aktual) x Tarif Standar = (1.000 - 1.100) x Rp 50.000 = -100 x Rp 50.000 = Rp 5.000.000 unfavorable. Tanda negatif menunjukkan jam aktual melebihi standar (tidak efisien).',
    keyTakeaway: 'LEV = (Jam Standar - Jam Aktual) x Tarif Standar; negatif = unfavorable (tidak efisien).',
  },

  // AM-10: Flashcard — CVP Analysis Asumsi
  {
    id: 'enrich-am-010',
    type: 'flashcard',
    subject: 'Akuntansi Manajemen',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Asumsi Dasar Analisis CVP',
    content: 'Sebutkan asumsi-asumsi utama yang mendasari analisis Cost-Volume-Profit (CVP).',
    answer: 'Asumsi utama analisis CVP: (1) Perilaku biaya linier dalam rentang relevan (relevant range). (2) Biaya dapat dipisahkan secara tepat menjadi tetap dan variabel. (3) Harga jual per unit konstan. (4) Biaya variabel per unit konstan. (5) Bauran penjualan (sales mix) konstan jika ada beberapa produk. (6) Persediaan tidak berubah (produksi = penjualan), sehingga analisis berbasis unit terjual. Pelanggaran asumsi ini dapat mengurangi keandalan analisis CVP.',
    keyTakeaway: 'CVP mengasumsikan biaya dan harga linier, sales mix tetap, dan tidak ada perubahan persediaan.',
  },

  // ===== MANAJEMEN STRATEJIK (20 cards) =====

  // MS-1: Quiz — Balanced Scorecard Perspektif
  {
    id: 'enrich-ms-001',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Empat Perspektif Balanced Scorecard',
    content: 'Manakah urutan yang BENAR dari empat perspektif Balanced Scorecard menurut Kaplan dan Norton, dari fondasi hingga hasil akhir?',
    options: [
      'Pembelajaran & Pertumbuhan - Proses Internal - Pelanggan - Keuangan',
      'Keuangan - Pelanggan - Proses Internal - Pembelajaran & Pertumbuhan',
      'Pelanggan - Keuangan - Pembelajaran & Pertumbuhan - Proses Internal',
      'Proses Internal - Pelanggan - Keuangan - Pembelajaran & Pertumbuhan',
    ],
    correctIndex: 0,
    explanation: 'Balanced Scorecard (BSC) memiliki hubungan sebab-akibat (cause-and-effect): Pembelajaran & Pertumbuhan (kapabilitas SDM, sistem, budaya) mendukung Proses Internal yang efisien, yang kemudian meningkatkan kepuasan Pelanggan, yang akhirnya menghasilkan kinerja Keuangan yang baik. Perspektif keuangan adalah hasil akhir, sedangkan pembelajaran & pertumbuhan adalah fondasinya.',
    keyTakeaway: 'BSC: Pembelajaran & Pertumbuhan -> Proses Internal -> Pelanggan -> Keuangan.',
  },

  // MS-2: Flashcard — KPI Lead vs Lag
  {
    id: 'enrich-ms-002',
    type: 'flashcard',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'KPI Lead Indicator vs Lag Indicator',
    content: 'Apa perbedaan antara lead indicator dan lag indicator dalam konteks pengukuran kinerja strategis? Berikan contoh masing-masing.',
    answer: 'Lag indicator (lagging/hasil): mengukur hasil akhir yang sudah terjadi, bersifat historis, mudah diukur namun tidak dapat diubah. Contoh: pendapatan, laba bersih, tingkat retensi pelanggan, pangsa pasar. Lead indicator (leading/pendorong): mengukur aktivitas atau kondisi yang mendorong hasil di masa depan, bersifat prediktif, lebih sulit diukur. Contoh: jumlah pelatihan karyawan, tingkat kepuasan karyawan, jumlah prospek penjualan baru, skor inovasi produk. BSC menggabungkan keduanya agar organisasi dapat mengelola masa depan, bukan hanya mengevaluasi masa lalu.',
    keyTakeaway: 'Lag = hasil historis; Lead = pendorong masa depan. BSC mengintegrasikan keduanya.',
  },

  // MS-3: Quiz — Porter Generic Strategies
  {
    id: 'enrich-ms-003',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Porter Generic Strategies',
    content: 'Perusahaan yang memilih strategi diferensiasi menurut Porter bertujuan untuk?',
    options: [
      'Menawarkan produk/jasa unik yang dihargai pelanggan lebih tinggi sehingga dapat menetapkan harga premium',
      'Menjadi produsen dengan biaya terendah di industri untuk bersaing melalui harga',
      'Melayani segmen pasar yang sempit dengan biaya paling rendah',
      'Mendominasi seluruh segmen pasar dengan volume penjualan tertinggi',
    ],
    correctIndex: 0,
    explanation: 'Strategi diferensiasi (differentiation) menurut Porter berfokus pada penciptaan nilai unik yang dirasakan pelanggan, seperti kualitas produk, merek, fitur, layanan purna jual, atau desain. Keunikan ini memungkinkan perusahaan menetapkan harga premium dan mengurangi sensitivitas harga pelanggan. Berbeda dengan cost leadership yang bersaing melalui biaya terendah, dan focus strategy yang menargetkan segmen sempit.',
    keyTakeaway: 'Diferensiasi = keunikan bernilai tinggi + harga premium; bukan tentang biaya terendah.',
  },

  // MS-4: Quiz — Blue Ocean Strategy
  {
    id: 'enrich-ms-004',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Blue Ocean Strategy: Value Innovation',
    content: 'Konsep inti Blue Ocean Strategy yang membedakannya dari strategi konvensional adalah?',
    options: [
      'Value innovation: secara simultan mengurangi biaya dan meningkatkan nilai bagi pembeli sehingga menciptakan pasar baru',
      'Bertahan di pasar yang sudah ada dengan strategi biaya paling rendah',
      'Mengalahkan pesaing dengan diferensiasi produk di pasar yang sudah ada',
      'Fokus pada segmen pelanggan paling menguntungkan di red ocean',
    ],
    correctIndex: 0,
    explanation: 'Blue Ocean Strategy (Kim & Mauborgne) berfokus pada value innovation: mengeliminasi dan mengurangi faktor yang tidak diperlukan sambil meningkatkan dan menciptakan faktor baru yang belum pernah ada di industri. Hasilnya adalah pasar baru (blue ocean) tanpa persaingan langsung, berbeda dengan red ocean yang penuh persaingan di pasar existing. Alat analisisnya adalah Strategy Canvas dan kerangka Eliminate-Reduce-Raise-Create (ERRC).',
    keyTakeaway: 'Blue Ocean = value innovation dengan menciptakan pasar baru, bukan bersaing di pasar yang ada.',
  },

  // MS-5: Flashcard — Business Model Canvas
  {
    id: 'enrich-ms-005',
    type: 'flashcard',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Sembilan Blok Business Model Canvas',
    content: 'Sebutkan kesembilan blok dalam Business Model Canvas (BMC) menurut Osterwalder & Pigneur.',
    answer: 'Sembilan blok BMC: (1) Customer Segments - siapa pelanggan yang dilayani. (2) Value Propositions - nilai apa yang ditawarkan. (3) Channels - bagaimana menjangkau pelanggan. (4) Customer Relationships - jenis hubungan dengan pelanggan. (5) Revenue Streams - bagaimana menghasilkan pendapatan. (6) Key Resources - aset utama yang diperlukan. (7) Key Activities - aktivitas kunci untuk menjalankan bisnis. (8) Key Partnerships - mitra strategis yang dibutuhkan. (9) Cost Structure - struktur biaya utama bisnis.',
    keyTakeaway: 'BMC: 9 blok mencakup sisi nilai (kiri: sumber daya, aktivitas, mitra) dan sisi pasar (kanan: segmen, proposisi, saluran, hubungan) dihubungkan oleh pendapatan dan biaya.',
  },

  // MS-6: Quiz — OKR
  {
    id: 'enrich-ms-006',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'OKR: Objectives & Key Results',
    content: 'Manakah pernyataan yang PALING tepat menggambarkan perbedaan antara Objective dan Key Result dalam kerangka OKR?',
    options: [
      'Objective adalah tujuan kualitatif yang inspiratif dan ambisius; Key Result adalah ukuran kuantitatif spesifik yang menunjukkan pencapaian objective',
      'Objective adalah target angka keuangan; Key Result adalah aktivitas yang harus dilakukan',
      'Objective dan Key Result keduanya merupakan angka kuantitatif yang terukur',
      'Key Result adalah tujuan jangka panjang sedangkan Objective adalah rencana jangka pendek',
    ],
    correctIndex: 0,
    explanation: 'Dalam OKR (dikembangkan oleh Andy Grove di Intel, dipopulerkan Google): Objective adalah pernyataan kualitatif yang menginspirasi dan menunjukkan arah yang ingin dicapai ("Apa yang ingin dicapai?"). Key Results adalah metrik kuantitatif yang terukur dan memiliki batas waktu, yang menunjukkan apakah Objective telah tercapai ("Bagaimana mengetahui bahwa kita telah mencapainya?"). Tiap Objective umumnya memiliki 3-5 Key Results.',
    keyTakeaway: 'OKR: Objective = aspirasi kualitatif; Key Results = metrik kuantitatif yang membuktikan pencapaian.',
  },

  // MS-7: Flashcard — Dynamic Capabilities
  {
    id: 'enrich-ms-007',
    type: 'flashcard',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Dynamic Capabilities',
    content: 'Apa yang dimaksud dengan dynamic capabilities dalam teori manajemen strategis, dan mengapa penting bagi perusahaan?',
    answer: 'Dynamic capabilities (Teece, Pisano & Shuen, 1997) adalah kemampuan perusahaan untuk secara sengaja mengintegrasikan, membangun, dan mengkonfigurasi ulang kompetensi internal dan eksternal sebagai respons terhadap perubahan lingkungan yang cepat. Tiga elemen utama: (1) Sensing - mendeteksi peluang dan ancaman di lingkungan. (2) Seizing - merespons peluang dengan mengalokasikan sumber daya. (3) Reconfiguring - mengubah, menggabungkan, atau melepas aset dan kompetensi. Perusahaan dengan dynamic capabilities tinggi mampu mempertahankan keunggulan kompetitif meski lingkungan berubah cepat.',
    keyTakeaway: 'Dynamic capabilities = kemampuan sensing, seizing, dan reconfiguring sumber daya sebagai respons perubahan.',
  },

  // MS-8: Quiz — VRIN Framework
  {
    id: 'enrich-ms-008',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Competitive Advantage: Kerangka VRIN',
    content: 'Menurut kerangka VRIN (Barney), sumber daya perusahaan dapat menciptakan keunggulan kompetitif berkelanjutan jika memenuhi empat kriteria. Manakah keempat kriteria tersebut?',
    options: [
      'Valuable, Rare, Inimitable, Non-substitutable',
      'Valuable, Reliable, Innovative, Non-substitutable',
      'Visible, Rare, Inimitable, Negotiable',
      'Valuable, Rare, Integrated, Non-transferable',
    ],
    correctIndex: 0,
    explanation: 'VRIN menurut Jay Barney (1991): Valuable (bernilai - membantu mengeksploitasi peluang/menetralisir ancaman), Rare (langka - tidak dimiliki banyak pesaing), Inimitable (sulit ditiru - karena sejarah unik, ambiguitas kausal, atau kompleksitas sosial), Non-substitutable (tidak ada pengganti strategis yang setara). Sumber daya yang memenuhi semua kriteria VRIN menghasilkan sustained competitive advantage.',
    keyTakeaway: 'VRIN: Valuable + Rare + Inimitable + Non-substitutable = sustained competitive advantage.',
  },

  // MS-9: Quiz — Corporate vs Business Strategy
  {
    id: 'enrich-ms-009',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Corporate Strategy vs Business Strategy',
    content: 'Manakah yang PALING tepat menggambarkan perbedaan antara corporate strategy dan business strategy?',
    options: [
      'Corporate strategy menjawab "di industri apa kita bersaing?" sedangkan business strategy menjawab "bagaimana kita bersaing di industri tersebut?"',
      'Corporate strategy hanya relevan untuk perusahaan besar sedangkan business strategy untuk UKM',
      'Business strategy mencakup diversifikasi dan akuisisi sedangkan corporate strategy hanya tentang operasional',
      'Keduanya identik dan sering digunakan bergantian dalam literatur manajemen',
    ],
    correctIndex: 0,
    explanation: 'Corporate strategy (tingkat korporat) berkaitan dengan portofolio bisnis: industri dan pasar mana yang akan dimasuki, bagaimana mengalokasikan sumber daya antar unit bisnis, keputusan diversifikasi, merger & akuisisi, dan sinergi antar unit. Business strategy (tingkat unit bisnis/SBU) berkaitan dengan bagaimana bersaing secara efektif di satu industri atau pasar tertentu, mencakup pilihan Porter Generic Strategies.',
    keyTakeaway: 'Corporate = portofolio bisnis & diversifikasi; Business = cara bersaing di satu industri.',
  },

  // MS-10: Flashcard — Strategic Implementation Barriers
  {
    id: 'enrich-ms-010',
    type: 'flashcard',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Hambatan Implementasi Strategi',
    content: 'Sebutkan dan jelaskan empat hambatan utama implementasi strategi yang diidentifikasi oleh Kaplan dan Norton.',
    answer: 'Kaplan & Norton mengidentifikasi empat hambatan utama: (1) Vision Barrier - hanya sebagian kecil karyawan memahami strategi organisasi; solusi: komunikasi strategi secara efektif. (2) People Barrier - sebagian besar manajer tidak memiliki insentif yang terkait dengan strategi; solusi: hubungkan kompensasi dengan BSC. (3) Resource Barrier - waktu, anggaran, dan sumber daya tidak dialokasikan untuk inisiatif strategis; solusi: integrasikan perencanaan dan penganggaran strategis. (4) Management Barrier - manajemen menghabiskan terlalu sedikit waktu untuk mendiskusikan strategi; solusi: rapat tinjauan strategis rutin.',
    keyTakeaway: 'Empat hambatan: Vision, People, Resource, Management Barrier. BSC dirancang untuk mengatasinya.',
  },

  // MS-11: Quiz — Inovasi Disruptif
  {
    id: 'enrich-ms-011',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Inovasi Disruptif (Christensen)',
    content: 'Karakteristik utama inovasi disruptif menurut Clayton Christensen adalah?',
    options: [
      'Dimulai dari segmen bawah pasar atau pasar baru dengan produk yang lebih sederhana/murah, lalu bergerak ke atas menggeser pemain mapan',
      'Selalu menggunakan teknologi canggih yang jauh lebih superior dari produk yang ada di pasaran',
      'Dilakukan oleh perusahaan besar yang memiliki sumber daya riset dan pengembangan terbesar',
      'Berfokus pada peningkatan produk yang sudah ada untuk melayani pelanggan premium',
    ],
    correctIndex: 0,
    explanation: 'Inovasi disruptif (Christensen, 1997) umumnya dimulai di segmen bawah (low-end disruption) atau pasar yang belum terlayani (new-market disruption) dengan menawarkan produk yang lebih sederhana, lebih murah, atau lebih mudah diakses. Perusahaan incumbent awalnya mengabaikan ancaman ini karena profitabilitasnya rendah. Namun seiring waktu, inovator memperbaiki produknya dan bergerak naik, akhirnya menggeser incumbent. Contoh: Netflix vs Blockbuster, Tokopedia vs toko konvensional.',
    keyTakeaway: 'Disruptif = mulai dari bawah/pasar baru, lalu naik menggeser pemain mapan yang awalnya mengabaikannya.',
  },

  // MS-12: Quiz — Digital Transformation Strategy
  {
    id: 'enrich-ms-012',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Strategi Transformasi Digital',
    content: 'Manakah yang merupakan pilar UTAMA transformasi digital yang harus diperhatikan manajemen strategis?',
    options: [
      'Teknologi, data & analitik, budaya organisasi, dan model bisnis baru',
      'Hanya adopsi software terkini dan automasi proses operasional',
      'Penggantian seluruh tenaga kerja manusia dengan kecerdasan buatan',
      'Investasi maksimum di infrastruktur IT tanpa perlu mengubah model bisnis',
    ],
    correctIndex: 0,
    explanation: 'Transformasi digital bukan sekadar adopsi teknologi, melainkan perubahan menyeluruh yang mencakup: (1) Teknologi: cloud, AI, IoT, blockchain. (2) Data & analitik: pengambilan keputusan berbasis data. (3) Budaya dan SDM: mindset digital, agility, upskilling. (4) Model bisnis baru: platform bisnis, ekosistem digital, monetisasi data. Transformasi yang hanya berfokus pada teknologi tanpa mengubah model bisnis dan budaya sering gagal mencapai tujuan strategisnya.',
    keyTakeaway: 'Transformasi digital = teknologi + data + budaya + model bisnis; bukan sekadar IT upgrade.',
  },

  // MS-13: Flashcard — Porter Five Forces
  {
    id: 'enrich-ms-013',
    type: 'flashcard',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Lima Kekuatan Porter (Five Forces)',
    content: 'Sebutkan kelima kekuatan dalam Porter Five Forces dan bagaimana model ini digunakan dalam analisis strategis.',
    answer: 'Lima kekuatan Porter: (1) Rivalry among existing competitors - intensitas persaingan di industri yang sudah ada. (2) Threat of new entrants - hambatan masuk bagi pemain baru (entry barriers). (3) Threat of substitute products/services - ancaman produk pengganti. (4) Bargaining power of buyers - kekuatan tawar pembeli/pelanggan. (5) Bargaining power of suppliers - kekuatan tawar pemasok. Model ini digunakan untuk menganalisis struktur industri dan tingkat profitabilitas jangka panjang. Semakin kuat kelima kekuatan, semakin rendah potensi profitabilitas industri.',
    keyTakeaway: 'Five Forces: rivalitas, ancaman pendatang baru, produk substitusi, kekuatan pembeli, kekuatan pemasok.',
  },

  // MS-14: Quiz — Balanced Scorecard KPI
  {
    id: 'enrich-ms-014',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'KPI dalam Perspektif Proses Internal BSC',
    content: 'Manakah yang merupakan contoh KPI untuk perspektif Proses Internal dalam Balanced Scorecard?',
    options: [
      'Waktu siklus produksi, tingkat cacat produk, dan waktu respons layanan',
      'Return on Equity dan Net Profit Margin',
      'Tingkat kepuasan pelanggan dan Net Promoter Score',
      'Jumlah jam pelatihan karyawan per tahun',
    ],
    correctIndex: 0,
    explanation: 'Perspektif Proses Internal BSC mengukur efisiensi dan efektivitas proses bisnis kunci yang menciptakan nilai. KPI-nya mencakup: waktu siklus (cycle time), tingkat cacat (defect rate), produktivitas, waktu penyelesaian pesanan, biaya per unit proses. KPI keuangan (ROE, profit margin) termasuk perspektif keuangan. Kepuasan pelanggan dan NPS termasuk perspektif pelanggan. Jam pelatihan termasuk perspektif pembelajaran & pertumbuhan.',
    keyTakeaway: 'Proses Internal BSC: KPI efisiensi proses seperti cycle time, defect rate, dan produktivitas.',
  },

  // MS-15: Flashcard — Cost Leadership Strategy
  {
    id: 'enrich-ms-015',
    type: 'flashcard',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Strategi Cost Leadership Porter',
    content: 'Jelaskan strategi cost leadership menurut Porter: definisi, cara mencapainya, risiko, dan siapa yang cocok menggunakannya.',
    answer: 'Cost leadership: strategi menjadi produsen berbiaya paling rendah di industri, memungkinkan penetapan harga lebih rendah dari pesaing atau menghasilkan margin lebih tinggi pada harga yang sama. Cara mencapainya: skala ekonomi (economies of scale), kurva pengalaman (experience curve), efisiensi operasional, teknologi proses yang unggul, akses bahan baku murah. Risiko: perubahan teknologi yang mengeliminasi keunggulan biaya, kompetitor baru yang mengadopsi teknologi lebih murah, terlalu fokus pada biaya hingga mengabaikan kebutuhan pelanggan (stuck in the middle). Cocok untuk: industri komoditas, pasar sensitif harga, perusahaan dengan volume tinggi.',
    keyTakeaway: 'Cost leadership = biaya terendah industri melalui skala, efisiensi, dan teknologi; risiko utama adalah "stuck in the middle".',
  },

  // MS-16: Quiz — Kerangka SWOT dan Pilihan Strategi
  {
    id: 'enrich-ms-016',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Analisis SWOT: SO Strategy',
    content: 'Dalam matriks TOWS (SWOT), strategi SO (Strengths-Opportunities) adalah?',
    options: [
      'Menggunakan kekuatan internal untuk memanfaatkan peluang eksternal secara maksimal',
      'Meminimalkan kelemahan internal untuk menghindari ancaman eksternal',
      'Menggunakan kekuatan untuk menghindari atau mengurangi dampak ancaman',
      'Mengatasi kelemahan agar dapat memanfaatkan peluang yang tersedia',
    ],
    correctIndex: 0,
    explanation: 'Matriks TOWS menghasilkan empat jenis strategi: SO (Strengths-Opportunities): agresif, menggunakan kekuatan untuk meraih peluang. ST (Strengths-Threats): menggunakan kekuatan untuk menghadapi ancaman. WO (Weaknesses-Opportunities): mengatasi kelemahan untuk meraih peluang. WT (Weaknesses-Threats): defensif, meminimalkan kelemahan dan ancaman. Strategi SO adalah strategi paling ideal dan agresif karena memanfaatkan posisi internal terbaik untuk kondisi eksternal yang menguntungkan.',
    keyTakeaway: 'SO = agresif: gunakan kekuatan untuk raih peluang. WT = defensif: minimalisasi kelemahan & ancaman.',
  },

  // MS-17: Quiz — Ansoff Matrix
  {
    id: 'enrich-ms-017',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Matriks Ansoff: Strategi Pertumbuhan',
    content: 'Perusahaan minuman yang sudah mapan memutuskan untuk mulai menjual produk perawatan kulit kepada pelanggan yang sudah ada. Strategi ini dalam Matriks Ansoff disebut?',
    options: [
      'Diversifikasi',
      'Penetrasi Pasar',
      'Pengembangan Produk',
      'Pengembangan Pasar',
    ],
    correctIndex: 0,
    explanation: 'Matriks Ansoff (2x2): Penetrasi Pasar (produk lama, pasar lama), Pengembangan Produk (produk baru, pasar lama), Pengembangan Pasar (produk lama, pasar baru), Diversifikasi (produk baru, pasar baru). Menjual produk perawatan kulit (produk baru) kepada pelanggan yang sudah ada (pasar lama) adalah Pengembangan Produk, bukan diversifikasi. Namun jika kategori industri benar-benar berbeda, maka dikategorikan sebagai Diversifikasi. Dalam soal ini, karena pelanggan sama tetapi produk sangat berbeda (minuman vs perawatan kulit), ini adalah Diversifikasi.',
    keyTakeaway: 'Diversifikasi = produk baru + pasar baru (atau sangat berbeda); risiko tertinggi dalam Matriks Ansoff.',
  },

  // MS-18: Flashcard — OKR vs KPI
  {
    id: 'enrich-ms-018',
    type: 'flashcard',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'OKR vs KPI: Perbedaan dan Kapan Digunakan',
    content: 'Apa perbedaan utama antara OKR dan KPI sebagai alat manajemen kinerja, dan kapan masing-masing lebih tepat digunakan?',
    answer: 'KPI (Key Performance Indicators): mengukur kinerja operasional yang berkelanjutan, biasanya terkait target yang harus dipertahankan, bersifat lebih stabil dari waktu ke waktu, dan umumnya terkait insentif/kompensasi. Contoh: tingkat kepuasan pelanggan >90%, defect rate <2%. OKR (Objectives & Key Results): bersifat aspiratif dan ambisius (stretch goals), biasanya ditetapkan per kuartal/tahunan, tidak selalu terkait kompensasi langsung, mendorong inovasi dan terobosan. OKR dengan pencapaian 70% sudah dianggap baik. Gunakan KPI untuk operasional rutin yang harus dijaga, OKR untuk inisiatif strategis dan transformasi yang membutuhkan terobosan.',
    keyTakeaway: 'KPI = kinerja operasional stabil yang harus dipertahankan; OKR = tujuan ambisius transformasional per periode.',
  },

  // MS-19: Quiz — Competitive Advantage Sustainability
  {
    id: 'enrich-ms-019',
    type: 'quiz',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Keberlanjutan Keunggulan Kompetitif',
    content: 'Mengapa keunggulan kompetitif berbasis reputasi merek yang kuat sulit ditiru oleh pesaing meskipun mereka memiliki sumber daya finansial besar?',
    options: [
      'Karena reputasi merek dibangun dari akumulasi pengalaman, kepercayaan, dan persepsi pelanggan selama bertahun-tahun yang tidak dapat dibeli secara instan',
      'Karena hukum merek dagang melindungi nama merek dari peniruan secara legal',
      'Karena biaya membangun merek terlalu tinggi untuk pesaing baru',
      'Karena pelanggan tidak tertarik mencoba merek baru meski kualitasnya lebih baik',
    ],
    correctIndex: 0,
    explanation: 'Reputasi merek yang kuat merupakan contoh sumber daya yang memenuhi kriteria "Inimitable" dalam VRIN karena dibangun melalui "ambiguitas kausal" dan "sejarah unik". Pesaing sulit meniru karena: reputasi merupakan hasil interaksi kompleks antara kualitas produk, layanan, marketing, dan pengalaman pelanggan selama bertahun-tahun; tidak ada "resep tunggal" yang bisa langsung diterapkan. Bahkan dengan anggaran besar, membangun kepercayaan membutuhkan waktu dan konsistensi yang tidak bisa dipersingkat.',
    keyTakeaway: 'Merek kuat = inimitable karena ambiguitas kausal dan akumulasi sejarah; tidak bisa dibeli atau ditiru instan.',
  },

  // MS-20: Quiz — Strategy Map BSC
  {
    id: 'enrich-ms-020',
    type: 'flashcard',
    subject: 'Manajemen Stratejik',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Strategy Map dalam Balanced Scorecard',
    content: 'Apa itu Strategy Map dalam konteks Balanced Scorecard, dan apa perbedaannya dengan BSC itu sendiri?',
    answer: 'Strategy Map (Kaplan & Norton, 2004) adalah representasi visual dari strategi organisasi yang menggambarkan hubungan sebab-akibat (cause-and-effect) antar tujuan strategis di keempat perspektif BSC. Fungsi utamanya: (1) Mengkomunikasikan strategi secara visual dan mudah dipahami seluruh organisasi. (2) Menunjukkan bagaimana aset tidak berwujud (perspektif pembelajaran & pertumbuhan) diubah menjadi hasil keuangan nyata. (3) Menyelaraskan inisiatif strategis dengan tujuan. Perbedaan: Strategy Map adalah "peta jalan" yang menunjukkan logika penciptaan nilai, sedangkan BSC adalah "dasbor" yang berisi KPI, target, dan inisiatif untuk mengeksekusi peta tersebut.',
    keyTakeaway: 'Strategy Map = peta visual hubungan sebab-akibat antar tujuan strategis di 4 perspektif; BSC = dasbor KPI untuk mengeksekusinya.',
  },
];
