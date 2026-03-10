export const manajemenBisnisDasarChapters = [
  {
    id: "bentuk-organisasi-bisnis",
    title: "Bentuk Organisasi Bisnis",
    description: "Memahami berbagai bentuk hukum organisasi bisnis di Indonesia beserta karakteristik, keuntungan, dan kelemahan masing-masing",
    sections: [
      {
        id: "bentuk-organisasi-comparison",
        title: "Perbandingan Bentuk Organisasi Bisnis",
        content: "Indonesia memiliki berbagai bentuk organisasi bisnis yang diatur dalam berbagai undang-undang. Setiap bentuk memiliki implikasi hukum, perpajakan, dan operational yang berbeda. Pemilihan bentuk organisasi bisnis merupakan keputusan strategis awal dalam mendirikan usaha. Pengetahuan tentang kelebihan dan kekurangan setiap bentuk sangat penting untuk entrepreneur dalam Indonesia.",
        tables: [
          {
            headers: ["Bentuk", "Modal Awal", "Tanggung Jawab Pemilik", "Pajak", "Administrasi", "Liabilitas"],
            rows: [
              ["Perseorangan", "Minimal/fleksibel", "Unlimited (pribadi)", "PPh pasal 21/4/25", "Mudah", "Tanpa batas"],
              ["CV (Persekutuan Komanditer)", "Minimal, ditentukan pendiri", "Komplementer unlimited, komanditer terbatas pada modal", "PPh tahunan", "Sedang", "Berbeda per anggota"],
              ["Firma", "Minimal, ditentukan anggota", "Unlimited, solidaris", "PPh tahunan", "Sedang", "Tanpa batas, solidaris"],
              ["PT (Perseroan Terbatas)", "Tertentu (UU 40/2007), Rp 50 juta minimum", "Terbatas pada modal saham", "PPh Badan 25%", "Kompleks (GoI, RUPS, dll)", "Terbatas pada modal"],
              ["Koperasi", "Minimal dari anggota", "Terbatas pada kontribusi", "Khusus koperasi", "Kompleks", "Terbatas pada aset"],
              ["BUMN", "Negara/APBN", "Pemerintah", "PPh Badan, dividen", "Sangat kompleks", "Terbatas pada modal"]
            ],
            caption: "Perbandingan Bentuk Organisasi Bisnis di Indonesia"
          }
        ]
      },
      {
        id: "pt-deep-dive",
        title: "PT (Perseroan Terbatas) & UU 40/2007",
        content: "Perseroan Terbatas adalah bentuk badan usaha paling umum untuk bisnis modern di Indonesia karena Limited Liability Protection untuk pemegang saham. Undang-Undang Nomor 40 Tahun 2007 tentang Perseroan Terbatas mengatur struktur, governance, dan operasional PT secara komprehensif. PT memiliki status hukum sebagai badan hukum terpisah dengan kekayaan dan kewajiban sendiri. Struktur PT terdiri dari Pemegang Saham, RUPS (Rapat Umum Pemegang Saham), Direksi, dan Dewan Komisaris.",
        rules: [
          "Modal dasar PT minimum Rp 50 juta, modal ditempatkan minimum 25% dari modal dasar, modal disetor minimal 30% dari modal ditempatkan (UU 40/2007 Pasal 32)",
          "Direksi minimum 1 orang, masing-masing bertanggung jawab terhadap PT (Pasal 92)",
          "Dewan Komisaris minimum 3 orang untuk PT publik, minimum 1 orang untuk PT tertutup (Pasal 108)",
          "RUPS adalah kewenangan tertinggi PT, diadakan minimum 1 tahun sekali (Pasal 75)",
          "Pembagian dividen hanya dari laba yang diperoleh, dengan mempertahankan modal yang ditetapkan (Pasal 182)",
          "Likuidasi PT hanya dapat dilakukan berdasarkan keputusan RUPS atau putusan pengadilan",
          "PT tunduk pada kewajiban akuntansi, laporan keuangan audited, dan pengungkapan kepada pemegang saham"
        ],
        tables: [
          {
            headers: ["Organ PT", "Komposisi", "Tugas & Tanggung Jawab", "Periode"],
            rows: [
              ["Pemegang Saham", "Individu/badan hukum pemilik saham", "Menentukan arah PT, memilih Direksi & Komisaris", "Seumur hidup/sesuai kepemilikan saham"],
              ["RUPS", "Semua pemegang saham yang hadir", "Memutuskan kebijakan umum, mengangkat Direksi & Komisaris, persetujuan laporan keuangan", "Minimum 1x setahun"],
              ["Direksi", "Satu orang atau lebih (maksimal ditentukan anggaran dasar)", "Mengelola PT sehari-hari, implementasi keputusan RUPS, tanggung jawab legal", "Ditentukan anggaran dasar (umum 5 tahun)"],
              ["Dewan Komisaris", "Minimum 1 orang (PT private) atau 3 (PT publik)", "Pengawasan Direksi, monitor kinerja, melindungi kepentingan pemegang saham", "Ditentukan anggaran dasar (umum 5 tahun)"]
            ],
            caption: "Struktur Organ PT menurut UU 40/2007"
          }
        ]
      }
    ]
  },
  {
    id: "manajemen-kepemimpinan",
    title: "Manajemen & Kepemimpinan",
    description: "Fungsi dasar manajemen (POAC), teori kepemimpinan, dan teori motivasi untuk efektivitas organizational management",
    sections: [
      {
        id: "poac-functions",
        title: "POAC: Fungsi Dasar Manajemen",
        content: "POAC adalah singkatan dari empat fungsi dasar manajemen: Planning, Organizing, Actuating, dan Controlling. Keempat fungsi ini adalah elemen inti dalam aktivitas manajemen di setiap level organisasi. Manajer di semua tingkatan harus melaksanakan keempat fungsi ini untuk mencapai tujuan organisasi secara efisien dan efektif. Henry Fayol awalnya mengidentifikasi lima fungsi (termasuk Coordination), namun POAC adalah evolusi yang paling diterima luas.",
        diagram: "Siklus kontinyu POAC: Planning → Organizing → Actuating → Controlling → feedback ke Planning",
        tables: [
          {
            headers: ["Fungsi", "Definisi", "Aktivitas Utama", "Output"],
            rows: [
              ["Planning", "Menetapkan tujuan & rencana untuk mencapainya", "Visi, misi, target, strategy, tactics", "Strategic/operational plans, budget"],
              ["Organizing", "Merancang struktur & alokasi resources", "Struktur organisasi, job descriptions, assignment", "Organizational structure, resources allocation"],
              ["Actuating", "Memotivasi & mengarahkan karyawan eksekusi", "Supervision, motivation, communication, leadership", "Task execution, employee engagement"],
              ["Controlling", "Monitor & evaluasi progress terhadap plan", "Performance measurement, variance analysis, corrective action", "Performance reports, improvement plans"]
            ],
            caption: "POAC - Empat Fungsi Dasar Manajemen"
          }
        ]
      },
      {
        id: "leadership-theories",
        title: "Teori-Teori Kepemimpinan",
        content: "Leadership adalah kemampuan mempengaruhi orang lain untuk mencapai tujuan bersama. Berbagai teori kepemimpinan telah dikembangkan untuk menjelaskan apa yang membuat seorang pemimpin efektif. Teori-teori ini berkisar dari trait theories (fokus pada karakteristik pemimpin) hingga behavioral theories (fokus pada perilaku) dan situational theories (fokus pada konteks situasional). Pemahaman tentang berbagai teori membantu pemimpin memilih gaya kepemimpinan yang tepat sesuai situasi dan budaya organisasi.",
        tables: [
          {
            headers: ["Teori", "Fokus", "Deskripsi", "Kontribusi"],
            rows: [
              ["Trait Theory", "Karakteristik pemimpin", "Pemimpin memiliki traits unik seperti intelligence, charisma, integrity", "Identifikasi kualitas kepemimpinan dasar"],
              ["Behavioral Theory (Ohio State)", "Perilaku kepemimpinan", "Dimensi Initiating Structure dan Consideration", "Fokus pada perilaku yang dapat dipelajari"],
              ["Situational Leadership (Hersey & Blanchard)", "Adaptasi situasional", "Gaya kepemimpinan bergantung pada maturity level subordinate", "Fleksibilitas dan adaptasi kontekstual"],
              ["Transformational Leadership (Burns)", "Inspirasi & perubahan", "Pemimpin menginspirasi follower untuk transcend self-interest", "Motivasi tinggi, organizational change"],
              ["Servant Leadership", "Service orientation", "Pemimpin melayani kebutuhan followers untuk growth mereka", "Employee development, ethical leadership"],
              ["Contingency Theory (Fiedler)", "Situasional match", "Efektivitas bergantung pada match antara gaya leader dan situasi", "Konteks situasional importance"]
            ],
            caption: "Teori-Teori Kepemimpinan Utama"
          }
        ]
      },
      {
        id: "motivation-theories",
        title: "Teori Motivasi dalam Organisasi",
        content: "Motivasi adalah kekuatan internal yang mendorong individu untuk bertindak mencapai tujuan. Teori motivasi menjelaskan apa yang mendorong perilaku karyawan dan bagaimana memotivasi mereka untuk kinerja optimal. Pemahaman tentang kebutuhan dan drivers motivasi karyawan membantu manajer merancang reward systems dan work environment yang efektif. Tiga teori motivasi paling berpengaruh adalah Hierarchy of Needs (Maslow), Two-Factor Theory (Herzberg), dan Theory X-Y (McGregor).",
        tables: [
          {
            headers: ["Teori", "Tingkat/Faktor", "Penjelasan"],
            rows: [
              ["Maslow Hierarchy", "Self-actualization", "Aktualisasi diri, mencapai potensi penuh"],
              ["", "Esteem", "Penghargaan, status, self-respect"],
              ["", "Belonging", "Kebersamaan, social acceptance, belonging"],
              ["", "Safety", "Keamanan, job security, stable income"],
              ["", "Physiological", "Kebutuhan dasar: makanan, gaji, working conditions"]
            ],
            caption: "Maslow's Hierarchy of Needs"
          },
          {
            headers: ["Faktor", "Hygiene Factors (Dissatisfiers)", "Motivators (Satisfiers)"],
            rows: [
              ["Definisi", "Kehadiran mencegah dissatisfaction", "Kehadiran menciptakan satisfaction & motivation"],
              ["Contoh", "Gaji, benefit, working conditions, job security", "Achievement, recognition, responsibility, advancement"],
              ["Impact", "Absence = dissatisfaction, tidak mendorong motivation", "Presence = satisfaction & high motivation"],
              ["Implikasi", "Harus adequate untuk baseline contentment", "Harus designed untuk challenge & growth"]
            ],
            caption: "Herzberg's Two-Factor Theory"
          },
          {
            headers: ["Teori", "Asumsi", "Implikasi Manajemen"],
            rows: [
              ["Theory X", "Karyawan lazy, perlu dikontrol & punishment", "Directive leadership, close supervision, extrinsic rewards"],
              ["Theory Y", "Karyawan proaktif, self-motivated, capable", "Participative leadership, autonomy, intrinsic rewards, development"]
            ],
            caption: "McGregor's Theory X-Y"
          }
        ]
      }
    ]
  },
  {
    id: "manajemen-pemasaran",
    title: "Manajemen Pemasaran",
    description: "Strategi pemasaran modern meliputi marketing mix, STP strategy, dan digital marketing channels",
    sections: [
      {
        id: "marketing-mix",
        title: "Marketing Mix: 4P & 7P",
        content: "Marketing Mix adalah kombinasi taktis dari controllable marketing elements yang digunakan perusahaan untuk mencapai target market. Framework original adalah 4P (Product, Price, Place, Promotion) dari Jerome McCarthy. Untuk service industries, framework diperluas menjadi 7P dengan penambahan People, Process, dan Physical Evidence. Gojek menggunakan 7P framework untuk positioning super app mereka dengan emphasis pada People (drivers quality), Process (app quality), dan Physical Evidence (brand visibility).",
        tables: [
          {
            headers: ["Element", "4P", "Deskripsi", "Contoh Gojek"],
            rows: [
              ["Product", "Product", "Produk/jasa yang ditawarkan, fitur, quality, design", "Ride, Food, Financial, Logistics services"],
              ["", "Service Elements (7P)", "Untuk service: quality, features, design, branding", "App quality, user experience, reliability"],
              ["Price", "Price", "Harga produk/jasa, pricing strategy, discount", "Dynamic pricing, subscription GoJek Plus"],
              ["Place", "Place", "Distribusi channel, accessibility, availability", "Mobile app, online platform, integration dengan provider"],
              ["Promotion", "Promotion", "Marketing communication, advertising, promotion", "Social media, referral program, influencer partnership"],
              ["", "People (7P)", "Customer service, staff, interaction quality", "Driver selection, training, customer service excellence"],
              ["", "Process (7P)", "Operational process, service delivery mechanism", "Booking algorithm, payment gateway, real-time tracking"],
              ["", "Physical Evidence (7P)", "Environment, ambiance, tangible cues", "App design, driver appearance, brand consistency"]
            ],
            caption: "Marketing Mix 4P & 7P Framework"
          }
        ]
      },
      {
        id: "stp-strategy",
        title: "STP: Segmentation, Targeting, Positioning",
        content: "STP adalah strategi pemasaran fundamental untuk memilih dan melayani target market yang spesifik dengan positioning yang unik. Proses dimulai dengan segmentasi pasar untuk mengidentifikasi grup konsumen yang berbeda berdasarkan characteristics atau behaviors. Kemudian targeting memilih segment mana yang paling attractive untuk dilayani. Akhirnya positioning menciptakan unique value proposition untuk target segment tersebut. Tokopedia menggunakan STP dengan menargetkan small-medium merchants (SME) sebagai sellers dan mass market consumers (C-segment dan D-segment) sebagai buyers.",
        steps: [
          "Identifikasi variabel segmentasi: demografis (age, income, education), geografis (location), psikografis (lifestyle, values), behavioral (purchase frequency, brand loyalty)",
          "Develop customer profiles untuk setiap segment dengan characteristics dan needs mereka",
          "Evaluate attractiveness setiap segment berdasarkan size, growth, profitability, accessibility, responsiveness",
          "Select target segment yang paling sesuai dengan competencies dan objectives perusahaan",
          "Develop positioning statement yang diferensiatif dan compelling untuk target segment",
          "Implement marketing mix yang aligned dengan positioning untuk target segment"
        ]
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing & Digital Channels",
        content: "Digital marketing memanfaatkan digital channels dan technologies untuk mencapai dan engage dengan target audience. Channel digital terus berkembang dengan emerging platforms dan technologies. Setiap channel memiliki strengths, weaknesses, dan audience demographics yang unik. PT BRI menggunakan digital marketing dengan fokus pada SEO, SEM, social media (Instagram, TikTok), dan email marketing untuk menjangkau younger demographics dan increase digital adoption untuk financial products.",
        tables: [
          {
            headers: ["Channel Digital", "Kekuatan", "Target Audience", "Metrics Utama"],
            rows: [
              ["Search Engine Marketing (SEM)", "Intent-based, high conversion", "Users dengan search intent", "CPC, CTR, Conversion rate"],
              ["Social Media (FB, IG, TikTok)", "Reach, targeting, engagement, viral potential", "Semua demographic, platform-dependent", "Reach, engagement, likes, shares, followers"],
              ["Email Marketing", "High ROI, retention, personalization", "Existing customers, email subscribers", "Open rate, click-through rate, conversion"],
              ["Content Marketing", "Authority building, organic reach, long-term", "Information seekers, educational audiences", "Traffic, engagement, leads, shares"],
              ["Influencer Marketing", "Credibility, reach, authenticity", "Followers dari influencer, niche audiences", "Reach, engagement, conversions, ROI"],
              ["Affiliate Marketing", "Performance-based, scalability, cost-effective", "Broad audience through affiliate networks", "Conversion rate, commission, ROI"],
              ["Display Advertising", "Brand awareness, retargeting, scale", "Broad demographic, retargeting audiences", "Impressions, clicks, click-through rate"],
              ["Video Marketing (YouTube)", "High engagement, visual storytelling, algorithm favor", "Visual learners, YouTube audience", "Views, watch time, engagement, subscribers"]
            ],
            caption: "Digital Marketing Channels & Characteristics"
          }
        ]
      }
    ]
  },
  {
    id: "manajemen-operasi",
    title: "Manajemen Operasi",
    description: "Manajemen operasi mencakup supply chain management, quality management, dan lean/JIT untuk operational excellence",
    sections: [
      {
        id: "supply-chain-management",
        title: "Supply Chain Management & EOQ",
        content: "Supply chain adalah jaringan organisasi dan aktivitas untuk menciptakan value dari bahan baku hingga produk final ke konsumen. Supply chain management (SCM) mengoptimalkan aliran materials, information, dan finances across supply chain untuk minimize costs dan maximize efficiency. Economic Order Quantity (EOQ) adalah model untuk menentukan order quantity optimal yang meminimalkan total inventory costs. PT Astra menggunakan SCM sophisticated untuk mengelola supply dari ribuan suppliers ke manufacturing plants ke hundreds of dealers.",
        formula: "EOQ = √(2 × D × S / H) dimana D=Annual Demand, S=Order Cost per order, H=Holding Cost per unit per year"
      },
      {
        id: "quality-management",
        title: "Total Quality Management (TQM) & DMAIC",
        content: "Total Quality Management adalah philosophy dan practice untuk continuous improvement dalam setiap aspek organisasi. TQM berfokus pada customer satisfaction, employee involvement, dan process improvement. Six Sigma adalah metodologi untuk reduction variation dan defects menggunakan DMAIC (Define-Measure-Analyze-Improve-Control) process. BCA mengimplementasikan TQM dengan fokus pada service quality excellence dan customer satisfaction metrics.",
        tables: [
          {
            headers: ["Elemen TQM", "Deskripsi", "Implementasi"],
            rows: [
              ["Customer Focus", "Memahami dan memenuhi customer needs", "Voice of customer, feedback systems, satisfaction surveys"],
              ["Continuous Improvement", "Incremental & radical improvements", "Kaizen, Six Sigma, process optimization"],
              ["Employee Involvement", "Engagement & empowerment karyawan", "Training, suggestion systems, empowerment"],
              ["Process Focus", "Excellence dalam processes, bukan hanya outcomes", "Process mapping, standards, metrics"],
              ["Data-Driven", "Decision making based on data & facts", "Data collection, analysis, dashboards"],
              ["Supplier Partnership", "Collaboration dengan suppliers untuk quality", "Supplier evaluation, development programs"]
            ],
            caption: "Elemen-Elemen TQM"
          }
        ],
        steps: [
          "DEFINE: Identifikasi proses, define customer requirements, establish project objectives dan metrics",
          "MEASURE: Collect data tentang current process performance, establish baseline metrics",
          "ANALYZE: Analyze data untuk identify root causes dari defects atau inefficiency",
          "IMPROVE: Brainstorm & implement solutions untuk address root causes dan improve performance",
          "CONTROL: Establish controls untuk maintain improvements dan prevent regression ke old performance"
        ]
      },
      {
        id: "lean-jit",
        title: "Lean Manufacturing & Just-In-Time (JIT)",
        content: "Lean manufacturing adalah philosophy menghilangkan waste (muda) dalam semua aktivitas produksi. JIT adalah sistem pulling materials dari upstream processes hanya ketika diperlukan downstream, meminimalkan inventory. Kombinasi Lean & JIT menghasilkan efficient operations dengan lower costs. Toyota adalah pioneer JIT system yang sekarang menjadi standard dalam manufacturing. Astra Daihatsu menerapkan JIT untuk optimasi inventory dan production efficiency.",
        tables: [
          {
            headers: ["Tipe Waste (Muda)", "Deskripsi", "Contoh"],
            rows: [
              ["Overproduction", "Produksi lebih dari yang dibutuhkan", "Membuat stok berlebihan yang tidak terjual"],
              ["Waiting", "Idle time menunggu material atau equipment", "Production line stops waiting untuk material"],
              ["Transportation", "Unnecessary movement dari materials", "Handling materials antara work centers"],
              ["Processing", "Unnecessary atau redundant processing steps", "Approval process yang berlebihan"],
              ["Inventory", "Excess inventory dari materials atau WIP", "Buffer stock yang tidak perlu"],
              ["Motion", "Unnecessary movement oleh workers", "Inefficient workstation layout"],
              ["Defects", "Quality issues requiring rework", "Scrap atau rework dari defective items"],
              ["Under-utilization", "Unused employee skills & creativity", "Employees tidak empowered untuk improve"]
            ],
            caption: "Tujuh Tipe Waste (Muda) dalam Lean Manufacturing"
          }
        ]
      }
    ]
  },
  {
    id: "manajemen-sdm",
    title: "Manajemen Sumber Daya Manusia (SDM)",
    description: "Manajemen SDM mencakup recruitment, performance appraisal, compensation, dan compliance dengan UU ketenagakerjaan",
    sections: [
      {
        id: "recruitment-process",
        title: "Recruitment & Selection Process",
        content: "Recruitment adalah proses mencari dan menarik qualified candidates untuk fill job positions. Selection adalah proses evaluasi candidates dan memilih yang terbaik. Proses recruitment yang efektif adalah critical untuk mendapatkan talenta berkualitas. PT Telkom menggunakan recruitment process yang sophisticated meliputi sourcing, screening, interview, assessment, dan onboarding untuk ensure cultural fit dan competency alignment dengan job requirements.",
        steps: [
          "Job analysis: Definisikan job requirements, responsibilities, competencies yang diperlukan",
          "Job posting: Publish job opening di multiple channels (job boards, social media, referral)",
          "Resume screening: Screen applications berdasarkan basic qualifications dan experience",
          "Initial interview: Phone atau video screening untuk top candidates",
          "Competency assessment: Technical tests, psychometric tests, case studies sesuai job requirements",
          "Final interview: In-depth interview oleh hiring manager dan stakeholders",
          "Background check & reference verification: Verify credentials, experience, references",
          "Offer & negotiation: Extend job offer, negotiate terms, prepare employment contract",
          "Onboarding: Orientation, training, mentoring untuk memastikan successful integration"
        ]
      },
      {
        id: "performance-appraisal",
        title: "Performance Appraisal & Management",
        content: "Performance appraisal adalah proses evaluasi kinerja karyawan terhadap job objectives dan competencies. Performance appraisal digunakan untuk determine compensation, identify development needs, dan make employment decisions. Effective performance management system mendorong continuous improvement dan alignment dengan organizational goals. BRI menggunakan performance appraisal berbasis balanced scorecard dengan metrics financial dan non-financial.",
        tables: [
          {
            headers: ["Metode Appraisal", "Deskripsi", "Kelebihan", "Kelemahan"],
            rows: [
              ["Graphic Rating Scale", "Rater memberi rating pada skala (1-5) untuk setiap competency", "Simple, standardized, comparable", "Subjective, lack of feedback, halo effect"],
              ["Critical Incident", "Focus pada critical behaviors/incidents selama period", "Objective, specific examples, actionable", "Time-consuming, recency bias"],
              ["Comparative Rating", "Bandingkan employee dengan peers (ranking, forced distribution)", "Clear differentiation, easy to rank", "Demotivating, promotes unhealthy competition"],
              ["Narrative/Essay", "Written description dari performance by rater", "Detailed, qualitative, personalized", "Subjective, time-consuming, variable quality"],
              ["MBO (Management by Objectives)", "Evaluate based on achievement dari pre-set objectives", "Goal-oriented, measurable, aligned dengan strategy", "Rigid, tidak capture unexpected contributions"],
              ["360-Degree Feedback", "Feedback dari supervisor, peers, subordinates, customers", "Comprehensive perspective, balanced view", "Complex, potential for personality conflicts"],
              ["Balanced Scorecard", "Evaluate pada financial, customer, internal process, learning perspective", "Holistic, strategic alignment, balanced", "Complex to implement, data collection intensive"]
            ],
            caption: "Metode-Metode Performance Appraisal"
          }
        ]
      },
      {
        id: "compensation-uu-cipta-kerja",
        title: "Compensation & Manfaat + UU Cipta Kerja",
        content: "Compensation adalah kombinasi dari monetary (salary, bonus) dan non-monetary (benefits, perks) yang diberikan kepada employees sebagai return atas services mereka. Sistem kompensasi yang competitive dan fair adalah critical untuk attract dan retain talents. UU Cipta Kerja (No. 11 Tahun 2020) membawa perubahan signifikan pada UU Ketenagakerjaan termasuk upah minimum regional, benefit, dan employment contracts. Perusahaan di Indonesia harus ensure compliance dengan UU Cipta Kerja terbaru dalam structuring compensation packages.",
        warning: "UU Cipta Kerja mengubah beberapa provisions dari UU Ketenagakerjaan (No. 13/2003) dan menghadirkan debate tentang labor rights. Perusahaan harus carefully review compliance requirements termasuk: upah minimum regional, pesangon calculations, benefit requirements (asuransi kesehatan minimum, jaminan sosial), dan contract terms untuk ensure legal compliance dan avoid penalties atau disputes."
      }
    ]
  },
  {
    id: "sistem-informasi",
    title: "Sistem Informasi & Cybersecurity",
    description: "Sistem informasi enterprise, business intelligence, IT governance, dan cybersecurity untuk digital business operations",
    sections: [
      {
        id: "enterprise-systems",
        title: "Enterprise Resource Planning (ERP) & Business Intelligence",
        content: "ERP adalah integrated software system yang mengkonsolidasikan data dan processes dari berbagai departments dan functions ke dalam single unified system. ERP memfasilitasi real-time data access dan enables data-driven decision making across organization. Business Intelligence (BI) adalah proses mengumpulkan, analyzing, dan visualizing data untuk generate actionable insights. PT Bank Mandiri menggunakan SAP ERP untuk integrate finance, HR, supply chain, dan customer data untuk better business visibility dan decision making.",
        tables: [
          {
            headers: ["Modul ERP", "Fungsi Utama", "Data Utama"],
            rows: [
              ["Finance", "Accounting, general ledger, AP, AR, fixed assets", "Transactions, GL entries, financial reports"],
              ["Sales & Distribution", "Order management, billing, shipping, customer data", "Orders, invoices, shipments, customers"],
              ["Supply Chain/Materials Management", "Procurement, inventory, warehouse, logistics", "Purchase orders, stock levels, receipts, WIP"],
              ["Human Resources", "Payroll, recruitment, performance, training", "Employee data, payroll, benefits, training records"],
              ["Manufacturing", "Production planning, BOM, work orders, quality", "Routings, materials, production orders, QC data"],
              ["Project Management", "Project planning, resource allocation, costing", "Projects, tasks, resources, budgets, actuals"]
            ],
            caption: "Modul-Modul Utama dalam ERP System"
          }
        ]
      },
      {
        id: "it-governance-cobit",
        title: "IT Governance & COBIT 2019",
        content: "IT Governance adalah system untuk manage IT resources dan ensure alignment dengan business objectives. COBIT (Control Objectives for Information and Related Technologies) adalah framework yang widely adopted untuk IT governance, risk management, dan compliance. COBIT 2019 adalah version terbaru yang integrate dengan ISO standards dan berbagai frameworks. Bank Indonesia dan OJK mendorong adopsi COBIT untuk strengthen IT governance dalam sektor financial services.",
        tables: [
          {
            headers: ["COBIT 2019 Pilar", "Fokus", "Outcomes"],
            rows: [
              ["Evaluate, Direct, Monitor (EDM)", "Strategic governance, stakeholder engagement, risk oversight", "Strategic alignment, value realization, risk management"],
              ["Align, Plan, Organize (APO)", "IT strategy, organization structure, resource management, supplier", "Capabilities, resource optimization, supplier relationships"],
              ["Build, Acquire, Implement (BAI)", "IT portfolio, project management, solutions delivery, IT operations setup", "IT projects delivered, solutions deployed, operations ready"],
              ["Deliver, Service, Support (DSS)", "Service operations, incident management, problem management, change management", "Service quality, incident resolution, change adoption"],
              ["Monitor, Evaluate, Assess (MEA)", "Performance monitoring, compliance, governance effectiveness", "IT performance visibility, compliance assurance, governance oversight"]
            ],
            caption: "COBIT 2019 Core Pillars dan Focus Areas"
          }
        ]
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity & Information Security",
        content: "Cybersecurity adalah praktik protecting systems dan data dari cyber attacks dan unauthorized access. Dengan increasing digitalization, cybersecurity risks semakin critical untuk business continuity. Information security policies, access controls, encryption, incident response planning, dan employee training adalah key components. Perusahaan fintech dan e-commerce di Indonesia menghadapi increasing cyber threats dan harus implement robust cybersecurity measures.",
        warning: "Cyber threats terus berkembang dengan sophistication increasing termasuk: ransomware attacks (mengencrypt data dan demand payment), phishing attacks (trick employees untuk reveal credentials), data breaches (unauthorized access ke sensitive data), DDoS attacks (disrupt service availability). Perusahaan harus implement layered security approach dengan technology (firewalls, intrusion detection), processes (security policies, incident response), dan people (security awareness training, user authentication) untuk protect dari threats dan comply dengan regulations seperti UU Perlindungan Data Pribadi (UU PDP) 2021."
      }
    ]
  }
];
