import type { FeedCard } from './feedData';

export const enrichedFeedCards4: FeedCard[] = [
  // ===== MANAJEMEN PERPAJAKAN (10 cards) =====

  // 1. Quiz — Rekonsiliasi fiskal: koreksi positif
  {
    id: 'enrich-mp-01',
    type: 'quiz',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Koreksi Positif dalam Rekonsiliasi Fiskal',
    content:
      'Sebuah perusahaan mencatat biaya entertainment sebesar Rp 50.000.000 tanpa disertai daftar nominatif. Bagaimana perlakuan biaya tersebut dalam rekonsiliasi fiskal?',
    options: [
      'Koreksi positif Rp 50.000.000 karena tidak dapat dikurangkan secara fiskal',
      'Koreksi negatif Rp 50.000.000 karena mengurangi penghasilan kena pajak',
      'Tidak perlu koreksi karena biaya telah dicatat secara akuntansi',
      'Koreksi positif 50% karena hanya sebagian yang tidak dapat dikurangkan',
    ],
    correctIndex: 0,
    explanation:
      'Biaya entertainment tanpa daftar nominatif tidak dapat diakui sebagai pengurang penghasilan bruto (non-deductible expense). Oleh karena itu dilakukan koreksi positif yang menambah laba fiskal sebesar Rp 50.000.000.',
  },

  // 2. Quiz — Rekonsiliasi fiskal: koreksi negatif
  {
    id: 'enrich-mp-02',
    type: 'quiz',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Koreksi Negatif dalam Rekonsiliasi Fiskal',
    content:
      'PT Maju mencatat pendapatan dividen dari anak perusahaan dalam negeri (kepemilikan 30%) sebesar Rp 100.000.000 dalam laporan laba rugi komersial. Perlakuan fiskal yang tepat adalah?',
    options: [
      'Koreksi negatif Rp 100.000.000 karena dividen dari penyertaan minimal 25% dikecualikan dari objek pajak',
      'Tidak ada koreksi karena dividen merupakan penghasilan kena pajak',
      'Koreksi positif Rp 100.000.000 karena dividen selalu dikenakan pajak',
      'Koreksi negatif 50% karena hanya sebagian dividen dikecualikan',
    ],
    correctIndex: 0,
    explanation:
      'Berdasarkan Pasal 4 ayat (3) UU PPh, dividen yang diterima dari badan dalam negeri dengan kepemilikan minimal 25% dikecualikan dari objek pajak. Karena sudah masuk laba komersial, dilakukan koreksi negatif untuk mengurangi penghasilan kena pajak.',
  },

  // 3. Quiz — Perhitungan PPh Badan terutang
  {
    id: 'enrich-mp-03',
    type: 'quiz',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Tarif PPh Badan untuk Perusahaan Tbk',
    content:
      'PT Gemilang Tbk memiliki peredaran bruto Rp 80 miliar dan penghasilan kena pajak Rp 10 miliar. Perusahaan memenuhi syarat pengurangan tarif 3% karena minimal 40% saham diperdagangkan di bursa. Berapa PPh Badan terutang?',
    options: [
      'Rp 2.200.000.000 (tarif efektif 22%)',
      'Rp 1.900.000.000 (tarif efektif 19%)',
      'Rp 2.500.000.000 (tarif efektif 25%)',
      'Rp 2.000.000.000 (tarif efektif 20%)',
    ],
    correctIndex: 1,
    explanation:
      'Tarif PPh Badan umum adalah 22%. Perusahaan publik yang minimal 40% sahamnya diperdagangkan di bursa mendapat pengurangan tarif 3% sehingga tarifnya menjadi 19%. PPh terutang = 19% x Rp 10.000.000.000 = Rp 1.900.000.000.',
  },

  // 4. Flashcard — Pajak tangguhan DTA
  {
    id: 'enrich-mp-04',
    type: 'flashcard',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Deferred Tax Asset (DTA)',
    content:
      'Apa yang dimaksud dengan Deferred Tax Asset (Aset Pajak Tangguhan) dan kapan timbul?',
    answer:
      'Deferred Tax Asset (DTA) adalah aset yang timbul ketika beban pajak tangguhan yang diakui secara akuntansi lebih kecil dari kewajiban pajak yang harus dibayar saat ini, atau ketika terdapat beda waktu yang menyebabkan laba fiskal lebih besar dari laba komersial pada periode berjalan. DTA mencerminkan manfaat pajak yang akan diterima di masa depan. Contoh: rugi fiskal yang dapat dikompensasi ke depan (tax loss carryforward), atau penyisihan piutang tak tertagih yang belum diakui fiskal.',
  },

  // 5. Quiz — Pajak tangguhan DTL
  {
    id: 'enrich-mp-05',
    type: 'quiz',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Deferred Tax Liability (DTL)',
    content:
      'PT Sejahtera menggunakan metode garis lurus untuk akuntansi dan saldo menurun untuk fiskal atas aset senilai Rp 100 juta. Pada tahun pertama, penyusutan komersial Rp 10 juta dan fiskal Rp 25 juta. Tarif pajak 22%. Apa dampaknya terhadap pajak tangguhan?',
    options: [
      'DTA Rp 3.300.000 karena laba fiskal lebih kecil',
      'DTL Rp 3.300.000 karena laba fiskal lebih kecil sehingga pajak masa depan lebih tinggi',
      'DTL Rp 3.300.000 karena pajak kini lebih kecil, kewajiban pajak bergeser ke masa depan',
      'Tidak ada pajak tangguhan karena beda hanya bersifat permanen',
    ],
    correctIndex: 2,
    explanation:
      'Penyusutan fiskal (Rp 25 juta) lebih besar dari komersial (Rp 10 juta), sehingga laba fiskal lebih kecil dan PPh kini lebih rendah. Selisih beda waktu Rp 15 juta akan berbalik di masa depan (fiskal akan lebih tinggi). Pajak tangguhan yang timbul adalah DTL = 22% x Rp 15.000.000 = Rp 3.300.000.',
  },

  // 6. Quiz — PPN mekanisme kredit pajak masukan
  {
    id: 'enrich-mp-06',
    type: 'quiz',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Mekanisme Kredit Pajak Masukan PPN',
    content:
      'PKP Toko Bahan Bangunan pada bulan Maret memiliki Pajak Keluaran Rp 45.000.000 dan Pajak Masukan yang dapat dikreditkan Rp 30.000.000. Apa yang harus dilaporkan dalam SPT Masa PPN?',
    options: [
      'PPN Lebih Bayar Rp 15.000.000 yang dapat dikompensasi atau dimintakan restitusi',
      'PPN Kurang Bayar Rp 15.000.000 yang harus disetor ke kas negara',
      'PPN Lebih Bayar Rp 75.000.000',
      'Tidak ada kewajiban karena pajak masukan dan keluaran saling menghapus',
    ],
    correctIndex: 1,
    explanation:
      'PPN Kurang Bayar = Pajak Keluaran - Pajak Masukan = Rp 45.000.000 - Rp 30.000.000 = Rp 15.000.000. Karena Pajak Keluaran lebih besar, PKP wajib menyetorkan selisihnya ke kas negara paling lambat akhir bulan berikutnya sebelum SPT dilaporkan.',
  },

  // 7. Flashcard — Syarat formal dan material faktur pajak
  {
    id: 'enrich-mp-07',
    type: 'flashcard',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Syarat Formal dan Material Faktur Pajak',
    content:
      'Sebutkan perbedaan syarat formal dan syarat material faktur pajak serta akibat jika salah satu tidak terpenuhi.',
    answer:
      'Syarat formal: faktur pajak harus memuat informasi yang ditetapkan (nama, NPWP penjual & pembeli, nomor seri faktur pajak, tanggal, BKP/JKP, jumlah harga, PPN). Syarat material: barang/jasa yang tertera benar-benar diserahkan dan transaksi sungguh-sungguh terjadi. Jika syarat formal tidak lengkap, faktur disebut faktur pajak cacat dan pajak masukannya tidak dapat dikreditkan. Jika syarat material tidak terpenuhi (faktur fiktif), selain tidak dapat dikreditkan, dapat dikenai sanksi pidana perpajakan.',
  },

  // 8. Quiz — SPT Masa PPN batas waktu
  {
    id: 'enrich-mp-08',
    type: 'quiz',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Batas Waktu Pelaporan SPT Masa PPN',
    content:
      'Batas waktu penyetoran dan pelaporan SPT Masa PPN untuk masa pajak Maret adalah?',
    options: [
      'Setor paling lambat tanggal 15 April, lapor paling lambat tanggal 30 April',
      'Setor paling lambat tanggal 25 April, lapor paling lambat tanggal 30 April',
      'Setor dan lapor paling lambat tanggal 20 April',
      'Setor paling lambat akhir April, lapor paling lambat tanggal 25 April',
    ],
    correctIndex: 1,
    explanation:
      'Berdasarkan peraturan perpajakan, PPN Kurang Bayar harus disetor paling lambat tanggal 25 bulan berikutnya (25 April untuk masa Maret), dan SPT Masa PPN harus dilaporkan paling lambat akhir bulan berikutnya (30 April).',
  },

  // 9. Quiz — Withholding tax PPh 23
  {
    id: 'enrich-mp-09',
    type: 'quiz',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Tarif dan Objek PPh Pasal 23',
    content:
      'PT Andika membayar jasa konsultasi manajemen kepada CV Konsultan Prima sebesar Rp 50.000.000 (belum termasuk PPN). Berapa PPh Pasal 23 yang wajib dipotong?',
    options: [
      'Rp 1.000.000 (tarif 2%)',
      'Rp 750.000 (tarif 1,5%)',
      'Rp 2.500.000 (tarif 5%)',
      'Rp 500.000 (tarif 1%)',
    ],
    correctIndex: 0,
    explanation:
      'Jasa konsultasi manajemen termasuk objek PPh Pasal 23 dengan tarif 2% dari jumlah bruto. PPh 23 = 2% x Rp 50.000.000 = Rp 1.000.000. PT Andika wajib memotong, menyetor, dan melaporkan pemotongan tersebut.',
  },

  // 10. Flashcard — PPh 26 withholding tax
  {
    id: 'enrich-mp-10',
    type: 'flashcard',
    subject: 'Manajemen Perpajakan',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'PPh Pasal 26 dan Pengaruh Tax Treaty',
    content:
      'Jelaskan objek dan tarif PPh Pasal 26 serta bagaimana perjanjian penghindaran pajak berganda (P3B/tax treaty) mempengaruhi pemungutannya.',
    answer:
      'PPh Pasal 26 dikenakan atas penghasilan yang bersumber dari Indonesia yang diterima Wajib Pajak Luar Negeri selain BUT (Bentuk Usaha Tetap), seperti dividen, bunga, royalti, imbalan jasa, dan premi asuransi. Tarif umum adalah 20% dari jumlah bruto. Apabila Indonesia memiliki P3B dengan negara domisili penerima penghasilan, tarif dapat dikurangi (misalnya 10% atau 15% untuk dividen/bunga/royalti tergantung P3B) atau bahkan dibebaskan. Syarat penerapan P3B: penerima penghasilan harus menyerahkan Certificate of Domicile (SKD/Form DGT) yang valid.',
  },

  // ===== AUDIT & ASURANS (10 cards) =====

  // 11. Quiz — Bukti audit: sufficiency vs appropriateness
  {
    id: 'enrich-aa-01',
    type: 'quiz',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Kecukupan vs Ketepatan Bukti Audit',
    content:
      'Auditor mengumpulkan 500 konfirmasi piutang dari total populasi 510 debitur. Konfirmasi dijawab langsung oleh debitur melalui surat resmi. Pernyataan yang paling tepat menggambarkan bukti audit ini adalah?',
    options: [
      'Bukti cukup (sufficient) dan tepat (appropriate) karena kuantitas tinggi dan berasal dari pihak eksternal yang independen',
      'Bukti tepat tetapi tidak cukup karena hanya 500 dari 510 dikonfirmasi',
      'Bukti cukup tetapi tidak tepat karena konfirmasi tidak membuktikan penilaian piutang',
      'Bukti tidak cukup dan tidak tepat karena seharusnya auditor mengambil sampel acak',
    ],
    correctIndex: 0,
    explanation:
      'Sufficiency mengukur kuantitas bukti — 500/510 merupakan cakupan sangat tinggi. Appropriateness mengukur relevansi dan keandalan — konfirmasi dari pihak eksternal independen merupakan bukti berkualitas tinggi karena tidak dikendalikan klien. Kombinasi keduanya menghasilkan bukti yang cukup dan tepat.',
  },

  // 12. Quiz — Asersi manajemen: keberadaan vs kelengkapan
  {
    id: 'enrich-aa-02',
    type: 'quiz',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Asersi Keberadaan vs Kelengkapan',
    content:
      'Auditor melakukan pengujian dengan menelusuri daftar aset tetap yang tercatat di neraca lalu memverifikasi fisik aset tersebut di lapangan. Asersi manajemen mana yang terutama diuji?',
    options: [
      'Kelengkapan — memastikan semua aset yang ada telah dicatat',
      'Keberadaan — memastikan aset yang tercatat benar-benar ada secara fisik',
      'Penilaian — memastikan aset dinilai pada jumlah yang tepat',
      'Hak dan kewajiban — memastikan perusahaan berhak atas aset tersebut',
    ],
    correctIndex: 1,
    explanation:
      'Prosedur dari catatan ke fisik menguji asersi keberadaan (existence): apakah aset yang tercatat dalam laporan keuangan memang ada secara fisik. Sebaliknya, dari fisik ke catatan akan menguji asersi kelengkapan (completeness): apakah aset yang ada telah seluruhnya dicatat.',
  },

  // 13. Flashcard — Lima asersi manajemen
  {
    id: 'enrich-aa-03',
    type: 'flashcard',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'dasar',
    title: 'Lima Asersi Manajemen dalam Laporan Keuangan',
    content:
      'Sebutkan dan jelaskan lima asersi manajemen yang menjadi dasar pengujian audit atas saldo akun dan transaksi.',
    answer:
      '1. Keberadaan/Keterjadian (Existence/Occurrence): aset, liabilitas, dan ekuitas yang tercatat benar-benar ada; transaksi yang dicatat sungguh-sungguh terjadi. 2. Kelengkapan (Completeness): semua aset, liabilitas, transaksi yang seharusnya dicatat telah dicatat — tidak ada yang dihilangkan. 3. Penilaian dan Alokasi (Valuation & Allocation): aset, liabilitas, dan ekuitas disajikan pada nilai yang tepat sesuai standar akuntansi. 4. Hak dan Kewajiban (Rights & Obligations): entitas memiliki hak atas aset yang dicatat dan berkewajiban atas liabilitas yang dicatat. 5. Penyajian dan Pengungkapan (Presentation & Disclosure): komponen laporan keuangan diklasifikasikan, diungkapkan, dan dijelaskan secara tepat.',
  },

  // 14. Quiz — Prosedur substantif vs pengujian pengendalian
  {
    id: 'enrich-aa-04',
    type: 'quiz',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Prosedur Substantif vs Pengujian Pengendalian',
    content:
      'Auditor memeriksa apakah setiap pembayaran kepada pemasok telah diotorisasi oleh pejabat berwenang dengan melihat tanda tangan persetujuan pada voucher pembayaran. Ini merupakan contoh dari?',
    options: [
      'Prosedur substantif — pengujian rincian transaksi',
      'Pengujian pengendalian — memverifikasi efektivitas operasi pengendalian internal',
      'Prosedur analitis — membandingkan tren pembayaran',
      'Prosedur penilaian risiko — memahami lingkungan pengendalian',
    ],
    correctIndex: 1,
    explanation:
      'Pengujian pengendalian (test of controls) bertujuan mengevaluasi apakah pengendalian internal beroperasi efektif sepanjang periode. Memeriksa tanda tangan otorisasi adalah bukti bahwa pengendalian otorisasi berjalan. Prosedur substantif justru langsung menguji angka dalam laporan keuangan (saldo atau transaksi).',
  },

  // 15. Quiz — Materialitas: planning vs performance
  {
    id: 'enrich-aa-05',
    type: 'quiz',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Materialitas Perencanaan vs Kinerja',
    content:
      'Auditor menetapkan materialitas perencanaan (planning materiality) Rp 500 juta. Untuk pelaksanaan prosedur audit terhadap akun-akun individual, auditor menggunakan performance materiality. Mengapa performance materiality ditetapkan lebih rendah dari planning materiality?',
    options: [
      'Karena standar audit mewajibkan performance materiality tepat 75% dari planning materiality',
      'Untuk mengurangi risiko bahwa total salah saji yang tidak terdeteksi pada berbagai akun secara agregat melampaui materialitas keseluruhan',
      'Karena auditor harus lebih konservatif dalam menilai akun-akun kecil',
      'Untuk memastikan auditor melakukan lebih banyak pekerjaan dari yang diperlukan',
    ],
    correctIndex: 1,
    explanation:
      'Performance materiality ditetapkan di bawah planning materiality untuk mengantisipasi kemungkinan adanya salah saji yang tidak terdeteksi di berbagai akun secara bersamaan. Jika setiap akun diuji sampai batas planning materiality, akumulasi salah saji dari berbagai akun bisa melampaui ambang materialitas keseluruhan tanpa terdeteksi.',
  },

  // 16. Flashcard — Komponen risiko audit
  {
    id: 'enrich-aa-06',
    type: 'flashcard',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Komponen Risiko Audit: IR, CR, DR',
    content:
      'Jelaskan tiga komponen risiko audit dan hubungan matematisnya.',
    answer:
      'Risiko Audit (Audit Risk/AR) = Risiko Bawaan (Inherent Risk/IR) x Risiko Pengendalian (Control Risk/CR) x Risiko Deteksi (Detection Risk/DR). Inherent Risk: kemungkinan suatu asersi mengandung salah saji material tanpa mempertimbangkan pengendalian — dipengaruhi sifat akun dan industri. Control Risk: kemungkinan salah saji tidak dicegah atau dideteksi oleh pengendalian internal klien — dievaluasi melalui pengujian pengendalian. Detection Risk: kemungkinan prosedur auditor gagal mendeteksi salah saji yang ada — satu-satunya komponen yang dapat dikendalikan auditor dengan menyesuaikan luas dan sifat prosedur substantif. Semakin tinggi IR dan CR, semakin rendah DR yang dapat diterima (prosedur substantif harus lebih luas).',
  },

  // 17. Quiz — Opini auditor WTP/WDP
  {
    id: 'enrich-aa-07',
    type: 'quiz',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'menengah',
    title: 'Jenis Opini Auditor',
    content:
      'Auditor menemukan bahwa perusahaan tidak mengungkapkan transaksi dengan pihak berelasi yang material sesuai PSAK 7. Manajemen menolak membuat pengungkapan tambahan. Opini auditor yang paling tepat adalah?',
    options: [
      'Wajar Tanpa Pengecualian (WTP) karena laporan keuangan secara keseluruhan wajar',
      'Wajar Dengan Pengecualian (WDP) karena terdapat penyimpangan material yang terlokalisir pada satu hal',
      'Tidak Wajar (TW) karena pengungkapan yang hilang bersifat material dan pervasif',
      'Menolak Memberikan Opini karena auditor tidak dapat memperoleh bukti cukup',
    ],
    correctIndex: 1,
    explanation:
      'Ketiadaan pengungkapan pihak berelasi yang material adalah penyimpangan dari PSAK, tetapi dampaknya terlokalisir (bukan pervasif). Opini yang tepat adalah WDP (qualified opinion) dengan paragraf pengecualian yang menjelaskan penyimpangan tersebut. Opini Tidak Wajar digunakan bila dampak penyimpangan bersifat material dan pervasif terhadap laporan keuangan secara keseluruhan.',
  },

  // 18. Quiz — Key Audit Matters (KAM)
  {
    id: 'enrich-aa-08',
    type: 'quiz',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Key Audit Matters (KAM)',
    content:
      'Hal-hal berikut yang BUKAN merupakan kriteria penetapan suatu hal sebagai Key Audit Matter (KAM) dalam laporan auditor adalah?',
    options: [
      'Area yang memerlukan pertimbangan auditor yang signifikan, terutama yang melibatkan estimasi dengan ketidakpastian tinggi',
      'Hal yang dikomunikasikan kepada pihak yang bertanggung jawab atas tata kelola (TCWG)',
      'Setiap temuan ketidakpatuhan klien terhadap peraturan yang ditemukan selama audit',
      'Transaksi atau saldo yang memiliki risiko salah saji material signifikan',
    ],
    correctIndex: 2,
    explanation:
      'KAM adalah hal-hal yang menurut pertimbangan profesional auditor paling signifikan dalam audit periode berjalan, dipilih dari hal-hal yang dikomunikasikan ke TCWG. Ketidakpatuhan terhadap regulasi tidak secara otomatis menjadi KAM kecuali memiliki signifikansi audit yang tinggi. KAM bukan daftar temuan kepatuhan — ia berfokus pada area dengan kompleksitas atau risiko audit tertinggi.',
  },

  // 19. Flashcard — Opini menolak memberikan pendapat
  {
    id: 'enrich-aa-09',
    type: 'flashcard',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Disclaimer of Opinion (Menolak Memberikan Opini)',
    content:
      'Kapan auditor mengeluarkan opini menolak (disclaimer of opinion) dan apa bedanya dengan opini tidak wajar (adverse opinion)?',
    answer:
      'Opini Menolak diberikan ketika auditor tidak dapat memperoleh bukti audit yang cukup dan tepat (pembatasan ruang lingkup) sehingga tidak mampu menyimpulkan apakah laporan keuangan disajikan secara wajar — dan dampak ketidakmampuan tersebut diyakini material serta pervasif. Opini Tidak Wajar (adverse) diberikan ketika auditor telah memperoleh bukti yang cukup dan menyimpulkan bahwa laporan keuangan mengandung salah saji yang material dan pervasif akibat ketidaksesuaian dengan standar akuntansi. Perbedaan kunci: disclaimer = auditor tidak tahu; adverse = auditor tahu dan laporan keuangan salah secara material dan menyeluruh.',
  },

  // 20. Quiz — Asersi penilaian dan prosedur yang tepat
  {
    id: 'enrich-aa-10',
    type: 'quiz',
    subject: 'Audit & Asurans',
    level: 'associate-ca',
    difficulty: 'lanjutan',
    title: 'Prosedur Audit untuk Asersi Penilaian',
    content:
      'Untuk menguji asersi penilaian (valuation) atas saldo piutang usaha, prosedur audit yang paling relevan adalah?',
    options: [
      'Melakukan konfirmasi positif kepada seluruh debitur untuk membuktikan keberadaan piutang',
      'Menelusuri faktur penjualan ke jurnal penjualan untuk memastikan pencatatan lengkap',
      'Mengevaluasi kecukupan cadangan kerugian penurunan nilai dengan menganalisis umur piutang dan sejarah penagihan',
      'Memeriksa otorisasi persetujuan kredit untuk setiap debitur guna menguji pengendalian',
    ],
    correctIndex: 2,
    explanation:
      'Asersi penilaian untuk piutang usaha berkaitan dengan apakah piutang dicatat pada nilai yang dapat direalisasi (net realizable value). Prosedur yang paling relevan adalah mengevaluasi kelayakan cadangan kerugian penurunan nilai melalui analisis aging schedule dan riwayat penagihan. Konfirmasi menguji keberadaan; menelusuri faktur menguji kelengkapan; otorisasi kredit menguji pengendalian.',
  },
];
