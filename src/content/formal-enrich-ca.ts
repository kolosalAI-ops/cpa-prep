import type { FormalChapter } from './formalData';

// =============================================
// MANAJEMEN STRATEJIK — EXTRA CHAPTERS
// =============================================
export const manajemenStratejikExtraChapters: FormalChapter[] = [
  {
    id: 'ms-implementasi',
    title: 'Implementasi Strategi',
    description: 'Implementasi strategi adalah proses menerjemahkan rencana strategis menjadi tindakan konkret yang terukur. Balanced Scorecard, Critical Success Factors, dan keselarasan KPI merupakan alat utama yang memastikan eksekusi strategi berjalan efektif dan dapat dipantau secara sistematis.',
    sections: [
      {
        id: 'ms-impl-bsc',
        title: 'Balanced Scorecard (BSC)',
        content: 'Balanced Scorecard adalah kerangka manajemen kinerja yang dikembangkan oleh Kaplan dan Norton. BSC menerjemahkan visi dan strategi organisasi ke dalam seperangkat ukuran kinerja yang seimbang dari empat perspektif: keuangan, pelanggan, proses bisnis internal, serta pembelajaran dan pertumbuhan. BSC mengatasi kelemahan sistem pengukuran tradisional yang terlalu berfokus pada ukuran keuangan jangka pendek.',
        tables: [
          {
            headers: ['Perspektif', 'Pertanyaan Kunci', 'Contoh KPI'],
            rows: [
              ['Keuangan', 'Bagaimana kami tampak di mata pemegang saham?', 'ROE, ROI, pertumbuhan pendapatan, EBITDA margin'],
              ['Pelanggan', 'Bagaimana pelanggan memandang kami?', 'Kepuasan pelanggan, market share, retensi pelanggan, Net Promoter Score'],
              ['Proses Bisnis Internal', 'Proses apa yang harus kami unggulkan?', 'Cycle time, tingkat cacat, efisiensi proses, inovasi produk baru'],
              ['Pembelajaran dan Pertumbuhan', 'Bagaimana kami mempertahankan kemampuan untuk berubah?', 'Kepuasan karyawan, retensi talenta, investasi pelatihan, kapabilitas sistem IT'],
            ],
            caption: 'Empat perspektif Balanced Scorecard dan contoh KPI',
          },
        ],
        rules: [
          'Setiap perspektif BSC harus memiliki tujuan (objectives), ukuran (measures), target, dan inisiatif.',
          'Keempat perspektif harus saling terhubung melalui hubungan sebab-akibat (cause-and-effect linkages).',
          'BSC bukan sekadar daftar KPI, melainkan narasi strategi yang terstruktur dalam Strategy Map.',
          'Jumlah KPI yang ideal per perspektif adalah 3-5 ukuran agar fokus dan tidak membebani manajemen.',
        ],
        notes: [
          'Strategy Map adalah representasi visual hubungan sebab-akibat antar tujuan strategis di seluruh perspektif BSC.',
          'BSC generasi ketiga menambahkan "destination statement" yang mendeskripsikan kondisi organisasi yang diinginkan di masa depan.',
        ],
      },
      {
        id: 'ms-impl-csf',
        title: 'Critical Success Factors (CSF)',
        content: 'Critical Success Factors adalah faktor-faktor kunci yang harus berjalan dengan baik agar organisasi mencapai misi dan tujuan strategisnya. CSF berbeda dengan KPI; CSF adalah area penentu keberhasilan, sedangkan KPI adalah ukuran yang digunakan untuk memantau pencapaian CSF tersebut. Identifikasi CSF yang tepat sangat penting sebelum perusahaan menetapkan sistem pengukuran kinerja.',
        steps: [
          'Tetapkan misi dan tujuan strategis organisasi secara eksplisit.',
          'Identifikasi faktor-faktor eksternal (industri, pasar, regulasi) yang memengaruhi keberhasilan.',
          'Identifikasi faktor-faktor internal (kapabilitas, sumber daya, proses) yang kritikal.',
          'Pilih 3-8 CSF yang paling menentukan keberhasilan strategi.',
          'Tentukan KPI untuk setiap CSF agar pencapaiannya dapat diukur.',
          'Tetapkan target dan ambang batas kinerja untuk setiap KPI.',
          'Lakukan tinjauan berkala dan perbarui CSF seiring perubahan lingkungan bisnis.',
        ],
        examples: [
          'Industri perbankan: CSF meliputi kualitas portofolio kredit, kepercayaan nasabah, kepatuhan regulasi, dan efisiensi operasional.',
          'Perusahaan manufaktur: CSF meliputi efisiensi produksi, kualitas produk, manajemen rantai pasokan, dan inovasi produk.',
          'Firma akuntansi publik: CSF meliputi kompetensi staf, reputasi, kepatuhan etika, dan retensi klien.',
        ],
        notes: [
          'CSF bersifat spesifik untuk industri dan strategi perusahaan; tidak ada daftar CSF universal.',
          'Metode identifikasi CSF oleh Rockart (1979) menggunakan wawancara mendalam dengan manajemen senior.',
        ],
      },
      {
        id: 'ms-impl-kpi',
        title: 'Keselarasan KPI dengan Strategi',
        content: 'Keselarasan (alignment) KPI dengan strategi memastikan bahwa setiap unit bisnis, departemen, dan individu bekerja menuju tujuan yang sama. Tanpa keselarasan, departemen dapat beroptimasi secara lokal namun merugikan kinerja organisasi secara keseluruhan. Proses cascading KPI dari tingkat korporat hingga individual adalah inti dari implementasi strategi yang efektif.',
        diagram: 'Strategi Korporat --> Tujuan Divisi --> KPI Departemen --> Target Individual --> Evaluasi Kinerja',
        rules: [
          'KPI harus memenuhi kriteria SMART: Specific, Measurable, Achievable, Relevant, Time-bound.',
          'KPI lag (hasil akhir) harus diimbangi KPI lead (pendorong kinerja) agar manajemen dapat bertindak proaktif.',
          'Setiap karyawan sebaiknya memiliki maksimal 5-7 KPI utama untuk menjaga fokus.',
          'KPI yang saling bertentangan (conflicting KPIs) harus diidentifikasi dan diselesaikan di tingkat manajemen.',
        ],
        tables: [
          {
            headers: ['Jenis KPI', 'Definisi', 'Contoh', 'Kegunaan'],
            rows: [
              ['KPI Lag', 'Mengukur hasil yang telah terjadi', 'Laba bersih kuartal, tingkat kepuasan pelanggan akhir tahun', 'Evaluasi pencapaian'],
              ['KPI Lead', 'Mengukur pendorong yang memengaruhi hasil masa depan', 'Jumlah prospek baru, jam pelatihan per karyawan', 'Tindakan korektif proaktif'],
              ['KPI Kuantitatif', 'Terukur secara numerik', 'Pendapatan, margin, volume penjualan', 'Objektif dan mudah dibandingkan'],
              ['KPI Kualitatif', 'Berbasis persepsi atau penilaian', 'Indeks kepuasan, skor reputasi merek', 'Menangkap aspek yang tidak mudah dikuantifikasi'],
            ],
            caption: 'Klasifikasi jenis-jenis KPI',
          },
        ],
        warning: 'Fenomena "goodhart\'s law": ketika ukuran menjadi target, ukuran tersebut berhenti menjadi ukuran yang baik. Manajemen harus waspada terhadap perilaku gaming KPI di mana karyawan mengoptimalkan angka KPI tanpa mencapai tujuan substantif yang sesungguhnya.',
      },
      {
        id: 'ms-impl-cascading',
        title: 'Proses Cascading dan Review Strategis',
        content: 'Cascading adalah proses menurunkan tujuan dan KPI dari tingkat korporat ke tingkat unit bisnis, departemen, tim, dan individu. Review strategis adalah siklus evaluasi berkala untuk menilai kemajuan implementasi dan melakukan penyesuaian yang diperlukan.',
        steps: [
          'Tetapkan tujuan strategis dan KPI di tingkat korporat bersama dewan direksi.',
          'Turunkan tujuan korporat menjadi tujuan spesifik untuk setiap divisi atau unit bisnis.',
          'Setiap kepala divisi menerjemahkan tujuan divisi ke KPI departemen dan tim.',
          'Manajer tim menetapkan target individual yang berkontribusi pada KPI tim.',
          'Lakukan Operational Review bulanan untuk memantau KPI operasional.',
          'Lakukan Strategy Review kuartalan untuk menilai kemajuan tujuan strategis.',
          'Lakukan Annual Strategic Planning untuk meninjau ulang relevansi strategi dan CSF.',
        ],
        examples: [
          'Korporat: "Tingkatkan ROE dari 12% menjadi 18% dalam 3 tahun." Divisi penjualan: "Tingkatkan pendapatan segmen korporat 25%." Departemen: "Akuisisi 50 pelanggan korporat baru per kuartal." Individu: "Lakukan 10 presentasi prospek per bulan."',
        ],
      },
    ],
  },
  {
    id: 'ms-inovasi-digital',
    title: 'Inovasi dan Transformasi Digital',
    description: 'Transformasi digital dan inovasi model bisnis telah mengubah lanskap kompetitif secara fundamental. Akuntan profesional perlu memahami konsep disrupsi digital, model bisnis inovatif, dan pendekatan strategi yang agile untuk memberikan saran bisnis yang relevan dan bernilai tambah.',
    sections: [
      {
        id: 'ms-digital-disrupsi',
        title: 'Disrupsi Digital dan Dampaknya terhadap Industri',
        content: 'Disrupsi digital terjadi ketika teknologi baru mengubah cara nilai diciptakan, didistribusikan, dan ditangkap dalam suatu industri, sehingga pemain lama yang tidak beradaptasi kehilangan posisi kompetitifnya. Disrupsi berbeda dari inovasi sustaining; disrupsi menciptakan pasar baru atau mengubah pasar yang ada secara radikal.',
        tables: [
          {
            headers: ['Industri', 'Disruptor', 'Teknologi Pemungkin', 'Dampak pada Pemain Lama'],
            rows: [
              ['Perbankan ritel', 'Fintech, neobank', 'Mobile banking, AI, blockchain', 'Penurunan nasabah, tekanan margin, penutupan cabang'],
              ['Akuntansi publik', 'Software akuntansi berbasis AI', 'Cloud computing, machine learning, RPA', 'Otomasi pekerjaan rutin, pergeseran ke advisory'],
              ['Transportasi', 'Ride-hailing apps', 'GPS, platform digital, big data', 'Penurunan pendapatan taksi konvensional'],
              ['Ritel', 'E-commerce', 'Internet, logistik digital, pembayaran digital', 'Penutupan toko fisik, margin tertekan'],
            ],
            caption: 'Contoh disrupsi digital di berbagai industri',
          },
        ],
        rules: [
          'Disrupsi Clayton Christensen: inovasi disruptif dimulai dari segmen low-end atau non-konsumsi, lalu bergerak ke atas menggeser pemain mapan.',
          'Respons terhadap disrupsi: abaikan (berbahaya), ikuti (terlambat), pimpin (ideal), atau kemitraan strategis.',
          'Perusahaan yang bertahan dari disrupsi umumnya memiliki kemampuan ambidextrous: mengeksploitasi bisnis inti sekaligus mengeksplorasi inovasi baru.',
        ],
        notes: [
          'Dalam konteks CA Indonesia, pemahaman disrupsi digital relevan untuk pertanyaan analisis lingkungan bisnis (PESTEL) dan rekomendasi strategi kompetitif.',
        ],
      },
      {
        id: 'ms-digital-business-model',
        title: 'Inovasi Model Bisnis',
        content: 'Model bisnis mendeskripsikan logika bagaimana organisasi menciptakan, menyampaikan, dan menangkap nilai. Inovasi model bisnis sering kali lebih sulit ditiru pesaing dibandingkan inovasi produk karena menyentuh keseluruhan sistem operasi perusahaan. Business Model Canvas (BMC) adalah alat standar untuk memvisualisasikan dan merancang model bisnis.',
        diagram: 'BMC: Key Partners | Key Activities | Value Proposition | Customer Relationships | Customer Segments\n        Key Resources | Channels\n        Cost Structure | Revenue Streams',
        tables: [
          {
            headers: ['Blok BMC', 'Pertanyaan Kunci', 'Relevansi bagi Akuntan'],
            rows: [
              ['Value Proposition', 'Nilai apa yang kami tawarkan kepada pelanggan?', 'Dasar justifikasi pendapatan dan penetapan harga'],
              ['Revenue Streams', 'Bagaimana kami menghasilkan pendapatan?', 'Klasifikasi pendapatan sesuai PSAK 72'],
              ['Cost Structure', 'Biaya apa yang paling penting?', 'Analisis biaya, efisiensi, dan margin'],
              ['Key Resources', 'Aset apa yang diperlukan?', 'Pengakuan aset, termasuk aset tidak berwujud'],
              ['Key Partners', 'Mitra siapa yang kami butuhkan?', 'Konsolidasi, perjanjian kerjasama, off-balance sheet'],
            ],
            caption: 'Sembilan blok Business Model Canvas dan relevansinya bagi akuntan',
          },
        ],
        examples: [
          'Model freemium: layanan dasar gratis, premium berbayar. Contoh: software akuntansi dengan tier gratis dan berbayar.',
          'Model platform/marketplace: menghubungkan dua sisi pasar. Contoh: e-commerce menghubungkan penjual dan pembeli.',
          'Model berlangganan (subscription): pendapatan berulang. Contoh: cloud ERP dengan biaya bulanan per pengguna.',
          'Model razor-and-blade: produk inti dijual murah, konsumable dijual mahal. Contoh: printer murah, tinta mahal.',
        ],
      },
      {
        id: 'ms-digital-agile',
        title: 'Agile Strategy dan Perencanaan Adaptif',
        content: 'Agile strategy adalah pendekatan perencanaan strategis yang menggabungkan visi jangka panjang dengan kemampuan adaptasi yang cepat terhadap perubahan lingkungan. Dalam konteks VUCA (Volatility, Uncertainty, Complexity, Ambiguity), perencanaan strategis konvensional berbasis 5 tahun sering kali sudah usang sebelum diimplementasikan.',
        rules: [
          'Agile strategy mempertahankan tujuan strategis jangka panjang (destination) tetapi fleksibel dalam cara mencapainya (route).',
          'Siklus perencanaan dipersingkat: rencana tahunan dipecah menjadi sprint atau kuartal dengan review dan penyesuaian rutin.',
          'Pengambilan keputusan didelegasikan lebih dekat ke garis depan untuk mempercepat respons terhadap peluang dan ancaman.',
          'Data dan umpan balik pelanggan menggantikan asumsi multi-tahun sebagai dasar pengambilan keputusan.',
          'Eksperimen terstruktur (build-measure-learn) digunakan untuk menguji hipotesis strategis sebelum komitmen penuh sumber daya.',
        ],
        notes: [
          'Pendekatan OKR (Objectives and Key Results) yang dipopulerkan Google adalah implementasi agile strategy yang banyak diadopsi.',
          'Dalam ujian CA, pertanyaan terkait agile strategy sering muncul dalam konteks pertimbangan manajemen risiko dan alokasi sumber daya.',
        ],
        examples: [
          'Perusahaan menggunakan quarterly business review (QBR) untuk mengevaluasi asumsi strategis dan mengalokasikan ulang anggaran berdasarkan data terbaru, bukan siklus anggaran tahunan yang kaku.',
        ],
      },
      {
        id: 'ms-digital-kesiapan',
        title: 'Penilaian Kesiapan Transformasi Digital',
        content: 'Sebelum memulai transformasi digital, organisasi perlu menilai kesiapannya secara menyeluruh dari dimensi teknologi, proses, manusia, dan budaya. Penilaian yang tidak memadai adalah penyebab utama kegagalan program transformasi digital.',
        tables: [
          {
            headers: ['Dimensi', 'Aspek yang Dinilai', 'Pertanyaan Diagnostik'],
            rows: [
              ['Teknologi', 'Infrastruktur IT, sistem warisan, keamanan siber', 'Apakah sistem lama dapat diintegrasikan atau perlu diganti?'],
              ['Proses', 'Digitalisasi proses, otomasi, standarisasi', 'Proses mana yang paling siap dan paling menguntungkan untuk didigitalisasi?'],
              ['Manusia', 'Kompetensi digital, resistensi perubahan, kepemimpinan', 'Apakah pemimpin dan karyawan memiliki kemampuan dan kemauan untuk berubah?'],
              ['Budaya', 'Toleransi terhadap eksperimen, kolaborasi, orientasi data', 'Apakah budaya organisasi mendukung inovasi dan pengambilan keputusan berbasis data?'],
              ['Data', 'Kualitas data, tata kelola data, analitik', 'Apakah data yang ada cukup akurat dan tersedia untuk mendukung keputusan digital?'],
            ],
            caption: 'Lima dimensi penilaian kesiapan transformasi digital',
          },
        ],
        warning: 'Transformasi digital yang gagal sering disebabkan bukan oleh masalah teknologi, melainkan oleh resistensi budaya dan kurangnya sponsor dari manajemen puncak. Investasi pada perangkat lunak tanpa perubahan proses dan kompetensi manusia tidak akan menghasilkan transformasi yang sesungguhnya.',
      },
    ],
  },
];

