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
  // =============================================
  // MANAJEMEN KEUANGAN
  // =============================================
  {
    subjectId: 'manajemen-keuangan',
    chapters: [
      {
        id: 'tvm',
        title: 'Time Value of Money (Nilai Waktu Uang)',
        description: 'Konsep dasar keuangan bahwa uang yang dimiliki sekarang bernilai lebih tinggi dari jumlah yang sama di masa depan karena potensi kapasitas penghasilannya (earning capacity).',
        sections: [
          {
            id: 'tvm-konsep',
            title: 'Rumus Present Value & Future Value',
            content: 'Nilai waktu uang adalah fondasi dari seluruh keputusan keuangan. Konsep ini digunakan dalam penilaian investasi, obligasi, sewa, dan hampir setiap instrumen keuangan.',
            formula: 'Future Value (FV):\n  FV = PV × (1 + r)^n\n\nPresent Value (PV):\n  PV = FV ÷ (1 + r)^n\n\nFV Anuitas Biasa:\n  FVA = PMT × [((1 + r)^n − 1) ÷ r]\n\nPV Anuitas Biasa:\n  PVA = PMT × [(1 − (1 + r)^−n) ÷ r]\n\nPV Perpetuitas:\n  PV = PMT ÷ r\n\nPV Perpetuitas Bertumbuh:\n  PV = PMT ÷ (r − g)\n\nKeterangan:\n  PV = Present Value (Nilai Kini)\n  FV = Future Value (Nilai Masa Depan)\n  PMT = Pembayaran periodik\n  r = tingkat bunga per periode\n  n = jumlah periode\n  g = tingkat pertumbuhan',
            tables: [
              {
                caption: 'Perbandingan Anuitas Biasa vs Anuitas Jatuh Tempo',
                headers: ['Aspek', 'Anuitas Biasa (Ordinary Annuity)', 'Anuitas Jatuh Tempo (Annuity Due)'],
                rows: [
                  ['Waktu pembayaran', 'Akhir setiap periode', 'Awal setiap periode'],
                  ['PV relatif', 'Lebih kecil', 'Lebih besar (× (1+r))'],
                  ['FV relatif', 'Lebih kecil', 'Lebih besar (× (1+r))'],
                  ['Contoh', 'Cicilan KPR, kupon obligasi', 'Pembayaran sewa di muka, premi asuransi'],
                ],
              },
            ],
            examples: [
              'PV: Anda akan menerima Rp100 juta dalam 5 tahun, bunga 10%. PV = 100 ÷ (1,10)^5 = Rp62,09 juta.',
              'FV: Anda menabung Rp50 juta sekarang, bunga 8%, 10 tahun. FV = 50 × (1,08)^10 = Rp107,95 juta.',
              'PVA: Cicilan Rp10 juta/tahun selama 5 tahun, bunga 12%. PVA = 10 × [(1−(1,12)^−5) ÷ 0,12] = Rp36,05 juta.',
            ],
          },
        ],
      },
      {
        id: 'capital-budgeting',
        title: 'Capital Budgeting (Penganggaran Modal)',
        description: 'Capital budgeting adalah proses evaluasi dan pemilihan investasi jangka panjang yang konsisten dengan tujuan perusahaan memaksimalkan nilai pemegang saham.',
        sections: [
          {
            id: 'cb-metode',
            title: 'Metode Evaluasi Investasi',
            content: 'Terdapat beberapa metode untuk mengevaluasi kelayakan proyek investasi, masing-masing dengan kelebihan dan kekurangan.',
            tables: [
              {
                caption: 'Perbandingan Metode Capital Budgeting',
                headers: ['Metode', 'Rumus', 'Kriteria Terima', 'Kelebihan', 'Kekurangan'],
                rows: [
                  ['NPV (Net Present Value)', 'Σ [CFt ÷ (1+r)^t] − Initial Investment', 'NPV > 0', 'Mempertimbangkan TVM; mengukur nilai tambah absolut', 'Sulit membandingkan proyek dengan skala berbeda'],
                  ['IRR (Internal Rate of Return)', 'Discount rate yang membuat NPV = 0', 'IRR > Cost of Capital', 'Mudah dipahami (persentase); mempertimbangkan TVM', 'Bisa ada multiple IRR; asumsi reinvestasi pada IRR'],
                  ['Payback Period', 'Waktu hingga kumulatif CF = Initial Investment', 'PP < target', 'Sederhana; mengukur likuiditas/risiko', 'Mengabaikan TVM; mengabaikan CF setelah payback'],
                  ['Discounted Payback', 'Waktu hingga kumulatif PV(CF) = Initial Investment', 'DPP < target', 'Mempertimbangkan TVM', 'Mengabaikan CF setelah payback'],
                  ['Profitability Index', 'PV arus kas masuk ÷ PV arus kas keluar', 'PI > 1', 'Berguna untuk capital rationing', 'Bisa konflik dengan NPV untuk proyek mutually exclusive'],
                ],
              },
            ],
            formula: 'NPV = −I₀ + CF₁/(1+r)¹ + CF₂/(1+r)² + ... + CFn/(1+r)ⁿ\n\nProfitability Index = PV Arus Kas Masuk ÷ Investasi Awal\n\nPayback Period = Tahun sebelum penuh + (Sisa investasi ÷ CF tahun penuh)',
            examples: [
              'Proyek A: Investasi Rp500 juta, CF tahunan Rp150 juta selama 5 tahun, WACC 10%. NPV = 150 × [(1−(1,10)^−5)÷0,10] − 500 = 568,62 − 500 = Rp68,62 juta → Terima (NPV > 0).',
            ],
          },
        ],
      },
      {
        id: 'wacc',
        title: 'Cost of Capital (Biaya Modal)',
        description: 'Biaya modal adalah tingkat pengembalian minimum yang diharapkan oleh penyedia modal (utang dan ekuitas) sebagai kompensasi atas risiko investasi.',
        sections: [
          {
            id: 'wacc-rumus',
            title: 'Weighted Average Cost of Capital (WACC)',
            content: 'WACC adalah rata-rata tertimbang dari biaya seluruh sumber pendanaan (utang dan ekuitas) yang digunakan perusahaan, dengan bobot berdasarkan proporsi masing-masing dalam struktur modal.',
            formula: 'WACC = (E/V × Re) + (D/V × Rd × (1 − T))\n\nKeterangan:\n  E = Nilai pasar ekuitas\n  D = Nilai pasar utang\n  V = E + D (total nilai pasar perusahaan)\n  Re = Cost of equity (biaya ekuitas)\n  Rd = Cost of debt (biaya utang)\n  T = Tarif pajak efektif\n\nCost of Equity (CAPM):\n  Re = Rf + β × (Rm − Rf)\n\nKeterangan:\n  Rf = Risk-free rate (suku bunga bebas risiko)\n  β = Beta saham (ukuran risiko sistematis)\n  Rm = Expected market return\n  (Rm − Rf) = Market risk premium',
            tables: [
              {
                caption: 'Komponen WACC',
                headers: ['Komponen', 'Metode Perhitungan', 'Catatan'],
                rows: [
                  ['Cost of Debt (Rd)', 'YTM obligasi yang beredar; atau suku bunga pinjaman efektif', 'Gunakan after-tax cost: Rd × (1−T) karena bunga tax-deductible'],
                  ['Cost of Equity (Re)', 'CAPM: Rf + β(Rm−Rf); DDM: D₁/P₀ + g', 'Tidak ada tax shield untuk ekuitas'],
                  ['Cost of Preferred Stock', 'Dp ÷ Pp (dividen preferensi ÷ harga pasar)', 'Dividen preferensi biasanya tidak tax-deductible'],
                ],
              },
            ],
            examples: [
              'Struktur modal: 60% ekuitas, 40% utang. Re = 14%, Rd = 8%, Pajak = 22%. WACC = (0,60 × 14%) + (0,40 × 8% × (1−0,22)) = 8,4% + 2,496% = 10,90%.',
            ],
          },
        ],
      },
    ],
  },
  // =============================================
  // MANAJEMEN PERPAJAKAN
  // =============================================
  {
    subjectId: 'manajemen-perpajakan',
    chapters: [
      {
        id: 'pph-op',
        title: 'PPh Orang Pribadi',
        description: 'Pajak Penghasilan (PPh) Orang Pribadi diatur dalam UU Nomor 7 Tahun 2021 tentang Harmonisasi Peraturan Perpajakan (UU HPP). Tarif progresif berlaku berdasarkan lapisan penghasilan kena pajak.',
        sections: [
          {
            id: 'pph-op-tarif',
            title: 'Tarif PPh Orang Pribadi (UU HPP)',
            content: 'Tarif PPh Orang Pribadi bersifat progresif, artinya semakin tinggi penghasilan, semakin tinggi tarif pajaknya.',
            tables: [
              {
                caption: 'Tarif PPh Orang Pribadi — UU HPP (berlaku sejak 2022)',
                headers: ['Lapisan', 'Penghasilan Kena Pajak (PKP)', 'Tarif'],
                rows: [
                  ['I', 'Sampai dengan Rp60 juta', '5%'],
                  ['II', 'Di atas Rp60 juta s.d. Rp250 juta', '15%'],
                  ['III', 'Di atas Rp250 juta s.d. Rp500 juta', '25%'],
                  ['IV', 'Di atas Rp500 juta s.d. Rp5 miliar', '30%'],
                  ['V', 'Di atas Rp5 miliar', '35%'],
                ],
              },
              {
                caption: 'PTKP (Penghasilan Tidak Kena Pajak) — Per Tahun',
                headers: ['Status', 'PTKP (Rp)'],
                rows: [
                  ['Wajib Pajak sendiri (TK/0)', '54.000.000'],
                  ['Tambahan WP kawin', '4.500.000'],
                  ['Tambahan per tanggungan (maks 3)', '4.500.000'],
                  ['WP kawin + 3 tanggungan (K/3)', '72.000.000'],
                  ['Penghasilan istri digabung (K/I/3)', '126.000.000'],
                ],
              },
            ],
            steps: [
              'Hitung penghasilan bruto (gaji, honorarium, penghasilan usaha, dll).',
              'Kurangi biaya jabatan (5% × penghasilan bruto, maks Rp500.000/bulan atau Rp6.000.000/tahun) untuk karyawan.',
              'Kurangi iuran pensiun/THT yang dibayar karyawan.',
              'Kurangi PTKP sesuai status perkawinan dan tanggungan.',
              'Hasilnya = Penghasilan Kena Pajak (PKP).',
              'Terapkan tarif progresif pada PKP.',
            ],
            examples: [
              'Tn. Ahmad (K/2): Gaji Rp300 juta/tahun. Biaya jabatan = 5% × 300 juta = Rp15 juta (maks Rp6 juta). Iuran pensiun = Rp3 juta. PTKP (K/2) = 54 + 4,5 + 9 = Rp67,5 juta. PKP = 300 − 6 − 3 − 67,5 = Rp223,5 juta. PPh = 5% × 60 + 15% × 163,5 = 3 + 24,525 = Rp27,525 juta.',
            ],
          },
        ],
      },
      {
        id: 'pph-badan',
        title: 'PPh Badan',
        description: 'PPh Badan dikenakan atas penghasilan yang diterima atau diperoleh badan usaha dalam satu tahun pajak.',
        sections: [
          {
            id: 'pph-badan-tarif',
            title: 'Tarif dan Fasilitas PPh Badan',
            content: 'Tarif PPh Badan di Indonesia dan fasilitas pengurangan tarif.',
            tables: [
              {
                caption: 'Tarif PPh Badan',
                headers: ['Kategori', 'Tarif', 'Ketentuan'],
                rows: [
                  ['Tarif umum', '22%', 'Berlaku untuk semua wajib pajak badan'],
                  ['Perusahaan Tbk (listed)', '19% (22% − 3%)', 'Syarat: minimal 40% saham diperdagangkan di BEI, dimiliki ≥ 300 pihak, memenuhi ketentuan PP'],
                  ['UMKM (PP 55/2022)', '0,5% × omzet bruto', 'Omzet ≤ Rp4,8 miliar/tahun; berlaku 7 tahun (PT), 4 tahun (CV/Firma/Koperasi), 3 tahun (OP)'],
                  ['Fasilitas Pasal 31E', '50% × 22% = 11%', 'Untuk bagian PKP dari peredaran bruto s.d. Rp4,8 miliar dari total omzet s.d. Rp50 miliar'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'ppn',
        title: 'Pajak Pertambahan Nilai (PPN)',
        description: 'PPN adalah pajak tidak langsung yang dikenakan atas penyerahan Barang Kena Pajak (BKP) dan/atau Jasa Kena Pajak (JKP) di dalam daerah pabean.',
        sections: [
          {
            id: 'ppn-mekanisme',
            title: 'Mekanisme PPN',
            content: 'PPN menggunakan mekanisme pajak masukan (input tax) dan pajak keluaran (output tax). Perbedaan antara keduanya menentukan PPN yang harus disetor atau dikompensasi.',
            tables: [
              {
                caption: 'Tarif PPN',
                headers: ['Jenis', 'Tarif', 'Keterangan'],
                rows: [
                  ['Tarif umum', '11% (mulai April 2022)', 'Berlaku untuk sebagian besar BKP dan JKP'],
                  ['Tarif umum (rencana)', '12% (mulai Januari 2025)', 'Sesuai UU HPP, hanya untuk barang/jasa mewah'],
                  ['Ekspor BKP berwujud', '0%', 'PPN tetap terutang tetapi tarif 0%'],
                  ['Ekspor BKP tidak berwujud & JKP', '0%', 'Syarat tertentu harus dipenuhi'],
                ],
              },
            ],
            formula: 'PPN Terutang = Tarif × Dasar Pengenaan Pajak (DPP)\n\nPPN yang harus disetor = Pajak Keluaran − Pajak Masukan\n\nJika Pajak Masukan > Pajak Keluaran → Lebih Bayar (dapat direstitusi atau dikompensasi)',
            steps: [
              'PKP menerbitkan Faktur Pajak saat menyerahkan BKP/JKP → memungut PPN (Pajak Keluaran).',
              'PKP menerima Faktur Pajak saat membeli BKP/JKP → membayar PPN (Pajak Masukan).',
              'Pada akhir masa pajak (bulanan), hitung: Pajak Keluaran − Pajak Masukan.',
              'Jika Pajak Keluaran > Pajak Masukan → Kurang Bayar → Setor ke kas negara.',
              'Jika Pajak Masukan > Pajak Keluaran → Lebih Bayar → Kompensasi ke masa berikutnya atau restitusi.',
            ],
          },
        ],
      },
      {
        id: 'withholding',
        title: 'Withholding Taxes (Pemotongan/Pemungutan Pajak)',
        description: 'Indonesia menerapkan sistem withholding tax di mana pihak yang membayar penghasilan wajib memotong/memungut pajak dan menyetorkannya ke kas negara.',
        sections: [
          {
            id: 'wh-perbandingan',
            title: 'Perbandingan PPh Potong/Pungut',
            content: 'Berikut perbandingan berbagai jenis PPh pemotongan dan pemungutan yang sering diuji.',
            tables: [
              {
                caption: 'Perbandingan PPh Potong/Pungut',
                headers: ['Jenis PPh', 'Objek', 'Tarif Utama', 'Sifat'],
                rows: [
                  ['PPh 21', 'Penghasilan sehubungan dengan pekerjaan (gaji, honorarium, dll)', 'Tarif progresif (5%-35%) × PKP', 'Tidak final (pada umumnya)'],
                  ['PPh 22', 'Pembelian barang oleh bendahara/BUMN, impor', '1,5% (bendahara); 2,5% (importir API); 7,5% (non-API)', 'Tidak final (dapat dikreditkan)'],
                  ['PPh 23', 'Dividen, bunga, royalti, sewa, jasa tertentu', '15% (dividen, bunga, royalti); 2% (sewa, jasa)', 'Tidak final'],
                  ['PPh 26', 'Penghasilan WP luar negeri dari Indonesia', '20% atau sesuai P3B (tax treaty)', 'Final'],
                  ['PPh 4(2)', 'Penghasilan tertentu (sewa tanah/bangunan, jasa konstruksi, bunga deposito, dll)', 'Bervariasi (10% sewa tanah/bangunan; 2-4% konstruksi)', 'Final'],
                  ['PPh 15', 'Penghasilan tertentu (pelayaran, penerbangan, asuransi LN)', 'Bervariasi sesuai jenis usaha', 'Final/Tidak final'],
                ],
              },
            ],
            warning: 'PPh yang bersifat FINAL tidak dapat dikreditkan terhadap PPh terutang di SPT Tahunan. Penghasilan yang dipotong PPh final juga tidak digabung dengan penghasilan lain dalam perhitungan PPh terutang.',
          },
        ],
      },
    ],
  },
  // =============================================
  // AUDIT & ASURANS
  // =============================================
  {
    subjectId: 'audit-asurans',
    chapters: [
      {
        id: 'proses-audit',
        title: 'Proses & Tahapan Audit',
        description: 'Audit laporan keuangan dilaksanakan mengikuti Standar Audit (SA) yang diadopsi dari International Standards on Auditing (ISA). Proses audit terdiri dari beberapa tahapan yang terstruktur.',
        sections: [
          {
            id: 'pa-tahapan',
            title: 'Tahapan Audit Laporan Keuangan',
            content: 'Audit dilaksanakan secara sistematis melalui tahapan yang saling terkait.',
            steps: [
              'Pra-Perikatan (Pre-Engagement) — Evaluasi penerimaan klien, penilaian independensi, surat perikatan (engagement letter), pemahaman bisnis dan industri klien.',
              'Perencanaan Audit — Tentukan strategi audit keseluruhan, rencana audit terperinci, materialitas, identifikasi risiko, pemahaman pengendalian internal.',
              'Penilaian Risiko — Identifikasi dan nilai risiko salah saji material pada level laporan keuangan dan level asersi. Lakukan prosedur penilaian risiko (inquiry, observasi, inspeksi, prosedur analitis).',
              'Respons terhadap Risiko — Rancang dan laksanakan prosedur audit lanjutan: uji pengendalian (test of controls) dan prosedur substantif (substantive procedures).',
              'Evaluasi Bukti Audit — Evaluasi kecukupan dan ketepatan bukti audit yang diperoleh. Pertimbangkan dampak salah saji yang ditemukan.',
              'Pelaporan — Bentuk opini audit, terbitkan laporan auditor independen.',
            ],
          },
          {
            id: 'pa-materialitas',
            title: 'Materialitas',
            content: 'Materialitas adalah konsep fundamental dalam audit. Salah saji dianggap material jika secara individual atau agregat dapat memengaruhi keputusan ekonomi pengguna laporan keuangan.',
            tables: [
              {
                caption: 'Benchmark Penentuan Materialitas',
                headers: ['Benchmark', 'Persentase Umum', 'Cocok Untuk'],
                rows: [
                  ['Laba sebelum pajak', '5% – 10%', 'Perusahaan berorientasi profit yang stabil'],
                  ['Total pendapatan', '0,5% – 1%', 'Perusahaan dengan laba tidak stabil/fluktuatif'],
                  ['Total aset', '0,5% – 1%', 'Perusahaan holding, perusahaan aset-intensif'],
                  ['Total ekuitas', '1% – 2%', 'Perusahaan yang fokus pada posisi keuangan'],
                  ['Total beban', '0,5% – 1%', 'Entitas nirlaba, organisasi pemerintah'],
                ],
              },
            ],
            notes: [
              'Performance materiality (materialitas pelaksanaan) biasanya ditetapkan 50%-75% dari overall materiality.',
              'Threshold for trivial (ambang batas jelas tidak penting) biasanya 3%-5% dari overall materiality.',
            ],
          },
        ],
      },
      {
        id: 'opini-audit',
        title: 'Opini Audit',
        description: 'Opini audit merupakan pernyataan profesional auditor atas kewajaran laporan keuangan berdasarkan bukti audit yang diperoleh.',
        sections: [
          {
            id: 'oa-jenis',
            title: 'Jenis-Jenis Opini Audit',
            content: 'Terdapat empat jenis opini yang dapat diberikan auditor atas laporan keuangan.',
            tables: [
              {
                caption: 'Jenis Opini Audit',
                headers: ['Opini', 'Kondisi', 'Paragraf Tambahan', 'Dampak'],
                rows: [
                  ['Wajar Tanpa Modifikasi (Unmodified)', 'Laporan keuangan disajikan secara wajar, dalam semua hal yang material, sesuai kerangka pelaporan keuangan yang berlaku', 'Tidak ada (kecuali penekanan suatu hal)', 'Terbaik — meningkatkan kepercayaan stakeholder'],
                  ['Wajar Dengan Pengecualian (Qualified)', 'Terdapat salah saji material tetapi tidak pervasif, ATAU tidak dapat memperoleh bukti audit yang cukup dan tepat tetapi dampaknya tidak pervasif', 'Paragraf "Basis Opini Wajar Dengan Pengecualian"', 'Ada masalah terbatas — pengguna perlu memperhatikan pengecualian'],
                  ['Tidak Wajar (Adverse)', 'Salah saji material dan pervasif', 'Paragraf "Basis Opini Tidak Wajar"', 'Terburuk — laporan keuangan tidak dapat diandalkan'],
                  ['Tidak Menyatakan Pendapat (Disclaimer)', 'Tidak dapat memperoleh bukti audit yang cukup dan tepat, dampaknya pervasif', 'Paragraf "Basis Tidak Menyatakan Pendapat"', 'Auditor tidak bisa memverifikasi — ketidakpastian sangat tinggi'],
                ],
              },
            ],
            diagram: '                          Salah Saji Material?\n                         ┌────────┴────────┐\n                        Ya                Tidak\n                         │                  │\n                    Pervasif?          Unmodified\n                   ┌────┴────┐          Opinion\n                  Ya        Tidak\n                   │          │\n              Adverse     Qualified\n              Opinion     Opinion\n\n                    Tidak Dapat Memperoleh\n                    Bukti yang Cukup?\n                   ┌────────┴────────┐\n                  Ya                Tidak\n                   │                  │\n              Pervasif?          Unmodified\n             ┌────┴────┐\n            Ya        Tidak\n             │          │\n         Disclaimer  Qualified\n          Opinion    Opinion',
          },
        ],
      },
      {
        id: 'pengendalian-internal',
        title: 'Pengendalian Internal (COSO Framework)',
        description: 'Framework COSO (Committee of Sponsoring Organizations of the Treadway Commission) adalah kerangka pengendalian internal yang paling banyak digunakan secara global.',
        sections: [
          {
            id: 'pi-komponen',
            title: '5 Komponen Pengendalian Internal COSO',
            content: 'COSO 2013 (Internal Control — Integrated Framework) mengidentifikasi lima komponen pengendalian internal yang saling terkait.',
            tables: [
              {
                caption: '5 Komponen COSO dengan 17 Prinsip',
                headers: ['Komponen', 'Deskripsi', 'Jumlah Prinsip', 'Contoh'],
                rows: [
                  ['Control Environment (Lingkungan Pengendalian)', 'Fondasi — tone at the top, integritas, kompetensi, tata kelola', '5 prinsip', 'Kode etik, struktur organisasi, komite audit independen'],
                  ['Risk Assessment (Penilaian Risiko)', 'Identifikasi dan analisis risiko yang relevan terhadap pencapaian tujuan', '4 prinsip', 'Identifikasi risiko kecurangan, evaluasi perubahan signifikan'],
                  ['Control Activities (Aktivitas Pengendalian)', 'Kebijakan dan prosedur untuk mengurangi risiko ke tingkat yang dapat diterima', '3 prinsip', 'Otorisasi, rekonsiliasi, segregation of duties, IT controls'],
                  ['Information & Communication (Informasi & Komunikasi)', 'Identifikasi, penangkapan, dan pertukaran informasi yang relevan tepat waktu', '3 prinsip', 'Sistem informasi akuntansi, pelaporan internal, whistleblowing'],
                  ['Monitoring Activities (Aktivitas Pemantauan)', 'Evaluasi berkelanjutan atas kualitas pengendalian internal', '2 prinsip', 'Audit internal, evaluasi terpisah, tindak lanjut temuan'],
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // =============================================
  // AKUNTANSI MANAJEMEN
  // =============================================
  {
    subjectId: 'akuntansi-manajemen',
    chapters: [
      {
        id: 'klasifikasi-biaya',
        title: 'Klasifikasi Biaya',
        description: 'Biaya dapat diklasifikasikan dengan berbagai cara tergantung pada tujuan penggunaannya. Pemahaman klasifikasi biaya merupakan fondasi akuntansi manajemen.',
        sections: [
          {
            id: 'kb-jenis',
            title: 'Klasifikasi Biaya Berdasarkan Berbagai Kriteria',
            content: 'Biaya diklasifikasikan berdasarkan perilaku, keterlacakan, fungsi, dan relevansi untuk pengambilan keputusan.',
            tables: [
              {
                caption: 'Klasifikasi Biaya',
                headers: ['Kriteria', 'Jenis', 'Definisi', 'Contoh'],
                rows: [
                  ['Perilaku', 'Biaya Variabel', 'Berubah secara proporsional dengan volume aktivitas', 'Bahan baku langsung, tenaga kerja langsung (per unit)'],
                  ['Perilaku', 'Biaya Tetap', 'Tetap konstan dalam rentang relevan terlepas volume', 'Sewa gedung, gaji manajer, penyusutan garis lurus'],
                  ['Perilaku', 'Biaya Campuran (Mixed)', 'Memiliki komponen tetap dan variabel', 'Biaya listrik (abonemen + pemakaian), biaya telepon'],
                  ['Keterlacakan', 'Biaya Langsung', 'Dapat ditelusuri langsung ke objek biaya', 'Bahan baku untuk produk A, gaji operator mesin A'],
                  ['Keterlacakan', 'Biaya Tidak Langsung', 'Tidak dapat ditelusuri langsung, harus dialokasikan', 'Overhead pabrik, gaji pengawas, penyusutan mesin bersama'],
                  ['Fungsi', 'Biaya Produksi', 'Bahan baku langsung + TKL + Overhead pabrik', 'Seluruh biaya manufaktur'],
                  ['Fungsi', 'Biaya Non-Produksi', 'Biaya penjualan + administrasi', 'Iklan, gaji bagian keuangan, komisi penjualan'],
                  ['Relevansi', 'Biaya Relevan', 'Berbeda di antara alternatif keputusan & terjadi di masa depan', 'Opportunity cost, avoidable cost'],
                  ['Relevansi', 'Biaya Tidak Relevan', 'Sama di semua alternatif atau sudah terjadi', 'Sunk cost (biaya tenggelam)'],
                ],
              },
            ],
            warning: 'Sunk cost (biaya tenggelam) TIDAK RELEVAN untuk pengambilan keputusan. Jangan memasukkan sunk cost dalam analisis keputusan manajerial!',
          },
        ],
      },
      {
        id: 'cvp',
        title: 'Cost-Volume-Profit (CVP) Analysis',
        description: 'Analisis CVP mempelajari hubungan antara perubahan biaya, volume penjualan, dan laba. Alat ini membantu manajemen dalam perencanaan laba dan pengambilan keputusan.',
        sections: [
          {
            id: 'cvp-rumus',
            title: 'Rumus CVP & Break-Even',
            content: 'CVP analysis menggunakan konsep contribution margin (margin kontribusi) untuk menghitung titik impas dan target laba.',
            formula: 'Contribution Margin (CM):\n  CM per unit = Harga Jual − Biaya Variabel per unit\n  CM Ratio = CM per unit ÷ Harga Jual\n\nBreak-Even Point (BEP):\n  BEP (unit) = Biaya Tetap ÷ CM per unit\n  BEP (rupiah) = Biaya Tetap ÷ CM Ratio\n\nTarget Laba:\n  Unit = (Biaya Tetap + Target Laba) ÷ CM per unit\n  Rupiah = (Biaya Tetap + Target Laba) ÷ CM Ratio\n\nTarget Laba Setelah Pajak:\n  Unit = (Biaya Tetap + Target Laba Setelah Pajak ÷ (1 − Tarif Pajak)) ÷ CM per unit\n\nMargin of Safety:\n  MoS (unit) = Penjualan Aktual − BEP (unit)\n  MoS (%) = MoS ÷ Penjualan Aktual × 100%\n\nOperating Leverage:\n  Degree of Operating Leverage (DOL) = CM ÷ Laba Operasi\n  % Perubahan Laba = DOL × % Perubahan Penjualan',
            examples: [
              'Harga jual Rp100.000/unit, biaya variabel Rp60.000/unit, biaya tetap Rp200 juta. CM/unit = 40.000. BEP = 200.000.000 ÷ 40.000 = 5.000 unit. Target laba Rp80 juta: (200+80) juta ÷ 40.000 = 7.000 unit.',
            ],
            tables: [
              {
                caption: 'Asumsi Analisis CVP',
                headers: ['Asumsi', 'Penjelasan'],
                rows: [
                  ['Linearitas', 'Pendapatan dan biaya bersifat linear dalam rentang relevan'],
                  ['Biaya dapat dipisahkan', 'Semua biaya dapat diklasifikasikan sebagai tetap atau variabel'],
                  ['Produk tunggal / sales mix konstan', 'Analisis untuk satu produk atau bauran penjualan tetap'],
                  ['Perubahan persediaan diabaikan', 'Unit yang diproduksi = unit yang dijual'],
                  ['Harga tetap', 'Harga jual, biaya variabel per unit, dan total biaya tetap konstan'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'costing',
        title: 'Metode Kalkulasi Biaya',
        description: 'Metode kalkulasi biaya menentukan bagaimana biaya produksi dikumpulkan dan dialokasikan ke produk atau jasa.',
        sections: [
          {
            id: 'cs-perbandingan',
            title: 'Job Order Costing vs Process Costing',
            content: 'Dua metode utama kalkulasi biaya produksi bergantung pada sifat produksi.',
            tables: [
              {
                caption: 'Perbandingan Job Order vs Process Costing',
                headers: ['Aspek', 'Job Order Costing', 'Process Costing'],
                rows: [
                  ['Objek biaya', 'Pesanan/job individual', 'Departemen/proses produksi'],
                  ['Produk', 'Unik, pesanan khusus, heterogen', 'Massal, homogen, produksi berkelanjutan'],
                  ['Akumulasi biaya', 'Per pesanan (job cost sheet)', 'Per departemen (cost of production report)'],
                  ['Unit ekuivalen', 'Tidak digunakan', 'Digunakan untuk WIP (Work in Process)'],
                  ['Biaya per unit', 'Total biaya job ÷ unit dalam job', 'Total biaya departemen ÷ unit ekuivalen'],
                  ['Contoh industri', 'Konstruksi, percetakan, bengkel', 'Kimia, semen, makanan/minuman, kertas'],
                ],
              },
            ],
          },
          {
            id: 'cs-abc',
            title: 'Activity-Based Costing (ABC)',
            content: 'ABC mengalokasikan overhead ke produk berdasarkan aktivitas yang sesungguhnya dikonsumsi, bukan berdasarkan satu driver tunggal seperti jam kerja langsung.',
            steps: [
              'Identifikasi aktivitas utama yang mengkonsumsi sumber daya (setup mesin, inspeksi, penanganan material, dll).',
              'Tentukan cost driver untuk setiap aktivitas (jumlah setup, jam inspeksi, jumlah perpindahan, dll).',
              'Hitung tarif per aktivitas = Total biaya aktivitas ÷ Total cost driver.',
              'Alokasikan biaya ke produk berdasarkan konsumsi aktivitas aktual setiap produk.',
            ],
            tables: [
              {
                caption: 'Perbandingan Traditional vs ABC Costing',
                headers: ['Aspek', 'Traditional Costing', 'Activity-Based Costing'],
                rows: [
                  ['Alokasi overhead', 'Satu atau sedikit driver (jam TKL, jam mesin)', 'Multiple cost driver sesuai aktivitas'],
                  ['Akurasi', 'Kurang akurat untuk produk dengan diversitas tinggi', 'Lebih akurat karena biaya ditelusuri ke aktivitas'],
                  ['Kompleksitas', 'Sederhana, murah', 'Lebih kompleks, biaya implementasi tinggi'],
                  ['Cocok untuk', 'Produksi homogen, overhead kecil', 'Produksi beragam, overhead tinggi, diversitas produk'],
                  ['Subsidi silang', 'Sering terjadi (high-volume subsidize low-volume)', 'Diminimalkan'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'bsc',
        title: 'Balanced Scorecard',
        description: 'Balanced Scorecard (BSC) adalah kerangka pengukuran kinerja strategis yang menerjemahkan visi dan strategi ke dalam serangkaian ukuran kinerja yang komprehensif dan seimbang.',
        sections: [
          {
            id: 'bsc-perspektif',
            title: 'Empat Perspektif BSC',
            content: 'BSC mengukur kinerja organisasi dari empat perspektif yang saling terkait.',
            tables: [
              {
                caption: '4 Perspektif Balanced Scorecard',
                headers: ['Perspektif', 'Pertanyaan Kunci', 'Contoh KPI', 'Lead/Lag'],
                rows: [
                  ['Keuangan (Financial)', 'Bagaimana kita terlihat oleh pemegang saham?', 'ROE, ROA, EVA, pertumbuhan pendapatan, margin laba', 'Lag indicator (hasil akhir)'],
                  ['Pelanggan (Customer)', 'Bagaimana pelanggan melihat kita?', 'Kepuasan pelanggan, retensi, pangsa pasar, NPS', 'Campuran lag & lead'],
                  ['Proses Internal (Internal Business Process)', 'Proses apa yang harus kita unggulkan?', 'Cycle time, defect rate, efisiensi produksi, time to market', 'Lead indicator'],
                  ['Pembelajaran & Pertumbuhan (Learning & Growth)', 'Bagaimana kita terus meningkatkan dan menciptakan nilai?', 'Pelatihan per karyawan, turnover rate, inovasi, kapabilitas IT', 'Lead indicator'],
                ],
              },
            ],
            diagram: '         ┌─────────────────────┐\n         │     KEUANGAN        │\n         │  (Financial)        │\n         └──────────┬──────────┘\n                    │\n    ┌───────────────┼───────────────┐\n    ▼               │               ▼\n┌──────────┐    ┌───┴───┐    ┌──────────┐\n│ PELANGGAN│    │ VISI &│    │ PROSES   │\n│(Customer)│◄──►│STRATEGI│◄──►│ INTERNAL │\n└──────────┘    └───┬───┘    └──────────┘\n                    │\n         ┌──────────▼──────────┐\n         │ PEMBELAJARAN &      │\n         │ PERTUMBUHAN         │\n         └─────────────────────┘',
          },
        ],
      },
    ],
  },
  // =============================================
  // MANAJEMEN STRATEJIK
  // =============================================
  {
    subjectId: 'manajemen-stratejik',
    chapters: [
      {
        id: 'analisis-strategi',
        title: 'Analisis Lingkungan Strategis',
        description: 'Analisis strategi melibatkan evaluasi lingkungan eksternal dan internal organisasi untuk memformulasikan strategi yang efektif.',
        sections: [
          {
            id: 'as-porter',
            title: 'Porter\'s Five Forces',
            content: 'Model Lima Kekuatan Porter menganalisis daya tarik industri berdasarkan lima kekuatan kompetitif yang menentukan intensitas persaingan dan profitabilitas industri.',
            tables: [
              {
                caption: 'Porter\'s Five Forces',
                headers: ['Kekuatan', 'Pertanyaan Kunci', 'Faktor yang Meningkatkan Kekuatan'],
                rows: [
                  ['Ancaman Pendatang Baru', 'Seberapa mudah pesaing baru masuk?', 'Hambatan masuk rendah, modal kecil, regulasi longgar, akses distribusi mudah'],
                  ['Kekuatan Tawar Pemasok', 'Seberapa kuat posisi pemasok?', 'Sedikit pemasok, produk unik/terdiferensiasi, biaya beralih tinggi'],
                  ['Kekuatan Tawar Pembeli', 'Seberapa kuat posisi pembeli?', 'Pembeli besar/terkonsentrasi, produk standar, informasi lengkap'],
                  ['Ancaman Produk Substitusi', 'Apakah ada alternatif?', 'Banyak substitusi, biaya beralih rendah, kecenderungan pembeli untuk substitusi'],
                  ['Rivalitas Antar Pesaing', 'Seberapa intens persaingan?', 'Banyak pesaing setara, pertumbuhan industri lambat, produk tidak terdiferensiasi'],
                ],
              },
            ],
          },
          {
            id: 'as-swot',
            title: 'Analisis SWOT & PESTEL',
            content: 'SWOT menganalisis faktor internal (kekuatan, kelemahan) dan eksternal (peluang, ancaman). PESTEL menganalisis lingkungan makro.',
            tables: [
              {
                caption: 'Analisis SWOT',
                headers: ['', 'Positif', 'Negatif'],
                rows: [
                  ['Internal', 'Strengths (Kekuatan): Kompetensi inti, sumber daya unik, keunggulan biaya', 'Weaknesses (Kelemahan): Kurang R&D, merek lemah, efisiensi rendah'],
                  ['Eksternal', 'Opportunities (Peluang): Pasar baru, teknologi baru, regulasi mendukung', 'Threats (Ancaman): Pesaing baru, substitusi, resesi ekonomi'],
                ],
              },
              {
                caption: 'Analisis PESTEL — Faktor Lingkungan Makro',
                headers: ['Faktor', 'Keterangan', 'Contoh'],
                rows: [
                  ['Political', 'Kebijakan pemerintah, stabilitas politik', 'Kebijakan perdagangan, subsidi, regulasi industri'],
                  ['Economic', 'Kondisi ekonomi makro', 'Inflasi, suku bunga, kurs valuta, pertumbuhan GDP'],
                  ['Social', 'Tren sosial dan demografi', 'Perubahan gaya hidup, aging population, urbanisasi'],
                  ['Technological', 'Inovasi dan perubahan teknologi', 'AI, otomasi, digital transformation, cybersecurity'],
                  ['Environmental', 'Isu lingkungan dan keberlanjutan', 'Perubahan iklim, regulasi emisi, ESG'],
                  ['Legal', 'Kerangka hukum dan regulasi', 'UU ketenagakerjaan, perlindungan konsumen, GDPR'],
                ],
              },
            ],
          },
          {
            id: 'as-generic',
            title: 'Strategi Generik Porter',
            content: 'Porter mengidentifikasi tiga strategi generik untuk mencapai keunggulan kompetitif.',
            tables: [
              {
                caption: 'Strategi Generik Porter',
                headers: ['Strategi', 'Sasaran Pasar', 'Sumber Keunggulan', 'Risiko'],
                rows: [
                  ['Cost Leadership', 'Pasar luas', 'Biaya terendah di industri', 'Imitasi oleh pesaing, perubahan teknologi yang menghilangkan keunggulan biaya'],
                  ['Differentiation', 'Pasar luas', 'Produk/jasa unik yang bernilai bagi pelanggan', 'Imitasi, pelanggan menjadi price-sensitive'],
                  ['Focus (Cost)', 'Segmen sempit', 'Biaya terendah di segmen tertentu', 'Segmen terlalu kecil, pesaing broad-scope masuk'],
                  ['Focus (Differentiation)', 'Segmen sempit', 'Produk/jasa unik untuk segmen tertentu', 'Segmen terlalu kecil, perbedaan kebutuhan menyempit'],
                ],
              },
            ],
            warning: 'Stuck in the middle: Perusahaan yang tidak berhasil menerapkan salah satu strategi generik berisiko terjebak tanpa keunggulan kompetitif yang jelas.',
          },
        ],
      },
    ],
  },
  // =============================================
  // MANAJEMEN BISNIS DASAR
  // =============================================
  {
    subjectId: 'manajemen-bisnis-dasar',
    chapters: [
      {
        id: 'fungsi-manajemen',
        title: 'Fungsi Manajemen',
        description: 'Fungsi manajemen meliputi empat aktivitas utama yang dikenal dengan akronim POAC: Planning, Organizing, Actuating, dan Controlling.',
        sections: [
          {
            id: 'fm-poac',
            title: 'POAC — Fungsi Dasar Manajemen',
            content: 'Setiap manajer melaksanakan empat fungsi dasar manajemen dalam mengelola organisasi.',
            tables: [
              {
                caption: 'Fungsi Manajemen — POAC',
                headers: ['Fungsi', 'Definisi', 'Aktivitas', 'Output'],
                rows: [
                  ['Planning (Perencanaan)', 'Menetapkan tujuan dan menentukan cara terbaik untuk mencapainya', 'Analisis situasi, penetapan tujuan, pengembangan strategi, pembuatan rencana aksi', 'Rencana strategis, rencana operasional, anggaran'],
                  ['Organizing (Pengorganisasian)', 'Mengatur sumber daya dan aktivitas untuk mencapai tujuan', 'Pembagian kerja, departementalisasi, penetapan wewenang, koordinasi', 'Struktur organisasi, job description, SOP'],
                  ['Actuating (Pelaksanaan/Pengarahan)', 'Memotivasi dan mengarahkan orang untuk melaksanakan rencana', 'Kepemimpinan, komunikasi, motivasi, delegasi, pelatihan', 'Kinerja tim, pencapaian target operasional'],
                  ['Controlling (Pengendalian)', 'Memantau kinerja dan mengambil tindakan korektif', 'Penetapan standar, pengukuran kinerja, perbandingan, tindakan korektif', 'Laporan kinerja, feedback, perbaikan proses'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'pemasaran',
        title: 'Manajemen Pemasaran',
        description: 'Manajemen pemasaran adalah proses perencanaan, pelaksanaan, dan pengendalian aktivitas pemasaran untuk memenuhi kebutuhan pelanggan dan mencapai tujuan organisasi.',
        sections: [
          {
            id: 'pm-mix',
            title: 'Marketing Mix — 7P',
            content: 'Marketing mix awalnya terdiri dari 4P untuk produk fisik, kemudian diperluas menjadi 7P untuk memasukkan elemen jasa.',
            tables: [
              {
                caption: 'Marketing Mix 7P',
                headers: ['Elemen', 'Penjelasan', 'Keputusan Utama'],
                rows: [
                  ['Product (Produk)', 'Barang/jasa yang ditawarkan ke pasar', 'Fitur, kualitas, desain, merek, kemasan, garansi'],
                  ['Price (Harga)', 'Jumlah uang yang dibebankan untuk produk', 'Strategi penetapan harga, diskon, bundling, price skimming vs penetration'],
                  ['Place (Distribusi)', 'Cara produk sampai ke pelanggan', 'Saluran distribusi, lokasi, logistik, e-commerce'],
                  ['Promotion (Promosi)', 'Komunikasi nilai produk ke pelanggan', 'Iklan, sales promotion, PR, personal selling, digital marketing'],
                  ['People (Orang)', 'Semua orang yang terlibat dalam penyampaian jasa', 'Pelatihan, customer service, budaya pelayanan'],
                  ['Process (Proses)', 'Prosedur dan alur penyampaian jasa', 'Efisiensi proses, standardisasi, teknologi'],
                  ['Physical Evidence (Bukti Fisik)', 'Lingkungan fisik tempat jasa disampaikan', 'Desain interior, suasana, website, materi cetak'],
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // =============================================
  // EKONOMI & STATISTIK BISNIS
  // =============================================
  {
    subjectId: 'ekonomi-statistik',
    chapters: [
      {
        id: 'makroekonomi',
        title: 'Makroekonomi',
        description: 'Makroekonomi mempelajari perekonomian secara keseluruhan, meliputi GDP, inflasi, pengangguran, dan kebijakan moneter/fiskal.',
        sections: [
          {
            id: 'me-gdp',
            title: 'GDP & Indikator Ekonomi',
            content: 'Gross Domestic Product (GDP) adalah nilai total barang dan jasa akhir yang diproduksi di suatu negara dalam satu periode.',
            formula: 'GDP (Pendekatan Pengeluaran):\n  GDP = C + I + G + (X − M)\n\nKeterangan:\n  C = Konsumsi rumah tangga\n  I = Investasi (pembentukan modal tetap bruto)\n  G = Pengeluaran pemerintah\n  X = Ekspor\n  M = Impor\n\nGDP (Pendekatan Pendapatan):\n  GDP = Upah + Sewa + Bunga + Laba\n\nGDP Riil vs Nominal:\n  GDP Riil = GDP Nominal ÷ Deflator GDP × 100\n  Pertumbuhan Ekonomi = (GDP Riil t − GDP Riil t-1) ÷ GDP Riil t-1 × 100%',
            tables: [
              {
                caption: 'Indikator Ekonomi Makro Utama',
                headers: ['Indikator', 'Definisi', 'Target Indonesia'],
                rows: [
                  ['GDP Growth', 'Pertumbuhan produk domestik bruto riil', '5-6% per tahun'],
                  ['Inflasi (CPI)', 'Kenaikan tingkat harga umum', '2-4% (target BI)'],
                  ['Pengangguran', 'Persentase angkatan kerja yang tidak bekerja', '< 6%'],
                  ['Suku Bunga (BI Rate)', 'Suku bunga kebijakan Bank Indonesia', 'Disesuaikan kondisi ekonomi'],
                  ['Kurs Rupiah', 'Nilai tukar Rupiah terhadap mata uang asing', 'Stabil dan kompetitif'],
                  ['Neraca Pembayaran', 'Catatan transaksi ekonomi dengan luar negeri', 'Surplus atau seimbang'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'statistik',
        title: 'Statistik Deskriptif & Inferensial',
        description: 'Statistik bisnis menyediakan alat untuk mengumpulkan, menganalisis, dan menginterpretasikan data untuk pengambilan keputusan bisnis.',
        sections: [
          {
            id: 'sd-ukuran',
            title: 'Ukuran Pemusatan & Penyebaran',
            content: 'Statistik deskriptif meringkas dan menggambarkan karakteristik utama dari kumpulan data.',
            formula: 'Ukuran Pemusatan:\n  Mean (Rata-rata) = Σxi ÷ n\n  Median = Nilai tengah data yang diurutkan\n  Modus = Nilai yang paling sering muncul\n\nUkuran Penyebaran:\n  Range = Nilai Maks − Nilai Min\n  Varians (σ²) = Σ(xi − x̄)² ÷ (n−1)  [sampel]\n  Standar Deviasi (σ) = √Varians\n  Koefisien Variasi (CV) = (σ ÷ x̄) × 100%',
            tables: [
              {
                caption: 'Perbandingan Ukuran Pemusatan',
                headers: ['Ukuran', 'Kelebihan', 'Kekurangan', 'Kapan Digunakan'],
                rows: [
                  ['Mean', 'Menggunakan semua data, familiar', 'Sensitif terhadap outlier', 'Data berdistribusi simetris tanpa outlier'],
                  ['Median', 'Tidak terpengaruh outlier', 'Tidak menggunakan semua nilai data', 'Data skewed atau ada outlier'],
                  ['Modus', 'Dapat digunakan untuk data kategorik', 'Mungkin tidak unik atau tidak ada', 'Data kategorik, distribusi multimodal'],
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // =============================================
  // ETIKA & TATA KELOLA
  // =============================================
  {
    subjectId: 'etika-tata-kelola',
    chapters: [
      {
        id: 'kode-etik',
        title: 'Kode Etik Akuntan Profesional',
        description: 'Kode Etik Akuntan Profesional di Indonesia mengadopsi International Ethics Standards Board for Accountants (IESBA) Code of Ethics.',
        sections: [
          {
            id: 'ke-prinsip',
            title: 'Lima Prinsip Fundamental',
            content: 'Setiap akuntan profesional wajib mematuhi lima prinsip fundamental etika berikut.',
            tables: [
              {
                caption: 'Lima Prinsip Fundamental Etika Akuntan Profesional',
                headers: ['Prinsip', 'Penjelasan', 'Contoh Pelanggaran'],
                rows: [
                  ['Integritas', 'Bersikap lugas dan jujur dalam semua hubungan profesional dan bisnis', 'Memalsukan data, menyesatkan informasi, menyembunyikan fakta material'],
                  ['Objektivitas', 'Tidak membiarkan bias, benturan kepentingan, atau pengaruh tidak semestinya', 'Menerima suap, audit klien yang merupakan keluarga, tekanan dari klien'],
                  ['Kompetensi & Kehati-hatian Profesional', 'Memelihara pengetahuan dan keahlian, bertindak cermat sesuai standar', 'Menerima penugasan di luar kompetensi, tidak mengikuti CPD, lalai menerapkan standar'],
                  ['Kerahasiaan', 'Menghormati kerahasiaan informasi yang diperoleh dari hubungan profesional', 'Membocorkan informasi klien tanpa izin, menggunakan informasi untuk keuntungan pribadi'],
                  ['Perilaku Profesional', 'Mematuhi hukum dan peraturan, menghindari tindakan yang mendiskreditkan profesi', 'Iklan menyesatkan, merendahkan sesama akuntan, tidak mematuhi regulasi'],
                ],
              },
            ],
          },
          {
            id: 'ke-ancaman',
            title: 'Ancaman dan Pencegahan',
            content: 'Kerangka konseptual etika mengidentifikasi ancaman terhadap kepatuhan prinsip fundamental dan mensyaratkan pencegahan yang tepat.',
            tables: [
              {
                caption: 'Jenis Ancaman terhadap Independensi & Etika',
                headers: ['Ancaman', 'Definisi', 'Contoh'],
                rows: [
                  ['Self-Interest (Kepentingan Pribadi)', 'Kepentingan keuangan atau lainnya mempengaruhi pertimbangan', 'Kepemilikan saham klien audit, fee kontinjen, ketergantungan pada satu klien besar'],
                  ['Self-Review (Telaah Pribadi)', 'Mengevaluasi hasil pekerjaan sendiri', 'Menyusun laporan keuangan + mengaudit entitas yang sama, valuasi → audit'],
                  ['Advocacy (Advokasi)', 'Mempromosikan posisi klien sehingga objektivitas terganggu', 'Membela klien di pengadilan pajak, mempromosikan saham klien audit'],
                  ['Familiarity (Kedekatan)', 'Hubungan dekat menyebabkan terlalu simpatik pada kepentingan klien', 'Hubungan keluarga dengan direksi klien, rotasi partner terlalu lama, hadiah dari klien'],
                  ['Intimidation (Intimidasi)', 'Tekanan untuk bertindak tidak profesional', 'Ancaman penggantian auditor, ancaman litigasi, tekanan dari atasan'],
                ],
              },
            ],
            rules: [
              'Pencegahan di lingkungan kerja: kebijakan pengawasan mutu, rotasi partner audit, peer review, telaah independen.',
              'Pencegahan oleh legislasi/regulasi: persyaratan pendidikan & pengalaman, CPD wajib, standar profesional, proses disiplin.',
              'Pencegahan oleh klien: komite audit independen, kebijakan seleksi auditor, tata kelola perusahaan yang kuat.',
            ],
          },
          {
            id: 'ke-independensi',
            title: 'Independensi Auditor',
            content: 'Independensi adalah persyaratan mutlak untuk audit dan perikatan asurans. Terdiri dari dua aspek.',
            tables: [
              {
                caption: 'Dua Aspek Independensi',
                headers: ['Aspek', 'Definisi', 'Cara Memelihara'],
                rows: [
                  ['Independence of Mind (Independensi Pikiran)', 'Keadaan pikiran yang memungkinkan penyampaian pendapat tanpa dipengaruhi — menjalankan pertimbangan profesional secara objektif', 'Mengikuti kerangka konseptual, evaluasi ancaman, menerapkan pencegahan'],
                  ['Independence in Appearance (Independensi Penampilan)', 'Menghindari fakta dan keadaan yang begitu signifikan sehingga pihak ketiga yang rasional menyimpulkan integritas, objektivitas, atau skeptisisme profesional telah dikompromikan', 'Rotasi partner (maks 7 tahun), cooling-off 2-5 tahun, larangan hubungan keuangan dengan klien audit'],
                ],
              },
            ],
            warning: 'Cooling-off period setelah rotasi: Partner audit utama harus menjalani cooling-off minimal 5 tahun setelah 7 tahun berturut-turut. Partner EQCR (Engagement Quality Control Review) juga wajib rotasi.',
          },
        ],
      },
    ],
  },
  // =============================================
  // STUDI KASUS TERPADU
  // =============================================
  {
    subjectId: 'studi-kasus-terpadu',
    chapters: [
      {
        id: 'metodologi',
        title: 'Metodologi Analisis Kasus',
        description: 'Studi Kasus Terpadu (SKT) menguji kemampuan kandidat untuk mengintegrasikan pengetahuan dari berbagai mata ujian dalam menganalisis skenario bisnis yang kompleks.',
        sections: [
          {
            id: 'mt-framework',
            title: 'Kerangka Analisis Kasus Terstruktur',
            content: 'Gunakan pendekatan terstruktur untuk menganalisis kasus secara komprehensif dan efisien.',
            steps: [
              'Baca Kasus Secara Keseluruhan — Identifikasi entitas, industri, stakeholder utama, dan isu-isu kunci. Buat catatan singkat tentang kronologi peristiwa.',
              'Identifikasi Isu (Issue Identification) — Kategorikan isu berdasarkan bidang: akuntansi (pelaporan korporat), audit, perpajakan, manajemen keuangan, etika, strategi.',
              'Analisis Isu (Issue Analysis) — Untuk setiap isu: identifikasi standar/regulasi yang relevan (PSAK, SA, UU Pajak), aplikasikan pada fakta kasus, lakukan perhitungan jika diperlukan.',
              'Evaluasi Alternatif — Pertimbangkan berbagai alternatif solusi, evaluasi kelebihan dan kekurangan masing-masing dari perspektif keuangan, legal, dan strategis.',
              'Kesimpulan dan Rekomendasi — Berikan rekomendasi yang jelas, didukung analisis, dan dapat diimplementasikan. Sajikan dampak kuantitatif jika memungkinkan.',
            ],
          },
          {
            id: 'mt-rasio',
            title: 'Analisis Rasio Keuangan — Referensi Lengkap',
            content: 'Rasio keuangan adalah alat utama dalam analisis kasus. Berikut referensi lengkap rumus dan interpretasi.',
            tables: [
              {
                caption: 'Rasio Keuangan Lengkap',
                headers: ['Kategori', 'Rasio', 'Rumus', 'Interpretasi'],
                rows: [
                  ['Likuiditas', 'Current Ratio', 'Aset Lancar ÷ Liabilitas Jangka Pendek', '> 2 baik; < 1 risiko likuiditas'],
                  ['Likuiditas', 'Quick Ratio (Acid Test)', '(Aset Lancar − Persediaan) ÷ Liab. Jangka Pendek', '> 1 baik; lebih konservatif dari current ratio'],
                  ['Likuiditas', 'Cash Ratio', 'Kas & Setara Kas ÷ Liabilitas Jangka Pendek', 'Ukuran paling ketat kemampuan bayar'],
                  ['Solvabilitas', 'Debt to Equity Ratio', 'Total Liabilitas ÷ Total Ekuitas', '< 1 konservatif; > 2 berisiko tinggi'],
                  ['Solvabilitas', 'Debt to Asset Ratio', 'Total Liabilitas ÷ Total Aset', '< 0,5 konservatif'],
                  ['Solvabilitas', 'Interest Coverage', 'EBIT ÷ Beban Bunga', '> 3 aman; < 1,5 berisiko'],
                  ['Profitabilitas', 'Gross Profit Margin', '(Pendapatan − HPP) ÷ Pendapatan × 100%', 'Efisiensi produksi/procurement'],
                  ['Profitabilitas', 'Net Profit Margin', 'Laba Bersih ÷ Pendapatan × 100%', 'Profitabilitas keseluruhan'],
                  ['Profitabilitas', 'ROA (Return on Assets)', 'Laba Bersih ÷ Total Aset × 100%', 'Efisiensi penggunaan aset'],
                  ['Profitabilitas', 'ROE (Return on Equity)', 'Laba Bersih ÷ Total Ekuitas × 100%', 'Tingkat pengembalian bagi pemegang saham'],
                  ['Aktivitas', 'Receivables Turnover', 'Penjualan Kredit ÷ Rata-rata Piutang', 'Efisiensi penagihan piutang'],
                  ['Aktivitas', 'Days Sales Outstanding', '365 ÷ Receivables Turnover', 'Rata-rata hari penagihan piutang'],
                  ['Aktivitas', 'Inventory Turnover', 'HPP ÷ Rata-rata Persediaan', 'Efisiensi pengelolaan persediaan'],
                  ['Aktivitas', 'Days Inventory Outstanding', '365 ÷ Inventory Turnover', 'Rata-rata hari persediaan terjual'],
                  ['Aktivitas', 'Total Asset Turnover', 'Pendapatan ÷ Total Aset', 'Efisiensi penggunaan aset keseluruhan'],
                  ['Pasar', 'EPS (Earnings per Share)', '(Laba Bersih − Dividen Preferen) ÷ Rata-rata Saham Beredar', 'Laba per lembar saham'],
                  ['Pasar', 'P/E Ratio', 'Harga Saham ÷ EPS', 'Ekspektasi pasar terhadap pertumbuhan laba'],
                  ['Pasar', 'PBV (Price to Book Value)', 'Harga Saham ÷ Book Value per Share', '> 1 pasar menilai premium; < 1 undervalued'],
                ],
              },
            ],
            formula: 'DuPont Analysis:\n  ROE = Net Profit Margin × Total Asset Turnover × Equity Multiplier\n  ROE = (Laba Bersih ÷ Penjualan) × (Penjualan ÷ Total Aset) × (Total Aset ÷ Ekuitas)\n\nCash Conversion Cycle:\n  CCC = DSO + DIO − DPO\n  (Days Sales Outstanding + Days Inventory Outstanding − Days Payable Outstanding)',
          },
        ],
      },
    ],
  },
  // =============================================
  // PSAK & STANDAR AKUNTANSI
  // =============================================
  {
    subjectId: 'psak-standar',
    chapters: [
      {
        id: 'sejarah-sak',
        title: 'Sejarah & Perkembangan SAK di Indonesia',
        description: 'Standar Akuntansi Keuangan (SAK) di Indonesia telah mengalami evolusi signifikan, dari berbasis US GAAP hingga konvergensi IFRS.',
        sections: [
          {
            id: 'ss-timeline',
            title: 'Timeline Perkembangan SAK',
            content: 'Perkembangan standar akuntansi di Indonesia dapat ditelusuri melalui beberapa tonggak penting.',
            tables: [
              {
                caption: 'Timeline Perkembangan SAK Indonesia',
                headers: ['Periode', 'Peristiwa', 'Keterangan'],
                rows: [
                  ['1957', 'Pendirian IAI (Ikatan Akuntan Indonesia)', 'Organisasi profesi akuntan pertama di Indonesia'],
                  ['1973', 'Prinsip Akuntansi Indonesia (PAI)', 'Adopsi dari US GAAP, standar pertama yang terstruktur'],
                  ['1994', 'SAK berbasis US GAAP', 'Standar Akuntansi Keuangan pertama, menggantikan PAI'],
                  ['2008', 'Roadmap konvergensi IFRS dimulai', 'DSAK-IAI memulai proses konvergensi IFRS'],
                  ['2012', 'Konvergensi IFRS tahap I selesai', 'Sebagian besar IFRS telah diadopsi menjadi PSAK'],
                  ['2017-2018', 'Adopsi IFRS 15, 16, 9', 'Standar pendapatan, sewa, dan instrumen keuangan baru berlaku'],
                  ['2024', 'Penomoran PSAK baru', 'Sistem penomoran baru: 1xx (IFRS), 2xx (IAS), 3xx (Lokal)'],
                ],
              },
            ],
          },
          {
            id: 'ss-jenis',
            title: 'Jenis-Jenis SAK di Indonesia',
            content: 'Indonesia memiliki empat pilar standar akuntansi keuangan yang berlaku untuk jenis entitas berbeda.',
            tables: [
              {
                caption: 'Empat Pilar SAK di Indonesia',
                headers: ['SAK', 'Nama Lengkap', 'Diterapkan Oleh', 'Basis'],
                rows: [
                  ['SAK Umum', 'Standar Akuntansi Keuangan (konvergensi IFRS)', 'Entitas yang memiliki akuntabilitas publik signifikan (perusahaan publik, bank, asuransi)', 'IFRS'],
                  ['SAK ETAP', 'SAK Entitas Tanpa Akuntabilitas Publik (dicabut 2025)', 'Entitas tanpa akuntabilitas publik signifikan (sudah diganti SAK EP)', 'IFRS for SMEs (versi lama)'],
                  ['SAK EMKM', 'SAK Entitas Mikro, Kecil, dan Menengah', 'Entitas mikro, kecil, dan menengah sesuai UU UMKM', 'Sederhana, basis biaya historis'],
                  ['SAK EP', 'SAK Entitas Privat (berlaku 1 Jan 2025)', 'Entitas tanpa akuntabilitas publik signifikan (menggantikan SAK ETAP)', 'IFRS for SMEs (2015)'],
                ],
              },
            ],
            notes: ['SAK Syariah berlaku untuk transaksi syariah dan diterbitkan oleh DSAS-IAI (Dewan Standar Akuntansi Syariah).'],
          },
          {
            id: 'ss-penomoran',
            title: 'Sistem Penomoran PSAK Baru (2024)',
            content: 'Sejak 2024, DSAK-IAI menerapkan sistem penomoran baru untuk memudahkan identifikasi asal standar.',
            tables: [
              {
                caption: 'Sistem Penomoran PSAK Baru',
                headers: ['Awalan', 'Asal Standar', 'Contoh'],
                rows: [
                  ['1xx', 'Adopsi IFRS (International Financial Reporting Standards)', 'PSAK 103 (IFRS 3), PSAK 109 (IFRS 9), PSAK 115 (IFRS 15), PSAK 116 (IFRS 16)'],
                  ['2xx', 'Adopsi IAS (International Accounting Standards)', 'PSAK 201 (IAS 1), PSAK 202 (IAS 2), PSAK 216 (IAS 16), PSAK 236 (IAS 36)'],
                  ['3xx', 'Standar Lokal Indonesia', 'PSAK 3xx untuk isu-isu spesifik Indonesia yang tidak diatur IFRS'],
                  ['4xx', 'Standar Akuntansi Syariah', 'PSAK 4xx untuk transaksi-transaksi berbasis syariah'],
                ],
              },
            ],
          },
          {
            id: 'ss-hierarki',
            title: 'Hierarki Produk SAK',
            content: 'Dewan Standar Akuntansi Keuangan (DSAK-IAI) menerbitkan beberapa jenis produk dengan hierarki yang jelas.',
            tables: [
              {
                caption: 'Hierarki Produk SAK',
                headers: ['Produk', 'Singkatan', 'Fungsi'],
                rows: [
                  ['Pernyataan Standar Akuntansi Keuangan', 'PSAK', 'Standar utama — aturan pengakuan, pengukuran, penyajian, pengungkapan'],
                  ['Interpretasi Standar Akuntansi Keuangan', 'ISAK', 'Memberikan panduan tentang masalah yang belum secara spesifik diatur dalam PSAK'],
                  ['Pencabutan Pernyataan Standar Akuntansi Keuangan', 'PPSAK', 'Mencabut PSAK yang sudah tidak relevan'],
                  ['Buletin Teknis', 'Bultek', 'Panduan penerapan praktis (tidak setingkat standar)'],
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'psak-vs-ifrs',
        title: 'Perbedaan PSAK dan IFRS',
        description: 'Meskipun Indonesia telah mengonvergensi IFRS, beberapa perbedaan masih ada.',
        sections: [
          {
            id: 'pvi-tabel',
            title: 'Perbedaan Kunci PSAK vs IFRS vs US GAAP',
            content: 'Berikut beberapa perbedaan kunci antara PSAK (Indonesia), IFRS, dan US GAAP yang sering diuji.',
            tables: [
              {
                caption: 'Perbandingan Standar Akuntansi',
                headers: ['Topik', 'PSAK (Indonesia)', 'IFRS', 'US GAAP'],
                rows: [
                  ['Basis', 'Konvergensi IFRS', 'Standar global', 'Standar AS'],
                  ['Penyusun', 'DSAK-IAI', 'IASB', 'FASB'],
                  ['Persediaan — LIFO', 'Dilarang', 'Dilarang', 'Diperbolehkan'],
                  ['Goodwill', 'Tidak diamortisasi, uji penurunan tahunan', 'Tidak diamortisasi, uji penurunan tahunan', 'Amortisasi opsional (entitas privat), uji penurunan'],
                  ['Revaluasi aset tetap', 'Diperbolehkan (model revaluasi)', 'Diperbolehkan', 'Tidak diperbolehkan'],
                  ['Biaya pengembangan', 'Dikapitalisasi jika memenuhi 6 kriteria', 'Dikapitalisasi jika memenuhi 6 kriteria', 'Selalu dibebankan (kecuali software)'],
                  ['Pemulihan rugi penurunan nilai', 'Diperbolehkan (kecuali goodwill)', 'Diperbolehkan (kecuali goodwill)', 'Tidak diperbolehkan'],
                  ['Sewa (lessee)', 'PSAK 116: kapitalisasi hampir semua sewa', 'IFRS 16: kapitalisasi hampir semua sewa', 'ASC 842: dua model (finance + operating lease)'],
                  ['Pendapatan', 'PSAK 115: model 5 langkah', 'IFRS 15: model 5 langkah', 'ASC 606: model 5 langkah (mirip IFRS 15)'],
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // =============================================
  // STRATEGI UJIAN
  // =============================================
  {
    subjectId: 'strategi-ujian',
    chapters: [
      {
        id: 'format-ujian',
        title: 'Format & Struktur Ujian CA',
        description: 'Ujian Chartered Accountant (CA) Indonesia diselenggarakan oleh Ikatan Akuntan Indonesia (IAI) dalam tiga level progresif.',
        sections: [
          {
            id: 'fu-level',
            title: 'Tiga Level Ujian CA',
            content: 'Ujian CA Indonesia terdiri dari tiga level yang harus ditempuh secara berurutan.',
            tables: [
              {
                caption: 'Struktur Level Ujian CA Indonesia',
                headers: ['Level', 'Nama', 'Jumlah Mata Ujian', 'Format', 'Passing Grade'],
                rows: [
                  ['1', 'Certified Accounting for Business (CAFB)', '4 mata ujian', 'Pilihan ganda & esai', '60 dari 100'],
                  ['2', 'Associate Chartered Accountant', '6 mata ujian', 'Pilihan ganda, esai, kasus', '60 dari 100'],
                  ['3', 'Chartered Accountant', '2 mata ujian', 'Studi kasus terpadu', '60 dari 100'],
                ],
              },
              {
                caption: 'Daftar Mata Ujian per Level',
                headers: ['Level', 'Mata Ujian'],
                rows: [
                  ['CAFB', '1. Pengantar Akuntansi & Bisnis'],
                  ['CAFB', '2. Akuntansi Keuangan Dasar'],
                  ['CAFB', '3. Manajemen Bisnis Dasar'],
                  ['CAFB', '4. Ekonomi & Statistik Bisnis'],
                  ['Associate CA', '1. Pelaporan Korporat'],
                  ['Associate CA', '2. Manajemen Keuangan'],
                  ['Associate CA', '3. Manajemen Perpajakan'],
                  ['Associate CA', '4. Audit & Asurans'],
                  ['Associate CA', '5. Akuntansi Manajemen'],
                  ['Associate CA', '6. Manajemen Stratejik'],
                  ['CA', '1. Studi Kasus Terpadu'],
                  ['CA', '2. Etika & Tata Kelola'],
                ],
              },
            ],
          },
          {
            id: 'fu-tips',
            title: 'Strategi Belajar & Tips Ujian',
            content: 'Strategi efektif untuk mempersiapkan dan menghadapi ujian CA.',
            steps: [
              'Pahami silabus dan bobot materi — Fokuskan waktu belajar pada topik dengan bobot tinggi.',
              'Buat jadwal belajar terstruktur — Alokasikan waktu khusus untuk setiap mata ujian, minimal 3-4 bulan sebelum ujian.',
              'Kuasai standar utama (PSAK) — Pelaporan Korporat sangat PSAK-heavy. Hafalkan standar kunci: PSAK 115, 116, 109, 201, 216, 236, 237.',
              'Latihan soal secara intensif — Kerjakan soal-soal ujian tahun sebelumnya. Pahami pola pertanyaan dan jenis analisis yang diminta.',
              'Manajemen waktu saat ujian — Baca seluruh soal terlebih dahulu, kerjakan yang paling dikuasai lebih dulu, alokasikan waktu per soal.',
              'Untuk soal esai/kasus — Gunakan kerangka analisis terstruktur. Sebutkan standar/regulasi yang relevan. Tunjukkan perhitungan. Berikan kesimpulan yang jelas.',
              'Review secara berkala — Gunakan teknik spaced repetition. Buat flashcard untuk konsep-konsep kunci.',
              'Bentuk kelompok belajar — Diskusi dengan sesama kandidat memperdalam pemahaman dan mengidentifikasi blind spot.',
            ],
            warning: 'Masa berlaku kelulusan mata ujian adalah 3 tahun. Jika tidak menyelesaikan semua mata ujian dalam satu level dalam 3 tahun, mata ujian yang paling awal lulus harus diulang.',
          },
        ],
      },
    ],
  },
];
