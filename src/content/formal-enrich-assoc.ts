import type { FormalChapter } from './formalData';

// =============================================
// PELAPORAN KORPORAT — EXTRA CHAPTERS
// =============================================
export const pelaporanKorporatExtraChapters: FormalChapter[] = [
  {
    id: 'pk-konsolidasi',
    title: 'Laporan Keuangan Konsolidasi (PSAK 65)',
    description: 'Laporan keuangan konsolidasi menyajikan posisi keuangan dan hasil operasi suatu grup (entitas induk beserta seluruh entitas anaknya) seolah-olah merupakan satu entitas ekonomi tunggal. PSAK 65 mengatur ketentuan penyajian dan penyusunan laporan keuangan konsolidasi.',
    sections: [
      {
        id: 'pk-kon-pengendalian',
        title: 'Konsep Pengendalian dan Ruang Lingkup Konsolidasi',
        content: 'Entitas induk wajib menyusun laporan keuangan konsolidasi apabila memiliki pengendalian atas satu atau lebih entitas anak. Pengendalian terdapat ketika investor memiliki tiga unsur secara bersamaan: kekuasaan atas investee, eksposur atau hak atas imbal hasil variabel dari keterlibatannya dengan investee, serta kemampuan untuk menggunakan kekuasaannya atas investee guna mempengaruhi jumlah imbal hasil investor.',
        rules: [
          'Pengendalian umumnya ditunjukkan oleh kepemilikan lebih dari 50% hak suara, namun pengendalian de facto juga dimungkinkan dengan kepemilikan di bawah 50%.',
          'Entitas investasi (investment entity) dikecualikan dari kewajiban konsolidasi dan mengukur investasinya pada nilai wajar melalui laba rugi.',
          'Seluruh aset, liabilitas, ekuitas, penghasilan, beban, dan arus kas entitas induk dan entitas anak digabungkan baris per baris.',
          'Saldo dan transaksi intragroup, termasuk laba atau rugi yang belum direalisasi, harus dieliminasi seluruhnya.',
        ],
        tables: [
          {
            caption: 'Indikator Pengendalian',
            headers: ['Unsur Pengendalian', 'Indikator Praktis'],
            rows: [
              ['Kekuasaan', 'Hak suara mayoritas, hak veto substantif, hak untuk mengarahkan aktivitas relevan'],
              ['Imbal hasil variabel', 'Dividen, perubahan nilai investasi, biaya jasa, jaminan kredit'],
              ['Kemampuan menggunakan kekuasaan', 'Investor bertindak sebagai prinsipal, bukan agen'],
            ],
          },
        ],
      },
      {
        id: 'pk-kon-akuisisi',
        title: 'Metode Akuisisi dan Pengukuran Awal',
        content: 'Metode akuisisi adalah satu-satunya metode yang diizinkan PSAK 22 untuk pencatatan kombinasi bisnis. Pada tanggal akuisisi, pihak pengakuisisi mengakui dan mengukur aset teridentifikasi yang diperoleh, liabilitas yang diambil alih, dan kepentingan non-pengendali (KNP) pada entitas yang diakuisisi.',
        steps: [
          'Identifikasi pihak pengakuisisi.',
          'Tentukan tanggal akuisisi.',
          'Akui dan ukur aset teridentifikasi yang diperoleh dan liabilitas yang diambil alih pada nilai wajar tanggal akuisisi.',
          'Akui dan ukur goodwill atau keuntungan dari pembelian dengan diskon.',
        ],
        formula: 'Goodwill = Imbalan yang Dialihkan + KNP + Nilai Wajar Kepentingan Ekuitas Sebelumnya - Nilai Wajar Bersih Aset Teridentifikasi',
        examples: [
          'PT Induk mengakuisisi 80% saham PT Anak dengan imbalan Rp 800 juta. Nilai wajar bersih aset teridentifikasi PT Anak adalah Rp 900 juta. KNP diukur pada nilai wajar sebesar Rp 200 juta. Goodwill = Rp 800 juta + Rp 200 juta - Rp 900 juta = Rp 100 juta.',
          'Jika imbalan yang dialihkan lebih kecil dari bagian nilai wajar bersih aset teridentifikasi yang diperoleh, selisihnya diakui sebagai keuntungan pembelian dengan diskon (bargain purchase) dalam laba rugi.',
        ],
        notes: [
          'KNP dapat diukur pada nilai wajar (metode goodwill penuh) atau pada proporsi KNP atas nilai wajar bersih aset teridentifikasi (metode goodwill parsial).',
        ],
      },
      {
        id: 'pk-kon-goodwill',
        title: 'Goodwill: Pengakuan, Pengukuran Selanjutnya, dan Uji Penurunan Nilai',
        content: 'Goodwill tidak diamortisasi melainkan diuji penurunan nilainya minimal setiap tahun atau lebih sering jika terdapat indikasi penurunan. Goodwill dialokasikan ke unit penghasil kas (UPK) yang diperkirakan akan memperoleh manfaat dari sinergi kombinasi bisnis.',
        rules: [
          'Goodwill negatif (bargain purchase gain) langsung diakui di laba rugi pada tanggal akuisisi.',
          'Kerugian penurunan nilai goodwill tidak dapat dipulihkan kembali.',
          'UPK yang menerima alokasi goodwill diuji penurunan nilai dengan membandingkan jumlah terpulihkan dengan jumlah tercatat UPK termasuk goodwill.',
        ],
        formula: 'Jumlah Terpulihkan UPK = MAX(Nilai Wajar Dikurangi Biaya Pelepasan, Nilai Pakai)',
        warning: 'Jika jumlah tercatat UPK melebihi jumlah terpulihkannya, kerugian penurunan nilai pertama kali dialokasikan untuk mengurangi goodwill, baru kemudian ke aset lain secara pro-rata.',
      },
      {
        id: 'pk-kon-knp',
        title: 'Kepentingan Non-Pengendali (KNP)',
        content: 'Kepentingan non-pengendali adalah ekuitas pada entitas anak yang tidak dapat diatribusikan secara langsung maupun tidak langsung kepada entitas induk. KNP disajikan dalam ekuitas konsolidasi secara terpisah dari ekuitas pemilik entitas induk.',
        rules: [
          'Laba atau rugi dan setiap komponen penghasilan komprehensif lain diatribusikan kepada pemilik entitas induk dan KNP, bahkan jika hal ini mengakibatkan KNP memiliki saldo defisit.',
          'Perubahan kepemilikan pada entitas anak tanpa kehilangan pengendalian diperlakukan sebagai transaksi ekuitas.',
          'Ketika entitas induk kehilangan pengendalian, entitas induk menghentikan pengakuan aset dan liabilitas entitas anak, mengakui sisa kepentingan pada nilai wajar, dan mengakui keuntungan atau kerugian terkait.',
        ],
        tables: [
          {
            caption: 'Penyajian KNP dalam Laporan Konsolidasi',
            headers: ['Laporan', 'Perlakuan KNP'],
            rows: [
              ['Laporan Posisi Keuangan', 'Disajikan dalam bagian ekuitas, terpisah dari ekuitas pemilik induk'],
              ['Laporan Laba Rugi', 'Laba/rugi diatribusikan ke pemilik induk dan KNP secara terpisah'],
              ['Laporan Perubahan Ekuitas', 'Perubahan KNP ditunjukkan secara eksplisit'],
            ],
          },
        ],
      },
      {
        id: 'pk-kon-eliminasi',
        title: 'Prosedur Eliminasi Intragroup',
        content: 'Dalam menyusun laporan keuangan konsolidasi, seluruh efek transaksi intragroup harus dieliminasi agar laporan mencerminkan posisi dan kinerja grup sebagai satu entitas ekonomi.',
        steps: [
          'Eliminasi investasi entitas induk di entitas anak terhadap ekuitas entitas anak pada tanggal akuisisi.',
          'Eliminasi saldo piutang-utang intragroup.',
          'Eliminasi transaksi penjualan-pembelian intragroup (pendapatan dan beban).',
          'Eliminasi laba atau rugi intragroup yang belum direalisasi dalam persediaan.',
          'Eliminasi laba atau rugi intragroup yang belum direalisasi dalam aset tetap.',
        ],
        examples: [
          'PT Induk menjual barang ke PT Anak seharga Rp 100 juta (harga pokok Rp 70 juta). PT Anak belum menjual barang tersebut. Jurnal eliminasi: Debit Penjualan Rp 100 juta; Kredit Harga Pokok Penjualan Rp 70 juta; Kredit Persediaan Rp 30 juta.',
        ],
      },
    ],
  },
  {
    id: 'pk-instrumen-keuangan',
    title: 'Instrumen Keuangan (PSAK 71)',
    description: 'PSAK 71 (adopsi IFRS 9) mengatur klasifikasi dan pengukuran aset keuangan dan liabilitas keuangan, penghentian pengakuan, serta akuntansi lindung nilai. Standar ini menggantikan pendekatan berbasis rules PSAK 55 dengan pendekatan berbasis prinsip.',
    sections: [
      {
        id: 'pk-if-klasifikasi-aset',
        title: 'Klasifikasi Aset Keuangan',
        content: 'Klasifikasi aset keuangan ditentukan berdasarkan dua kriteria: model bisnis entitas dalam mengelola aset keuangan dan karakteristik arus kas kontraktual aset (uji SPPI: Solely Payments of Principal and Interest).',
        tables: [
          {
            caption: 'Kategori Klasifikasi Aset Keuangan PSAK 71',
            headers: ['Kategori', 'Model Bisnis', 'Uji SPPI', 'Pengukuran'],
            rows: [
              ['Biaya Perolehan Diamortisasi (BPD)', 'Hold to collect', 'Lulus', 'Amortized cost'],
              ['Nilai Wajar Melalui Penghasilan Komprehensif Lain — Instrumen Utang (FVOCI-utang)', 'Hold to collect & sell', 'Lulus', 'Fair value; perubahan di OCI, efektif bunga di laba rugi'],
              ['Nilai Wajar Melalui Laba Rugi (FVTPL)', 'Lainnya / gagal SPPI', 'Tidak wajib', 'Fair value; seluruh perubahan di laba rugi'],
              ['FVOCI — Instrumen Ekuitas (irrevocable election)', 'N/A', 'N/A', 'Fair value; seluruh perubahan di OCI, tidak daur ulang'],
            ],
          },
        ],
        rules: [
          'Uji SPPI gagal jika arus kas mengandung leverage, konversi, atau fitur yang mengubah nilai waktu uang secara signifikan.',
          'Investasi pada instrumen ekuitas selalu diukur FVTPL kecuali dipilih secara irrevocable sebagai FVOCI.',
          'Opsi FVOCI untuk ekuitas tidak mengizinkan daur ulang keuntungan/kerugian ke laba rugi saat penghentian pengakuan.',
        ],
      },
      {
        id: 'pk-if-klasifikasi-liabilitas',
        title: 'Klasifikasi Liabilitas Keuangan',
        content: 'Sebagian besar liabilitas keuangan diukur pada biaya perolehan diamortisasi menggunakan metode suku bunga efektif. Liabilitas keuangan pada FVTPL umumnya terbatas pada yang dimiliki untuk diperdagangkan atau yang dipilih secara irrevocable.',
        rules: [
          'Untuk liabilitas keuangan yang didesignasi FVTPL, perubahan nilai wajar akibat risiko kredit sendiri (own credit risk) disajikan di OCI, bukan laba rugi.',
          'Liabilitas keuangan diperlakukan sebagai dimiliki untuk diperdagangkan jika diperoleh terutama untuk tujuan dibeli kembali dalam waktu dekat, atau merupakan bagian dari portofolio instrumen keuangan yang dikelola bersama.',
        ],
      },
      {
        id: 'pk-if-pengakuan-penghentian',
        title: 'Pengakuan dan Penghentian Pengakuan',
        content: 'Entitas mengakui aset atau liabilitas keuangan dalam laporan posisi keuangan ketika, dan hanya ketika, entitas menjadi pihak dalam ketentuan kontrak instrumen tersebut. Penghentian pengakuan aset keuangan terjadi ketika hak kontraktual atas arus kas dari aset berakhir, atau entitas mentransfer aset dengan memenuhi kriteria tertentu.',
        steps: [
          'Tentukan apakah aset keuangan telah ditransfer.',
          'Evaluasi apakah risiko dan manfaat kepemilikan telah ditransfer secara substansial.',
          'Jika risiko dan manfaat ditransfer substansial: hentikan pengakuan aset keuangan.',
          'Jika risiko dan manfaat ditahan substansial: teruskan pengakuan aset keuangan.',
          'Jika tidak ditransfer maupun ditahan substansial: evaluasi apakah entitas masih memiliki pengendalian.',
        ],
        formula: 'Keuntungan/Kerugian Penghentian Pengakuan = Nilai Tercatat - (Imbalan yang Diterima + Aset Baru yang Diakui - Liabilitas Baru yang Diakui)',
        examples: [
          'Entitas menjual piutang dengan recourse (jaminan pengembalian jika gagal bayar). Jika risiko gagal bayar masih ditahan secara substansial, piutang tidak dihentikan pengakuannya — dicatat sebagai pinjaman yang dijamin.',
        ],
      },
      {
        id: 'pk-if-penurunan-nilai',
        title: 'Penurunan Nilai — Model Kerugian Kredit Ekspektasian (ECL)',
        content: 'PSAK 71 menggantikan model kerugian yang terjadi (incurred loss) dengan model kerugian kredit ekspektasian (expected credit loss/ECL). ECL mencerminkan kemungkinan terjadinya gagal bayar, tertimbang probabilitas, dan nilai waktu uang.',
        tables: [
          {
            caption: 'Tiga Tahap ECL',
            headers: ['Tahap', 'Kondisi', 'Cadangan ECL', 'Pengakuan Bunga'],
            rows: [
              ['Tahap 1', 'Tidak ada peningkatan risiko kredit signifikan sejak pengakuan awal', '12-bulan ECL', 'Suku bunga efektif atas nilai tercatat bruto'],
              ['Tahap 2', 'Ada peningkatan risiko kredit signifikan (tidak default)', 'Lifetime ECL', 'Suku bunga efektif atas nilai tercatat bruto'],
              ['Tahap 3', 'Aset keuangan mengalami penurunan nilai kredit (credit-impaired/default)', 'Lifetime ECL', 'Suku bunga efektif atas nilai tercatat neto (setelah cadangan)'],
            ],
          },
        ],
        formula: 'ECL = PD x LGD x EAD x Faktor Diskonto\n(PD = Probability of Default, LGD = Loss Given Default, EAD = Exposure at Default)',
        notes: [
          'Untuk piutang dagang tanpa komponen pembiayaan signifikan, entitas selalu mengakui lifetime ECL (simplified approach).',
          'Matriks provisi (provision matrix) berbasis pengalaman historis kerugian kredit dapat digunakan sebagai pendekatan praktis.',
        ],
      },
    ],
  },
];