// =============================================
// ETIKA TATA KELOLA — EXTRA CHAPTERS
// =============================================
export const etikaTataKelolaExtraChapters: FormalChapter[] = [
  {
    id: 'etika-kode-etik',
    title: 'Kode Etik Akuntan Profesional',
    description: 'Kode Etik Akuntan Profesional yang ditetapkan oleh IESBA (International Ethics Standards Board for Accountants) dan diadopsi oleh IAI mengatur standar perilaku tertinggi bagi seluruh akuntan profesional. Lima prinsip dasar etika membentuk fondasi integritas profesi akuntansi.',
    sections: [
      {
        id: 'etika-ke-prinsip',
        title: 'Lima Prinsip Dasar Etika IESBA',
        content: 'Kode Etik IESBA menetapkan lima prinsip dasar yang wajib dipatuhi oleh seluruh akuntan profesional, baik yang berpraktik publik maupun yang bekerja di sektor bisnis dan industri. Prinsip-prinsip ini bersifat berbasis prinsip (principle-based), bukan sekadar daftar aturan, sehingga akuntan dituntut untuk menggunakan pertimbangan profesional.',
        tables: [
          {
            headers: ['Prinsip', 'Definisi', 'Ancaman Umum', 'Pengamanan'],
            rows: [
              ['Integritas', 'Bersikap jujur dan terus terang dalam semua hubungan profesional dan bisnis', 'Tekanan dari manajemen untuk menyajikan informasi yang menyesatkan', 'Eskalasi ke otoritas yang lebih tinggi, pengunduran diri dari perikatan'],
              ['Objektivitas', 'Tidak membiarkan bias, konflik kepentingan, atau pengaruh yang tidak semestinya mengalahkan pertimbangan profesional', 'Kepentingan keuangan, hubungan pribadi dengan klien', 'Pengungkapan kepentingan, rotasi personel, independence safeguard'],
              ['Kompetensi dan Kehati-hatian Profesional', 'Mempertahankan pengetahuan dan keahlian profesional pada tingkat yang diperlukan', 'Menerima penugasan di luar kompetensi, tidak mengikuti perkembangan standar', 'CPE berkelanjutan, supervisi yang memadai, kolaborasi ahli'],
              ['Kerahasiaan', 'Menghormati kerahasiaan informasi yang diperoleh dari hubungan profesional', 'Tekanan pihak ketiga, kebocoran data tidak sengaja', 'Kebijakan kerahasiaan, NDA, keamanan data'],
              ['Perilaku Profesional', 'Mematuhi hukum dan regulasi yang berlaku dan menghindari tindakan yang mendiskreditkan profesi', 'Pemasaran yang berlebihan, pelanggaran regulasi', 'Pemahaman regulasi, review internal, kode etik internal perusahaan'],
            ],
            caption: 'Lima prinsip dasar etika IESBA beserta ancaman dan pengamanan',
          },
        ],
        rules: [
          'Pendekatan konseptual IESBA: identifikasi ancaman (threats), evaluasi signifikansi ancaman, terapkan pengamanan (safeguards) jika ancaman signifikan.',
          'Jika ancaman tidak dapat dikurangi ke tingkat yang dapat diterima, akuntan harus menolak atau mengundurkan diri dari penugasan.',
          'Prinsip etika berlaku dalam semua situasi profesional, tidak hanya dalam pekerjaan resmi.',
        ],
        notes: [
          'IAI mengadopsi Kode Etik berbasis IESBA dengan penyesuaian untuk konteks Indonesia.',
          'Pelanggaran kode etik dapat mengakibatkan sanksi profesional, pencabutan izin praktik, dan tuntutan hukum.',
        ],
      },
      {
        id: 'etika-ke-ancaman',
        title: 'Kerangka Ancaman dan Pengamanan',
        content: 'IESBA mengidentifikasi enam kategori ancaman utama terhadap kepatuhan pada prinsip dasar etika. Setiap akuntan profesional harus mampu mengidentifikasi, mengevaluasi, dan merespons ancaman-ancaman ini dalam situasi nyata.',
        tables: [
          {
            headers: ['Jenis Ancaman', 'Deskripsi', 'Contoh Situasi'],
            rows: [
              ['Self-interest', 'Kepentingan keuangan atau kepentingan lain memengaruhi pertimbangan', 'Memiliki saham di perusahaan klien audit, fee yang sangat besar dari satu klien'],
              ['Self-review', 'Mengevaluasi hasil pekerjaan yang sebelumnya dilakukan sendiri', 'Tim audit mengevaluasi sistem akuntansi yang dirancang oleh tim konsultansi dari firma yang sama'],
              ['Advocacy', 'Mempromosikan posisi klien hingga mengorbankan objektivitas', 'Bertindak sebagai penasihat hukum sekaligus auditor untuk kasus yang sama'],
              ['Familiarity', 'Terlalu dekat dengan klien sehingga kehilangan skeptisisme profesional', 'Hubungan keluarga dengan manajemen klien, penugasan yang terlalu lama'],
              ['Intimidation', 'Ancaman nyata atau persepsi ancaman yang memengaruhi pertimbangan', 'Klien mengancam akan mengganti auditor jika opini tidak sesuai keinginan'],
              ['Management participation', 'Mengambil peran manajemen dalam keputusan klien', 'Akuntan publik yang juga merangkap sebagai pejabat sementara perusahaan klien'],
            ],
            caption: 'Enam kategori ancaman terhadap prinsip etika',
          },
        ],
        examples: [
          'Situasi: Seorang akuntan diminta manajemen untuk tidak mengungkapkan kewajiban kontinjensi yang signifikan karena khawatir dampak terhadap harga saham. Ancaman: Intimidation dan self-interest. Tindakan: Akuntan harus mempertahankan integritas dan objektivitas; jika diperlukan, konsultasikan dengan konselor etika atau atasan, dan jika masalah tidak terselesaikan, pertimbangkan pengunduran diri.',
        ],
        warning: 'Tidak adanya pelanggaran yang terdeteksi bukan berarti tidak ada ancaman etika. Akuntan profesional harus secara proaktif mengevaluasi situasi yang berpotensi menimbulkan ancaman, bukan hanya merespons pelanggaran yang sudah terjadi.',
      },
      {
        id: 'etika-ke-independensi',
        title: 'Independensi dalam Audit',
        content: 'Independensi adalah pilar utama kepercayaan publik terhadap profesi audit. IESBA membedakan antara independensi pikiran (independence of mind) dan independensi dalam penampilan (independence in appearance). Keduanya harus dijaga secara bersamaan.',
        rules: [
          'Independensi pikiran: kondisi mental yang memungkinkan auditor mengungkapkan kesimpulan tanpa dipengaruhi oleh faktor-faktor yang mengorbankan pertimbangan profesional.',
          'Independensi dalam penampilan: menghindari fakta dan keadaan yang sedemikian signifikan sehingga pihak ketiga yang rasional akan menyimpulkan bahwa integritas, objektivitas, atau skeptisisme profesional telah terganggu.',
          'Pembatasan fee: fee dari satu klien tidak boleh melebihi 15% total fee firma (untuk klien listed) atau 15% (untuk klien non-listed) — evaluasi ancaman jika mendekati batas.',
          'Larangan kepemilikan saham: auditor dan anggota keluarga inti dilarang memiliki kepentingan keuangan langsung pada klien audit.',
          'Rotasi partner audit: partner penanggung jawab wajib dirotasi setelah 5 tahun berturut-turut pada klien yang sama (entitas publik).',
        ],
        notes: [
          'POJK No. 13/POJK.03/2017 mengatur independensi akuntan publik dalam konteks Indonesia, dengan persyaratan rotasi KAP setiap 5 tahun untuk bank umum.',
          'Hubungan bisnis dengan klien (selain jasa profesional) dapat mengancam independensi dan harus dievaluasi dengan hati-hati.',
        ],
      },
      {
        id: 'etika-ke-whistleblowing',
        title: 'Pengungkapan Pelanggaran (Whistleblowing)',
        content: 'Ketika akuntan profesional mengetahui adanya pelanggaran hukum atau regulasi dalam organisasi tempat bekerja atau klien, mereka menghadapi dilema etika yang kompleks antara kewajiban kerahasiaan dan kewajiban kepada kepentingan publik yang lebih luas.',
        steps: [
          'Evaluasi fakta: kumpulkan informasi yang cukup untuk memastikan ada dugaan pelanggaran yang substantif.',
          'Konsultasikan dengan atasan langsung atau manajemen senior secara internal.',
          'Jika tidak ditanggapi, eskalasikan kepada dewan komisaris atau komite audit.',
          'Konsultasikan dengan penasihat hukum mengenai kewajiban dan perlindungan hukum.',
          'Evaluasi apakah pengungkapan eksternal (kepada regulator) diperlukan atau diwajibkan hukum.',
          'Pertimbangkan apakah melanjutkan hubungan profesional masih dapat dipertanggungjawabkan secara etis.',
        ],
        rules: [
          'Kerahasiaan tidak melindungi akuntan yang menyembunyikan pelanggaran hukum material.',
          'Beberapa yurisdiksi dan regulasi mewajibkan pengungkapan kepada otoritas tertentu (mandatory reporting).',
          'Pengungkapan yang dilakukan dengan itikad baik umumnya mendapat perlindungan hukum bagi whistleblower.',
        ],
        warning: 'Melakukan tindakan pembalasan (retaliation) terhadap whistleblower adalah pelanggaran etika serius dan umumnya melanggar hukum. Akuntan yang menjadi korban pembalasan karena melaporkan pelanggaran berhak atas perlindungan hukum.',
      },
    ],
  },
  {
    id: 'etika-tata-kelola',
    title: 'Tata Kelola Perusahaan (Corporate Governance)',
    description: 'Tata kelola perusahaan yang baik (Good Corporate Governance/GCG) adalah sistem yang mengatur dan mengendalikan perusahaan untuk menciptakan nilai tambah bagi semua pemangku kepentingan. Dewan komisaris, komite audit, dan prinsip-prinsip GCG membentuk arsitektur akuntabilitas perusahaan.',
    sections: [
      {
        id: 'etika-tkg-prinsip',
        title: 'Prinsip-Prinsip GCG',
        content: 'Prinsip GCG yang diacu secara internasional bersumber dari G20/OECD Principles of Corporate Governance. Di Indonesia, Komite Nasional Kebijakan Governance (KNKG) menerbitkan Pedoman Umum GCG Indonesia yang mengadopsi prinsip-prinsip tersebut dengan penyesuaian konteks lokal.',
        tables: [
          {
            headers: ['Prinsip', 'Singkatan', 'Deskripsi', 'Implementasi Praktis'],
            rows: [
              ['Transparency', 'T', 'Keterbukaan dalam pengambilan keputusan dan pengungkapan informasi yang relevan', 'Laporan tahunan komprehensif, pengungkapan tepat waktu kepada pasar'],
              ['Accountability', 'A', 'Kejelasan fungsi, pelaksanaan, dan pertanggungjawaban organ perusahaan', 'Job description yang jelas, laporan pertanggungjawaban, audit internal'],
              ['Responsibility', 'R', 'Kepatuhan terhadap hukum dan regulasi serta tanggung jawab terhadap masyarakat', 'Program CSR, kepatuhan perpajakan, kepatuhan lingkungan'],
              ['Independency', 'I', 'Pengelolaan perusahaan secara profesional tanpa konflik kepentingan', 'Komisaris independen, komite audit independen, kebijakan konflik kepentingan'],
              ['Fairness', 'F', 'Keadilan dan kesetaraan dalam memenuhi hak pemangku kepentingan', 'Perlindungan pemegang saham minoritas, kebijakan dividen yang adil'],
            ],
            caption: 'Lima prinsip GCG (TARIF) dan implementasi praktisnya',
          },
        ],
        notes: [
          'Akronim TARIF memudahkan penghafalan lima prinsip GCG dalam konteks ujian CA Indonesia.',
          'POJK No. 21/POJK.04/2015 mengatur penerapan pedoman tata kelola perusahaan terbuka di Indonesia.',
        ],
      },
      {
        id: 'etika-tkg-dewan',
        title: 'Dewan Komisaris dan Direksi',
        content: 'Sistem tata kelola Indonesia menggunakan sistem dua tingkat (two-tier board system) yang memisahkan fungsi pengawasan (dewan komisaris) dari fungsi manajemen (direksi). Pemisahan ini berbeda dari sistem satu tingkat (one-tier/unitary board) yang berlaku di banyak negara common law.',
        tables: [
          {
            headers: ['Aspek', 'Dewan Komisaris', 'Direksi'],
            rows: [
              ['Fungsi utama', 'Pengawasan dan pemberian nasihat', 'Pengurusan perusahaan sehari-hari'],
              ['Pertanggungjawaban kepada', 'RUPS', 'Dewan komisaris dan RUPS'],
              ['Persyaratan independensi', 'Min. 30% komisaris independen (emiten)', 'Tidak ada persyaratan independensi'],
              ['Kewenangan representasi', 'Tidak mewakili perusahaan dalam kontrak (kecuali khusus)', 'Mewakili perusahaan ke pihak ketiga'],
              ['Pengangkatan', 'RUPS', 'RUPS (atas rekomendasi dewan komisaris)'],
            ],
            caption: 'Perbedaan dewan komisaris dan direksi dalam sistem two-tier Indonesia',
          },
        ],
        rules: [
          'Komisaris independen wajib memenuhi syarat: tidak terafiliasi dengan pemegang saham pengendali, direksi, atau komisaris lainnya.',
          'Dewan komisaris wajib membentuk komite audit dan dapat membentuk komite nominasi, remunerasi, dan pemantau risiko.',
          'Setiap anggota direksi bertanggung jawab secara tanggung renteng atas kerugian perusahaan akibat kesalahan atau kelalaian (kecuali dapat membuktikan tidak bersalah).',
          'Rapat dewan komisaris minimal 1 kali per 2 bulan; rapat direksi minimal 1 kali per bulan (untuk perusahaan terbuka).',
        ],
      },
      {
        id: 'etika-tkg-komite-audit',
        title: 'Komite Audit',
        content: 'Komite audit adalah organ dewan komisaris yang bertugas membantu dewan komisaris dalam fungsi pengawasan, khususnya terkait pelaporan keuangan, pengendalian internal, audit internal, dan audit eksternal. Keberadaan komite audit yang efektif merupakan pilar penting GCG.',
        rules: [
          'Komite audit wajib dibentuk oleh emiten dan perusahaan publik berdasarkan POJK No. 55/POJK.04/2015.',
          'Komite audit terdiri dari minimal 3 orang: 1 ketua (komisaris independen) dan 2 anggota independen dari luar perusahaan.',
          'Ketua komite audit adalah komisaris independen perusahaan.',
          'Minimal 1 anggota komite audit harus memiliki latar belakang pendidikan dan keahlian di bidang akuntansi dan/atau keuangan.',
          'Masa jabatan anggota komite audit paling lama sama dengan masa jabatan komisaris independen dan dapat diperpanjang maksimal 1 kali.',
        ],
        tables: [
          {
            headers: ['Tugas dan Tanggung Jawab', 'Detail'],
            rows: [
              ['Pelaporan keuangan', 'Menelaah informasi keuangan yang akan dikeluarkan, termasuk laporan keuangan, proyeksi, dan laporan lainnya'],
              ['Auditor eksternal', 'Menelaah independensi dan objektivitas KAP, menelaah kecukupan pemeriksaan, merekomendasikan penunjukan KAP'],
              ['Auditor internal', 'Menelaah aktivitas dan temuan audit internal, memastikan fungsi audit internal berjalan efektif'],
              ['Pengendalian internal', 'Menelaah efektivitas sistem pengendalian internal dan manajemen risiko'],
              ['Kepatuhan', 'Menelaah kepatuhan perusahaan terhadap peraturan perundang-undangan di bidang pasar modal'],
              ['Pengaduan', 'Menelaah pengaduan yang berkaitan dengan proses akuntansi dan pelaporan keuangan perusahaan'],
            ],
            caption: 'Tugas dan tanggung jawab komite audit',
          },
        ],
        examples: [
          'Dalam kasus fraud pelaporan keuangan, komite audit yang efektif seharusnya mendeteksi tanda-tanda awal melalui: penelaahan kritis terhadap estimasi akuntansi yang agresif, pertanyaan mendalam kepada auditor eksternal tentang area risiko signifikan, dan pengawasan aktif terhadap temuan audit internal.',
        ],
      },
      {
        id: 'etika-tkg-rups',
        title: 'Hak Pemegang Saham dan RUPS',
        content: 'Rapat Umum Pemegang Saham (RUPS) adalah organ tertinggi perusahaan yang memiliki wewenang yang tidak diberikan kepada direksi atau dewan komisaris. Perlindungan hak pemegang saham, khususnya pemegang saham minoritas, merupakan inti dari prinsip fairness dalam GCG.',
        rules: [
          'RUPS Tahunan (RUPST) wajib diselenggarakan paling lambat 6 bulan setelah tahun buku berakhir.',
          'RUPS Luar Biasa (RULBS) dapat diselenggarakan sewaktu-waktu berdasarkan kebutuhan.',
          'Pemegang saham yang memiliki minimal 10% dari total saham dengan hak suara dapat meminta penyelenggaraan RUPS.',
          'Keputusan RUPS untuk aksi korporasi tertentu (merger, akuisisi, perubahan anggaran dasar) memerlukan kuorum dan persetujuan khusus.',
          'Pemegang saham minoritas berhak atas informasi yang sama dengan pemegang saham mayoritas (one share one vote principle).',
        ],
        notes: [
          'Squeeze-out atau pemaksaan pembelian saham minoritas hanya diperbolehkan dalam kondisi dan prosedur yang diatur ketat oleh hukum.',
          'Transaksi antara pihak berelasi yang dapat merugikan pemegang saham minoritas wajib mendapat persetujuan pemegang saham independen.',
        ],
      },
    ],
  },
];

