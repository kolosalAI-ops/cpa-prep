export interface FormalTableData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface FormalSection {
  id: string;
  title: string;
  content: string;
  tables?: FormalTableData[];
  rules?: string[];
  steps?: string[];
  examples?: string[];
  diagram?: string;
  formula?: string;
  notes?: string[];
  warning?: string;
}

export interface FormalChapter {
  id: string;
  title: string;
  description: string;
  sections: FormalSection[];
}

export interface FormalMaterial {
  subjectId: string;
  chapters: FormalChapter[];
}

export const formalMaterials: FormalMaterial[] = [
  // =============================================
  // PENGANTAR AKUNTANSI & BISNIS
  // =============================================
  {
    subjectId: 'pengantar-akuntansi',
    chapters: [
      {
        id: 'kerangka-konseptual',
        title: 'Kerangka Konseptual Pelaporan Keuangan',
        description: 'Kerangka Konseptual merupakan fondasi penyusunan dan penyajian laporan keuangan. Kerangka ini menetapkan konsep-konsep yang mendasari pelaporan keuangan bertujuan umum, termasuk tujuan pelaporan, karakteristik kualitatif informasi keuangan yang berguna, dan elemen-elemen laporan keuangan.',
        sections: [
          {
            id: 'kk-tujuan',
            title: 'Tujuan Pelaporan Keuangan',
            content: 'Tujuan pelaporan keuangan bertujuan umum adalah menyediakan informasi keuangan tentang entitas pelapor yang berguna bagi investor, pemberi pinjaman, dan kreditor lainnya (baik yang ada maupun yang potensial) dalam membuat keputusan tentang penyediaan sumber daya kepada entitas tersebut. Keputusan tersebut meliputi keputusan untuk membeli, menjual, atau menahan instrumen ekuitas dan instrumen utang, serta menyediakan atau menyelesaikan pinjaman dan bentuk kredit lainnya.',
            rules: [
              'Laporan keuangan bertujuan umum tidak dirancang untuk menunjukkan nilai entitas pelapor, tetapi menyediakan informasi yang membantu pengguna mengestimasi nilai entitas.',
              'Laporan keuangan terutama ditujukan untuk pengguna utama (primary users): investor, pemberi pinjaman, dan kreditor lainnya.',
              'Manajemen juga berkepentingan terhadap informasi keuangan, namun manajemen bukan pengguna utama karena dapat memperoleh informasi internal kapan saja.',
            ],
          },
          {
            id: 'kk-karakteristik',
            title: 'Karakteristik Kualitatif Informasi Keuangan',
            content: 'Agar informasi keuangan berguna, informasi tersebut harus memiliki karakteristik kualitatif fundamental dan peningkat. Karakteristik fundamental terdiri dari relevansi dan representasi tepat. Karakteristik peningkat meliputi keterbandingan, keterverifikasian, ketepatwaktuan, dan keterpahaman.',
            tables: [
              {
                caption: 'Karakteristik Kualitatif Informasi Keuangan',
                headers: ['Jenis', 'Karakteristik', 'Penjelasan'],
                rows: [
                  ['Fundamental', 'Relevansi (Relevance)', 'Mampu membuat perbedaan dalam keputusan. Memiliki nilai prediktif dan/atau nilai konfirmasi.'],
                  ['Fundamental', 'Representasi Tepat (Faithful Representation)', 'Lengkap, netral, dan bebas dari kesalahan. Menggambarkan substansi ekonomi, bukan sekadar bentuk hukum.'],
                  ['Peningkat', 'Keterbandingan (Comparability)', 'Memungkinkan pengguna mengidentifikasi persamaan dan perbedaan antar entitas dan antar periode.'],
                  ['Peningkat', 'Keterverifikasian (Verifiability)', 'Pengamat independen yang berbeda dapat mencapai konsensus bahwa penyajian tertentu merupakan representasi tepat.'],
                  ['Peningkat', 'Ketepatwaktuan (Timeliness)', 'Tersedia bagi pembuat keputusan tepat waktu sehingga mampu memengaruhi keputusan mereka.'],
                  ['Peningkat', 'Keterpahaman (Understandability)', 'Diklasifikasikan, dikarakterisasi, dan disajikan secara jelas dan ringkas.'],
                ],
              },
            ],
            notes: ['Materialitas adalah aspek relevansi yang spesifik per entitas. Informasi material jika penghilangan atau salah saji dapat memengaruhi keputusan pengguna.'],
          },
          {
            id: 'kk-elemen',
            title: 'Elemen-Elemen Laporan Keuangan',
            content: 'Kerangka Konseptual mendefinisikan elemen-elemen yang membentuk laporan keuangan. Elemen posisi keuangan meliputi aset, liabilitas, dan ekuitas. Elemen kinerja keuangan meliputi penghasilan (income) dan beban (expenses).',
            tables: [
              {
                caption: 'Elemen Laporan Keuangan',
                headers: ['Elemen', 'Definisi', 'Contoh'],
                rows: [
                  ['Aset', 'Sumber daya ekonomik kini yang dikendalikan oleh entitas sebagai akibat peristiwa masa lalu', 'Kas, piutang, persediaan, aset tetap, aset takberwujud'],
                  ['Liabilitas', 'Kewajiban kini entitas untuk mengalihkan sumber daya ekonomik sebagai akibat peristiwa masa lalu', 'Utang usaha, utang bank, utang obligasi, provisi'],
                  ['Ekuitas', 'Kepentingan residual dalam aset entitas setelah dikurangi seluruh liabilitasnya', 'Modal saham, tambahan modal disetor, laba ditahan, OCI'],
                  ['Penghasilan (Income)', 'Kenaikan aset atau penurunan liabilitas yang mengakibatkan kenaikan ekuitas (selain kontribusi pemilik)', 'Pendapatan usaha, keuntungan penjualan aset, pendapatan bunga'],
                  ['Beban (Expenses)', 'Penurunan aset atau kenaikan liabilitas yang mengakibatkan penurunan ekuitas (selain distribusi ke pemilik)', 'HPP, beban gaji, beban penyusutan, beban bunga, kerugian'],
                ],
              },
            ],
            formula: 'Persamaan Dasar Akuntansi:\n  Aset = Liabilitas + Ekuitas\n  Aset = Liabilitas + (Modal + Laba Ditahan + Pendapatan - Beban - Prive/Dividen)',
          },
          {
            id: 'kk-asumsi',
            title: 'Asumsi Dasar & Kendala',
            content: 'Pelaporan keuangan didasarkan pada beberapa asumsi dasar yang menjadi fondasi penyusunan laporan keuangan.',
            tables: [
              {
                caption: 'Asumsi Dasar Akuntansi',
                headers: ['Asumsi', 'Penjelasan', 'Implikasi'],
                rows: [
                  ['Basis Akrual (Accrual Basis)', 'Transaksi diakui saat terjadi, bukan saat kas diterima/dibayar', 'Pendapatan diakui saat earned, beban diakui saat incurred'],
                  ['Kelangsungan Usaha (Going Concern)', 'Entitas diasumsikan akan terus beroperasi di masa mendatang', 'Aset dinilai berdasarkan biaya historis, bukan nilai likuidasi'],
                  ['Entitas Ekonomi (Economic Entity)', 'Aktivitas bisnis entitas terpisah dari pemiliknya', 'Transaksi pribadi pemilik tidak dicampur dengan transaksi usaha'],
                  ['Satuan Moneter (Monetary Unit)', 'Hanya transaksi yang dapat diukur dalam satuan uang yang dicatat', 'Kepuasan karyawan atau reputasi tidak dapat diakui sebagai aset'],
                  ['Periodisitas (Periodicity)', 'Umur ekonomis entitas dapat dibagi menjadi periode-periode', 'Laporan keuangan disusun minimal secara tahunan'],
                ],
              },
            ],
            warning: 'Jika asumsi kelangsungan usaha tidak terpenuhi, laporan keuangan harus disusun dengan basis yang berbeda (basis likuidasi) dan hal tersebut harus diungkapkan.',
          },
        ],
      },
      {
        id: 'siklus-akuntansi',
        title: 'Siklus Akuntansi',
        description: 'Siklus akuntansi adalah serangkaian langkah sistematis yang dilakukan oleh perusahaan dari awal hingga akhir periode akuntansi untuk menghasilkan laporan keuangan yang akurat dan lengkap.',
        sections: [
          {
            id: 'sa-langkah',
            title: '10 Langkah Siklus Akuntansi',
            content: 'Siklus akuntansi terdiri dari langkah-langkah berurutan yang harus dilakukan setiap periode akuntansi.',
            steps: [
              'Analisis Transaksi — Identifikasi transaksi yang mempengaruhi posisi keuangan. Tentukan akun apa yang terpengaruh dan apakah bertambah atau berkurang (debit/kredit).',
              'Pencatatan dalam Jurnal Umum — Catat transaksi ke dalam jurnal umum secara kronologis. Setiap entri harus memiliki debit = kredit (double-entry).',
              'Posting ke Buku Besar — Pindahkan (posting) setiap entri jurnal ke akun-akun terkait di buku besar. Setiap akun memiliki halaman tersendiri.',
              'Penyusunan Neraca Saldo (Trial Balance) — Daftar semua saldo akun di buku besar. Total debit harus sama dengan total kredit.',
              'Jurnal Penyesuaian (Adjusting Entries) — Buat entri penyesuaian untuk: akrual (accruals), tangguhan (deferrals), estimasi (penyusutan, piutang tak tertagih).',
              'Neraca Saldo Disesuaikan (Adjusted Trial Balance) — Susun neraca saldo setelah mempertimbangkan semua penyesuaian. Total debit = total kredit.',
              'Penyusunan Laporan Keuangan — Susun: (a) Laporan Laba Rugi, (b) Laporan Perubahan Ekuitas, (c) Laporan Posisi Keuangan (Neraca), (d) Laporan Arus Kas, (e) Catatan atas Laporan Keuangan.',
              'Jurnal Penutup (Closing Entries) — Tutup semua akun nominal (pendapatan, beban, prive) ke akun Ikhtisar Laba Rugi, lalu ke Laba Ditahan/Modal.',
              'Neraca Saldo Setelah Penutupan (Post-Closing Trial Balance) — Verifikasi bahwa hanya akun riil (aset, liabilitas, ekuitas) yang tersisa dengan saldo.',
              'Jurnal Pembalik (Reversing Entries) — Opsional. Dibuat di awal periode berikutnya untuk membalik jurnal penyesuaian akrual tertentu agar pencatatan di periode baru lebih mudah.',
            ],
            diagram: '┌─────────────────┐\n│  1. Analisis     │\n│     Transaksi    │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│  2. Jurnal      │\n│     Umum        │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│  3. Posting     │\n│     Buku Besar  │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│  4. Neraca      │\n│     Saldo       │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│  5. Jurnal      │\n│     Penyesuaian │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│  6. Neraca Saldo│\n│     Disesuaikan │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│  7. Laporan     │\n│     Keuangan    │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│  8. Jurnal      │\n│     Penutup     │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│  9. Neraca Saldo│\n│    Post-Closing │\n└────────┬────────┘\n         ▼\n┌─────────────────┐\n│ 10. Jurnal      │\n│     Pembalik    │\n└─────────────────┘',
          },
          {
            id: 'sa-debit-kredit',
            title: 'Aturan Debit dan Kredit',
            content: 'Dalam sistem akuntansi berpasangan (double-entry), setiap transaksi dicatat dengan minimal satu akun di sisi debit dan satu akun di sisi kredit. Total debit harus selalu sama dengan total kredit.',
            tables: [
              {
                caption: 'Aturan Debit & Kredit per Jenis Akun',
                headers: ['Jenis Akun', 'Saldo Normal', 'Bertambah', 'Berkurang'],
                rows: [
                  ['Aset', 'Debit', 'Debit', 'Kredit'],
                  ['Liabilitas', 'Kredit', 'Kredit', 'Debit'],
                  ['Ekuitas/Modal', 'Kredit', 'Kredit', 'Debit'],
                  ['Pendapatan', 'Kredit', 'Kredit', 'Debit'],
                  ['Beban', 'Debit', 'Debit', 'Kredit'],
                  ['Prive/Dividen', 'Debit', 'Debit', 'Kredit'],
                ],
              },
            ],
            examples: [
              'PT ABC membeli peralatan Rp50 juta secara tunai → Debit: Peralatan Rp50 juta, Kredit: Kas Rp50 juta',
              'PT ABC menerima pendapatan jasa Rp20 juta secara kredit → Debit: Piutang Usaha Rp20 juta, Kredit: Pendapatan Jasa Rp20 juta',
              'PT ABC membayar gaji karyawan Rp10 juta → Debit: Beban Gaji Rp10 juta, Kredit: Kas Rp10 juta',
            ],
            warning: 'INGAT: Debit tidak selalu berarti bertambah! Debit berarti bertambah untuk aset dan beban, tetapi berkurang untuk liabilitas, ekuitas, dan pendapatan.',
          },
          {
            id: 'sa-penyesuaian',
            title: 'Jenis-Jenis Jurnal Penyesuaian',
            content: 'Jurnal penyesuaian diperlukan untuk memastikan pendapatan dan beban diakui pada periode yang tepat sesuai basis akrual.',
            tables: [
              {
                caption: 'Jenis Jurnal Penyesuaian',
                headers: ['Jenis', 'Penjelasan', 'Contoh Jurnal'],
                rows: [
                  ['Beban Akrual (Accrued Expenses)', 'Beban sudah terjadi tapi belum dibayar/dicatat', 'Dr. Beban Gaji, Cr. Utang Gaji'],
                  ['Pendapatan Akrual (Accrued Revenue)', 'Pendapatan sudah dihasilkan tapi belum diterima/dicatat', 'Dr. Piutang Bunga, Cr. Pendapatan Bunga'],
                  ['Beban Dibayar di Muka (Prepaid Expenses)', 'Kas sudah dibayar tapi manfaat belum dinikmati seluruhnya', 'Dr. Beban Asuransi, Cr. Asuransi Dibayar di Muka'],
                  ['Pendapatan Diterima di Muka (Unearned Revenue)', 'Kas sudah diterima tapi jasa belum diberikan seluruhnya', 'Dr. Pendapatan Diterima di Muka, Cr. Pendapatan Jasa'],
                  ['Estimasi (Penyusutan)', 'Alokasi biaya aset tetap selama umur manfaat', 'Dr. Beban Penyusutan, Cr. Akumulasi Penyusutan'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'badan-usaha',
        title: 'Jenis-Jenis Badan Usaha',
        description: 'Pemahaman tentang berbagai bentuk badan usaha penting karena masing-masing memiliki karakteristik hukum, perpajakan, dan akuntansi yang berbeda.',
        sections: [
          {
            id: 'bu-perbandingan',
            title: 'Perbandingan Bentuk Badan Usaha',
            content: 'Di Indonesia terdapat beberapa bentuk badan usaha dengan karakteristik yang berbeda-beda.',
            tables: [
              {
                caption: 'Perbandingan Bentuk Badan Usaha di Indonesia',
                headers: ['Aspek', 'Perseorangan', 'Firma (Fa)', 'CV', 'PT'],
                rows: [
                  ['Badan Hukum', 'Bukan', 'Bukan', 'Bukan', 'Badan hukum'],
                  ['Pemilik', '1 orang', '≥2 sekutu aktif', 'Sekutu aktif + pasif', 'Pemegang saham'],
                  ['Tanggung Jawab', 'Tidak terbatas', 'Tidak terbatas (tanggung renteng)', 'Aktif: tidak terbatas; Pasif: terbatas', 'Terbatas (sebesar modal disetor)'],
                  ['Modal Minimum', 'Tidak ada', 'Tidak ada', 'Tidak ada', 'Rp50 juta (UU 40/2007)'],
                  ['Pajak', 'PPh Orang Pribadi', 'PPh Orang Pribadi (masing-masing sekutu)', 'PPh Orang Pribadi / Badan', 'PPh Badan (22%)'],
                  ['Kelangsungan', 'Terikat pemilik', 'Terikat sekutu', 'Terikat sekutu', 'Berkelanjutan (perpetual)'],
                  ['Pendirian', 'Mudah, tanpa akta', 'Akta notaris', 'Akta notaris', 'Akta notaris + pengesahan Kemenkumham'],
                  ['Pengalihan Kepemilikan', 'Tidak bisa dialihkan', 'Persetujuan semua sekutu', 'Persetujuan sekutu aktif', 'Bebas (jual beli saham)'],
                ],
              },
            ],
          },
          {
            id: 'bu-gcg',
            title: 'Good Corporate Governance (GCG)',
            content: 'Good Corporate Governance (GCG) adalah sistem tata kelola perusahaan yang mengatur hubungan antara pemegang saham, dewan komisaris, direksi, dan pemangku kepentingan lainnya. GCG bertujuan untuk meningkatkan transparansi, akuntabilitas, dan perlindungan pemangku kepentingan.',
            tables: [
              {
                caption: 'Prinsip GCG — TARIF',
                headers: ['Prinsip', 'Penjelasan', 'Implementasi'],
                rows: [
                  ['Transparency', 'Keterbukaan dalam pengungkapan informasi material dan relevan', 'Publikasi laporan keuangan, pengungkapan transaksi pihak berelasi, RUPS terbuka'],
                  ['Accountability', 'Kejelasan fungsi, pelaksanaan, dan pertanggungjawaban organ perusahaan', 'Job description jelas, SOP tertulis, audit internal rutin'],
                  ['Responsibility', 'Kepatuhan terhadap peraturan perundang-undangan dan tanggung jawab sosial', 'Kepatuhan pajak, CSR, kepatuhan lingkungan hidup'],
                  ['Independency', 'Pengelolaan perusahaan secara profesional tanpa benturan kepentingan', 'Komisaris independen minimal 30%, komite audit independen'],
                  ['Fairness', 'Keadilan dan kesetaraan dalam memenuhi hak pemangku kepentingan', 'Perlakuan setara bagi pemegang saham minoritas, ESOP'],
                ],
              },
            ],
            notes: ['Mnemonic TARIF: Transparency, Accountability, Responsibility, Independency, Fairness'],
          },
        ],
      },
      {
        id: 'laporan-keuangan',
        title: 'Laporan Keuangan Lengkap',
        description: 'Menurut PSAK 201 (IAS 1), satu set lengkap laporan keuangan terdiri dari lima komponen utama yang saling berkaitan dan memberikan gambaran menyeluruh tentang posisi dan kinerja keuangan entitas.',
        sections: [
          {
            id: 'lk-komponen',
            title: '5 Komponen Laporan Keuangan',
            content: 'Setiap entitas wajib menyajikan laporan keuangan lengkap yang terdiri dari lima komponen berikut.',
            tables: [
              {
                caption: '5 Komponen Laporan Keuangan Lengkap',
                headers: ['No', 'Komponen', 'Tujuan', 'Format'],
                rows: [
                  ['1', 'Laporan Posisi Keuangan (Neraca)', 'Menunjukkan posisi aset, liabilitas, dan ekuitas pada tanggal tertentu', 'Aset = Liabilitas + Ekuitas'],
                  ['2', 'Laporan Laba Rugi & Penghasilan Komprehensif Lain', 'Menunjukkan kinerja keuangan selama satu periode', 'Pendapatan - Beban = Laba/Rugi + OCI'],
                  ['3', 'Laporan Perubahan Ekuitas', 'Menunjukkan perubahan ekuitas selama satu periode', 'Saldo awal + Laba - Dividen ± OCI = Saldo akhir'],
                  ['4', 'Laporan Arus Kas', 'Menunjukkan arus kas masuk dan keluar selama satu periode', 'Operasi + Investasi + Pendanaan = Perubahan Kas'],
                  ['5', 'Catatan atas Laporan Keuangan (CALK)', 'Memberikan informasi tambahan dan penjelasan pos-pos laporan keuangan', 'Kebijakan akuntansi, rincian pos, pengungkapan'],
                ],
              },
            ],
          },
          {
            id: 'lk-neraca',
            title: 'Format Laporan Posisi Keuangan',
            content: 'Laporan Posisi Keuangan menyajikan informasi tentang aset, liabilitas, dan ekuitas pada tanggal pelaporan. Aset dan liabilitas diklasifikasikan sebagai lancar dan tidak lancar.',
            tables: [
              {
                caption: 'Format Laporan Posisi Keuangan (Neraca) — Contoh',
                headers: ['Pos', 'Catatan', 'Tahun Berjalan (Rp juta)', 'Tahun Lalu (Rp juta)'],
                rows: [
                  ['ASET LANCAR', '', '', ''],
                  ['  Kas dan setara kas', '3', '1.500', '1.200'],
                  ['  Piutang usaha', '4', '800', '650'],
                  ['  Persediaan', '5', '1.200', '1.000'],
                  ['  Beban dibayar di muka', '6', '100', '80'],
                  ['Total Aset Lancar', '', '3.600', '2.930'],
                  ['ASET TIDAK LANCAR', '', '', ''],
                  ['  Aset tetap (neto)', '7', '5.000', '4.500'],
                  ['  Aset takberwujud', '8', '500', '400'],
                  ['Total Aset Tidak Lancar', '', '5.500', '4.900'],
                  ['TOTAL ASET', '', '9.100', '7.830'],
                  ['LIABILITAS JANGKA PENDEK', '', '', ''],
                  ['  Utang usaha', '9', '600', '500'],
                  ['  Utang pajak', '10', '200', '150'],
                  ['Total Liabilitas Jangka Pendek', '', '800', '650'],
                  ['LIABILITAS JANGKA PANJANG', '', '', ''],
                  ['  Utang bank jangka panjang', '11', '2.000', '1.800'],
                  ['Total Liabilitas Jangka Panjang', '', '2.000', '1.800'],
                  ['TOTAL LIABILITAS', '', '2.800', '2.450'],
                  ['EKUITAS', '', '', ''],
                  ['  Modal saham', '12', '3.000', '3.000'],
                  ['  Laba ditahan', '', '3.300', '2.380'],
                  ['TOTAL EKUITAS', '', '6.300', '5.380'],
                  ['TOTAL LIABILITAS & EKUITAS', '', '9.100', '7.830'],
                ],
              },
            ],
            rules: [
              'Aset lancar: diharapkan direalisasikan dalam siklus operasi normal atau 12 bulan setelah tanggal pelaporan.',
              'Liabilitas jangka pendek: jatuh tempo dalam siklus operasi normal atau 12 bulan setelah tanggal pelaporan.',
              'Penyajian komparatif wajib (minimal 2 periode).',
            ],
          },
          {
            id: 'lk-laba-rugi',
            title: 'Format Laporan Laba Rugi',
            content: 'Laporan Laba Rugi dan Penghasilan Komprehensif Lain menunjukkan kinerja keuangan entitas selama satu periode. Dapat disajikan dalam satu laporan atau dua laporan terpisah.',
            tables: [
              {
                caption: 'Format Laporan Laba Rugi — Contoh',
                headers: ['Pos', 'Tahun Berjalan (Rp juta)'],
                rows: [
                  ['Pendapatan usaha', '10.000'],
                  ['Harga Pokok Penjualan (HPP)', '(6.000)'],
                  ['Laba Kotor', '4.000'],
                  ['Beban penjualan', '(800)'],
                  ['Beban administrasi & umum', '(1.200)'],
                  ['Laba Usaha (EBIT)', '2.000'],
                  ['Pendapatan bunga', '50'],
                  ['Beban bunga', '(200)'],
                  ['Laba Sebelum Pajak', '1.850'],
                  ['Beban pajak penghasilan', '(407)'],
                  ['Laba Bersih', '1.443'],
                  ['Penghasilan Komprehensif Lain:', ''],
                  ['  Surplus revaluasi aset tetap', '200'],
                  ['  Pajak terkait OCI', '(44)'],
                  ['Total Penghasilan Komprehensif', '1.599'],
                ],
              },
            ],
          },
          {
            id: 'lk-arus-kas',
            title: 'Laporan Arus Kas',
            content: 'Laporan arus kas menyajikan informasi arus kas masuk dan keluar selama satu periode, diklasifikasikan menjadi aktivitas operasi, investasi, dan pendanaan.',
            tables: [
              {
                caption: 'Klasifikasi Aktivitas Arus Kas',
                headers: ['Aktivitas', 'Contoh Arus Masuk', 'Contoh Arus Keluar'],
                rows: [
                  ['Operasi', 'Penerimaan kas dari pelanggan, penerimaan bunga/dividen', 'Pembayaran ke pemasok, pembayaran gaji, pembayaran pajak'],
                  ['Investasi', 'Penjualan aset tetap, penjualan investasi', 'Pembelian aset tetap, pembelian investasi saham/obligasi'],
                  ['Pendanaan', 'Penerbitan saham, penerimaan pinjaman bank', 'Pembayaran dividen, pelunasan pinjaman, pembelian kembali saham'],
                ],
              },
              {
                caption: 'Metode Langsung vs Tidak Langsung (Aktivitas Operasi)',
                headers: ['Aspek', 'Metode Langsung', 'Metode Tidak Langsung'],
                rows: [
                  ['Pendekatan', 'Merinci penerimaan dan pembayaran kas bruto', 'Dimulai dari laba bersih, disesuaikan dengan pos non-kas'],
                  ['Penyesuaian', 'Tidak perlu rekonsiliasi dari laba bersih', 'Penyusutan, perubahan modal kerja, pos non-kas lainnya'],
                  ['Preferensi PSAK', 'Dianjurkan', 'Lebih umum digunakan dalam praktik'],
                  ['Informasi', 'Lebih informatif (rincian sumber kas)', 'Lebih mudah disusun dari data yang tersedia'],
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // =============================================
  // AKUNTANSI KEUANGAN DASAR
  // =============================================
  {
    subjectId: 'akuntansi-keuangan-dasar',
    chapters: [
      {
        id: 'kas-bank',
        title: 'Kas & Rekonsiliasi Bank',
        description: 'Kas merupakan aset paling likuid dan rentan terhadap kecurangan. Rekonsiliasi bank adalah prosedur pengendalian internal untuk memverifikasi saldo kas di catatan perusahaan dengan saldo di rekening koran bank.',
        sections: [
          {
            id: 'kb-rekonsiliasi',
            title: 'Prosedur Rekonsiliasi Bank',
            content: 'Rekonsiliasi bank membandingkan saldo kas menurut catatan perusahaan dengan saldo menurut rekening koran bank, dan mengidentifikasi perbedaan-perbedaan yang ada.',
            steps: [
              'Bandingkan saldo per buku (catatan perusahaan) dengan saldo per bank (rekening koran).',
              'Identifikasi setoran dalam perjalanan (deposit in transit) — sudah dicatat perusahaan, belum masuk rekening koran.',
              'Identifikasi cek yang masih beredar (outstanding checks) — sudah dicatat perusahaan, belum dikliringkan bank.',
              'Identifikasi transaksi yang sudah dicatat bank tapi belum dicatat perusahaan: jasa giro, biaya administrasi, pendebitan otomatis.',
              'Identifikasi kesalahan pencatatan baik di buku maupun di bank.',
              'Hitung saldo yang benar (adjusted/correct balance) untuk kedua sisi.',
              'Buat jurnal penyesuaian untuk item-item yang menyesuaikan saldo per buku.',
            ],
            tables: [
              {
                caption: 'Format Rekonsiliasi Bank — Dua Kolom',
                headers: ['Saldo Per Bank', 'Rp', 'Saldo Per Buku', 'Rp'],
                rows: [
                  ['Saldo per rekening koran', '15.000.000', 'Saldo per buku besar', '13.500.000'],
                  ['(+) Setoran dalam perjalanan', '2.000.000', '(+) Jasa giro', '150.000'],
                  ['(-) Cek beredar', '(3.500.000)', '(+) Penagihan wesel oleh bank', '1.000.000'],
                  ['', '', '(-) Biaya administrasi bank', '(50.000)'],
                  ['', '', '(-) Cek kosong (NSF)', '(600.000)'],
                  ['Saldo yang benar', '13.500.000', 'Saldo yang benar', '14.000.000'],
                ],
              },
            ],
            examples: [
              'Jurnal untuk jasa giro: Dr. Kas Rp150.000, Cr. Pendapatan Bunga Rp150.000',
              'Jurnal untuk biaya admin bank: Dr. Beban Administrasi Bank Rp50.000, Cr. Kas Rp50.000',
              'Jurnal untuk cek kosong (NSF): Dr. Piutang Usaha Rp600.000, Cr. Kas Rp600.000',
            ],
            warning: 'Hanya item yang menyesuaikan saldo per buku yang memerlukan jurnal penyesuaian. Setoran dalam perjalanan dan cek beredar TIDAK memerlukan jurnal penyesuaian.',
          },
        ],
      },
      {
        id: 'piutang',
        title: 'Piutang Usaha',
        description: 'Piutang usaha merupakan klaim terhadap pelanggan yang timbul dari penjualan barang atau jasa secara kredit. Manajemen piutang yang baik meliputi penilaian kolektibilitas dan pencadangan piutang tak tertagih.',
        sections: [
          {
            id: 'pt-metode',
            title: 'Metode Pencadangan Piutang Tak Tertagih',
            content: 'Terdapat dua metode utama untuk mencatat piutang tak tertagih: metode penghapusan langsung (direct write-off) dan metode pencadangan (allowance method). PSAK mengharuskan penggunaan metode pencadangan.',
            tables: [
              {
                caption: 'Perbandingan Metode Piutang Tak Tertagih',
                headers: ['Aspek', 'Metode Penghapusan Langsung', 'Metode Pencadangan (Allowance)'],
                rows: [
                  ['Pengakuan beban', 'Saat piutang dinyatakan tak tertagih', 'Diestimasi setiap akhir periode'],
                  ['Jurnal cadangan', 'Tidak ada', 'Dr. Beban Piutang Tak Tertagih, Cr. Cadangan Kerugian Piutang'],
                  ['Jurnal penghapusan', 'Dr. Beban Piutang Tak Tertagih, Cr. Piutang Usaha', 'Dr. Cadangan Kerugian Piutang, Cr. Piutang Usaha'],
                  ['Prinsip penandingan', 'Tidak memenuhi', 'Memenuhi (matching principle)'],
                  ['Sesuai PSAK?', 'Tidak (hanya untuk pajak)', 'Ya (wajib untuk pelaporan keuangan)'],
                ],
              },
            ],
          },
          {
            id: 'pt-aging',
            title: 'Aging Schedule (Analisis Umur Piutang)',
            content: 'Aging schedule mengelompokkan piutang berdasarkan lamanya piutang beredar, kemudian menerapkan persentase estimasi tak tertagih yang berbeda untuk setiap kelompok umur.',
            tables: [
              {
                caption: 'Contoh Aging Schedule',
                headers: ['Umur Piutang', 'Jumlah (Rp juta)', '% Tak Tertagih', 'Estimasi Tak Tertagih (Rp juta)'],
                rows: [
                  ['Belum jatuh tempo', '500', '1%', '5'],
                  ['1-30 hari lewat jatuh tempo', '200', '3%', '6'],
                  ['31-60 hari', '100', '10%', '10'],
                  ['61-90 hari', '50', '25%', '12,5'],
                  ['> 90 hari', '30', '50%', '15'],
                  ['Total', '880', '', '48,5'],
                ],
              },
            ],
            examples: [
              'Jika saldo Cadangan Kerugian Piutang saat ini (sebelum penyesuaian) adalah Rp10 juta (kredit), maka jurnal penyesuaian: Dr. Beban Piutang Tak Tertagih Rp38,5 juta, Cr. Cadangan Kerugian Piutang Rp38,5 juta (sehingga saldo cadangan menjadi Rp48,5 juta).',
            ],
          },
        ],
      },
      {
        id: 'persediaan',
        title: 'Persediaan',
        description: 'Persediaan (PSAK 14/IAS 2) merupakan aset yang dimiliki untuk dijual dalam kegiatan usaha normal, dalam proses produksi untuk penjualan, atau dalam bentuk bahan/perlengkapan untuk digunakan dalam proses produksi atau pemberian jasa.',
        sections: [
          {
            id: 'ps-metode',
            title: 'Metode Penentuan Biaya Persediaan',
            content: 'PSAK 14 (IAS 2) mengizinkan dua metode penentuan biaya persediaan: FIFO dan rata-rata tertimbang. Metode LIFO tidak diperbolehkan.',
            tables: [
              {
                caption: 'Perbandingan Metode Biaya Persediaan',
                headers: ['Aspek', 'FIFO (First In First Out)', 'Rata-rata Tertimbang'],
                rows: [
                  ['Prinsip', 'Barang yang masuk pertama dianggap keluar pertama', 'Biaya rata-rata dari semua barang yang tersedia'],
                  ['Persediaan akhir', 'Mencerminkan harga terbaru (lebih relevan)', 'Mencerminkan harga rata-rata'],
                  ['HPP', 'Mencerminkan harga lama', 'Mencerminkan harga rata-rata'],
                  ['Saat inflasi → Laba', 'Lebih tinggi', 'Moderat'],
                  ['Saat inflasi → Pajak', 'Lebih tinggi', 'Moderat'],
                  ['Diizinkan PSAK 14?', 'Ya', 'Ya'],
                  ['LIFO diizinkan?', 'Tidak (dilarang PSAK 14)', 'Tidak (dilarang PSAK 14)'],
                ],
              },
            ],
            examples: [
              'Persediaan awal: 100 unit @ Rp10.000 = Rp1.000.000. Pembelian: 150 unit @ Rp12.000 = Rp1.800.000. Penjualan: 120 unit. FIFO HPP = 100×10.000 + 20×12.000 = Rp1.240.000. Rata-rata HPP = 120 × (2.800.000/250) = 120 × 11.200 = Rp1.344.000.',
            ],
            warning: 'LIFO (Last In First Out) DILARANG dalam PSAK 14 (IAS 2). Hanya FIFO dan rata-rata tertimbang yang diizinkan. LIFO masih digunakan di US GAAP.',
          },
          {
            id: 'ps-lcnrv',
            title: 'Penilaian Persediaan: Lower of Cost and NRV',
            content: 'Persediaan diukur pada nilai yang lebih rendah antara biaya perolehan (cost) dan nilai realisasi neto (Net Realisable Value/NRV). NRV = Estimasi harga jual - Estimasi biaya penyelesaian - Estimasi biaya penjualan.',
            formula: 'NRV = Estimasi Harga Jual − Estimasi Biaya Penyelesaian − Estimasi Biaya Penjualan\n\nNilai Persediaan = MIN(Cost, NRV)',
            rules: [
              'Penurunan nilai persediaan diakui sebagai beban pada periode terjadinya penurunan.',
              'Pemulihan penurunan nilai diperbolehkan (terbatas sampai biaya perolehan awal).',
              'Pengujian dilakukan per item atau per kelompok item yang serupa.',
            ],
            examples: [
              'Persediaan A: Cost Rp100 juta, NRV Rp85 juta → Nilai = Rp85 juta (turun Rp15 juta). Jurnal: Dr. Beban Penurunan Nilai Persediaan Rp15 juta, Cr. Persediaan/Cadangan Rp15 juta.',
            ],
          },
        ],
      },
      {
        id: 'aset-tetap',
        title: 'Aset Tetap',
        description: 'Aset tetap (PSAK 16/IAS 16) adalah aset berwujud yang dimiliki untuk digunakan dalam produksi atau penyediaan barang/jasa, disewakan, atau untuk tujuan administratif, dan diharapkan digunakan lebih dari satu periode.',
        sections: [
          {
            id: 'at-perolehan',
            title: 'Komponen Biaya Perolehan',
            content: 'Biaya perolehan aset tetap meliputi seluruh biaya yang diperlukan agar aset siap digunakan sesuai intensi manajemen.',
            rules: [
              'Harga beli (setelah diskon dan potongan).',
              'Bea impor dan pajak yang tidak dapat dikreditkan.',
              'Biaya penanganan dan pengiriman awal.',
              'Biaya pemasangan dan perakitan.',
              'Biaya pengujian apakah aset berfungsi baik.',
              'Estimasi awal biaya pembongkaran dan restorasi lokasi (provisi).',
              'Biaya pinjaman yang memenuhi syarat kapitalisasi (PSAK 26/IAS 23).',
            ],
            warning: 'Biaya yang TIDAK boleh dikapitalisasi: biaya pembukaan fasilitas baru, biaya pengenalan produk baru, biaya administrasi dan overhead umum, kerugian operasional awal sebelum aset mencapai kinerja yang direncanakan.',
          },
          {
            id: 'at-penyusutan',
            title: 'Metode Penyusutan',
            content: 'Penyusutan adalah alokasi sistematis biaya perolehan aset tetap (dikurangi nilai residu) selama umur manfaatnya. PSAK 16 mengizinkan beberapa metode penyusutan.',
            tables: [
              {
                caption: 'Metode Penyusutan (PSAK 16)',
                headers: ['Metode', 'Rumus', 'Karakteristik'],
                rows: [
                  ['Garis Lurus (Straight-Line)', '(Biaya - Nilai Residu) ÷ Umur Manfaat', 'Beban penyusutan konstan setiap periode'],
                  ['Saldo Menurun (Declining Balance)', 'Nilai Buku × Tarif Penyusutan', 'Beban penyusutan menurun setiap periode (akselerasi)'],
                  ['Saldo Menurun Ganda (Double Declining)', 'Nilai Buku × (2 ÷ Umur Manfaat)', 'Tarif 2x lipat dari garis lurus, nilai residu diabaikan di awal'],
                  ['Unit Produksi (Units of Production)', '(Biaya - Nilai Residu) × (Unit Aktual ÷ Total Estimasi Unit)', 'Beban penyusutan proporsional terhadap output'],
                ],
              },
            ],
            formula: 'Garis Lurus:\n  Penyusutan/tahun = (Biaya Perolehan - Nilai Residu) ÷ Umur Manfaat\n\nSaldo Menurun Ganda:\n  Penyusutan/tahun = Nilai Buku Awal Tahun × (2 ÷ Umur Manfaat)\n\nUnit Produksi:\n  Tarif/unit = (Biaya Perolehan - Nilai Residu) ÷ Total Estimasi Unit\n  Penyusutan = Tarif/unit × Unit yang Diproduksi',
            examples: [
              'Mesin dibeli Rp500 juta, nilai residu Rp50 juta, umur manfaat 10 tahun. Garis lurus: (500-50)/10 = Rp45 juta/tahun. DDB tahun 1: 500 × 20% = Rp100 juta. DDB tahun 2: (500-100) × 20% = Rp80 juta.',
            ],
          },
          {
            id: 'at-model',
            title: 'Model Pengukuran Setelah Pengakuan Awal',
            content: 'Setelah pengakuan awal, entitas memilih salah satu dari dua model pengukuran dan menerapkannya secara konsisten untuk seluruh kelas aset tetap.',
            tables: [
              {
                caption: 'Model Biaya vs Model Revaluasi',
                headers: ['Aspek', 'Model Biaya (Cost Model)', 'Model Revaluasi (Revaluation Model)'],
                rows: [
                  ['Pengukuran', 'Biaya perolehan - Akumulasi Penyusutan - Akumulasi Rugi Penurunan Nilai', 'Nilai wajar pada tanggal revaluasi - Akumulasi Penyusutan - Akumulasi Rugi Penurunan Nilai setelah revaluasi'],
                  ['Surplus revaluasi', 'Tidak ada', 'Diakui di OCI → Surplus Revaluasi (Ekuitas)'],
                  ['Penurunan revaluasi', 'Diakui sebagai rugi penurunan nilai', 'Pertama mengurangi surplus revaluasi, sisanya ke laba rugi'],
                  ['Frekuensi', 'Tidak perlu revaluasi', 'Harus cukup teratur agar nilai tercatat ≈ nilai wajar'],
                  ['Konsistensi', 'Per kelas aset tetap', 'Per kelas aset tetap'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'liabilitas',
        title: 'Liabilitas',
        description: 'Liabilitas adalah kewajiban kini entitas yang timbul dari peristiwa masa lalu, yang penyelesaiannya diperkirakan mengakibatkan arus keluar sumber daya ekonomi.',
        sections: [
          {
            id: 'lb-klasifikasi',
            title: 'Klasifikasi Liabilitas',
            content: 'Liabilitas diklasifikasikan sebagai jangka pendek atau jangka panjang berdasarkan jatuh temponya.',
            tables: [
              {
                caption: 'Klasifikasi Liabilitas',
                headers: ['Liabilitas Jangka Pendek', 'Liabilitas Jangka Panjang'],
                rows: [
                  ['Utang usaha (accounts payable)', 'Utang bank jangka panjang (long-term loans)'],
                  ['Utang gaji (salaries payable)', 'Utang obligasi (bonds payable)'],
                  ['Utang pajak (tax payable)', 'Liabilitas sewa (lease liabilities)'],
                  ['Pendapatan diterima di muka (unearned revenue)', 'Liabilitas imbalan pasca kerja'],
                  ['Bagian jangka pendek utang jangka panjang', 'Liabilitas pajak tangguhan (deferred tax)'],
                  ['Utang dividen (dividends payable)', 'Provisi jangka panjang'],
                ],
              },
            ],
            rules: [
              'Liabilitas diklasifikasikan jangka pendek jika: (a) diperkirakan diselesaikan dalam siklus operasi normal, (b) dimiliki untuk diperdagangkan, (c) jatuh tempo dalam 12 bulan, atau (d) tidak ada hak tanpa syarat untuk menunda penyelesaian minimal 12 bulan.',
              'Refinancing setelah tanggal pelaporan tetapi sebelum penerbitan laporan keuangan TIDAK mengubah klasifikasi.',
            ],
          },
        ],
      },
    ],
  },
  // =============================================
  // PELAPORAN KORPORAT (PSAK/IFRS Heavy)
  // =============================================
  {
    subjectId: 'pelaporan-korporat',
    chapters: [
      {
        id: 'psak-201',
        title: 'PSAK 201 (IAS 1) — Penyajian Laporan Keuangan',
        description: 'PSAK 201 menetapkan dasar penyajian laporan keuangan bertujuan umum agar dapat dibandingkan baik dengan laporan keuangan periode sebelumnya maupun dengan laporan keuangan entitas lain.',
        sections: [
          {
            id: 'p201-prinsip',
            title: 'Prinsip Umum Penyajian',
            content: 'PSAK 201 menetapkan beberapa prinsip umum yang harus dipatuhi dalam penyajian laporan keuangan.',
            rules: [
              'Penyajian wajar (fair presentation): Menyajikan secara jujur dampak transaksi sesuai definisi dan kriteria pengakuan dalam Kerangka Konseptual.',
              'Kepatuhan terhadap SAK: Entitas yang mematuhi SAK harus membuat pernyataan eksplisit dan tanpa kecuali.',
              'Kelangsungan usaha (going concern): Laporan keuangan disusun atas dasar kelangsungan usaha kecuali ada intensi/kebutuhan untuk melikuidasi.',
              'Basis akrual: Seluruh pos diakui berdasarkan basis akrual (kecuali laporan arus kas).',
              'Materialitas dan agregasi: Pos-pos yang material disajikan terpisah, pos yang tidak material digabungkan.',
              'Saling hapus (offsetting): Aset dan liabilitas, pendapatan dan beban tidak boleh disaling-hapuskan kecuali diizinkan/diharuskan PSAK.',
              'Frekuensi pelaporan: Minimal satu tahun (12 bulan).',
              'Informasi komparatif: Minimal dua periode (tahun berjalan dan tahun sebelumnya).',
            ],
          },
          {
            id: 'p201-komponen',
            title: 'Komponen Laporan Keuangan Lengkap',
            content: 'Satu set lengkap laporan keuangan terdiri dari lima komponen wajib.',
            tables: [
              {
                caption: 'Komponen Laporan Keuangan Menurut PSAK 201',
                headers: ['No', 'Komponen', 'Isi Utama'],
                rows: [
                  ['1', 'Laporan Posisi Keuangan (akhir periode)', 'Aset, liabilitas, ekuitas per tanggal pelaporan'],
                  ['2', 'Laporan Laba Rugi dan Penghasilan Komprehensif Lain (selama periode)', 'Laba rugi + OCI (surplus revaluasi, remeasurement imbalan pasti, dll)'],
                  ['3', 'Laporan Perubahan Ekuitas (selama periode)', 'Total penghasilan komprehensif, transaksi dengan pemilik, perubahan kebijakan'],
                  ['4', 'Laporan Arus Kas (selama periode)', 'Arus kas dari aktivitas operasi, investasi, pendanaan'],
                  ['5', 'Catatan atas Laporan Keuangan', 'Kebijakan akuntansi signifikan, informasi tambahan, pengungkapan yang disyaratkan'],
                ],
              },
            ],
            notes: ['Jika entitas menerapkan kebijakan akuntansi secara retrospektif atau menyajikan kembali pos-pos, wajib menyajikan laporan posisi keuangan untuk awal periode komparatif paling awal (3 neraca).'],
          },
        ],
      },
      {
        id: 'psak-202',
        title: 'PSAK 202 (IAS 2) — Persediaan',
        description: 'PSAK 202 mengatur perlakuan akuntansi untuk persediaan, termasuk penentuan biaya, pengukuran, dan pengakuan sebagai beban.',
        sections: [
          {
            id: 'p202-biaya',
            title: 'Komponen Biaya Persediaan',
            content: 'Biaya persediaan meliputi seluruh biaya pembelian, biaya konversi, dan biaya lain yang timbul untuk membawa persediaan ke kondisi dan lokasi saat ini.',
            tables: [
              {
                caption: 'Komponen Biaya Persediaan',
                headers: ['Komponen', 'Termasuk', 'Tidak Termasuk'],
                rows: [
                  ['Biaya Pembelian', 'Harga beli, bea impor, pajak tidak dapat dikreditkan, transport, handling (dikurangi diskon, rabat, dan potongan)', 'Potongan tunai dan rabat dagang'],
                  ['Biaya Konversi', 'Biaya tenaga kerja langsung, overhead tetap & variabel yang dialokasikan secara sistematis', 'Kapasitas menganggur (idle capacity) — dibebankan ke laba rugi'],
                  ['Biaya Lain', 'Biaya yang timbul untuk membawa persediaan ke kondisi dan lokasi saat ini', 'Pemborosan bahan, tenaga kerja, overhead di atas normal; biaya penyimpanan (kecuali diperlukan proses produksi); beban administrasi yang tidak berkontribusi; biaya penjualan'],
                ],
              },
            ],
          },
          {
            id: 'p202-rumus',
            title: 'Rumus Biaya & Pengukuran',
            content: 'PSAK 202 mengizinkan dua metode alokasi biaya persediaan. LIFO secara tegas dilarang.',
            tables: [
              {
                caption: 'Metode Biaya Persediaan yang Diizinkan PSAK 202',
                headers: ['Metode', 'Penggunaan', 'Rumus'],
                rows: [
                  ['Identifikasi Khusus (Specific Identification)', 'Persediaan yang tidak dapat saling menggantikan, barang/jasa untuk proyek khusus', 'Biaya aktual masing-masing item'],
                  ['FIFO (First In, First Out)', 'Persediaan yang dapat saling menggantikan', 'Barang yang dibeli pertama dianggap dijual pertama'],
                  ['Rata-rata Tertimbang (Weighted Average)', 'Persediaan yang dapat saling menggantikan', 'Biaya rata-rata = Total biaya ÷ Total unit'],
                ],
              },
            ],
            formula: 'Lower of Cost and NRV:\n  Nilai Persediaan = MIN(Biaya Perolehan, NRV)\n  NRV = Estimasi Harga Jual − Estimasi Biaya Penyelesaian − Estimasi Biaya Penjualan',
            warning: 'LIFO (Last In, First Out) DILARANG menurut PSAK 202 (IAS 2). Jangan memilih LIFO di soal ujian tentang standar Indonesia!',
          },
        ],
      },
      {
        id: 'psak-207',
        title: 'PSAK 207 (IAS 7) — Laporan Arus Kas',
        description: 'PSAK 207 mengatur penyajian informasi tentang perubahan historis dalam kas dan setara kas melalui laporan arus kas yang mengklasifikasikan arus kas berdasarkan aktivitas operasi, investasi, dan pendanaan.',
        sections: [
          {
            id: 'p207-klasifikasi',
            title: 'Klasifikasi Arus Kas',
            content: 'Arus kas diklasifikasikan menjadi tiga aktivitas utama dengan aturan yang jelas.',
            tables: [
              {
                caption: 'Klasifikasi Arus Kas Menurut PSAK 207',
                headers: ['Aktivitas', 'Definisi', 'Contoh Arus Masuk', 'Contoh Arus Keluar'],
                rows: [
                  ['Operasi', 'Aktivitas penghasil utama pendapatan entitas', 'Penerimaan dari pelanggan; bunga diterima; dividen diterima', 'Pembayaran ke pemasok; gaji karyawan; pajak penghasilan'],
                  ['Investasi', 'Perolehan dan pelepasan aset jangka panjang', 'Penjualan aset tetap; penjualan investasi; penerimaan pinjaman yang diberikan', 'Pembelian aset tetap; pembelian investasi; pemberian pinjaman'],
                  ['Pendanaan', 'Aktivitas yang mengubah komposisi modal dan pinjaman', 'Penerbitan saham; penerimaan pinjaman bank', 'Pembayaran dividen; pelunasan pinjaman; pembelian saham treasuri'],
                ],
              },
            ],
            notes: ['Bunga dan dividen: PSAK 207 memberikan pilihan klasifikasi — bunga dibayar dapat masuk operasi ATAU pendanaan; dividen dibayar dapat masuk operasi ATAU pendanaan. Yang penting konsisten antar periode.'],
          },
          {
            id: 'p207-metode',
            title: 'Metode Langsung vs Tidak Langsung',
            content: 'Untuk menyajikan arus kas dari aktivitas operasi, entitas dapat memilih metode langsung (direct method) atau metode tidak langsung (indirect method).',
            tables: [
              {
                caption: 'Metode Langsung vs Tidak Langsung',
                headers: ['Aspek', 'Metode Langsung', 'Metode Tidak Langsung'],
                rows: [
                  ['Titik awal', 'Penerimaan kas bruto dan pembayaran kas bruto', 'Laba bersih (laba sebelum pajak)'],
                  ['Penyesuaian', 'Langsung menampilkan arus kas', 'Penyusutan (+), perubahan modal kerja, pos non-kas lainnya'],
                  ['Preferensi standar', 'Dianjurkan oleh PSAK 207', 'Lebih banyak digunakan dalam praktik'],
                  ['Kelebihan', 'Lebih informatif — pengguna melihat sumber dan penggunaan kas aktual', 'Lebih mudah disusun karena menggunakan data dari laporan laba rugi dan neraca'],
                ],
              },
            ],
            diagram: 'METODE TIDAK LANGSUNG — Aktivitas Operasi:\n┌──────────────────────────────────────┐\n│ Laba Bersih                     xxx  │\n│ (+) Penyusutan & Amortisasi     xxx  │\n│ (+) Rugi penjualan aset tetap   xxx  │\n│ (-) Laba penjualan aset tetap  (xxx) │\n│ Perubahan Modal Kerja:               │\n│   (-) Kenaikan piutang usaha   (xxx) │\n│   (-) Kenaikan persediaan      (xxx) │\n│   (+) Kenaikan utang usaha      xxx  │\n│   (+) Kenaikan utang gaji       xxx  │\n├──────────────────────────────────────┤\n│ Arus Kas dari Operasi           xxx  │\n└──────────────────────────────────────┘',
          },
        ],
      },
      {
        id: 'psak-216',
        title: 'PSAK 216 (IAS 16) — Aset Tetap',
        description: 'PSAK 216 mengatur pengakuan, pengukuran, penyusutan, dan penghentian pengakuan aset tetap.',
        sections: [
          {
            id: 'p216-pengakuan',
            title: 'Kriteria Pengakuan Aset Tetap',
            content: 'Aset tetap diakui ketika memenuhi dua kriteria pengakuan secara simultan.',
            rules: [
              'Besar kemungkinan (probable) manfaat ekonomik masa depan yang terkait dengan aset tersebut akan mengalir ke entitas.',
              'Biaya perolehan aset dapat diukur secara andal.',
              'Pengakuan berlaku untuk biaya perolehan awal maupun biaya setelah perolehan (subsequent costs).',
            ],
            tables: [
              {
                caption: 'Biaya Setelah Perolehan — Kapitalisasi vs Beban',
                headers: ['Jenis Pengeluaran', 'Perlakuan', 'Alasan'],
                rows: [
                  ['Penggantian komponen utama', 'Kapitalisasi (aset)', 'Meningkatkan masa manfaat atau kapasitas, komponen lama dihentikan pengakuannya'],
                  ['Overhaul besar', 'Kapitalisasi (aset)', 'Meningkatkan kapasitas atau memperpanjang umur manfaat secara signifikan'],
                  ['Penambahan/perluasan', 'Kapitalisasi (aset)', 'Menambah kapasitas atau fungsi baru'],
                  ['Pemeliharaan rutin', 'Beban periode', 'Hanya mempertahankan tingkat kinerja yang diharapkan'],
                  ['Perbaikan kecil', 'Beban periode', 'Tidak meningkatkan manfaat ekonomik masa depan'],
                ],
              },
            ],
          },
          {
            id: 'p216-derecognition',
            title: 'Penghentian Pengakuan (Derecognition)',
            content: 'Aset tetap dihentikan pengakuannya pada saat pelepasan atau ketika tidak ada manfaat ekonomik masa depan yang diharapkan dari penggunaan atau pelepasannya.',
            formula: 'Keuntungan/Kerugian Pelepasan = Hasil Penjualan Neto − Nilai Tercatat\n\nNilai Tercatat = Biaya Perolehan − Akumulasi Penyusutan − Akumulasi Rugi Penurunan Nilai',
            examples: [
              'Mesin dibeli Rp200 juta, akumulasi penyusutan Rp150 juta, dijual Rp70 juta. Nilai tercatat = 200 - 150 = Rp50 juta. Keuntungan = 70 - 50 = Rp20 juta. Jurnal: Dr. Kas 70 juta, Dr. Akumulasi Penyusutan 150 juta, Cr. Mesin 200 juta, Cr. Keuntungan Pelepasan Aset 20 juta.',
            ],
          },
        ],
      },
      {
        id: 'psak-212',
        title: 'PSAK 212 (IAS 12) — Pajak Penghasilan',
        description: 'PSAK 212 mengatur perlakuan akuntansi pajak penghasilan, khususnya bagaimana mencatat konsekuensi pajak kini dan masa depan dari pemulihan/penyelesaian nilai tercatat aset/liabilitas.',
        sections: [
          {
            id: 'p212-konsep',
            title: 'Konsep Pajak Tangguhan',
            content: 'Pajak tangguhan timbul dari perbedaan temporer antara nilai tercatat aset/liabilitas di laporan keuangan (basis akuntansi) dengan dasar pengenaan pajak (basis pajak/tax base).',
            tables: [
              {
                caption: 'Perbedaan Temporer vs Perbedaan Permanen',
                headers: ['Jenis', 'Definisi', 'Dampak Pajak Tangguhan', 'Contoh'],
                rows: [
                  ['Perbedaan Temporer Kena Pajak', 'Menghasilkan jumlah kena pajak di masa depan saat nilai tercatat aset/liabilitas dipulihkan/diselesaikan', 'Liabilitas Pajak Tangguhan (DTA/DTL)', 'Penyusutan fiskal > komersial → aset tetap basis pajak < basis akuntansi'],
                  ['Perbedaan Temporer Dapat Dikurangkan', 'Menghasilkan jumlah yang dapat dikurangkan di masa depan', 'Aset Pajak Tangguhan (DTA)', 'Provisi (diakui akuntansi, belum dikurangkan pajak)'],
                  ['Perbedaan Permanen', 'Tidak pernah terbalik di masa depan', 'Tidak ada pajak tangguhan', 'Penghasilan final (PPh pasal 4 ayat 2), sumbangan yang tidak dapat dikurangkan'],
                ],
              },
            ],
            formula: 'Pajak Tangguhan = Perbedaan Temporer × Tarif Pajak\n\nBeban Pajak = Pajak Kini + Perubahan Liabilitas Pajak Tangguhan − Perubahan Aset Pajak Tangguhan',
            examples: [
              'Aset tetap: Nilai tercatat Rp800 juta, Basis pajak Rp600 juta → Perbedaan temporer kena pajak = Rp200 juta → DTL = 200 × 22% = Rp44 juta.',
              'Provisi garansi: Nilai tercatat Rp100 juta (liabilitas), Basis pajak Rp0 (belum bisa dikurangkan) → Perbedaan temporer dapat dikurangkan = Rp100 juta → DTA = 100 × 22% = Rp22 juta.',
            ],
          },
        ],
      },
      {
        id: 'psak-109',
        title: 'PSAK 109 (IFRS 9) — Instrumen Keuangan',
        description: 'PSAK 109 mengatur klasifikasi, pengukuran, penurunan nilai (impairment), dan penghentian pengakuan instrumen keuangan.',
        sections: [
          {
            id: 'p109-klasifikasi',
            title: 'Klasifikasi Aset Keuangan',
            content: 'Aset keuangan diklasifikasikan berdasarkan dua kriteria: (1) model bisnis entitas untuk mengelola aset keuangan, dan (2) karakteristik arus kas kontraktual (SPPI test — Solely Payments of Principal and Interest).',
            tables: [
              {
                caption: 'Klasifikasi Aset Keuangan — PSAK 109',
                headers: ['Kategori', 'Model Bisnis', 'SPPI Test', 'Pengukuran Selanjutnya', 'Pengakuan Gain/Loss'],
                rows: [
                  ['Amortized Cost (AC)', 'Hold to Collect', 'Lulus', 'Biaya perolehan diamortisasi (effective interest method)', 'Laba rugi (bunga efektif, ECL, selisih kurs)'],
                  ['FVOCI (Fair Value through OCI)', 'Hold to Collect AND Sell', 'Lulus', 'Nilai wajar', 'OCI (perubahan nilai wajar), laba rugi (bunga efektif, ECL)'],
                  ['FVTPL (Fair Value through P&L)', 'Lainnya / Designasi', 'Tidak lulus / Designasi', 'Nilai wajar', 'Seluruhnya ke laba rugi'],
                ],
              },
            ],
            diagram: 'Pohon Keputusan Klasifikasi Aset Keuangan:\n\n   Apakah arus kas kontraktual\n   hanya berupa SPPI?\n          │\n    ┌─────┴─────┐\n   Ya          Tidak\n    │            │\n    │         FVTPL\n    │\n   Model Bisnis?\n    │\n  ┌─┴───────────┐───────────────┐\n Hold to    Hold to Collect    Lainnya\n Collect     AND Sell            │\n  │              │             FVTPL\n  │              │\nAmortized     FVOCI\n  Cost',
          },
          {
            id: 'p109-ecl',
            title: 'Model Expected Credit Loss (ECL)',
            content: 'PSAK 109 menggunakan model Expected Credit Loss (ECL) untuk penurunan nilai aset keuangan, menggantikan model incurred loss. ECL bersifat forward-looking.',
            tables: [
              {
                caption: 'Tiga Tahap ECL — PSAK 109',
                headers: ['Tahap', 'Kondisi', 'Pengukuran Kerugian', 'Pengakuan Bunga'],
                rows: [
                  ['Stage 1 — Performing', 'Tidak ada peningkatan risiko kredit signifikan sejak pengakuan awal', '12-month ECL', 'Berdasarkan gross carrying amount'],
                  ['Stage 2 — Under-performing', 'Risiko kredit meningkat signifikan sejak pengakuan awal, tetapi belum terjadi gagal bayar', 'Lifetime ECL', 'Berdasarkan gross carrying amount'],
                  ['Stage 3 — Non-performing', 'Terjadi gagal bayar (credit-impaired)', 'Lifetime ECL', 'Berdasarkan net carrying amount (setelah dikurangi ECL)'],
                ],
              },
            ],
            notes: [
              'Simplified approach (lifetime ECL sejak awal) WAJIB untuk piutang usaha tanpa komponen pembiayaan signifikan, dan pilihan untuk piutang usaha dengan komponen pembiayaan signifikan serta aset kontrak.',
              'ECL dihitung sebagai: Probability of Default (PD) × Loss Given Default (LGD) × Exposure at Default (EAD), didiskontokan ke tanggal pelaporan.',
            ],
          },
        ],
      },
      {
        id: 'psak-115',
        title: 'PSAK 115 (IFRS 15) — Pendapatan dari Kontrak dengan Pelanggan',
        description: 'PSAK 115 menetapkan model lima langkah untuk pengakuan pendapatan yang berlaku untuk semua kontrak dengan pelanggan, menggantikan PSAK 23 dan PSAK 34 terdahulu.',
        sections: [
          {
            id: 'p115-lima-langkah',
            title: 'Model Lima Langkah Pengakuan Pendapatan',
            content: 'PSAK 115 memperkenalkan model pengakuan pendapatan yang terstruktur dan konsisten untuk seluruh jenis kontrak dengan pelanggan.',
            steps: [
              'Identifikasi Kontrak dengan Pelanggan — Kontrak harus memenuhi kriteria: persetujuan para pihak, identifikasi hak dan kewajiban, identifikasi syarat pembayaran, memiliki substansi komersial, besar kemungkinan entitas menerima imbalan.',
              'Identifikasi Kewajiban Pelaksanaan (Performance Obligations) — Identifikasi setiap barang/jasa yang dijanjikan yang bersifat distinct (dapat dibedakan). Barang/jasa bersifat distinct jika: (a) pelanggan dapat memperoleh manfaat sendiri atau bersama sumber daya lain, dan (b) janji untuk mengalihkan barang/jasa dapat diidentifikasi terpisah dari janji lain dalam kontrak.',
              'Tentukan Harga Transaksi — Jumlah imbalan yang diharapkan berhak diterima entitas. Pertimbangkan: imbalan variabel (diskon, rabat, pengembalian, bonus), komponen pembiayaan signifikan, imbalan nonkas, imbalan yang dibayarkan kepada pelanggan.',
              'Alokasikan Harga Transaksi — Alokasikan ke setiap kewajiban pelaksanaan berdasarkan harga jual berdiri sendiri (standalone selling price) relatif. Jika harga berdiri sendiri tidak dapat diobservasi langsung, gunakan estimasi (adjusted market assessment, expected cost plus margin, atau residual approach).',
              'Akui Pendapatan — Akui pendapatan ketika (atau selama) entitas memenuhi kewajiban pelaksanaan dengan mengalihkan barang/jasa yang dijanjikan. Pemenuhan dapat terjadi pada suatu waktu tertentu (point in time) atau sepanjang waktu (over time).',
            ],
            tables: [
              {
                caption: 'Point in Time vs Over Time — Kriteria',
                headers: ['Pengakuan', 'Kriteria', 'Contoh'],
                rows: [
                  ['Over Time (sepanjang waktu)', 'Pelanggan secara simultan menerima dan mengonsumsi manfaat', 'Jasa kebersihan, jasa konsultasi berkelanjutan'],
                  ['Over Time', 'Kinerja entitas menciptakan atau meningkatkan aset yang dikendalikan pelanggan', 'Konstruksi di atas tanah milik pelanggan'],
                  ['Over Time', 'Kinerja entitas tidak menciptakan aset dengan penggunaan alternatif DAN entitas memiliki hak atas pembayaran atas kinerja yang telah diselesaikan', 'Pembuatan perangkat lunak khusus pelanggan'],
                  ['Point in Time', 'Tidak memenuhi salah satu kriteria over time', 'Penjualan barang retail, lisensi right to use'],
                ],
              },
            ],
            diagram: '┌────────────────────────────────────────────┐\n│          MODEL LIMA LANGKAH                │\n│          PSAK 115 (IFRS 15)                │\n├────────────────────────────────────────────┤\n│ LANGKAH 1: Identifikasi Kontrak           │\n│     ↓                                      │\n│ LANGKAH 2: Identifikasi Kewajiban         │\n│            Pelaksanaan                     │\n│     ↓                                      │\n│ LANGKAH 3: Tentukan Harga Transaksi       │\n│     ↓                                      │\n│ LANGKAH 4: Alokasikan Harga ke            │\n│            Setiap Kewajiban                │\n│     ↓                                      │\n│ LANGKAH 5: Akui Pendapatan saat           │\n│            Kewajiban Terpenuhi             │\n└────────────────────────────────────────────┘',
          },
        ],
      },
      {
        id: 'psak-116',
        title: 'PSAK 116 (IFRS 16) — Sewa',
        description: 'PSAK 116 mengatur pengakuan, pengukuran, penyajian, dan pengungkapan sewa. Standar ini menghapus klasifikasi sewa operasi vs sewa pembiayaan bagi penyewa (lessee).',
        sections: [
          {
            id: 'p116-lessee',
            title: 'Akuntansi Penyewa (Lessee)',
            content: 'Penyewa mengakui aset hak-guna (right-of-use asset) dan liabilitas sewa untuk hampir semua sewa. Tidak ada lagi klasifikasi sewa operasi bagi penyewa.',
            steps: [
              'Pada tanggal dimulainya sewa, ukur liabilitas sewa = present value dari pembayaran sewa masa depan, didiskontokan dengan suku bunga implisit sewa (atau incremental borrowing rate jika suku bunga implisit tidak dapat ditentukan).',
              'Ukur aset hak-guna = liabilitas sewa + pembayaran sewa awal + biaya langsung awal + estimasi biaya pembongkaran/restorasi - insentif sewa yang diterima.',
              'Selama periode sewa: susutkan aset hak-guna secara garis lurus (atau metode lain yang sesuai). Akui beban bunga atas liabilitas sewa menggunakan effective interest method.',
              'Pembayaran sewa: alokasikan antara pengurangan liabilitas sewa dan beban bunga.',
            ],
            tables: [
              {
                caption: 'Dampak PSAK 116 pada Laporan Keuangan',
                headers: ['Laporan', 'Dampak', 'Penjelasan'],
                rows: [
                  ['Posisi Keuangan', 'Aset ↑', 'Pengakuan Right-of-Use (ROU) Asset'],
                  ['Posisi Keuangan', 'Liabilitas ↑', 'Pengakuan Liabilitas Sewa'],
                  ['Laba Rugi', 'Beban sewa → Penyusutan + Bunga', 'Beban front-loaded (beban lebih besar di awal masa sewa)'],
                  ['Arus Kas', 'Operasi ↑, Pendanaan ↓', 'Pembayaran pokok sewa pindah dari operasi ke pendanaan'],
                  ['Rasio', 'D/E ratio ↑', 'Penambahan liabilitas sewa meningkatkan leverage'],
                  ['Rasio', 'EBITDA ↑', 'Beban sewa tidak lagi mengurangi EBITDA (pindah ke penyusutan + bunga)'],
                ],
              },
            ],
            notes: [
              'Pengecualian (optional exemption): Sewa jangka pendek (≤ 12 bulan) dan sewa aset bernilai rendah (misalnya laptop, peralatan kantor kecil) dapat dibebankan langsung ke laba rugi.',
              'Bagi pesewa (lessor): klasifikasi sewa operasi vs sewa pembiayaan TETAP berlaku — tidak ada perubahan signifikan dari standar sebelumnya.',
            ],
          },
        ],
      },
      {
        id: 'psak-237',
        title: 'PSAK 237 (IAS 37) — Provisi, Liabilitas Kontinjensi, dan Aset Kontinjensi',
        description: 'PSAK 237 mengatur pengakuan dan pengukuran provisi, serta pengungkapan liabilitas kontinjensi dan aset kontinjensi.',
        sections: [
          {
            id: 'p237-provisi',
            title: 'Kriteria Pengakuan Provisi',
            content: 'Provisi harus diakui ketika memenuhi tiga kriteria secara simultan.',
            rules: [
              'Entitas memiliki kewajiban kini (hukum atau konstruktif) sebagai akibat peristiwa masa lalu.',
              'Besar kemungkinan (probable > 50%) arus keluar sumber daya ekonomik diperlukan untuk menyelesaikan kewajiban.',
              'Estimasi andal dapat dibuat atas jumlah kewajiban.',
            ],
            tables: [
              {
                caption: 'Pohon Keputusan — Provisi vs Liabilitas Kontinjensi vs Tidak Ada',
                headers: ['Kewajiban Kini?', 'Probable (>50%)?', 'Estimasi Andal?', 'Perlakuan'],
                rows: [
                  ['Ya', 'Ya', 'Ya', 'Akui PROVISI (Liabilitas)'],
                  ['Ya', 'Ya', 'Tidak', 'Ungkapkan sebagai LIABILITAS KONTINJENSI'],
                  ['Ya', 'Tidak', 'N/A', 'Ungkapkan sebagai LIABILITAS KONTINJENSI'],
                  ['Tidak (Possible)', 'N/A', 'N/A', 'Ungkapkan sebagai LIABILITAS KONTINJENSI'],
                  ['Tidak (Remote)', 'N/A', 'N/A', 'Tidak perlu pengakuan atau pengungkapan'],
                ],
              },
            ],
            examples: [
              'Garansi produk: Kewajiban kini ada (penjualan sudah terjadi), probable (berdasarkan historis ada klaim), estimasi andal (dari data historis) → PROVISI.',
              'Gugatan hukum: Probable kalah → PROVISI. Possible kalah → LIABILITAS KONTINJENSI (ungkapkan). Remote → Tidak perlu.',
            ],
            notes: ['Aset Kontinjensi: TIDAK PERNAH diakui, hanya diungkapkan jika probable. Baru diakui saat sudah pasti (virtually certain).'],
          },
          {
            id: 'p237-pengukuran',
            title: 'Pengukuran Provisi',
            content: 'Provisi diukur pada estimasi terbaik dari pengeluaran yang diperlukan untuk menyelesaikan kewajiban kini pada tanggal pelaporan.',
            rules: [
              'Estimasi terbaik: jumlah yang secara rasional akan dibayarkan untuk menyelesaikan kewajiban pada tanggal pelaporan atau mengalihkan ke pihak ketiga.',
              'Jika melibatkan populasi besar: gunakan metode expected value (nilai yang diharapkan).',
              'Jika melibatkan kewajiban tunggal: gunakan outcome yang paling mungkin (most likely outcome).',
              'Jika efek nilai waktu uang signifikan: provisi didiskontokan ke nilai kini.',
              'Provisi di-review setiap tanggal pelaporan dan disesuaikan.',
            ],
          },
        ],
      },
      {
        id: 'psak-236',
        title: 'PSAK 236 (IAS 36) — Penurunan Nilai Aset',
        description: 'PSAK 236 memastikan bahwa aset tidak tercatat melebihi jumlah terpulihkannya (recoverable amount).',
        sections: [
          {
            id: 'p236-uji',
            title: 'Uji Penurunan Nilai',
            content: 'Entitas harus menilai apakah terdapat indikasi penurunan nilai aset pada setiap tanggal pelaporan. Jika ada indikasi, harus dilakukan uji penurunan nilai.',
            steps: [
              'Identifikasi indikasi penurunan nilai (internal dan eksternal).',
              'Tentukan jumlah terpulihkan (recoverable amount) = yang lebih tinggi antara: (a) Nilai wajar dikurangi biaya pelepasan (FVLCD), atau (b) Nilai pakai (value in use).',
              'Bandingkan jumlah terpulihkan dengan nilai tercatat (carrying amount).',
              'Jika nilai tercatat > jumlah terpulihkan → Rugi Penurunan Nilai = Nilai Tercatat - Jumlah Terpulihkan.',
              'Akui rugi penurunan nilai di laba rugi (atau mengurangi surplus revaluasi jika model revaluasi).',
            ],
            formula: 'Jumlah Terpulihkan = MAX(FVLCD, Value in Use)\n\nRugi Penurunan Nilai = Nilai Tercatat − Jumlah Terpulihkan\n  (hanya jika Nilai Tercatat > Jumlah Terpulihkan)\n\nValue in Use = Present Value dari estimasi arus kas masa depan',
            tables: [
              {
                caption: 'Indikasi Penurunan Nilai',
                headers: ['Sumber', 'Indikasi Eksternal', 'Indikasi Internal'],
                rows: [
                  ['Pasar', 'Penurunan signifikan nilai pasar aset', 'Bukti keusangan atau kerusakan fisik'],
                  ['Ekonomi', 'Perubahan signifikan lingkungan teknologi/pasar/ekonomi/hukum', 'Rencana penghentian atau restrukturisasi operasi'],
                  ['Keuangan', 'Kenaikan suku bunga pasar yang memengaruhi tingkat diskonto', 'Kinerja ekonomik aset lebih buruk dari yang diharapkan'],
                  ['Investasi', 'Nilai tercatat aset neto > kapitalisasi pasar', 'Arus kas aktual jauh di bawah anggaran'],
                ],
              },
            ],
            warning: 'Goodwill dan aset takberwujud dengan umur manfaat tak terbatas WAJIB diuji penurunan nilainya setiap tahun, terlepas ada tidaknya indikasi penurunan nilai.',
          },
        ],
      },
      {
        id: 'psak-238',
        title: 'PSAK 238 (IAS 38) — Aset Takberwujud',
        description: 'PSAK 238 mengatur pengakuan, pengukuran, dan pengungkapan aset takberwujud yang tidak diatur secara khusus dalam PSAK lain.',
        sections: [
          {
            id: 'p238-pengakuan',
            title: 'Kriteria Pengakuan & R&D',
            content: 'Aset takberwujud diakui jika memenuhi definisi (dapat diidentifikasi, dikendalikan entitas, memiliki manfaat ekonomik masa depan) dan kriteria pengakuan (probable manfaat ekonomik, biaya dapat diukur andal).',
            tables: [
              {
                caption: 'Fase Riset vs Pengembangan — PSAK 238',
                headers: ['Aspek', 'Fase Riset', 'Fase Pengembangan'],
                rows: [
                  ['Definisi', 'Penyelidikan orisinal dan terencana untuk memperoleh pemahaman ilmiah baru', 'Penerapan temuan riset atau pengetahuan lain untuk merencanakan produksi bahan/produk/proses baru'],
                  ['Perlakuan', 'SELALU DIBEBANKAN (expense)', 'DIKAPITALISASI jika memenuhi 6 kriteria'],
                  ['Contoh', 'Penelitian laboratorium, pengujian bahan baru', 'Desain produk baru, pembuatan prototipe, pengujian pra-produksi'],
                ],
              },
            ],
            rules: [
              '6 Kriteria Kapitalisasi Pengembangan (semuanya harus terpenuhi):',
              '1. Kelayakan teknis penyelesaian aset takberwujud.',
              '2. Intensi untuk menyelesaikan dan menggunakan atau menjual.',
              '3. Kemampuan untuk menggunakan atau menjual.',
              '4. Cara aset takberwujud menghasilkan manfaat ekonomik masa depan yang dapat ditunjukkan (pasar, kegunaan internal).',
              '5. Ketersediaan sumber daya teknis, keuangan, dan lainnya.',
              '6. Kemampuan mengukur biaya secara andal.',
            ],
            warning: 'Merek, kepala surat kabar, judul publikasi, daftar pelanggan, dan item serupa yang dihasilkan secara internal TIDAK BOLEH diakui sebagai aset takberwujud (tidak dapat dibedakan dari biaya pengembangan bisnis secara keseluruhan).',
          },
        ],
      },
      {
        id: 'psak-103',
        title: 'PSAK 103 (IFRS 3) — Kombinasi Bisnis',
        description: 'PSAK 103 mengatur akuntansi untuk kombinasi bisnis menggunakan metode akuisisi (acquisition method).',
        sections: [
          {
            id: 'p103-metode',
            title: 'Metode Akuisisi — 4 Langkah',
            content: 'Seluruh kombinasi bisnis dicatat menggunakan metode akuisisi (acquisition method). Metode penyatuan kepentingan (pooling of interests) tidak lagi diperbolehkan.',
            steps: [
              'Identifikasi Pihak Pengakuisisi — Entitas yang memperoleh pengendalian atas pihak yang diakuisisi.',
              'Tentukan Tanggal Akuisisi — Tanggal pengakuisisi memperoleh pengendalian atas pihak yang diakuisisi.',
              'Akui dan Ukur Aset Teridentifikasi, Liabilitas yang Diambil Alih, dan Kepentingan Nonpengendali (NCI) — Aset dan liabilitas yang dapat diidentifikasi diukur pada nilai wajar pada tanggal akuisisi.',
              'Akui dan Ukur Goodwill atau Keuntungan dari Pembelian Diskon (Bargain Purchase).',
            ],
            formula: 'Goodwill = Imbalan yang Dialihkan + NCI + Nilai Wajar Kepentingan Sebelumnya\n          − Nilai Wajar Neto Aset Teridentifikasi\n\nJika hasilnya negatif → Bargain Purchase (keuntungan, diakui di laba rugi)',
            tables: [
              {
                caption: 'Perlakuan Goodwill Setelah Pengakuan Awal',
                headers: ['Aspek', 'PSAK (IFRS)', 'US GAAP'],
                rows: [
                  ['Amortisasi', 'TIDAK diamortisasi', 'Boleh diamortisasi (≤ 10 tahun, ASU 2014-02 untuk entitas privat)'],
                  ['Uji Penurunan Nilai', 'WAJIB setiap tahun (PSAK 236)', 'WAJIB setiap tahun (ASC 350)'],
                  ['Pemulihan', 'TIDAK diperbolehkan', 'TIDAK diperbolehkan'],
                ],
              },
            ],
            examples: [
              'PT Induk mengakuisisi 100% PT Anak seharga Rp1.500 juta. Nilai wajar aset teridentifikasi neto = Rp1.200 juta. Goodwill = 1.500 - 1.200 = Rp300 juta. Goodwill tidak diamortisasi tetapi diuji penurunan nilai setiap tahun.',
            ],
          },
        ],
      },
      {
        id: 'psak-113',
        title: 'PSAK 113 (IFRS 13) — Pengukuran Nilai Wajar',
        description: 'PSAK 113 mendefinisikan nilai wajar, menetapkan kerangka pengukuran nilai wajar, dan mensyaratkan pengungkapan tentang pengukuran nilai wajar.',
        sections: [
          {
            id: 'p113-hierarki',
            title: 'Hierarki Nilai Wajar',
            content: 'PSAK 113 menetapkan hierarki tiga level untuk input yang digunakan dalam pengukuran nilai wajar, yang memprioritaskan input yang dapat diobservasi.',
            tables: [
              {
                caption: 'Hierarki Nilai Wajar — 3 Level',
                headers: ['Level', 'Input', 'Contoh', 'Kualitas'],
                rows: [
                  ['Level 1', 'Harga kuotasian (tanpa penyesuaian) di pasar aktif untuk aset/liabilitas identik', 'Harga saham di bursa efek, harga obligasi pemerintah di pasar aktif', 'Paling andal'],
                  ['Level 2', 'Input selain harga kuotasian Level 1 yang dapat diobservasi baik secara langsung maupun tidak langsung', 'Harga kuotasian untuk aset serupa di pasar aktif, suku bunga swap, credit spread', 'Andal'],
                  ['Level 3', 'Input yang tidak dapat diobservasi (unobservable inputs)', 'Proyeksi arus kas dengan asumsi internal, model penilaian dengan input sendiri', 'Paling tidak andal, pengungkapan paling detail'],
                ],
              },
            ],
            rules: [
              'Nilai wajar = Harga yang akan diterima untuk menjual aset atau dibayar untuk mengalihkan liabilitas dalam transaksi teratur antar pelaku pasar pada tanggal pengukuran (exit price).',
              'Memaksimalkan penggunaan input yang dapat diobservasi (Level 1 & 2).',
              'Meminimalkan penggunaan input yang tidak dapat diobservasi (Level 3).',
              'Tiga pendekatan penilaian: pendekatan pasar (market approach), pendekatan penghasilan (income approach), pendekatan biaya (cost approach).',
            ],
          },
        ],
      },
      {
        id: 'psak-208',
        title: 'PSAK 208 (IAS 8) — Kebijakan Akuntansi, Perubahan Estimasi, dan Kesalahan',
        description: 'PSAK 208 mengatur pemilihan dan penerapan kebijakan akuntansi, perubahan kebijakan, perubahan estimasi akuntansi, dan koreksi kesalahan periode lalu.',
        sections: [
          {
            id: 'p208-perbandingan',
            title: 'Perubahan Kebijakan vs Estimasi vs Koreksi Kesalahan',
            content: 'Penting untuk membedakan jenis perubahan akuntansi karena perlakuannya berbeda.',
            tables: [
              {
                caption: 'Perbandingan Perlakuan Akuntansi',
                headers: ['Aspek', 'Perubahan Kebijakan Akuntansi', 'Perubahan Estimasi', 'Koreksi Kesalahan'],
                rows: [
                  ['Definisi', 'Perubahan prinsip/dasar/konvensi/aturan yang digunakan', 'Penyesuaian nilai tercatat akibat informasi/pengalaman baru', 'Kelalaian atau salah saji di laporan keuangan periode lalu'],
                  ['Contoh', 'FIFO → Rata-rata; Model Biaya → Model Revaluasi', 'Perubahan umur manfaat aset, perubahan estimasi piutang tak tertagih', 'Kesalahan perhitungan, kesalahan penerapan kebijakan, kelalaian pencatatan'],
                  ['Penerapan', 'Retrospektif (seolah-olah kebijakan baru selalu diterapkan)', 'Prospektif (periode berjalan dan masa depan)', 'Retrospektif (sajikan ulang periode sebelumnya)'],
                  ['Sajian Ulang?', 'Ya (laporan komparatif disajikan ulang)', 'Tidak', 'Ya (laporan komparatif disajikan ulang)'],
                  ['Pengungkapan', 'Sifat perubahan, alasan, dampak pada setiap pos', 'Sifat dan dampak perubahan', 'Sifat kesalahan, dampak koreksi pada setiap pos'],
                ],
              },
            ],
            warning: 'Jika sulit membedakan apakah suatu perubahan adalah perubahan kebijakan atau estimasi, perlakukan sebagai PERUBAHAN ESTIMASI (diterapkan secara prospektif).',
          },
        ],
      },
      {
        id: 'psak-210',
        title: 'PSAK 210 (IAS 10) — Peristiwa Setelah Tanggal Pelaporan',
        description: 'PSAK 210 mengatur peristiwa yang terjadi antara tanggal pelaporan dan tanggal penyelesaian (penerbitan) laporan keuangan.',
        sections: [
          {
            id: 'p210-jenis',
            title: 'Peristiwa Penyesuai vs Non-Penyesuai',
            content: 'Peristiwa setelah tanggal pelaporan diklasifikasikan menjadi dua jenis berdasarkan apakah peristiwa tersebut memberikan bukti tambahan tentang kondisi yang sudah ada pada tanggal pelaporan.',
            tables: [
              {
                caption: 'Peristiwa Penyesuai vs Non-Penyesuai',
                headers: ['Jenis', 'Definisi', 'Perlakuan', 'Contoh'],
                rows: [
                  ['Peristiwa Penyesuai (Adjusting Event)', 'Memberikan bukti tentang kondisi yang sudah ada pada tanggal pelaporan', 'Sesuaikan angka dalam laporan keuangan', 'Penyelesaian perkara hukum yang mengkonfirmasi kewajiban; bukti penurunan nilai aset; penemuan kecurangan atau kesalahan; kebangkrutan pelanggan yang piutangnya sudah beredar'],
                  ['Peristiwa Non-Penyesuai (Non-Adjusting Event)', 'Mengindikasikan kondisi yang timbul setelah tanggal pelaporan', 'Tidak menyesuaikan angka, tetapi ungkapkan jika material', 'Penurunan nilai pasar investasi; akuisisi entitas anak; pengumuman restrukturisasi; bencana alam setelah tanggal pelaporan; perubahan tarif pajak'],
                ],
              },
            ],
            warning: 'Pengecualian penting: Jika setelah tanggal pelaporan terdapat bukti bahwa entitas tidak lagi going concern, laporan keuangan TIDAK boleh disusun dengan basis kelangsungan usaha — ini adalah peristiwa penyesuai.',
          },
        ],
      },
    ],
  },
  {
    subjectId: 'manajemen-keuangan',
    chapters: [
  {
    id: 'tvm',
    title: 'Time Value of Money (Nilai Waktu Uang)',
    description: 'Konsep dasar bahwa uang saat ini bernilai lebih tinggi dari jumlah sama di masa depan karena earning capacity. Fondasi seluruh keputusan keuangan.',
    sections: [
      {
        id: 'tvm-konsep',
        title: 'Rumus Present Value dan Future Value',
        content: 'Nilai waktu uang adalah fondasi dari seluruh keputusan keuangan. Compounding menghitung FV dari PV, discounting kebalikannya. Digunakan dalam penilaian investasi, obligasi, sewa, dan hampir setiap instrumen keuangan.',
        formula: 'Future Value (FV):\n  FV = PV x (1 + r)^n\n\nPresent Value (PV):\n  PV = FV / (1 + r)^n\n\nFV Anuitas Biasa:\n  FVA = PMT x [((1 + r)^n - 1) / r]\n\nPV Anuitas Biasa:\n  PVA = PMT x [(1 - (1 + r)^(-n)) / r]\n\nPV Perpetuitas: PV = PMT / r\nPV Perpetuitas Bertumbuh: PV = PMT / (r - g)\n\nEffective Annual Rate (EAR):\n  EAR = (1 + r/m)^m - 1',
        tables: [
          {
            caption: 'Perbandingan Anuitas Biasa vs Anuitas Jatuh Tempo',
            headers: ['Aspek', 'Anuitas Biasa (Ordinary)', 'Anuitas Jatuh Tempo (Due)'],
            rows: [
              ['Waktu pembayaran', 'Akhir setiap periode', 'Awal setiap periode'],
              ['PV relatif', 'Lebih kecil', 'Lebih besar (x (1+r))'],
              ['FV relatif', 'Lebih kecil', 'Lebih besar (x (1+r))'],
              ['Contoh', 'Cicilan KPR, kupon obligasi', 'Sewa di muka, premi asuransi'],
            ],
          },
          {
            caption: 'Pengaruh Compounding Frequency terhadap EAR (r nominal = 12%)',
            headers: ['Frekuensi', 'm', 'EAR'],
            rows: [
              ['Tahunan', '1', '12,00%'],
              ['Semi-annual', '2', '12,36%'],
              ['Kuartalan', '4', '12,55%'],
              ['Bulanan', '12', '12,68%'],
              ['Harian', '365', '12,75%'],
            ],
          },
        ],
        examples: [
          'PV: Menerima Rp100 juta dalam 5 tahun, bunga 10%. PV = 100/(1,10)^5 = Rp62,09 juta.',
          'FV: Tabungan Rp50 juta, bunga 8%, 10 tahun. FV = 50x(1,08)^10 = Rp107,95 juta.',
          'PVA: Cicilan Rp10 juta/tahun selama 5 tahun, bunga 12%. PVA = Rp36,05 juta.',
          'Perpetuitas: Dividen Rp5.000/tahun, required return 10%. PV = Rp50.000.',
        ],
        notes: ['Semakin sering compounding, semakin tinggi EAR.', 'Anuitas jatuh tempo: kalikan rumus anuitas biasa dengan (1+r).'],
      },
    ],
  },
  {
    id: 'capital-budgeting',
    title: 'Capital Budgeting (Penganggaran Modal)',
    description: 'Proses evaluasi dan pemilihan investasi jangka panjang. Mencakup NPV, IRR, MIRR, Payback, dan Profitability Index.',
    sections: [
      {
        id: 'cb-metode',
        title: 'Metode Evaluasi Investasi',
        content: 'NPV dianggap metode terbaik karena langsung mengukur nilai tambah bagi pemegang saham dan memperhitungkan time value of money.',
        tables: [
          {
            caption: 'Perbandingan Metode Capital Budgeting',
            headers: ['Metode', 'Rumus/Cara', 'Kriteria Terima', 'Kelebihan', 'Kekurangan'],
            rows: [
              ['NPV', 'Sum CFt/(1+r)^t - I0', 'NPV > 0', 'TVM, nilai absolut', 'Sulit bandingkan skala berbeda'],
              ['IRR', 'Rate NPV = 0', 'IRR > WACC', 'Mudah dipahami (%)', 'Multiple IRR'],
              ['MIRR', 'Terminal value', 'MIRR > WACC', 'Atasi multiple IRR', 'Kurang intuitif'],
              ['Payback', 'Waktu CF = I0', 'PP < target', 'Sederhana', 'Abaikan TVM'],
              ['Disc. Payback', 'Waktu PV(CF) = I0', 'DPP < target', 'Pertimbangkan TVM', 'Abaikan CF setelah'],
              ['PI', 'PV in / PV out', 'PI > 1', 'Capital rationing', 'Konflik dengan NPV'],
            ],
          },
        ],
        formula: 'NPV = -I0 + Sum CFt/(1+r)^t\nIRR: NPV = 0, solve for r\nPI = PV Arus Kas Masuk / Investasi Awal',
        examples: [
          'Investasi Rp500jt, CF Rp150jt/tahun x 5 tahun, WACC 10%. NPV = Rp68,62 juta - Terima.',
        ],
        warning: 'Non-conventional cash flows bisa menghasilkan multiple IRR!',
      },
      {
        id: 'cb-rationing',
        title: 'Capital Rationing',
        content: 'Capital rationing terjadi saat anggaran terbatas. Gunakan PI untuk ranking proyek.',
        steps: [
          'Hitung NPV dan PI setiap proyek.',
          'Ranking berdasarkan PI tertinggi ke terendah.',
          'Pilih proyek PI tertinggi hingga anggaran habis.',
          'Pertimbangkan kombinasi yang memaksimalkan total NPV.',
        ],
        tables: [
          {
            caption: 'Contoh Capital Rationing (Anggaran Rp1 Miliar)',
            headers: ['Proyek', 'Investasi (Rp jt)', 'NPV (Rp jt)', 'PI', 'Ranking'],
            rows: [
              ['A', '300', '90', '1,30', '2'],
              ['B', '200', '80', '1,40', '1'],
              ['C', '500', '100', '1,20', '3'],
              ['D', '400', '60', '1,15', '4'],
            ],
          },
        ],
        examples: ['Pilih B+A+C = Rp1M, total NPV = Rp270 juta.'],
      },
    ],
  },
  {
    id: 'wacc',
    title: 'Cost of Capital (Biaya Modal)',
    description: 'Tingkat pengembalian minimum yang diharapkan penyedia modal. WACC sebagai discount rate dan hurdle rate.',
    sections: [
      {
        id: 'wacc-rumus',
        title: 'WACC dan Komponen Biaya Modal',
        content: 'WACC adalah rata-rata tertimbang biaya seluruh sumber pendanaan. Gunakan market value weights dan after-tax cost of debt.',
        formula: 'WACC = (E/V x Re) + (D/V x Rd x (1-T)) + (P/V x Rp)\n\nCAPM: Re = Rf + Beta x (Rm - Rf)\nDDM: Re = D1/P0 + g\nPreferred: Rp = Dp / Pp',
        tables: [
          {
            caption: 'Metode Estimasi Cost of Equity',
            headers: ['Metode', 'Rumus', 'Kelebihan', 'Kekurangan'],
            rows: [
              ['CAPM', 'Rf + Beta(Rm-Rf)', 'Risiko sistematis', 'Estimasi Beta sulit'],
              ['DDM', 'D1/P0 + g', 'Intuitif', 'Hanya dividend-payers'],
              ['Bond+Premium', 'Rd + 3-5%', 'Data terbatas', 'Subjektif'],
            ],
          },
        ],
        examples: [
          '60% ekuitas, 40% utang. Re=14%, Rd=8%, T=22%. WACC = 10,90%.',
          'CAPM: Rf=6%, Beta=1,2, Rm=14%. Re = 15,6%.',
        ],
        notes: ['Gunakan market value weights.', 'Flotation costs disesuaikan ke cash flow proyek.'],
      },
    ],
  },
  {
    id: 'capital-structure',
    title: 'Struktur Modal (Capital Structure)',
    description: 'Kombinasi utang dan ekuitas. Teori MM, trade-off, pecking order, dan signaling.',
    sections: [
      {
        id: 'cs-teori',
        title: 'Teori Struktur Modal',
        content: 'Struktur modal optimal memaksimalkan nilai perusahaan atau meminimalkan WACC.',
        tables: [
          {
            caption: 'Perbandingan Teori Struktur Modal',
            headers: ['Teori', 'Proposisi', 'Implikasi'],
            rows: [
              ['MM I (no tax)', 'Nilai independen dari struktur modal', 'Tidak ada optimal'],
              ['MM I (tax)', 'VL = VU + TxD', 'Utang naik = nilai naik'],
              ['MM II (no tax)', 'Re naik linear dengan D/E', 'Cost equity naik'],
              ['MM II (tax)', 'Re naik lebih lambat', 'Tax shield benefit'],
              ['Trade-off', 'Tax shield vs distress cost', 'Ada target D/E'],
              ['Pecking Order', 'Internal > debt > equity', 'Tidak ada target'],
            ],
          },
        ],
        diagram: 'Trade-off Theory:\n\nNilai Perusahaan\n  |       /-- VL=VU+PV(Tax Shield)-PV(Distress)\n  |     / Optimal\\\n  |   /    D/E     \\\n  | /________________\n  VU                  Leverage (D/E)',
      },
      {
        id: 'cs-leverage',
        title: 'Financial Leverage dan EBIT-EPS',
        content: 'DFL mengukur sensitivitas EPS terhadap perubahan EBIT.',
        formula: 'DFL = EBIT / (EBIT - Interest)\nDOL = CM / EBIT\nDTL = DOL x DFL',
        tables: [
          {
            caption: 'EBIT-EPS: 2 Alternatif (Modal Rp10M)',
            headers: ['EBIT', '100% Ekuitas', '50% Utang (bunga 10%)'],
            rows: [
              ['Rp2M', 'EPS Rp156', 'EPS Rp234'],
              ['Rp800jt', 'EPS Rp62,4', 'EPS Rp46,8'],
              ['Break-even', '-', 'EBIT = Rp1M'],
            ],
          },
        ],
        warning: 'Leverage memperbesar keuntungan DAN kerugian.',
      },
    ],
  },
  {
    id: 'working-capital',
    title: 'Manajemen Modal Kerja',
    description: 'Pengelolaan aset lancar dan kewajiban lancar untuk likuiditas dan profitabilitas.',
    sections: [
      {
        id: 'wc-ccc',
        title: 'Cash Conversion Cycle',
        content: 'CCC mengukur waktu konversi investasi persediaan menjadi kas.',
        formula: 'CCC = DIO + DSO - DPO\nDIO = (Persediaan/HPP) x 365\nDSO = (Piutang/Penjualan) x 365\nDPO = (Utang Usaha/HPP) x 365',
        tables: [
          {
            caption: 'Strategi Memperpendek CCC',
            headers: ['Komponen', 'Target', 'Strategi'],
            rows: [
              ['DIO', 'Turunkan', 'JIT, better forecasting'],
              ['DSO', 'Turunkan', 'Diskon 2/10 n/30, credit screening'],
              ['DPO', 'Naikkan', 'Negosiasi terms lebih panjang'],
            ],
          },
        ],
        examples: ['DIO=60, DSO=45, DPO=30. CCC = 75 hari.'],
        notes: ['CCC negatif = terima kas sebelum bayar supplier.'],
      },
      {
        id: 'wc-models',
        title: 'Model Kas dan Persediaan',
        content: 'Baumol untuk arus kas stabil, Miller-Orr untuk volatile. EOQ untuk pesanan optimal.',
        formula: 'Baumol: C* = sqrt(2FT/r)\nMiller-Orr: Spread = 3 x cbrt(3F.var/4r)\nEOQ: Q* = sqrt(2DS/H)',
        tables: [
          {
            caption: 'Model Manajemen Kas',
            headers: ['Aspek', 'Baumol', 'Miller-Orr'],
            rows: [
              ['Asumsi', 'Konstan', 'Random'],
              ['Output', 'C* (transfer optimal)', 'Z* dan H*'],
              ['Cocok', 'Stabil', 'Volatile'],
            ],
          },
        ],
        examples: ['Baumol: Kas Rp12M/thn, F=Rp150rb, r=6%. C*=Rp7,75jt.'],
      },
    ],
  },
  {
    id: 'risk-return',
    title: 'Risiko dan Imbal Hasil',
    description: 'Hubungan risiko-return, portfolio theory, CAPM, dan performance measures.',
    sections: [
      {
        id: 'rr-ukuran',
        title: 'Mengukur Risiko dan Return',
        content: 'Expected return rata-rata tertimbang probabilitas. Diversifikasi menghilangkan unsystematic risk.',
        formula: 'E(R) = Sum Pi x Ri\nVar = Sum Pi x (Ri-E(R))^2\nCAPM: E(Ri) = Rf + Bi x (Rm-Rf)\nSharpe = (Rp-Rf)/sigma\nTreynor = (Rp-Rf)/Beta',
        tables: [
          {
            caption: 'Interpretasi Beta',
            headers: ['Beta', 'Interpretasi', 'Contoh'],
            rows: [
              ['> 1', 'Aggressive', 'Teknologi, properti'],
              ['= 1', 'Sejalan pasar', 'Index fund'],
              ['0-1', 'Defensive', 'Utilities'],
              ['0', 'Tidak berkorelasi', 'T-bills'],
            ],
          },
        ],
        examples: ['CAPM: Rf=6%, B=1,5, Rm=12%. E(Ri)=15%.'],
        diagram: 'SML:\nE(R)\n  |       /\n  |     / *Undervalued\n  |   /\n  | /   *Overvalued\n  Rf\n  |________________ Beta',
      },
    ],
  },
  {
    id: 'valuation',
    title: 'Penilaian (Valuation)',
    description: 'Teknik valuasi obligasi, saham, dan enterprise value.',
    sections: [
      {
        id: 'val-bond',
        title: 'Bond Valuation',
        content: 'Nilai obligasi = PV kupon + PV nominal. Harga dan yield berbanding terbalik.',
        formula: 'P = C x [(1-(1+r)^(-n))/r] + FV/(1+r)^n\nCurrent Yield = C/P',
        tables: [
          {
            caption: 'Harga vs YTM',
            headers: ['Kondisi', 'Harga', 'Sebutan'],
            rows: [
              ['Coupon > YTM', 'P > FV', 'Premium'],
              ['Coupon = YTM', 'P = FV', 'Par'],
              ['Coupon < YTM', 'P < FV', 'Discount'],
            ],
          },
        ],
        examples: ['FV=Rp1jt, kupon 10%, 5 thn, YTM=12%. P=Rp927.905.'],
      },
      {
        id: 'val-stock',
        title: 'Stock Valuation dan Enterprise Value',
        content: 'DDM, FCFE, FCFF, dan relative valuation untuk menentukan nilai intrinsik.',
        formula: 'Gordon: P0 = D1/(Re-g)\nFCFE = NI+Dep-CapEx-dWC+NetBorrow\nFCFF = EBIT(1-T)+Dep-CapEx-dWC\nEquity = EV - Debt + Cash',
        tables: [
          {
            caption: 'Metode Valuasi',
            headers: ['Metode', 'CF', 'Rate', 'Cocok Untuk'],
            rows: [
              ['DDM', 'Dividen', 'Re', 'Mature, stabil'],
              ['FCFE', 'FCFE', 'Re', 'Dividen irregular'],
              ['FCFF', 'FCFF', 'WACC', 'Leverage berubah'],
              ['EV/EBITDA', 'EBITDA', 'Multiple', 'Cross-border'],
            ],
          },
        ],
        examples: ['DDM: D0=500, g=6%, Re=14%. P0=Rp6.625.'],
        warning: 'Terminal growth rate jangan melebihi GDP growth.',
      },
    ],
  },
  {
    id: 'financial-analysis',
    title: 'Analisis Laporan Keuangan',
    description: 'Rasio keuangan, DuPont analysis, dan sustainable growth rate.',
    sections: [
      {
        id: 'fa-rasio',
        title: 'Rasio Keuangan Komprehensif',
        content: 'Rasio mengukur kinerja dari berbagai aspek. Bandingkan secara time-series dan cross-section.',
        tables: [
          {
            caption: 'Rasio Likuiditas',
            headers: ['Rasio', 'Rumus', 'Benchmark'],
            rows: [
              ['Current Ratio', 'AL / KL', '>= 2,0'],
              ['Quick Ratio', '(AL-Persediaan) / KL', '>= 1,0'],
              ['Cash Ratio', 'Kas / KL', '>= 0,2'],
            ],
          },
          {
            caption: 'Rasio Aktivitas',
            headers: ['Rasio', 'Rumus', 'Interpretasi'],
            rows: [
              ['Inv Turnover', 'HPP / Persediaan', 'Kali terjual/tahun'],
              ['Days Inv', '365 / Inv TO', 'Hari simpan'],
              ['Rec Turnover', 'Sales / Piutang', 'Efisiensi penagihan'],
              ['Asset Turnover', 'Sales / Total Aset', 'Efisiensi aset'],
            ],
          },
          {
            caption: 'Rasio Leverage dan Profitabilitas',
            headers: ['Rasio', 'Rumus', 'Interpretasi'],
            rows: [
              ['D/E Ratio', 'Utang / Ekuitas', 'Proporsi utang'],
              ['TIE', 'EBIT / Bunga', 'Kemampuan bayar bunga'],
              ['Gross Margin', 'Laba Kotor / Sales', 'Margin kotor'],
              ['Net Margin', 'NI / Sales', 'Margin bersih'],
              ['ROA', 'NI / Assets', 'Return aset'],
              ['ROE', 'NI / Equity', 'Return ekuitas'],
            ],
          },
        ],
      },
      {
        id: 'fa-dupont',
        title: 'DuPont dan Sustainable Growth',
        content: 'DuPont menguraikan ROE. SGR = pertumbuhan maksimum tanpa pendanaan eksternal.',
        formula: 'ROE = Net Margin x Asset Turnover x Equity Multiplier\nSGR = ROE x (1 - payout ratio)',
        diagram: 'DuPont:\n        ROE\n       /    \\\n    ROA  x  Equity Multiplier\n   /  \\\n NPM x ATO',
        examples: [
          'ROE = 5% x 2,0 x 2,5 = 25%.',
          'SGR: ROE=20%, payout=40%. g = 12%/tahun.',
        ],
        notes: ['ROE tinggi dari leverage = evaluasi risiko.'],
      },
    ],
  },
],
  },
  {
    subjectId: 'manajemen-perpajakan',
    chapters: [
  {
    id: 'kup',
    title: 'Ketentuan Umum Perpajakan (KUP)',
    description: 'Dasar hukum perpajakan Indonesia: NPWP, PKP, SPT, pemeriksaan, penagihan, sanksi, keberatan, dan banding berdasarkan UU KUP dan UU HPP.',
    sections: [
      {
        id: 'kup-npwp',
        title: 'NPWP dan Pengukuhan PKP',
        content: 'Nomor Pokok Wajib Pajak (NPWP) adalah identitas wajib pajak. Sejak UU HPP, NPWP orang pribadi menggunakan NIK (Nomor Induk Kependudukan). Pengukuhan sebagai Pengusaha Kena Pajak (PKP) wajib bagi pengusaha dengan omzet melebihi Rp4,8 miliar per tahun.',
        tables: [
          {
            caption: 'Perbandingan NPWP dan PKP',
            headers: ['Aspek', 'NPWP', 'PKP'],
            rows: [
              ['Kewajiban', 'Semua WP yang memenuhi syarat subjektif & objektif', 'Pengusaha omzet > Rp4,8M/tahun'],
              ['Fungsi', 'Identitas WP, administrasi pajak', 'Memungut dan menyetor PPN'],
              ['Format baru (HPP)', 'NIK untuk OP; 16 digit untuk badan', 'Tetap menggunakan pengukuhan'],
              ['Sanksi tidak daftar', 'Denda + pajak terutang', 'Denda 2% DPP + pajak terutang'],
            ],
          },
        ],
        rules: [
          'WP OP wajib daftar NPWP paling lambat 1 bulan setelah memenuhi syarat objektif.',
          'WP Badan wajib daftar paling lambat 1 bulan setelah pendirian.',
          'PKP wajib memungut, menyetor, dan melaporkan PPN.',
          'NIK otomatis menjadi NPWP sesuai UU HPP (berlaku penuh 2024).',
        ],
        notes: ['UU HPP mengubah format NPWP dari 15 digit menjadi 16 digit (NIK untuk OP).'],
      },
      {
        id: 'kup-spt',
        title: 'SPT dan Batas Waktu Pelaporan',
        content: 'Surat Pemberitahuan (SPT) adalah sarana wajib pajak melaporkan perhitungan dan pembayaran pajak. Terdapat SPT Masa (bulanan) dan SPT Tahunan.',
        tables: [
          {
            caption: 'Batas Waktu Pelaporan SPT',
            headers: ['Jenis SPT', 'Batas Waktu', 'Denda Keterlambatan'],
            rows: [
              ['SPT Masa PPh', 'Tgl 20 bulan berikutnya', 'Rp100.000'],
              ['SPT Masa PPN', 'Akhir bulan berikutnya', 'Rp500.000'],
              ['SPT Tahunan OP', '31 Maret tahun berikutnya', 'Rp100.000'],
              ['SPT Tahunan Badan', '30 April tahun berikutnya', 'Rp1.000.000'],
            ],
          },
          {
            caption: 'Batas Waktu Pembayaran Pajak',
            headers: ['Jenis Pajak', 'Batas Bayar', 'Keterangan'],
            rows: [
              ['PPh 21/26', 'Tgl 10 bulan berikutnya', 'Pemotongan gaji/honorarium'],
              ['PPh 23/26', 'Tgl 10 bulan berikutnya', 'Pemotongan jasa, bunga, royalti'],
              ['PPh 25', 'Tgl 15 bulan berikutnya', 'Angsuran bulanan'],
              ['PPh 29', 'Sebelum SPT Tahunan', 'Kekurangan pajak tahunan'],
              ['PPN', 'Akhir bulan berikutnya', 'Sebelum pelaporan SPT Masa'],
            ],
          },
        ],
        warning: 'Keterlambatan bayar dikenakan bunga 0,5% per bulan (UU HPP: berdasarkan suku bunga acuan BI + 5% / 12).',
      },
      {
        id: 'kup-sanksi',
        title: 'Sanksi Perpajakan',
        content: 'UU HPP mengubah mekanisme sanksi perpajakan. Sanksi bunga kini berbasis suku bunga acuan Bank Indonesia, bukan flat 2% per bulan.',
        tables: [
          {
            caption: 'Sanksi Administrasi (UU HPP)',
            headers: ['Jenis Pelanggaran', 'Sanksi Lama', 'Sanksi UU HPP'],
            rows: [
              ['Terlambat bayar', '2%/bulan (maks 24 bulan)', 'Suku bunga acuan BI + 5% / 12 (maks 24 bulan)'],
              ['Pembetulan SPT', '2%/bulan', 'Suku bunga acuan BI + 0% / 12'],
              ['Kurang bayar (SKPKB)', '2%/bulan (maks 24 bulan)', 'Suku bunga acuan BI + 10% / 12'],
              ['Pengungkapan ketidakbenaran', '150% dari kurang bayar', 'Suku bunga acuan BI + 15% / 12'],
              ['SPT tidak/terlambat disampaikan', 'Denda tetap', 'Denda tetap (tidak berubah)'],
            ],
          },
        ],
        rules: [
          'Sanksi pidana pajak: kurungan 6 bulan - 6 tahun dan/atau denda 1-4x pajak terutang.',
          'Ultimum remedium: sanksi pidana adalah upaya terakhir setelah sanksi administrasi.',
        ],
      },
    ],
  },
  {
    id: 'pph-umum',
    title: 'Pajak Penghasilan (PPh) Umum',
    description: 'Subjek pajak, objek pajak, tarif PPh, PTKP, dan perhitungan PPh terutang untuk orang pribadi dan badan.',
    sections: [
      {
        id: 'pph-tarif',
        title: 'Tarif PPh Pasal 17',
        content: 'UU HPP menambahkan bracket tarif baru untuk PPh orang pribadi dan menurunkan tarif PPh badan.',
        tables: [
          {
            caption: 'Tarif PPh Orang Pribadi (UU HPP)',
            headers: ['Lapisan PKP', 'Tarif'],
            rows: [
              ['Sampai Rp60 juta', '5%'],
              ['> Rp60 juta s.d. Rp250 juta', '15%'],
              ['> Rp250 juta s.d. Rp500 juta', '25%'],
              ['> Rp500 juta s.d. Rp5 miliar', '30%'],
              ['> Rp5 miliar', '35% (bracket baru UU HPP)'],
            ],
          },
          {
            caption: 'PTKP (Penghasilan Tidak Kena Pajak)',
            headers: ['Status', 'PTKP/Tahun'],
            rows: [
              ['TK/0 (Tidak Kawin)', 'Rp54.000.000'],
              ['K/0 (Kawin tanpa tanggungan)', 'Rp58.500.000'],
              ['K/1', 'Rp63.000.000'],
              ['K/2', 'Rp67.500.000'],
              ['K/3 (maks tanggungan)', 'Rp72.000.000'],
              ['Tambahan per tanggungan', 'Rp4.500.000 (maks 3)'],
            ],
          },
          {
            caption: 'Tarif PPh Badan',
            headers: ['Ketentuan', 'Tarif', 'Catatan'],
            rows: [
              ['Tarif umum (UU HPP)', '22%', 'Berlaku sejak 2022'],
              ['Tbk (go public)', '19%', 'Diskon 3% jika 40% saham diperdagangkan di BEI'],
              ['UMKM (PP 55/2022)', '0,5% final', 'Omzet maks Rp4,8M; OP gratis s.d. Rp500jt'],
            ],
          },
        ],
        steps: [
          'Hitung penghasilan bruto (gaji, usaha, investasi, dll).',
          'Kurangi biaya yang diperbolehkan (deductible expenses).',
          'Kurangi PTKP sesuai status perkawinan dan tanggungan.',
          'Hasilnya = Penghasilan Kena Pajak (PKP).',
          'Terapkan tarif progresif Pasal 17 pada PKP.',
          'Kurangi kredit pajak (PPh 21, 22, 23, 24, 25).',
          'Sisa = PPh kurang/lebih bayar (PPh 29/28).',
        ],
        examples: [
          'OP status K/1: Penghasilan netto Rp200jt. PTKP K/1 = Rp63jt. PKP = Rp137jt. PPh = 5%x60jt + 15%x77jt = Rp3jt + Rp11,55jt = Rp14,55jt.',
        ],
      },
    ],
  },
  {
    id: 'pph-potput',
    title: 'PPh Pemotongan dan Pemungutan',
    description: 'PPh 21, 22, 23, 26, dan 4(2) final: tarif, objek, mekanisme pemotongan/pemungutan.',
    sections: [
      {
        id: 'pph21',
        title: 'PPh Pasal 21 (Penghasilan Karyawan)',
        content: 'PPh 21 dikenakan atas penghasilan sehubungan dengan pekerjaan, jasa, dan kegiatan yang diterima orang pribadi dalam negeri. Sejak 2024, metode TER (Tarif Efektif Rata-rata) digunakan untuk pemotongan bulanan.',
        tables: [
          {
            caption: 'Metode Perhitungan PPh 21',
            headers: ['Metode', 'Cara Hitung', 'Kapan Digunakan'],
            rows: [
              ['TER Bulanan', 'Penghasilan bruto x tarif TER', 'Januari - November'],
              ['Tarif Pasal 17', 'PKP setahun x tarif progresif', 'Desember (perhitungan ulang tahunan)'],
              ['Gross Up', 'Perusahaan tanggung pajak, dibiayakan', 'Tunjangan pajak'],
            ],
          },
          {
            caption: 'PPh 21 Bukan Pegawai',
            headers: ['Penerima', 'DPP', 'Tarif'],
            rows: [
              ['Tenaga ahli (dokter, pengacara, dll)', '50% x penghasilan bruto', 'Tarif Pasal 17'],
              ['Bukan pegawai berkesinambungan', '50% x (bruto - PTKP/bulan)', 'Tarif Pasal 17'],
              ['Bukan pegawai tidak berkesinambungan', '50% x penghasilan bruto', 'Tarif Pasal 17'],
              ['Komisaris, mantan pegawai', 'Penghasilan bruto kumulatif', 'Tarif Pasal 17'],
            ],
          },
        ],
        warning: 'Penerima yang tidak memiliki NPWP dikenakan tarif 20% lebih tinggi.',
      },
      {
        id: 'pph23-26',
        title: 'PPh Pasal 22, 23, 26, dan 4(2)',
        content: 'PPh pemotongan/pemungutan atas berbagai jenis penghasilan: impor, jasa, bunga, dividen, royalti, sewa, dan penghasilan tertentu yang bersifat final.',
        tables: [
          {
            caption: 'Ringkasan PPh Pemotongan/Pemungutan',
            headers: ['Pasal', 'Objek', 'Tarif', 'Keterangan'],
            rows: [
              ['PPh 22', 'Impor', '2,5% (API) / 7,5% (non-API)', 'Pemungutan atas impor barang'],
              ['PPh 22', 'Pembelian oleh bendahara pemerintah', '1,5%', 'Atas pembelian barang > Rp2jt'],
              ['PPh 23', 'Bunga, royalti', '15%', 'Dari penghasilan bruto'],
              ['PPh 23', 'Sewa (selain tanah/bangunan), jasa', '2%', 'Dari penghasilan bruto'],
              ['PPh 23', 'Dividen', '0% (OP dalam negeri per UU HPP)', 'Dikecualikan jika diinvestasikan di Indonesia'],
              ['PPh 26', 'Penghasilan WP luar negeri', '20% (atau tarif P3B)', 'Bunga, royalti, dividen, jasa ke luar negeri'],
              ['PPh 4(2)', 'Sewa tanah/bangunan', '10% final', 'Dari penghasilan bruto'],
              ['PPh 4(2)', 'Jasa konstruksi', '1,75%-4% final', 'Tergantung kualifikasi usaha'],
              ['PPh 4(2)', 'Pengalihan hak tanah/bangunan', '2,5% final', 'Dari nilai pengalihan'],
              ['PPh 4(2)', 'Bunga deposito/tabungan', '20% final', 'Dari jumlah bruto bunga'],
            ],
          },
        ],
        notes: ['PPh 23 bersifat tidak final - dapat dikreditkan di SPT Tahunan.', 'PPh 4(2) final - tidak dapat dikreditkan, tidak dihitung ulang di SPT Tahunan.'],
      },
    ],
  },
  {
    id: 'ppn',
    title: 'Pajak Pertambahan Nilai (PPN)',
    description: 'Mekanisme PPN Indonesia: BKP/JKP, DPP, tarif, pajak masukan-keluaran, faktur pajak, dan restitusi.',
    sections: [
      {
        id: 'ppn-mekanisme',
        title: 'Mekanisme PPN',
        content: 'PPN adalah pajak tidak langsung yang dikenakan atas penyerahan BKP/JKP di dalam daerah pabean. Menggunakan metode indirect subtraction (pajak keluaran dikurangi pajak masukan).',
        tables: [
          {
            caption: 'Tarif PPN',
            headers: ['Ketentuan', 'Tarif', 'Berlaku'],
            rows: [
              ['Tarif umum (UU HPP)', '11%', 'Sejak 1 April 2022'],
              ['Tarif naik (UU HPP)', '12%', 'Mulai 1 Januari 2025'],
              ['Ekspor BKP berwujud', '0%', 'Memungkinkan restitusi pajak masukan'],
              ['Ekspor BKP tidak berwujud', '0%', 'Dengan syarat tertentu'],
              ['Ekspor JKP tertentu', '0%', 'JKP yang dimanfaatkan di luar daerah pabean'],
            ],
          },
          {
            caption: 'BKP/JKP yang Dikecualikan',
            headers: ['Barang/Jasa', 'Alasan Pengecualian'],
            rows: [
              ['Barang kebutuhan pokok', 'Beras, jagung, sagu, kedelai, garam, daging, telur, susu, dll'],
              ['Jasa kesehatan', 'Pelayanan medis di rumah sakit/klinik'],
              ['Jasa pendidikan', 'Jasa penyelenggaraan pendidikan'],
              ['Jasa keuangan', 'Jasa perbankan, asuransi (sebagian)'],
              ['Jasa angkutan umum', 'Angkutan umum darat, air, udara'],
            ],
          },
        ],
        formula: 'PPN Terutang = Pajak Keluaran - Pajak Masukan\n\nPajak Keluaran = DPP x Tarif PPN\nDPP = Harga Jual / Penggantian / Nilai Impor / Nilai Ekspor\n\nJika PK > PM: Kurang bayar (setor ke kas negara)\nJika PM > PK: Lebih bayar (kompensasi atau restitusi)',
        steps: [
          'PKP menerbitkan faktur pajak saat penyerahan BKP/JKP.',
          'Catat pajak keluaran dari penjualan.',
          'Catat pajak masukan dari pembelian (yang berhubungan dengan penyerahan terutang PPN).',
          'Hitung selisih PK - PM.',
          'Setor kekurangan (atau ajukan restitusi/kompensasi).',
          'Laporkan SPT Masa PPN sebelum akhir bulan berikutnya.',
        ],
        examples: [
          'Penjualan Rp1M (PK = 11% x 1M = Rp110jt). Pembelian bahan Rp600jt (PM = 11% x 600jt = Rp66jt). PPN kurang bayar = 110jt - 66jt = Rp44jt.',
        ],
      },
    ],
  },
  {
    id: 'pph-badan',
    title: 'PPh Badan',
    description: 'Perhitungan PPh badan: koreksi fiskal positif dan negatif, penyusutan fiskal, amortisasi, kompensasi kerugian, dan kredit pajak.',
    sections: [
      {
        id: 'koreksi-fiskal',
        title: 'Koreksi Fiskal',
        content: 'Koreksi fiskal adalah penyesuaian laba komersial (akuntansi) menjadi laba fiskal (pajak) karena perbedaan perlakuan antara SAK dan ketentuan perpajakan.',
        tables: [
          {
            caption: 'Koreksi Fiskal Positif (Menambah PKP)',
            headers: ['Item', 'Alasan', 'Dasar Hukum'],
            rows: [
              ['Biaya entertainment tanpa daftar nominatif', 'Tidak memenuhi syarat formal', 'SE-27/PJ.22/1986'],
              ['Sumbangan (kecuali bencana nasional, dll)', 'Bukan biaya 3M penghasilan', 'Pasal 9 (1) UU PPh'],
              ['Denda pajak dan bunga pajak', 'Bukan biaya fiskal', 'Pasal 9 (1) k'],
              ['PPh ditanggung perusahaan (non gross-up)', 'Bukan biaya deductible', 'Pasal 9 (1) h'],
              ['Penyusutan komersial > fiskal', 'Beda metode/masa manfaat', 'Pasal 11 UU PPh'],
              ['Cadangan/provision (kecuali tertentu)', 'Hanya boleh untuk industri tertentu', 'Pasal 9 (1) c'],
              ['Natura/kenikmatan (sebagian)', 'UU HPP: natura tertentu taxable & deductible', 'Pasal 4 (1) UU HPP'],
            ],
          },
          {
            caption: 'Koreksi Fiskal Negatif (Mengurangi PKP)',
            headers: ['Item', 'Alasan', 'Dasar Hukum'],
            rows: [
              ['Penghasilan yang dikenakan PPh final', 'Tidak dihitung lagi', 'Pasal 4 (2)'],
              ['Dividen dari dalam negeri', 'Dikecualikan (UU HPP)', 'Pasal 4 (3)'],
              ['Penghasilan bunga deposito (sudah PPh final)', 'Bukan objek PPh badan lagi', 'PP 131/2000'],
            ],
          },
        ],
        steps: [
          'Mulai dari laba bersih komersial (laporan keuangan).',
          'Tambahkan koreksi fiskal positif (biaya non-deductible).',
          'Kurangi koreksi fiskal negatif (penghasilan non-taxable/final).',
          'Hasilnya = Penghasilan Kena Pajak (PKP) fiskal.',
          'Terapkan tarif PPh badan (22%).',
          'Kurangi kredit pajak (PPh 22, 23, 24, 25).',
          'Sisa = PPh 29 kurang/lebih bayar.',
        ],
      },
      {
        id: 'penyusutan',
        title: 'Penyusutan dan Amortisasi Fiskal',
        content: 'Penyusutan fiskal mengikuti kelompok harta dan metode yang ditentukan UU PPh. Berbeda dari penyusutan komersial yang mengikuti SAK.',
        tables: [
          {
            caption: 'Kelompok Harta Berwujud dan Tarif Penyusutan',
            headers: ['Kelompok', 'Masa Manfaat', 'Garis Lurus', 'Saldo Menurun'],
            rows: [
              ['Kelompok 1', '4 tahun', '25%', '50%'],
              ['Kelompok 2', '8 tahun', '12,5%', '25%'],
              ['Kelompok 3', '16 tahun', '6,25%', '12,5%'],
              ['Kelompok 4', '20 tahun', '5%', '10%'],
              ['Bangunan permanen', '20 tahun', '5%', 'Tidak boleh'],
              ['Bangunan tidak permanen', '10 tahun', '10%', 'Tidak boleh'],
            ],
          },
          {
            caption: 'Kelompok Harta Tidak Berwujud (Amortisasi)',
            headers: ['Kelompok', 'Masa Manfaat', 'Tarif Amortisasi'],
            rows: [
              ['Kelompok 1', '4 tahun', '25%'],
              ['Kelompok 2', '8 tahun', '12,5%'],
              ['Kelompok 3', '16 tahun', '6,25%'],
              ['Kelompok 4', '20 tahun', '5%'],
            ],
          },
        ],
        rules: [
          'Bangunan hanya boleh disusutkan dengan metode garis lurus.',
          'Harta bukan bangunan boleh memilih garis lurus atau saldo menurun.',
          'Metode yang dipilih harus diterapkan secara taat asas.',
          'Penyusutan dimulai bulan perolehan (kecuali harta dalam proses pengerjaan: bulan selesai).',
        ],
        examples: ['Mesin Rp100jt (Kelompok 2, saldo menurun). Tahun 1: 25% x 100jt = Rp25jt. Tahun 2: 25% x 75jt = Rp18,75jt.'],
      },
    ],
  },
  {
    id: 'transfer-pricing',
    title: 'Transfer Pricing',
    description: 'Prinsip kewajaran (arm\'s length), hubungan istimewa, metode TP, dokumentasi, APA, dan MAP.',
    sections: [
      {
        id: 'tp-metode',
        title: 'Metode Transfer Pricing',
        content: 'Transfer pricing mengacu pada penetapan harga transaksi antara pihak yang mempunyai hubungan istimewa. Prinsip dasar: harga harus sesuai arm\'s length principle (kewajaran).',
        tables: [
          {
            caption: 'Metode Transfer Pricing (PMK 172/2023)',
            headers: ['Metode', 'Singkatan', 'Cara Kerja', 'Kapan Digunakan'],
            rows: [
              ['Comparable Uncontrolled Price', 'CUP', 'Bandingkan harga dengan transaksi pihak independen', 'Ada transaksi pembanding langsung'],
              ['Resale Price Method', 'RPM', 'Harga jual kembali dikurangi margin wajar', 'Distributor/reseller'],
              ['Cost Plus Method', 'CPM', 'Biaya ditambah margin wajar', 'Manufacturer/penyedia jasa'],
              ['Transactional Net Margin Method', 'TNMM', 'Bandingkan net profit indicator', 'Tidak ada pembanding langsung'],
              ['Profit Split Method', 'PSM', 'Bagi laba berdasarkan kontribusi masing-masing pihak', 'Transaksi terintegrasi, intangibles unik'],
            ],
          },
          {
            caption: 'Kriteria Hubungan Istimewa (Pasal 18 UU PPh)',
            headers: ['Jenis', 'Kriteria'],
            rows: [
              ['Kepemilikan modal', 'Penyertaan langsung/tidak langsung >= 25%'],
              ['Penguasaan manajemen/teknologi', 'Pihak yang menguasai pihak lain'],
              ['Hubungan keluarga sedarah/semenda', 'Satu derajat sedarah/semenda lurus'],
            ],
          },
        ],
        rules: [
          'Dokumentasi TP wajib: Master File, Local File, dan CbCR (Country-by-Country Report).',
          'CbCR wajib jika konsolidasi grup >= Rp11 triliun.',
          'Dokumentasi harus tersedia paling lambat 4 bulan setelah akhir tahun pajak.',
          'APA (Advance Pricing Agreement) bisa unilateral, bilateral, atau multilateral.',
        ],
      },
    ],
  },
  {
    id: 'pajak-internasional',
    title: 'Pajak Internasional',
    description: 'P3B (tax treaty), BUT, kredit pajak luar negeri, CFC rules, dan beneficial owner.',
    sections: [
      {
        id: 'pi-p3b',
        title: 'Perjanjian Penghindaran Pajak Berganda (P3B)',
        content: 'P3B (tax treaty) adalah perjanjian bilateral antara dua negara untuk menghindari pengenaan pajak berganda dan mencegah pengelakan pajak. Indonesia memiliki P3B dengan lebih dari 70 negara.',
        tables: [
          {
            caption: 'Jenis Penghasilan dalam P3B dan Hak Pemajakannya',
            headers: ['Jenis Penghasilan', 'Negara Sumber', 'Negara Domisili', 'Ketentuan Umum'],
            rows: [
              ['Laba usaha (business profit)', 'Hanya jika ada BUT', 'Ya', 'Pasal 7 P3B'],
              ['Dividen', 'Ya (tarif terbatas)', 'Ya', 'Tarif P3B biasanya 10-15%'],
              ['Bunga', 'Ya (tarif terbatas)', 'Ya', 'Tarif P3B biasanya 10%'],
              ['Royalti', 'Ya (tarif terbatas)', 'Ya', 'Tarif P3B biasanya 10-15%'],
              ['Capital gains (harta)', 'Tergantung jenis harta', 'Ya', 'Pasal 13 P3B'],
              ['Gaji/penghasilan kerja', 'Ya (kecuali Rule 183 hari)', 'Ya', 'Pasal 15 P3B'],
              ['Penghasilan artis/atlet', 'Ya (selalu)', 'Ya', 'Pasal 17 P3B'],
            ],
          },
        ],
        rules: [
          'SKD (Surat Keterangan Domisili) / DGT Form wajib untuk memanfaatkan tarif P3B.',
          'Beneficial owner test: penerima harus pemilik manfaat sebenarnya.',
          'Anti-treaty shopping: ketentuan LOB (Limitation on Benefits) dalam beberapa P3B.',
        ],
        notes: ['BUT (Bentuk Usaha Tetap) = fixed place of business di negara sumber (kantor, cabang, pabrik, proyek > 6 bulan).'],
      },
      {
        id: 'pi-kredit',
        title: 'Kredit Pajak Luar Negeri (PPh 24)',
        content: 'WP dalam negeri yang menerima penghasilan dari luar negeri dapat mengkreditkan pajak yang sudah dibayar di luar negeri terhadap PPh terutang di Indonesia, dengan batasan tertentu.',
        formula: 'Batas Kredit PPh 24 per negara:\n  = (Penghasilan LN / Total PKP) x Total PPh Terutang\n\nKredit yang diperbolehkan = minimum dari:\n  1. Pajak yang dibayar di LN\n  2. Batas kredit di atas',
        examples: [
          'PKP total Rp1M. Penghasilan dari Singapura Rp200jt (pajak dibayar Rp30jt). PPh terutang total Rp220jt (22%). Batas kredit = (200/1.000) x 220 = Rp44jt. Kredit = min(30jt, 44jt) = Rp30jt.',
        ],
      },
    ],
  },
  {
    id: 'tax-planning',
    title: 'Perencanaan dan Strategi Pajak',
    description: 'Tax planning vs avoidance vs evasion, GAAR, insentif pajak, dan strategi efisiensi pajak yang legal.',
    sections: [
      {
        id: 'tp-strategi',
        title: 'Tax Planning, Avoidance, dan Evasion',
        content: 'Tax planning adalah upaya legal untuk mengoptimalkan beban pajak. Perbedaan penting antara perencanaan pajak yang sah, penghindaran pajak (avoidance), dan penggelapan pajak (evasion).',
        tables: [
          {
            caption: 'Perbedaan Tax Planning, Avoidance, dan Evasion',
            headers: ['Aspek', 'Tax Planning', 'Tax Avoidance', 'Tax Evasion'],
            rows: [
              ['Definisi', 'Optimalisasi beban pajak sesuai UU', 'Memanfaatkan celah hukum (loophole)', 'Melanggar ketentuan perpajakan'],
              ['Legalitas', 'Legal', 'Legal tapi bisa ditantang GAAR', 'Ilegal (pidana)'],
              ['Contoh', 'Memilih metode penyusutan optimal', 'Treaty shopping, thin capitalization', 'Memalsukan faktur, tidak lapor penghasilan'],
              ['Risiko', 'Rendah', 'Sedang (bisa di-GAAR)', 'Tinggi (pidana)'],
            ],
          },
          {
            caption: 'Insentif Pajak di Indonesia',
            headers: ['Insentif', 'Bentuk', 'Dasar Hukum'],
            rows: [
              ['Tax Holiday', 'Pembebasan PPh 5-20 tahun', 'PMK 130/2020'],
              ['Tax Allowance', 'Pengurangan penghasilan neto 30%', 'PP 78/2019'],
              ['Super Deduction R&D', 'Pengurangan biaya R&D s.d. 300%', 'PP 45/2019'],
              ['Super Deduction Vokasi', 'Pengurangan biaya pelatihan s.d. 200%', 'PP 45/2019'],
              ['UMKM PPh Final 0,5%', 'PPh final 0,5% (OP: omzet s.d. Rp500jt gratis)', 'PP 55/2022'],
              ['Kawasan Ekonomi Khusus', 'Berbagai fasilitas fiskal', 'PP 40/2021'],
            ],
          },
        ],
        rules: [
          'GAAR (General Anti-Avoidance Rule): DJP berwenang menentukan kembali besarnya pajak terutang jika transaksi tidak memiliki substansi ekonomi.',
          'Substance over form: DJP melihat substansi ekonomi, bukan bentuk hukum semata.',
        ],
        notes: ['Dokumentasi yang baik adalah kunci pertahanan jika diperiksa DJP.', 'Tax planning harus mempertimbangkan cost-benefit analysis.'],
      },
    ],
  },
],
  },
  {
    subjectId: 'audit-asurans',
    chapters: [
  {
    id: 'kerangka-asurans',
    title: 'Kerangka Perikatan Asurans',
    description: 'Jenis asurans, elemen perikatan, prasyarat audit, dan perbedaan antara audit, reviu, dan asurans lainnya.',
    sections: [
      {
        id: 'jenis-asurans',
        title: 'Jenis Perikatan Asurans',
        content: 'Perikatan asurans memberikan keyakinan atas suatu hal pokok. Dibedakan menjadi perikatan keyakinan memadai (reasonable assurance) dan keyakinan terbatas (limited assurance).',
        tables: [
          {
            caption: 'Perbandingan Jenis Perikatan',
            headers: ['Aspek', 'Audit (SA)', 'Reviu (SPR 2400)', 'Asurans Lain (SAT)'],
            rows: [
              ['Tingkat keyakinan', 'Memadai (reasonable)', 'Terbatas (limited)', 'Bervariasi'],
              ['Bentuk opini', 'Positif (menyajikan secara wajar)', 'Negatif (tidak menjumpai hal material)', 'Positif atau negatif'],
              ['Prosedur', 'Komprehensif (inspeksi, observasi, konfirmasi, dll)', 'Terutama inquiry & analytical procedures', 'Tergantung perikatan'],
              ['Standar', 'SA (Standar Audit)', 'SPR 2400', 'SAT 3000-3699'],
              ['Biaya', 'Tertinggi', 'Moderat', 'Bervariasi'],
            ],
          },
        ],
        rules: [
          'Lima elemen perikatan asurans: three-party relationship, subject matter, criteria, evidence, assurance report.',
          'Prasyarat audit: kerangka pelaporan keuangan yang dapat diterima, akses ke informasi, persetujuan manajemen atas tanggung jawabnya.',
          'Auditor harus independen dan memiliki kompetensi yang memadai.',
        ],
      },
    ],
  },
  {
    id: 'perencanaan-audit',
    title: 'Perencanaan Audit',
    description: 'Overall audit strategy, audit plan, penentuan materialitas, dan prosedur penilaian risiko awal.',
    sections: [
      {
        id: 'materialitas',
        title: 'Materialitas dalam Audit',
        content: 'Materialitas adalah besaran salah saji yang secara individual atau agregat dapat mempengaruhi keputusan ekonomi pengguna laporan keuangan. Auditor menetapkan materialitas pada tahap perencanaan dan merevisinya jika diperlukan.',
        tables: [
          {
            caption: 'Benchmark Materialitas',
            headers: ['Benchmark', 'Persentase Umum', 'Cocok Untuk'],
            rows: [
              ['Laba sebelum pajak', '5-10%', 'Perusahaan profit-oriented yang stabil'],
              ['Total pendapatan', '0,5-1%', 'Perusahaan dengan laba fluktuatif'],
              ['Total aset', '0,5-1%', 'Perusahaan aset-intensive (bank, properti)'],
              ['Total ekuitas', '1-2%', 'Entitas nirlaba atau startup'],
              ['Total beban', '0,5-1%', 'Entitas pemerintah, nirlaba'],
            ],
          },
          {
            caption: 'Jenis Materialitas',
            headers: ['Jenis', 'Definisi', 'Hubungan'],
            rows: [
              ['Overall Materiality', 'Materialitas LK secara keseluruhan', 'Ditetapkan pertama'],
              ['Performance Materiality', 'Materialitas untuk merancang prosedur', '60-85% dari overall materiality'],
              ['Specific Materiality', 'Untuk saldo/transaksi tertentu yang sensitif', 'Bisa lebih rendah dari overall'],
              ['Trivial/Clearly Trivial', 'Salah saji yang pasti tidak material', 'Biasanya 5% dari overall materiality'],
            ],
          },
        ],
        steps: [
          'Tentukan benchmark yang tepat berdasarkan karakteristik entitas.',
          'Terapkan persentase pada benchmark untuk mendapatkan overall materiality.',
          'Tetapkan performance materiality (biasanya 60-85% overall).',
          'Tetapkan threshold untuk akumulasi salah saji (clearly trivial).',
          'Revisi materialitas jika ada perubahan kondisi selama audit.',
        ],
        examples: [
          'Perusahaan manufaktur: Laba sebelum pajak Rp50M. Overall materiality = 5% x Rp50M = Rp2,5M. Performance materiality = 75% x 2,5M = Rp1,875M.',
        ],
      },
    ],
  },
  {
    id: 'audit-risiko',
    title: 'Audit Berbasis Risiko',
    description: 'Audit risk model, risk of material misstatement, inherent risk, control risk, detection risk, dan asersi.',
    sections: [
      {
        id: 'risk-model',
        title: 'Model Risiko Audit',
        content: 'Audit berbasis risiko memfokuskan upaya audit pada area dengan risiko salah saji material tertinggi. Risiko audit adalah risiko bahwa auditor memberikan opini yang tidak tepat.',
        formula: 'Audit Risk (AR) = RMM x DR\n= IR x CR x DR\n\nAR = Risiko Audit (ditetapkan auditor, biasanya 5%)\nRMM = Risk of Material Misstatement\nIR = Inherent Risk (risiko bawaan)\nCR = Control Risk (risiko pengendalian)\nDR = Detection Risk (risiko deteksi - dikendalikan auditor)\n\nDR = AR / (IR x CR)',
        tables: [
          {
            caption: 'Komponen Risiko Audit',
            headers: ['Risiko', 'Definisi', 'Siapa Kendalikan', 'Contoh Faktor'],
            rows: [
              ['Inherent Risk', 'Risiko salah saji sebelum pengendalian', 'Tidak bisa (bawaan entitas)', 'Kompleksitas transaksi, estimasi, industri regulasi tinggi'],
              ['Control Risk', 'Risiko pengendalian internal tidak mendeteksi salah saji', 'Manajemen (internal control)', 'Desain kontrol lemah, tidak ada segregation of duties'],
              ['Detection Risk', 'Risiko prosedur audit gagal mendeteksi salah saji', 'Auditor (prosedur audit)', 'Sampling, timing prosedur, kualitas bukti'],
            ],
          },
          {
            caption: 'Asersi (Assertions)',
            headers: ['Untuk', 'Asersi', 'Akronim', 'Penjelasan'],
            rows: [
              ['Transaksi', 'Occurrence', 'CEAVOP', 'Transaksi benar terjadi'],
              ['Transaksi', 'Completeness', '', 'Semua transaksi tercatat'],
              ['Transaksi', 'Accuracy', '', 'Jumlah dan data tepat'],
              ['Transaksi', 'Cutoff', '', 'Dicatat di periode yang tepat'],
              ['Transaksi', 'Classification', '', 'Diklasifikasikan dengan benar'],
              ['Saldo', 'Existence', 'CEROV', 'Aset/kewajiban ada'],
              ['Saldo', 'Completeness', '', 'Semua saldo tercatat'],
              ['Saldo', 'Rights & Obligations', '', 'Entitas memiliki hak/kewajiban'],
              ['Saldo', 'Valuation', '', 'Dicatat pada nilai yang tepat'],
            ],
          },
        ],
        notes: ['RMM tinggi maka DR harus rendah (lebih banyak prosedur substantif).', 'Significant risk = risiko yang memerlukan pertimbangan khusus (fraud, estimasi kompleks, transaksi unusual).'],
      },
    ],
  },
  {
    id: 'pengendalian-internal',
    title: 'Pengendalian Internal',
    description: 'COSO framework, IT controls, test of controls, dan evaluasi defisiensi pengendalian.',
    sections: [
      {
        id: 'coso',
        title: 'COSO Internal Control Framework',
        content: 'COSO 2013 adalah framework pengendalian internal yang paling banyak digunakan. Terdiri dari 5 komponen dan 17 prinsip yang saling terkait.',
        tables: [
          {
            caption: '5 Komponen COSO Internal Control',
            headers: ['Komponen', 'Deskripsi', 'Prinsip Kunci'],
            rows: [
              ['Control Environment', 'Tone at the top, integritas, komitmen terhadap kompetensi', 'Integritas & etika, oversight board, struktur organisasi'],
              ['Risk Assessment', 'Identifikasi dan analisis risiko pencapaian tujuan', 'Tujuan jelas, identifikasi risiko, pertimbangan fraud, perubahan signifikan'],
              ['Control Activities', 'Kebijakan dan prosedur untuk mitigasi risiko', 'Pemisahan tugas, otorisasi, verifikasi, IT controls'],
              ['Information & Communication', 'Identifikasi, capture, dan komunikasi informasi tepat waktu', 'Informasi relevan & berkualitas, komunikasi internal & eksternal'],
              ['Monitoring Activities', 'Evaluasi berkelanjutan atas efektivitas pengendalian', 'Monitoring ongoing & evaluasi terpisah, komunikasi defisiensi'],
            ],
          },
          {
            caption: 'Evaluasi Defisiensi Pengendalian',
            headers: ['Tingkat', 'Definisi', 'Komunikasi'],
            rows: [
              ['Deficiency', 'Desain/operasi kontrol tidak mampu mencegah/mendeteksi salah saji secara tepat waktu', 'Ke manajemen'],
              ['Significant Deficiency', 'Defisiensi cukup penting untuk perhatian TCWG', 'Ke TCWG (tertulis)'],
              ['Material Weakness', 'Kemungkinan reasonable salah saji material tidak dicegah/dideteksi tepat waktu', 'Ke TCWG (tertulis) + laporan audit'],
            ],
          },
        ],
        diagram: 'COSO Internal Control - Integrated Framework:\n\n                   Control Environment\n                  /                   \\\n        Risk Assessment     Information & Comm\n                  \\                   /\n                  Control Activities\n                         |\n                  Monitoring Activities\n\nBerlaku untuk: Operations, Reporting, Compliance\nPada level: Entity, Division, Operating Unit, Function',
      },
    ],
  },
  {
    id: 'bukti-audit',
    title: 'Bukti Audit',
    description: 'Kecukupan dan ketepatan bukti, prosedur audit, sampling, dan evaluasi salah saji.',
    sections: [
      {
        id: 'prosedur',
        title: 'Prosedur Audit dan Kualitas Bukti',
        content: 'Bukti audit harus sufficient (cukup kuantitas) dan appropriate (tepat kualitas: relevan dan andal). Keandalan bukti dipengaruhi sumber, sifat, dan kondisi perolehannya.',
        tables: [
          {
            caption: 'Prosedur Audit',
            headers: ['Prosedur', 'Deskripsi', 'Contoh', 'Keandalan'],
            rows: [
              ['Inspeksi', 'Pemeriksaan catatan, dokumen, atau aset fisik', 'Stock opname, cek dokumen kontrak', 'Tinggi (aset fisik)'],
              ['Observasi', 'Melihat proses/prosedur yang dilakukan orang lain', 'Mengamati penghitungan kas', 'Sedang (hanya saat itu)'],
              ['Konfirmasi Eksternal', 'Memperoleh respons tertulis dari pihak ketiga', 'Konfirmasi bank, konfirmasi piutang', 'Tinggi'],
              ['Perhitungan Ulang', 'Memeriksa keakuratan matematika', 'Cek footing, cross-footing', 'Tinggi'],
              ['Pelaksanaan Kembali', 'Mengulang prosedur pengendalian', 'Reperform rekonsiliasi bank', 'Tinggi'],
              ['Prosedur Analitis', 'Evaluasi hubungan antar data keuangan/non-keuangan', 'Ratio analysis, trend analysis', 'Sedang-Tinggi'],
              ['Inquiry', 'Memperoleh informasi dari pihak terkait', 'Wawancara manajemen', 'Rendah (butuh korroborasi)'],
            ],
          },
          {
            caption: 'Hierarki Keandalan Bukti',
            headers: ['Lebih Andal', 'Kurang Andal'],
            rows: [
              ['Sumber eksternal', 'Sumber internal'],
              ['Diperoleh langsung oleh auditor', 'Diperoleh dari entitas'],
              ['Dokumen asli', 'Fotokopi/faksimili'],
              ['Pengendalian internal efektif', 'Pengendalian internal lemah'],
              ['Bukti tertulis', 'Bukti lisan'],
            ],
          },
        ],
      },
      {
        id: 'sampling',
        title: 'Sampling Audit',
        content: 'Sampling audit diterapkan ketika tidak praktis memeriksa 100% populasi. Bisa statistical atau non-statistical sampling.',
        tables: [
          {
            caption: 'Perbandingan Metode Sampling',
            headers: ['Aspek', 'Statistical Sampling', 'Non-Statistical Sampling'],
            rows: [
              ['Pemilihan sampel', 'Random (setiap item punya kesempatan sama)', 'Judgmental'],
              ['Evaluasi hasil', 'Teknik statistik (confidence level)', 'Professional judgment'],
              ['Proyeksi', 'Dapat diproyeksikan secara statistik', 'Proyeksi berdasarkan judgment'],
              ['Standar', 'SA 530', 'SA 530'],
            ],
          },
        ],
        notes: ['Tolerable misstatement: salah saji maksimum yang masih bisa diterima.', 'Expected misstatement: perkiraan salah saji di populasi.', 'Sampling risk: risiko kesimpulan dari sampel berbeda dari populasi.'],
      },
    ],
  },
  {
    id: 'opini-audit',
    title: 'Opini Audit',
    description: 'Jenis opini, modifikasi, paragraf penekanan, going concern, dan Key Audit Matters (KAM).',
    sections: [
      {
        id: 'jenis-opini',
        title: 'Jenis Opini Audit',
        content: 'Auditor memberikan opini atas kewajaran laporan keuangan berdasarkan bukti audit yang diperoleh. Opini bisa unmodified atau modified.',
        tables: [
          {
            caption: 'Jenis Opini Audit (SA 700-706)',
            headers: ['Opini', 'Kondisi', 'Dampak terhadap LK'],
            rows: [
              ['WTP (Wajar Tanpa Pengecualian)', 'LK disajikan secara wajar dalam semua hal yang material', 'Tidak ada masalah'],
              ['WTP dengan Paragraf Penekanan', 'Wajar, tapi ada hal yang perlu diperhatikan pengguna (bukan disagreement)', 'Going concern, ketidakpastian'],
              ['WDP (Wajar Dengan Pengecualian)', 'Ada salah saji material tapi tidak pervasif, ATAU pembatasan ruang lingkup tapi tidak pervasif', 'Kecuali untuk... (except for)'],
              ['TW (Tidak Wajar / Adverse)', 'Salah saji material DAN pervasif', 'LK secara keseluruhan menyesatkan'],
              ['TMP (Tidak Memberikan Pendapat / Disclaimer)', 'Pembatasan ruang lingkup yang material DAN pervasif', 'Auditor tidak bisa memperoleh bukti cukup'],
            ],
          },
        ],
        diagram: 'Decision Tree Opini Audit:\n\nAda salah saji/pembatasan?\n  |\n  +-- Tidak -----> WTP\n  |\n  +-- Ya -------> Material?\n                    |\n                    +-- Tidak -> WTP\n                    |\n                    +-- Ya ----> Pervasif?\n                                  |\n                                  +-- Tidak -> WDP (Qualified)\n                                  |\n                                  +-- Ya\n                                       |\n                                       +-- Salah saji -> TW (Adverse)\n                                       +-- Pembatasan -> TMP (Disclaimer)',
        notes: ['KAM (Key Audit Matters) wajib untuk audit entitas terdaftar di bursa (SA 701).', 'Going concern assessment: evaluasi kemampuan entitas melanjutkan usaha 12 bulan ke depan.'],
      },
    ],
  },
  {
    id: 'audit-siklus',
    title: 'Audit atas Siklus Transaksi',
    description: 'Prosedur audit substantif untuk setiap siklus utama: pendapatan, pengeluaran, penggajian, investasi, dan kas.',
    sections: [
      {
        id: 'siklus-pendapatan',
        title: 'Siklus Pendapatan dan Siklus Pengeluaran',
        content: 'Siklus pendapatan mencakup penjualan dan piutang usaha. Siklus pengeluaran mencakup pembelian dan utang usaha. Risiko utama pada siklus pendapatan adalah overstatement (fictitious revenue), sementara risiko utama pada siklus pengeluaran adalah completeness.',
        tables: [
          {
            caption: 'Prosedur Substantif Kunci per Siklus',
            headers: ['Siklus', 'Asersi Utama', 'Prosedur Kunci'],
            rows: [
              ['Pendapatan', 'Occurrence', 'Vouching sales ke shipping docs & PO; cutoff testing'],
              ['Pendapatan', 'Completeness', 'Tracing shipping docs ke sales journal'],
              ['Piutang', 'Existence', 'Konfirmasi piutang; subsequent collection review'],
              ['Piutang', 'Valuation', 'Review allowance for doubtful accounts; aging analysis'],
              ['Pembelian', 'Completeness', 'Search for unrecorded liabilities; matching PO-receiving-invoice'],
              ['Utang Usaha', 'Existence', 'Konfirmasi utang; vouching ke receiving reports'],
              ['Persediaan', 'Existence', 'Observasi stock opname; test counts'],
              ['Persediaan', 'Valuation', 'Test NRV (Net Realizable Value); review obsolescence'],
              ['Kas', 'Existence', 'Konfirmasi bank; bank reconciliation review'],
              ['Kas', 'Completeness', 'Bank transfer testing (kiting); cutoff bank statements'],
            ],
          },
        ],
        notes: ['Presumed fraud risk: revenue recognition overstatement (SA 240).', 'Management override of controls adalah risiko fraud di semua audit.'],
      },
    ],
  },
  {
    id: 'pelaporan',
    title: 'Pelaporan dan Tanggung Jawab Auditor',
    description: 'Laporan auditor independen, subsequent events, management representations, komunikasi dengan TCWG, dan audit grup.',
    sections: [
      {
        id: 'laporan-auditor',
        title: 'Struktur Laporan Auditor Independen',
        content: 'Laporan auditor mengikuti format standar SA 700. Untuk entitas terdaftar di bursa, wajib mencantumkan Key Audit Matters (KAM).',
        tables: [
          {
            caption: 'Elemen Laporan Auditor (SA 700)',
            headers: ['Elemen', 'Isi', 'Keterangan'],
            rows: [
              ['Judul', 'Laporan Auditor Independen', 'Wajib kata "Independen"'],
              ['Pihak yang dituju', 'Pemegang saham/TCWG', 'Sesuai perikatan'],
              ['Paragraf Opini', 'Opini auditor atas LK', 'Bagian pertama'],
              ['Basis Opini', 'Standar audit, independensi, bukti cukup', 'Termasuk pernyataan independensi'],
              ['Going Concern (jika ada)', 'Ketidakpastian material', 'SA 570'],
              ['KAM', 'Hal-hal paling signifikan', 'Wajib untuk listed entity (SA 701)'],
              ['Tanggung jawab manajemen', 'Atas penyusunan LK', 'Termasuk going concern assessment'],
              ['Tanggung jawab auditor', 'Atas opini berdasarkan audit', 'Reasonable assurance, bukan absolut'],
              ['Tanda tangan, tanggal, alamat', 'Identitas auditor', 'Tanggal = tanggal selesai fieldwork'],
            ],
          },
        ],
        rules: [
          'Subsequent events (SA 560): tipe 1 (adjusting) dan tipe 2 (non-adjusting).',
          'Management representation letter (SA 580) wajib diperoleh sebelum tanggal laporan audit.',
          'Komunikasi dengan TCWG (SA 260): significant findings, difficulties, independence.',
        ],
      },
    ],
  },
],
  },
  {
    subjectId: 'akuntansi-manajemen',
    chapters: [
  {
    id: 'konsep-biaya',
    title: 'Konsep Biaya dan Klasifikasi',
    description: 'Klasifikasi biaya berdasarkan perilaku, fungsi, relevansi, dan hubungannya dengan objek biaya.',
    sections: [
      {
        id: 'klasifikasi',
        title: 'Klasifikasi Biaya',
        content: 'Pemahaman klasifikasi biaya sangat penting untuk pengambilan keputusan, perencanaan, dan pengendalian. Biaya diklasifikasikan berdasarkan berbagai kriteria tergantung tujuan penggunaannya.',
        tables: [
          {
            caption: 'Klasifikasi Biaya Berdasarkan Berbagai Kriteria',
            headers: ['Kriteria', 'Jenis', 'Definisi', 'Contoh'],
            rows: [
              ['Perilaku', 'Variabel', 'Berubah proporsional dengan aktivitas', 'Bahan baku langsung, komisi penjualan'],
              ['Perilaku', 'Tetap', 'Tidak berubah dalam rentang relevan', 'Sewa gedung, gaji manajer'],
              ['Perilaku', 'Semi-variabel (campuran)', 'Ada komponen tetap dan variabel', 'Listrik (abonemen + pemakaian), telepon'],
              ['Fungsi', 'Produksi', 'Terkait proses manufaktur', 'Bahan baku, tenaga kerja langsung, BOP'],
              ['Fungsi', 'Non-produksi', 'Penjualan dan administrasi', 'Iklan, gaji admin, komisi sales'],
              ['Hubungan objek', 'Langsung', 'Dapat ditelusuri ke objek biaya', 'Bahan baku, TKL'],
              ['Hubungan objek', 'Tidak langsung', 'Tidak dapat ditelusuri langsung', 'BOP, gaji supervisor'],
              ['Relevansi', 'Relevan', 'Berbeda antar alternatif, terjadi di masa depan', 'Differential cost'],
              ['Relevansi', 'Tidak relevan (sunk)', 'Sudah terjadi, tidak dapat diubah', 'Biaya riset yang sudah dikeluarkan'],
              ['Laporan keuangan', 'Product cost', 'Melekat pada persediaan', 'BBB, TKL, BOP'],
              ['Laporan keuangan', 'Period cost', 'Langsung dibebankan ke periode', 'Biaya penjualan, administrasi'],
            ],
          },
        ],
        notes: ['Opportunity cost: manfaat yang dikorbankan dari alternatif terbaik yang tidak dipilih.', 'Sunk cost tidak relevan untuk pengambilan keputusan.'],
      },
    ],
  },
  {
    id: 'costing-systems',
    title: 'Sistem Kalkulasi Biaya (Costing Systems)',
    description: 'Job order costing, process costing, ABC, variable vs absorption costing, dan rekonsiliasi laba.',
    sections: [
      {
        id: 'job-process',
        title: 'Job Order vs Process Costing',
        content: 'Job order costing menelusuri biaya ke setiap pekerjaan/pesanan unik. Process costing mengakumulasi biaya per departemen/proses untuk produksi massal yang homogen.',
        tables: [
          {
            caption: 'Perbandingan Sistem Kalkulasi Biaya',
            headers: ['Aspek', 'Job Order Costing', 'Process Costing', 'ABC'],
            rows: [
              ['Produk', 'Unik/customized', 'Homogen/massal', 'Beragam/kompleks'],
              ['Akumulasi biaya', 'Per job/pesanan', 'Per proses/departemen', 'Per aktivitas'],
              ['Cost driver', 'Job-specific', 'Unit ekuivalen', 'Multiple cost drivers'],
              ['Contoh industri', 'Konstruksi, percetakan, bengkel', 'Semen, kimia, makanan', 'Manufaktur multi-produk'],
              ['Dokumen kunci', 'Job cost sheet', 'Production cost report', 'Activity rate sheet'],
            ],
          },
        ],
        notes: ['Process costing: dua metode untuk unit ekuivalen - weighted average dan FIFO.', 'Weighted average menggabungkan biaya awal + biaya periode; FIFO memisahkan.'],
      },
      {
        id: 'var-abs',
        title: 'Variable Costing vs Absorption Costing',
        content: 'Variable costing hanya memasukkan biaya variabel ke product cost. Absorption costing memasukkan biaya tetap dan variabel. Perbedaan laba terjadi ketika produksi tidak sama dengan penjualan.',
        tables: [
          {
            caption: 'Perbandingan Variable vs Absorption Costing',
            headers: ['Aspek', 'Variable Costing', 'Absorption Costing'],
            rows: [
              ['BOP Tetap', 'Period cost (langsung ke laporan laba rugi)', 'Product cost (masuk ke persediaan)'],
              ['Laba jika produksi > penjualan', 'Lebih rendah', 'Lebih tinggi (BOP tetap tersimpan di persediaan)'],
              ['Laba jika produksi < penjualan', 'Lebih tinggi', 'Lebih rendah (BOP tetap dari persediaan sebelumnya dibebankan)'],
              ['Laba jika produksi = penjualan', 'Sama', 'Sama'],
              ['Penggunaan', 'Internal (pengambilan keputusan)', 'Eksternal (wajib SAK/GAAP)'],
            ],
          },
        ],
        formula: 'Selisih Laba = Perubahan Persediaan (unit) x BOP Tetap per unit\n\nJika persediaan naik: Absorption > Variable\nJika persediaan turun: Variable > Absorption',
        examples: ['Produksi 10.000, jual 8.000. BOP tetap Rp50jt. BOP tetap/unit = Rp5.000. Laba absorption lebih tinggi = 2.000 x Rp5.000 = Rp10jt.'],
      },
    ],
  },
  {
    id: 'cvp',
    title: 'Cost-Volume-Profit (CVP) Analysis',
    description: 'Analisis titik impas, contribution margin, margin of safety, operating leverage, dan target laba.',
    sections: [
      {
        id: 'cvp-analisis',
        title: 'Break-Even dan Target Profit',
        content: 'CVP analysis mempelajari hubungan antara biaya, volume, dan laba untuk membantu pengambilan keputusan jangka pendek. Asumsi: biaya linear, harga konstan, sales mix konstan.',
        formula: 'BEP (unit) = Fixed Costs / CM per unit\nBEP (Rp) = Fixed Costs / CM Ratio\n\nCM per unit = Harga - Biaya Variabel per unit\nCM Ratio = CM / Penjualan\n\nTarget Profit (unit) = (FC + Target Profit) / CM per unit\nTarget After-Tax Profit: (FC + Target/(1-T)) / CM per unit\n\nMargin of Safety = Actual Sales - BEP Sales\nMoS% = MoS / Actual Sales\n\nDOL = CM / Operating Income',
        tables: [
          {
            caption: 'Ringkasan Rumus CVP',
            headers: ['Konsep', 'Rumus', 'Interpretasi'],
            rows: [
              ['BEP units', 'FC / CM per unit', 'Volume penjualan agar laba = 0'],
              ['BEP sales', 'FC / CM ratio', 'Pendapatan agar laba = 0'],
              ['Margin of Safety', 'Actual - BEP', 'Penurunan penjualan sebelum rugi'],
              ['DOL', 'CM / OI', 'Multiplier perubahan laba terhadap penjualan'],
            ],
          },
        ],
        examples: [
          'Harga Rp100rb, VC Rp60rb, FC Rp200jt. CM=Rp40rb. BEP = 200jt/40rb = 5.000 unit.',
          'DOL: CM Rp400jt, OI Rp200jt. DOL = 2,0x. Sales naik 10% maka OI naik 20%.',
          'Target laba Rp100jt after tax (T=22%): Target before tax = 100jt/0,78 = Rp128,2jt. Units = (200jt+128,2jt)/40rb = 8.205 unit.',
        ],
        warning: 'CVP asumsi linear - valid hanya dalam relevant range. Di luar itu, biaya tetap bisa berubah.',
      },
    ],
  },
  {
    id: 'budgeting',
    title: 'Anggaran (Budgeting)',
    description: 'Master budget, sales budget, production budget, cash budget, flexible budget, dan zero-based budgeting.',
    sections: [
      {
        id: 'master-budget',
        title: 'Master Budget dan Cash Budget',
        content: 'Master budget adalah rencana keuangan komprehensif yang terdiri dari operating budget dan financial budget. Proses dimulai dari sales budget.',
        steps: [
          'Sales Budget: Estimasi unit terjual x harga jual.',
          'Production Budget: Sales + ending inventory - beginning inventory.',
          'Direct Materials Budget: Production x material/unit + ending inv - beginning inv.',
          'Direct Labor Budget: Production x jam/unit x tarif.',
          'Manufacturing Overhead Budget: Variabel (per unit) + tetap.',
          'Selling & Admin Budget: Variabel + tetap.',
          'Cash Budget: Cash in - cash out + beginning cash = ending cash.',
          'Pro Forma Income Statement dan Balance Sheet.',
        ],
        tables: [
          {
            caption: 'Contoh Cash Budget',
            headers: ['Item', 'Q1', 'Q2', 'Q3', 'Q4'],
            rows: [
              ['Saldo awal kas', 'Rp50jt', 'Rp45jt', 'Rp60jt', 'Rp75jt'],
              ['Penerimaan kas', 'Rp200jt', 'Rp250jt', 'Rp300jt', 'Rp280jt'],
              ['Total kas tersedia', 'Rp250jt', 'Rp295jt', 'Rp360jt', 'Rp355jt'],
              ['Pengeluaran kas', 'Rp205jt', 'Rp235jt', 'Rp285jt', 'Rp270jt'],
              ['Saldo akhir kas', 'Rp45jt', 'Rp60jt', 'Rp75jt', 'Rp85jt'],
            ],
          },
          {
            caption: 'Perbandingan Jenis Anggaran',
            headers: ['Jenis', 'Deskripsi', 'Kelebihan'],
            rows: [
              ['Static Budget', 'Berdasarkan satu level aktivitas', 'Sederhana, baseline'],
              ['Flexible Budget', 'Disesuaikan untuk aktivitas aktual', 'Evaluasi kinerja lebih adil'],
              ['Zero-Based (ZBB)', 'Setiap item harus dijustifikasi dari nol', 'Menghilangkan pemborosan'],
              ['Kaizen', 'Perbaikan berkelanjutan (continuous improvement)', 'Target cost reduction ongoing'],
              ['Rolling/Continuous', 'Selalu 12 bulan ke depan', 'Selalu up-to-date'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'variance',
    title: 'Analisis Varians (Variance Analysis)',
    description: 'Standard costing, varians material, labor, overhead, dan analisis 2-way, 3-way, 4-way overhead.',
    sections: [
      {
        id: 'var-material-labor',
        title: 'Varians Material dan Labor',
        content: 'Varians mengukur perbedaan antara biaya standar dan biaya aktual. Favorable (F) jika aktual < standar, Unfavorable (U) jika aktual > standar.',
        tables: [
          {
            caption: 'Rumus Varians Material dan Labor',
            headers: ['Varians', 'Rumus', 'Penyebab Umum'],
            rows: [
              ['Material Price Variance', '(AP - SP) x AQ purchased', 'Negosiasi harga, inflasi, kualitas bahan'],
              ['Material Quantity Variance', '(AQ used - SQ allowed) x SP', 'Waste, efisiensi, kualitas bahan'],
              ['Labor Rate Variance', '(AR - SR) x AH', 'Campuran skill, lembur, kenaikan upah'],
              ['Labor Efficiency Variance', '(AH - SH allowed) x SR', 'Produktivitas, pelatihan, motivasi'],
            ],
          },
        ],
        formula: 'AP = Actual Price, SP = Standard Price\nAQ = Actual Quantity, SQ = Standard Quantity allowed\nAR = Actual Rate, SR = Standard Rate\nAH = Actual Hours, SH = Standard Hours allowed\n\nSQ allowed = Actual output x Standard qty per unit\nSH allowed = Actual output x Standard hours per unit',
        examples: [
          'Material: SP=Rp5.000, AP=Rp5.200, AQ=10.500 kg, SQ=10.000 kg. MPV = (5.200-5.000)x10.500 = Rp2,1jt U. MQV = (10.500-10.000)x5.000 = Rp2,5jt U.',
        ],
      },
      {
        id: 'var-overhead',
        title: 'Varians Overhead',
        content: 'Overhead variance lebih kompleks karena overhead terdiri dari komponen tetap dan variabel. Bisa dianalisis 2-way, 3-way, atau 4-way.',
        tables: [
          {
            caption: 'Analisis Varians Overhead',
            headers: ['Analisis', 'Komponen', 'Rumus'],
            rows: [
              ['2-Way', 'Budget Variance', 'Actual OH - Flexible Budget OH'],
              ['2-Way', 'Volume Variance', 'Flexible Budget OH - Applied OH'],
              ['3-Way', 'Spending Variance', 'Actual OH - Budget based on actual hours'],
              ['3-Way', 'Efficiency Variance', '(AH - SH) x Variable OH rate'],
              ['3-Way', 'Volume Variance', 'Budgeted Fixed OH - Applied Fixed OH'],
              ['4-Way', 'Variable Spending', 'Actual Var OH - (AH x Var rate)'],
              ['4-Way', 'Variable Efficiency', '(AH - SH) x Var rate'],
              ['4-Way', 'Fixed Spending', 'Actual Fixed OH - Budgeted Fixed OH'],
              ['4-Way', 'Fixed Volume', 'Budgeted Fixed OH - Applied Fixed OH'],
            ],
          },
        ],
        notes: ['Volume variance hanya muncul untuk fixed overhead.', 'Volume variance = (Actual output - Budgeted output) x Fixed OH rate.'],
      },
    ],
  },
  {
    id: 'decision-making',
    title: 'Pengambilan Keputusan (Decision Making)',
    description: 'Relevant cost analysis, make or buy, special order, product mix, drop segment, dan sell or process further.',
    sections: [
      {
        id: 'relevant-cost',
        title: 'Analisis Biaya Relevan',
        content: 'Keputusan jangka pendek hanya mempertimbangkan biaya dan pendapatan yang relevan: yang berbeda antar alternatif dan terjadi di masa depan. Sunk cost TIDAK relevan.',
        tables: [
          {
            caption: 'Jenis Keputusan dan Analisis Relevan',
            headers: ['Keputusan', 'Fokus Analisis', 'Aturan Keputusan'],
            rows: [
              ['Make or Buy', 'Bandingkan relevant cost membuat vs harga beli', 'Buy jika harga beli < relevant cost to make (+ opportunity cost)'],
              ['Special Order', 'Revenue tambahan vs variable cost + incremental fixed cost', 'Terima jika contribution margin positif (ada kapasitas idle)'],
              ['Product Mix (Constraint)', 'CM per unit constraint (bottleneck)', 'Prioritaskan produk dengan CM/constraint tertinggi'],
              ['Drop Segment', 'Segment margin (revenue - traceable costs)', 'Drop jika segment margin negatif (hati-hati allocated costs)'],
              ['Sell or Process Further', 'Incremental revenue vs incremental cost', 'Process further jika incremental revenue > incremental cost'],
            ],
          },
        ],
        examples: [
          'Make or Buy: Buat sendiri Rp15.000/unit (BBB 5rb, TKL 4rb, VOH 3rb, FOH allocated 3rb). Beli Rp13.000. Relevant cost to make = 5+4+3 = Rp12.000 (FOH allocated tetap ada). Make!',
          'Special order: Harga normal Rp100rb, VC Rp60rb. Special order Rp70rb x 1.000 unit. Kapasitas idle tersedia. CM = 70-60 = Rp10rb/unit. Terima (tambah laba Rp10jt).',
          'Product Mix: Produk A CM=Rp40, pakai 2 jam mesin. Produk B CM=Rp30, pakai 1 jam. CM/jam: A=Rp20, B=Rp30. Prioritaskan B!',
        ],
        warning: 'Jangan alokasikan fixed costs ke keputusan - hanya gunakan avoidable/traceable costs.',
      },
    ],
  },
  {
    id: 'performance',
    title: 'Pengukuran Kinerja',
    description: 'Responsibility accounting, ROI, residual income, EVA, dan balanced scorecard.',
    sections: [
      {
        id: 'responsibility',
        title: 'Pusat Pertanggungjawaban dan Ukuran Kinerja',
        content: 'Responsibility accounting mengevaluasi manajer berdasarkan apa yang dapat mereka kendalikan. Empat jenis pusat pertanggungjawaban: cost, revenue, profit, dan investment center.',
        tables: [
          {
            caption: 'Pusat Pertanggungjawaban',
            headers: ['Pusat', 'Bertanggung Jawab Atas', 'Ukuran Kinerja'],
            rows: [
              ['Cost Center', 'Biaya saja', 'Varians biaya, efisiensi'],
              ['Revenue Center', 'Pendapatan saja', 'Varians penjualan, market share'],
              ['Profit Center', 'Pendapatan dan biaya', 'Profit margin, contribution margin'],
              ['Investment Center', 'Pendapatan, biaya, dan investasi', 'ROI, RI, EVA'],
            ],
          },
          {
            caption: 'Perbandingan ROI, RI, dan EVA',
            headers: ['Ukuran', 'Rumus', 'Kelebihan', 'Kekurangan'],
            rows: [
              ['ROI', 'Operating Income / Invested Capital', 'Mudah dipahami, comparable', 'Mendorong underinvestment'],
              ['Residual Income', 'OI - (IC x Required Rate)', 'Mendorong investasi menguntungkan', 'Tidak comparable antar ukuran divisi'],
              ['EVA', 'NOPAT - (IC x WACC)', 'Mengukur value creation sebenarnya', 'Kompleks, banyak adjustment'],
            ],
          },
        ],
        formula: 'ROI = Operating Income / Invested Capital\n    = Net Margin x Asset Turnover (DuPont)\n\nRI = Operating Income - (Invested Capital x Minimum Required Rate)\n\nEVA = NOPAT - (Invested Capital x WACC)\n    = (ROIC - WACC) x Invested Capital',
        examples: [
          'Divisi A: OI Rp100jt, IC Rp500jt. ROI = 20%. Required rate 15%. RI = 100 - (500x15%) = Rp25jt.',
          'Proyek baru: Investasi Rp200jt, expected return 18%. ROI divisi = 20%. Manajer ROI-based akan menolak (18% < 20%), tapi RI-based akan terima (18% > 15% required).',
        ],
      },
      {
        id: 'bsc',
        title: 'Balanced Scorecard (BSC)',
        content: 'BSC mengukur kinerja dari empat perspektif yang seimbang, tidak hanya keuangan. Dikembangkan oleh Kaplan & Norton.',
        tables: [
          {
            caption: 'Empat Perspektif Balanced Scorecard',
            headers: ['Perspektif', 'Pertanyaan Kunci', 'Contoh KPI'],
            rows: [
              ['Financial', 'Bagaimana kita dilihat pemegang saham?', 'ROE, revenue growth, EVA, operating margin'],
              ['Customer', 'Bagaimana pelanggan melihat kita?', 'Customer satisfaction, retention, acquisition, market share'],
              ['Internal Process', 'Proses apa yang harus unggul?', 'Cycle time, defect rate, on-time delivery, innovation'],
              ['Learning & Growth', 'Bisakah kita terus improve?', 'Employee satisfaction, training hours, IT capability'],
            ],
          },
        ],
        diagram: 'Balanced Scorecard Strategy Map:\n\n    Financial\n       |\n    Customer\n       |\n    Internal Process\n       |\n    Learning & Growth\n\nCause-effect: Learning -> better processes -> satisfy customers -> financial results',
        notes: ['BSC bukan hanya pengukuran - juga alat komunikasi strategi.', 'Strategy map menunjukkan hubungan cause-effect antar perspektif.'],
      },
    ],
  },
  {
    id: 'strategic-ma',
    title: 'Strategic Management Accounting',
    description: 'Target costing, life cycle costing, quality costs, value chain analysis, dan beyond budgeting.',
    sections: [
      {
        id: 'target-costing',
        title: 'Target Costing dan Quality Costs',
        content: 'Target costing menentukan biaya yang diperbolehkan berdasarkan harga pasar dan margin yang diinginkan. Berbeda dari cost-plus pricing tradisional.',
        formula: 'Target Cost = Target Price - Target Profit\n(Market-driven, bukan cost-driven)\n\nVs traditional:\nSelling Price = Cost + Markup',
        tables: [
          {
            caption: 'Cost of Quality (PAF Model)',
            headers: ['Kategori', 'Definisi', 'Contoh'],
            rows: [
              ['Prevention Costs', 'Biaya mencegah defect', 'Training, quality planning, process improvement'],
              ['Appraisal Costs', 'Biaya mendeteksi defect', 'Inspeksi, testing, audit kualitas'],
              ['Internal Failure', 'Biaya defect sebelum kirim ke pelanggan', 'Rework, scrap, downtime'],
              ['External Failure', 'Biaya defect setelah sampai pelanggan', 'Warranty, returns, lawsuits, lost customers'],
            ],
          },
          {
            caption: 'Perbandingan Pendekatan Biaya Strategis',
            headers: ['Pendekatan', 'Fokus', 'Kapan Digunakan'],
            rows: [
              ['Target Costing', 'Market price - margin = target cost', 'Desain produk baru'],
              ['Kaizen Costing', 'Continuous cost reduction', 'Proses produksi ongoing'],
              ['Life Cycle Costing', 'Total cost dari R&D sampai disposal', 'Produk dengan siklus panjang'],
              ['Value Chain Analysis', 'Identifikasi value-adding vs non-value-adding', 'Analisis kompetitif'],
            ],
          },
        ],
        notes: ['Investasi di prevention & appraisal umumnya mengurangi failure costs yang jauh lebih mahal.', '1-10-100 rule: biaya perbaikan naik 10x setiap tahap (prevention vs internal vs external failure).'],
      },
    ],
  },
],
  },
  {
    subjectId: 'manajemen-stratejik',
    chapters: [
  {
    id: 'analisis-eksternal',
    title: 'Analisis Lingkungan Eksternal',
    description: 'PESTEL, Porter\'s Five Forces, industry life cycle, dan analisis kelompok strategis untuk memahami lingkungan persaingan.',
    sections: [
      {
        id: 'pestel',
        title: 'Analisis PESTEL',
        content: 'PESTEL menganalisis faktor-faktor makro-lingkungan yang mempengaruhi organisasi. Setiap faktor dapat menjadi peluang atau ancaman.',
        tables: [
          {
            caption: 'Framework PESTEL',
            headers: ['Faktor', 'Deskripsi', 'Contoh di Indonesia'],
            rows: [
              ['Political', 'Kebijakan pemerintah, stabilitas politik, regulasi', 'Omnibus Law, kebijakan investasi, pemilu'],
              ['Economic', 'Pertumbuhan GDP, inflasi, suku bunga, kurs', 'BI rate, inflasi, pertumbuhan ekonomi'],
              ['Social', 'Demografi, budaya, gaya hidup, pendidikan', 'Bonus demografi, urbanisasi, kelas menengah'],
              ['Technological', 'Inovasi, digitalisasi, R&D', 'Fintech, e-commerce, Industry 4.0'],
              ['Environmental', 'Isu lingkungan, regulasi hijau, keberlanjutan', 'ESG, carbon neutrality, PROPER'],
              ['Legal', 'Hukum bisnis, perlindungan konsumen, tenaga kerja', 'UU Cipta Kerja, UU PDP, UU Persaingan Usaha'],
            ],
          },
        ],
      },
      {
        id: 'five-forces',
        title: 'Porter\'s Five Forces',
        content: 'Model Lima Kekuatan Porter menganalisis intensitas persaingan dan daya tarik industri. Semakin kuat kekuatan-kekuatan ini, semakin rendah profitabilitas industri.',
        tables: [
          {
            caption: 'Lima Kekuatan Porter',
            headers: ['Kekuatan', 'Faktor yang Meningkatkan', 'Faktor yang Menurunkan'],
            rows: [
              ['Rivalitas antar pesaing', 'Banyak pesaing, pertumbuhan lambat, fixed cost tinggi, produk homogen', 'Sedikit pesaing, pertumbuhan tinggi, diferensiasi kuat'],
              ['Ancaman pendatang baru', 'Hambatan masuk rendah, modal kecil', 'Ekonomi skala, brand loyalty, regulasi ketat, switching cost tinggi'],
              ['Ancaman substitusi', 'Banyak alternatif, harga substitusi rendah', 'Switching cost tinggi, kualitas substitusi rendah'],
              ['Daya tawar supplier', 'Sedikit supplier, input unik, switching cost tinggi', 'Banyak supplier, input standar'],
              ['Daya tawar buyer', 'Sedikit buyer besar, produk standar, informasi lengkap', 'Banyak buyer kecil, produk unik, switching cost tinggi'],
            ],
          },
        ],
        diagram: 'Porter\'s Five Forces:\n\n                Ancaman\n              Pendatang Baru\n                   |\n  Daya Tawar  -- Rivalitas --  Daya Tawar\n  Supplier       Industri       Buyer\n                   |\n                Ancaman\n                Substitusi',
      },
    ],
  },
  {
    id: 'analisis-internal',
    title: 'Analisis Internal',
    description: 'Value chain analysis, resource-based view (VRIN), core competencies, dan SWOT analysis.',
    sections: [
      {
        id: 'value-chain',
        title: 'Value Chain dan Resource-Based View',
        content: 'Value chain (Porter) mengidentifikasi aktivitas yang menciptakan nilai. RBV fokus pada sumber daya dan kapabilitas internal sebagai sumber keunggulan kompetitif.',
        tables: [
          {
            caption: 'Aktivitas Value Chain (Porter)',
            headers: ['Kategori', 'Aktivitas', 'Contoh'],
            rows: [
              ['Primary - Inbound Logistics', 'Penerimaan, penyimpanan, distribusi input', 'Gudang bahan baku, quality control masuk'],
              ['Primary - Operations', 'Transformasi input menjadi output', 'Manufaktur, assembly, packaging'],
              ['Primary - Outbound Logistics', 'Pengumpulan, penyimpanan, distribusi output', 'Warehouse finished goods, pengiriman'],
              ['Primary - Marketing & Sales', 'Mempengaruhi pembeli', 'Iklan, promosi, sales force, pricing'],
              ['Primary - Service', 'Mempertahankan nilai produk', 'After-sales service, warranty, repair'],
              ['Support - Procurement', 'Pembelian input', 'Purchasing department, vendor management'],
              ['Support - Technology Dev', 'Pengembangan teknologi', 'R&D, IT systems, process improvement'],
              ['Support - HR Management', 'Pengelolaan SDM', 'Rekrutmen, training, compensation'],
              ['Support - Firm Infrastructure', 'Manajemen umum', 'Finance, legal, strategic planning'],
            ],
          },
          {
            caption: 'Kriteria VRIN (Resource-Based View)',
            headers: ['Kriteria', 'Pertanyaan', 'Implikasi'],
            rows: [
              ['Valuable', 'Apakah sumber daya ini menciptakan nilai?', 'Jika tidak, bukan sumber keunggulan'],
              ['Rare', 'Apakah jarang dimiliki pesaing?', 'Jika tidak, hanya keunggulan sementara'],
              ['Inimitable', 'Apakah sulit ditiru?', 'Jika mudah ditiru, keunggulan tidak bertahan'],
              ['Non-substitutable', 'Apakah tidak ada substitusi?', 'Jika ada substitusi, keunggulan terkikis'],
            ],
          },
        ],
        notes: ['Keunggulan kompetitif berkelanjutan memerlukan keempat kriteria VRIN terpenuhi.'],
      },
    ],
  },
  {
    id: 'corporate-strategy',
    title: 'Strategi Korporat',
    description: 'Ansoff matrix, BCG matrix, GE-McKinsey, diversifikasi, integrasi vertikal, dan M&A.',
    sections: [
      {
        id: 'portfolio',
        title: 'Portfolio Analysis dan Growth Strategy',
        content: 'Strategi korporat menentukan di bisnis mana perusahaan berkompetisi dan bagaimana mengelola portofolio bisnis.',
        tables: [
          {
            caption: 'Ansoff Growth Matrix',
            headers: ['', 'Produk Existing', 'Produk Baru'],
            rows: [
              ['Pasar Existing', 'Market Penetration (risiko rendah)', 'Product Development (risiko sedang)'],
              ['Pasar Baru', 'Market Development (risiko sedang)', 'Diversification (risiko tinggi)'],
            ],
          },
          {
            caption: 'BCG Matrix',
            headers: ['Kuadran', 'Market Growth', 'Market Share', 'Strategi'],
            rows: [
              ['Star', 'Tinggi', 'Tinggi', 'Investasi untuk maintain leadership'],
              ['Cash Cow', 'Rendah', 'Tinggi', 'Harvest cash, minimal investasi'],
              ['Question Mark', 'Tinggi', 'Rendah', 'Invest to grow atau divest'],
              ['Dog', 'Rendah', 'Rendah', 'Divest atau liquidate'],
            ],
          },
          {
            caption: 'Jenis Diversifikasi',
            headers: ['Jenis', 'Definisi', 'Contoh', 'Sinergi'],
            rows: [
              ['Related (Concentric)', 'Bisnis baru terkait bisnis existing', 'Unilever: makanan + personal care', 'Tinggi (shared resources)'],
              ['Unrelated (Conglomerate)', 'Bisnis baru tidak terkait', 'Astra: otomotif + keuangan + agri', 'Rendah (financial diversification)'],
              ['Vertikal ke hulu', 'Akuisisi supplier', 'Produsen CPO beli perkebunan', 'Kontrol supply chain'],
              ['Vertikal ke hilir', 'Akuisisi distributor/retail', 'Produsen buka toko sendiri', 'Kontrol distribusi'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'business-strategy',
    title: 'Strategi Bisnis',
    description: 'Porter\'s generic strategies, blue ocean strategy, keunggulan kompetitif, dan strategic clock.',
    sections: [
      {
        id: 'generic',
        title: 'Generic Strategies dan Blue Ocean',
        content: 'Porter mengidentifikasi tiga strategi generik: cost leadership, differentiation, dan focus. Blue Ocean Strategy menciptakan pasar baru tanpa persaingan.',
        tables: [
          {
            caption: 'Porter\'s Generic Strategies',
            headers: ['Strategi', 'Basis Keunggulan', 'Target', 'Risiko'],
            rows: [
              ['Cost Leadership', 'Biaya terendah di industri', 'Pasar luas', 'Perang harga, imitasi, teknologi baru'],
              ['Differentiation', 'Produk/layanan unik', 'Pasar luas', 'Premium terlalu tinggi, imitasi'],
              ['Focus - Cost', 'Biaya rendah di segmen tertentu', 'Niche market', 'Segmen tidak cukup besar, fokus hilang'],
              ['Focus - Differentiation', 'Keunikan di segmen tertentu', 'Niche market', 'Segmen ditiru, pasar menyusut'],
            ],
          },
          {
            caption: 'Red Ocean vs Blue Ocean',
            headers: ['Aspek', 'Red Ocean', 'Blue Ocean'],
            rows: [
              ['Ruang pasar', 'Existing, batas jelas', 'Baru, diciptakan'],
              ['Persaingan', 'Head-to-head', 'Tidak relevan (no competition)'],
              ['Demand', 'Eksploitasi demand existing', 'Ciptakan demand baru'],
              ['Value-cost', 'Trade-off (value OR cost)', 'Keduanya (value AND cost)'],
              ['Contoh', 'Airline tradisional', 'Cirque du Soleil, GoJek'],
            ],
          },
        ],
        notes: ['Stuck in the middle: perusahaan yang tidak berhasil di strategi manapun (cost maupun differentiation).'],
      },
    ],
  },
  {
    id: 'implementasi',
    title: 'Implementasi Strategi',
    description: 'McKinsey 7S, struktur organisasi, dan manajemen perubahan (Kotter, Lewin).',
    sections: [
      {
        id: 'seven-s',
        title: 'McKinsey 7S dan Change Management',
        content: 'Implementasi strategi memerlukan keselarasan antara berbagai elemen organisasi. McKinsey 7S mengidentifikasi 7 faktor yang harus selaras.',
        tables: [
          {
            caption: 'McKinsey 7S Framework',
            headers: ['Elemen', 'Kategori', 'Deskripsi'],
            rows: [
              ['Strategy', 'Hard', 'Rencana untuk mencapai keunggulan kompetitif'],
              ['Structure', 'Hard', 'Cara organisasi distrukturkan (hierarki, divisi)'],
              ['Systems', 'Hard', 'Proses dan prosedur (IT, HR, finance)'],
              ['Shared Values', 'Soft (pusat)', 'Nilai inti dan budaya organisasi'],
              ['Style', 'Soft', 'Gaya kepemimpinan manajemen'],
              ['Staff', 'Soft', 'Kompetensi dan kapabilitas karyawan'],
              ['Skills', 'Soft', 'Kemampuan distinktif organisasi'],
            ],
          },
          {
            caption: 'Kotter\'s 8 Steps of Change',
            headers: ['Langkah', 'Aksi', 'Tips'],
            rows: [
              ['1', 'Create urgency', 'Komunikasikan mengapa perubahan diperlukan'],
              ['2', 'Form guiding coalition', 'Kumpulkan tim pemimpin perubahan'],
              ['3', 'Create vision', 'Rumuskan visi dan strategi yang jelas'],
              ['4', 'Communicate vision', 'Gunakan setiap kesempatan untuk mengkomunikasikan'],
              ['5', 'Empower action', 'Hilangkan hambatan, ubah sistem yang menghalangi'],
              ['6', 'Create short-term wins', 'Rencanakan dan raih kemenangan cepat'],
              ['7', 'Build on the change', 'Gunakan momentum untuk perubahan lebih besar'],
              ['8', 'Anchor in culture', 'Pastikan perubahan tertanam dalam budaya'],
            ],
          },
        ],
        notes: ['Lewin\'s 3 Stages: Unfreeze (siapkan perubahan) -> Change (implementasi) -> Refreeze (stabilkan).'],
      },
    ],
  },
  {
    id: 'digital-strategy',
    title: 'Strategi Digital dan Inovasi',
    description: 'Transformasi digital, disruptive innovation, platform business models, dan Industry 4.0.',
    sections: [
      {
        id: 'digital',
        title: 'Transformasi Digital dan Disruption',
        content: 'Transformasi digital mengubah cara organisasi beroperasi dan memberikan nilai. Disruptive innovation (Christensen) menjelaskan bagaimana pendatang baru mengalahkan incumbent.',
        tables: [
          {
            caption: 'Jenis Model Bisnis Digital',
            headers: ['Model', 'Deskripsi', 'Contoh'],
            rows: [
              ['Platform/Marketplace', 'Menghubungkan buyer dan seller', 'Tokopedia, Bukalapak, GoJek'],
              ['SaaS (Software as a Service)', 'Software berbasis subscription', 'Microsoft 365, Mekari, Jurnal'],
              ['Freemium', 'Gratis basic, bayar premium', 'Spotify, LinkedIn, Canva'],
              ['Subscription', 'Pembayaran berkala untuk akses', 'Netflix, Vidio, GoTo Plus'],
              ['Data-driven', 'Monetisasi data pengguna', 'Google, Meta (iklan targeted)'],
            ],
          },
          {
            caption: 'Industry 4.0 Technologies',
            headers: ['Teknologi', 'Dampak pada Bisnis', 'Implikasi untuk Akuntan'],
            rows: [
              ['AI/Machine Learning', 'Otomasi keputusan, prediksi', 'Audit analytics, fraud detection'],
              ['Blockchain', 'Trust tanpa intermediary', 'Smart contracts, audit trail'],
              ['IoT', 'Data real-time dari perangkat', 'Continuous auditing, inventory tracking'],
              ['Cloud Computing', 'Infrastruktur fleksibel', 'Cloud-based ERP, remote audit'],
              ['RPA', 'Otomasi proses repetitif', 'Otomasi reconciliation, data entry'],
            ],
          },
        ],
        notes: ['Digital maturity assessment penting sebelum transformasi.', 'Change management adalah tantangan terbesar dalam transformasi digital.'],
      },
    ],
  },
],
  },
  {
    subjectId: 'manajemen-bisnis-dasar',
    chapters: [
  // ──────────────────────────────────────────────
  // CHAPTER 1 — Bentuk Organisasi Bisnis
  // ──────────────────────────────────────────────
  {
    id: "bentuk-organisasi-bisnis",
    title: "Bentuk Organisasi Bisnis",
    description:
      "Memahami berbagai bentuk badan usaha di Indonesia, dasar hukumnya, serta kelebihan dan kekurangan masing-masing bentuk organisasi bisnis yang relevan untuk ujian CA.",
    sections: [
      {
        id: "perbandingan-bentuk-usaha",
        title: "Perbandingan Bentuk Badan Usaha",
        content:
          "Di Indonesia terdapat beragam bentuk badan usaha yang diatur oleh peraturan perundang-undangan. Pemilihan bentuk badan usaha memengaruhi aspek perpajakan, tanggung jawab hukum, kemudahan memperoleh modal, dan keberlangsungan usaha. Setiap bentuk memiliki karakteristik unik terkait jumlah pendiri minimum, modal dasar, serta status badan hukum. Pemahaman mendalam tentang perbedaan ini sangat penting bagi seorang akuntan profesional karena berkaitan langsung dengan penyusunan laporan keuangan, kewajiban audit, dan kepatuhan regulasi.",
        tables: [
          {
            headers: [
              "Bentuk Usaha",
              "Modal Minimum",
              "Tanggung Jawab",
              "Badan Hukum",
              "Jumlah Pendiri",
            ],
            rows: [
              [
                "Usaha Perseorangan",
                "Tidak diatur",
                "Tidak terbatas (pribadi)",
                "Bukan badan hukum",
                "1 orang",
              ],
              [
                "CV (Persekutuan Komanditer)",
                "Tidak diatur",
                "Sekutu aktif: tidak terbatas; Sekutu pasif: sebatas modal",
                "Bukan badan hukum",
                "Minimal 2 orang",
              ],
              [
                "Firma",
                "Tidak diatur",
                "Tidak terbatas, tanggung renteng",
                "Bukan badan hukum",
                "Minimal 2 orang",
              ],
              [
                "PT (Perseroan Terbatas)",
                "Rp 50 juta (UU PT) / disesuaikan PP",
                "Terbatas pada modal disetor",
                "Badan hukum",
                "Minimal 2 orang/badan hukum",
              ],
              [
                "Koperasi",
                "Simpanan pokok anggota",
                "Terbatas pada simpanan",
                "Badan hukum",
                "Minimal 20 orang (primer)",
              ],
              [
                "BUMN (Persero)",
                "Minimal 51% saham milik negara",
                "Terbatas pada modal",
                "Badan hukum",
                "Negara sebagai pemegang saham mayoritas",
              ],
            ],
            caption:
              "Perbandingan karakteristik utama bentuk badan usaha di Indonesia",
          },
        ],
        rules: [
          "UU No. 40 Tahun 2007 tentang Perseroan Terbatas mengatur pendirian, modal, organ, dan pembubaran PT.",
          "PP No. 8 Tahun 2021 menyesuaikan modal dasar PT menjadi ditentukan oleh para pendiri (tidak harus Rp 50 juta untuk PT tertentu).",
          "UU No. 25 Tahun 1992 tentang Perkoperasian mengatur prinsip dan tata kelola koperasi.",
          "UU No. 19 Tahun 2003 tentang BUMN mengatur bentuk Persero, Perum, dan Perjan.",
        ],
        notes: [
          "Dalam ujian CA, soal sering membandingkan tanggung jawab hukum pemilik antar bentuk badan usaha.",
          "Perhatikan perbedaan antara badan hukum dan bukan badan hukum—ini menentukan apakah entitas dapat menjadi subjek hukum mandiri.",
          "Sejak UU Cipta Kerja, dimungkinkan pendirian PT oleh 1 orang untuk UMKM (PT Perseorangan).",
        ],
      },
      {
        id: "perseroan-terbatas",
        title: "Perseroan Terbatas (PT) secara Mendalam",
        content:
          "Perseroan Terbatas (PT) merupakan bentuk badan usaha yang paling umum digunakan untuk usaha berskala menengah hingga besar di Indonesia. PT memiliki status badan hukum tersendiri yang terpisah dari pemiliknya, sehingga kekayaan perusahaan terpisah dari kekayaan pribadi pemegang saham. Organ PT terdiri dari Rapat Umum Pemegang Saham (RUPS), Direksi, dan Dewan Komisaris yang masing-masing memiliki tugas dan wewenang berbeda. Pendirian PT memerlukan akta notaris, pengesahan Menteri Hukum dan HAM, serta pendaftaran dalam Daftar Perseroan.",
        steps: [
          "Pembuatan akta pendirian oleh notaris yang memuat anggaran dasar.",
          "Pengajuan pengesahan badan hukum ke Kementerian Hukum dan HAM melalui Sistem Administrasi Badan Hukum (SABH/AHU Online).",
          "Pendaftaran NPWP badan dan PKP (jika omzet melebihi batasan) di Kantor Pelayanan Pajak.",
          "Pengurusan Nomor Induk Berusaha (NIB) melalui sistem OSS (Online Single Submission).",
          "Pembukaan rekening bank atas nama perseroan dan penyetoran modal dasar.",
        ],
        examples: [
          "PT Tbk (Terbuka): PT yang sahamnya telah ditawarkan kepada publik melalui bursa efek, tunduk pada peraturan OJK dan BEI.",
          "PT Tertutup: PT yang sahamnya tidak diperdagangkan di bursa efek dan dimiliki oleh kalangan terbatas.",
          "PT Perseorangan: Bentuk baru berdasarkan UU Cipta Kerja, khusus untuk UMKM dengan 1 pemegang saham WNI.",
        ],
        rules: [
          "Modal dasar PT paling sedikit Rp 50 juta (Pasal 32 UU PT), namun PP 8/2021 memberikan fleksibilitas bagi pendiri.",
          "Paling sedikit 25% dari modal dasar harus ditempatkan dan disetor penuh (Pasal 33 UU PT).",
          "RUPS merupakan organ tertinggi yang memiliki wewenang tidak diberikan kepada Direksi atau Komisaris.",
          "Direksi bertanggung jawab penuh atas pengurusan PT untuk kepentingan PT (fiduciary duty).",
        ],
        notes: [
          "Pemegang saham yang dengan itikad buruk memanfaatkan PT dapat dimintai tanggung jawab pribadi (piercing the corporate veil).",
          "Pemahaman tentang organ PT (RUPS, Direksi, Komisaris) sering diujikan dalam soal tata kelola perusahaan.",
        ],
      },
      {
        id: "koperasi-dan-bumn",
        title: "Koperasi dan Badan Usaha Milik Negara (BUMN)",
        content:
          "Koperasi merupakan badan usaha yang beranggotakan orang-seorang atau badan hukum koperasi dengan melandaskan kegiatannya berdasarkan prinsip koperasi sekaligus gerakan ekonomi rakyat berdasar asas kekeluargaan. BUMN adalah badan usaha yang seluruh atau sebagian besar modalnya dimiliki oleh negara melalui penyertaan langsung yang berasal dari kekayaan negara yang dipisahkan. Kedua bentuk ini memiliki peran strategis dalam perekonomian Indonesia dan sering menjadi topik ujian terkait akuntansi sektor publik serta tata kelola khusus.",
        tables: [
          {
            headers: ["Aspek", "Koperasi", "BUMN Persero", "BUMN Perum"],
            rows: [
              [
                "Dasar Hukum",
                "UU No. 25/1992",
                "UU No. 19/2003",
                "UU No. 19/2003",
              ],
              [
                "Tujuan Utama",
                "Kesejahteraan anggota",
                "Mengejar keuntungan",
                "Pelayanan umum & keuntungan",
              ],
              [
                "Modal",
                "Simpanan pokok & wajib",
                "Saham (negara min. 51%)",
                "Kekayaan negara dipisahkan",
              ],
              [
                "Pembagian Laba",
                "SHU (Sisa Hasil Usaha)",
                "Dividen",
                "Sesuai ketentuan pemerintah",
              ],
              [
                "Pengawasan",
                "Pengawas koperasi",
                "Komisaris & OJK (jika Tbk)",
                "Dewan Pengawas",
              ],
            ],
            caption: "Perbandingan Koperasi dengan BUMN Persero dan Perum",
          },
        ],
        examples: [
          "Koperasi Simpan Pinjam: Menerima simpanan dan memberikan pinjaman kepada anggota dengan bunga yang lebih rendah dibanding lembaga keuangan komersial.",
          "PT Pertamina (Persero): Contoh BUMN Persero di bidang energi yang sahamnya 100% dimiliki negara.",
          "Perum BULOG: Contoh BUMN Perum yang bertugas menjaga stabilitas pangan nasional.",
        ],
        notes: [
          "SHU koperasi dibagikan berdasarkan jasa usaha dan simpanan masing-masing anggota, bukan berdasarkan saham.",
          "BUMN Persero tunduk pada UU PT selain UU BUMN, sehingga prinsip tata kelola PT berlaku.",
          "Dalam ujian, perhatikan perbedaan perlakuan akuntansi antara koperasi (PSAK khusus) dan PT pada umumnya.",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CHAPTER 2 — Manajemen & Kepemimpinan
  // ──────────────────────────────────────────────
  {
    id: "manajemen-dan-kepemimpinan",
    title: "Manajemen & Kepemimpinan",
    description:
      "Mempelajari fungsi-fungsi manajemen (POAC), teori kepemimpinan, serta teori motivasi yang menjadi fondasi dalam mengelola organisasi secara efektif dan efisien.",
    sections: [
      {
        id: "fungsi-manajemen-poac",
        title: "Fungsi Manajemen: POAC",
        content:
          "Fungsi manajemen POAC (Planning, Organizing, Actuating, Controlling) dikemukakan oleh George R. Terry dan menjadi kerangka dasar dalam memahami proses manajemen. Planning meliputi penetapan tujuan dan strategi pencapaiannya. Organizing berkaitan dengan penyusunan struktur organisasi dan pembagian tugas. Actuating mencakup pengarahan dan motivasi agar rencana terlaksana. Controlling adalah proses pengawasan dan evaluasi untuk memastikan hasil sesuai rencana. Keempat fungsi ini bersifat siklikal dan saling berkaitan dalam praktik manajemen modern.",
        tables: [
          {
            headers: ["Fungsi", "Aktivitas Utama", "Output", "Alat/Metode"],
            rows: [
              [
                "Planning",
                "Analisis lingkungan, penetapan visi-misi, formulasi strategi",
                "Rencana strategis, taktis, operasional",
                "SWOT, PEST, Balanced Scorecard",
              ],
              [
                "Organizing",
                "Desain struktur, departementalisasi, delegasi wewenang",
                "Bagan organisasi, SOP, job description",
                "Functional, divisional, matrix structure",
              ],
              [
                "Actuating",
                "Komunikasi, motivasi, koordinasi, pengembangan tim",
                "Pelaksanaan rencana, peningkatan produktivitas",
                "Coaching, team building, performance review",
              ],
              [
                "Controlling",
                "Penetapan standar, pengukuran kinerja, koreksi penyimpangan",
                "Laporan kinerja, tindakan korektif",
                "KPI, dashboard, audit internal",
              ],
            ],
            caption: "Ringkasan fungsi manajemen POAC",
          },
        ],
        diagram:
          "Planning → Organizing → Actuating → Controlling → (feedback loop kembali ke Planning)",
        examples: [
          "Planning: Perusahaan manufaktur menyusun rencana produksi tahunan berdasarkan proyeksi permintaan pasar dan kapasitas pabrik.",
          "Organizing: Direktur Utama membentuk divisi baru (Digital Transformation) dan menunjuk kepala divisi dengan job description yang jelas.",
          "Actuating: Manajer penjualan memotivasi tim dengan program insentif berbasis pencapaian target kuartalan.",
          "Controlling: Audit internal menemukan penyimpangan biaya produksi 15% di atas anggaran, lalu manajemen mengambil tindakan korektif.",
        ],
        notes: [
          "Dalam soal ujian, POAC sering dikaitkan dengan skenario kasus untuk mengidentifikasi fungsi manajemen mana yang sedang diterapkan.",
          "Henry Fayol menyebut 5 fungsi: Planning, Organizing, Commanding, Coordinating, Controlling (POCCC)—kenali perbedaannya.",
        ],
      },
      {
        id: "teori-kepemimpinan",
        title: "Teori Kepemimpinan",
        content:
          "Kepemimpinan adalah kemampuan memengaruhi dan mengarahkan orang lain untuk mencapai tujuan organisasi. Teori kepemimpinan berkembang dari pendekatan sifat (trait theory) yang meyakini pemimpin memiliki sifat bawaan, ke pendekatan perilaku (behavioral theory) yang berfokus pada apa yang dilakukan pemimpin, hingga pendekatan situasional/kontingensi yang menekankan penyesuaian gaya kepemimpinan dengan situasi. Di era modern, konsep kepemimpinan transformasional yang menginspirasi perubahan dan inovasi menjadi semakin relevan dibandingkan kepemimpinan transaksional yang berbasis reward-punishment.",
        tables: [
          {
            headers: [
              "Teori",
              "Tokoh Utama",
              "Fokus",
              "Kelebihan",
              "Keterbatasan",
            ],
            rows: [
              [
                "Trait Theory",
                "Stogdill, Mann",
                "Sifat bawaan pemimpin (kecerdasan, percaya diri, determinasi)",
                "Memberikan benchmark karakteristik pemimpin",
                "Tidak mempertimbangkan situasi dan konteks",
              ],
              [
                "Behavioral Theory",
                "Blake & Mouton, Ohio State",
                "Perilaku task-oriented vs people-oriented",
                "Kepemimpinan dapat dipelajari dan dilatih",
                "Tidak ada satu gaya terbaik untuk semua situasi",
              ],
              [
                "Situational/Contingency",
                "Hersey & Blanchard, Fiedler",
                "Kesesuaian gaya dengan kematangan bawahan dan situasi",
                "Fleksibel dan adaptif terhadap konteks",
                "Kompleks dalam penerapan praktis",
              ],
              [
                "Transformasional",
                "Bass & Avolio",
                "Inspirasi, stimulasi intelektual, perhatian individual",
                "Meningkatkan motivasi intrinsik dan inovasi",
                "Sulit diukur secara objektif",
              ],
              [
                "Transaksional",
                "Burns",
                "Pertukaran (reward & punishment) untuk kinerja",
                "Jelas dan terstruktur, cocok untuk operasi rutin",
                "Kurang mendorong kreativitas dan perubahan",
              ],
            ],
            caption:
              "Perbandingan teori kepemimpinan utama",
          },
        ],
        examples: [
          "Transformasional: CEO startup teknologi yang memotivasi karyawan dengan visi mengubah industri, memberikan otonomi dalam berinovasi.",
          "Transaksional: Supervisor pabrik yang menerapkan sistem bonus berdasarkan jumlah unit produksi tanpa cacat.",
          "Situasional: Manajer proyek yang menggunakan gaya directing untuk anggota tim baru dan delegating untuk anggota senior berpengalaman.",
        ],
        notes: [
          "Soal ujian sering menyajikan skenario dan meminta peserta mengidentifikasi gaya kepemimpinan yang diterapkan.",
          "Kepemimpinan transformasional memiliki 4 komponen (4I): Idealized Influence, Inspirational Motivation, Intellectual Stimulation, Individualized Consideration.",
        ],
      },
      {
        id: "teori-motivasi",
        title: "Teori Motivasi",
        content:
          "Motivasi adalah dorongan internal maupun eksternal yang menggerakkan seseorang untuk bertindak mencapai tujuan. Dalam konteks manajemen, pemahaman teori motivasi membantu manajer merancang sistem insentif, lingkungan kerja, dan kebijakan SDM yang efektif. Teori motivasi terbagi menjadi teori kebutuhan (content theory) seperti Maslow dan Herzberg, serta teori proses (process theory) seperti Vroom's Expectancy Theory. Douglas McGregor mengemukakan asumsi dasar tentang pekerja melalui Theory X dan Theory Y yang memengaruhi gaya manajemen.",
        tables: [
          {
            headers: ["Tingkat (Maslow)", "Kebutuhan", "Contoh di Tempat Kerja"],
            rows: [
              [
                "5 – Aktualisasi Diri",
                "Pemenuhan potensi tertinggi",
                "Kesempatan mengembangkan ide inovatif, proyek mandiri",
              ],
              [
                "4 – Penghargaan (Esteem)",
                "Pengakuan, status, prestasi",
                "Promosi jabatan, penghargaan karyawan terbaik",
              ],
              [
                "3 – Sosial (Belonging)",
                "Hubungan interpersonal, rasa memiliki",
                "Tim kerja solid, acara bonding perusahaan",
              ],
              [
                "2 – Keamanan (Safety)",
                "Keamanan fisik dan finansial",
                "Kontrak kerja tetap, asuransi kesehatan, dana pensiun",
              ],
              [
                "1 – Fisiologis",
                "Kebutuhan dasar (makan, minum, tempat tinggal)",
                "Gaji pokok yang layak, fasilitas kantin",
              ],
            ],
            caption: "Hierarki Kebutuhan Maslow dan aplikasinya di organisasi",
          },
          {
            headers: [
              "Kategori Herzberg",
              "Faktor",
              "Dampak",
            ],
            rows: [
              [
                "Motivator (Satisfier)",
                "Pencapaian, pengakuan, pekerjaan itu sendiri, tanggung jawab, kemajuan karir",
                "Meningkatkan kepuasan dan motivasi kerja",
              ],
              [
                "Hygiene (Dissatisfier)",
                "Gaji, kebijakan perusahaan, kondisi kerja, hubungan atasan-bawahan, keamanan kerja",
                "Ketidakhadiran menyebabkan ketidakpuasan, tetapi kehadirannya tidak serta-merta memotivasi",
              ],
            ],
            caption: "Teori Dua Faktor Herzberg",
          },
          {
            headers: ["Aspek", "Theory X", "Theory Y"],
            rows: [
              [
                "Asumsi tentang pekerja",
                "Malas, menghindari kerja, perlu diawasi ketat",
                "Motivasi intrinsik, bertanggung jawab, kreatif",
              ],
              [
                "Gaya manajemen",
                "Otoriter, pengawasan ketat, punishment-based",
                "Partisipatif, delegatif, empowerment",
              ],
              [
                "Kontrol",
                "Eksternal (aturan, sanksi, supervisi langsung)",
                "Internal (self-direction, self-control)",
              ],
            ],
            caption: "Perbandingan Theory X dan Theory Y (McGregor)",
          },
        ],
        diagram:
          "Maslow Hierarchy (bottom-up): Fisiologis → Keamanan → Sosial → Penghargaan → Aktualisasi Diri",
        examples: [
          "Perusahaan teknologi menyediakan program 20% time (waktu untuk proyek pribadi) → memenuhi kebutuhan aktualisasi diri (Maslow level 5).",
          "Karyawan mengeluh karena gaji rendah dan kondisi kerja buruk (hygiene factor) meskipun pekerjaan menarik → menurut Herzberg, motivator saja tidak cukup tanpa hygiene yang memadai.",
        ],
        notes: [
          "Herzberg: Kepuasan dan ketidakpuasan bukan dua ujung satu spektrum, melainkan dua dimensi terpisah.",
          "Vroom's Expectancy Theory: Motivasi = Expectancy × Instrumentality × Valence — sering diujikan dalam bentuk perhitungan sederhana.",
          "Dalam ujian CA, teori motivasi dikaitkan dengan perancangan sistem kompensasi dan pengendalian manajemen.",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CHAPTER 3 — Manajemen Pemasaran
  // ──────────────────────────────────────────────
  {
    id: "manajemen-pemasaran",
    title: "Manajemen Pemasaran",
    description:
      "Membahas konsep pemasaran modern meliputi bauran pemasaran (marketing mix), segmentasi-targeting-positioning, perilaku konsumen, serta strategi pemasaran digital yang relevan dalam era transformasi bisnis.",
    sections: [
      {
        id: "bauran-pemasaran",
        title: "Bauran Pemasaran (Marketing Mix) 4P dan 7P",
        content:
          "Bauran pemasaran adalah kumpulan variabel pemasaran yang dapat dikendalikan oleh perusahaan untuk mencapai tujuan pemasaran di pasar sasaran. Konsep 4P (Product, Price, Place, Promotion) dikemukakan oleh E. Jerome McCarthy dan menjadi fondasi strategi pemasaran barang. Untuk pemasaran jasa, Booms & Bitner menambahkan 3P tambahan: People, Process, dan Physical Evidence menjadi 7P. Pemilihan kombinasi yang tepat dari elemen-elemen ini sangat menentukan keberhasilan pemasaran suatu produk atau jasa.",
        tables: [
          {
            headers: ["Elemen", "Deskripsi", "Contoh Keputusan", "Relevansi Jasa (7P)"],
            rows: [
              [
                "Product",
                "Barang/jasa yang ditawarkan ke pasar",
                "Desain, fitur, kualitas, branding, kemasan, garansi",
                "✓ (4P & 7P)",
              ],
              [
                "Price",
                "Jumlah uang yang dikenakan untuk produk",
                "Strategi penetrasi, skimming, bundling, diskon",
                "✓ (4P & 7P)",
              ],
              [
                "Place",
                "Saluran distribusi dan ketersediaan produk",
                "Distribusi langsung, ritel, e-commerce, franchise",
                "✓ (4P & 7P)",
              ],
              [
                "Promotion",
                "Komunikasi pemasaran kepada target pasar",
                "Iklan, sales promotion, PR, personal selling, digital marketing",
                "✓ (4P & 7P)",
              ],
              [
                "People",
                "SDM yang terlibat dalam penyampaian jasa",
                "Pelatihan karyawan, standar pelayanan, budaya customer-centric",
                "Khusus 7P",
              ],
              [
                "Process",
                "Prosedur dan mekanisme penyampaian jasa",
                "SOP layanan, waktu tunggu, otomasi proses",
                "Khusus 7P",
              ],
              [
                "Physical Evidence",
                "Bukti fisik yang mendukung persepsi kualitas jasa",
                "Desain interior kantor, seragam, website profesional",
                "Khusus 7P",
              ],
            ],
            caption: "Bauran Pemasaran 4P dan 7P",
          },
        ],
        examples: [
          "Restoran cepat saji menerapkan 7P: Product (menu variatif), Price (value meal), Place (lokasi strategis), Promotion (iklan TV), People (pelatihan crew), Process (antrian terstruktur), Physical Evidence (kebersihan gerai).",
          "Perusahaan SaaS menggunakan strategi freemium pricing (Price) dengan distribusi online (Place) dan content marketing (Promotion).",
        ],
        notes: [
          "Dalam ujian, pastikan dapat membedakan kapan menggunakan 4P (produk fisik) versus 7P (jasa).",
          "Integrated Marketing Communication (IMC) mengintegrasikan seluruh elemen Promotion agar pesan konsisten di semua channel.",
        ],
      },
      {
        id: "segmentasi-targeting-positioning",
        title: "Segmentasi, Targeting, dan Positioning (STP)",
        content:
          "STP merupakan proses fundamental dalam manajemen pemasaran yang membantu perusahaan mengidentifikasi dan melayani segmen pasar yang paling menguntungkan. Segmentasi membagi pasar heterogen menjadi kelompok-kelompok homogen berdasarkan variabel tertentu. Targeting memilih segmen mana yang akan dilayani. Positioning menciptakan citra dan persepsi unik produk di benak konsumen relatif terhadap pesaing. Proses STP harus dilakukan secara sistematis dan berbasis data agar strategi pemasaran menjadi efektif dan efisien.",
        steps: [
          "Identifikasi variabel segmentasi: demografis (usia, pendapatan, pendidikan), geografis (wilayah, iklim, urban/rural), psikografis (gaya hidup, nilai, kepribadian), dan perilaku (tingkat penggunaan, loyalitas, manfaat yang dicari).",
          "Evaluasi daya tarik setiap segmen: ukuran pasar, pertumbuhan, profitabilitas, intensitas persaingan, dan kesesuaian dengan sumber daya perusahaan.",
          "Pilih strategi targeting: undifferentiated (mass marketing), differentiated (multi-segment), concentrated (niche), atau micromarketing (customized).",
          "Tentukan positioning statement: 'Untuk [target market] yang [kebutuhan], [brand] adalah [kategori] yang [manfaat unik] karena [alasan untuk percaya].'",
          "Implementasikan positioning melalui bauran pemasaran yang konsisten dengan value proposition.",
        ],
        examples: [
          "Segmentasi: Bank membagi nasabah menjadi segmen mass, affluent, dan high-net-worth berdasarkan jumlah aset.",
          "Targeting: Merek mobil listrik premium memilih concentrated targeting pada segmen urban, berpendapatan tinggi, peduli lingkungan.",
          "Positioning: 'Untuk profesional muda Indonesia yang membutuhkan mobilitas, GrabBike adalah transportasi yang cepat dan terjangkau karena jaringan driver terluas.'",
        ],
        tables: [
          {
            headers: ["Strategi Targeting", "Deskripsi", "Contoh"],
            rows: [
              [
                "Undifferentiated",
                "Satu penawaran untuk seluruh pasar",
                "Garam meja, gula pasir — produk komoditas",
              ],
              [
                "Differentiated",
                "Penawaran berbeda untuk beberapa segmen",
                "Toyota: Avanza (keluarga), Fortuner (SUV premium), Agya (city car)",
              ],
              [
                "Concentrated/Niche",
                "Fokus pada satu segmen tertentu",
                "Rolls-Royce untuk ultra high-net-worth individuals",
              ],
              [
                "Micromarketing",
                "Customisasi untuk individu atau lokasi",
                "Nike By You — sepatu custom sesuai desain pelanggan",
              ],
            ],
            caption: "Strategi targeting dan contoh penerapannya",
          },
        ],
        notes: [
          "Segmen yang baik harus memenuhi kriteria: Measurable, Accessible, Substantial, Differentiable, Actionable.",
          "Positioning map (perceptual map) adalah alat visual yang menggambarkan posisi merek relatif terhadap kompetitor berdasarkan 2 dimensi utama.",
        ],
      },
      {
        id: "perilaku-konsumen-digital-marketing",
        title: "Perilaku Konsumen & Pemasaran Digital",
        content:
          "Perilaku konsumen mempelajari bagaimana individu, kelompok, atau organisasi memilih, membeli, menggunakan, dan mengevaluasi produk untuk memenuhi kebutuhannya. Model perilaku konsumen Philip Kotler menggambarkan stimulus-response model di mana rangsangan pemasaran dan lingkungan memasuki 'black box' konsumen dan menghasilkan respons pembelian. Dalam era digital, pemasaran telah bertransformasi dengan hadirnya berbagai kanal digital yang memungkinkan interaksi dua arah, personalisasi pesan, dan pengukuran hasil secara real-time. Pemahaman tentang customer journey digital (awareness, consideration, purchase, retention, advocacy) sangat penting bagi pemasar modern.",
        tables: [
          {
            headers: ["Kanal Digital", "Karakteristik", "KPI Utama"],
            rows: [
              [
                "SEO (Search Engine Optimization)",
                "Optimasi peringkat organik di mesin pencari",
                "Organic traffic, keyword ranking, bounce rate",
              ],
              [
                "SEM/PPC (Pay-Per-Click)",
                "Iklan berbayar di mesin pencari",
                "CTR, CPC, ROAS (Return on Ad Spend)",
              ],
              [
                "Social Media Marketing",
                "Pemasaran melalui platform media sosial",
                "Engagement rate, reach, conversion rate",
              ],
              [
                "Email Marketing",
                "Komunikasi langsung melalui email",
                "Open rate, click rate, unsubscribe rate",
              ],
              [
                "Content Marketing",
                "Pembuatan konten bernilai untuk audiens",
                "Traffic, time on page, lead generation",
              ],
            ],
            caption: "Kanal pemasaran digital utama dan metrik kinerjanya",
          },
        ],
        diagram:
          "Customer Decision Journey: Need Recognition → Information Search → Evaluation of Alternatives → Purchase Decision → Post-Purchase Behavior",
        examples: [
          "Tokopedia menggunakan data perilaku browsing dan pembelian (behavioral data) untuk merekomendasikan produk yang dipersonalisasi kepada setiap pengguna.",
          "Brand awareness campaign melalui Instagram Reels yang viral menghasilkan peningkatan brand recall sebesar 35% berdasarkan survei pasca-kampanye.",
        ],
        notes: [
          "Customer Lifetime Value (CLV) menjadi metrik penting: CLV = (Average Purchase Value × Purchase Frequency × Customer Lifespan).",
          "Digital marketing funnel (TOFU-MOFU-BOFU) harus dikaitkan dengan tipe konten yang tepat di setiap tahap.",
          "Dalam ujian CA, konsep perilaku konsumen sering dikaitkan dengan strategi penetapan harga dan positioning.",
        ],
        formula:
          "Customer Lifetime Value (CLV) = Rata-rata Nilai Pembelian × Frekuensi Pembelian per Tahun × Rata-rata Masa Hubungan Pelanggan (tahun)",
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CHAPTER 4 — Manajemen Operasi
  // ──────────────────────────────────────────────
  {
    id: "manajemen-operasi",
    title: "Manajemen Operasi",
    description:
      "Membahas pengelolaan rantai pasok, manajemen mutu (TQM, Six Sigma, ISO 9001), sistem produksi lean dan JIT, serta perencanaan kapasitas yang menjadi tulang punggung efisiensi operasional perusahaan.",
    sections: [
      {
        id: "supply-chain-management",
        title: "Manajemen Rantai Pasok (Supply Chain Management)",
        content:
          "Supply Chain Management (SCM) adalah pengelolaan aliran barang, informasi, dan keuangan dari pemasok bahan baku hingga produk sampai ke tangan konsumen akhir. SCM mencakup perencanaan permintaan, pengadaan, produksi, penyimpanan, dan distribusi. Tujuan utama SCM adalah mengoptimalkan total biaya rantai pasok sambil memenuhi tingkat layanan pelanggan yang diinginkan. Dalam era globalisasi, manajemen risiko rantai pasok menjadi sangat penting mengingat gangguan di satu titik dapat berdampak ke seluruh jaringan.",
        diagram:
          "Supplier → Inbound Logistics → Manufaktur → Outbound Logistics → Distributor → Retailer → Konsumen Akhir",
        tables: [
          {
            headers: [
              "Komponen SCM",
              "Aktivitas",
              "Indikator Kinerja",
            ],
            rows: [
              [
                "Plan",
                "Demand forecasting, S&OP (Sales & Operations Planning)",
                "Forecast accuracy, inventory turnover",
              ],
              [
                "Source",
                "Supplier selection, procurement, vendor management",
                "Lead time, supplier defect rate, cost savings",
              ],
              [
                "Make",
                "Produksi, assembly, quality control",
                "Yield rate, cycle time, OEE (Overall Equipment Effectiveness)",
              ],
              [
                "Deliver",
                "Warehousing, transportation, order fulfillment",
                "On-time delivery rate, fill rate, shipping cost per unit",
              ],
              [
                "Return",
                "Reverse logistics, product recalls, recycling",
                "Return rate, recovery value, customer satisfaction",
              ],
            ],
            caption: "Komponen SCOR Model (Supply Chain Operations Reference)",
          },
        ],
        examples: [
          "Bullwhip Effect: Permintaan aktual konsumen hanya naik 5%, tetapi pesanan ke supplier melonjak 40% karena distorsi informasi di setiap level rantai pasok.",
          "Vendor Managed Inventory (VMI): Supplier memantau stok retailer dan secara proaktif melakukan pengiriman ketika stok mencapai reorder point.",
        ],
        notes: [
          "Economic Order Quantity (EOQ) dan Reorder Point (ROP) adalah konsep fundamental dalam inventory management yang sering diujikan.",
          "Bullwhip effect dapat diminimalkan dengan information sharing, vendor managed inventory, dan collaborative forecasting.",
        ],
        formula:
          "EOQ = √(2DS / H), di mana D = permintaan tahunan, S = biaya pemesanan per order, H = biaya penyimpanan per unit per tahun",
      },
      {
        id: "manajemen-mutu",
        title: "Manajemen Mutu: TQM, Six Sigma, dan ISO 9001",
        content:
          "Manajemen mutu adalah pendekatan sistematis untuk memastikan bahwa produk dan layanan memenuhi atau melampaui harapan pelanggan. Total Quality Management (TQM) menekankan perbaikan berkelanjutan yang melibatkan seluruh anggota organisasi. Six Sigma menggunakan metodologi statistik untuk mengurangi variasi dan cacat hingga tingkat 3,4 DPMO (Defects Per Million Opportunities). ISO 9001 adalah standar internasional untuk sistem manajemen mutu yang memberikan kerangka kerja terstruktur. Ketiga pendekatan ini saling melengkapi dan sering diimplementasikan secara terintegrasi.",
        tables: [
          {
            headers: ["Prinsip TQM", "Penjelasan"],
            rows: [
              ["Fokus pada pelanggan", "Memahami dan memenuhi kebutuhan pelanggan saat ini dan masa depan"],
              ["Kepemimpinan", "Pimpinan menetapkan kesatuan arah dan tujuan organisasi"],
              ["Keterlibatan orang", "Seluruh personel pada semua level terlibat penuh"],
              ["Pendekatan proses", "Hasil dicapai lebih efisien dengan manajemen aktivitas dan sumber daya sebagai proses"],
              ["Perbaikan berkelanjutan (Kaizen)", "Perbaikan keseluruhan kinerja organisasi menjadi sasaran tetap"],
              ["Pengambilan keputusan berbasis fakta", "Keputusan efektif berdasarkan analisis data dan informasi"],
              ["Hubungan saling menguntungkan dengan pemasok", "Organisasi dan pemasok saling tergantung dan hubungan yang saling menguntungkan meningkatkan kemampuan keduanya"],
            ],
            caption: "Tujuh prinsip dasar TQM",
          },
        ],
        steps: [
          "DMAIC (Six Sigma): Define — tentukan masalah, tujuan, dan cakupan proyek.",
          "Measure — kumpulkan data baseline dan ukur kinerja proses saat ini (Cp, Cpk, sigma level).",
          "Analyze — identifikasi akar penyebab masalah menggunakan fishbone diagram, Pareto chart, dan regression analysis.",
          "Improve — kembangkan dan implementasikan solusi untuk menghilangkan akar penyebab.",
          "Control — buat sistem pengendalian agar perbaikan berkelanjutan (control chart, SOP baru, training).",
        ],
        examples: [
          "Perusahaan otomotif menerapkan Six Sigma dan berhasil menurunkan defect rate dari 15.000 DPMO menjadi 3.400 DPMO (level 6σ) dalam 18 bulan.",
          "Rumah sakit meraih sertifikasi ISO 9001:2015 untuk memastikan standarisasi proses pelayanan pasien dari pendaftaran hingga pemulangan.",
        ],
        notes: [
          "Level sigma: 1σ = 690.000 DPMO, 3σ = 66.807 DPMO, 6σ = 3,4 DPMO.",
          "ISO 9001:2015 menggunakan pendekatan risk-based thinking dan siklus PDCA (Plan-Do-Check-Act).",
          "Dalam ujian CA, manajemen mutu sering dikaitkan dengan biaya mutu: prevention costs, appraisal costs, internal failure costs, external failure costs.",
        ],
      },
      {
        id: "jit-lean-kapasitas",
        title: "JIT, Lean Manufacturing, dan Perencanaan Kapasitas",
        content:
          "Just-In-Time (JIT) adalah filosofi produksi yang bertujuan menghilangkan pemborosan dengan memproduksi hanya apa yang dibutuhkan, kapan dibutuhkan, dan dalam jumlah yang dibutuhkan. Lean manufacturing memperluas konsep JIT dengan mengidentifikasi dan menghilangkan tujuh jenis pemborosan (Muda): overproduction, waiting, transportation, over-processing, inventory, motion, dan defects. Perencanaan kapasitas memastikan organisasi memiliki kemampuan produksi yang sesuai untuk memenuhi permintaan saat ini dan masa depan tanpa over-investment maupun under-capacity.",
        tables: [
          {
            headers: ["Jenis Pemborosan (7 Wastes)", "Deskripsi", "Contoh"],
            rows: [
              ["Overproduction", "Memproduksi lebih dari yang diminta", "Membuat 1.000 unit padahal pesanan hanya 700"],
              ["Waiting", "Waktu menunggu antar proses", "Mesin idle karena bahan baku belum datang"],
              ["Transportation", "Perpindahan material yang tidak perlu", "Layout pabrik yang tidak efisien"],
              ["Over-processing", "Proses berlebihan yang tidak menambah nilai", "Inspeksi ganda yang redundan"],
              ["Inventory", "Stok berlebih yang mengikat modal", "Bahan baku menumpuk di gudang berbulan-bulan"],
              ["Motion", "Gerakan pekerja yang tidak efisien", "Pekerja berjalan jauh untuk mengambil alat"],
              ["Defects", "Produk cacat yang memerlukan rework", "Komponen gagal uji kualitas dan harus diproduksi ulang"],
            ],
            caption: "Tujuh pemborosan (Muda) dalam Lean Manufacturing",
          },
        ],
        formula:
          "Capacity Utilization Rate = (Actual Output / Design Capacity) × 100%\nEfficiency = (Actual Output / Effective Capacity) × 100%",
        examples: [
          "Toyota Production System (TPS) menerapkan kanban card sebagai sinyal produksi pull-system, sehingga workstation hanya memproduksi ketika ada permintaan dari workstation berikutnya.",
          "Capacity planning: Pabrik dengan design capacity 10.000 unit/bulan dan actual output 7.500 unit/bulan memiliki utilization rate 75%.",
        ],
        warning:
          "Implementasi JIT memerlukan hubungan erat dengan supplier yang reliable. Gangguan rantai pasok (seperti pandemi atau bencana alam) dapat menyebabkan produksi terhenti total karena tidak ada buffer inventory.",
        notes: [
          "Alat lean: Value Stream Mapping (VSM), 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke), Poka-Yoke (mistake-proofing).",
          "Bottleneck analysis (Theory of Constraints oleh Goldratt) mengidentifikasi proses yang membatasi throughput keseluruhan sistem.",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CHAPTER 5 — Manajemen Sumber Daya Manusia
  // ──────────────────────────────────────────────
  {
    id: "manajemen-sdm",
    title: "Manajemen Sumber Daya Manusia",
    description:
      "Mengkaji proses rekrutmen dan seleksi, pengembangan SDM, penilaian kinerja, sistem kompensasi, serta regulasi ketenagakerjaan Indonesia yang wajib dipahami untuk ujian CA.",
    sections: [
      {
        id: "rekrutmen-seleksi",
        title: "Rekrutmen dan Seleksi",
        content:
          "Rekrutmen adalah proses menarik kandidat yang memenuhi kualifikasi untuk mengisi posisi yang dibutuhkan organisasi, sedangkan seleksi adalah proses memilih kandidat terbaik dari kumpulan pelamar. Proses ini harus dilakukan secara objektif, transparan, dan tidak diskriminatif sesuai dengan UU Ketenagakerjaan. Sumber rekrutmen dapat bersifat internal (promosi, rotasi, referral karyawan) atau eksternal (job portal, campus recruitment, headhunter). Efektivitas proses rekrutmen dan seleksi diukur melalui metrik seperti time-to-hire, cost-per-hire, quality of hire, dan retention rate.",
        steps: [
          "Analisis kebutuhan (manpower planning) berdasarkan rencana strategis organisasi dan analisis jabatan (job analysis).",
          "Penyusunan deskripsi jabatan (job description) dan spesifikasi jabatan (job specification).",
          "Penentuan sumber dan metode rekrutmen (internal vs eksternal, online vs offline).",
          "Seleksi administratif: screening CV, verifikasi dokumen, dan shortlisting kandidat.",
          "Tes seleksi: psikotes, tes kemampuan teknis, assessment center, dan wawancara (structured interview).",
          "Pemeriksaan referensi dan latar belakang (background check).",
          "Penawaran kerja (job offering) dan negosiasi kompensasi.",
          "Proses onboarding dan orientasi karyawan baru.",
        ],
        tables: [
          {
            headers: ["Metode Seleksi", "Deskripsi", "Validitas Prediktif"],
            rows: [
              ["Structured Interview", "Wawancara dengan pertanyaan terstandar untuk semua kandidat", "Tinggi (0.51)"],
              ["Assessment Center", "Simulasi situasi kerja nyata (in-tray, role play, presentasi)", "Tinggi (0.37)"],
              ["Cognitive Ability Test", "Tes kemampuan kognitif umum", "Tinggi (0.51)"],
              ["Work Sample Test", "Tes mengerjakan tugas aktual dari pekerjaan", "Tinggi (0.54)"],
              ["Unstructured Interview", "Wawancara bebas tanpa pedoman pertanyaan", "Rendah-Sedang (0.20)"],
              ["Reference Check", "Konfirmasi informasi dari pemberi referensi", "Rendah (0.26)"],
            ],
            caption: "Metode seleksi dan validitas prediktifnya terhadap kinerja (berdasarkan meta-analisis Schmidt & Hunter)",
          },
        ],
        examples: [
          "Assessment center untuk posisi manajer: kandidat diminta menyelesaikan simulasi in-tray exercise, leaderless group discussion, dan presentasi strategi bisnis dalam satu hari.",
          "Employer branding: Perusahaan teknologi membangun reputasi sebagai tempat kerja terbaik melalui konten di LinkedIn dan Glassdoor untuk menarik top talent.",
        ],
        notes: [
          "Bias dalam seleksi yang harus dihindari: halo effect, similar-to-me bias, recency effect, dan contrast effect.",
          "Dalam ujian CA, pemahaman tentang hubungan cost-benefit dari metode seleksi sering diujikan.",
        ],
      },
      {
        id: "penilaian-kinerja-pengembangan",
        title: "Penilaian Kinerja dan Pengembangan SDM",
        content:
          "Penilaian kinerja (performance appraisal) adalah proses sistematis untuk mengevaluasi kontribusi karyawan terhadap pencapaian tujuan organisasi. Hasil penilaian kinerja menjadi dasar untuk keputusan kompensasi, promosi, pengembangan, dan bahkan pemutusan hubungan kerja. Pengembangan SDM mencakup pelatihan (training) untuk meningkatkan kompetensi pekerjaan saat ini dan pengembangan (development) untuk mempersiapkan karyawan menghadapi peran masa depan. Investasi dalam pengembangan SDM terbukti meningkatkan produktivitas, kepuasan kerja, dan retensi karyawan.",
        tables: [
          {
            headers: ["Metode Penilaian", "Deskripsi", "Kelebihan", "Kelemahan"],
            rows: [
              [
                "Rating Scale (Graphic)",
                "Menilai karyawan pada skala numerik untuk setiap dimensi kinerja",
                "Mudah digunakan, hasil kuantitatif",
                "Subjektif, rentan central tendency bias",
              ],
              [
                "360-Degree Feedback",
                "Penilaian dari atasan, rekan, bawahan, pelanggan, dan diri sendiri",
                "Komprehensif, mengurangi bias satu sumber",
                "Mahal, memakan waktu, potensi konflik",
              ],
              [
                "MBO (Management by Objectives)",
                "Penilaian berdasarkan pencapaian sasaran yang telah disepakati bersama",
                "Objektif, fokus pada hasil, partisipatif",
                "Sulit untuk pekerjaan yang sulit diukur secara kuantitatif",
              ],
              [
                "Behaviorally Anchored Rating Scale (BARS)",
                "Skala penilaian yang dikaitkan dengan contoh perilaku spesifik",
                "Lebih objektif, umpan balik yang jelas dan spesifik",
                "Memerlukan waktu pengembangan yang lama",
              ],
              [
                "Forced Ranking",
                "Mengurutkan karyawan dari terbaik ke terburuk dalam kelompok",
                "Membedakan high performer dan low performer secara jelas",
                "Kompetitif, merusak kerja sama tim, potensi demotivasi",
              ],
            ],
            caption: "Metode penilaian kinerja dan perbandingannya",
          },
        ],
        examples: [
          "MBO: Manajer penjualan dan bawahannya sepakat pada target Q3: pendapatan Rp 5 miliar, 20 klien baru, dan NPS ≥ 8.5.",
          "Training Need Analysis (TNA): Setelah audit internal menemukan kesalahan pencatatan, perusahaan menyelenggarakan pelatihan PSAK terbaru untuk seluruh staf akuntansi.",
        ],
        diagram:
          "Siklus Manajemen Kinerja: Goal Setting → Ongoing Coaching & Feedback → Formal Review → Reward/Development Planning → (berulang)",
        notes: [
          "Kirkpatrick's Training Evaluation Model: Level 1 (Reaction), Level 2 (Learning), Level 3 (Behavior), Level 4 (Results).",
          "Dalam ujian, perbedaan antara training (orientasi jangka pendek, keterampilan spesifik) dan development (orientasi jangka panjang, kompetensi umum) sering diujikan.",
        ],
      },
      {
        id: "kompensasi-regulasi",
        title: "Kompensasi, Benefit, dan Regulasi Ketenagakerjaan",
        content:
          "Sistem kompensasi yang adil dan kompetitif merupakan faktor krusial dalam menarik, mempertahankan, dan memotivasi karyawan berkualitas. Kompensasi terdiri dari komponen finansial langsung (gaji pokok, insentif, bonus) dan tidak langsung (asuransi, tunjangan, program pensiun), serta non-finansial (work-life balance, career development, recognition). Di Indonesia, regulasi ketenagakerjaan diatur terutama oleh UU No. 13 Tahun 2003 tentang Ketenagakerjaan yang telah diperbarui oleh UU No. 6 Tahun 2023 tentang Penetapan Perppu Cipta Kerja menjadi Undang-Undang.",
        tables: [
          {
            headers: ["Aspek", "UU 13/2003 (Ketenagakerjaan)", "UU Cipta Kerja (Perppu 2/2022 → UU 6/2023)"],
            rows: [
              [
                "Pesangon PHK",
                "Maksimal 9 bulan upah",
                "Tetap maks 9 bulan, namun ada tambahan JKP (Jaminan Kehilangan Pekerjaan)",
              ],
              [
                "Kontrak Kerja (PKWT)",
                "Maksimal 2 tahun + perpanjangan 1 tahun + pembaruan 2 tahun",
                "Batas waktu lebih fleksibel, wajib kompensasi di akhir PKWT",
              ],
              [
                "Outsourcing",
                "Dibatasi untuk kegiatan penunjang (supporting)",
                "Tidak lagi membedakan core dan non-core, perlindungan pekerja diatur dalam perjanjian",
              ],
              [
                "Upah Minimum",
                "UMP dan UMK ditetapkan gubernur",
                "Formula UMP berdasarkan pertumbuhan ekonomi dan inflasi, UMK ditetapkan bila diperlukan",
              ],
              [
                "Jam Kerja Lembur",
                "Maksimal 3 jam/hari, 14 jam/minggu",
                "Maksimal 4 jam/hari, 18 jam/minggu",
              ],
            ],
            caption: "Perbandingan ketentuan utama UU Ketenagakerjaan dan UU Cipta Kerja",
          },
        ],
        rules: [
          "Setiap pekerja berhak atas upah minimum yang ditetapkan oleh pemerintah daerah (Pasal 88 UU 13/2003).",
          "Pemberi kerja wajib mendaftarkan pekerjanya dalam program jaminan sosial BPJS Ketenagakerjaan (JHT, JKK, JKM, JP) dan BPJS Kesehatan.",
          "PHK merupakan upaya terakhir (ultimum remedium) dan harus melalui perundingan bipartit terlebih dahulu.",
          "Pekerja PKWT berhak mendapat kompensasi saat berakhirnya hubungan kerja (ketentuan baru UU Cipta Kerja).",
          "Cuti tahunan minimal 12 hari kerja setelah bekerja 12 bulan berturut-turut (Pasal 79 UU 13/2003).",
        ],
        warning:
          "Pelanggaran terhadap ketentuan upah minimum dapat dikenakan sanksi pidana penjara 1-4 tahun dan/atau denda Rp 100 juta - Rp 400 juta (Pasal 185 UU 13/2003). Akuntan harus memastikan perusahaan klien mematuhi seluruh regulasi ketenagakerjaan saat melakukan audit.",
        examples: [
          "Perhitungan pesangon: Karyawan dengan masa kerja 8 tahun di-PHK karena efisiensi → berhak 9 bulan upah (pesangon) + 3 bulan upah (penghargaan masa kerja) + penggantian hak (cuti yang belum diambil, dll).",
          "Program JKP (Jaminan Kehilangan Pekerjaan): Pekerja yang di-PHK menerima manfaat berupa uang tunai (6 bulan × 45%-25% upah), akses informasi kerja, dan pelatihan kerja.",
        ],
        notes: [
          "Dalam ujian CA, soal tentang perhitungan pesangon dan hak-hak pekerja saat PHK merupakan topik yang sangat sering muncul.",
          "Pemahaman tentang perbedaan PKWT (kontrak) dan PKWTT (tetap) penting untuk menentukan kewajiban pemberi kerja.",
          "Total compensation benchmarking biasanya menggunakan survei gaji industri untuk memastikan daya saing paket kompensasi.",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CHAPTER 6 — Sistem Informasi Manajemen
  // ──────────────────────────────────────────────
  {
    id: "sistem-informasi-manajemen",
    title: "Sistem Informasi Manajemen",
    description:
      "Membahas peran sistem informasi dalam pengambilan keputusan bisnis, meliputi Enterprise Resource Planning (ERP), business intelligence, keamanan siber, tata kelola data, dan IT governance yang relevan dengan profesi akuntan.",
    sections: [
      {
        id: "erp-systems",
        title: "Enterprise Resource Planning (ERP)",
        content:
          "Enterprise Resource Planning (ERP) adalah sistem informasi terintegrasi yang mengelola seluruh proses bisnis utama organisasi dalam satu platform terpadu. ERP menggunakan database terpusat sehingga data di satu departemen langsung tersedia bagi departemen lain secara real-time, menghilangkan silo informasi dan meningkatkan efisiensi operasional. Implementasi ERP memerlukan investasi besar dalam teknologi, proses bisnis, dan sumber daya manusia. Bagi akuntan, ERP memengaruhi cara pencatatan transaksi, pengendalian internal, dan penyusunan laporan keuangan secara signifikan.",
        tables: [
          {
            headers: ["Modul ERP", "Fungsi Utama", "Relevansi Akuntansi"],
            rows: [
              [
                "Financial Accounting (FI)",
                "General ledger, accounts payable/receivable, asset management",
                "Langsung — pencatatan jurnal, laporan keuangan, rekonsiliasi",
              ],
              [
                "Controlling (CO)",
                "Cost center, profit center, activity-based costing",
                "Langsung — akuntansi manajemen, analisis profitabilitas",
              ],
              [
                "Materials Management (MM)",
                "Procurement, inventory management, vendor evaluation",
                "Penilaian persediaan, akun hutang dagang",
              ],
              [
                "Sales & Distribution (SD)",
                "Order management, pricing, shipping, billing",
                "Pengakuan pendapatan, piutang, pajak keluaran",
              ],
              [
                "Human Capital Management (HCM)",
                "Payroll, time management, personnel administration",
                "Beban gaji, kewajiban imbalan kerja, PPh 21",
              ],
              [
                "Production Planning (PP)",
                "MRP, shop floor control, capacity planning",
                "HPP (harga pokok produksi), WIP, alokasi overhead",
              ],
            ],
            caption:
              "Modul utama ERP dan relevansinya terhadap fungsi akuntansi",
          },
        ],
        examples: [
          "SAP S/4HANA, Oracle ERP Cloud, dan Microsoft Dynamics 365 adalah tiga ERP terkemuka yang banyak digunakan perusahaan besar di Indonesia.",
          "Implementasi ERP di perusahaan manufaktur mengurangi waktu closing bulanan dari 15 hari menjadi 5 hari karena otomasi jurnal dan eliminasi input manual ganda.",
          "Kantor Akuntan Publik (KAP) memanfaatkan data langsung dari sistem ERP klien untuk melakukan audit berbasis data (data analytics audit).",
        ],
        notes: [
          "ERP implementation memiliki risiko tinggi: studi menunjukkan sekitar 50-70% proyek ERP mengalami cost/time overrun atau gagal memenuhi ekspektasi.",
          "Sebagai auditor, pemahaman tentang konfigurasi ERP (chart of accounts, authorization matrix, automated controls) sangat penting untuk menilai pengendalian internal.",
          "Cloud ERP vs on-premise: Cloud ERP mengurangi biaya infrastruktur namun menimbulkan isu privasi data dan vendor lock-in.",
        ],
      },
      {
        id: "business-intelligence",
        title: "Business Intelligence dan Data Analytics",
        content:
          "Business Intelligence (BI) adalah kumpulan teknologi, proses, dan praktik untuk mengumpulkan, mengintegrasikan, menganalisis, dan menyajikan data bisnis guna mendukung pengambilan keputusan yang lebih baik. Data analytics dalam konteks bisnis terbagi menjadi empat tingkatan: descriptive (apa yang terjadi), diagnostic (mengapa terjadi), predictive (apa yang akan terjadi), dan prescriptive (apa yang harus dilakukan). Bagi profesi akuntan, kemampuan memanfaatkan BI dan data analytics menjadi kompetensi yang semakin esensial di era transformasi digital.",
        tables: [
          {
            headers: [
              "Tingkatan Analytics",
              "Pertanyaan Kunci",
              "Teknik",
              "Contoh dalam Akuntansi",
            ],
            rows: [
              [
                "Descriptive",
                "Apa yang terjadi?",
                "Dashboard, laporan standar, visualisasi data",
                "Laporan penjualan bulanan, aging schedule piutang",
              ],
              [
                "Diagnostic",
                "Mengapa terjadi?",
                "Drill-down analysis, data mining, root cause analysis",
                "Analisis penyebab penurunan margin laba di segmen tertentu",
              ],
              [
                "Predictive",
                "Apa yang akan terjadi?",
                "Regression, machine learning, time series forecasting",
                "Prediksi piutang tak tertagih berdasarkan pola historis",
              ],
              [
                "Prescriptive",
                "Apa yang harus dilakukan?",
                "Optimization, simulation, decision modeling",
                "Rekomendasi alokasi anggaran optimal berdasarkan skenario simulasi",
              ],
            ],
            caption:
              "Empat tingkatan data analytics dan aplikasinya dalam akuntansi",
          },
        ],
        examples: [
          "Tableau dashboard menampilkan real-time revenue per region, memungkinkan CFO memantau kinerja dan mengambil keputusan taktis dengan cepat.",
          "Audit analytics: Auditor menggunakan teknik Benford's Law untuk mendeteksi anomali dalam data transaksi keuangan yang mungkin mengindikasikan fraud.",
        ],
        diagram:
          "Data Sources → ETL (Extract, Transform, Load) → Data Warehouse → OLAP/BI Tools → Dashboard & Reports → Decision Makers",
        notes: [
          "Data warehouse berbeda dari database operasional: dirancang untuk query analitis kompleks, bukan transaksi harian.",
          "Dalam ujian CA, pemahaman tentang data governance, data quality, dan master data management semakin sering diujikan.",
          "Self-service BI memungkinkan pengguna bisnis membuat laporan tanpa ketergantungan pada tim IT.",
        ],
      },
      {
        id: "keamanan-siber-tata-kelola-ti",
        title: "Keamanan Siber dan Tata Kelola TI",
        content:
          "Keamanan siber (cybersecurity) melindungi sistem informasi, jaringan, dan data dari akses tidak sah, pencurian, atau kerusakan. Seiring meningkatnya digitalisasi bisnis dan regulasi perlindungan data (UU PDP), organisasi wajib memiliki strategi keamanan yang komprehensif. Tata kelola TI (IT Governance) memastikan bahwa investasi TI selaras dengan strategi bisnis dan memberikan nilai optimal. Framework COBIT (Control Objectives for Information and Related Technologies) oleh ISACA merupakan kerangka kerja tata kelola TI yang paling banyak digunakan dan relevan bagi auditor.",
        tables: [
          {
            headers: ["Domain COBIT 2019", "Tujuan", "Contoh Proses"],
            rows: [
              [
                "Evaluate, Direct and Monitor (EDM)",
                "Tata kelola strategis TI oleh board of directors",
                "Evaluasi strategi TI, pengarahan manajemen risiko TI",
              ],
              [
                "Align, Plan and Organize (APO)",
                "Perencanaan dan pengorganisasian TI",
                "Manajemen strategi TI, manajemen anggaran TI, manajemen risiko",
              ],
              [
                "Build, Acquire and Implement (BAI)",
                "Pengembangan dan implementasi solusi TI",
                "Manajemen proyek TI, pengembangan aplikasi, manajemen perubahan",
              ],
              [
                "Deliver, Service and Support (DSS)",
                "Operasional dan dukungan layanan TI",
                "Manajemen operasi, manajemen insiden, manajemen keamanan",
              ],
              [
                "Monitor, Evaluate and Assess (MEA)",
                "Pemantauan kinerja dan kepatuhan TI",
                "Pemantauan pengendalian internal, audit TI, kepatuhan regulasi",
              ],
            ],
            caption: "Domain utama COBIT 2019 untuk tata kelola TI",
          },
        ],
        rules: [
          "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (PDP) mewajibkan setiap organisasi yang memproses data pribadi untuk menunjuk Data Protection Officer dan menerapkan langkah-langkah keamanan yang memadai.",
          "PP No. 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik mengatur kewajiban keamanan sistem elektronik.",
          "Standar ISO 27001 (Information Security Management System) memberikan kerangka kerja untuk mengelola risiko keamanan informasi secara sistematis.",
        ],
        warning:
          "Serangan ransomware dan data breach menjadi ancaman serius bagi perusahaan Indonesia. Rata-rata kerugian akibat data breach secara global mencapai USD 4,45 juta (IBM Report 2023). Akuntan harus memahami risiko ini karena berdampak langsung pada penyajian laporan keuangan (provisi kewajiban, pengungkapan peristiwa setelah tanggal pelaporan) dan kelangsungan usaha.",
        examples: [
          "Defense in Depth: Organisasi menerapkan multi-layer security — firewall, IDS/IPS, encryption, multi-factor authentication, dan security awareness training.",
          "IT General Controls (ITGC) yang diuji auditor: access controls (logical & physical), change management, backup & recovery, dan IT operations.",
          "Insiden kebocoran data e-commerce Indonesia pada 2020 yang melibatkan jutaan data pelanggan mendorong percepatan pengesahan UU PDP.",
        ],
        notes: [
          "CIA Triad (Confidentiality, Integrity, Availability) adalah prinsip dasar keamanan informasi yang menjadi fondasi seluruh kebijakan keamanan.",
          "Dalam audit, ITGC (IT General Controls) dan ITAC (IT Application Controls) merupakan komponen pengendalian internal yang wajib dievaluasi.",
          "Risk assessment keamanan siber: Identifikasi aset → Identifikasi ancaman → Identifikasi kerentanan → Analisis dampak → Penentuan prioritas mitigasi.",
          "COBIT sering diujikan bersamaan dengan COSO Internal Control Framework dalam konteks audit sistem informasi.",
        ],
      },
    ],
  },
],
  },
  {
    subjectId: 'ekonomi-statistik',
    chapters: [
  {
    id: 'mikroekonomi',
    title: 'Ekonomi Mikro',
    description: 'Teori permintaan-penawaran, elastisitas, struktur pasar, dan teori produksi untuk analisis bisnis.',
    sections: [
      {
        id: 'demand-supply',
        title: 'Permintaan, Penawaran, dan Keseimbangan Pasar',
        content: 'Hukum permintaan: harga naik -> kuantitas diminta turun (ceteris paribus). Hukum penawaran: harga naik -> kuantitas ditawarkan naik. Keseimbangan terjadi saat Qd = Qs.',
        tables: [
          {
            caption: 'Determinan Permintaan dan Penawaran',
            headers: ['Faktor', 'Efek pada Permintaan', 'Efek pada Penawaran'],
            rows: [
              ['Harga barang itu sendiri', 'Bergerak sepanjang kurva D', 'Bergerak sepanjang kurva S'],
              ['Pendapatan konsumen', 'Geser kurva D (normal: kanan, inferior: kiri)', '-'],
              ['Harga barang terkait', 'Substitusi: searah, Komplementer: berlawanan', '-'],
              ['Ekspektasi harga', 'Naik: D geser kanan', 'Naik: S geser kiri (tahan jual)'],
              ['Biaya produksi', '-', 'Naik: S geser kiri'],
              ['Teknologi', '-', 'Maju: S geser kanan'],
            ],
          },
          {
            caption: 'Jenis Elastisitas Permintaan',
            headers: ['Jenis', 'Formula', 'Klasifikasi'],
            rows: [
              ['Elastisitas Harga (PED)', '%\u0394Qd / %\u0394P', '|E|>1: elastis, |E|=1: unit, |E|<1: inelastis'],
              ['Elastisitas Pendapatan (YED)', '%\u0394Qd / %\u0394Y', 'E>0: normal, E<0: inferior, E>1: luxury'],
              ['Elastisitas Silang (XED)', '%\u0394Qd(A) / %\u0394P(B)', 'E>0: substitusi, E<0: komplementer'],
            ],
          },
        ],
        formula: 'PED = (%\u0394Qd) / (%\u0394P) = (\u0394Q/Q) / (\u0394P/P)',
      },
      {
        id: 'struktur-pasar',
        title: 'Struktur Pasar',
        content: 'Struktur pasar menentukan perilaku dan kinerja perusahaan dalam industri.',
        tables: [
          {
            caption: 'Perbandingan Struktur Pasar',
            headers: ['Karakteristik', 'Perfect Competition', 'Monopolistic Competition', 'Oligopoli', 'Monopoli'],
            rows: [
              ['Jumlah penjual', 'Sangat banyak', 'Banyak', 'Sedikit', 'Satu'],
              ['Produk', 'Homogen', 'Diferensiasi', 'Homogen/diferensiasi', 'Unik, tanpa substitusi dekat'],
              ['Hambatan masuk', 'Tidak ada', 'Rendah', 'Tinggi', 'Sangat tinggi'],
              ['Pricing power', 'Price taker', 'Sedikit', 'Signifikan', 'Price maker'],
              ['Profit jangka panjang', 'Normal profit', 'Normal profit', 'Supernormal possible', 'Supernormal'],
              ['Contoh', 'Pasar beras, forex', 'Restoran, pakaian', 'Telekomunikasi, semen', 'PLN (listrik)'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'makroekonomi',
    title: 'Ekonomi Makro',
    description: 'GDP, inflasi, pengangguran, kebijakan fiskal dan moneter, siklus bisnis.',
    sections: [
      {
        id: 'gdp-inflasi',
        title: 'GDP, Inflasi, dan Kebijakan Ekonomi',
        content: 'Ekonomi makro menganalisis perekonomian secara agregat. GDP mengukur total output, inflasi mengukur kenaikan harga umum.',
        tables: [
          {
            caption: 'Indikator Makroekonomi Kunci',
            headers: ['Indikator', 'Definisi', 'Pengukuran', 'Target Indonesia'],
            rows: [
              ['GDP', 'Total nilai barang/jasa yang diproduksi', 'Expenditure: C + I + G + (X-M)', '5-6% pertumbuhan'],
              ['Inflasi', 'Kenaikan harga umum berkelanjutan', 'CPI (IHK), GDP Deflator', '2-4% (target BI)'],
              ['Pengangguran', 'Angkatan kerja yang tidak bekerja', 'Unemployment rate', '<5%'],
              ['Neraca Perdagangan', 'Ekspor - Impor', 'Current account balance', 'Surplus/seimbang'],
              ['Suku Bunga', 'Harga uang (cost of borrowing)', 'BI-7 Day Reverse Repo Rate', 'Disesuaikan inflasi'],
            ],
          },
          {
            caption: 'Kebijakan Fiskal vs Moneter',
            headers: ['Aspek', 'Kebijakan Fiskal', 'Kebijakan Moneter'],
            rows: [
              ['Pelaksana', 'Pemerintah (Kemenkeu)', 'Bank Indonesia'],
              ['Instrumen', 'Pajak, belanja pemerintah, subsidi', 'Suku bunga, open market operations, reserve requirement'],
              ['Ekspansif', 'Turunkan pajak, naikkan belanja', 'Turunkan suku bunga, beli SBN'],
              ['Kontraktif', 'Naikkan pajak, kurangi belanja', 'Naikkan suku bunga, jual SBN'],
              ['Dampak', 'Langsung pada AD', 'Melalui transmisi suku bunga'],
              ['Lag', 'Decision lag panjang, impact lag pendek', 'Decision lag pendek, impact lag panjang'],
            ],
          },
        ],
        formula: 'GDP = C + I + G + (X - M)\nC = Consumption, I = Investment, G = Government Spending, X = Exports, M = Imports',
      },
      {
        id: 'siklus-bisnis',
        title: 'Siklus Bisnis',
        content: 'Perekonomian berfluktuasi dalam siklus: expansion, peak, contraction/recession, dan trough.',
        tables: [
          {
            caption: 'Fase Siklus Bisnis',
            headers: ['Fase', 'Karakteristik', 'Implikasi Bisnis'],
            rows: [
              ['Expansion', 'GDP naik, pengangguran turun, investasi naik', 'Peluang ekspansi, akses modal mudah'],
              ['Peak', 'GDP tertinggi, tekanan inflasi, kapasitas penuh', 'Waspada overinvestment, manage cost'],
              ['Contraction', 'GDP turun, PHK naik, demand turun', 'Efisiensi, jaga cash flow, defensive strategy'],
              ['Trough', 'GDP terendah, likuiditas ketat', 'Beli aset murah, siapkan recovery'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'statistik-deskriptif',
    title: 'Statistik Deskriptif',
    description: 'Ukuran pemusatan, penyebaran, distribusi data, dan visualisasi untuk analisis bisnis.',
    sections: [
      {
        id: 'central-tendency',
        title: 'Ukuran Pemusatan dan Penyebaran',
        content: 'Statistik deskriptif merangkum dan mendeskripsikan karakteristik data tanpa membuat generalisasi.',
        tables: [
          {
            caption: 'Ukuran Pemusatan (Central Tendency)',
            headers: ['Ukuran', 'Definisi', 'Kapan Digunakan', 'Kelemahan'],
            rows: [
              ['Mean (rata-rata)', 'Jumlah data / banyak data', 'Data interval/rasio, distribusi simetris', 'Sensitif terhadap outlier'],
              ['Median', 'Nilai tengah data terurut', 'Data ordinal, ada outlier', 'Tidak gunakan semua data'],
              ['Modus', 'Nilai yang paling sering muncul', 'Data nominal, multimodal', 'Bisa tidak tunggal atau tidak ada'],
            ],
          },
          {
            caption: 'Ukuran Penyebaran (Dispersion)',
            headers: ['Ukuran', 'Formula', 'Interpretasi'],
            rows: [
              ['Range', 'Max - Min', 'Jarak terjauh, sensitif outlier'],
              ['Variance', '\u03a3(xi - x\u0304)\u00b2 / (n-1)', 'Rata-rata kuadrat deviasi dari mean'],
              ['Standard Deviation', '\u221aVariance', 'Penyebaran dalam unit yang sama dengan data'],
              ['Coefficient of Variation', '(SD / Mean) x 100%', 'Perbandingan variabilitas relatif antar kelompok'],
              ['Interquartile Range', 'Q3 - Q1', 'Range 50% data tengah, robust terhadap outlier'],
            ],
          },
        ],
        formula: 'Variance (s\u00b2) = \u03a3(xi - x\u0304)\u00b2 / (n-1)\nStandard Deviation (s) = \u221a[\u03a3(xi - x\u0304)\u00b2 / (n-1)]\nCV = (s / x\u0304) \u00d7 100%',
      },
    ],
  },
  {
    id: 'statistik-inferensial',
    title: 'Statistik Inferensial',
    description: 'Pengujian hipotesis, confidence interval, distribusi sampling, dan uji-uji statistik.',
    sections: [
      {
        id: 'hypothesis-testing',
        title: 'Pengujian Hipotesis',
        content: 'Inferensial statistik membuat kesimpulan tentang populasi berdasarkan sampel. Pengujian hipotesis menguji klaim tentang parameter populasi.',
        steps: [
          'Rumuskan H0 (hipotesis nol) dan H1 (hipotesis alternatif)',
          'Tentukan tingkat signifikansi (\u03b1), umumnya 0.05 atau 0.01',
          'Pilih uji statistik yang tepat (z-test, t-test, chi-square, F-test)',
          'Hitung test statistic dari data sampel',
          'Bandingkan dengan critical value atau hitung p-value',
          'Keputusan: Tolak H0 jika test statistic > critical value atau p-value < \u03b1',
        ],
        tables: [
          {
            caption: 'Jenis Uji Statistik',
            headers: ['Uji', 'Kegunaan', 'Syarat', 'Distribusi'],
            rows: [
              ['Z-test', 'Uji mean, n besar (>30)', 'Data normal, \u03c3 diketahui', 'Normal standar'],
              ['T-test (1 sampel)', 'Uji mean, n kecil', 'Data normal, \u03c3 tidak diketahui', 'Student-t (df=n-1)'],
              ['T-test (2 sampel)', 'Bandingkan 2 mean', 'Data normal, independent', 'Student-t'],
              ['Paired t-test', 'Bandingkan mean berpasangan', 'Data berpasangan, selisih normal', 'Student-t (df=n-1)'],
              ['Chi-square', 'Uji independensi/goodness of fit', 'Data kategorik, expected freq \u22655', 'Chi-square'],
              ['F-test (ANOVA)', 'Bandingkan 3+ mean', 'Normal, homoscedasticity', 'F-distribution'],
            ],
          },
          {
            caption: 'Error dalam Pengujian Hipotesis',
            headers: ['', 'H0 Benar', 'H0 Salah'],
            rows: [
              ['Tolak H0', 'Type I Error (\u03b1)', 'Correct (Power = 1-\u03b2)'],
              ['Tidak Tolak H0', 'Correct (1-\u03b1)', 'Type II Error (\u03b2)'],
            ],
          },
        ],
        warning: 'Tidak menolak H0 \u2260 membuktikan H0 benar. Kita hanya gagal menemukan bukti yang cukup untuk menolak.',
      },
    ],
  },
  {
    id: 'regresi-korelasi',
    title: 'Regresi dan Korelasi',
    description: 'Analisis regresi linear, korelasi, R-squared, dan aplikasi dalam forecasting bisnis.',
    sections: [
      {
        id: 'regresi-linear',
        title: 'Regresi Linear dan Korelasi',
        content: 'Regresi menganalisis hubungan antara variabel dependen (Y) dan independen (X). Berguna untuk forecasting dan analisis kausal.',
        tables: [
          {
            caption: 'Konsep Kunci Regresi',
            headers: ['Konsep', 'Simbol', 'Interpretasi'],
            rows: [
              ['Intercept', 'a (b0)', 'Nilai Y ketika X = 0'],
              ['Slope', 'b (b1)', 'Perubahan Y per unit perubahan X'],
              ['R (korelasi)', 'r', '-1 \u2264 r \u2264 1, kekuatan & arah hubungan linear'],
              ['R-squared', 'R\u00b2', '% variasi Y yang dijelaskan oleh X (0-100%)'],
              ['Adjusted R\u00b2', 'R\u0304\u00b2', 'R\u00b2 disesuaikan jumlah variabel independen'],
              ['Standard Error', 'SE', 'Rata-rata kesalahan prediksi'],
              ['p-value (slope)', 'p', 'Signifikansi hubungan (p < 0.05 = signifikan)'],
            ],
          },
          {
            caption: 'Asumsi Regresi Linear (CLRM)',
            headers: ['Asumsi', 'Pelanggaran', 'Deteksi', 'Solusi'],
            rows: [
              ['Linearitas', 'Hubungan non-linear', 'Scatter plot, residual plot', 'Transformasi variabel'],
              ['Normalitas residual', 'Residual tidak normal', 'Histogram, Q-Q plot, Jarque-Bera', 'Transformasi, n besar (CLT)'],
              ['Homoscedasticity', 'Heteroscedasticity', 'Breusch-Pagan, White test', 'WLS, robust SE'],
              ['No autocorrelation', 'Autocorrelation residual', 'Durbin-Watson test', 'Cochrane-Orcutt, lag variable'],
              ['No multicollinearity', 'Korelasi antar X tinggi', 'VIF > 10, korelasi matrix', 'Drop variabel, PCA'],
            ],
          },
        ],
        formula: 'Y = a + bX + e\nb = \u03a3(Xi-X\u0304)(Yi-Y\u0304) / \u03a3(Xi-X\u0304)\u00b2\na = Y\u0304 - bX\u0304\nR\u00b2 = SSR/SST = 1 - (SSE/SST)',
      },
    ],
  },
],
  },
  {
    subjectId: 'etika-tata-kelola',
    chapters: [
  {
    id: 'kode-etik',
    title: 'Kode Etik Profesi Akuntan',
    description: 'Prinsip dasar etika profesi akuntan berdasarkan IESBA Code dan Kode Etik IAI.',
    sections: [
      {
        id: 'prinsip-dasar',
        title: 'Lima Prinsip Dasar Etika Profesi',
        content: 'Kode Etik Profesi Akuntan Indonesia mengadopsi IESBA Code of Ethics. Setiap akuntan profesional wajib mematuhi lima prinsip dasar ini dalam seluruh aktivitas profesionalnya.',
        tables: [
          {
            caption: 'Lima Prinsip Dasar Etika',
            headers: ['Prinsip', 'Deskripsi', 'Contoh Pelanggaran'],
            rows: [
              ['Integritas', 'Bersikap lugas dan jujur dalam semua hubungan profesional dan bisnis', 'Menyembunyikan temuan material dalam audit'],
              ['Objektivitas', 'Tidak membiarkan bias, benturan kepentingan, atau pengaruh pihak lain mempengaruhi pertimbangan profesional', 'Memberikan opini audit favorable karena tekanan klien'],
              ['Kompetensi dan Kehati-hatian Profesional', 'Memelihara pengetahuan dan keahlian profesional, bertindak cermat sesuai standar', 'Menerima penugasan di luar kompetensi tanpa supervisi'],
              ['Kerahasiaan', 'Menghormati kerahasiaan informasi yang diperoleh dari hubungan profesional', 'Membocorkan data keuangan klien ke pihak ketiga'],
              ['Perilaku Profesional', 'Mematuhi hukum dan regulasi, menghindari tindakan yang mendiskreditkan profesi', 'Iklan yang menyesatkan tentang kualifikasi'],
            ],
          },
        ],
        notes: ['Prinsip-prinsip ini berlaku untuk semua akuntan: publik, manajemen, sektor publik, maupun pendidikan.'],
      },
      {
        id: 'ancaman-pencegahan',
        title: 'Kerangka Ancaman dan Pencegahan',
        content: 'Conceptual framework approach mengidentifikasi ancaman terhadap kepatuhan prinsip dasar dan menerapkan pencegahan yang memadai.',
        tables: [
          {
            caption: 'Jenis Ancaman terhadap Kepatuhan',
            headers: ['Ancaman', 'Deskripsi', 'Contoh'],
            rows: [
              ['Self-interest', 'Kepentingan keuangan atau kepentingan lain mempengaruhi pertimbangan', 'Fee kontingen, kepemilikan saham klien audit'],
              ['Self-review', 'Mengevaluasi hasil pekerjaan sendiri sebelumnya', 'Auditor yang sebelumnya menyusun LK klien'],
              ['Advocacy', 'Mempromosikan posisi klien sampai objektivitas terganggu', 'Menjadi saksi ahli yang membela posisi klien'],
              ['Familiarity', 'Kedekatan hubungan membuat terlalu simpatik', 'Hubungan keluarga dengan direksi klien, rotasi lama'],
              ['Intimidation', 'Dihalangi bertindak objektif karena tekanan', 'Ancaman penggantian auditor jika opini tidak sesuai'],
            ],
          },
          {
            caption: 'Contoh Pencegahan (Safeguards)',
            headers: ['Kategori', 'Pencegahan'],
            rows: [
              ['Profesi/Legislasi/Regulasi', 'Pendidikan dan pelatihan, CPD, standar profesional, review mutu, regulasi'],
              ['Lingkungan kerja', 'Kebijakan mutu KAP, rotasi partner, peer review, hotline etik'],
              ['Spesifik penugasan', 'Tim review terpisah, konsultasi pihak independen, disclosure ke TCWG'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'independensi',
    title: 'Independensi Akuntan Publik',
    description: 'Independence of mind dan independence in appearance, aturan rotasi, pembatasan jasa non-assurance.',
    sections: [
      {
        id: 'konsep-independensi',
        title: 'Independensi dalam Audit',
        content: 'Independensi adalah fondasi kepercayaan publik terhadap profesi audit. Terdiri dari dua komponen yang saling melengkapi.',
        tables: [
          {
            caption: 'Dua Komponen Independensi',
            headers: ['Komponen', 'Definisi', 'Cara Menjaga'],
            rows: [
              ['Independence of Mind', 'Keadaan pikiran yang memungkinkan pengungkapan kesimpulan tanpa dipengaruhi faktor-faktor yang mengkompromikan pertimbangan profesional', 'Sikap skeptisisme profesional, tidak terpengaruh tekanan'],
              ['Independence in Appearance', 'Menghindari fakta dan keadaan yang begitu signifikan sehingga pihak ketiga yang rasional akan menyimpulkan bahwa integritas, objektivitas, atau skeptisisme profesional telah dikompromikan', 'Hindari hubungan yang menimbulkan persepsi tidak independen'],
            ],
          },
          {
            caption: 'Aturan Independensi di Indonesia',
            headers: ['Aturan', 'Ketentuan', 'Dasar Hukum'],
            rows: [
              ['Rotasi AP', 'Maksimal 5 tahun berturut-turut, cooling off 2 tahun', 'PP 20/2015, POJK'],
              ['Rotasi KAP', 'Tidak ada batasan rotasi KAP (dihapus)', 'PP 20/2015'],
              ['Kepemilikan saham', 'AP dan keluarga inti dilarang memiliki saham klien audit', 'Kode Etik, UU AP'],
              ['Fee kontingen', 'Dilarang untuk penugasan assurance', 'Kode Etik'],
              ['Pembatasan jasa', 'Tidak boleh memberikan jasa tertentu (bookkeeping, valuasi, dll) pada klien audit PIE', 'Kode Etik, POJK'],
              ['Hubungan bisnis', 'Tidak boleh ada hubungan bisnis material dengan klien audit', 'Kode Etik'],
            ],
          },
        ],
        warning: 'PIE (Public Interest Entity) di Indonesia: emiten, bank, asuransi, dana pensiun, BUMN tertentu. Aturan independensi lebih ketat untuk PIE.',
      },
    ],
  },
  {
    id: 'gcg',
    title: 'Good Corporate Governance (GCG)',
    description: 'Prinsip TARIF, organ perusahaan, komite audit, dan implementasi GCG di Indonesia.',
    sections: [
      {
        id: 'prinsip-gcg',
        title: 'Prinsip dan Implementasi GCG',
        content: 'GCG adalah sistem yang mengarahkan dan mengendalikan perusahaan untuk menciptakan nilai tambah bagi stakeholders. Di Indonesia, prinsip GCG dikenal dengan akronim TARIF.',
        tables: [
          {
            caption: 'Prinsip TARIF GCG',
            headers: ['Prinsip', 'Deskripsi', 'Implementasi'],
            rows: [
              ['Transparency', 'Keterbukaan informasi yang material dan relevan', 'Annual report, website, RUPS, keterbukaan informasi'],
              ['Accountability', 'Kejelasan fungsi, pelaksanaan, dan pertanggungjawaban organ', 'Job description jelas, KPI, internal audit'],
              ['Responsibility', 'Kepatuhan pada hukum dan tanggung jawab sosial', 'Compliance department, CSR, PROPER'],
              ['Independency', 'Bebas dari benturan kepentingan dan tekanan', 'Komisaris independen minimal 30%, komite audit independen'],
              ['Fairness', 'Kesetaraan perlakuan terhadap stakeholders', 'RUPS yang adil, perlindungan pemegang saham minoritas'],
            ],
          },
          {
            caption: 'Organ GCG Perusahaan Indonesia',
            headers: ['Organ', 'Fungsi', 'Komposisi'],
            rows: [
              ['RUPS', 'Keputusan tertinggi: pengangkatan/pemberhentian, persetujuan LK, perubahan AD', 'Seluruh pemegang saham'],
              ['Dewan Komisaris', 'Pengawasan kebijakan dan jalannya pengurusan perseroan', 'Minimal 30% independen untuk emiten, ketua bukan mantan direksi'],
              ['Direksi', 'Pengurusan perseroan untuk kepentingan dan tujuan perseroan', 'Minimal 2 orang untuk emiten, direktur independen'],
              ['Komite Audit', 'Membantu komisaris: review LK, sistem pengendalian, pemilihan auditor', 'Minimal 3 anggota, diketuai komisaris independen'],
              ['Sekretaris Perusahaan', 'Penghubung perusahaan dengan stakeholders, kepatuhan keterbukaan', '1 orang, menguasai hukum dan pasar modal'],
              ['Internal Audit', 'Evaluasi dan peningkatan efektivitas GRC', 'Unit independen, melapor ke direktur utama dan komite audit'],
            ],
          },
        ],
        notes: ['Two-tier board system Indonesia berbeda dengan one-tier system (Anglo-Saxon). Komisaris terpisah dari direksi.'],
      },
    ],
  },
  {
    id: 'pengendalian-internal',
    title: 'Pengendalian Internal (COSO)',
    description: 'Framework COSO 2013, komponen dan prinsip, evaluasi efektivitas pengendalian internal.',
    sections: [
      {
        id: 'coso-framework',
        title: 'COSO Internal Control Framework 2013',
        content: 'COSO (Committee of Sponsoring Organizations) menyediakan framework untuk merancang, mengimplementasikan, dan mengevaluasi efektivitas pengendalian internal.',
        tables: [
          {
            caption: 'Lima Komponen COSO dan 17 Prinsip',
            headers: ['Komponen', 'Prinsip', 'Penjelasan'],
            rows: [
              ['Control Environment', '1. Integritas dan nilai etika', 'Tone at the top, kode etik'],
              ['Control Environment', '2. Board oversight', 'Dewan komisaris mengawasi pengendalian'],
              ['Control Environment', '3. Struktur, wewenang, tanggung jawab', 'Organisasi yang jelas'],
              ['Control Environment', '4. Komitmen kompetensi', 'SDM yang kompeten'],
              ['Control Environment', '5. Akuntabilitas', 'Pertanggungjawaban atas pengendalian'],
              ['Risk Assessment', '6. Tujuan yang jelas', 'Tujuan operasi, pelaporan, kepatuhan'],
              ['Risk Assessment', '7. Identifikasi dan analisis risiko', 'Risk register, risk matrix'],
              ['Risk Assessment', '8. Pertimbangan fraud risk', 'Fraud risk assessment'],
              ['Risk Assessment', '9. Perubahan signifikan', 'Monitor perubahan yang mempengaruhi IC'],
              ['Control Activities', '10. Pilih dan kembangkan control activities', 'Preventive dan detective controls'],
              ['Control Activities', '11. Kontrol teknologi', 'IT general controls, application controls'],
              ['Control Activities', '12. Kebijakan dan prosedur', 'SOP yang terdokumentasi'],
              ['Information & Communication', '13. Informasi yang relevan dan berkualitas', 'Sistem informasi yang andal'],
              ['Information & Communication', '14. Komunikasi internal', 'Pelaporan efektif ke manajemen'],
              ['Information & Communication', '15. Komunikasi eksternal', 'Pelaporan ke regulator, stakeholders'],
              ['Monitoring', '16. Evaluasi berkelanjutan dan/atau terpisah', 'Ongoing monitoring, internal audit'],
              ['Monitoring', '17. Evaluasi dan komunikasi defisiensi', 'Laporan temuan dan tindak lanjut'],
            ],
          },
        ],
        diagram: 'COSO Cube:\n\n  Objectives: Operations | Reporting | Compliance\n  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  | Control Environment              |\n  | Risk Assessment                  |\n  | Control Activities               |\n  | Information & Communication      |\n  | Monitoring Activities            |\n  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n  Entity Level | Division | Unit | Function',
      },
    ],
  },
  {
    id: 'anti-fraud',
    title: 'Anti-Fraud dan Whistleblowing',
    description: 'Fraud triangle, jenis fraud, red flags, program anti-fraud, dan sistem pelaporan pelanggaran.',
    sections: [
      {
        id: 'fraud-framework',
        title: 'Framework Anti-Fraud',
        content: 'Fraud adalah tindakan ilegal yang disengaja untuk memperoleh keuntungan pribadi. Memahami penyebab dan tanda-tanda fraud penting untuk pencegahan dan deteksi.',
        tables: [
          {
            caption: 'Fraud Triangle (Donald Cressey)',
            headers: ['Elemen', 'Deskripsi', 'Contoh Red Flags'],
            rows: [
              ['Pressure/Incentive', 'Tekanan keuangan atau non-keuangan yang mendorong fraud', 'Target keuangan tidak realistis, bonus berbasis kinerja, masalah keuangan pribadi'],
              ['Opportunity', 'Kelemahan pengendalian yang memungkinkan fraud', 'Segregation of duties lemah, override manajemen, lack of oversight'],
              ['Rationalization', 'Pembenaran atas tindakan fraud', '"Hanya pinjam sementara", "Perusahaan tidak adil", "Semua orang melakukannya"'],
            ],
          },
          {
            caption: 'Jenis Fraud (ACFE Fraud Tree)',
            headers: ['Kategori', 'Jenis', 'Contoh'],
            rows: [
              ['Asset Misappropriation', 'Cash theft, skimming, billing schemes', 'Penggelapan kas, pembayaran fiktif, mark-up pembelian'],
              ['Corruption', 'Bribery, conflict of interest, extortion', 'Suap vendor, kickback, gratifikasi'],
              ['Financial Statement Fraud', 'Overstate revenue/assets, understate expenses/liabilities', 'Revenue recognition fraud, kapitalisasi beban'],
            ],
          },
          {
            caption: 'Program Anti-Fraud',
            headers: ['Komponen', 'Aktivitas', 'Penanggung Jawab'],
            rows: [
              ['Prevention', 'Tone at the top, kode etik, training, segregation of duties', 'Manajemen, HR, compliance'],
              ['Detection', 'Whistleblowing system, data analytics, surprise audit, hotline', 'Internal audit, compliance'],
              ['Investigation', 'Forensic accounting, digital forensics, interview', 'Internal audit, legal, eksternal'],
              ['Response', 'Sanksi, pemulihan kerugian, perbaikan sistem, pelaporan', 'Manajemen, legal, regulator'],
            ],
          },
        ],
        warning: 'Di Indonesia, gratifikasi > Rp10 juta wajib dilaporkan ke KPK dalam 30 hari kerja (UU Tipikor).',
      },
    ],
  },
  {
    id: 'regulasi-profesi',
    title: 'Regulasi Profesi Akuntan Indonesia',
    description: 'UU Akuntan Publik, PP 20/2015, peran IAI, IAPI, OJK, dan PPPK.',
    sections: [
      {
        id: 'regulasi',
        title: 'Kerangka Regulasi Profesi Akuntan',
        content: 'Profesi akuntan di Indonesia diatur oleh berbagai lembaga dan peraturan perundang-undangan.',
        tables: [
          {
            caption: 'Lembaga Pengatur Profesi Akuntan',
            headers: ['Lembaga', 'Peran', 'Wewenang'],
            rows: [
              ['Kementerian Keuangan (PPPK)', 'Pembinaan dan pengawasan akuntan publik', 'Pemberian izin AP, sanksi, register negara akuntan'],
              ['IAI', 'Organisasi profesi akuntan', 'Penyusunan SAK, pendidikan profesi, sertifikasi CA'],
              ['IAPI', 'Organisasi profesi akuntan publik', 'Standar audit (SA), review mutu, pendidikan CPA'],
              ['OJK', 'Pengawasan jasa keuangan', 'Registrasi AP di pasar modal, aturan tambahan untuk PIE'],
              ['BPK', 'Pemeriksaan keuangan negara', 'Standar pemeriksaan keuangan negara (SPKN)'],
            ],
          },
          {
            caption: 'Peraturan Kunci Profesi Akuntan',
            headers: ['Peraturan', 'Isi Pokok'],
            rows: [
              ['UU No. 5/2011 tentang Akuntan Publik', 'Syarat AP, hak dan kewajiban, sanksi, pembatasan jasa'],
              ['PP No. 20/2015', 'Praktik akuntan publik: rotasi AP 5 tahun, cooling off 2 tahun'],
              ['PMK 154/PMK.01/2017', 'Register negara akuntan, syarat dan perpanjangan'],
              ['POJK tentang AP', 'Aturan tambahan AP di pasar modal, rotasi, independensi'],
              ['Kode Etik IAI', 'Adaptasi IESBA Code, prinsip dasar etika'],
            ],
          },
        ],
        notes: ['Syarat CA: S1 Akuntansi + PPAk + lulus 7 mata ujian CA + pengalaman 3 tahun.', 'Syarat AP: CA + lulus ujian AP (IAPI) + pengalaman 1000 jam audit.'],
      },
    ],
  },
],
  },
  {
    subjectId: 'studi-kasus-terpadu',
    chapters: [
  {
    id: 'framework-analisis',
    title: 'Framework Analisis Kasus Terpadu',
    description: 'Metodologi pendekatan kasus terpadu: identifikasi masalah, analisis multi-perspektif, dan penyusunan rekomendasi.',
    sections: [
      {
        id: 'pendekatan',
        title: 'Metodologi Analisis Kasus',
        content: 'Studi kasus terpadu menguji kemampuan mengintegrasikan pengetahuan dari berbagai mata ujian untuk menyelesaikan masalah bisnis yang kompleks. Pendekatan sistematis sangat penting.',
        steps: [
          'Baca kasus secara menyeluruh, identifikasi tokoh, entitas, dan timeline',
          'Identifikasi semua isu/masalah: akuntansi, audit, perpajakan, etika, manajemen',
          'Prioritaskan isu berdasarkan materialitas dan urgensi',
          'Analisis setiap isu dengan standar/regulasi yang relevan',
          'Pertimbangkan keterkaitan antar isu (cross-functional impact)',
          'Susun rekomendasi yang terintegrasi dan praktis',
          'Review jawaban: kelengkapan, konsistensi, dan format profesional',
        ],
        tables: [
          {
            caption: 'Framework Identifikasi Isu',
            headers: ['Area', 'Pertanyaan Kunci', 'Standar/Regulasi'],
            rows: [
              ['Akuntansi', 'Apakah pengakuan, pengukuran, penyajian sesuai PSAK?', 'PSAK terkait, Kerangka Konseptual'],
              ['Audit', 'Apa risiko audit? Prosedur apa yang diperlukan?', 'SA 315, SA 330, SA 500, SA 700'],
              ['Perpajakan', 'Apakah ada exposure pajak? Perencanaan pajak legal?', 'UU PPh, UU PPN, PP terkait'],
              ['Etika', 'Apakah ada konflik kepentingan? Ancaman independensi?', 'Kode Etik IAI, UU AP'],
              ['Manajemen', 'Apa implikasi strategis? Risiko bisnis?', 'Framework analisis strategis'],
              ['Governance', 'Apakah GCG terpenuhi? Pengendalian internal memadai?', 'COSO, Pedoman GCG'],
            ],
          },
        ],
        notes: ['Alokasi waktu: 20% membaca dan identifikasi, 60% analisis dan penulisan, 20% review.'],
      },
    ],
  },
  {
    id: 'kasus-akuntansi',
    title: 'Kasus Akuntansi dan Pelaporan',
    description: 'Analisis kasus terkait pengakuan pendapatan, aset tetap, instrumen keuangan, dan konsolidasi.',
    sections: [
      {
        id: 'revenue',
        title: 'Kasus Pengakuan Pendapatan (PSAK 115/IFRS 15)',
        content: 'Kasus pengakuan pendapatan sering muncul dalam ujian terpadu karena kompleksitas dan potensi manipulasi.',
        tables: [
          {
            caption: 'Skenario Kasus Pendapatan Umum',
            headers: ['Skenario', 'Isu Kunci', 'Perlakuan yang Benar'],
            rows: [
              ['Penjualan dengan hak retur', 'Apakah pendapatan diakui penuh?', 'Akui pendapatan dikurangi estimasi retur, buat refund liability dan right of return asset'],
              ['Kontrak konstruksi multi-tahun', 'Kapan pendapatan diakui?', 'Over time jika memenuhi kriteria PSAK 115.35, gunakan % completion'],
              ['Bundled product + service', 'Bagaimana alokasi harga?', 'Identifikasi performance obligations terpisah, alokasi berdasarkan standalone selling price'],
              ['Bill-and-hold arrangement', 'Apakah sudah transfer control?', 'Akui jika alasan substansial, barang teridentifikasi, risiko di pembeli'],
              ['Consignment sales', 'Siapa principal vs agent?', 'Consignor akui saat dijual ke end customer, consignee akui fee saja'],
              ['Variable consideration', 'Bagaimana mengukur pendapatan?', 'Expected value atau most likely amount, constraint on variable consideration'],
            ],
          },
        ],
        warning: 'Revenue recognition fraud adalah jenis financial statement fraud paling umum. Auditor harus menganggap ada risiko fraud pada pendapatan (SA 240).',
      },
      {
        id: 'aset-konsolidasi',
        title: 'Kasus Aset Tetap dan Konsolidasi',
        content: 'Kasus aset tetap melibatkan kapitalisasi vs expense, revaluasi, impairment. Konsolidasi melibatkan goodwill, NCI, dan eliminasi.',
        tables: [
          {
            caption: 'Decision Matrix: Kapitalisasi vs Expense',
            headers: ['Situasi', 'Kapitalisasi?', 'Alasan'],
            rows: [
              ['Pembelian mesin baru', 'Ya', 'Memenuhi definisi aset: manfaat ekonomi masa depan, biaya dapat diukur andal'],
              ['Perbaikan rutin mesin', 'Tidak', 'Hanya mempertahankan, bukan meningkatkan manfaat ekonomi'],
              ['Overhaul yang memperpanjang umur', 'Ya', 'Meningkatkan manfaat ekonomi masa depan'],
              ['Biaya pelatihan operator', 'Tidak', 'Tidak memenuhi kriteria aset (PSAK 216)'],
              ['Penggantian komponen utama', 'Ya', 'Component accounting: derecognize komponen lama, akui baru'],
              ['Biaya pinjaman selama konstruksi', 'Ya', 'PSAK 223: wajib dikapitalisasi untuk qualifying asset'],
            ],
          },
          {
            caption: 'Langkah Konsolidasi (PSAK 110)',
            headers: ['Langkah', 'Aktivitas', 'Jurnal Eliminasi'],
            rows: [
              ['1', 'Tentukan tanggal akuisisi dan harga perolehan', '-'],
              ['2', 'Identifikasi dan ukur aset/liabilitas teridentifikasi pada fair value', 'Dr. Aset (FV adjustment) / Cr. Liabilitas'],
              ['3', 'Hitung goodwill = Cost - FV net assets x %', 'Dr. Goodwill'],
              ['4', 'Hitung NCI (fair value method atau proportionate)', 'Cr. NCI'],
              ['5', 'Eliminasi investasi vs ekuitas anak', 'Dr. Ekuitas anak / Cr. Investasi'],
              ['6', 'Eliminasi transaksi antar perusahaan', 'Dr/Cr sesuai transaksi (utang-piutang, penjualan, dividen)'],
              ['7', 'Impairment test goodwill tahunan', 'Dr. Impairment loss / Cr. Goodwill'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'kasus-audit',
    title: 'Kasus Audit dan Assurance',
    description: 'Kasus perencanaan audit, respons terhadap risiko, evaluasi bukti, dan opini audit.',
    sections: [
      {
        id: 'audit-planning',
        title: 'Kasus Perencanaan dan Pelaksanaan Audit',
        content: 'Kasus audit menguji kemampuan menilai risiko, merancang prosedur audit, dan mengevaluasi bukti untuk membentuk opini.',
        tables: [
          {
            caption: 'Skenario Audit dan Respons',
            headers: ['Skenario', 'Risiko', 'Prosedur Audit'],
            rows: [
              ['Klien baru, industri konstruksi', 'Pendapatan (% completion), going concern', 'Review kontrak, konfirmasi progress, analisis cash flow projection'],
              ['Inventory turnover menurun drastis', 'Obsolescence, overstatement persediaan', 'Observasi stock opname, NRV testing, analisis aging inventory'],
              ['Related party transactions material', 'Harga tidak wajar, self-dealing', 'Identifikasi RP (SA 550), review terms vs market, disclosure check'],
              ['Subsequent event: klien besar bangkrut', 'Piutang, going concern', 'Evaluasi adjusting vs non-adjusting event, review recoverability'],
              ['Manajemen menolak adjusting entry', 'Material misstatement, opini', 'Kuantifikasi dampak, pertimbangkan modifikasi opini (SA 705)'],
              ['IT system migration mid-year', 'Data integrity, ITGC', 'Test controls before/after migration, data migration reconciliation'],
            ],
          },
          {
            caption: 'Jenis Opini Audit (SA 700, 705, 706)',
            headers: ['Opini', 'Kondisi', 'Dampak LK'],
            rows: [
              ['Wajar Tanpa Modifikasi (WTP)', 'LK disajikan wajar dalam semua hal yang material', 'Sesuai PSAK'],
              ['WTP dengan Paragraf Penekanan', 'WTP tetapi ada hal penting yang perlu diperhatikan', 'Sesuai PSAK, tapi perlu perhatian pengguna'],
              ['Wajar Dengan Pengecualian (WDP)', 'Salah saji material tapi tidak pervasive, atau pembatasan scope', 'Kecuali hal yang dikecualikan, sesuai PSAK'],
              ['Tidak Wajar (TW)', 'Salah saji material dan pervasive', 'Tidak sesuai PSAK secara keseluruhan'],
              ['Tidak Menyatakan Pendapat (TMP)', 'Pembatasan scope material dan pervasive', 'Tidak bisa memperoleh bukti yang cukup'],
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'kasus-perpajakan',
    title: 'Kasus Perpajakan Terpadu',
    description: 'Kasus perencanaan pajak, koreksi fiskal, transfer pricing, dan sengketa pajak.',
    sections: [
      {
        id: 'tax-cases',
        title: 'Kasus Perpajakan dalam Konteks Bisnis',
        content: 'Kasus perpajakan terpadu menggabungkan aspek PPh Badan, PPh Orang Pribadi, PPN, dan perencanaan pajak dalam konteks keputusan bisnis.',
        tables: [
          {
            caption: 'Skenario Perpajakan Terpadu',
            headers: ['Skenario', 'Isu Pajak', 'Analisis'],
            rows: [
              ['Restrukturisasi grup usaha', 'Merger/akuisisi: transfer aset, goodwill pajak', 'PMK merger pajak, nilai buku vs pasar, rugi fiskal'],
              ['Ekspansi ke luar negeri', 'PE, tax treaty, CFC rules, transfer pricing', 'P3B, OECD Guidelines, dokumentasi TP'],
              ['Pembagian dividen vs gaji direksi', 'PPh 23 vs PPh 21, deductibility', 'Gaji deductible tapi PPh 21 tinggi; dividen non-deductible tapi PPh 23 lebih rendah'],
              ['Sewa vs beli aset', 'Deductibility, PPN, PPh 23', 'Sewa: seluruh biaya deductible; Beli: depresiasi, bunga pinjaman'],
              ['Transfer pricing related party', 'Arms length principle, OECD methods', 'CUP, cost plus, resale price, TNMM, profit split'],
              ['Revaluasi aset tetap pajak', 'PPh final 10%, dampak depresiasi', 'PMK revaluasi, benefit analisis: pajak vs depresiasi masa depan'],
            ],
          },
          {
            caption: 'Koreksi Fiskal Umum',
            headers: ['Jenis', 'Koreksi Positif (Tambah Penghasilan Kena Pajak)', 'Koreksi Negatif (Kurangi PKP)'],
            rows: [
              ['Pendapatan', 'Pendapatan yang belum dilaporkan', 'Pendapatan final (bunga deposito, sewa tanah)'],
              ['Biaya', 'Biaya non-deductible (sumbangan, natura, denda pajak)', '-'],
              ['Penyusutan', 'Selisih metode/masa manfaat komersial vs fiskal', 'Selisih jika fiskal > komersial'],
              ['Cadangan', 'Cadangan piutang tak tertagih (kecuali bank/asuransi)', '-'],
              ['Kompensasi kerugian', '-', 'Kerugian fiskal 5 tahun sebelumnya'],
            ],
          },
        ],
        notes: ['Tax planning harus legal (tax avoidance), bukan ilegal (tax evasion).', 'Substance over form dan business purpose test diterapkan oleh DJP.'],
      },
    ],
  },
  {
    id: 'kasus-etika-governance',
    title: 'Kasus Etika dan Governance',
    description: 'Kasus dilema etika, konflik kepentingan, whistleblowing, dan kegagalan governance.',
    sections: [
      {
        id: 'ethics-cases',
        title: 'Kasus Dilema Etika Profesional',
        content: 'Kasus etika menguji kemampuan mengidentifikasi ancaman, mengevaluasi signifikansi, dan menerapkan pencegahan yang tepat.',
        tables: [
          {
            caption: 'Template Analisis Kasus Etika',
            headers: ['Langkah', 'Aktivitas', 'Output'],
            rows: [
              ['1. Fakta', 'Identifikasi semua fakta relevan', 'Daftar fakta, timeline, pihak terlibat'],
              ['2. Isu Etika', 'Identifikasi prinsip yang terancam', 'Integritas? Objektivitas? Kerahasiaan? dll.'],
              ['3. Ancaman', 'Klasifikasi ancaman', 'Self-interest? Familiarity? Intimidation? dll.'],
              ['4. Signifikansi', 'Evaluasi seberapa serius ancaman', 'Acceptable level atau tidak?'],
              ['5. Safeguards', 'Identifikasi pencegahan yang tersedia', 'Pencegahan profesi, lingkungan kerja, spesifik'],
              ['6. Evaluasi', 'Apakah safeguards cukup menurunkan ancaman?', 'Ya: lanjut. Tidak: tolak/mundur'],
              ['7. Dokumentasi', 'Catat pertimbangan dan keputusan', 'Working paper, memo internal'],
            ],
          },
          {
            caption: 'Contoh Kasus Etika dan Analisis',
            headers: ['Kasus', 'Ancaman', 'Respons yang Tepat'],
            rows: [
              ['Partner audit menerima hadiah mahal dari klien', 'Self-interest, familiarity', 'Tolak atau kembalikan, laporkan ke ethics partner, evaluasi apakah masih bisa lanjut'],
              ['Diminta klien merevisi proyeksi agar lebih optimis', 'Intimidation, advocacy', 'Tolak jika tidak berdasar, dokumentasikan tekanan, pertimbangkan withdrawal'],
              ['Menemukan fraud kecil oleh CFO klien', 'Konflik: kerahasiaan vs kepentingan publik', 'Laporkan ke TCWG/komite audit, jika diabaikan pertimbangkan legal obligation to report'],
              ['Kakak kandung menjadi CFO klien audit', 'Familiarity, self-interest', 'Immediate family = prohibited. Withdrawal dari engagement wajib'],
              ['KAP diminta audit + konsultasi pajak PIE', 'Self-review', 'Evaluasi per regulasi: beberapa jasa non-assurance dilarang untuk PIE'],
            ],
          },
        ],
        warning: 'Jika setelah menerapkan semua safeguards yang tersedia, ancaman masih tidak pada tingkat yang dapat diterima, akuntan WAJIB menolak atau menghentikan penugasan.',
      },
    ],
  },
],
  },
  {
    subjectId: 'psak-standar',
    chapters: [
  {
    id: 'kerangka-sak',
    title: 'Kerangka Standar Akuntansi di Indonesia',
    description: 'Hierarki SAK, konvergensi IFRS, pilar standar, dan proses penyusunan standar oleh DSAK IAI.',
    sections: [
      {
        id: 'pilar-sak',
        title: 'Empat Pilar SAK Indonesia',
        content: 'Indonesia memiliki empat pilar standar akuntansi yang berlaku untuk entitas berbeda berdasarkan jenis dan ukurannya.',
        tables: [
          {
            caption: 'Empat Pilar SAK',
            headers: ['Pilar', 'Berlaku Untuk', 'Basis', 'Jumlah Standar'],
            rows: [
              ['SAK Umum (PSAK)', 'Entitas dengan akuntabilitas publik signifikan (emiten, bank, asuransi)', 'IFRS Standards', '70+ PSAK'],
              ['SAK ETAP', 'Entitas tanpa akuntabilitas publik signifikan (akan dicabut)', 'IFRS for SMEs', 'Sedang transisi ke SAK EP'],
              ['SAK EMKM', 'Entitas mikro, kecil, menengah sesuai UU UMKM', 'Simplifikasi', '1 standar tunggal'],
              ['SAK EP', 'Entitas privat tanpa akuntabilitas publik signifikan', 'IFRS for SMEs (2015)', 'Baru efektif'],
              ['SAK Syariah', 'Transaksi syariah (bank syariah, sukuk, zakat)', 'AAOIFI + lokal', 'PSAK 4xx series'],
            ],
          },
          {
            caption: 'Sistem Penomoran PSAK Baru (Efektif 2024)',
            headers: ['Nomor', 'Basis', 'Contoh'],
            rows: [
              ['PSAK 1xx', 'Adopsi IFRS Standards', 'PSAK 115 (IFRS 15), PSAK 116 (IFRS 16), PSAK 109 (IFRS 9)'],
              ['PSAK 2xx', 'Adopsi IAS Standards', 'PSAK 201 (IAS 1), PSAK 216 (IAS 16), PSAK 237 (IAS 37)'],
              ['PSAK 3xx', 'Standar lokal Indonesia', 'PSAK 301 (LK Syariah)'],
              ['PSAK 4xx', 'Standar akuntansi syariah', 'PSAK 401 (Murabahah), PSAK 402 (Musyarakah)'],
            ],
          },
        ],
        notes: ['DSAK IAI menyusun SAK, DSSA IAI menyusun SAK Syariah.', 'Indonesia full convergence dengan IFRS sejak 2012, dengan beberapa modifikasi.'],
      },
    ],
  },
  {
    id: 'psak-kunci',
    title: 'PSAK Kunci untuk Ujian CA',
    description: 'Ringkasan PSAK-PSAK yang paling sering diujikan: PSAK 201, 115, 116, 109, 216, 237.',
    sections: [
      {
        id: 'psak-201',
        title: 'PSAK 201 (IAS 1) - Penyajian Laporan Keuangan',
        content: 'PSAK 201 mengatur persyaratan umum penyajian LK, struktur, dan persyaratan minimum isi LK.',
        tables: [
          {
            caption: 'Komponen Laporan Keuangan Lengkap',
            headers: ['Komponen', 'Isi Utama'],
            rows: [
              ['Laporan Posisi Keuangan', 'Aset, liabilitas, ekuitas pada tanggal pelaporan'],
              ['Laporan Laba Rugi dan Penghasilan Komprehensif Lain', 'Pendapatan, beban, laba rugi, OCI'],
              ['Laporan Perubahan Ekuitas', 'Perubahan setiap komponen ekuitas selama periode'],
              ['Laporan Arus Kas', 'Arus kas operasi, investasi, pendanaan (PSAK 202)'],
              ['Catatan atas Laporan Keuangan', 'Kebijakan akuntansi, estimasi, informasi tambahan'],
            ],
          },
        ],
        rules: [
          'Going concern assessment wajib dilakukan manajemen',
          'Dasar akrual digunakan kecuali laporan arus kas',
          'Materialitas dan agregasi: pos material disajikan terpisah',
          'Offsetting dilarang kecuali diizinkan PSAK tertentu',
          'Informasi komparatif minimal satu periode sebelumnya',
          'Konsistensi penyajian dan klasifikasi antar periode',
        ],
      },
      {
        id: 'psak-115',
        title: 'PSAK 115 (IFRS 15) - Pendapatan dari Kontrak dengan Pelanggan',
        content: 'Model 5 langkah untuk pengakuan pendapatan yang menggantikan PSAK 23, 34, dan ISAK terkait.',
        steps: [
          'Langkah 1: Identifikasi kontrak dengan pelanggan (5 kriteria)',
          'Langkah 2: Identifikasi performance obligations (kewajiban pelaksanaan) dalam kontrak',
          'Langkah 3: Tentukan harga transaksi (termasuk variable consideration, significant financing, non-cash)',
          'Langkah 4: Alokasikan harga transaksi ke setiap performance obligation (standalone selling price)',
          'Langkah 5: Akui pendapatan saat (at a point in time) atau selama (over time) performance obligation dipenuhi',
        ],
        tables: [
          {
            caption: 'Over Time vs Point in Time',
            headers: ['Kriteria Over Time (salah satu)', 'Jika tidak memenuhi satupun'],
            rows: [
              ['Pelanggan menerima dan mengonsumsi manfaat bersamaan', 'Akui at a point in time'],
              ['Aset yang diciptakan/ditingkatkan dikendalikan pelanggan', 'Transfer of control indicators:'],
              ['Aset tidak memiliki penggunaan alternatif + hak pembayaran enforceable', '- Right to payment, title, physical possession, risks & rewards, acceptance'],
            ],
          },
        ],
      },
      {
        id: 'psak-109',
        title: 'PSAK 109 (IFRS 9) - Instrumen Keuangan',
        content: 'Klasifikasi, pengukuran, impairment, dan hedge accounting untuk instrumen keuangan.',
        tables: [
          {
            caption: 'Klasifikasi Aset Keuangan PSAK 109',
            headers: ['Klasifikasi', 'Kriteria', 'Pengukuran', 'Gain/Loss'],
            rows: [
              ['Amortised Cost (AC)', 'Business model: hold to collect + SPPI test pass', 'Amortised cost (effective interest method)', 'Laba Rugi'],
              ['FVOCI (Fair Value through OCI)', 'Business model: hold to collect AND sell + SPPI pass', 'Fair value', 'OCI (recycling ke P&L saat derecognition)'],
              ['FVTPL (Fair Value through P&L)', 'Default: model lain atau SPPI fail', 'Fair value', 'Laba Rugi'],
              ['FVOCI - Equity (election)', 'Pilihan irrevocable untuk equity instrument non-trading', 'Fair value', 'OCI (no recycling, dividen ke P&L)'],
            ],
          },
          {
            caption: 'ECL Impairment Model (3 Stages)',
            headers: ['Stage', 'Kondisi', 'ECL yang Diakui', 'Interest Revenue'],
            rows: [
              ['Stage 1', 'Performing (risiko kredit rendah atau tidak meningkat signifikan)', '12-month ECL', 'Gross carrying amount x EIR'],
              ['Stage 2', 'Underperforming (risiko kredit meningkat signifikan)', 'Lifetime ECL', 'Gross carrying amount x EIR'],
              ['Stage 3', 'Non-performing (credit-impaired)', 'Lifetime ECL', 'Amortised cost (net) x EIR'],
            ],
          },
        ],
        notes: ['SPPI = Solely Payments of Principal and Interest', 'Business model assessment dilakukan pada level portofolio, bukan per instrumen.'],
      },
      {
        id: 'psak-116',
        title: 'PSAK 116 (IFRS 16) - Sewa',
        content: 'Single lessee model: hampir semua sewa diakui on-balance sheet oleh lessee. Lessor tetap mengklasifikasikan finance/operating.',
        tables: [
          {
            caption: 'Perlakuan Akuntansi Sewa',
            headers: ['Aspek', 'Lessee', 'Lessor - Finance Lease', 'Lessor - Operating Lease'],
            rows: [
              ['Pengakuan awal', 'Right-of-use asset + Lease liability', 'Net investment in lease (receivable)', 'Tetap akui aset, pendapatan sewa straight-line'],
              ['Pengukuran ROU asset', 'Lease liability + initial direct costs + prepayments - incentives', '-', '-'],
              ['Lease liability', 'PV of lease payments (incremental borrowing rate jika implicit rate tidak diketahui)', '-', '-'],
              ['Pengukuran selanjutnya', 'Depresiasi ROU + bunga lease liability', 'Interest income (effective interest)', 'Rental income + depresiasi aset'],
              ['Exempt', 'Short-term (<=12 bulan) dan low-value assets: expense langsung', '-', '-'],
            ],
          },
        ],
        formula: 'Lease Liability = PV of future lease payments\nROU Asset = Lease Liability + Initial Direct Costs + Prepayments - Lease Incentives\n\nJurnal Awal Lessee:\nDr. Right-of-Use Asset  xxx\n    Cr. Lease Liability       xxx',
      },
    ],
  },
  {
    id: 'psak-lainnya',
    title: 'PSAK Penting Lainnya',
    description: 'PSAK 216 (Aset Tetap), 237 (Provisi), 238 (Aset Takberwujud), 212 (Pajak Penghasilan).',
    sections: [
      {
        id: 'psak-216',
        title: 'PSAK 216 (IAS 16) - Aset Tetap',
        content: 'Pengakuan, pengukuran, penyusutan, dan penghentian pengakuan aset tetap.',
        tables: [
          {
            caption: 'Ringkasan PSAK 216',
            headers: ['Aspek', 'Ketentuan'],
            rows: [
              ['Pengakuan awal', 'Biaya perolehan: harga beli + biaya langsung + estimasi biaya pembongkaran'],
              ['Pengukuran setelah pengakuan', 'Model biaya (cost - akumulasi depresiasi - impairment) ATAU Model revaluasi (fair value - depresiasi - impairment)'],
              ['Metode penyusutan', 'Garis lurus, saldo menurun, unit produksi. Review metode minimal setiap akhir tahun buku'],
              ['Component accounting', 'Komponen signifikan dengan umur berbeda didepresiasi terpisah'],
              ['Subsequent cost', 'Kapitalisasi jika meningkatkan manfaat ekonomi masa depan; otherwise expense'],
              ['Derecognition', 'Saat dilepas atau tidak ada manfaat ekonomi masa depan. Gain/loss ke P&L'],
            ],
          },
        ],
      },
      {
        id: 'psak-237',
        title: 'PSAK 237 (IAS 37) - Provisi, Liabilitas & Aset Kontinjensi',
        content: 'Kriteria pengakuan provisi dan perlakuan liabilitas serta aset kontinjensi.',
        tables: [
          {
            caption: 'Provisi vs Liabilitas Kontinjensi vs Aset Kontinjensi',
            headers: ['', 'Provisi', 'Liabilitas Kontinjensi', 'Aset Kontinjensi'],
            rows: [
              ['Definisi', 'Liabilitas yang waktu/jumlahnya tidak pasti', 'Kewajiban potensial atau kewajiban kini yang tidak memenuhi kriteria pengakuan', 'Aset potensial dari peristiwa masa lalu'],
              ['Kemungkinan outflow/inflow', 'Probable (>50%)', 'Possible (20-50%) atau tidak dapat diukur andal', 'Probable tapi belum pasti'],
              ['Perlakuan', 'AKUI di LK (Dr. Beban, Cr. Provisi)', 'UNGKAPKAN di CaLK (jangan akui)', 'UNGKAPKAN jika probable, JANGAN akui'],
              ['Remote (<20%)', '-', 'Tidak perlu diungkapkan', 'Tidak perlu diungkapkan'],
            ],
          },
        ],
        rules: [
          'Provisi diakui jika: (1) kewajiban kini dari peristiwa masa lalu, (2) probable outflow, (3) dapat diestimasi andal',
          'Pengukuran: best estimate of expenditure (expected value atau most likely outcome)',
          'Provisi di-review setiap tanggal pelaporan, disesuaikan jika ada informasi baru',
          'Provisi restrukturisasi: hanya jika ada rencana formal terperinci dan telah dikomunikasikan',
        ],
      },
    ],
  },
],
  },
  {
    subjectId: 'strategi-ujian',
    chapters: [
  {
    id: "panduan-ujian-ca-indonesia",
    title: "Panduan Ujian CA Indonesia",
    description:
      "Panduan lengkap mengenai format, struktur, persyaratan, dan sistem penilaian Ujian Chartered Accountant (CA) Indonesia yang diselenggarakan oleh Ikatan Akuntan Indonesia (IAI).",
    sections: [
      {
        id: "struktur-level-ujian",
        title: "Struktur Level Ujian CA Indonesia",
        content:
          "Ujian CA Indonesia diselenggarakan oleh Ikatan Akuntan Indonesia (IAI) sebagai satu-satunya lembaga yang berwenang memberikan sertifikasi akuntan profesional di Indonesia. Ujian ini terdiri dari beberapa level yang dirancang untuk menguji kompetensi peserta secara bertahap, mulai dari pengetahuan dasar hingga kemampuan profesional tingkat lanjut. Setiap level memiliki mata ujian yang berbeda dengan tingkat kesulitan yang meningkat. Peserta wajib menyelesaikan seluruh mata ujian pada satu level sebelum melanjutkan ke level berikutnya, meskipun tidak harus lulus semua mata ujian dalam satu periode ujian yang sama.",
        tables: [
          {
            headers: ["Level", "Jumlah Mata Ujian", "Fokus Kompetensi", "Target Peserta"],
            rows: [
              [
                "Level Fondasi",
                "4 mata ujian",
                "Pengetahuan dasar akuntansi, hukum bisnis, dan ekonomi",
                "Lulusan S1 Akuntansi / Non-Akuntansi dengan bridging",
              ],
              [
                "Level Profesional",
                "4 mata ujian",
                "Penerapan standar akuntansi, audit, perpajakan, dan manajemen keuangan",
                "Peserta yang telah lulus Level Fondasi",
              ],
              [
                "Level Lanjutan",
                "2 mata ujian + Studi Kasus Terpadu",
                "Analisis kompleks, pengambilan keputusan strategis, dan etika profesi",
                "Peserta yang telah lulus Level Profesional",
              ],
            ],
            caption: "Struktur Level Ujian CA Indonesia",
          },
        ],
        rules: [
          "Peserta harus menyelesaikan seluruh mata ujian pada level sebelumnya untuk naik ke level berikutnya.",
          "Kelulusan mata ujian berlaku selama 4 tahun sejak tanggal pengumuman hasil ujian.",
          "Jika dalam 4 tahun peserta belum menyelesaikan seluruh mata ujian dalam satu level, mata ujian yang sudah lulus dinyatakan hangus.",
          "Peserta diperbolehkan mengikuti maksimal seluruh mata ujian dalam satu periode ujian.",
        ],
        notes: [
          "IAI biasanya menyelenggarakan ujian CA dua kali dalam setahun, yaitu pada semester pertama dan semester kedua.",
          "Informasi terbaru mengenai jadwal ujian dapat diperoleh melalui situs resmi IAI di www.iaiglobal.or.id.",
        ],
      },
      {
        id: "mata-ujian-per-level",
        title: "Mata Ujian Per Level",
        content:
          "Setiap level ujian CA Indonesia memiliki mata ujian spesifik yang menguji kompetensi berbeda. Pada Level Fondasi, peserta diuji mengenai dasar-dasar akuntansi dan bisnis. Level Profesional menguji penerapan standar dan regulasi secara mendalam. Level Lanjutan berfokus pada kemampuan analitis dan pengambilan keputusan strategis dalam situasi bisnis yang kompleks. Pemahaman mendalam terhadap silabus setiap mata ujian sangat penting untuk menyusun strategi belajar yang efektif dan terarah.",
        tables: [
          {
            headers: ["Level", "Mata Ujian", "Durasi", "Format", "Passing Grade"],
            rows: [
              ["Fondasi", "Pelaporan Korporat (PKorp)", "3 jam", "Pilihan Ganda & Essay", "55%"],
              ["Fondasi", "Manajemen Stratejik dan Kepemimpinan (MSK)", "3 jam", "Pilihan Ganda & Essay", "55%"],
              ["Fondasi", "Pengelolaan dan Tata Kelola Korporat (PTK)", "3 jam", "Pilihan Ganda & Essay", "55%"],
              ["Fondasi", "Etika Profesi dan Tata Kelola Korporat (EPTK)", "2 jam", "Pilihan Ganda & Essay", "55%"],
              ["Profesional", "Akuntansi Keuangan Lanjutan (AKL)", "3,5 jam", "Essay & Kasus", "55%"],
              ["Profesional", "Audit dan Asurans (AA)", "3,5 jam", "Essay & Kasus", "55%"],
              ["Profesional", "Perpajakan (PPj)", "3,5 jam", "Essay & Kasus", "55%"],
              ["Profesional", "Manajemen Keuangan Lanjutan (MKL)", "3,5 jam", "Essay & Kasus", "55%"],
              ["Lanjutan", "Studi Kasus Terpadu - Akuntansi (SKTA)", "4 jam", "Studi Kasus Komprehensif", "55%"],
              ["Lanjutan", "Studi Kasus Terpadu - Bisnis (SKTB)", "4 jam", "Studi Kasus Komprehensif", "55%"],
            ],
            caption: "Daftar Lengkap Mata Ujian CA Indonesia",
          },
        ],
        notes: [
          "Format ujian dapat berubah sesuai kebijakan IAI. Selalu periksa panduan ujian terbaru.",
          "Beberapa mata ujian menyediakan tabel referensi atau lampiran standar yang boleh digunakan saat ujian.",
          "Proporsi pilihan ganda dan essay bervariasi tergantung mata ujian dan periode ujian.",
        ],
        warning:
          "Passing grade 55% bukan berarti ujian mudah. Soal dirancang dengan tingkat kesulitan tinggi sehingga rata-rata kelulusan nasional berkisar 30-50% per mata ujian. Persiapan yang matang sangat diperlukan.",
      },
      {
        id: "persyaratan-biaya-jadwal",
        title: "Persyaratan Peserta, Biaya, dan Jadwal Ujian",
        content:
          "Untuk mengikuti ujian CA Indonesia, peserta harus memenuhi beberapa persyaratan administratif dan akademik yang telah ditetapkan oleh IAI. Persyaratan utama meliputi latar belakang pendidikan minimal sarjana (S1) dengan jurusan yang relevan. Peserta dari latar belakang non-akuntansi dapat mengikuti program bridging terlebih dahulu sebelum mendaftar ujian. Proses pendaftaran dilakukan secara online melalui portal resmi IAI dengan melampirkan dokumen pendukung yang diperlukan. Biaya ujian bervariasi tergantung jumlah mata ujian yang diambil dan status keanggotaan IAI.",
        tables: [
          {
            headers: ["Komponen", "Keterangan"],
            rows: [
              ["Pendidikan Minimum", "Sarjana (S1) Akuntansi atau setara; Non-Akuntansi wajib bridging"],
              ["Biaya Pendaftaran Awal", "Rp 500.000 - Rp 1.000.000 (satu kali)"],
              ["Biaya Per Mata Ujian", "Rp 1.500.000 - Rp 2.500.000 per mata ujian"],
              ["Diskon Anggota IAI", "Potongan 10-20% untuk anggota aktif IAI"],
              ["Periode Pendaftaran", "Biasanya 2-3 bulan sebelum tanggal ujian"],
              ["Periode Ujian", "Semester I (Mei-Juni) dan Semester II (November-Desember)"],
              ["Pengumuman Hasil", "4-6 minggu setelah ujian dilaksanakan"],
            ],
            caption: "Informasi Pendaftaran dan Biaya Ujian CA Indonesia",
          },
        ],
        steps: [
          "Buat akun di portal ujian CA IAI melalui situs resmi www.iaiglobal.or.id.",
          "Lengkapi data pribadi dan unggah dokumen persyaratan (ijazah, transkrip, KTP, pas foto).",
          "Pilih mata ujian yang akan diikuti pada periode ujian yang tersedia.",
          "Lakukan pembayaran biaya ujian melalui metode pembayaran yang tersedia.",
          "Cetak kartu peserta ujian setelah pendaftaran dikonfirmasi.",
          "Hadir di lokasi ujian sesuai jadwal yang tertera pada kartu peserta.",
        ],
        warning:
          "Pendaftaran yang melewati batas waktu tidak akan diproses. Pastikan mendaftar jauh-jauh hari sebelum deadline untuk menghindari kendala teknis pada sistem pendaftaran online.",
      },
      {
        id: "sistem-penilaian-kelulusan",
        title: "Sistem Penilaian dan Kelulusan",
        content:
          "Sistem penilaian ujian CA Indonesia menggunakan pendekatan criterion-referenced, di mana setiap peserta dinilai berdasarkan standar kompetensi yang telah ditetapkan, bukan dibandingkan dengan peserta lain. Nilai minimum kelulusan (passing grade) adalah 55% untuk setiap mata ujian. Penilaian dilakukan oleh tim penilai yang terdiri dari akademisi dan praktisi profesional yang telah dikalibrasi untuk memastikan konsistensi penilaian. Untuk soal essay dan studi kasus, penilaian menggunakan rubrik terstruktur yang mempertimbangkan ketepatan konsep, kualitas analisis, dan kemampuan komunikasi tertulis.",
        tables: [
          {
            headers: ["Rentang Nilai", "Predikat", "Status"],
            rows: [
              ["80% - 100%", "Distinction", "Lulus dengan Pujian"],
              ["70% - 79%", "Merit", "Lulus dengan Baik"],
              ["55% - 69%", "Pass", "Lulus"],
              ["40% - 54%", "Marginal Fail", "Tidak Lulus (Mendekati)"],
              ["0% - 39%", "Fail", "Tidak Lulus"],
            ],
            caption: "Skala Penilaian Ujian CA Indonesia",
          },
        ],
        rules: [
          "Peserta dinyatakan lulus suatu mata ujian jika memperoleh nilai minimal 55%.",
          "Tidak ada sistem kompensasi antar mata ujian; setiap mata ujian harus lulus secara independen.",
          "Hasil ujian bersifat final dan tidak dapat digugat, kecuali terdapat kesalahan administratif.",
          "Peserta yang tidak lulus dapat mengulang mata ujian tersebut pada periode ujian berikutnya tanpa batas maksimal percobaan, selama masih dalam periode 4 tahun.",
          "Gelar CA diberikan setelah peserta menyelesaikan seluruh mata ujian di semua level dan memenuhi persyaratan pengalaman kerja.",
        ],
        notes: [
          "Nilai Marginal Fail (40-54%) menunjukkan bahwa peserta sudah mendekati standar kelulusan dan perlu sedikit peningkatan.",
          "IAI menyediakan feedback report bagi peserta yang tidak lulus untuk membantu identifikasi area yang perlu diperbaiki.",
          "Peserta dengan predikat Distinction berkesempatan mendapatkan penghargaan khusus dari IAI.",
        ],
      },
    ],
  },
  {
    id: "strategi-belajar-efektif",
    title: "Strategi Belajar Efektif",
    description:
      "Kumpulan teknik dan metode belajar berbasis bukti ilmiah yang terbukti efektif untuk mempersiapkan ujian profesional seperti CA Indonesia, termasuk manajemen waktu belajar dan optimalisasi daya ingat.",
    sections: [
      {
        id: "spaced-repetition-active-recall",
        title: "Teknik Spaced Repetition dan Active Recall",
        content:
          "Spaced repetition (pengulangan berjarak) adalah teknik belajar yang memanfaatkan efek spacing dalam psikologi kognitif, di mana informasi akan lebih mudah diingat jika dipelajari dalam interval waktu yang meningkat secara bertahap. Teknik ini sangat efektif untuk menghafal standar akuntansi, regulasi perpajakan, dan kerangka konseptual yang menjadi fondasi ujian CA. Active recall (pemanggilan aktif) melengkapi spaced repetition dengan memaksa otak untuk mengambil informasi dari memori tanpa bantuan, yang terbukti memperkuat jalur neural dan meningkatkan retensi jangka panjang hingga 150% dibandingkan membaca ulang pasif.",
        tables: [
          {
            headers: ["Hari ke-", "Aktivitas", "Durasi Review", "Contoh Materi"],
            rows: [
              ["1", "Pelajari materi baru", "60-90 menit", "Bab baru: PSAK 72 Pendapatan dari Kontrak Pelanggan"],
              ["2", "Review pertama", "30-45 menit", "Buat flashcard konsep kunci PSAK 72"],
              ["4", "Review kedua", "20-30 menit", "Kerjakan soal latihan terkait PSAK 72"],
              ["7", "Review ketiga", "15-20 menit", "Review flashcard + identifikasi area lemah"],
              ["14", "Review keempat", "15 menit", "Quick review + latihan soal campuran"],
              ["30", "Review kelima", "10-15 menit", "Test komprehensif bab terkait"],
              ["60", "Review keenam", "10 menit", "Simulasi soal ujian dengan topik campuran"],
            ],
            caption: "Jadwal Spaced Repetition untuk Satu Topik Ujian CA",
          },
        ],
        examples: [
          "Active Recall untuk PSAK: Tutup buku, lalu tuliskan 5 kriteria pengakuan pendapatan menurut PSAK 72 tanpa melihat catatan. Bandingkan hasilnya dengan materi asli.",
          "Flashcard Perpajakan: Sisi depan bertuliskan 'Tarif PPh Badan', sisi belakang '22% dari Penghasilan Kena Pajak (UU HPP)'. Review secara berkala dengan interval meningkat.",
          "Latihan Elaborasi: Setelah mempelajari konsep audit, jelaskan dengan kata-kata sendiri mengapa auditor perlu melakukan pengujian substantif, seolah-olah mengajarkan kepada orang awam.",
        ],
        notes: [
          "Gunakan aplikasi seperti Anki atau Quizlet untuk mengotomasi jadwal spaced repetition.",
          "Kombinasikan active recall dengan teknik elaborasi untuk pemahaman konsep yang lebih mendalam.",
          "Idealnya, mulai spaced repetition minimal 3 bulan sebelum tanggal ujian agar seluruh materi tercakup.",
        ],
        diagram:
          "Siklus Active Recall:\n[Pelajari Materi] → [Tutup Buku/Catatan] → [Coba Ingat & Tuliskan] → [Cek Jawaban] → [Identifikasi Gap] → [Pelajari Ulang Gap] → [Ulangi Siklus dengan Interval Lebih Panjang]",
      },
      {
        id: "teknik-pomodoro-mind-mapping",
        title: "Teknik Pomodoro dan Mind Mapping",
        content:
          "Teknik Pomodoro adalah metode manajemen waktu yang membagi sesi belajar menjadi interval fokus 25 menit yang diselingi istirahat pendek. Metode ini sangat efektif untuk menjaga konsentrasi saat mempelajari materi ujian CA yang padat dan kompleks. Mind mapping adalah teknik visualisasi yang membantu mengorganisasi konsep-konsep yang saling terkait dalam satu diagram terpadu. Untuk ujian CA, mind mapping sangat berguna untuk memahami hubungan antar standar akuntansi, mengaitkan regulasi perpajakan dengan praktik bisnis, dan memetakan prosedur audit secara sistematis. Kombinasi kedua teknik ini memungkinkan peserta untuk belajar secara intensif namun tetap terstruktur.",
        steps: [
          "Pilih satu topik spesifik untuk sesi Pomodoro, misalnya 'PSAK 73 - Sewa'.",
          "Atur timer selama 25 menit dan mulai belajar dengan fokus penuh tanpa gangguan.",
          "Saat timer berbunyi, tandai satu Pomodoro selesai dan ambil istirahat 5 menit.",
          "Selama istirahat, lakukan peregangan ringan atau minum air. Jangan membuka media sosial.",
          "Ulangi siklus hingga 4 Pomodoro berturut-turut.",
          "Setelah 4 Pomodoro, ambil istirahat panjang 15-30 menit.",
          "Gunakan satu Pomodoro terakhir untuk membuat mind map dari materi yang telah dipelajari.",
          "Review mind map pada sesi belajar berikutnya sebagai langkah awal sebelum melanjutkan materi baru.",
        ],
        examples: [
          "Mind Map Audit: Pusat = 'Proses Audit'. Cabang utama: Perencanaan, Pelaksanaan, Pelaporan. Sub-cabang Perencanaan: Pemahaman Entitas, Penilaian Risiko, Materialitas, Strategi Audit.",
          "Mind Map Perpajakan PPh 21: Pusat = 'PPh Pasal 21'. Cabang: Subjek Pajak, Objek Pajak, Tarif, Pengecualian, Pelaporan SPT. Setiap cabang memiliki sub-cabang detail.",
          "Pomodoro untuk Latihan Soal: Pomodoro 1-2 kerjakan soal, Pomodoro 3 review jawaban dan koreksi, Pomodoro 4 catat poin-poin yang masih lemah.",
        ],
        notes: [
          "Jika topik sangat kompleks, perpanjang durasi Pomodoro menjadi 45-50 menit dengan istirahat 10 menit.",
          "Gunakan warna berbeda pada mind map untuk membedakan level konsep atau tingkat pentingnya topik.",
          "Simpan mind map dalam format digital agar mudah di-update dan di-review kapan saja.",
        ],
        diagram:
          "Siklus Pomodoro:\n[🍅 Pomodoro 1: 25 menit fokus] → [☕ Istirahat 5 menit] → [🍅 Pomodoro 2: 25 menit fokus] → [☕ Istirahat 5 menit] → [🍅 Pomodoro 3: 25 menit fokus] → [☕ Istirahat 5 menit] → [🍅 Pomodoro 4: 25 menit fokus] → [🌴 Istirahat Panjang 15-30 menit] → [Ulangi Siklus]",
      },
      {
        id: "rencana-belajar-mingguan",
        title: "Rencana Belajar Mingguan dan Manajemen Sumber Daya",
        content:
          "Menyusun rencana belajar mingguan yang terstruktur adalah kunci keberhasilan dalam ujian CA Indonesia. Rencana yang baik harus mempertimbangkan beban kerja profesional, kapasitas belajar individu, dan jarak waktu menuju ujian. Pembagian waktu yang optimal mengalokasikan porsi lebih besar untuk mata ujian yang dirasa paling menantang, sambil tetap mempertahankan review berkala untuk mata ujian yang sudah dikuasai. Sumber belajar utama meliputi buku teks resmi IAI, standar akuntansi terkini (SAK), peraturan perpajakan yang berlaku, dan bank soal ujian tahun-tahun sebelumnya. Konsistensi dalam mengikuti rencana belajar jauh lebih penting daripada intensitas belajar yang hanya sesekali.",
        tables: [
          {
            headers: ["Hari", "Pagi (06:00-08:00)", "Sore (18:00-20:00)", "Malam (20:30-22:00)"],
            rows: [
              ["Senin", "Review flashcard (30 menit)", "Akuntansi Keuangan: Teori", "Latihan soal AKL"],
              ["Selasa", "Review flashcard (30 menit)", "Audit & Asurans: Teori", "Latihan soal AA"],
              ["Rabu", "Review flashcard (30 menit)", "Perpajakan: Teori", "Latihan soal PPj"],
              ["Kamis", "Review flashcard (30 menit)", "Manajemen Keuangan: Teori", "Latihan soal MKL"],
              ["Jumat", "Review flashcard (30 menit)", "Review materi terlemah", "Simulasi soal campuran"],
              ["Sabtu", "Simulasi ujian penuh (3-4 jam)", "Review hasil simulasi", "Istirahat / rekreasi"],
              ["Minggu", "Mind mapping & konsolidasi", "Group study / diskusi", "Persiapan materi minggu depan"],
            ],
            caption: "Template Rencana Belajar Mingguan untuk Peserta yang Bekerja (Target: 2 Mata Ujian)",
          },
          {
            headers: ["Sumber Belajar", "Kegunaan", "Prioritas"],
            rows: [
              ["Buku Teks Resmi IAI", "Materi utama sesuai silabus", "Sangat Tinggi"],
              ["SAK / PSAK Terkini", "Referensi standar yang diujikan", "Sangat Tinggi"],
              ["Bank Soal Ujian Sebelumnya", "Familiarisasi format dan tingkat kesulitan", "Tinggi"],
              ["Peraturan Perpajakan (UU, PP, PMK)", "Sumber primer regulasi pajak", "Tinggi"],
              ["Modul Review Course", "Ringkasan dan latihan terfokus", "Sedang"],
              ["Grup Diskusi / Forum Online", "Klarifikasi konsep dan berbagi tips", "Sedang"],
            ],
            caption: "Prioritas Sumber Belajar Ujian CA",
          },
        ],
        examples: [
          "Peserta yang bekerja full-time dapat mengalokasikan 2-3 jam per hari (hari kerja) dan 5-6 jam per hari (akhir pekan), total sekitar 20-25 jam per minggu.",
          "Untuk 2 mata ujian, mulailah persiapan minimal 4 bulan sebelum ujian. Untuk 3-4 mata ujian, idealnya 6 bulan sebelum ujian.",
        ],
        notes: [
          "Sesuaikan template di atas dengan ritme produktivitas pribadi. Beberapa orang lebih produktif di pagi hari, sementara yang lain di malam hari.",
          "Lakukan evaluasi mingguan setiap Minggu malam untuk menilai pencapaian dan menyesuaikan rencana minggu depan.",
          "Jangan abaikan kesehatan fisik. Tidur minimal 7 jam, olahraga rutin, dan nutrisi yang baik mendukung fungsi kognitif optimal.",
        ],
      },
      {
        id: "belajar-kelompok-vs-mandiri",
        title: "Belajar Kelompok vs Belajar Mandiri",
        content:
          "Baik belajar kelompok maupun mandiri memiliki kelebihan dan kekurangan masing-masing dalam konteks persiapan ujian CA Indonesia. Belajar mandiri memberikan fleksibilitas penuh dalam mengatur kecepatan dan fokus belajar, sangat cocok untuk tahap awal penguasaan materi. Belajar kelompok sangat bermanfaat untuk mendiskusikan studi kasus yang kompleks, berlatih menjelaskan konsep (yang memperkuat pemahaman), dan saling memotivasi. Strategi optimal adalah mengombinasikan keduanya: gunakan 70% waktu untuk belajar mandiri dan 30% untuk diskusi kelompok, terutama pada materi yang memerlukan analisis multi-perspektif seperti studi kasus audit atau perpajakan.",
        tables: [
          {
            headers: ["Aspek", "Belajar Mandiri", "Belajar Kelompok"],
            rows: [
              ["Fleksibilitas Waktu", "Sangat tinggi, bisa kapan saja", "Terbatas, perlu koordinasi jadwal"],
              ["Kecepatan Belajar", "Sesuai kemampuan individu", "Menyesuaikan kelompok"],
              ["Pemahaman Mendalam", "Baik untuk teori dan hafalan", "Sangat baik untuk studi kasus dan analisis"],
              ["Motivasi", "Bergantung pada disiplin diri", "Saling mendorong dan memotivasi"],
              ["Identifikasi Blind Spot", "Sulit mendeteksi sendiri", "Anggota lain dapat menunjukkan kelemahan"],
              ["Efisiensi Waktu", "Tinggi jika fokus terjaga", "Risiko diskusi keluar topik"],
              ["Cocok untuk Materi", "Hafalan standar, perhitungan rutin", "Studi kasus, analisis skenario, debat konsep"],
            ],
            caption: "Perbandingan Belajar Mandiri vs Belajar Kelompok",
          },
        ],
        examples: [
          "Gunakan belajar mandiri untuk menghafal tarif pajak dan mempelajari prosedur perhitungan. Kemudian gunakan sesi kelompok untuk membahas kasus perpajakan yang melibatkan banyak variabel.",
          "Bentuk kelompok kecil 3-4 orang dengan jadwal tetap seminggu sekali. Setiap anggota mempresentasikan satu topik secara bergantian untuk memperkuat pemahaman.",
        ],
        steps: [
          "Identifikasi 2-3 rekan yang memiliki target ujian dan jadwal yang serupa.",
          "Tentukan jadwal pertemuan rutin, misalnya setiap Sabtu pagi selama 3 jam.",
          "Tentukan agenda setiap pertemuan: topik diskusi, soal yang akan dibahas, dan pembagian tugas presentasi.",
          "Setiap anggota mempersiapkan materi presentasi atau rangkuman untuk topik yang ditugaskan.",
          "Gunakan 60% waktu pertemuan untuk membahas soal kasus dan 40% untuk diskusi teori.",
          "Akhiri setiap sesi dengan menyepakati target belajar mandiri untuk minggu berikutnya.",
        ],
        notes: [
          "Pilih anggota kelompok yang serius dan berkomitmen. Satu anggota yang tidak siap dapat menghambat seluruh kelompok.",
          "Gunakan platform online seperti Zoom atau Google Meet jika pertemuan tatap muka sulit dilakukan.",
        ],
      },
    ],
  },
  {
    id: "teknik-menjawab-soal",
    title: "Teknik Menjawab Soal",
    description:
      "Strategi dan teknik praktis untuk menjawab berbagai tipe soal ujian CA Indonesia, termasuk pilihan ganda, essay, dan studi kasus, beserta manajemen waktu dan cara menghindari jebakan umum.",
    sections: [
      {
        id: "strategi-pilihan-ganda",
        title: "Strategi Menjawab Soal Pilihan Ganda",
        content:
          "Soal pilihan ganda pada ujian CA Indonesia dirancang untuk menguji pemahaman konseptual dan kemampuan aplikasi, bukan sekadar hafalan. Setiap soal biasanya memiliki 4-5 opsi jawaban, di mana minimal 2 opsi merupakan distractor (pengecoh) yang dirancang mirip dengan jawaban benar. Teknik eliminasi sistematis adalah pendekatan paling efektif: mulai dengan mengidentifikasi dan mengeliminasi opsi yang jelas salah, lalu analisis opsi tersisa dengan lebih cermat. Alokasi waktu ideal adalah 1,5-2 menit per soal pilihan ganda, dengan menyisakan 10-15 menit di akhir untuk review jawaban yang masih ragu.",
        steps: [
          "Baca soal dengan cermat, identifikasi kata kunci dan apa yang sebenarnya ditanyakan.",
          "Coba jawab soal dalam pikiran sebelum melihat opsi jawaban (teknik cover-the-options).",
          "Baca semua opsi jawaban, eliminasi yang jelas salah terlebih dahulu.",
          "Untuk opsi yang tersisa, bandingkan secara langsung dan pilih yang paling tepat.",
          "Jika masih ragu setelah 2 menit, tandai soal dan lanjutkan ke soal berikutnya.",
          "Kembali ke soal yang ditandai setelah menyelesaikan seluruh soal.",
          "Jangan mengubah jawaban kecuali Anda memiliki alasan kuat. Intuisi pertama biasanya lebih akurat.",
        ],
        rules: [
          "Selalu pilih jawaban yang paling tepat, bukan yang sekadar benar. Perhatikan kata 'paling', 'utama', 'terutama' dalam soal.",
          "Waspadai opsi yang menggunakan kata absolut seperti 'selalu', 'tidak pernah', 'semua', 'tidak ada' — opsi ini biasanya salah.",
          "Jika dua opsi saling bertentangan, kemungkinan besar salah satunya adalah jawaban yang benar.",
          "Untuk soal perhitungan, lakukan kalkulasi sendiri sebelum melihat opsi agar tidak terjebak distractor numerik.",
        ],
        examples: [
          "Soal: 'Manakah yang BUKAN merupakan komponen aset hak-guna menurut PSAK 73?' — Perhatikan kata 'BUKAN'. Cari opsi yang tidak termasuk, bukan yang termasuk.",
          "Jika opsi A = 'Selalu diakui sebagai beban' dan opsi C = 'Dapat diakui sebagai aset atau beban tergantung kondisi', maka opsi C biasanya lebih tepat karena akuntansi jarang bersifat absolut.",
          "Educated guessing: Jika Anda mengeliminasi 2 dari 5 opsi, peluang menjawab benar meningkat dari 20% menjadi 33%.",
        ],
        warning:
          "Jangan terlalu lama pada satu soal pilihan ganda. Jika lebih dari 3 menit belum terjawab, tandai dan lanjutkan. Waktu yang terbuang pada satu soal bisa menyebabkan Anda tidak sempat mengerjakan soal-soal yang lebih mudah di bagian akhir.",
      },
      {
        id: "teknik-essay-studi-kasus",
        title: "Teknik Menjawab Soal Essay dan Studi Kasus",
        content:
          "Soal essay dan studi kasus merupakan komponen utama ujian CA Indonesia, terutama pada Level Profesional dan Lanjutan. Kunci keberhasilan dalam menjawab soal essay adalah struktur jawaban yang jelas dan sistematis. Metode IRAC (Issue, Rule, Application, Conclusion) sangat direkomendasikan untuk mengorganisasi jawaban, terutama pada soal kasus yang kompleks. Penilai ujian menggunakan rubrik penilaian yang memberikan poin untuk setiap elemen jawaban, sehingga jawaban yang terstruktur dengan baik akan memaksimalkan perolehan poin bahkan jika tidak semua aspek dijawab dengan sempurna.",
        tables: [
          {
            headers: ["Komponen IRAC", "Penjelasan", "Bobot Penilaian", "Contoh Penerapan"],
            rows: [
              [
                "Issue (Isu)",
                "Identifikasi masalah atau pertanyaan utama",
                "10-15%",
                "'Isu utama adalah apakah transaksi ini memenuhi kriteria sewa menurut PSAK 73.'",
              ],
              [
                "Rule (Aturan)",
                "Sebutkan standar, regulasi, atau prinsip yang berlaku",
                "25-30%",
                "'Berdasarkan PSAK 73 paragraf 9, suatu kontrak mengandung sewa jika...'",
              ],
              [
                "Application (Penerapan)",
                "Terapkan aturan pada fakta kasus",
                "35-40%",
                "'Dalam kasus ini, PT ABC memiliki hak untuk mengarahkan penggunaan aset karena...'",
              ],
              [
                "Conclusion (Kesimpulan)",
                "Berikan kesimpulan yang jelas",
                "15-20%",
                "'Oleh karena itu, kontrak ini memenuhi definisi sewa dan harus diakui sebagai...'",
              ],
            ],
            caption: "Struktur IRAC untuk Jawaban Soal Kasus Ujian CA",
          },
        ],
        steps: [
          "Baca seluruh soal kasus terlebih dahulu sebelum mulai menulis jawaban (alokasikan 10-15% dari waktu).",
          "Identifikasi dan garis bawahi kata kunci, data numerik penting, dan apa yang diminta (hitung, jelaskan, analisis, dll.).",
          "Buat outline singkat jawaban di kertas coret-coretan sebelum menulis jawaban final.",
          "Tuliskan jawaban dengan struktur IRAC: mulai dengan mengidentifikasi isu, sebutkan standar/aturan yang relevan, terapkan pada kasus, dan beri kesimpulan.",
          "Untuk soal perhitungan, tunjukkan seluruh langkah kerja. Poin parsial diberikan meskipun hasil akhir salah.",
          "Sisakan 5 menit di akhir untuk membaca ulang jawaban dan memastikan tidak ada poin yang terlewat.",
        ],
        examples: [
          "Soal meminta 'Jelaskan perlakuan akuntansi atas transaksi ini.' Jawaban ideal: (1) Identifikasi jenis transaksi, (2) Sebutkan PSAK yang relevan, (3) Jelaskan pengakuan, pengukuran, dan penyajian, (4) Buat jurnal jika diperlukan.",
          "Untuk soal 'Analisis dampak pajak dari restrukturisasi perusahaan', pastikan mencakup: PPh Badan, PPN jika ada penyerahan aset, Bea Perolehan Hak atas Tanah jika melibatkan properti, dan implikasi transfer pricing jika ada pihak afiliasi.",
        ],
        rules: [
          "Selalu sebutkan nomor standar (PSAK, ISAK) atau pasal peraturan yang dirujuk. Ini menunjukkan penguasaan materi dan memudahkan penilai memberikan poin.",
          "Jawab sesuai alokasi poin. Jika soal bernilai 10 poin, jangan menulis jawaban 2 halaman. Proporsionalkan jawaban dengan bobot soal.",
          "Gunakan format poin atau sub-heading untuk jawaban yang panjang agar mudah dibaca oleh penilai.",
          "Jangan mengosongkan jawaban. Tulis apapun yang Anda ketahui terkait topik tersebut karena poin parsial sangat berharga.",
        ],
        warning:
          "Kesalahan fatal yang sering terjadi: (1) Menulis jawaban panjang tanpa menyebutkan standar/regulasi yang relevan, (2) Langsung memberikan kesimpulan tanpa menunjukkan proses analisis, (3) Salah membaca soal sehingga menjawab pertanyaan yang tidak ditanyakan. Pastikan selalu mengecek kembali apa yang diminta soal.",
      },
      {
        id: "manajemen-waktu-ujian",
        title: "Manajemen Waktu Selama Ujian",
        content:
          "Manajemen waktu yang buruk adalah penyebab kegagalan nomor satu dalam ujian CA Indonesia. Banyak peserta yang terlalu fokus pada soal-soal awal dan kehabisan waktu untuk soal-soal di bagian akhir yang seringkali memiliki bobot poin sama atau bahkan lebih tinggi. Strategi alokasi waktu yang efektif dimulai dengan memahami struktur ujian dan bobot penilaian setiap bagian, kemudian membagi waktu secara proporsional. Disiplin waktu juga berarti berani meninggalkan soal yang terlalu sulit dan kembali lagi nanti jika masih ada waktu tersisa.",
        tables: [
          {
            headers: ["Bagian Ujian", "Bobot", "Alokasi Waktu (dari 3,5 jam)", "Jumlah Soal", "Waktu per Soal"],
            rows: [
              ["Pilihan Ganda", "30%", "60 menit", "30-40 soal", "1,5-2 menit"],
              ["Essay Pendek", "30%", "55 menit", "4-5 soal", "11-14 menit"],
              ["Studi Kasus", "40%", "75 menit", "2-3 kasus", "25-37 menit"],
              ["Review & Cek Ulang", "-", "20 menit", "-", "-"],
            ],
            caption: "Contoh Alokasi Waktu untuk Ujian Level Profesional (3,5 jam)",
          },
        ],
        steps: [
          "Saat menerima soal, luangkan 5 menit pertama untuk membaca seluruh soal dan merencanakan alokasi waktu.",
          "Mulai dari bagian yang paling Anda kuasai untuk membangun kepercayaan diri dan mengamankan poin.",
          "Pasang checkpoint waktu: cek jam setiap 30 menit untuk memastikan Anda on track.",
          "Jika suatu soal menghabiskan waktu lebih dari yang direncanakan, tandai dan lanjutkan.",
          "Sisakan 20 menit terakhir untuk review, terutama jawaban yang ditandai dan perhitungan.",
          "Pada review terakhir, prioritaskan: (1) soal yang belum dijawab, (2) soal yang ditandai ragu, (3) cek perhitungan.",
        ],
        rules: [
          "Tidak ada bonus untuk menyelesaikan ujian lebih awal. Gunakan seluruh waktu yang tersedia.",
          "Alokasi waktu harus proporsional dengan bobot poin. Soal 5 poin tidak boleh menghabiskan waktu yang sama dengan soal 20 poin.",
          "Jangan membaca ulang soal pilihan ganda yang sudah dijawab dengan yakin. Fokuskan review pada soal yang ragu saja.",
        ],
        warning:
          "Banyak peserta gagal karena menghabiskan terlalu banyak waktu pada soal studi kasus yang sulit dan tidak sempat mengerjakan soal pilihan ganda atau essay pendek yang sebenarnya lebih mudah. Ingat: lebih baik menjawab semua soal dengan cukup baik daripada menjawab sebagian soal dengan sempurna.",
      },
      {
        id: "jebakan-umum-cara-menghindari",
        title: "Jebakan Umum dan Cara Menghindarinya",
        content:
          "Soal ujian CA Indonesia dirancang oleh para ahli yang memahami kesalahan umum peserta, sehingga banyak soal mengandung jebakan yang sengaja diselipkan untuk menguji ketelitian dan pemahaman mendalam. Jebakan-jebakan ini meliputi penggunaan istilah yang mirip namun berbeda makna, angka distractor dalam soal perhitungan, perubahan regulasi terbaru yang bertentangan dengan edisi buku teks lama, dan soal yang menguji pengecualian dari aturan umum. Mengenali pola-pola jebakan ini adalah langkah pertama untuk menghindarinya.",
        tables: [
          {
            headers: ["Jenis Jebakan", "Contoh", "Cara Menghindari"],
            rows: [
              [
                "Kata kunci negatif",
                "Soal bertanya 'yang BUKAN termasuk...' tapi peserta membaca 'yang termasuk...'",
                "Garis bawahi kata negatif (BUKAN, KECUALI, TIDAK) saat membaca soal",
              ],
              [
                "Distractor numerik",
                "Opsi jawaban menggunakan angka yang muncul di tengah perhitungan (bukan hasil akhir)",
                "Selesaikan perhitungan lengkap sebelum melihat opsi jawaban",
              ],
              [
                "Standar usang vs terkini",
                "Opsi berdasarkan PSAK lama yang sudah diamandemen",
                "Selalu pelajari standar versi terbaru dan catat perubahan penting",
              ],
              [
                "Soal campuran konsep",
                "Soal mencampur isu akuntansi dan perpajakan untuk membingungkan",
                "Pisahkan isu per area dan jawab secara sistematis",
              ],
              [
                "Informasi berlebihan",
                "Soal kasus menyertakan data yang tidak relevan untuk mengecoh",
                "Identifikasi apa yang ditanyakan terlebih dahulu, lalu pilih data yang relevan",
              ],
              [
                "Pengecualian dari aturan umum",
                "Soal tentang entitas yang dikecualikan dari penerapan standar tertentu",
                "Pelajari scope dan pengecualian setiap standar, bukan hanya aturan umumnya",
              ],
            ],
            caption: "Jebakan Umum dalam Soal Ujian CA dan Strategi Menghindarinya",
          },
        ],
        examples: [
          "Jebakan: Soal menyebutkan 'Aset tetap senilai Rp 1 miliar disusutkan selama 10 tahun.' Beberapa peserta langsung menghitung penyusutan tanpa memperhatikan nilai residu yang disebutkan di paragraf lain soal.",
          "Jebakan: Soal perpajakan menyebutkan tanggal transaksi sebelum berlakunya UU HPP, sehingga tarif yang berlaku berbeda dari tarif terkini yang sering dihafalkan peserta.",
          "Jebakan: Soal audit menyebutkan bahwa klien adalah entitas publik, yang berarti standar audit tambahan (SAP) berlaku selain standar audit umum.",
        ],
        rules: [
          "Baca soal minimal dua kali sebelum menjawab, terutama untuk soal kasus yang panjang.",
          "Perhatikan tanggal, periode, dan konteks waktu dalam soal karena dapat mempengaruhi standar atau regulasi yang berlaku.",
          "Jangan berasumsi informasi yang tidak dinyatakan dalam soal. Jawab berdasarkan fakta yang diberikan.",
        ],
        warning:
          "Jebakan paling berbahaya adalah overconfidence. Peserta yang merasa yakin seringkali membaca soal secara sepintas dan melewatkan detail krusial. Perlakukan setiap soal dengan kehati-hatian yang sama, terlepas dari seberapa mudah soal tersebut tampak pada pandangan pertama.",
      },
    ],
  },
  {
    id: "review-dan-latihan",
    title: "Review & Latihan",
    description:
      "Panduan komprehensif untuk melakukan review materi, latihan soal, persiapan menjelang hari ujian, manajemen stres, dan evaluasi pasca-ujian untuk peningkatan berkelanjutan.",
    sections: [
      {
        id: "topik-kunci-per-bidang",
        title: "Topik Kunci Per Bidang Ujian",
        content:
          "Setiap mata ujian CA Indonesia memiliki topik-topik kunci yang secara konsisten muncul dalam soal ujian dari tahun ke tahun. Memahami topik-topik prioritas ini membantu peserta mengalokasikan waktu belajar secara lebih efisien tanpa mengabaikan topik lain yang juga penting. Analisis terhadap soal-soal ujian sebelumnya menunjukkan bahwa beberapa topik memiliki frekuensi kemunculan yang sangat tinggi dan bobot poin yang signifikan. Peserta direkomendasikan untuk menguasai topik-topik berikut terlebih dahulu sebelum memperluas cakupan belajar ke topik-topik sekunder.",
        tables: [
          {
            headers: ["Mata Ujian", "Topik Kunci (Prioritas Tinggi)", "Frekuensi Muncul", "Tipe Soal Umum"],
            rows: [
              [
                "Akuntansi Keuangan Lanjutan (AKL)",
                "Konsolidasi laporan keuangan, Instrumen keuangan (PSAK 71), Pendapatan (PSAK 72), Sewa (PSAK 73)",
                "Sangat tinggi",
                "Kasus perhitungan + essay",
              ],
              [
                "Audit & Asurans (AA)",
                "Penilaian risiko dan respons, Bukti audit dan prosedur, Laporan auditor, Audit grup",
                "Sangat tinggi",
                "Essay analitis + kasus",
              ],
              [
                "Perpajakan (PPj)",
                "PPh Badan (perhitungan & rekonsiliasi fiskal), PPN, Transfer pricing, Sengketa pajak",
                "Sangat tinggi",
                "Kasus perhitungan + essay",
              ],
              [
                "Manajemen Keuangan Lanjutan (MKL)",
                "Valuasi perusahaan, Manajemen risiko, Struktur modal, Merger & Akuisisi",
                "Tinggi",
                "Kasus perhitungan + analisis",
              ],
              [
                "Pelaporan Korporat (PKorp)",
                "Kerangka konseptual, PSAK terkini, Pelaporan keberlanjutan, Analisis laporan keuangan",
                "Tinggi",
                "Pilihan ganda + essay",
              ],
              [
                "Etika Profesi (EPTK)",
                "Kode etik akuntan profesional, Independensi, Konflik kepentingan, Whistleblowing",
                "Tinggi",
                "Kasus etika + essay",
              ],
            ],
            caption: "Topik Kunci Per Mata Ujian CA Indonesia",
          },
        ],
        notes: [
          "Daftar topik kunci ini disusun berdasarkan analisis umum pola ujian dan silabus IAI. Selalu periksa silabus resmi terbaru.",
          "Topik-topik sekunder tidak boleh diabaikan sepenuhnya karena soal ujian juga menguji cakupan pengetahuan yang luas.",
          "Perubahan regulasi atau standar baru yang berlaku menjelang ujian memiliki probabilitas tinggi untuk diujikan.",
        ],
        rules: [
          "Alokasikan minimal 60% waktu belajar untuk topik prioritas tinggi dan 40% untuk topik lainnya.",
          "Pastikan menguasai standar dan regulasi terbaru, terutama yang baru berlaku dalam 1-2 tahun terakhir.",
          "Review paling sedikit 3 tahun soal ujian sebelumnya untuk mengidentifikasi pola dan tren soal.",
        ],
      },
      {
        id: "kesalahan-umum-per-bidang",
        title: "Kesalahan Umum Per Bidang dan Cara Menghindarinya",
        content:
          "Memahami kesalahan yang sering dilakukan peserta ujian sebelumnya adalah cara efektif untuk menghindari jebakan serupa. Data dari IAI menunjukkan bahwa sebagian besar peserta gagal bukan karena kurang belajar, melainkan karena melakukan kesalahan teknis yang dapat dihindari. Kesalahan-kesalahan ini berkisar dari kesalahan konseptual hingga kesalahan teknis dalam perhitungan dan penyajian jawaban. Dengan menyadari kesalahan umum ini sejak awal, peserta dapat memusatkan perhatian pada area-area rawan dan mengembangkan kebiasaan yang mencegah terulangnya kesalahan tersebut.",
        tables: [
          {
            headers: ["Bidang", "Kesalahan Umum", "Koreksi / Solusi"],
            rows: [
              [
                "Akuntansi Keuangan",
                "Salah menentukan metode konsolidasi (anak vs asosiasi vs ventura bersama)",
                "Selalu identifikasi tingkat pengendalian terlebih dahulu: >50% = anak perusahaan (konsolidasi penuh), 20-50% = asosiasi (metode ekuitas), pengendalian bersama = ventura bersama.",
              ],
              [
                "Akuntansi Keuangan",
                "Tidak mengeliminasi transaksi antar-perusahaan dalam konsolidasi",
                "Buat checklist eliminasi: penjualan, piutang-utang, dividen, laba belum direalisasi atas persediaan dan aset tetap.",
              ],
              [
                "Audit",
                "Mencampur antara prosedur penilaian risiko, pengujian pengendalian, dan pengujian substantif",
                "Pahami bahwa ketiga prosedur ini memiliki tujuan berbeda: (1) identifikasi risiko, (2) uji efektivitas pengendalian, (3) deteksi salah saji material.",
              ],
              [
                "Audit",
                "Tidak menghubungkan temuan audit dengan dampaknya terhadap opini auditor",
                "Selalu simpulkan: apakah temuan ini material? Apakah pervasif? Bagaimana dampaknya terhadap opini?",
              ],
              [
                "Perpajakan",
                "Salah dalam rekonsiliasi fiskal: memasukkan koreksi positif sebagai negatif atau sebaliknya",
                "Ingat: koreksi positif = menambah penghasilan kena pajak (beban tidak diakui fiskal), koreksi negatif = mengurangi (pendapatan yang sudah dikenakan pajak final).",
              ],
              [
                "Perpajakan",
                "Lupa memperhitungkan kredit pajak (PPh 22, 23, 24, 25) dalam menghitung PPh kurang/lebih bayar",
                "Buat template perhitungan PPh Badan yang lengkap dan gunakan secara konsisten dalam setiap latihan soal.",
              ],
              [
                "Manajemen Keuangan",
                "Salah menggunakan rumus WACC karena tidak memasukkan tax shield pada cost of debt",
                "Rumus benar: WACC = (E/V × Re) + (D/V × Rd × (1-T)). Komponen (1-T) mencerminkan penghematan pajak dari beban bunga.",
              ],
              [
                "Etika Profesi",
                "Memberikan jawaban terlalu umum tanpa merujuk pada kode etik spesifik",
                "Selalu rujuk Bagian dan Seksi spesifik dari Kode Etik Akuntan Profesional IAI dalam jawaban.",
              ],
            ],
            caption: "Kesalahan Umum dan Koreksi Per Bidang Ujian CA",
          },
        ],
        examples: [
          "Kesalahan: Peserta menghitung PPh Badan menggunakan tarif 25% (tarif lama) padahal soal merujuk periode setelah berlakunya UU HPP yang menetapkan tarif 22%. Solusi: Selalu perhatikan periode soal dan gunakan tarif yang berlaku pada periode tersebut.",
          "Kesalahan: Dalam soal konsolidasi, peserta lupa menghitung goodwill karena langsung mengonsolidasikan aset dan liabilitas tanpa membandingkan harga perolehan dengan nilai wajar aset neto anak perusahaan.",
        ],
        warning:
          "Kesalahan yang paling merugikan adalah kesalahan yang terasa benar. Peserta yang terbiasa mengerjakan soal dengan cara yang salah akan mengulangi kesalahan tersebut saat ujian. Selalu verifikasi metode Anda dengan sumber resmi, bukan hanya mengandalkan kebiasaan.",
      },
      {
        id: "persiapan-hari-ujian",
        title: "Persiapan Hari Ujian dan Manajemen Stres",
        content:
          "Persiapan pada hari ujian sama pentingnya dengan persiapan belajar berbulan-bulan sebelumnya. Kondisi fisik dan mental yang optimal pada hari H dapat menjadi pembeda antara lulus dan tidak lulus, terutama pada nilai yang mendekati ambang batas kelulusan. Manajemen stres yang baik dimulai beberapa hari sebelum ujian dengan mengurangi intensitas belajar dan meningkatkan kualitas istirahat. Pada hari ujian, fokus utama adalah menjaga ketenangan, mengikuti prosedur ujian, dan menerapkan strategi yang sudah dilatih selama persiapan.",
        steps: [
          "H-7: Kurangi intensitas belajar baru. Fokus pada review materi yang sudah dipelajari dan latihan soal ringan.",
          "H-3: Lakukan simulasi ujian terakhir dengan kondisi senyata mungkin (waktu terbatas, tanpa bantuan).",
          "H-2: Review ringkasan dan mind map. Jangan mempelajari materi baru yang dapat menambah kebingungan.",
          "H-1: Istirahat penuh. Siapkan semua perlengkapan: kartu peserta, KTP, alat tulis, kalkulator (jika diizinkan), air minum, dan snack ringan.",
          "H-1 (malam): Tidur sebelum pukul 22:00. Hindari kafein berlebihan. Siapkan pakaian yang nyaman.",
          "Hari H (pagi): Bangun 2 jam sebelum keberangkatan. Sarapan dengan makanan berenergi stabil (hindari gula berlebih). Tiba di lokasi ujian 30-45 menit sebelum waktu mulai.",
          "Hari H (sebelum ujian): Jangan membaca catatan secara frantic di menit-menit terakhir. Lakukan teknik pernapasan dalam (4-7-8) untuk menenangkan diri.",
          "Hari H (saat ujian): Baca instruksi dengan teliti. Alokasikan waktu sesuai rencana. Jangan panik jika ada soal yang sulit.",
          "Hari H (setelah ujian): Jangan langsung mendiskusikan jawaban dengan peserta lain. Fokus pada ujian berikutnya jika ada.",
        ],
        tables: [
          {
            headers: ["Teknik Manajemen Stres", "Cara Melakukan", "Kapan Digunakan"],
            rows: [
              [
                "Pernapasan 4-7-8",
                "Hirup napas 4 detik, tahan 7 detik, buang 8 detik. Ulangi 3-4 kali.",
                "Sebelum ujian dimulai atau saat merasa panik di tengah ujian",
              ],
              [
                "Visualisasi Positif",
                "Bayangkan diri Anda menjawab soal dengan tenang dan percaya diri.",
                "Malam sebelum ujian dan pagi hari H",
              ],
              [
                "Grounding Technique (5-4-3-2-1)",
                "Identifikasi 5 hal yang dilihat, 4 yang disentuh, 3 yang didengar, 2 yang dicium, 1 yang dirasa.",
                "Saat kecemasan meningkat tajam",
              ],
              [
                "Progressive Muscle Relaxation",
                "Tegangkan dan rilekskan otot secara bergantian dari kaki ke kepala.",
                "H-1 malam sebelum tidur",
              ],
            ],
            caption: "Teknik Manajemen Stres untuk Peserta Ujian",
          },
        ],
        rules: [
          "Jangan belajar materi baru dalam 48 jam terakhir sebelum ujian. Risiko kebingungan lebih besar daripada manfaatnya.",
          "Hindari diskusi dengan peserta lain yang cenderung menambah kecemasan sebelum ujian.",
          "Bawa semua perlengkapan ujian cadangan (pena ekstra, kalkulator cadangan) untuk menghindari kepanikan.",
        ],
        examples: [
          "Checklist perlengkapan ujian: Kartu peserta (asli + fotokopi), KTP/Paspor, 3 pena hitam, 1 pensil, penghapus, kalkulator (non-programmable), botol air minum, snack energi, jam tangan analog.",
          "Jika merasa panik saat menemui soal sulit: berhenti sejenak, tarik napas dalam 3 kali, ingatkan diri bahwa Anda sudah bersiap, tandai soal, dan lanjutkan ke soal berikutnya.",
        ],
        notes: [
          "Kecemasan ujian dalam tingkat sedang sebenarnya bermanfaat karena meningkatkan kewaspadaan dan fokus. Yang berbahaya adalah kecemasan berlebihan yang melumpuhkan.",
          "Jika Anda memiliki kecemasan ujian yang berat, pertimbangkan untuk berkonsultasi dengan profesional kesehatan mental beberapa minggu sebelum ujian.",
        ],
        warning:
          "Jangan mengonsumsi suplemen atau obat baru pada hari ujian. Efek samping yang tidak terduga dapat mengganggu konsentrasi. Jika perlu mengonsumsi obat rutin, pastikan sudah dikonsumsi sebelumnya dan tidak menyebabkan kantuk.",
      },
      {
        id: "evaluasi-pasca-ujian",
        title: "Evaluasi Pasca-Ujian dan Peningkatan Berkelanjutan",
        content:
          "Proses belajar tidak berakhir setelah ujian selesai. Evaluasi pasca-ujian adalah langkah krusial yang sering diabaikan namun sangat berharga untuk meningkatkan performa pada ujian berikutnya. Baik lulus maupun tidak lulus, peserta harus melakukan refleksi terstruktur terhadap pengalaman ujian untuk mengidentifikasi kekuatan, kelemahan, dan area yang perlu ditingkatkan. Bagi yang perlu mengulang, evaluasi ini menjadi dasar untuk menyusun strategi belajar yang lebih efektif dan terarah di periode berikutnya.",
        steps: [
          "H+1 setelah ujian: Tuliskan refleksi segar mengenai pengalaman ujian, termasuk soal-soal yang dirasa sulit dan topik yang muncul.",
          "H+3: Identifikasi topik-topik yang tidak bisa dijawab dengan baik dan catat sebagai prioritas belajar untuk periode berikutnya.",
          "Setelah pengumuman hasil: Analisis nilai per mata ujian. Identifikasi pola — apakah kelemahan di teori, perhitungan, atau manajemen waktu?",
          "Manfaatkan feedback report dari IAI (jika tersedia) untuk memahami area mana yang perlu perbaikan.",
          "Susun rencana belajar baru yang memprioritaskan area lemah tanpa mengabaikan area yang sudah kuat.",
          "Jika lulus seluruh mata ujian dalam satu level, segera mulai persiapan untuk level berikutnya agar momentum belajar tidak hilang.",
        ],
        tables: [
          {
            headers: ["Aspek Evaluasi", "Pertanyaan Refleksi", "Tindakan Perbaikan"],
            rows: [
              [
                "Penguasaan Materi",
                "Topik mana yang saya tidak bisa jawab? Apakah ada standar baru yang saya lewatkan?",
                "Buat daftar topik lemah dan alokasikan waktu ekstra untuk mempelajarinya",
              ],
              [
                "Manajemen Waktu",
                "Apakah saya sempat menyelesaikan semua soal? Bagian mana yang menyita terlalu banyak waktu?",
                "Latih lebih banyak simulasi ujian dengan waktu terbatas",
              ],
              [
                "Teknik Menjawab",
                "Apakah jawaban essay saya terstruktur? Apakah saya menyebutkan standar yang relevan?",
                "Latih teknik IRAC dan berlatih menuliskan jawaban terstruktur",
              ],
              [
                "Kondisi Mental",
                "Apakah saya panik? Apakah kecemasan mempengaruhi performa?",
                "Latih teknik manajemen stres dan lakukan lebih banyak simulasi ujian",
              ],
              [
                "Strategi Belajar",
                "Apakah metode belajar saya efektif? Apakah sumber belajar sudah tepat?",
                "Evaluasi dan sesuaikan metode: tambah latihan soal, ganti sumber yang kurang relevan",
              ],
            ],
            caption: "Template Evaluasi Pasca-Ujian",
          },
        ],
        examples: [
          "Peserta A tidak lulus AA dengan nilai 52%. Setelah evaluasi, ia menemukan bahwa kelemahannya ada pada soal kasus yang memerlukan analisis risiko audit. Ia kemudian memfokuskan 50% waktu belajar periode berikutnya pada topik tersebut dan berhasil lulus dengan nilai 67%.",
          "Peserta B lulus 3 dari 4 mata ujian Level Profesional. Ia segera mendaftar ulang untuk mata ujian yang belum lulus sambil memulai persiapan awal untuk Level Lanjutan.",
        ],
        notes: [
          "Kegagalan dalam ujian CA adalah hal yang umum dan bukan akhir dari segalanya. Rata-rata peserta membutuhkan 2-3 kali percobaan untuk lulus semua mata ujian.",
          "Dokumentasikan pengalaman dan strategi Anda. Catatan ini sangat berharga jika Anda perlu mengulang ujian.",
          "Pertimbangkan untuk bergabung dengan komunitas atau forum peserta ujian CA untuk berbagi pengalaman dan mendapatkan dukungan moral.",
          "Ingat bahwa setiap kali mengulang ujian, Anda memiliki keuntungan berupa pengalaman dan pemahaman yang lebih baik tentang format dan standar ujian.",
        ],
        warning:
          "Jangan menunggu terlalu lama untuk memulai persiapan ulang jika tidak lulus. Kelulusan mata ujian memiliki masa berlaku 4 tahun. Semakin cepat Anda mengulang, semakin segar materi di ingatan dan semakin besar peluang lulus pada percobaan berikutnya.",
      },
    ],
  },
],
  },
];