// =============================================
// MANAJEMEN KEUANGAN — EXTRA CHAPTERS
// =============================================
export const manajemenKeuanganExtraChapters: FormalChapter[] = [
  {
    id: 'mk-struktur-modal',
    title: 'Struktur Modal: Teori dan Pengaruh Pajak serta Kebangkrutan',
    description: 'Struktur modal merujuk pada komposisi pendanaan jangka panjang perusahaan yang terdiri dari utang dan ekuitas. Terdapat beberapa teori utama yang menjelaskan bagaimana perusahaan seharusnya memilih struktur modalnya, dengan mempertimbangkan pengaruh pajak, biaya kebangkrutan, dan asimetri informasi.',
    sections: [
      {
        id: 'mk-sm-mm',
        title: 'Teori Modigliani-Miller (M&M)',
        content: 'Modigliani dan Miller mengembangkan teori struktur modal dalam dua proposisi. Proposisi tanpa pajak (1958) menyatakan bahwa nilai perusahaan tidak dipengaruhi oleh struktur modal dalam pasar modal sempurna. Proposisi dengan pajak (1963) memasukkan keuntungan penghematan pajak dari bunga utang (tax shield).',
        tables: [
          {
            caption: 'Proposisi M&M',
            headers: ['Proposisi', 'Tanpa Pajak', 'Dengan Pajak'],
            rows: [
              ['Proposisi I (Nilai Perusahaan)', 'VL = VU (nilai tidak berubah karena leverage)', 'VL = VU + T x D (nilai naik karena tax shield)'],
              ['Proposisi II (Biaya Ekuitas)', 'rE naik seiring peningkatan leverage karena risiko finansial', 'rE tetap naik, namun WACC turun karena tax shield'],
            ],
          },
        ],
        formula: 'Proposisi I dengan Pajak: VL = VU + (T x D)\ndi mana: VL = Nilai perusahaan berleveraged, VU = Nilai perusahaan unleveraged, T = Tarif pajak badan, D = Nilai pasar utang\n\nProposisi II: rE = r0 + (r0 - rD) x (D/E) x (1 - T)',
        rules: [
          'Asumsi pasar modal sempurna M&M: tidak ada pajak, biaya transaksi, biaya kebangkrutan, asimetri informasi, dan akses pasar yang sama bagi individu dan perusahaan.',
          'Dalam dunia nyata, asumsi-asumsi tersebut tidak terpenuhi, sehingga lahir teori-teori penyempurnaan.',
        ],
      },
      {
        id: 'mk-sm-tradeoff',
        title: 'Trade-Off Theory',
        content: 'Trade-off theory menyatakan bahwa perusahaan menyeimbangkan manfaat penghematan pajak dari utang dengan biaya kesulitan keuangan (financial distress costs). Struktur modal optimal terjadi ketika manfaat marjinal tax shield sama dengan biaya marjinal financial distress.',
        formula: 'VL = VU + PV(Tax Shield) - PV(Financial Distress Costs)',
        tables: [
          {
            caption: 'Biaya Financial Distress',
            headers: ['Jenis Biaya', 'Contoh'],
            rows: [
              ['Biaya langsung (direct costs)', 'Biaya hukum, akuntansi, dan administrasi kepailitan'],
              ['Biaya tidak langsung (indirect costs)', 'Kehilangan pelanggan, pemasok, karyawan; pengurangan investasi (underinvestment)'],
              ['Agency costs of debt', 'Risk shifting, underinvestment problem, asset substitution'],
            ],
          },
        ],
        notes: [
          'Perusahaan dengan aset berwujud tinggi dan penghasilan kena pajak besar cenderung menggunakan utang lebih banyak.',
          'Perusahaan dengan aset tidak berwujud tinggi (R&D, merek) dan risiko bisnis tinggi cenderung menggunakan lebih sedikit utang.',
        ],
      },
      {
        id: 'mk-sm-pecking',
        title: 'Pecking Order Theory',
        content: 'Pecking order theory (Myers & Majluf, 1984) berpendapat bahwa asimetri informasi antara manajemen dan investor luar menyebabkan perusahaan lebih memilih sumber pendanaan internal, kemudian utang, dan terakhir ekuitas baru. Tidak ada target struktur modal yang optimal — struktur modal merupakan hasil akumulasi keputusan pendanaan.',
        rules: [
          'Urutan preferensi pendanaan: (1) Laba ditahan, (2) Utang, (3) Penerbitan saham baru.',
          'Perusahaan yang profitable cenderung memiliki rasio utang rendah bukan karena mereka menghindari utang, melainkan karena mereka tidak membutuhkannya.',
          'Penerbitan saham baru dipandang negatif oleh pasar karena manajemen diasumsikan menerbitkan saham ketika saham overvalued.',
        ],
        examples: [
          'Sebuah perusahaan dengan arus kas bebas melimpah cenderung mengakumulasi kas atau membayar utang daripada membayar dividen, konsisten dengan pecking order.',
        ],
      },
      {
        id: 'mk-sm-pengaruh-pajak',
        title: 'Pengaruh Pajak dan Kebangkrutan terhadap Keputusan Struktur Modal',
        content: 'Dalam praktik, manajer keuangan mempertimbangkan kedua sisi: keuntungan pajak dari leverage dan risiko kebangkrutan. Titik keseimbangan dinamis menjadi panduan penentuan target debt ratio.',
        steps: [
          'Hitung nilai perusahaan unleveraged (VU) menggunakan FCFF yang didiskon dengan biaya modal unleveraged.',
          'Hitung nilai kini tax shield berdasarkan utang yang direncanakan dan tarif pajak badan.',
          'Estimasi nilai kini biaya financial distress menggunakan probabilitas kebangkrutan dan besaran biaya.',
          'Tentukan tingkat leverage yang memaksimalkan: VL = VU + PV(Tax Shield) - PV(Financial Distress Costs).',
        ],
        formula: 'WACC = (E/V) x rE + (D/V) x rD x (1 - T)\ndi mana: E = Nilai pasar ekuitas, D = Nilai pasar utang, V = E + D, rE = Biaya ekuitas, rD = Biaya utang, T = Tarif pajak',
        warning: 'Perusahaan dengan debt ratio melampaui titik optimal akan mengalami penurunan nilai karena biaya financial distress melebihi manfaat tax shield.',
      },
    ],
  },
  {
    id: 'mk-modal-kerja',
    title: 'Manajemen Modal Kerja',
    description: 'Manajemen modal kerja mencakup pengelolaan aset lancar dan liabilitas lancar untuk menjamin likuiditas operasional sehari-hari. Tujuannya adalah meminimalkan siklus konversi kas sekaligus memastikan perusahaan dapat memenuhi kewajiban jangka pendeknya.',
    sections: [
      {
        id: 'mk-mk-siklus',
        title: 'Siklus Konversi Kas (Cash Conversion Cycle)',
        content: 'Siklus konversi kas (CCC) mengukur waktu rata-rata antara pengeluaran kas untuk kebutuhan operasional dan penerimaan kas dari penjualan. Semakin pendek CCC, semakin efisien manajemen modal kerja.',
        formula: 'CCC = DIO + DSO - DPO\nDIO (Days Inventory Outstanding) = (Rata-rata Persediaan / HPP) x 365\nDSO (Days Sales Outstanding) = (Rata-rata Piutang / Penjualan Kredit) x 365\nDPO (Days Payable Outstanding) = (Rata-rata Utang Dagang / HPP) x 365',
        examples: [
          'Perusahaan dengan DIO = 45 hari, DSO = 30 hari, DPO = 20 hari memiliki CCC = 45 + 30 - 20 = 55 hari. Artinya perusahaan membutuhkan pendanaan selama 55 hari untuk setiap siklus operasi.',
          'Perusahaan ritel seperti supermarket memiliki DPO > DIO + DSO sehingga CCC negatif — pemasok membiayai operasi perusahaan.',
        ],
        tables: [
          {
            caption: 'Strategi Pemendekan CCC',
            headers: ['Komponen', 'Strategi'],
            rows: [
              ['DIO', 'Just-in-time inventory, peningkatan perputaran persediaan'],
              ['DSO', 'Percepatan penagihan, diskon tunai, penjualan tunai'],
              ['DPO', 'Negosiasi perpanjangan jangka kredit pemasok'],
            ],
          },
        ],
      },
      {
        id: 'mk-mk-kas',
        title: 'Manajemen Kas dan Setara Kas',
        content: 'Tujuan manajemen kas adalah mempertahankan saldo kas minimum yang dibutuhkan untuk operasi, sekaligus menginvestasikan kelebihan kas secara menguntungkan. Model Baumol dan model Miller-Orr digunakan untuk menentukan saldo kas optimal.',
        formula: 'Model Baumol — Saldo Kas Optimal:\nC* = SQRT(2 x T x F / r)\ndi mana: C* = Saldo kas optimal, T = Total kebutuhan kas per periode, F = Biaya transaksi per konversi, r = Tingkat bunga oportunitas\n\nModel Miller-Orr — Spread Optimal:\nZ = (3/4 x F x sigma^2 / r)^(1/3)\nBatas atas = Batas bawah + 3Z; Target saldo = Batas bawah + Z',
        rules: [
          'Saldo kompensasi (compensating balance) yang dipersyaratkan bank meningkatkan biaya efektif kredit.',
          'Float (float waktu pos, float proses, float ketersediaan) memengaruhi saldo kas yang tersedia vs. saldo buku.',
          'Investasi kelebihan kas: Surat Berharga Negara jangka pendek, deposito, dan reksa dana pasar uang.',
        ],
      },
      {
        id: 'mk-mk-piutang',
        title: 'Manajemen Piutang Usaha',
        content: 'Manajemen piutang mencakup penetapan kebijakan kredit, pemantauan piutang, dan penagihan. Kebijakan kredit yang optimal menyeimbangkan tambahan penjualan dengan biaya kredit macet dan biaya oportunitas investasi pada piutang.',
        steps: [
          'Tetapkan standar kredit: evaluasi kelayakan kredit pelanggan (5C: Character, Capacity, Capital, Collateral, Conditions).',
          'Tetapkan syarat kredit: periode kredit, diskon tunai, dan denda keterlambatan.',
          'Pantau piutang menggunakan aging schedule dan DSO.',
          'Lakukan prosedur penagihan: pengingat, negosiasi, dan penyerahan ke agen penagihan.',
        ],
        formula: 'NPV Perubahan Kebijakan Kredit = (Delta Penjualan x Margin Kontribusi) - (Delta Piutang x Biaya Modal) - (Delta Beban Kredit Macet)',
        tables: [
          {
            caption: 'Analisis Aging Piutang',
            headers: ['Umur Piutang', 'Jumlah (Rp juta)', 'Persentase', 'Estimasi Tidak Tertagih'],
            rows: [
              ['0 - 30 hari', '500', '50%', '1%'],
              ['31 - 60 hari', '250', '25%', '5%'],
              ['61 - 90 hari', '150', '15%', '15%'],
              ['> 90 hari', '100', '10%', '40%'],
            ],
          },
        ],
      },
      {
        id: 'mk-mk-persediaan',
        title: 'Manajemen Persediaan',
        content: 'Manajemen persediaan bertujuan untuk menentukan jumlah dan waktu pemesanan yang meminimalkan total biaya persediaan, yang terdiri dari biaya pemesanan (ordering costs), biaya penyimpanan (carrying/holding costs), dan biaya kekurangan persediaan (stockout costs).',
        formula: 'Economic Order Quantity (EOQ):\nEOQ = SQRT(2 x D x S / H)\ndi mana: D = Kebutuhan per tahun (unit), S = Biaya pemesanan per pesanan, H = Biaya penyimpanan per unit per tahun\n\nReorder Point (ROP) = Lead Time Demand + Safety Stock\nSafety Stock = Z x sigma_d x SQRT(Lead Time)',
        examples: [
          'Perusahaan membutuhkan 10.000 unit/tahun, biaya pemesanan Rp 500.000 per pesanan, biaya penyimpanan Rp 2.000 per unit per tahun. EOQ = SQRT(2 x 10.000 x 500.000 / 2.000) = SQRT(5.000.000.000) = 2.236 unit.',
        ],
        notes: [
          'Metode Just-in-Time (JIT) bertujuan mendekati nol persediaan dengan menerima bahan tepat saat dibutuhkan produksi.',
          'ABC analysis mengklasifikasikan persediaan berdasarkan nilai: A (nilai tinggi, kontrol ketat), B (menengah), C (nilai rendah, kontrol longgar).',
        ],
      },
    ],
  },
];