// =============================================
// STUDI KASUS — EXTRA CHAPTERS
// =============================================
export const studiKasusExtraChapters: FormalChapter[] = [
  {
    id: 'sk-kerangka-analisis',
    title: 'Kerangka Analisis Kasus Terpadu',
    description: 'Analisis kasus terpadu dalam ujian CA Indonesia menuntut kemampuan mengintegrasikan pengetahuan dari berbagai disiplin ilmu akuntansi dan bisnis untuk mengidentifikasi isu, menganalisis dengan kedalaman yang memadai, dan merumuskan rekomendasi yang terstruktur dan dapat ditindaklanjuti.',
    sections: [
      {
        id: 'sk-ka-identifikasi',
        title: 'Identifikasi dan Prioritisasi Isu',
        content: 'Langkah pertama dan paling kritis dalam analisis kasus adalah mengidentifikasi semua isu yang relevan dan memprioritaskannya berdasarkan signifikansi dan urgensi. Peserta ujian yang gagal sering kali menghabiskan waktu pada isu minor sambil melewatkan isu utama yang merupakan inti permasalahan.',
        steps: [
          'Baca seluruh kasus sekali tanpa mencatat untuk mendapat gambaran besar.',
          'Baca ulang dengan aktif menandai kata kunci, angka penting, dan pernyataan yang mengindikasikan masalah.',
          'Kategorikan isu berdasarkan bidang: akuntansi keuangan, audit, perpajakan, manajemen, etika, hukum bisnis.',
          'Prioritaskan isu menggunakan matriks signifikansi x dampak: tinggi-tinggi (selesaikan pertama), tinggi-rendah, rendah-tinggi, rendah-rendah.',
          'Identifikasi hubungan antar isu: apakah ada isu yang saling terkait atau satu isu yang menjadi akar dari isu lainnya.',
          'Alokasikan waktu pengerjaan berdasarkan bobot poin dan kompleksitas setiap isu.',
        ],
        tables: [
          {
            headers: ['Kategori Isu', 'Indikator dalam Teks Kasus', 'Standar/Regulasi Relevan'],
            rows: [
              ['Pengakuan pendapatan', 'Kontrak dengan pelanggan, milestone, variabel pertimbangan', 'PSAK 72'],
              ['Aset tetap dan penyusutan', 'Pembelian, renovasi, revaluasi, nilai sisa, umur manfaat', 'PSAK 16'],
              ['Instrumen keuangan', 'Investasi, pinjaman, derivatif, klasifikasi', 'PSAK 71'],
              ['Konsolidasi', 'Anak perusahaan, pengendalian, kepemilikan minoritas', 'PSAK 65'],
              ['Etika profesi', 'Konflik kepentingan, tekanan manajemen, kecurangan', 'Kode Etik IESBA'],
              ['Perpajakan', 'Perbedaan temporer, pajak tangguhan, sengketa pajak', 'UU PPh, PSAK 46'],
            ],
            caption: 'Panduan identifikasi kategori isu dalam kasus terpadu',
          },
        ],
        warning: 'Jangan langsung menghitung atau menulis jawaban sebelum mengidentifikasi seluruh isu. Melewatkan isu utama karena terburu-buru adalah kesalahan paling umum yang menyebabkan nilai rendah dalam ujian kasus.',
      },
      {
        id: 'sk-ka-multidisiplin',
        title: 'Analisis Multidisiplin',
        content: 'Kasus terpadu CA Indonesia dirancang untuk menguji kemampuan mengintegrasikan pengetahuan dari berbagai mata pelajaran. Jawaban yang hanya menganalisis dari satu perspektif tidak akan mendapat nilai penuh, meskipun analisis tersebut sangat mendalam.',
        rules: [
          'Setiap isu material harus dianalisis dari minimal dua perspektif yang relevan (misalnya: keuangan dan pajak, atau audit dan etika).',
          'Kutip standar dan regulasi yang relevan secara spesifik; jangan hanya menyebutkan "sesuai PSAK" tanpa nomor.',
          'Pertimbangan kualitatif (etika, tata kelola, risiko) sama pentingnya dengan perhitungan kuantitatif.',
          'Gunakan fakta spesifik dari kasus sebagai dasar analisis; jangan membuat asumsi yang tidak didukung kasus.',
        ],
        examples: [
          'Kasus akuisisi perusahaan: analisis mencakup (1) akuntansi bisnis kombinasi sesuai PSAK 22, (2) implikasi pajak atas akuisisi, (3) due diligence risiko dan audit atas aset yang diakuisisi, (4) pertimbangan tata kelola dan persetujuan RUPS, (5) implikasi etika jika ada konflik kepentingan komisaris.',
          'Kasus restrukturisasi utang: analisis mencakup (1) penghapusan utang dan pengakuan keuntungan sesuai PSAK 55/71, (2) implikasi pajak atas penghapusan utang, (3) going concern dan laporan auditor, (4) pengungkapan peristiwa setelah tanggal pelaporan.',
        ],
        diagram: 'ISU KASUS\n  |\n  |-- Akuntansi Keuangan (PSAK)\n  |-- Pelaporan Keuangan (Pengungkapan)\n  |-- Audit (Risiko, Prosedur, Opini)\n  |-- Perpajakan (PPh, PPN, Bea)\n  |-- Manajemen & Strategi (GCG, Risiko)\n  |-- Etika Profesi (Ancaman, Pengamanan)',
      },
      {
        id: 'sk-ka-rekomendasi',
        title: 'Penyusunan Rekomendasi Terstruktur',
        content: 'Rekomendasi yang baik dalam jawaban kasus bukan sekadar menyebutkan apa yang harus dilakukan, tetapi menjelaskan mengapa (landasan standar/hukum), bagaimana (langkah implementasi), dan dampak apa yang diharapkan. Rekomendasi tanpa justifikasi hanya mendapat kredit parsial.',
        steps: [
          'Mulai rekomendasi dengan pernyataan posisi yang jelas: "Perusahaan seharusnya/tidak seharusnya..."',
          'Berikan justifikasi berdasarkan standar, regulasi, atau prinsip yang relevan.',
          'Jelaskan implikasi kuantitatif jika relevan (dampak pada laporan keuangan, pajak, arus kas).',
          'Identifikasi risiko jika rekomendasi tidak diterapkan.',
          'Usulkan langkah-langkah implementasi yang spesifik dan terurut.',
          'Jika ada trade-off, akui dan jelaskan pertimbangan pro-kontra secara seimbang.',
        ],
        tables: [
          {
            headers: ['Komponen Rekomendasi', 'Pertanyaan yang Dijawab', 'Bobot Nilai Tipikal'],
            rows: [
              ['Pernyataan posisi', 'Apa yang harus dilakukan?', '10%'],
              ['Justifikasi standar/regulasi', 'Berdasarkan apa?', '30%'],
              ['Analisis dampak', 'Apa implikasinya?', '30%'],
              ['Langkah implementasi', 'Bagaimana melakukannya?', '20%'],
              ['Pertimbangan risiko', 'Apa yang perlu diwaspadai?', '10%'],
            ],
            caption: 'Komponen rekomendasi terstruktur dan bobot nilai tipikal',
          },
        ],
      },
      {
        id: 'sk-ka-integrasi',
        title: 'Teknik Integrasi Jawaban',
        content: 'Integrasi dalam konteks ujian kasus berarti menunjukkan kepada penguji bahwa kandidat memahami bagaimana berbagai aspek kasus saling berhubungan dan saling memengaruhi, bukan sekadar menjawab sub-pertanyaan secara terpisah.',
        rules: [
          'Identifikasi benang merah (central issue) yang menghubungkan berbagai sub-isu dalam kasus.',
          'Gunakan cross-reference dalam jawaban: "Sebagaimana dibahas dalam bagian perpajakan di atas, reklasifikasi aset ini juga berdampak pada..."',
          'Kesimpulan akhir harus merefleksikan gambaran menyeluruh, bukan sekadar merangkum sub-bagian.',
          'Tunjukkan kesadaran bahwa keputusan di satu area (misalnya akuntansi) berdampak pada area lain (pajak, audit, governance).',
        ],
        notes: [
          'Penguji ujian kasus CA memberikan nilai tambahan (integrative marks) khusus untuk jawaban yang menunjukkan kemampuan mengintegrasikan pengetahuan lintas bidang.',
          'Jawaban terpadu yang menghubungkan isu akuntansi dengan implikasi audit dan etika umumnya mendapat nilai lebih tinggi daripada tiga jawaban terpisah yang masing-masing sempurna.',
        ],
      },
    ],
  },
  {
    id: 'sk-penulisan-jawaban',
    title: 'Penulisan Jawaban Ujian Kasus',
    description: 'Penguasaan teknik penulisan jawaban ujian kasus sama pentingnya dengan penguasaan substansi materi. Teknik IRAC, struktur esai profesional, dan manajemen waktu yang baik memungkinkan kandidat mengomunikasikan pengetahuan mereka secara efektif dan meyakinkan.',
    sections: [
      {
        id: 'sk-pj-irac',
        title: 'Teknik IRAC dalam Menjawab Kasus',
        content: 'IRAC (Issue, Rule, Application, Conclusion) adalah kerangka penulisan jawaban yang terstruktur dan digunakan secara luas dalam ujian profesional tingkat tinggi. Teknik ini memastikan jawaban mencakup semua elemen yang diperlukan secara logis dan sistematis.',
        tables: [
          {
            headers: ['Elemen IRAC', 'Definisi', 'Panduan Penulisan', 'Proporsi Jawaban'],
            rows: [
              ['Issue (Isu)', 'Identifikasi masalah atau pertanyaan yang harus dijawab', 'Nyatakan isu secara spesifik, bukan generik. "Apakah pendapatan dari kontrak X harus diakui pada bulan Maret atau April?" bukan "Masalah pengakuan pendapatan."', '10%'],
              ['Rule (Aturan)', 'Standar, regulasi, atau prinsip yang berlaku', 'Kutip nomor PSAK, pasal UU, atau prinsip etika yang spesifik. Jelaskan persyaratan kunci yang relevan dengan isu.', '25%'],
              ['Application (Penerapan)', 'Terapkan aturan pada fakta kasus', 'Gunakan fakta spesifik dari kasus. Tunjukkan bagaimana aturan berlaku pada situasi konkret. Ini adalah bagian terpanjang dan paling bernilai.', '50%'],
              ['Conclusion (Kesimpulan)', 'Simpulkan jawaban atas isu yang diidentifikasi', 'Nyatakan kesimpulan secara langsung dan jelas. Jika ada ketidakpastian, nyatakan asumsi yang digunakan.', '15%'],
            ],
            caption: 'Kerangka IRAC dan panduan penggunaannya',
          },
        ],
        examples: [
          'Isu: Apakah PT Maju harus mengakui pendapatan dari kontrak konstruksi senilai Rp 10 miliar pada tahun ini? | Aturan: PSAK 72 paragraf 31-38 mensyaratkan entitas mengakui pendapatan sepanjang waktu jika salah satu dari tiga kriteria terpenuhi, termasuk jika pelanggan memperoleh dan mengonsumsi manfaat secara simultan. | Penerapan: Kontrak konstruksi PT Maju memenuhi kriteria kedua (aset yang dibuat tidak memiliki penggunaan alternatif bagi PT Maju) dan ketiga (PT Maju memiliki hak yang dapat dipaksakan atas pembayaran kinerja sampai saat ini berdasarkan Pasal 5 kontrak). Progress completion sebesar 40% mengindikasikan pengakuan Rp 4 miliar. | Kesimpulan: PT Maju wajib mengakui pendapatan sebesar Rp 4 miliar pada tahun ini berdasarkan metode percentage of completion sesuai PSAK 72.',
        ],
      },
      {
        id: 'sk-pj-struktur-esai',
        title: 'Struktur Esai Profesional',
        content: 'Jawaban ujian kasus CA yang baik mengikuti struktur esai profesional yang memudahkan penguji mengikuti alur pemikiran dan memberikan kredit untuk setiap poin yang relevan. Struktur yang buruk dapat mengakibatkan poin yang benar tidak mendapat kredit karena penguji tidak dapat menemukannya.',
        rules: [
          'Gunakan heading dan sub-heading yang jelas untuk setiap isu atau bagian pertanyaan.',
          'Setiap paragraf membahas satu poin utama; jangan mencampur beberapa poin dalam satu paragraf panjang.',
          'Gunakan bullet points atau numbered list untuk daftar kriteria, langkah-langkah, atau perbandingan.',
          'Sajikan perhitungan dalam format yang terstruktur dengan label yang jelas, bukan sebagai bagian dari teks naratif.',
          'Gunakan tabel untuk perbandingan atau rangkuman ketika memungkinkan.',
          'Kesimpulan setiap isu harus eksplisit dan tidak ambigu.',
        ],
        notes: [
          'Penguji ujian CA umumnya menggunakan marking guide berbasis poin; jawaban yang terstruktur lebih mudah di-scoring dan jarang kehilangan poin yang sebenarnya diperoleh.',
          'Tulisan tangan yang tidak terbaca adalah risiko nyata dalam ujian tertulis; luangkan waktu untuk menulis dengan jelas meski di bawah tekanan waktu.',
        ],
        diagram: 'STRUKTUR JAWABAN KASUS\n1. Identifikasi Isu (singkat, 1-2 kalimat)\n2. Analisis per Isu:\n   a. Isu 1:\n      - Aturan yang berlaku\n      - Penerapan pada fakta\n      - Perhitungan (jika ada)\n      - Kesimpulan\n   b. Isu 2: [struktur sama]\n3. Rekomendasi Terpadu\n4. Kesimpulan Keseluruhan',
      },
      {
        id: 'sk-pj-waktu',
        title: 'Manajemen Waktu dalam Penulisan Jawaban',
        content: 'Manajemen waktu yang efektif memastikan kandidat menjawab semua pertanyaan dengan alokasi yang proporsional terhadap bobot nilai, bukan menghabiskan seluruh waktu pada pertanyaan pertama sambil meninggalkan pertanyaan lain tidak terjawab.',
        steps: [
          'Baca seluruh soal sebelum mulai menjawab untuk mendapat gambaran keseluruhan.',
          'Hitung alokasi waktu: total waktu dibagi sesuai bobot poin. Contoh: 180 menit untuk 100 poin = 1,8 menit per poin.',
          'Mulai dari pertanyaan yang paling dikuasai untuk membangun momentum dan mengamankan poin.',
          'Tetapkan batas waktu keras untuk setiap pertanyaan dan patuhi batas tersebut.',
          'Jika satu pertanyaan memakan waktu lebih lama dari alokasi, tulis poin-poin kunci dan lanjut ke pertanyaan berikutnya.',
          'Sisakan 10-15 menit di akhir untuk review, melengkapi poin yang terlewat, dan memeriksa konsistensi jawaban.',
        ],
        tables: [
          {
            headers: ['Fase', 'Aktivitas', 'Alokasi Waktu (dari total)'],
            rows: [
              ['Perencanaan awal', 'Baca semua soal, buat kerangka jawaban, alokasikan waktu', '10%'],
              ['Penulisan jawaban', 'Tulis jawaban sesuai urutan prioritas dan alokasi waktu', '75%'],
              ['Review dan finalisasi', 'Periksa kelengkapan, konsistensi, dan kejelasan jawaban', '15%'],
            ],
            caption: 'Alokasi waktu yang disarankan dalam ujian kasus',
          },
        ],
        warning: 'Kesalahan manajemen waktu yang paling fatal adalah tidak menjawab satu pertanyaan sama sekali. Menjawab semua pertanyaan dengan kualitas sedang jauh lebih baik daripada menjawab dua pertanyaan sempurna dan membiarkan satu pertanyaan kosong.',
      },
    ],
  },
];

