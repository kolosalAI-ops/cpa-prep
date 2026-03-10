export const studiKasusTerpaduChapters = [
  {
    id: 'kerangka-analisis-kasus',
    title: 'Kerangka Analisis Kasus Terpadu',
    description: 'Pendekatan sistematis untuk menganalisis kasus bisnis terpadu: identifikasi isu, analisis data kuantitatif-kualitatif, formulasi solusi, dan penulisan laporan profesional.',
    sections: [
      {
        id: 'pendekatan-sistematis',
        title: 'Pendekatan Sistematis Analisis Kasus',
        content: 'Analisis kasus terpadu memerlukan pendekatan sistematis untuk memecah situasi bisnis kompleks menjadi komponen-komponen yang dapat dikelola. Pendekatan ini mengintegrasikan berbagai disiplin ilmu (akuntansi, keuangan, strategi, operasi, perpajakan) untuk mengembangkan pemahaman menyeluruh. Dalam ujian CA Indonesia, kasus terpadu menguji kemampuan kandidat menghubungkan teori lintas mata ujian dan memberikan rekomendasi yang didukung data.',
        steps: [
          'Baca kasus secara menyeluruh, identifikasi fakta kunci, angka, dan kronologi',
          'Identifikasi stakeholder dan kepentingan masing-masing (pemegang saham, manajemen, karyawan, kreditur, regulator)',
          'Analisis lingkungan eksternal (tren industri, persaingan, regulasi, ekonomi makro)',
          'Analisis lingkungan internal (posisi keuangan, efisiensi operasional, struktur organisasi)',
          'Identifikasi isu utama berdasarkan analisis (financial distress, inefisiensi, misalignment strategi, governance)',
          'Kembangkan alternatif solusi dengan analisis pro-kontra untuk setiap alternatif',
          'Rekomendasikan solusi terbaik dengan justifikasi data dan strategic fit',
          'Susun rencana implementasi dengan timeline, sumber daya, risiko, dan KPI'
        ],
        tables: [
          {
            headers: ['Kategori Isu', 'Contoh Isu', 'Alat Analisis'],
            rows: [
              ['Keuangan', 'Likuiditas rendah, profitabilitas menurun, struktur modal tidak optimal', 'Rasio keuangan, DuPont, analisis tren'],
              ['Operasional', 'Inefisiensi produksi, kualitas rendah, rantai pasok terganggu', 'Value chain, capacity analysis, six sigma'],
              ['Strategis', 'Kehilangan pangsa pasar, tidak ada keunggulan kompetitif', 'SWOT, Porter Five Forces, BCG Matrix'],
              ['Tata Kelola', 'Pengendalian internal lemah, konflik kepentingan', 'COSO, Three Lines Model'],
              ['Perpajakan', 'Tax exposure, transfer pricing risk, kepatuhan pajak', 'Tax planning analysis, arm\'s length principle'],
              ['Audit', 'Risiko salah saji material, going concern', 'Audit risk model, materialitas']
            ],
            caption: 'Klasifikasi Isu dan Alat Analisis yang Relevan'
          }
        ],
        notes: [
          'Dalam ujian, alokasikan 10-15% waktu untuk membaca dan memahami kasus sebelum menjawab',
          'Gunakan kerangka terstruktur agar jawaban sistematis dan tidak melompat-lompat',
          'Selalu dukung rekomendasi dengan data dan perhitungan dari kasus'
        ]
      },
      {
        id: 'identifikasi-isu-prioritas',
        title: 'Identifikasi Isu & Prioritisasi',
        content: 'Identifikasi isu yang akurat merupakan langkah kritis dalam analisis kasus. Isu sering lebih kompleks dari masalah yang tampak di permukaan dan memerlukan investigasi mendalam. Bedakan antara gejala (symptom) dan akar masalah (root cause). Teknik fishbone diagram dan 5 Whys membantu menemukan penyebab mendasar.',
        tables: [
          {
            headers: ['Teknik', 'Deskripsi', 'Kapan Digunakan'],
            rows: [
              ['5 Whys', 'Tanyakan "mengapa" berulang kali hingga akar masalah', 'Masalah operasional spesifik'],
              ['Fishbone/Ishikawa', 'Diagram sebab-akibat: Man, Machine, Method, Material, Measurement, Mother Nature', 'Masalah kualitas atau proses'],
              ['Pareto Analysis', '80/20 rule: fokus pada 20% penyebab yang berdampak 80%', 'Banyak faktor, perlu prioritisasi'],
              ['Root Cause Analysis', 'Investigasi sistematis mencari penyebab fundamental', 'Kegagalan atau insiden signifikan']
            ],
            caption: 'Teknik Identifikasi Akar Masalah'
          }
        ],
        examples: [
          'Gejala: Laba bersih menurun 30%. Root cause: Bukan hanya penurunan penjualan, tapi juga kenaikan biaya bahan baku (supply chain), inefisiensi produksi (operational), dan beban bunga tinggi (financial leverage)',
          'Gejala: Turnover karyawan tinggi. Root cause: Kompensasi di bawah pasar, budaya kerja toxic, jalur karir tidak jelas'
        ],
        warning: 'Jangan langsung menyimpulkan solusi sebelum memahami akar masalah. Solusi untuk gejala hanya bersifat sementara.'
      },
      {
        id: 'formulasi-solusi-rekomendasi',
        title: 'Formulasi Solusi & Penulisan Rekomendasi',
        content: 'Setelah isu teridentifikasi, kembangkan alternatif solusi yang mengatasi akar masalah dan feasible untuk diimplementasikan. Evaluasi setiap alternatif berdasarkan dampak finansial, kelayakan operasional, keselarasan strategis, dan penerimaan stakeholder. Rekomendasi harus spesifik, terukur, dan disertai langkah implementasi yang jelas.',
        steps: [
          'Identifikasi minimal 2-3 alternatif solusi untuk setiap isu utama',
          'Evaluasi setiap alternatif: cost-benefit analysis, risiko, timeline',
          'Pilih alternatif terbaik berdasarkan kriteria evaluasi',
          'Tulis rekomendasi dengan format: Isu → Analisis → Rekomendasi → Implementasi',
          'Sertakan perhitungan kuantitatif untuk mendukung rekomendasi',
          'Identifikasi risiko implementasi dan mitigasinya'
        ],
        rules: [
          'Setiap rekomendasi harus didukung data dari kasus (bukan asumsi sendiri)',
          'Gunakan bahasa profesional dan objektif',
          'Struktur jawaban: pendahuluan singkat, analisis, kesimpulan dan rekomendasi',
          'Perhatikan konsistensi antar rekomendasi (tidak saling bertentangan)'
        ],
        examples: [
          'Format rekomendasi: "Berdasarkan analisis rasio likuiditas (current ratio 0.8x, quick ratio 0.5x), perusahaan menghadapi risiko likuiditas. Direkomendasikan: (1) negosiasi perpanjangan kredit dengan bank, (2) percepat penagihan piutang (days receivable 90 hari vs industri 45 hari), (3) evaluasi penjualan aset non-produktif. Dampak: perbaikan current ratio menjadi 1.2x dalam 6 bulan."'
        ]
      }
    ]
  },
  {
    id: 'analisis-laporan-keuangan-terpadu',
    title: 'Analisis Laporan Keuangan Terpadu',
    description: 'Analisis horizontal dan vertikal, ratio analysis komprehensif, quality of earnings, dan identifikasi red flags dalam laporan keuangan.',
    sections: [
      {
        id: 'analisis-horizontal-vertikal',
        title: 'Analisis Horizontal & Vertikal',
        content: 'Analisis horizontal (trend analysis) membandingkan data keuangan antar periode untuk mengidentifikasi tren. Analisis vertikal (common-size analysis) menyajikan setiap pos sebagai persentase dari pos dasar (revenue untuk laba rugi, total aset untuk neraca). Kombinasi keduanya memberikan gambaran lengkap tentang kinerja dan posisi keuangan perusahaan.',
        tables: [
          {
            headers: ['Pos Laporan Keuangan', '2022 (Rp Miliar)', '2023 (Rp Miliar)', 'Perubahan (%)', 'Common-Size 2023 (%)'],
            rows: [
              ['Pendapatan', '500', '550', '+10%', '100%'],
              ['Beban Pokok Penjualan', '(300)', '(350)', '+16.7%', '63.6%'],
              ['Laba Kotor', '200', '200', '0%', '36.4%'],
              ['Beban Operasional', '(100)', '(120)', '+20%', '21.8%'],
              ['Laba Operasional', '100', '80', '-20%', '14.5%'],
              ['Beban Bunga', '(20)', '(25)', '+25%', '4.5%'],
              ['Laba Sebelum Pajak', '80', '55', '-31.3%', '10.0%'],
              ['Pajak (22%)', '(17.6)', '(12.1)', '-31.3%', '2.2%'],
              ['Laba Bersih', '62.4', '42.9', '-31.3%', '7.8%']
            ],
            caption: 'Contoh Analisis Horizontal & Vertikal Laporan Laba Rugi'
          }
        ],
        examples: [
          'Dari tabel: Revenue naik 10% tapi COGS naik 16.7% → gross margin tertekan dari 40% ke 36.4%. Operating expenses naik 20% → laba operasional turun 20%. Indikasi: masalah efisiensi biaya dan harga input.',
          'Analisis vertikal neraca: jika piutang usaha naik dari 15% ke 25% dari total aset, perlu investigasi kebijakan kredit dan kualitas piutang'
        ],
        notes: [
          'Bandingkan trend minimal 3 tahun untuk identifikasi pola',
          'Perhatikan perubahan yang tidak proporsional antara revenue dan biaya',
          'Gunakan common-size untuk benchmarking dengan pesaing meskipun skala berbeda'
        ]
      },
      {
        id: 'ratio-analysis-komprehensif',
        title: 'Analisis Rasio Keuangan Komprehensif',
        content: 'Rasio keuangan merangkum hubungan antar pos laporan keuangan dan memberikan insight tentang profitabilitas, likuiditas, solvabilitas, efisiensi, dan valuasi pasar. Rasio paling bermakna ketika dibandingkan dengan data historis, benchmark industri, atau pesaing. Analisis DuPont mendekomposisi ROE menjadi komponen-komponen untuk identifikasi driver kinerja.',
        tables: [
          {
            headers: ['Kategori', 'Rasio', 'Formula', 'Benchmark Umum'],
            rows: [
              ['Likuiditas', 'Current Ratio', 'Aset Lancar / Liabilitas Lancar', '> 1.5x'],
              ['Likuiditas', 'Quick Ratio', '(Aset Lancar - Persediaan) / Liabilitas Lancar', '> 1.0x'],
              ['Likuiditas', 'Cash Ratio', 'Kas & Setara Kas / Liabilitas Lancar', '> 0.2x'],
              ['Solvabilitas', 'Debt to Equity (DER)', 'Total Utang / Total Ekuitas', '< 2.0x'],
              ['Solvabilitas', 'Interest Coverage', 'EBIT / Beban Bunga', '> 3.0x'],
              ['Solvabilitas', 'Debt Service Coverage', '(EBIT + Depresiasi) / (Pokok + Bunga)', '> 1.25x'],
              ['Profitabilitas', 'Gross Profit Margin', 'Laba Kotor / Pendapatan', 'Tergantung industri'],
              ['Profitabilitas', 'Operating Profit Margin', 'Laba Operasional / Pendapatan', '> 10%'],
              ['Profitabilitas', 'Net Profit Margin', 'Laba Bersih / Pendapatan', '> 5%'],
              ['Profitabilitas', 'ROA', 'Laba Bersih / Rata-rata Total Aset', '> 5%'],
              ['Profitabilitas', 'ROE', 'Laba Bersih / Rata-rata Ekuitas', '> 15%'],
              ['Efisiensi', 'Asset Turnover', 'Pendapatan / Rata-rata Total Aset', 'Tergantung industri'],
              ['Efisiensi', 'Inventory Turnover', 'HPP / Rata-rata Persediaan', 'Tinggi = efisien'],
              ['Efisiensi', 'Days Receivable', '(Piutang / Pendapatan) × 365', '30-60 hari'],
              ['Efisiensi', 'Days Payable', '(Utang Dagang / HPP) × 365', '30-90 hari'],
              ['Pasar', 'P/E Ratio', 'Harga Saham / EPS', '10-25x'],
              ['Pasar', 'P/B Ratio', 'Harga Saham / Book Value per Share', '> 1x']
            ],
            caption: 'Rasio Keuangan Utama: Formula dan Benchmark'
          }
        ],
        formula: 'DuPont Analysis (3-step):\nROE = Net Profit Margin × Asset Turnover × Equity Multiplier\nROE = (Laba Bersih/Pendapatan) × (Pendapatan/Total Aset) × (Total Aset/Ekuitas)\n\nDuPont Analysis (5-step):\nROE = Tax Burden × Interest Burden × EBIT Margin × Asset Turnover × Equity Multiplier',
        examples: [
          'DuPont: ROE 18% = NPM 9% × AT 1.0x × EM 2.0x. Jika ROE turun menjadi 12%: NPM 6% × AT 1.0x × EM 2.0x → penurunan driven oleh profitabilitas, bukan leverage atau efisiensi'
        ],
        warning: 'Rasio tunggal bisa menyesatkan. Selalu analisis beberapa rasio bersama-sama dan pertimbangkan konteks industri serta kondisi ekonomi.'
      },
      {
        id: 'quality-of-earnings-red-flags',
        title: 'Quality of Earnings & Red Flags',
        content: 'Quality of earnings mengukur sejauh mana laba yang dilaporkan mencerminkan kinerja ekonomi sebenarnya. Laba berkualitas tinggi berasal dari operasi berkelanjutan, didukung arus kas, dan menggunakan kebijakan akuntansi konservatif. Red flags adalah tanda peringatan potensial adanya manipulasi, salah saji, atau financial distress.',
        tables: [
          {
            headers: ['Red Flag', 'Indikasi', 'Investigasi Lanjutan'],
            rows: [
              ['Revenue tumbuh jauh lebih cepat dari industri', 'Possible revenue manipulation', 'Cek kebijakan pengakuan pendapatan, channel stuffing'],
              ['Laba naik tapi arus kas operasi turun', 'Earnings quality rendah', 'Analisis accruals, perubahan working capital'],
              ['Piutang tumbuh lebih cepat dari revenue', 'Aggressive revenue recognition', 'Cek aging piutang, allowance adequacy'],
              ['Persediaan tumbuh lebih cepat dari HPP', 'Obsolescence risk, possible overstatement', 'Cek provision for obsolescence, NRV test'],
              ['Transaksi pihak berelasi signifikan', 'Transfer pricing, conflict of interest', 'Cek arm\'s length, disclosure adequacy'],
              ['Perubahan kebijakan akuntansi sering', 'Possible earnings management', 'Evaluasi dampak dan alasan perubahan'],
              ['Pergantian auditor berulang', 'Possible opinion shopping', 'Cek alasan pergantian, opini terakhir'],
              ['Off-balance sheet items material', 'Hidden liabilities', 'Analisis komitmen, kontinjensi, SPE'],
              ['Deferred tax asset besar', 'Recoverability concern', 'Evaluasi kemampuan realisasi DTA'],
              ['Kapitalisasi biaya agresif', 'Overstatement aset, understatement beban', 'Cek konsistensi dengan standar akuntansi']
            ],
            caption: 'Red Flags dalam Laporan Keuangan dan Tindak Lanjut'
          }
        ],
        formula: 'Accrual Ratio = (Laba Bersih - Arus Kas Operasi) / Rata-rata Total Aset\nSemakin tinggi accrual ratio → semakin rendah quality of earnings\n\nBeneish M-Score: Model untuk deteksi earnings manipulation\nM = -4.84 + 0.92×DSRI + 0.528×GMI + 0.404×AQI + 0.892×SGI + 0.115×DEPI - 0.172×SGAI + 4.679×TATA - 0.327×LVGI\nJika M > -1.78 → kemungkinan manipulasi tinggi',
        warning: 'Red flag bukan berarti pasti ada fraud atau salah saji. Red flag mengindikasikan area yang memerlukan investigasi dan skeptisisme profesional lebih mendalam.',
        notes: [
          'Bandingkan arus kas operasi dengan laba bersih secara konsisten (idealnya CFO > Net Income)',
          'Perhatikan kualitas laba dari segmen: apakah laba dari operasi inti atau item non-recurring',
          'Dalam ujian, identifikasi minimal 3-5 red flags dari kasus dan jelaskan implikasinya'
        ]
      }
    ]
  },
  {
    id: 'kasus-audit-etika',
    title: 'Kasus Audit & Etika Profesional',
    description: 'Pendekatan analisis kasus audit: going concern, subsequent events, related parties, dilema etika, dan professional judgment.',
    sections: [
      {
        id: 'going-concern-assessment',
        title: 'Penilaian Going Concern',
        content: 'Going concern adalah asumsi fundamental bahwa entitas akan melanjutkan operasi dalam masa mendatang yang dapat diprediksi (minimal 12 bulan dari tanggal laporan keuangan). Auditor harus mengevaluasi penilaian manajemen atas going concern dan menentukan apakah terdapat keraguan material. SA 570 (Revisi) mengatur tanggung jawab auditor terkait going concern.',
        tables: [
          {
            headers: ['Kategori Indikator', 'Contoh Indikator Going Concern'],
            rows: [
              ['Keuangan', 'Ekuitas negatif, working capital negatif, default utang, rasio likuiditas < 1'],
              ['Keuangan', 'Rugi operasi berturut-turut, arus kas operasi negatif, ketidakmampuan bayar dividen'],
              ['Operasional', 'Kehilangan pelanggan utama, kehilangan lisensi/paten, shortage bahan baku kritis'],
              ['Operasional', 'Perselisihan tenaga kerja, kehilangan key management tanpa pengganti'],
              ['Lainnya', 'Tuntutan hukum besar, perubahan regulasi merugikan, bencana tidak diasuransikan'],
              ['Lainnya', 'Non-compliance terhadap persyaratan modal minimum regulator']
            ],
            caption: 'Indikator Going Concern Berdasarkan SA 570'
          }
        ],
        steps: [
          'Evaluasi penilaian going concern manajemen dan asumsi yang mendasari',
          'Identifikasi risiko going concern dari analisis keuangan dan operasional',
          'Uji rencana manajemen untuk mengatasi isu going concern (refinancing, penjualan aset, restrukturisasi)',
          'Evaluasi kelayakan rencana tersebut dengan bukti pendukung',
          'Tentukan apakah ketidakpastian material tentang going concern ada',
          'Tentukan dampak pada opini audit dan pengungkapan yang diperlukan'
        ],
        examples: [
          'PT ABC: ekuitas negatif Rp50 miliar, default pinjaman bank. Manajemen berencana right issue Rp100 miliar. Auditor evaluasi: apakah RUPS sudah setuju? Apakah investor committed? Jika rencana credible → paragraf penekanan hal. Jika tidak → opini going concern atau adverse.'
        ],
        warning: 'Jangan mengabaikan indikator going concern meskipun manajemen optimis. Auditor bertanggung jawab membuat penilaian independen berdasarkan bukti.'
      },
      {
        id: 'subsequent-events-related-parties',
        title: 'Subsequent Events & Transaksi Pihak Berelasi',
        content: 'Subsequent events adalah peristiwa yang terjadi antara tanggal laporan keuangan dan tanggal laporan auditor. SA 560 membedakan adjusting events (kondisi sudah ada pada tanggal neraca) dan non-adjusting events (kondisi timbul setelah tanggal neraca). Transaksi pihak berelasi (SA 550) memerlukan perhatian khusus karena risiko bias dan kurang arm\'s length.',
        tables: [
          {
            headers: ['Jenis', 'Perlakuan', 'Contoh'],
            rows: [
              ['Adjusting Event', 'Sesuaikan laporan keuangan', 'Pelanggan utama bangkrut setelah tanggal neraca (piutang sudah ada pada tanggal neraca)'],
              ['Adjusting Event', 'Sesuaikan laporan keuangan', 'Penyelesaian kasus hukum yang mengkonfirmasi kewajiban pada tanggal neraca'],
              ['Non-adjusting Event', 'Disclosure saja (tidak sesuaikan angka)', 'Bencana alam setelah tanggal neraca yang merusak pabrik'],
              ['Non-adjusting Event', 'Disclosure saja (tidak sesuaikan angka)', 'Akuisisi besar setelah tanggal neraca'],
              ['Pihak Berelasi', 'Disclosure wajib, evaluasi arm\'s length', 'Penjualan aset ke perusahaan terafiliasi di bawah harga pasar'],
              ['Pihak Berelasi', 'Disclosure wajib, evaluasi arm\'s length', 'Pinjaman tanpa bunga kepada direksi']
            ],
            caption: 'Jenis Peristiwa dan Perlakuan Akuntansi/Audit'
          }
        ],
        rules: [
          'Auditor wajib melakukan prosedur subsequent events hingga tanggal laporan auditor',
          'Jika fakta baru diketahui setelah tanggal laporan → evaluasi apakah perlu revisi',
          'Semua transaksi pihak berelasi yang material harus diungkapkan sesuai PSAK 7',
          'Periksa apakah transaksi pihak berelasi dilakukan pada kondisi arm\'s length'
        ],
        notes: [
          'Prosedur subsequent events: review notulen RUPS/direksi, baca laporan keuangan interim, tanyakan kepada manajemen',
          'Perhatikan undisclosed related parties yang mungkin disembunyikan manajemen'
        ]
      },
      {
        id: 'dilema-etika-judgment',
        title: 'Dilema Etika & Professional Judgment',
        content: 'Auditor sering menghadapi dilema etika di mana kepentingan berbagai pihak bertentangan. Kerangka penyelesaian dilema etika mengacu pada Kode Etik IESBA dan prinsip dasar profesi. Professional judgment adalah penerapan pengetahuan, pelatihan, dan pengalaman dalam membuat keputusan audit di situasi yang ambigu atau kompleks.',
        steps: [
          'Identifikasi fakta dan pihak-pihak yang terlibat dalam dilema',
          'Identifikasi prinsip etika yang terpengaruh (integritas, objektivitas, kompetensi, kerahasiaan, perilaku profesional)',
          'Identifikasi ancaman terhadap prinsip etika (self-interest, self-review, advocacy, familiarity, intimidation)',
          'Evaluasi signifikansi ancaman (apakah material?)',
          'Terapkan pengamanan yang tersedia untuk mengurangi ancaman',
          'Jika ancaman tidak dapat dikurangi ke tingkat yang dapat diterima → tolak penugasan atau resign',
          'Dokumentasikan pertimbangan dan keputusan'
        ],
        examples: [
          'Dilema: Klien meminta auditor tidak mengungkapkan transaksi pihak berelasi yang material. Ancaman: intimidation + self-interest (fee). Resolusi: Komunikasikan kepada TCWG, jika tetap menolak → modifikasi opini audit.',
          'Dilema: Partner audit memiliki investasi saham di perusahaan klien. Ancaman: self-interest terhadap independensi. Resolusi: Lepas investasi atau ganti partner.',
          'Dilema: Menemukan fraud oleh manajemen junior, CFO meminta jangan dilaporkan. Ancaman: intimidation. Resolusi: Laporkan ke dewan komisaris/komite audit sesuai SA 240.'
        ],
        tables: [
          {
            headers: ['Situasi', 'Ancaman', 'Prinsip Terdampak', 'Tindakan'],
            rows: [
              ['Fee sangat rendah (lowballing)', 'Self-interest', 'Kompetensi, Objektivitas', 'Evaluasi kecukupan sumber daya audit'],
              ['Klien tawarkan hadiah mahal', 'Self-interest, Familiarity', 'Objektivitas, Integritas', 'Tolak atau evaluasi signifikansi'],
              ['Diminta jadi saksi ahli untuk klien', 'Advocacy', 'Objektivitas', 'Tolak jika bersifat advocacy'],
              ['Hubungan keluarga dengan klien', 'Familiarity', 'Independensi', 'Disclosure, ganti tim atau klien'],
              ['Ancaman ganti auditor jika qualified', 'Intimidation', 'Integritas, Objektivitas', 'Tetap berikan opini yang tepat']
            ],
            caption: 'Contoh Situasi Dilema Etika dan Penyelesaiannya'
          }
        ],
        warning: 'Dalam ujian CA, selalu sebutkan prinsip etika dan standar audit yang relevan. Jawaban tanpa referensi ke standar tidak mendapat nilai penuh.'
      }
    ]
  },
  {
    id: 'kasus-perpajakan-keuangan',
    title: 'Kasus Perpajakan & Keuangan Korporat',
    description: 'Analisis kasus perhitungan PPh Badan, transfer pricing, keputusan financing dan investment dengan NPV/IRR/WACC.',
    sections: [
      {
        id: 'pph-badan-computation',
        title: 'Perhitungan PPh Badan',
        content: 'Perhitungan PPh Badan dimulai dari laba akuntansi yang disesuaikan dengan koreksi fiskal positif (menambah penghasilan kena pajak) dan koreksi fiskal negatif (mengurangi). Tarif PPh Badan standar 22%. Perusahaan Tbk dengan syarat tertentu mendapat pengurangan 3% (tarif efektif 19%). UMKM dengan omzet di bawah Rp4,8 miliar dikenai PPh Final 0,5%.',
        tables: [
          {
            headers: ['Item', 'Akuntansi (Rp Juta)', 'Koreksi Fiskal', 'Fiskal (Rp Juta)'],
            rows: [
              ['Pendapatan Usaha', '10.000', '-', '10.000'],
              ['HPP', '(6.000)', '-', '(6.000)'],
              ['Laba Kotor', '4.000', '-', '4.000'],
              ['Gaji & Tunjangan', '(1.000)', '-', '(1.000)'],
              ['Sumbangan (non-deductible)', '(100)', '+100', '0'],
              ['Entertaintment (tanpa daftar nominatif)', '(50)', '+50', '0'],
              ['Penyusutan Akuntansi', '(300)', '+50 (beda metode/umur)', '(250)'],
              ['Denda Pajak', '(30)', '+30', '0'],
              ['Pendapatan Bunga Deposito (Final)', '200', '-200', '0'],
              ['Penghasilan Kena Pajak', '', '', '2.750'],
              ['PPh Badan (22%)', '', '', '605'],
              ['Kredit Pajak (PPh 22, 23, 25)', '', '', '(400)'],
              ['PPh Kurang Bayar (PPh 29)', '', '', '205']
            ],
            caption: 'Contoh Perhitungan PPh Badan dengan Koreksi Fiskal'
          }
        ],
        rules: [
          'Biaya yang tidak boleh dikurangkan (non-deductible): sumbangan, natura (kecuali daerah terpencil), sanksi pajak, PPh terutang, biaya pribadi',
          'Penghasilan final (PPh Final): bunga deposito, penjualan tanah/bangunan, dividen (jika memenuhi syarat)',
          'Penyusutan fiskal menggunakan metode garis lurus atau saldo menurun sesuai kelompok aset (Pasal 11 UU PPh)',
          'Kompensasi kerugian dapat dilakukan selama 5 tahun ke depan'
        ],
        examples: [
          'PT Nusantara: Laba akuntansi Rp2 miliar. Koreksi positif: sumbangan Rp100 juta, denda pajak Rp30 juta, entertaintment tanpa nominatif Rp50 juta, selisih penyusutan Rp50 juta. Koreksi negatif: pendapatan bunga deposito final Rp200 juta. PKP = Rp2.030 juta. PPh = 22% × Rp2.030 juta = Rp446,6 juta.'
        ],
        notes: [
          'Perhatikan perbedaan temporer (timing difference) vs perbedaan permanen dalam koreksi fiskal',
          'Perbedaan temporer menimbulkan deferred tax asset/liability (PSAK 46)',
          'Fasilitas PP 23/2018 (PPh Final 0,5%) berlaku 3-4 tahun tergantung bentuk badan usaha'
        ]
      },
      {
        id: 'transfer-pricing-case',
        title: 'Kasus Transfer Pricing',
        content: 'Transfer pricing adalah penetapan harga transaksi antar pihak berelasi. Direktorat Jenderal Pajak mewajibkan transaksi afiliasi dilakukan berdasarkan prinsip kewajaran (arm\'s length principle) sesuai PMK 213/2016 dan SE-50/2013. Wajib pajak harus membuat dokumentasi transfer pricing (TP Doc) yang terdiri dari Master File, Local File, dan Country-by-Country Report (CbCR).',
        tables: [
          {
            headers: ['Metode TP', 'Deskripsi', 'Kapan Digunakan'],
            rows: [
              ['CUP (Comparable Uncontrolled Price)', 'Bandingkan harga dengan transaksi independen serupa', 'Produk identik/serupa tersedia'],
              ['Resale Price Method', 'Harga jual dikurangi gross margin wajar', 'Distribusi tanpa value-add signifikan'],
              ['Cost Plus Method', 'Biaya ditambah mark-up wajar', 'Manufaktur, jasa kontrak'],
              ['TNMM (Transactional Net Margin)', 'Bandingkan net margin dengan perusahaan independen', 'Metode paling sering digunakan'],
              ['Profit Split Method', 'Bagi laba berdasarkan kontribusi', 'Transaksi unik, intangible signifikan']
            ],
            caption: 'Lima Metode Transfer Pricing (OECD Guidelines)'
          }
        ],
        steps: [
          'Identifikasi transaksi afiliasi dan pihak berelasi',
          'Lakukan analisis fungsi, aset, dan risiko (FAR Analysis)',
          'Pilih metode transfer pricing yang paling sesuai',
          'Lakukan benchmarking dengan perusahaan independen',
          'Tentukan arm\'s length range (interquartile range)',
          'Dokumentasikan dalam TP Doc (Master File, Local File, CbCR jika omzet > Rp11 triliun)'
        ],
        warning: 'Koreksi transfer pricing dapat mengakibatkan pajak tambahan signifikan plus sanksi 2% per bulan (maksimal 48%). DJP semakin aktif memeriksa transaksi afiliasi.'
      },
      {
        id: 'financing-investment-decisions',
        title: 'Keputusan Financing & Investment',
        content: 'Keputusan financing (debt vs equity) dan investment (capital budgeting) merupakan keputusan keuangan korporat yang kritis. WACC digunakan sebagai discount rate untuk mengevaluasi kelayakan investasi. NPV dan IRR adalah metode utama evaluasi proyek investasi.',
        tables: [
          {
            headers: ['Aspek', 'Debt Financing', 'Equity Financing'],
            rows: [
              ['Biaya', 'Bunga (tax-deductible)', 'Dividen (not tax-deductible)'],
              ['Kepemilikan', 'Tidak terdelusi', 'Terdelusi'],
              ['Kewajiban', 'Wajib bayar pokok + bunga', 'Tidak wajib dividen'],
              ['Risiko', 'Financial distress jika gagal bayar', 'Tidak ada risiko default'],
              ['Tax Shield', 'Ada (bunga mengurangi pajak)', 'Tidak ada'],
              ['Dampak WACC', 'Menurunkan (sampai titik optimal)', 'Menaikkan (cost of equity > cost of debt)'],
              ['Sinyal ke Pasar', 'Positif (manajemen percaya diri)', 'Negatif (saham overvalued)']
            ],
            caption: 'Perbandingan Debt vs Equity Financing'
          }
        ],
        formula: 'WACC = (E/V × Re) + (D/V × Rd × (1-Tc))\nDimana: E = Market value of equity, D = Market value of debt, V = E + D\nRe = Cost of equity (CAPM: Rf + β(Rm-Rf)), Rd = Cost of debt, Tc = Tax rate\n\nNPV = Σ[CFt / (1+WACC)^t] - I₀\nKeputusan: Terima proyek jika NPV > 0\n\nIRR = r dimana NPV = 0\nKeputusan: Terima proyek jika IRR > WACC\n\nPayback Period = Tahun sebelum kumulatif CF positif + (Sisa investasi / CF tahun berikutnya)',
        examples: [
          'PT Maju Sejahtera evaluasi proyek pabrik baru: Investasi Rp10 miliar, CF tahunan Rp3 miliar selama 5 tahun, WACC 12%. NPV = 3/(1.12)¹ + 3/(1.12)² + 3/(1.12)³ + 3/(1.12)⁴ + 3/(1.12)⁵ - 10 = Rp0.81 miliar > 0 → Proyek LAYAK.',
          'Jika ada 2 proyek mutually exclusive: Proyek A (NPV Rp2 miliar, IRR 18%) vs Proyek B (NPV Rp1.5 miliar, IRR 22%). Pilih Proyek A karena NPV lebih tinggi (NPV rule > IRR rule).'
        ],
        notes: [
          'Jika NPV dan IRR bertentangan pada proyek mutually exclusive, gunakan NPV',
          'IRR memiliki kelemahan: multiple IRR untuk non-conventional cash flows, asumsi reinvestment rate',
          'Pertimbangkan juga aspek kualitatif: strategic fit, environmental impact, stakeholder acceptance'
        ]
      }
    ]
  },
  {
    id: 'kasus-stratejik-manajemen',
    title: 'Kasus Stratejik & Manajemen',
    description: 'Aplikasi analisis SWOT terstruktur, implementasi BSC, penerapan change management, dan evaluasi model bisnis dalam konteks kasus terpadu.',
    sections: [
      {
        id: 'swot-application-case',
        title: 'Aplikasi SWOT dalam Kasus Bisnis',
        content: 'Analisis SWOT dalam konteks kasus harus spesifik dengan data dari kasus, bukan pernyataan generik. Setiap elemen SWOT harus didukung bukti dari informasi kasus. Matriks TOWS kemudian digunakan untuk merumuskan strategi yang menghubungkan faktor internal dan eksternal.',
        tables: [
          {
            headers: ['SWOT', 'Contoh Spesifik (PT Nusantara Digital)'],
            rows: [
              ['Strength', 'S1: Market share 35% di segmen e-commerce B2B, S2: Tim teknologi 200+ engineer, S3: Cash reserve Rp500 miliar'],
              ['Weakness', 'W1: Customer acquisition cost tinggi (Rp150k/user), W2: Belum profitable (net loss Rp80 miliar), W3: Konsentrasi revenue di Jawa (85%)'],
              ['Opportunity', 'O1: Penetrasi digital UMKM baru 20%, O2: Regulasi PP PMSE mendukung, O3: Potensi ekspansi ke SEA market'],
              ['Threat', 'T1: Kompetitor global masuk (Amazon Business), T2: Kenaikan biaya cloud 15%/tahun, T3: Risiko regulasi data pribadi (UU PDP)']
            ],
            caption: 'Contoh SWOT Analysis Terstruktur dengan Data Spesifik'
          },
          {
            headers: ['Strategi TOWS', 'Opportunities (O)', 'Threats (T)'],
            rows: [
              ['Strengths (S)', 'SO: Gunakan market share (S1) dan cash (S3) untuk penetrasi UMKM digital (O1)', 'ST: Leverage tim tech (S2) untuk diferensiasi vs Amazon (T1)'],
              ['Weaknesses (W)', 'WO: Ekspansi luar Jawa (W3) seiring digitalisasi UMKM (O1)', 'WT: Kurangi CAC (W1) untuk bertahan vs kompetitor (T1)']
            ],
            caption: 'Matriks TOWS dan Alternatif Strategi'
          }
        ],
        rules: [
          'Setiap poin SWOT harus spesifik dan didukung data dari kasus',
          'Hindari SWOT generik seperti "brand kuat" tanpa data pendukung',
          'TOWS menghasilkan 4 tipe strategi: SO (agresif), ST (diversifikasi), WO (turnaround), WT (defensif)',
          'Prioritaskan strategi SO dan WO yang proaktif'
        ],
        warning: 'Kesalahan umum dalam ujian: SWOT terlalu umum, tidak ada linkage ke strategi, strength dan opportunity tertukar.'
      },
      {
        id: 'bsc-implementation-case',
        title: 'Implementasi Balanced Scorecard',
        content: 'Implementasi BSC dalam kasus memerlukan penurunan strategi menjadi KPI terukur di empat perspektif. Strategy map menunjukkan hubungan sebab-akibat: Learning & Growth mendorong Internal Process, yang mendorong Customer value, yang akhirnya menghasilkan Financial results.',
        tables: [
          {
            headers: ['Perspektif', 'Objective', 'KPI', 'Target', 'Inisiatif'],
            rows: [
              ['Financial', 'Meningkatkan profitabilitas', 'Net Profit Margin', '8% (dari 5%)', 'Cost optimization program'],
              ['Financial', 'Pertumbuhan revenue', 'Revenue Growth YoY', '15%', 'New market expansion'],
              ['Customer', 'Meningkatkan kepuasan', 'Customer Satisfaction Index', '85/100', 'Service improvement'],
              ['Customer', 'Akuisisi pelanggan baru', 'New Customer Acquisition', '10.000/bulan', 'Digital marketing campaign'],
              ['Internal Process', 'Efisiensi operasional', 'Order Fulfillment Rate', '98%', 'Warehouse automation'],
              ['Internal Process', 'Kecepatan inovasi', 'Time to Market (produk baru)', '3 bulan', 'Agile development'],
              ['Learning & Growth', 'Kompetensi digital', '% karyawan sertifikasi digital', '70%', 'Digital upskilling program'],
              ['Learning & Growth', 'Retensi talent', 'Employee Turnover Rate', '<10%', 'EVP improvement']
            ],
            caption: 'Contoh BSC Implementation dengan KPI Terukur'
          }
        ],
        diagram: 'Strategy Map (Cause-Effect):\n\nFinancial:        Profitabilitas ←── Revenue Growth ←── Cost Efficiency\n                        ↑                    ↑\nCustomer:         Customer Satisfaction ←── Customer Acquisition\n                        ↑                    ↑\nInternal:         Operational Excellence ←── Innovation Speed\n                        ↑                    ↑\nLearning:         Digital Competency ←── Talent Retention',
        notes: [
          'KPI harus SMART: Specific, Measurable, Achievable, Relevant, Time-bound',
          'Setiap KPI harus terhubung ke objective strategis',
          'BSC bukan hanya pengukuran kinerja, tapi sistem manajemen strategis',
          'Dalam ujian, tunjukkan hubungan sebab-akibat antar perspektif'
        ]
      },
      {
        id: 'change-management-application',
        title: 'Penerapan Change Management dalam Kasus',
        content: 'Banyak kasus bisnis melibatkan perubahan organisasional yang signifikan. Analisis kasus harus mempertimbangkan aspek change management: analisis stakeholder, pengelolaan resistensi, strategi komunikasi, capability building, dan mekanisme monitoring. Model Kotter 8 Langkah dan Lewin paling sering diujikan.',
        tables: [
          {
            headers: ['Langkah Kotter', 'Aplikasi dalam Kasus Transformasi Digital', 'Output'],
            rows: [
              ['1. Create Urgency', 'Presentasikan data: market share turun 15%, kompetitor sudah digital', 'Awareness bahwa status quo tidak bisa dipertahankan'],
              ['2. Form Coalition', 'Bentuk Digital Transformation Office dengan CTO, CMO, CHRO', 'Tim lintas fungsi dengan otoritas'],
              ['3. Create Vision', '"Menjadi digital-first company dalam 3 tahun"', 'Visi dan strategi yang jelas'],
              ['4. Communicate Vision', 'Town hall meeting, newsletter, demo prototype', 'Seluruh organisasi memahami dan buy-in'],
              ['5. Empower Action', 'Hilangkan birokrasi approval, sediakan tools digital', 'Hambatan organisasional dihilangkan'],
              ['6. Quick Wins', 'Launch mobile app dalam 3 bulan, digitalisasi 1 proses kunci', 'Bukti sukses untuk membangun momentum'],
              ['7. Build on Change', 'Scale-up ke seluruh departemen, integrasi sistem', 'Perubahan meluas dan mengakar'],
              ['8. Anchor in Culture', 'Revisi KPI, reward digital adoption, hire digital talent', 'Digital menjadi budaya kerja']
            ],
            caption: 'Aplikasi Kotter 8 Steps dalam Kasus Transformasi Digital'
          }
        ],
        examples: [
          'Kasus: Bank konvensional transformasi ke digital banking. Resistensi dari karyawan cabang (takut PHK). Solusi: program reskilling, redeployment ke digital roles, komunikasi transparan tentang rencana.',
          'Kasus: Merger dua perusahaan dengan budaya berbeda. Pendekatan: culture assessment, identifikasi shared values, integration team lintas perusahaan, quick win programs.'
        ],
        warning: 'Dalam ujian, jangan hanya sebutkan langkah-langkah teori. Terapkan secara spesifik pada situasi kasus dengan contoh konkret.',
        notes: [
          'Resistensi terhadap perubahan adalah normal, bukan selalu negatif',
          'Force Field Analysis: identifikasi driving forces dan restraining forces',
          'Perubahan budaya memerlukan waktu 3-5 tahun, mulai dengan perubahan perilaku'
        ]
      }
    ]
  }
];