// =============================================
// MANAJEMEN PERPAJAKAN — EXTRA CHAPTERS
// =============================================
export const manajemenPerpajakanExtraChapters: FormalChapter[] = [
  {
    id: 'mp-pph-badan',
    title: 'PPh Badan: Rekonsiliasi Fiskal dan Perhitungan PPh Terutang',
    description: 'Pajak Penghasilan (PPh) Badan dikenakan atas penghasilan neto wajib pajak badan dalam negeri dan bentuk usaha tetap. Karena standar akuntansi (PSAK) dan ketentuan perpajakan memiliki perbedaan, rekonsiliasi fiskal diperlukan untuk mengubah laba akuntansi menjadi penghasilan kena pajak.',
    sections: [
      {
        id: 'mp-pb-rekonsiliasi',
        title: 'Rekonsiliasi Fiskal: Konsep dan Tujuan',
        content: 'Rekonsiliasi fiskal adalah proses penyesuaian laba akuntansi (laba komersial) menjadi penghasilan neto fiskal sesuai ketentuan UU PPh. Perbedaan antara akuntansi dan fiskal timbul karena perbedaan pengakuan penghasilan, beban, dan penyusutan.',
        tables: [
          {
            caption: 'Jenis Perbedaan Akuntansi vs. Fiskal',
            headers: ['Jenis Perbedaan', 'Pengertian', 'Contoh'],
            rows: [
              ['Beda Tetap (Permanent Difference)', 'Perbedaan yang tidak akan terbalik di masa mendatang', 'Biaya jamuan yang tidak dapat dikurangkan, dividen dari anak perusahaan (DGT)'],
              ['Beda Waktu (Temporary Difference)', 'Perbedaan yang akan terbalik di periode mendatang', 'Perbedaan metode penyusutan akuntansi vs. fiskal, cadangan piutang tak tertagih'],
            ],
          },
        ],
        rules: [
          'Koreksi positif menambah penghasilan kena pajak: biaya tidak dapat dikurangkan atau penghasilan diakui lebih awal secara fiskal.',
          'Koreksi negatif mengurangi penghasilan kena pajak: biaya dapat dikurangkan lebih besar secara fiskal atau penghasilan diakui lebih lambat.',
          'Aset dan liabilitas pajak tangguhan timbul dari beda waktu antara nilai buku akuntansi dan dasar pengenaan pajak.',
        ],
      },
      {
        id: 'mp-pb-koreksi',
        title: 'Koreksi Positif dan Koreksi Negatif',
        content: 'Koreksi fiskal dilakukan terhadap pos-pos penghasilan dan beban yang perlakuan akuntansinya berbeda dengan ketentuan perpajakan berdasarkan UU PPh Pasal 4, 6, 9, dan ketentuan terkait.',
        tables: [
          {
            caption: 'Contoh Koreksi Fiskal',
            headers: ['Pos', 'Akuntansi', 'Fiskal', 'Koreksi'],
            rows: [
              ['Biaya sumbangan (non-deductible)', 'Beban diakui', 'Tidak dapat dikurangkan (Pasal 9 ayat 1)', 'Positif'],
              ['Sanksi pajak/denda administrasi', 'Beban diakui', 'Tidak dapat dikurangkan', 'Positif'],
              ['Biaya entertainment (tanpa daftar nominatif)', 'Beban diakui', 'Tidak dapat dikurangkan', 'Positif'],
              ['Dividen dari badan dalam negeri (kepemilikan >= 25%)', 'Penghasilan diakui', 'Dikecualikan dari objek PPh', 'Negatif'],
              ['Penyusutan fiskal > akuntansi', 'Beban lebih kecil', 'Beban lebih besar (tarif fiskal)', 'Negatif'],
              ['Penyusutan fiskal < akuntansi', 'Beban lebih besar', 'Beban lebih kecil', 'Positif'],
            ],
          },
        ],
        examples: [
          'PT ABC mencatat biaya penyusutan akuntansi Rp 500 juta (garis lurus 5 tahun) dan penyusutan fiskal Rp 400 juta (garis lurus fiskal kelompok I). Koreksi positif sebesar Rp 100 juta.',
          'PT ABC menerima dividen Rp 200 juta dari PT XYZ dimana PT ABC memiliki 30% saham. Dividen ini dikecualikan dari objek PPh sehingga koreksi negatif Rp 200 juta.',
        ],
      },
      {
        id: 'mp-pb-perhitungan',
        title: 'Perhitungan PPh Badan Terutang',
        content: 'Setelah diperoleh penghasilan kena pajak (PKP), PPh Badan dihitung menggunakan tarif yang berlaku. UU PPh mengatur tarif proporsional tunggal untuk wajib pajak badan.',
        steps: [
          'Hitung laba akuntansi (laba komersial) sebelum pajak.',
          'Lakukan koreksi fiskal positif (tambahkan ke laba komersial).',
          'Lakukan koreksi fiskal negatif (kurangkan dari laba komersial).',
          'Kompensasikan kerugian fiskal tahun sebelumnya (jika ada, maksimal 5 tahun).',
          'Hasilkan Penghasilan Kena Pajak (PKP).',
          'Hitung PPh terutang = Tarif x PKP.',
          'Kurangi dengan kredit pajak (PPh Pasal 22, 23, 24, dan 25).',
          'Hasilkan PPh Pasal 29 (kurang bayar) atau PPh Pasal 28A (lebih bayar).',
        ],
        formula: 'PPh Badan Terutang = 22% x Penghasilan Kena Pajak\n(Tarif khusus: 11% untuk perusahaan go public yang memenuhi syarat perdagangan saham min. 40%)\n\nFasilitas Pengurangan Tarif 50% untuk WP Badan dengan peredaran bruto s.d. Rp 4,8 miliar:\nPPh = 11% x PKP dari bagian peredaran bruto s.d. Rp 4,8 miliar',
        tables: [
          {
            caption: 'Format Rekonsiliasi Fiskal Sederhana',
            headers: ['Keterangan', 'Jumlah (Rp)'],
            rows: [
              ['Laba Akuntansi sebelum Pajak', 'xxx'],
              ['Koreksi Fiskal Positif', 'xxx'],
              ['Koreksi Fiskal Negatif', '(xxx)'],
              ['Penghasilan Kena Pajak sebelum kompensasi', 'xxx'],
              ['Kompensasi Kerugian Fiskal', '(xxx)'],
              ['Penghasilan Kena Pajak (PKP)', 'xxx'],
              ['PPh Terutang (22% x PKP)', 'xxx'],
              ['Kredit Pajak (PPh 22 + 23 + 24 + 25)', '(xxx)'],
              ['PPh Pasal 29 (Kurang Bayar) / 28A (Lebih Bayar)', 'xxx'],
            ],
          },
        ],
      },
      {
        id: 'mp-pb-pajak-tangguhan',
        title: 'Pajak Tangguhan (Deferred Tax)',
        content: 'Pajak tangguhan timbul akibat beda waktu antara nilai tercatat aset atau liabilitas dalam laporan keuangan dengan dasar pengenaan pajak (DPP) aset atau liabilitas tersebut. Pajak tangguhan diatur dalam PSAK 46.',
        formula: 'Liabilitas Pajak Tangguhan = Beda Waktu Kena Pajak x Tarif Pajak\nAset Pajak Tangguhan = Beda Waktu Dapat Dikurangkan x Tarif Pajak\n\nBeban Pajak Total = Pajak Kini + Perubahan Pajak Tangguhan',
        rules: [
          'Aset pajak tangguhan diakui hanya sejauh kemungkinan besar laba fiskal akan tersedia sehingga beda waktu dapat dimanfaatkan.',
          'Liabilitas pajak tangguhan diakui untuk semua beda waktu kena pajak, kecuali pengakuan awal goodwill.',
          'Aset pajak tangguhan dari akumulasi rugi fiskal diakui jika kemungkinan besar akan ada laba kena pajak masa depan yang memadai.',
        ],
        examples: [
          'Penyusutan akuntansi Rp 100 juta, penyusutan fiskal Rp 150 juta. Beda waktu dapat dikurangkan Rp 50 juta menghasilkan aset pajak tangguhan Rp 50 juta x 22% = Rp 11 juta.',
        ],
      },
    ],
  },
  {
    id: 'mp-ppn',
    title: 'PPN dan PPnBM: Mekanisme, Faktur Pajak, dan SPT Masa',
    description: 'Pajak Pertambahan Nilai (PPN) adalah pajak tidak langsung yang dikenakan atas penyerahan Barang Kena Pajak (BKP) dan Jasa Kena Pajak (JKP). PPnBM adalah pajak yang dikenakan atas penyerahan BKP yang tergolong mewah.',
    sections: [
      {
        id: 'mp-ppn-mekanisme',
        title: 'Mekanisme Pengkreditan Pajak Masukan',
        content: 'PPN menganut metode kredit (credit method/invoice method). Pengusaha Kena Pajak (PKP) memungut PPN atas penyerahan (Pajak Keluaran/PK) dan dapat mengkreditkan PPN yang dibayar atas perolehan (Pajak Masukan/PM). Selisihnya disetorkan ke kas negara atau dikompensasikan/direstitusikan.',
        formula: 'PPN Kurang Bayar = Pajak Keluaran (PK) - Pajak Masukan (PM) yang dapat dikreditkan\nPPN Lebih Bayar = PM > PK (dapat dikompensasi atau direstitusi)',
        rules: [
          'Tarif PPN umum 11% (berlaku sejak 1 April 2022) dan 12% untuk BKP/JKP tertentu sesuai peta jalan UU HPP.',
          'Tarif 0% berlaku untuk ekspor BKP berwujud, ekspor BKP tidak berwujud, dan ekspor JKP.',
          'Pajak Masukan dapat dikreditkan dalam masa pajak yang sama atau paling lambat 3 masa pajak berikutnya.',
          'PM tidak dapat dikreditkan antara lain untuk perolehan yang tidak berhubungan langsung dengan kegiatan usaha, perolehan untuk kendaraan bermotor sedan dan sejenisnya, dan PM atas BKP/JKP yang mendapat fasilitas dibebaskan.',
        ],
        tables: [
          {
            caption: 'Mekanisme Kredit PPN',
            headers: ['Transaksi', 'Pajak Keluaran', 'Pajak Masukan', 'Posisi PPN'],
            rows: [
              ['PKP A menjual ke PKP B (PK A)', 'Dipungut PKP A', '-', 'PKP A setor PK - PM'],
              ['PKP B membeli dari PKP A (PM B)', '-', 'Dibayar PKP B', 'PKP B kreditkan PM'],
              ['PKP B menjual ke konsumen akhir', 'Dipungut PKP B', '-', 'Beban akhir konsumen'],
            ],
          },
        ],
      },
      {
        id: 'mp-ppn-faktur',
        title: 'Faktur Pajak',
        content: 'Faktur pajak adalah bukti pungutan pajak yang dibuat oleh PKP yang melakukan penyerahan BKP atau JKP. Faktur pajak wajib dibuat pada setiap penyerahan BKP/JKP, penerimaan pembayaran yang terjadi sebelum penyerahan, atau penerimaan pembayaran uang muka.',
        rules: [
          'Faktur pajak harus dibuat paling lambat pada akhir bulan penyerahan, kecuali pembayaran diterima sebelum penyerahan (saat penerimaan pembayaran).',
          'Nomor Seri Faktur Pajak (NSFP) diberikan oleh Direktorat Jenderal Pajak melalui aplikasi e-Faktur.',
          'Faktur pajak yang tidak memenuhi ketentuan (faktur pajak cacat) tidak dapat dikreditkan sebagai PM.',
          'E-Faktur wajib digunakan oleh PKP yang ditetapkan DJP dan mencakup seluruh PKP dengan NPWP tertentu.',
        ],
        tables: [
          {
            caption: 'Keterangan Wajib dalam Faktur Pajak',
            headers: ['No.', 'Keterangan'],
            rows: [
              ['1', 'Nama, alamat, dan NPWP PKP yang menyerahkan'],
              ['2', 'Nama, alamat, dan NPWP pembeli BKP/penerima JKP'],
              ['3', 'Jenis barang atau jasa, jumlah harga jual atau penggantian, dan potongan harga'],
              ['4', 'PPN yang dipungut'],
              ['5', 'PPnBM yang dipungut (jika ada)'],
              ['6', 'Kode, nomor seri, dan tanggal pembuatan faktur pajak'],
              ['7', 'Nama dan tanda tangan yang berhak menandatangani'],
            ],
          },
        ],
        warning: 'Faktur pajak yang dibuat sebelum pengukuhan PKP atau setelah pencabutan pengukuhan dianggap tidak sah dan tidak dapat dikreditkan. PKP yang menerbitkan faktur pajak tidak sah dikenai sanksi.',
      },
      {
        id: 'mp-ppn-spt',
        title: 'SPT Masa PPN dan Pelaporan',
        content: 'SPT Masa PPN (Formulir 1111) disampaikan setiap bulan oleh PKP. Penyampaian dilakukan secara elektronik melalui aplikasi e-SPT PPN atau DJP Online. SPT Masa PPN merangkum seluruh transaksi penyerahan dan perolehan dalam satu masa pajak.',
        steps: [
          'Kumpulkan dan rekap seluruh faktur pajak keluaran (penyerahan BKP/JKP) dalam masa pajak.',
          'Kumpulkan dan rekap seluruh faktur pajak masukan (perolehan) yang dapat dikreditkan.',
          'Hitung PPN kurang bayar atau lebih bayar.',
          'Jika kurang bayar: setor PPN menggunakan Surat Setoran Pajak Elektronik (e-SSP/SSE) paling lambat tanggal 15 bulan berikutnya.',
          'Sampaikan SPT Masa PPN paling lambat tanggal 20 bulan berikutnya melalui DJP Online atau e-SPT.',
        ],
        tables: [
          {
            caption: 'Batas Waktu Kewajiban PPN',
            headers: ['Kewajiban', 'Batas Waktu'],
            rows: [
              ['Pembuatan Faktur Pajak', 'Paling lambat akhir bulan penyerahan'],
              ['Penyetoran PPN', 'Paling lambat tanggal 15 bulan berikutnya'],
              ['Pelaporan SPT Masa PPN', 'Paling lambat tanggal 20 bulan berikutnya'],
            ],
          },
        ],
        notes: [
          'PKP yang memilih menggunakan Nilai Lain sebagai Dasar Pengenaan Pajak (DPP Nilai Lain) menggunakan formulir SPT yang berbeda.',
          'Restitusi PPN dapat diajukan melalui permohonan restitusi pada akhir tahun buku atau setiap masa pajak bagi eksportir dan PKP tertentu.',
        ],
      },
    ],
  },
];