// =============================================
// PSAK STANDAR — EXTRA CHAPTERS
// =============================================
export const psakStandarExtraChapters: FormalChapter[] = [
  {
    id: 'psak-72',
    title: 'PSAK 72: Pendapatan dari Kontrak dengan Pelanggan',
    description: 'PSAK 72, yang mengadopsi IFRS 15, mengatur pengakuan pendapatan dari kontrak dengan pelanggan melalui model lima langkah (five-step model). Standar ini menggantikan PSAK 23 dan PSAK 34 serta mengubah secara fundamental cara entitas mengakui pendapatan, efektif berlaku untuk entitas Indonesia sejak 1 Januari 2020.',
    sections: [
      {
        id: 'psak72-lima-langkah',
        title: 'Lima Langkah Pengakuan Pendapatan (Five-Step Model)',
        content: 'PSAK 72 menetapkan kerangka lima langkah yang harus diterapkan secara berurutan untuk setiap kontrak dengan pelanggan. Langkah-langkah ini memastikan pendapatan diakui dengan cara yang menggambarkan pengalihan barang atau jasa kepada pelanggan sebesar jumlah yang mencerminkan imbalan yang menjadi hak entitas.',
        steps: [
          'Langkah 1 - Identifikasi kontrak dengan pelanggan: kontrak harus memenuhi kriteria: (a) para pihak menyetujui kontrak dan berkomitmen untuk memenuhi kewajiban; (b) hak setiap pihak atas barang/jasa yang akan dialihkan dapat diidentifikasi; (c) syarat pembayaran dapat diidentifikasi; (d) kontrak memiliki substansi komersial; (e) kemungkinan entitas akan menagih imbalan.',
          'Langkah 2 - Identifikasi kewajiban pelaksanaan: identifikasi setiap janji untuk mengalihkan barang atau jasa yang berbeda (distinct) kepada pelanggan. Barang/jasa berbeda jika pelanggan dapat memperoleh manfaat dari barang/jasa tersebut secara sendiri atau bersama sumber daya lain yang tersedia.',
          'Langkah 3 - Penetapan harga transaksi: tentukan jumlah imbalan yang menjadi hak entitas sebagai imbalan pengalihan barang/jasa. Pertimbangkan variabel pertimbangan, komponen keuangan signifikan, dan imbalan non-kas.',
          'Langkah 4 - Alokasi harga transaksi ke kewajiban pelaksanaan: alokasikan harga transaksi berdasarkan harga jual berdiri sendiri (standalone selling price) relatif dari setiap kewajiban pelaksanaan.',
          'Langkah 5 - Pengakuan pendapatan ketika kewajiban pelaksanaan dipenuhi: akui pendapatan ketika (atau sepanjang) entitas memenuhi kewajiban pelaksanaan dengan mengalihkan pengendalian barang/jasa kepada pelanggan.',
        ],
        diagram: 'Langkah 1: Identifikasi Kontrak\n  |\nLangkah 2: Identifikasi Kewajiban Pelaksanaan\n  |\nLangkah 3: Tentukan Harga Transaksi\n  |\nLangkah 4: Alokasi Harga Transaksi\n  |\nLangkah 5: Akui Pendapatan',
        tables: [
          {
            headers: ['Langkah', 'Pertanyaan Kunci', 'Pertimbangan Utama'],
            rows: [
              ['1. Identifikasi kontrak', 'Apakah ada kontrak yang sah?', 'Modifikasi kontrak, kombinasi kontrak, kontrak yang tidak tertulis'],
              ['2. Identifikasi kewajiban', 'Apa saja yang dijanjikan?', 'Distinct vs bundled, principal vs agen, lisensi vs jasa'],
              ['3. Harga transaksi', 'Berapa yang berhak diterima?', 'Variable consideration, constrained amount, significant financing component'],
              ['4. Alokasi', 'Berapa porsi tiap kewajiban?', 'Standalone selling price, observable vs estimated price'],
              ['5. Pengakuan', 'Kapan pendapatan diakui?', 'At a point in time vs over time, metode pengukuran kemajuan'],
            ],
            caption: 'Lima langkah PSAK 72 dan pertimbangan kunci',
          },
        ],
      },
      {
        id: 'psak72-variabel',
        title: 'Variable Consideration (Pertimbangan Variabel)',
        content: 'Pertimbangan variabel adalah bagian dari harga transaksi yang jumlahnya bergantung pada kejadian di masa depan, seperti diskon, rabat, pengembalian uang, kredit, harga mengambang, insentif kinerja, penalti, atau hak pengembalian. Entitas wajib mengestimasi pertimbangan variabel dan menerapkan constraint.',
        formula: 'Expected Value = Sigma (jumlah x probabilitas)\nMost Likely Amount = jumlah tunggal yang paling mungkin',
        rules: [
          'Gunakan expected value jika kontrak memiliki banyak kemungkinan hasil (banyak kontrak serupa).',
          'Gunakan most likely amount jika kontrak hanya memiliki dua kemungkinan hasil (tercapai/tidak).',
          'Variable consideration constraint: sertakan variabel consideration dalam harga transaksi hanya jika sangat mungkin (highly probable) tidak akan terjadi pembalikan (reversal) pendapatan yang signifikan di masa depan.',
          'Faktor yang meningkatkan kemungkinan reversal: sangat bergantung pada faktor di luar kendali entitas, ketidakpastian tinggi, pengalaman masa lalu terbatas.',
        ],
        examples: [
          'Kontrak penjualan 1.000 unit dengan harga Rp 1.000/unit; terdapat bonus kinerja Rp 200.000 jika pengiriman selesai sebelum 31 Desember. Probabilitas bonus 70%. Expected value bonus: Rp 200.000 x 70% = Rp 140.000. Entitas menilai apakah Rp 140.000 ini memenuhi constraint untuk dimasukkan dalam harga transaksi.',
          'Kontrak dengan hak pengembalian: penjualan 100 unit Rp 500/unit, historis 5% dikembalikan. Akui pendapatan: 100 x 95% x Rp 500 = Rp 47.500. Akui refund liability: Rp 2.500. Akui aset hak atas pengembalian sebesar HPP yang diharapkan dikembalikan.',
        ],
      },
      {
        id: 'psak72-modifikasi',
        title: 'Modifikasi Kontrak',
        content: 'Modifikasi kontrak adalah perubahan dalam ruang lingkup atau harga (atau keduanya) suatu kontrak yang disetujui para pihak. PSAK 72 mengatur tiga perlakuan berbeda tergantung pada apakah barang/jasa yang ditambahkan berbeda dan apakah harganya mencerminkan harga jual berdiri sendiri.',
        tables: [
          {
            headers: ['Kondisi Modifikasi', 'Perlakuan Akuntansi', 'Contoh'],
            rows: [
              ['Barang/jasa tambahan berbeda DAN harga mencerminkan standalone price', 'Kontrak baru yang terpisah; tidak ada dampak retroaktif', 'Klien menambah 10 unit produk dengan harga pasar wajar'],
              ['Barang/jasa tambahan berbeda TETAPI harga tidak mencerminkan standalone price', 'Terminasi kontrak lama, pengakuan kontrak baru (prospektif)', 'Renegosiasi kontrak yang mengubah ruang lingkup secara signifikan'],
              ['Barang/jasa tambahan tidak berbeda (tidak distinct)', 'Modifikasi merupakan bagian dari kontrak yang ada (modifikasi kumulatif catch-up)', 'Perubahan spesifikasi produk dalam kontrak konstruksi yang berjalan'],
            ],
            caption: 'Tiga perlakuan modifikasi kontrak berdasarkan PSAK 72',
          },
        ],
        notes: [
          'Modifikasi kontrak yang tidak disetujui secara formal tetapi diakui secara implisit (misalnya melalui tindakan) juga dicakup oleh PSAK 72.',
          'Perubahan harga saja tanpa perubahan ruang lingkup umumnya diperlakukan sebagai modifikasi kontrak yang ada.',
        ],
      },
      {
        id: 'psak72-pengungkapan',
        title: 'Pengungkapan PSAK 72',
        content: 'PSAK 72 mensyaratkan pengungkapan yang substansial untuk memungkinkan pengguna laporan keuangan memahami sifat, jumlah, waktu, dan ketidakpastian pendapatan dan arus kas dari kontrak dengan pelanggan.',
        rules: [
          'Desagregasi pendapatan: uraikan pendapatan menjadi kategori yang menggambarkan bagaimana sifat, jumlah, waktu, dan ketidakpastian berbeda.',
          'Informasi kontrak: ungkapkan saldo kontrak aset, kontrak liabilitas, dan piutang usaha beserta penjelasan perubahan signifikan.',
          'Kewajiban pelaksanaan: ungkapkan informasi tentang kewajiban pelaksanaan yang belum dipenuhi (remaining performance obligations) dan kapan akan dipenuhi.',
          'Pertimbangan signifikan: ungkapkan metode penetapan harga transaksi, alokasi, dan pengukuran kemajuan.',
          'Aset yang diakui dari biaya untuk memperoleh atau memenuhi kontrak: kebijakan amortisasi dan impairment.',
        ],
        tables: [
          {
            headers: ['Item Pengungkapan', 'Detail yang Diperlukan'],
            rows: [
              ['Disagregasi pendapatan', 'Segmen produk/jasa, geografi, jenis pelanggan, waktu pengalihan, jangka waktu kontrak'],
              ['Saldo kontrak', 'Saldo awal dan akhir kontrak aset, kontrak liabilitas, piutang; penjelasan perubahan signifikan'],
              ['Remaining performance obligations', 'Jumlah agregat harga transaksi yang dialokasikan, kapan akan diakui (tiered disclosure berdasarkan nilai)'],
              ['Kebijakan akuntansi signifikan', 'Identifikasi kewajiban, penetapan harga, metode pengukuran kemajuan, constraint variabel consideration'],
            ],
            caption: 'Item pengungkapan utama PSAK 72',
          },
        ],
      },
    ],
  },
  {
    id: 'psak-73',
    title: 'PSAK 73: Sewa',
    description: 'PSAK 73, yang mengadopsi IFRS 16, mengubah secara fundamental akuntansi sewa bagi lessee dengan mensyaratkan pengakuan aset hak guna (right-of-use asset) dan liabilitas sewa untuk hampir semua sewa. Standar ini efektif berlaku di Indonesia sejak 1 Januari 2020 dan berdampak signifikan pada neraca perusahaan dengan sewa operasi yang material.',
    sections: [
      {
        id: 'psak73-identifikasi',
        title: 'Identifikasi Sewa',
        content: 'Kontrak mengandung sewa jika kontrak tersebut memberikan hak untuk mengendalikan penggunaan aset teridentifikasi selama suatu periode waktu sebagai imbalan atas pertimbangan. Identifikasi sewa adalah langkah pertama dan fundamental karena menentukan apakah PSAK 73 berlaku.',
        rules: [
          'Hak untuk mengendalikan penggunaan aset teridentifikasi ada jika pelanggan memiliki: (1) hak untuk memperoleh secara substansial seluruh manfaat ekonomi dari penggunaan aset; DAN (2) hak untuk mengarahkan penggunaan aset.',
          'Aset teridentifikasi: aset yang ditentukan secara eksplisit (disebutkan dalam kontrak) atau secara implisit (satu-satunya aset yang memenuhi kontrak).',
          'Hak substitusi yang substantif oleh pemasok menghilangkan identifikasi aset: pemasok dapat mengganti aset kapan saja dan mendapat manfaat ekonomi dari penggantian tersebut.',
          'Kapasitas yang tidak signifikan (insignificant portion) dari aset fisik bukan sewa terhadap aset tersebut.',
        ],
        examples: [
          'Sewa gudang tertentu (dengan nomor gudang spesifik) = aset teridentifikasi. Kontrak penyimpanan tanpa penentuan gudang spesifik = bukan sewa.',
          'Pemasok memiliki armada 100 truk identik dan dapat mengganti truk yang digunakan kapan saja tanpa persetujuan penyewa = bukan sewa (hak substitusi substantif).',
        ],
      },
      {
        id: 'psak73-lessee',
        title: 'Akuntansi Lessee: Pengakuan dan Pengukuran',
        content: 'Pada tanggal permulaan sewa, lessee wajib mengakui aset hak guna dan liabilitas sewa. PSAK 73 menghapus perbedaan antara sewa operasi dan sewa pembiayaan bagi lessee (kecuali pengecualian), sehingga hampir semua sewa kini tercermin di neraca lessee.',
        formula: 'Liabilitas Sewa Awal = Nilai Kini Pembayaran Sewa yang Belum Dibayar\n(didiskontokan pada tingkat bunga implisit sewa atau tingkat pinjaman inkremental lessee)\n\nAset Hak Guna Awal = Liabilitas Sewa Awal\n                    + Pembayaran Sewa pada/sebelum tanggal permulaan (dikurangi insentif yang diterima)\n                    + Biaya langsung awal\n                    + Estimasi biaya pembongkaran',
        steps: [
          'Tentukan komponen sewa dan non-sewa dalam kontrak (opsional: gabungkan jika dipilih sebagai kebijakan akuntansi).',
          'Tentukan masa sewa termasuk periode yang dapat diperpanjang jika reasonably certain akan dilaksanakan.',
          'Identifikasi pembayaran sewa: pembayaran tetap, pembayaran variabel berbasis indeks/tarif, nilai residual yang dijamin, harga opsi beli jika reasonably certain.',
          'Tentukan tingkat diskonto: tingkat bunga implisit atau tingkat pinjaman inkremental lessee.',
          'Hitung nilai kini liabilitas sewa.',
          'Hitung nilai awal aset hak guna.',
          'Susun jadwal amortisasi liabilitas sewa (effective interest method).',
          'Tentukan metode penyusutan aset hak guna (umumnya garis lurus).',
        ],
        tables: [
          {
            headers: ['Komponen', 'Pengukuran Awal', 'Pengukuran Selanjutnya'],
            rows: [
              ['Liabilitas Sewa', 'Nilai kini pembayaran sewa yang belum dibayar', 'Ditambah bunga (bunga efektif), dikurangi pembayaran, disesuaikan untuk modifikasi atau reassessment'],
              ['Aset Hak Guna', 'Liabilitas sewa awal + penyesuaian (biaya awal, insentif, pembongkaran)', 'Dikurangi akumulasi penyusutan dan impairment; disesuaikan untuk modifikasi atau reassessment'],
            ],
            caption: 'Pengukuran liabilitas sewa dan aset hak guna',
          },
        ],
        examples: [
          'PT Sejahtera menyewa gedung kantor selama 5 tahun dengan pembayaran tahunan Rp 200 juta di awal setiap tahun. Tingkat pinjaman inkremental 8%. Nilai kini liabilitas sewa = Rp 200 juta x annuity factor (8%, 5 tahun, pembayaran di awal) = Rp 200 juta x 4,312 = Rp 862,4 juta. Aset hak guna awal = Rp 862,4 juta + Rp 200 juta (pembayaran pertama pada tanggal permulaan) = Rp 1.062,4 juta. Penyusutan tahunan = Rp 1.062,4 juta / 5 = Rp 212,5 juta.',
        ],
      },
      {
        id: 'psak73-pengecualian',
        title: 'Pengecualian Pengakuan Lessee',
        content: 'PSAK 73 memberikan dua pengecualian opsional yang memungkinkan lessee tidak mengakui aset hak guna dan liabilitas sewa, melainkan mengakui pembayaran sewa sebagai beban secara garis lurus atau dasar sistematis lain.',
        rules: [
          'Pengecualian 1 - Sewa jangka pendek: masa sewa 12 bulan atau kurang pada tanggal permulaan (dengan mempertimbangkan opsi perpanjangan). Kebijakan ini diterapkan per kelas aset pendasar.',
          'Pengecualian 2 - Sewa aset bernilai rendah: aset pendasar bernilai rendah ketika baru (panduan IASB: sekitar USD 5.000 atau setara). Diterapkan per sewa individual, bukan per kelas aset.',
          'Pengecualian tidak berlaku untuk sewa aset yang merupakan sub-sewa dari aset hak guna (sub-lessor harus mengakui sesuai PSAK 73 penuh).',
          'Jika pengecualian diterapkan, beban sewa diakui secara garis lurus kecuali dasar sistematis lain lebih representatif.',
        ],
        notes: [
          'Penggunaan pengecualian ini harus diungkapkan dalam catatan atas laporan keuangan.',
          'Perubahan kebijakan dari menggunakan pengecualian ke pengakuan penuh diperlakukan sebagai modifikasi sewa.',
        ],
      },
      {
        id: 'psak73-pengungkapan',
        title: 'Pengungkapan PSAK 73',
        content: 'PSAK 73 mensyaratkan pengungkapan yang memadai agar pengguna laporan keuangan dapat menilai dampak sewa terhadap posisi keuangan, kinerja keuangan, dan arus kas entitas.',
        tables: [
          {
            headers: ['Jenis Pengungkapan', 'Rincian'],
            rows: [
              ['Laporan laba rugi', 'Beban penyusutan aset hak guna per kelas; beban bunga atas liabilitas sewa; beban sewa jangka pendek; beban sewa aset rendah; beban sewa variabel tidak termasuk dalam liabilitas'],
              ['Laporan arus kas', 'Arus keluar kas untuk pembayaran pokok liabilitas sewa (aktivitas pendanaan); pembayaran bunga (sesuai kebijakan); pembayaran sewa jangka pendek, rendah, variabel (aktivitas operasi)'],
              ['Neraca', 'Aset hak guna per kelas; liabilitas sewa (lancar dan tidak lancar)'],
              ['Kualitatif', 'Deskripsi sewa, dasar penentuan tingkat diskonto, kebijakan sewa jangka pendek dan bernilai rendah'],
              ['Analisis jatuh tempo', 'Jadwal pembayaran liabilitas sewa untuk: kurang 1 tahun, 1-5 tahun, lebih dari 5 tahun'],
            ],
            caption: 'Persyaratan pengungkapan utama PSAK 73',
          },
        ],
        warning: 'Dampak PSAK 73 terhadap rasio keuangan signifikan: leverage meningkat (liabilitas sewa masuk neraca), EBITDA meningkat (beban sewa operasi digantikan penyusutan dan bunga), interest coverage menurun. Analis keuangan dan penguji ujian CA perlu mempertimbangkan dampak ini dalam analisis kinerja.',
      },
    ],
  },
];