// =============================================
// AUDIT DAN ASURANS — EXTRA CHAPTERS
// =============================================
export const auditAsuransExtraChapters: FormalChapter[] = [
  {
    id: 'aa-bukti-audit',
    title: 'Bukti Audit: Jenis, Kecukupan, dan Ketepatan',
    description: 'Bukti audit adalah informasi yang digunakan auditor dalam menarik kesimpulan sebagai dasar opini auditor. SA 500 mengatur kewajiban auditor dalam merancang dan melaksanakan prosedur audit untuk memperoleh bukti audit yang cukup dan tepat.',
    sections: [
      {
        id: 'aa-ba-konsep',
        title: 'Konsep Kecukupan dan Ketepatan Bukti Audit',
        content: 'Kecukupan (sufficiency) merujuk pada ukuran kuantitas bukti audit — semakin tinggi risiko salah saji, semakin banyak bukti yang dibutuhkan. Ketepatan (appropriateness) merujuk pada kualitas bukti, yang mencakup relevansi dan keandalan bukti dalam mendukung kesimpulan auditor.',
        tables: [
          {
            caption: 'Faktor yang Memengaruhi Keandalan Bukti',
            headers: ['Faktor', 'Keandalan Lebih Tinggi', 'Keandalan Lebih Rendah'],
            rows: [
              ['Sumber', 'Pihak eksternal yang independen', 'Pihak internal entitas'],
              ['Sifat pengendalian internal', 'Pengendalian internal efektif', 'Pengendalian internal lemah'],
              ['Cara memperoleh', 'Diperoleh langsung oleh auditor', 'Diperoleh dari manajemen'],
              ['Bentuk', 'Dokumentasi (tertulis)', 'Representasi lisan'],
              ['Originalitas', 'Dokumen asli', 'Fotokopi atau faksimili'],
            ],
          },
        ],
        rules: [
          'Bukti audit yang cukup dan tepat berkaitan satu sama lain: auditor harus mempertimbangkan keduanya secara bersama.',
          'Jika bukti dari satu sumber tidak konsisten dengan bukti dari sumber lain, auditor harus menentukan prosedur tambahan.',
          'Representasi manajemen bukan pengganti bukti audit yang cukup dan tepat.',
        ],
      },
      {
        id: 'aa-ba-jenis',
        title: 'Jenis-Jenis Bukti Audit',
        content: 'Auditor memperoleh bukti audit melalui berbagai cara. Jenis bukti audit dapat diklasifikasikan berdasarkan prosedur yang digunakan untuk mendapatkannya.',
        tables: [
          {
            caption: 'Jenis Bukti dan Prosedur Audit',
            headers: ['Jenis Bukti', 'Contoh', 'Kekuatan Relatif'],
            rows: [
              ['Inspeksi dokumen internal', 'Invoice, kontrak, jurnal', 'Sedang (tergantung pengendalian)'],
              ['Inspeksi dokumen eksternal', 'Laporan bank, konfirmasi pihak ketiga', 'Tinggi'],
              ['Observasi', 'Pengamatan penghitungan persediaan fisik', 'Sedang (hanya mencerminkan satu titik waktu)'],
              ['Konfirmasi', 'Konfirmasi saldo piutang kepada debitur', 'Tinggi (jika respons langsung dari pihak ketiga)'],
              ['Prosedur analitis', 'Perbandingan rasio, trend analysis', 'Sedang (kuat jika data andal)'],
              ['Kalkulasi ulang', 'Penghitungan ulang amortisasi, depresiasi', 'Tinggi (untuk akurasi matematis)'],
              ['Reperformance', 'Melaksanakan ulang pengendalian internal', 'Tinggi'],
              ['Pertanyaan (inquiry)', 'Wawancara manajemen dan karyawan', 'Rendah (perlu dikuatkan bukti lain)'],
            ],
          },
        ],
      },
      {
        id: 'aa-ba-substantif-pengendalian',
        title: 'Prosedur Substantif vs. Pengujian Pengendalian',
        content: 'Auditor merancang dua kategori utama respons terhadap risiko yang dinilai: pengujian pengendalian (tests of controls) dan prosedur substantif. Pemilihan dan kombinasinya bergantung pada strategi audit yang diadopsi.',
        tables: [
          {
            caption: 'Perbandingan Pengujian Pengendalian dan Prosedur Substantif',
            headers: ['Dimensi', 'Pengujian Pengendalian', 'Prosedur Substantif'],
            rows: [
              ['Tujuan', 'Menguji efektivitas operasional pengendalian internal', 'Mendeteksi salah saji material dalam asersi laporan keuangan'],
              ['Objek', 'Aktivitas pengendalian, kebijakan, prosedur', 'Saldo akun, transaksi, dan pengungkapan'],
              ['Kapan digunakan', 'Ketika auditor berencana mengandalkan pengendalian untuk mengurangi prosedur substantif', 'Selalu diperlukan; dapat dikurangi jika pengendalian efektif'],
              ['Contoh prosedur', 'Inspeksi persetujuan transaksi, reperformance rekonsiliasi', 'Konfirmasi piutang, uji rincian saldo, prosedur analitis substantif'],
            ],
          },
        ],
        rules: [
          'Prosedur substantif wajib dilakukan untuk seluruh asersi yang material, meskipun pengendalian dinilai efektif.',
          'Pendekatan berbasis pengendalian (controls reliance approach) efektif untuk entitas dengan pengendalian internal yang kuat.',
          'Pendekatan substantif murni (substantive approach) digunakan ketika pengendalian dinilai tidak efektif atau tidak relevan.',
        ],
        examples: [
          'Untuk asersi keberadaan piutang: pengujian pengendalian mencakup pengujian otorisasi penjualan kredit; prosedur substantif mencakup konfirmasi langsung kepada debitur.',
        ],
      },
      {
        id: 'aa-ba-asersi',
        title: 'Asersi Manajemen dalam Laporan Keuangan',
        content: 'Asersi adalah pernyataan manajemen yang tercermin dalam laporan keuangan. Auditor merancang prosedur untuk menguji asersi-asersi tersebut.',
        tables: [
          {
            caption: 'Asersi Audit (SA 315)',
            headers: ['Kategori Asersi', 'Asersi', 'Definisi'],
            rows: [
              ['Transaksi & Peristiwa', 'Keterjadian', 'Transaksi benar-benar terjadi dan berkaitan dengan entitas'],
              ['Transaksi & Peristiwa', 'Kelengkapan', 'Seluruh transaksi telah dicatat'],
              ['Transaksi & Peristiwa', 'Akurasi', 'Transaksi dicatat pada jumlah yang tepat'],
              ['Transaksi & Peristiwa', 'Pisah batas', 'Transaksi dicatat pada periode akuntansi yang tepat'],
              ['Saldo Akun', 'Keberadaan', 'Aset, liabilitas, dan ekuitas benar-benar ada'],
              ['Saldo Akun', 'Hak dan Kewajiban', 'Entitas memiliki hak atas aset atau memiliki kewajiban atas liabilitas'],
              ['Saldo Akun', 'Penilaian dan Alokasi', 'Saldo akun disajikan pada jumlah yang tepat'],
              ['Penyajian & Pengungkapan', 'Keterjadian dan Hak', 'Peristiwa yang diungkapkan telah terjadi'],
              ['Penyajian & Pengungkapan', 'Kelengkapan', 'Seluruh pengungkapan yang diperlukan telah disertakan'],
              ['Penyajian & Pengungkapan', 'Klasifikasi dan Keterpahaman', 'Informasi keuangan disajikan dan dijelaskan secara tepat'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'aa-laporan-auditor',
    title: 'Laporan Auditor Independen: Opini dan Elemen Kunci',
    description: 'Laporan auditor independen adalah komunikasi formal auditor kepada pengguna laporan keuangan mengenai hasil audit. SA 700, 701, 705, dan 706 mengatur bentuk dan isi laporan auditor, termasuk jenis opini, paragraf penekanan, dan Hal Audit Utama (Key Audit Matters/KAM).',
    sections: [
      {
        id: 'aa-la-jenis-opini',
        title: 'Jenis Opini Auditor',
        content: 'Auditor memberikan opini berdasarkan hasil evaluasi atas bukti audit yang diperoleh. Terdapat empat jenis opini yang dapat diberikan, bergantung pada sifat dan materialitas salah saji yang ditemukan atau pembatasan ruang lingkup audit.',
        tables: [
          {
            caption: 'Jenis Opini Audit dan Kondisi Penerbitannya',
            headers: ['Jenis Opini', 'Kode Populer', 'Kondisi Penerbitan'],
            rows: [
              ['Tanpa Modifikasi / Wajar Tanpa Pengecualian', 'WTP / Unmodified', 'Laporan keuangan disajikan secara wajar dalam semua hal yang material sesuai kerangka pelaporan keuangan yang berlaku'],
              ['Wajar Dengan Pengecualian', 'WDP / Qualified', 'Ada salah saji material TETAPI tidak pervasif, atau ada pembatasan ruang lingkup yang material tetapi tidak pervasif'],
              ['Tidak Wajar', 'TW / Adverse', 'Ada salah saji material DAN pervasif (memengaruhi laporan secara keseluruhan)'],
              ['Menolak Memberikan Opini', 'Disclaimer', 'Ada pembatasan ruang lingkup yang material DAN pervasif sehingga auditor tidak dapat memperoleh bukti yang cukup dan tepat'],
            ],
          },
        ],
        rules: [
          'Kata "kecuali" digunakan dalam opini WDP: "...kecuali untuk dampak hal yang dijelaskan dalam paragraf Dasar untuk Opini dengan Pengecualian..."',
          'Opini tidak wajar menggunakan frasa "tidak menyajikan secara wajar..."',
          'Disclaimer menggunakan frasa "karena signifikansi hal yang dijelaskan... kami tidak dapat menyatakan opini..."',
          'Pervasivitas dinilai berdasarkan apakah dampak salah saji menyebar ke banyak elemen laporan keuangan dan fundamental bagi pemahaman pengguna.',
        ],
        diagram: 'Apakah LK mengandung salah saji material?\n  Tidak -> WTP\n  Ya -> Apakah salah saji pervasif?\n    Tidak -> WDP\n    Ya -> TW\n\nApakah ada pembatasan ruang lingkup?\n  Ya -> Apakah pervasif?\n    Tidak -> WDP\n    Ya -> Disclaimer',
      },
      {
        id: 'aa-la-paragraf-penekanan',
        title: 'Paragraf Penekanan dan Paragraf Hal Lain',
        content: 'Paragraf penekanan (Emphasis of Matter/EOM) digunakan ketika auditor ingin mengarahkan perhatian pengguna pada suatu hal yang disajikan atau diungkapkan dalam laporan keuangan yang fundamental penting. Paragraf Hal Lain (Other Matter/OM) mengacu pada hal yang relevan bagi pengguna tetapi tidak disajikan dalam laporan keuangan.',
        rules: [
          'EOM tidak memodifikasi opini auditor — opini tetap WTP.',
          'EOM ditempatkan setelah paragraf opini dengan judul "Penekanan Suatu Hal" atau "Emphasis of Matter".',
          'Contoh situasi EOM: ketidakpastian material terkait kelangsungan usaha (going concern) yang memadai diungkapkan, perubahan kebijakan akuntansi, atau restatement laporan keuangan.',
          'OM ditempatkan setelah paragraf opini dan EOM (jika ada), dengan judul "Hal Lain" atau "Other Matter".',
        ],
        examples: [
          'Tanpa memodifikasi opini kami, kami mengarahkan perhatian kepada Catatan X atas laporan keuangan yang mengungkapkan bahwa Perusahaan mengalami kerugian bersih sebesar Rp xxx pada tahun berjalan dan pada tanggal pelaporan, liabilitas lancar Perusahaan melebihi aset lancarnya sebesar Rp xxx. Kondisi ini mengindikasikan adanya ketidakpastian material yang dapat menimbulkan keraguan signifikan atas kemampuan Perusahaan untuk mempertahankan kelangsungan usahanya.',
        ],
      },
      {
        id: 'aa-la-kam',
        title: 'Hal Audit Utama (Key Audit Matters / KAM)',
        content: 'KAM adalah hal-hal yang menurut pertimbangan profesional auditor merupakan hal yang paling signifikan dalam audit atas laporan keuangan periode kini. KAM dipilih dari hal-hal yang dikomunikasikan kepada pihak yang bertanggung jawab atas tata kelola. Pelaporan KAM diwajibkan untuk entitas listed (SA 701).',
        steps: [
          'Identifikasi hal-hal yang dikomunikasikan kepada those charged with governance (TCWG).',
          'Dari hal-hal tersebut, tentukan mana yang memerlukan perhatian signifikan dalam audit (area risiko tinggi, pertimbangan kompleks, ketidakpastian estimasi signifikan).',
          'Pilih KAM yang paling signifikan.',
          'Untuk setiap KAM, jelaskan: mengapa hal tersebut merupakan KAM, bagaimana hal tersebut ditangani dalam audit, dan referensi ke pengungkapan terkait dalam laporan keuangan.',
        ],
        tables: [
          {
            caption: 'Kriteria Pemilihan KAM',
            headers: ['Kriteria', 'Penjelasan'],
            rows: [
              ['Area risiko salah saji material tinggi', 'Termasuk risiko signifikan yang telah diidentifikasi'],
              ['Pertimbangan auditor signifikan', 'Ketika auditor menerapkan pertimbangan kompleks atau subyektif'],
              ['Dampak kejadian atau transaksi penting', 'Transaksi yang terjadi selama periode dan berdampak material pada audit'],
            ],
          },
        ],
        notes: [
          'KAM tidak menggantikan pengungkapan dalam laporan keuangan — KAM mengacu pada pengungkapan tersebut.',
          'KAM tidak digunakan untuk mengungkapkan informasi yang dilarang oleh hukum/regulasi atau yang secara materil merugikan entitas.',
          'Jumlah KAM tidak ditetapkan — bergantung pada signifikansi setiap hal.',
        ],
      },
      {
        id: 'aa-la-struktur-laporan',
        title: 'Struktur Laporan Auditor Independen',
        content: 'Laporan auditor independen memiliki struktur yang diatur dalam SA 700 (Revisi). Urutan elemen dalam laporan auditor untuk entitas listed berbeda dari entitas non-listed terutama pada penempatan seksi tanggung jawab auditor dan KAM.',
        tables: [
          {
            caption: 'Elemen Wajib Laporan Auditor Independen',
            headers: ['No.', 'Elemen', 'Keterangan'],
            rows: [
              ['1', 'Judul', '"Laporan Auditor Independen" — mencakup kata "independen"'],
              ['2', 'Pihak yang dituju (Addressee)', 'Umumnya ditujukan kepada pemegang saham atau TCWG'],
              ['3', 'Paragraf Pendahuluan', 'Identifikasi laporan keuangan yang diaudit dan entitas'],
              ['4', 'Seksi Opini Audit', 'Pernyataan opini auditor'],
              ['5', 'Seksi Dasar untuk Opini', 'Pernyataan kepatuhan terhadap SPAP/SA, independensi, dan memadainya bukti'],
              ['6', 'Seksi Going Concern (jika relevan)', 'Pelaporan going concern sesuai SA 570'],
              ['7', 'Seksi KAM (entitas listed)', 'Hal-hal paling signifikan dalam audit (SA 701)'],
              ['8', 'Tanggung Jawab Manajemen', 'Atas penyusunan dan penyajian laporan keuangan'],
              ['9', 'Tanggung Jawab Auditor', 'Atas opini dan pelaksanaan audit sesuai SA'],
              ['10', 'Tanda tangan, tanggal, dan alamat', 'Nama KAP, nama rekan penandatangan, nomor izin, tanggal laporan'],
            ],
          },
        ],
      },
    ],
  },
];

// =============================================
// AKUNTANSI MANAJEMEN — EXTRA CHAPTERS
// =============================================
export const akuntansiManajemenExtraChapters: FormalChapter[] = [
  {
    id: 'am-cvp',
    title: 'Analisis Biaya-Volume-Laba (CVP)',
    description: 'Analisis CVP (Cost-Volume-Profit) mempelajari hubungan antara biaya, volume, dan laba untuk membantu manajemen dalam perencanaan, pengendalian, dan pengambilan keputusan. Analisis ini digunakan untuk menentukan titik impas (break-even point), target laba, margin keamanan, dan leverage operasi.',
    sections: [
      {
        id: 'am-cvp-konsep',
        title: 'Konsep Dasar dan Asumsi CVP',
        content: 'Analisis CVP membedakan biaya tetap dan biaya variabel untuk memahami bagaimana perubahan volume penjualan memengaruhi laba. Margin kontribusi adalah selisih antara pendapatan penjualan dan biaya variabel, yang digunakan untuk menutup biaya tetap dan menghasilkan laba.',
        formula: 'Margin Kontribusi (MK) = Pendapatan - Biaya Variabel Total\nRasio MK (CM Ratio) = MK / Pendapatan = (Harga - Biaya Variabel per Unit) / Harga\nMK per Unit = Harga Jual per Unit - Biaya Variabel per Unit',
        rules: [
          'Asumsi CVP: biaya dapat dipisahkan menjadi tetap dan variabel; biaya variabel berubah proporsional dengan volume; harga jual tetap konstan; dalam perusahaan multi-produk, bauran penjualan diasumsikan tetap.',
          'Biaya tetap tidak berubah dalam rentang relevan (relevant range) meskipun volume berubah.',
          'Biaya variabel per unit diasumsikan konstan sepanjang rentang relevan.',
        ],
        tables: [
          {
            caption: 'Format Laporan Laba Rugi Kontribusi',
            headers: ['Keterangan', 'Per Unit', 'Total'],
            rows: [
              ['Penjualan', 'Rp xxx', 'Rp xxx'],
              ['Biaya Variabel', '(Rp xxx)', '(Rp xxx)'],
              ['Margin Kontribusi', 'Rp xxx', 'Rp xxx'],
              ['Biaya Tetap', '-', '(Rp xxx)'],
              ['Laba Operasi', '-', 'Rp xxx'],
            ],
          },
        ],
      },
      {
        id: 'am-cvp-bep',
        title: 'Titik Impas (Break-Even Point)',
        content: 'Titik impas adalah titik di mana total pendapatan sama dengan total biaya (laba = nol). Pada titik impas, margin kontribusi total sama dengan biaya tetap total.',
        formula: 'BEP (unit) = Biaya Tetap Total / MK per Unit\nBEP (rupiah) = Biaya Tetap Total / Rasio MK\n\nTarget Laba:\nUnit untuk Target Laba = (Biaya Tetap + Target Laba Operasi) / MK per Unit\nPenjualan untuk Target Laba Setelah Pajak = (Biaya Tetap + [Target Laba Bersih / (1 - Tarif Pajak)]) / Rasio MK',
        examples: [
          'Harga jual Rp 100.000/unit, biaya variabel Rp 60.000/unit, biaya tetap Rp 8.000.000/bulan. MK per unit = Rp 40.000. BEP unit = Rp 8.000.000 / Rp 40.000 = 200 unit. BEP rupiah = Rp 8.000.000 / 40% = Rp 20.000.000.',
          'Jika manajemen menginginkan laba Rp 4.000.000, unit yang harus dijual = (Rp 8.000.000 + Rp 4.000.000) / Rp 40.000 = 300 unit.',
        ],
        tables: [
          {
            caption: 'Perbandingan BEP Unit dan Rupiah',
            headers: ['Metode', 'Formula', 'Kegunaan'],
            rows: [
              ['BEP Unit', 'Biaya Tetap / MK per Unit', 'Menentukan jumlah unit minimum yang harus dijual'],
              ['BEP Rupiah', 'Biaya Tetap / Rasio MK', 'Menentukan nilai penjualan minimum; berguna untuk multi-produk'],
            ],
          },
        ],
      },
      {
        id: 'am-cvp-mos',
        title: 'Margin of Safety dan Operating Leverage',
        content: 'Margin of safety (MOS) mengukur seberapa jauh penjualan aktual berada di atas titik impas — penjualan dapat turun sebesar MOS sebelum perusahaan merugi. Operating leverage mengukur seberapa sensitif laba operasi terhadap perubahan penjualan.',
        formula: 'Margin of Safety (MOS) dalam unit = Penjualan Aktual - BEP Unit\nMOS dalam rupiah = Penjualan Aktual - BEP Rupiah\nRasio MOS = MOS / Penjualan Aktual\n\nDegree of Operating Leverage (DOL) = Margin Kontribusi / Laba Operasi\nPerubahan % Laba = DOL x Perubahan % Penjualan',
        examples: [
          'Penjualan aktual 300 unit, BEP 200 unit. MOS = 100 unit. Rasio MOS = 100/300 = 33,3%. Jika penjualan turun hingga 33,3%, laba menjadi nol.',
          'DOL = 3 berarti setiap kenaikan penjualan 10%, laba operasi naik 30%. Semakin tinggi DOL, semakin berisiko namun semakin besar potensi keuntungan dari pertumbuhan penjualan.',
        ],
        notes: [
          'DOL tinggi menunjukkan proporsi biaya tetap yang besar relatif terhadap biaya variabel.',
          'Perusahaan dengan DOL tinggi cocok beroperasi di lingkungan bisnis dengan permintaan stabil dan pertumbuhan tinggi.',
        ],
      },
      {
        id: 'am-cvp-multi-produk',
        title: 'CVP untuk Multi-Produk',
        content: 'Ketika perusahaan menjual lebih dari satu produk, analisis CVP menggunakan konsep bauran penjualan (sales mix) yang diasumsikan tetap. BEP dihitung menggunakan rasio CM rata-rata tertimbang.',
        formula: 'Rasio CM Tertimbang = Jumlah (Bobot Produk x Rasio CM Produk)\nBEP Rupiah Total = Biaya Tetap / Rasio CM Tertimbang\nBEP per Produk = BEP Total x Bobot Masing-Masing Produk',
        examples: [
          'Produk A (60% penjualan, CM ratio 40%) dan Produk B (40% penjualan, CM ratio 25%). Rasio CM tertimbang = (0,6 x 40%) + (0,4 x 25%) = 24% + 10% = 34%. Jika biaya tetap Rp 17.000.000, BEP total = Rp 17.000.000 / 34% = Rp 50.000.000.',
        ],
      },
    ],
  },
  {
    id: 'am-penetapan-harga',
    title: 'Penetapan Harga: Strategi dan Metode',
    description: 'Penetapan harga (pricing) adalah keputusan strategis yang memengaruhi permintaan, pendapatan, dan profitabilitas perusahaan. Terdapat tiga pendekatan utama: cost-plus pricing (berbasis biaya), target costing (berbasis pasar), dan value-based pricing (berbasis nilai pelanggan).',
    sections: [
      {
        id: 'am-ph-cost-plus',
        title: 'Cost-Plus Pricing',
        content: 'Cost-plus pricing menentukan harga jual dengan menambahkan markup tertentu di atas biaya. Metode ini sederhana dan memastikan pemulihan biaya, namun mengabaikan permintaan pasar dan harga pesaing.',
        formula: 'Harga Jual = Biaya + (Markup % x Biaya)\n\nMarkup atas Biaya Variabel:\nMarkup % atas BV = (Biaya Tetap Total + Target Laba) / (Biaya Variabel Total)\nHarga = Biaya Variabel per Unit x (1 + Markup %)\n\nMarkup atas Biaya Total (Full Cost):\nHarga = Biaya Total per Unit x (1 + Markup %)\nMarkup % atas Biaya Total = Target Laba / Total Biaya',
        tables: [
          {
            caption: 'Perbandingan Dasar Penetapan Markup',
            headers: ['Dasar Markup', 'Kelebihan', 'Kelemahan'],
            rows: [
              ['Biaya variabel', 'Mudah menganalisis kontribusi; fleksibel untuk keputusan jangka pendek', 'Jika markup terlalu rendah, biaya tetap tidak tertutupi'],
              ['Biaya produksi (absorption cost)', 'Sesuai prinsip akuntansi; biaya produksi terpulihkan', 'Mengabaikan biaya non-produksi'],
              ['Biaya total (full cost)', 'Seluruh biaya terpulihkan; mudah dihitung', 'Mengabaikan permintaan; tidak mempertimbangkan elastisitas harga'],
            ],
          },
        ],
        examples: [
          'Biaya total per unit Rp 80.000, target laba 25% atas biaya. Harga jual = Rp 80.000 x 1,25 = Rp 100.000.',
          'Biaya variabel per unit Rp 60.000, biaya tetap total Rp 8.000.000, target laba Rp 4.000.000, rencana produksi 1.000 unit. Markup atas BV = (Rp 8.000.000 + Rp 4.000.000) / (Rp 60.000 x 1.000) = 20%. Harga = Rp 60.000 x 1,20 = Rp 72.000.',
        ],
      },
      {
        id: 'am-ph-target-costing',
        title: 'Target Costing',
        content: 'Target costing adalah pendekatan penetapan harga berbasis pasar di mana harga jual ditentukan dari kondisi pasar terlebih dahulu, kemudian target biaya diturunkan dari harga tersebut dikurangi target laba. Target costing mendorong efisiensi biaya sejak tahap desain produk.',
        formula: 'Target Biaya = Harga Pasar yang Dapat Diterima - Target Laba\nTarget Laba = Harga x Target Return on Sales (ROS)\n\nSelisih Biaya = Biaya yang Diproyeksikan - Target Biaya\n(Jika selisih positif: perlu rekayasa nilai/value engineering untuk menurunkan biaya)',
        steps: [
          'Tentukan harga pasar target berdasarkan riset pasar dan analisis persaingan.',
          'Tentukan target margin laba yang diinginkan manajemen.',
          'Hitung target biaya: Target Biaya = Harga - Target Laba.',
          'Bandingkan target biaya dengan biaya yang diproyeksikan.',
          'Jika biaya proyeksi melebihi target, lakukan value engineering untuk mengurangi biaya tanpa mengorbankan nilai bagi pelanggan.',
          'Jika target biaya tidak dapat dicapai, pertimbangkan ulang produk atau harga.',
        ],
        examples: [
          'Perusahaan merancang produk baru. Riset pasar menunjukkan harga yang dapat diterima Rp 150.000/unit. Target laba 20% dari penjualan = Rp 30.000/unit. Target biaya = Rp 150.000 - Rp 30.000 = Rp 120.000/unit. Jika desain awal memproyeksikan biaya Rp 135.000/unit, tim harus menemukan penghematan biaya Rp 15.000/unit melalui value engineering.',
        ],
        notes: [
          'Target costing banyak digunakan di industri manufaktur Jepang (Toyota, Sony) dan industri dengan persaingan harga ketat.',
          'Kaizen costing melengkapi target costing dengan perbaikan biaya berkelanjutan pada fase produksi.',
        ],
      },
      {
        id: 'am-ph-value-based',
        title: 'Value-Based Pricing',
        content: 'Value-based pricing menetapkan harga berdasarkan nilai yang dipersepsikan pelanggan (perceived value), bukan biaya produksi. Pendekatan ini memaksimalkan kesediaan pelanggan untuk membayar (willingness to pay/WTP) dengan fokus pada manfaat yang diterima pelanggan.',
        rules: [
          'Harga ditetapkan berdasarkan nilai ekonomi bagi pelanggan, bukan biaya produksi perusahaan.',
          'Memerlukan pemahaman mendalam tentang segmen pelanggan dan manfaat yang mereka hargai.',
          'Cocok untuk produk dengan diferensiasi tinggi, merek kuat, atau inovasi unik.',
          'Tantangan utama: mengukur dan mengkomunikasikan nilai kepada pelanggan.',
        ],
        tables: [
          {
            caption: 'Perbandingan Tiga Pendekatan Penetapan Harga',
            headers: ['Dimensi', 'Cost-Plus', 'Target Costing', 'Value-Based'],
            rows: [
              ['Titik awal', 'Biaya', 'Harga pasar', 'Nilai bagi pelanggan'],
              ['Orientasi', 'Internal (biaya)', 'Pasar (persaingan)', 'Pelanggan (WTP)'],
              ['Risiko utama', 'Harga tidak kompetitif atau terlalu rendah', 'Biaya tidak dapat ditekan ke target', 'Salah mengestimasi WTP pelanggan'],
              ['Cocok untuk', 'Industri stabil, produk komoditas', 'Industri kompetitif, produk terstandar', 'Produk inovatif, merek premium, jasa profesional'],
              ['Pengaruh terhadap keputusan biaya', 'Biaya menentukan harga', 'Harga menentukan target biaya', 'Nilai menentukan harga; biaya harus di bawah nilai'],
            ],
          },
        ],
        examples: [
          'Perangkat lunak akuntansi menghemat 200 jam kerja per tahun bagi klien. Jika nilai waktu klien Rp 150.000/jam, nilai ekonomi = Rp 30.000.000/tahun. Value-based pricing akan menetapkan harga berlangganan di bawah Rp 30.000.000 namun jauh di atas biaya produksi, mengambil sebagian dari nilai yang diciptakan.',
        ],
      },
      {
        id: 'am-ph-keputusan-harga',
        title: 'Keputusan Harga Khusus: Pesanan Khusus dan Harga Transfer',
        content: 'Selain pendekatan strategis, manajemen menghadapi keputusan penetapan harga taktis seperti menerima atau menolak pesanan khusus di bawah harga normal, dan menetapkan harga transfer antar divisi dalam perusahaan.',
        formula: 'Harga Minimum Pesanan Khusus = Biaya Variabel per Unit + Biaya Kesempatan per Unit\n(Biaya Kesempatan = nol jika ada kapasitas menganggur)\n\nHarga Transfer:\nMetode Biaya: Harga Transfer = Biaya Variabel + Biaya Tetap yang Dialokasikan\nMetode Pasar: Harga Transfer = Harga Pasar Eksternal\nMetode Negosiasi: Harga Transfer dinegosiasikan antara divisi penjual dan pembeli\n\nRentang Harga Transfer:\nMinimum (dari sudut divisi penjual) = Biaya Variabel + Biaya Kesempatan\nMaksimum (dari sudut divisi pembeli) = Harga Pasar Eksternal',
        rules: [
          'Pesanan khusus menguntungkan jika harga pesanan melebihi biaya variabel dan tidak mengorbankan penjualan reguler (ada kapasitas menganggur).',
          'Harga transfer berbasis biaya variabel memotivasi divisi penjual untuk mentransfer, namun tidak mencerminkan laba divisi penjual.',
          'Harga transfer berbasis harga pasar optimal ketika pasar eksternal kompetitif dan efisien.',
          'Harga transfer negosiasi fleksibel namun dapat menyebabkan konflik antar divisi.',
        ],
        examples: [
          'Divisi A memiliki kapasitas 10.000 unit, saat ini memproduksi 8.000 unit (kapasitas menganggur 2.000 unit). Biaya variabel Rp 50.000/unit. Pesanan khusus 1.500 unit dengan harga Rp 60.000/unit. Karena ada kapasitas menganggur dan harga > biaya variabel (Rp 60.000 > Rp 50.000), pesanan diterima dengan kontribusi tambahan 1.500 x Rp 10.000 = Rp 15.000.000.',
        ],
      },
    ],
  },
];