// =============================================
// STRATEGI UJIAN — EXTRA CHAPTERS
// =============================================
export const strategiUjianExtraChapters: FormalChapter[] = [
  {
    id: 'su-manajemen-waktu',
    title: 'Manajemen Waktu dalam Ujian',
    description: 'Manajemen waktu yang efektif adalah kompetensi tersendiri dalam ujian CA Indonesia. Kandidat yang menguasai materi namun buruk dalam mengelola waktu sering gagal, sementara kandidat dengan penguasaan materi sedang namun disiplin dalam manajemen waktu dapat lulus dengan nilai memuaskan.',
    sections: [
      {
        id: 'su-mt-alokasi',
        title: 'Strategi Alokasi Waktu per Soal',
        content: 'Alokasi waktu yang tepat dimulai dari analisis soal ujian sebelum mulai menjawab. Berbeda dengan ujian pilihan ganda yang setiap soal umumnya bernilai sama, ujian uraian dan kasus CA Indonesia memiliki bobot nilai yang bervariasi dan harus dikelola secara berbeda.',
        steps: [
          'Baca seluruh lembar soal (tanpa menjawab) untuk mendapat gambaran keseluruhan ujian: berapa soal, jenis soal, dan bobot nilai.',
          'Hitung alokasi waktu dasar: (total waktu x bobot soal / 100) + faktor kesulitan.',
          'Kurangi 10-15% dari total waktu untuk waktu review di akhir.',
          'Urutkan pengerjaan soal: mulai dari soal yang paling dikuasai untuk membangun momentum dan mengamankan poin.',
          'Tetapkan "hard stop" untuk setiap soal: jika waktu habis, berhenti dan pindah ke soal berikutnya meskipun jawaban belum sempurna.',
          'Catat waktu mulai setiap soal pada margin kertas untuk memantau kemajuan.',
          'Saat review, prioritaskan soal dengan poin tinggi yang jawaban belum lengkap, bukan menyempurnakan soal yang sudah cukup.',
        ],
        tables: [
          {
            headers: ['Jenis Soal', 'Waktu per Poin (rekomendasi)', 'Pertimbangan Khusus'],
            rows: [
              ['Pilihan ganda', '1-1,5 menit per soal', 'Langsung pilih jika yakin, tandai untuk ditinjau jika ragu, lewati jika tidak tahu dan kembali di akhir'],
              ['Uraian singkat', '2-3 menit per poin', 'Tulis poin kunci terlebih dahulu sebelum elaborasi'],
              ['Uraian analitis', '2-3 menit per poin', 'Kerangka dulu, baru isi; tampilkan struktur jawaban IRAC'],
              ['Soal kasus terpadu', '1,5-2 menit per poin', 'Baca kasus dua kali sebelum menjawab; identifikasi semua isu dulu'],
              ['Soal perhitungan', '2-3 menit per poin', 'Tunjukkan cara kerja meskipun jawaban akhir salah; partial credit tersedia'],
            ],
            caption: 'Panduan alokasi waktu per jenis soal ujian CA',
          },
        ],
        examples: [
          'Ujian 180 menit dengan 3 soal: Soal 1 (40 poin), Soal 2 (35 poin), Soal 3 (25 poin). Waktu efektif = 180 x 85% = 153 menit. Alokasi: Soal 1 = 153 x 40% = 61 menit, Soal 2 = 153 x 35% = 54 menit, Soal 3 = 153 x 25% = 38 menit. Review = 27 menit.',
        ],
      },
      {
        id: 'su-mt-skipping',
        title: 'Teknik Skipping dan Pengelolaan Soal Sulit',
        content: 'Skipping adalah strategi melewati soal yang sulit untuk sementara waktu dan kembali lagi setelah menyelesaikan soal yang lebih mudah. Teknik ini mencegah kandidat terjebak terlalu lama pada satu soal sambil membiarkan poin mudah tidak terjawab.',
        rules: [
          'Tetapkan batas waktu "stuck": jika setelah 2 menit tidak dapat memulai menjawab soal pilihan ganda atau 5 menit untuk soal uraian, skip dan lanjutkan.',
          'Tandai soal yang di-skip dengan simbol yang jelas (misalnya tanda bintang atau lingkaran) untuk memudahkan menemukan kembali saat review.',
          'Untuk pilihan ganda, isi jawaban sementara sebelum skip — jangan biarkan kosong, karena mungkin tidak ada waktu untuk kembali.',
          'Jangan skip lebih dari 20-25% soal sekaligus; terlalu banyak soal yang ditunda dapat menciptakan tekanan kumulatif.',
          'Prioritaskan kembali ke soal yang di-skip berdasarkan poin tertinggi, bukan urutan soal.',
        ],
        notes: [
          'Riset psikologi ujian menunjukkan bahwa mengerjakan soal lebih mudah terlebih dahulu dapat memancing ingatan yang berguna untuk soal sulit berikutnya.',
          'Jangan menghabiskan lebih dari 30% total waktu pada satu soal yang bobotnya di bawah 30% total nilai.',
        ],
        warning: 'Skipping bukan sama dengan menyerah. Soal yang di-skip harus kembali dikerjakan. Strategi yang gagal adalah skip tanpa kembali, yang mengakibatkan soal tidak terjawab sama sekali.',
      },
      {
        id: 'su-mt-review',
        title: 'Strategi Review Akhir',
        content: 'Waktu review di akhir ujian adalah investasi bernilai tinggi jika dikelola dengan benar. Review yang efektif bukan sekadar membaca ulang jawaban, melainkan verifikasi aktif terhadap kebenaran, kelengkapan, dan konsistensi.',
        steps: [
          'Prioritaskan review soal berbobot tinggi yang jawaban belum yakin benar.',
          'Periksa soal yang di-skip dan isi jawaban terbaik yang bisa diberikan, meskipun tidak sempurna.',
          'Verifikasi konsistensi: pastikan angka yang dirujuk di berbagai bagian jawaban konsisten.',
          'Periksa instruksi soal: pastikan semua bagian pertanyaan telah dijawab.',
          'Untuk soal pilihan ganda, ubah jawaban HANYA jika ada alasan kuat yang ditemukan saat review; perubahan berdasarkan keraguan umumnya merugikan.',
          'Pastikan nama, nomor peserta, dan informasi administrasi terisi dengan benar.',
        ],
        rules: [
          'Jangan mengubah jawaban pilihan ganda tanpa alasan yang jelas; intuisi pertama umumnya lebih akurat.',
          'Fokuskan waktu review pada jawaban yang masih dapat diperbaiki, bukan pada jawaban yang sudah benar.',
          'Jika ada pertanyaan bonus atau opsional, kerjakan hanya setelah semua pertanyaan wajib selesai dan di-review.',
        ],
      },
    ],
  },
  {
    id: 'su-teknik-membaca',
    title: 'Teknik Membaca Soal',
    description: 'Kemampuan membaca dan menganalisis soal secara akurat adalah fondasi dari jawaban yang tepat. Banyak kesalahan dalam ujian terjadi bukan karena tidak tahu jawabannya, melainkan karena salah membaca atau salah memahami pertanyaan. Teknik membaca aktif membantu mengekstrak informasi relevan dan menghindari jebakan soal.',
    sections: [
      {
        id: 'su-tm-keyword',
        title: 'Keyword Identification (Identifikasi Kata Kunci)',
        content: 'Kata kunci dalam soal ujian CA menentukan secara tepat apa yang ditanyakan, pendekatan yang harus digunakan, dan batas cakupan jawaban yang diharapkan. Mengidentifikasi kata kunci mencegah jawaban yang terlalu luas, terlalu sempit, atau tidak relevan.',
        tables: [
          {
            headers: ['Jenis Kata Kunci', 'Contoh', 'Implikasi bagi Jawaban'],
            rows: [
              ['Kata instruksi', '"Jelaskan", "Analisis", "Evaluasi", "Hitung", "Bandingkan", "Rekomendasikan"', 'Menentukan jenis respons: deskripsi, analisis mendalam, kalkulasi, perbandingan, atau saran'],
              ['Kata pembatas kuantitatif', '"Dua alasan", "Tiga langkah", "Minimal empat"', 'Menentukan jumlah poin minimum; kurang dari yang diminta = poin tidak penuh'],
              ['Kata pembatas konteks', '"Dalam konteks PSAK 72", "Berdasarkan Kode Etik IESBA", "Menurut UU Perseroan Terbatas"', 'Menentukan kerangka hukum/standar yang harus digunakan; jangan menggunakan standar lain'],
              ['Kata kondisi', '"Asumsikan", "Jika", "Dengan mempertimbangkan"', 'Mengubah fakta dasar; pastikan asumsi yang diberikan diperhitungkan dalam jawaban'],
              ['Kata temporal', '"Per 31 Desember 2024", "Selama tahun berjalan", "Pada saat akuisisi"', 'Menentukan periode atau titik waktu yang relevan untuk perhitungan'],
            ],
            caption: 'Jenis kata kunci dalam soal ujian CA dan implikasinya',
          },
        ],
        steps: [
          'Baca soal sekali untuk memahami konteks umum.',
          'Baca ulang dan garis bawahi: kata instruksi, kata pembatas, standar/regulasi yang disebutkan, dan angka kunci.',
          'Identifikasi apa yang benar-benar ditanyakan: jawab pertanyaan yang ada, bukan pertanyaan yang ingin ada.',
          'Periksa apakah ada sub-pertanyaan (a, b, c) yang masing-masing harus dijawab secara terpisah.',
          'Untuk kasus panjang, baca pertanyaan terlebih dahulu sebelum membaca kasus agar tahu apa yang perlu dicari.',
        ],
        examples: [
          '"Analisis DUA (2) implikasi etika yang dihadapi akuntan dalam situasi tersebut berdasarkan Kode Etik IESBA." Kata kunci: Analisis (bukan sekadar sebutkan), DUA (tepat dua, bukan lebih atau kurang), implikasi etika (bukan tindakan yang harus diambil), berdasarkan Kode Etik IESBA (bukan opini pribadi).',
        ],
      },
      {
        id: 'su-tm-distractor',
        title: 'Distractor Analysis untuk Soal Pilihan Ganda',
        content: 'Distractor adalah pilihan jawaban yang salah namun dirancang untuk terlihat menarik atau masuk akal bagi kandidat yang belum benar-benar memahami konsep. Memahami pola distractor umum dalam ujian CA membantu menghindari jebakan yang sering dikunjungi.',
        tables: [
          {
            headers: ['Pola Distractor', 'Deskripsi', 'Cara Menghindari'],
            rows: [
              ['Jawaban yang hampir benar', 'Semua unsur benar kecuali satu detail kecil (misalnya angka, tanggal, atau istilah)', 'Baca setiap pilihan sampai selesai; verifikasi setiap detail sebelum memilih'],
              ['Jawaban yang relevan tapi tidak menjawab pertanyaan', 'Informasi yang benar namun tidak relevan dengan pertanyaan yang diajukan', 'Kembali ke pertanyaan setelah membaca setiap pilihan: "Apakah ini menjawab yang ditanyakan?"'],
              ['Jawaban yang terlalu absolut', '"Selalu", "Tidak pernah", "Semua", "Tidak ada" — sering kali terlalu ekstrem untuk benar', 'Cari pengecualian; dalam akuntansi, pernyataan absolut jarang sepenuhnya benar'],
              ['Jawaban yang membalik konsep', 'Pilihan yang menukar sebab-akibat atau menukar debet-kredit', 'Verifikasi arah hubungan secara eksplisit; buat jurnal sederhana jika perlu'],
              ['Jawaban yang mencampur dua konsep berbeda', 'Menggabungkan aturan yang berlaku untuk situasi berbeda dalam satu pernyataan', 'Identifikasi situasi spesifik yang ditanyakan dan terapkan aturan yang tepat untuk situasi itu'],
            ],
            caption: 'Pola distractor umum dalam ujian CA pilihan ganda',
          },
        ],
        notes: [
          'Distractor yang paling berbahaya adalah yang menggoda karena tampak seperti jawaban yang paling detail atau paling komprehensif, padahal tidak relevan dengan pertanyaan.',
          'Jika dua pilihan tampak sama-sama benar, cari perbedaan halus; biasanya satu lebih spesifik dan lebih tepat dalam konteks pertanyaan.',
        ],
      },
      {
        id: 'su-tm-eliminasi',
        title: 'Elimination Strategy untuk Pilihan Ganda',
        content: 'Strategi eliminasi adalah teknik menyempitkan pilihan jawaban dengan menghilangkan opsi yang jelas salah, kemudian memilih di antara sisa pilihan. Strategi ini meningkatkan probabilitas menjawab benar bahkan ketika tidak yakin sepenuhnya.',
        steps: [
          'Baca pertanyaan dan coba formulasikan jawaban sendiri sebelum melihat pilihan.',
          'Bandingkan jawaban sendiri dengan pilihan yang tersedia; jika ada yang cocok, pilih itu.',
          'Jika tidak yakin, eliminasi pilihan yang jelas salah berdasarkan pengetahuan dasar.',
          'Dari pilihan yang tersisa, cari mana yang paling konsisten dengan prinsip yang berlaku.',
          'Gunakan clue dari soal lain dalam ujian yang sama yang mungkin mengandung informasi relevan.',
          'Jika masih tidak yakin antara dua pilihan, pilih yang lebih konservatif atau lebih umum dalam konteks akuntansi.',
          'Jangan biarkan kosong; tebak berdasarkan eliminasi daripada tidak menjawab.',
        ],
        rules: [
          'Eliminasi setidaknya satu pilihan sebelum menebak meningkatkan peluang dari 25% menjadi 33% (dari 4 pilihan ke 3 pilihan).',
          'Eliminasi dua pilihan meningkatkan peluang menjadi 50%; pada titik ini, tidak ada kerugian signifikan dari menebak.',
          'Dalam ujian tanpa sistem penalti (negative marking), selalu jawab semua soal; tidak ada keuntungan dari mengosongkan jawaban.',
          'Dalam ujian dengan sistem penalti, kalkulasi nilai ekspektasi sebelum menebak: tebak hanya jika dapat mengeliminasi setidaknya satu pilihan.',
        ],
        examples: [
          'Soal: "Manakah yang BUKAN merupakan karakteristik kualitatif fundamental laporan keuangan menurut Kerangka Konseptual IASB?" Eliminasi: Keterbandingan adalah karakteristik peningkat (bukan fundamental), sehingga langsung masuk sebagai kandidat jawaban. Relevansi dan representasi tepat adalah fundamental, sehingga dieliminasi. Jika ada "ketepatwaktuan" juga dieliminasi karena itu karakteristik peningkat. Jawaban: Keterbandingan atau Ketepatwaktuan.',
        ],
      },
      {
        id: 'su-tm-mental',
        title: 'Persiapan Mental dan Pengelolaan Tekanan Ujian',
        content: 'Performa ujian tidak hanya bergantung pada penguasaan materi, tetapi juga pada kondisi mental dan kemampuan mengelola tekanan. Kecemasan ujian yang berlebihan dapat menghambat akses ke memori dan kemampuan berpikir analitis yang sudah dilatih.',
        rules: [
          'Tidur cukup (7-8 jam) malam sebelum ujian jauh lebih bermanfaat daripada belajar semalaman.',
          'Makan teratur sebelum ujian; hindari makanan berat yang membuat mengantuk.',
          'Tiba di lokasi ujian 30 menit lebih awal untuk menghindari kecemasan logistik.',
          'Bawa semua perlengkapan yang diperlukan (alat tulis, kalkulator yang diizinkan, identitas) dan periksa malam sebelumnya.',
          'Jika mengalami blank saat ujian, tarik napas dalam-dalam, tuliskan semua yang diketahui tentang topik tersebut, dan sering kali memori akan kembali.',
          'Fokus pada soal yang sedang dikerjakan; jangan membandingkan kemajuan dengan peserta lain.',
        ],
        notes: [
          'Kecemasan ujian yang ringan (eustress) sebenarnya meningkatkan performa; yang perlu dikelola adalah kecemasan berlebihan yang melumpuhkan.',
          'Teknik mindfulness dan pernapasan dalam terbukti efektif dalam manajemen kecemasan ujian dan dapat dipraktikkan di lokasi ujian tanpa menarik perhatian.',
        ],
      },
    ],
  },
];
