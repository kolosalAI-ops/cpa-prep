export const manajemenStratejikChapters = [
  {
    id: "analisis-lingkungan-eksternal",
    title: "Analisis Lingkungan Eksternal",
    description: "Memahami faktor-faktor eksternal yang mempengaruhi strategi perusahaan menggunakan framework PESTEL, Porter Five Forces, dan Industry Life Cycle",
    sections: [
      {
        id: "pestel-analysis",
        title: "Analisis PESTEL",
        content: "PESTEL adalah framework untuk menganalisis enam faktor lingkungan eksternal yang mempengaruhi industri dan perusahaan. Analisis ini membantu perusahaan memahami peluang dan ancaman dari berbagai dimensi. Memahami konteks eksternal adalah langkah pertama dalam formulasi strategi yang efektif. PT Telkom Indonesia harus mempertimbangkan regulasi pemerintah (Political) dan perkembangan teknologi 5G (Technological) dalam strategi ekspansinya.",
        tables: [
          {
            headers: ["Faktor PESTEL", "Contoh untuk Gojek Indonesia"],
            rows: [
              ["Political", "Regulasi pemerintah tentang transportasi online, UU 22/2009 tentang lalu lintas"],
              ["Economic", "Pertumbuhan GDP Indonesia, daya beli konsumen, inflasi"],
              ["Social", "Preferensi konsumen urban yang tech-savvy, pergeseran gaya hidup"],
              ["Technological", "Aplikasi mobile, AI untuk matching algorithm, pembayaran digital"],
              ["Environmental", "Dampak lingkungan transportasi, inisiatif kendaraan hijau"],
              ["Legal", "PPN, ketenagakerjaan, perlindungan data konsumen (UU PDP)"]
            ],
            caption: "Enam Faktor PESTEL dalam Konteks Gojek Indonesia"
          }
        ]
      },
      {
        id: "porter-five-forces",
        title: "Porter Five Forces",
        content: "Model Porter Five Forces mengidentifikasi lima kekuatan kompetitif dalam industri: ancaman dari pemain baru, kekuatan tawar pembeli, kekuatan tawar pemasok, ancaman produk pengganti, dan intensitas persaingan. Framework ini membantu perusahaan memahami tingkat kompetisi dan profitabilitas industri jangka panjang. Tokopedia menghadapi persaingan ketat dari Shopee dan Lazada, ancaman produk pengganti seperti live shopping, serta daya tawar pembeli yang tinggi.",
        tables: [
          {
            headers: ["Kekuatan Kompetitif", "Tingkat", "Analisis untuk E-Commerce Indonesia"],
            rows: [
              ["Ancaman Pemain Baru", "Menengah-Tinggi", "Modal besar, teknologi, ekosistem diperlukan"],
              ["Kekuatan Tawar Pembeli", "Tinggi", "Konsumen mudah beralih, banyak pilihan platform"],
              ["Kekuatan Tawar Pemasok", "Menengah", "UMKM bergantung pada platform"],
              ["Ancaman Produk Pengganti", "Menengah", "Live commerce, social commerce, marketplace sosial"],
              ["Intensitas Persaingan", "Sangat Tinggi", "Tokopedia vs Shopee vs Lazada vs Bukalapak"]
            ],
            caption: "Porter Five Forces dalam Industri E-Commerce Indonesia"
          }
        ],
        diagram: "Diagram bintang lima dengan kekuatan kompetitif di setiap titik"
      },
      {
        id: "industry-life-cycle",
        title: "Industry Life Cycle",
        content: "Siklus hidup industri terdiri dari empat tahap: introduction, growth, maturity, dan decline. Setiap tahap memiliki karakteristik unik terkait pertumbuhan, profitabilitas, dan strategi kompetitif. Industri e-commerce Indonesia masih berada di tahap growth dengan pertumbuhan pengguna dan transaksi yang pesat, menawarkan peluang ekspansi yang signifikan. Pemahaman posisi industri dalam lifecycle membantu perusahaan mengalokasikan sumber daya dengan tepat.",
        tables: [
          {
            headers: ["Tahap", "Karakteristik", "Strategi Kompetitif"],
            rows: [
              ["Introduction (Pengenalan)", "Pertumbuhan lambat, biaya tinggi, kompetitor sedikit", "Diferensiasi, membangun awareness, R&D"],
              ["Growth (Pertumbuhan)", "Pertumbuhan cepat, profitabilitas meningkat, pesaing masuk", "Ekspansi pasar, meningkatkan share, brand building"],
              ["Maturity (Kedewasaan)", "Pertumbuhan melambat, profitabilitas puncak, kompetisi intens", "Efisiensi biaya, diferensiasi, retensi pelanggan"],
              ["Decline (Penurunan)", "Pertumbuhan negatif, profit menurun, exit strategi", "Harvest strategy, niche focus, atau divest"]
            ],
            caption: "Tahap-Tahap Industry Life Cycle dan Strategi Terkait"
          }
        ]
      }
    ]
  },
  {
    id: "analisis-internal",
    title: "Analisis Internal",
    description: "Mengevaluasi kekuatan dan kelemahan internal perusahaan melalui Value Chain, Resource-Based View, dan SWOT-TOWS matrix",
    sections: [
      {
        id: "value-chain-analysis",
        title: "Value Chain Analysis",
        content: "Value chain adalah serangkaian aktivitas yang dilakukan perusahaan untuk menciptakan nilai bagi pelanggan. Michael Porter membedakan antara primary activities dan support activities yang bersama-sama menghasilkan value. Analisis value chain membantu mengidentifikasi sumber competitive advantage. PT Astra Internasional menggunakan value chain untuk mengoptimalkan distribusi kendaraan dari manufaktur hingga after-sales service.",
        tables: [
          {
            headers: ["Tipe Aktivitas", "Deskripsi", "Contoh"],
            rows: [
              ["Inbound Logistics", "Penerimaan dan penyimpanan input", "Procurement, warehouse, material handling"],
              ["Operations (Manufacturing)", "Transformasi input menjadi produk", "Assembly, production planning, quality control"],
              ["Outbound Logistics", "Distribusi produk ke pembeli", "Warehousing, transportasi, order fulfillment"],
              ["Marketing & Sales", "Promosi dan penjualan produk", "Advertising, pricing, sales force, customer service"],
              ["Service", "Dukungan purna jual", "Warranty, repair, installation, training"],
              ["Procurement", "Pembelian input (support)", "Sourcing, supplier management, purchasing"],
              ["Technology Development", "Inovasi dan improvement (support)", "R&D, sistem informasi, automation"],
              ["Human Resource Management", "Manajemen SDM (support)", "Recruitment, training, compensation, development"],
              ["Firm Infrastructure", "Infrastruktur umum (support)", "Finance, planning, quality management, law"]
            ],
            caption: "Primary dan Support Activities dalam Value Chain"
          }
        ]
      },
      {
        id: "rbv-vrin",
        title: "Resource-Based View & VRIN",
        content: "Resource-Based View (RBV) berpandangan bahwa keunggulan kompetitif berkelanjutan berasal dari sumber daya internal yang berharga, langka, sulit ditiru, dan sulit digantikan. Kriteria VRIN menentukan apakah suatu sumber daya dapat menjadi competitive advantage. BCA memiliki brand yang sangat valuable, rare di industri perbankan, dan sulit ditiru, menjadikan brand sebagai strategic resource utama.",
        tables: [
          {
            headers: ["Kriteria VRIN", "Penjelasan", "Contoh Sumber Daya"],
            rows: [
              ["Valuable (V)", "Memungkinkan perusahaan memanfaatkan peluang atau mengatasi ancaman", "Brand recognition, loyal customer base"],
              ["Rare (R)", "Tidak dimiliki oleh banyak kompetitor", "Patented technology, unique expertise"],
              ["Inimitable (I)", "Sulit ditiru kompetitor dalam jangka panjang", "Organizational culture, strategic network"],
              ["Non-substitutable (N)", "Tidak ada alternatif sumber daya yang dapat menggantikan", "Ecosystem lock-in, switching costs tinggi"]
            ],
            caption: "Kriteria VRIN untuk Sustainable Competitive Advantage"
          }
        ]
      },
      {
        id: "swot-tows",
        title: "SWOT & TOWS Matrix",
        content: "SWOT analysis mengidentifikasi Strengths, Weaknesses, Opportunities, dan Threats. TOWS matrix adalah pengembangan lebih lanjut yang menghasilkan strategi spesifik dari kombinasi faktor internal dan eksternal. Dengan memetakan faktor-faktor ini, perusahaan dapat mengembangkan strategi yang coherent dan realistic. BRI dapat memanfaatkan kekuatan jangkauan luas cabang untuk memanfaatkan peluang digitalisasi perbankan.",
        tables: [
          {
            headers: ["Matriks", "Opportunities", "Threats"],
            rows: [
              ["Strengths", "SO Strategy: Gunakan kekuatan untuk raih peluang", "ST Strategy: Gunakan kekuatan untuk minimalisir ancaman"],
              ["Weaknesses", "WO Strategy: Kurangi kelemahan untuk raih peluang", "WT Strategy: Minimalisir kelemahan dan ancaman"]
            ],
            caption: "TOWS Strategy Matrix"
          }
        ],
        steps: [
          "Identifikasi strengths internal yang kompetitif",
          "Identifikasi weaknesses yang membatasi competitive advantage",
          "Analisis opportunities eksternal dari trend industri",
          "Analisis threats kompetitif dari analisis Porter Five Forces",
          "Develop strategi SO, ST, WO, WT dari kombinasi faktor",
          "Prioritas strategi berdasarkan impact dan feasibility"
        ]
      }
    ]
  },
  {
    id: "strategi-korporat",
    title: "Strategi Korporat",
    description: "Menentukan tingkat pertumbuhan, portofolio bisnis, dan keputusan ekspansi atau diversifikasi melalui framework Ansoff, BCG Matrix, dan M&A strategies",
    sections: [
      {
        id: "ansoff-matrix",
        title: "Ansoff Growth Matrix",
        content: "Ansoff Matrix adalah framework 2x2 yang menunjukkan empat strategi pertumbuhan berdasarkan produk (existing vs new) dan pasar (existing vs new). Strategi ini membantu perusahaan memilih arah pertumbuhan yang sesuai dengan kapabilitas dan risiko. Gojek menggunakan strategi diversifikasi produk (new products ke pasar existing) dengan menambah layanan GojekFood, GoBox, dan GojekInsurance.",
        tables: [
          {
            headers: ["", "Existing Market", "New Market"],
            rows: [
              ["Existing Product", "Market Penetration: Increase share di pasar existing", "Market Development: Ekspansi ke geografis/segmen baru"],
              ["New Product", "Product Development: Inovasi produk untuk pasar existing", "Diversification: Produk baru di pasar baru (highest risk)"]
            ],
            caption: "Ansoff Growth Matrix"
          }
        ]
      },
      {
        id: "bcg-ge-mckinsey",
        title: "BCG Matrix & GE-McKinsey Matrix",
        content: "BCG (Boston Consulting Group) Matrix memposisikan business unit berdasarkan market growth rate dan relative market share, menghasilkan klasifikasi: Stars, Cash Cows, Question Marks, Dogs. GE-McKinsey Matrix memperluas framework dengan 9 quadrants menggunakan Business Attractiveness dan Competitive Position. Keduanya membantu alokasi resources dan portfolio optimization. Perusahaan konglomerat seperti Astra menggunakan matrix ini untuk memutuskan investasi di automotive, financial services, dan heavy equipment.",
        tables: [
          {
            headers: ["Kategori BCG", "Karakteristik", "Strategi"],
            rows: [
              ["Stars", "High growth, high share - positif cash flow", "Invest untuk maintain leadership"],
              ["Cash Cows", "Low growth, high share - cash generator", "Harvest cash untuk fund stars"],
              ["Question Marks", "High growth, low share - cash drain", "Invest atau divest, question mark"],
              ["Dogs", "Low growth, low share - minimal return", "Harvest atau divest"]
            ],
            caption: "BCG Matrix Positioning"
          },
          {
            headers: ["GE-McKinsey", "High Attractiveness", "Medium Attractiveness", "Low Attractiveness"],
            rows: [
              ["Strong Position", "Invest & Grow", "Grow Selectively", "Harvest/Maintain"],
              ["Medium Position", "Grow Selectively", "Selective Investment", "Harvest/Divest"],
              ["Weak Position", "Invest for Growth", "Harvest/Divest", "Divest"]
            ],
            caption: "GE-McKinsey 9-Box Matrix Decision Rules"
          }
        ]
      },
      {
        id: "diversification-m-a",
        title: "Diversification & M&A Strategies",
        content: "Diversifikasi adalah strategi ekspansi ke bisnis baru dengan tujuan pertumbuhan dan risk reduction. M&A (Mergers & Acquisitions) adalah mekanisme untuk implementasi diversifikasi dengan akuisisi perusahaan lain. Berdasarkan tingkat keterkaitan bisnis, diversifikasi dapat bersifat related atau unrelated. PT Astra melakukan related diversification dengan ekspansi dari automotive manufacturing ke financial services, mining, dan infrastructure - semua mendukung ekosistem transportasi dan logistik.",
        tables: [
          {
            headers: ["Tipe M&A", "Deskripsi", "Contoh"],
            rows: [
              ["Horizontal Integration", "Akuisisi kompetitor di industri yang sama", "Gojek akuisisi Grab atau merger dengan Tokopedia"],
              ["Vertical Integration", "Akuisisi upstream (supplier) atau downstream (distributor)", "Astra akuisisi pemasok spare parts atau dealer"],
              ["Related Diversification", "Akuisisi bisnis dengan kesamaan industri/capability", "Astra akuisisi financial services company"],
              ["Unrelated Diversification", "Akuisisi bisnis tidak terkait untuk portfolio diversification", "Perusahaan konglomerat diversifikasi ke berbagai sektor"]
            ],
            caption: "Tipe-Tipe M&A Strategies"
          }
        ],
        steps: [
          "Identifikasi strategic rationale untuk diversifikasi atau M&A",
          "Screen target candidates dan assess fit dengan strategi",
          "Valuation target menggunakan DCF, comparable, atau other methods",
          "Negotiate term dan kondisi akuisisi",
          "Due diligence untuk identifikasi risks dan hidden liabilities",
          "Post-merger integration planning dan execution",
          "Monitoring dan performance evaluation terhadap target"
        ]
      }
    ]
  },
  {
    id: "strategi-bisnis",
    title: "Strategi Bisnis (Business Unit Strategy)",
    description: "Strategi kompetitif pada level bisnis unit untuk mencapai keunggulan kompetitif melalui Porter Generic, Blue Ocean, dan Bowman's Clock strategies",
    sections: [
      {
        id: "porter-generic-strategies",
        title: "Porter Generic Strategies",
        content: "Porter mengidentifikasi tiga strategi generik untuk mencapai competitive advantage: cost leadership, differentiation, dan focus. Cost leadership menargetkan volume tinggi dengan margin rendah. Differentiation menciptakan perceived value yang unik. Focus memilih niche pasar spesifik. BRI menggunakan cost leadership dengan efisiensi operasional tinggi untuk melayani mass market. Sementara Bank Mandiri fokus pada differentiation dengan premium customer experience.",
        tables: [
          {
            headers: ["Strategi", "Target Pasar", "Competitive Advantage", "Risiko", "Contoh Perusahaan"],
            rows: [
              ["Cost Leadership", "Broad Market", "Lowest cost dalam industri", "Price war, quality perception", "Tokopedia (competing on price vs Shopee)"],
              ["Differentiation", "Broad Market", "Unique products/services", "Cost premium tidak sustainable", "Apple (iphone), BCA (service quality)"],
              ["Cost Focus", "Niche Market", "Lowest cost dalam niche", "Market size limitation", "Warung kopi lokal dengan harga ekonomis"],
              ["Differentiation Focus", "Niche Market", "Unique value dalam niche", "Niche vulnerability", "Specialty boutique hotel dengan unique experience"]
            ],
            caption: "Porter Generic Strategies Comparison"
          }
        ]
      },
      {
        id: "blue-ocean-strategy",
        title: "Blue Ocean Strategy",
        content: "Blue Ocean Strategy adalah pendekatan menciptakan pasar baru (blue ocean) daripada bersaing di pasar yang sudah ada (red ocean). Strategi ini menggabungkan diferensiasi dengan cost leadership melalui Value Innovation. Gojek menciptakan blue ocean dengan mengkombinasikan berbagai layanan (ride, food, payment) dalam satu platform yang belum ada kompetitornya. Ini berbeda dengan Grab yang berkompetisi di red ocean dengan model traditional ride-sharing.",
        tables: [
          {
            headers: ["Aspek", "Red Ocean", "Blue Ocean"],
            rows: [
              ["Pasar", "Existing market structure", "Create uncontested market space"],
              ["Kompetisi", "Beat the competition", "Make competition irrelevant"],
              ["Value", "Exploit existing value", "Create new value for customers"],
              ["Cost", "Low cost OR premium price", "Low cost AND premium value"],
              ["Strategic Focus", "Product features (differentiation)", "Total customer experience (value innovation)"],
              ["Contoh", "Shopee vs Tokopedia price war", "Gojek super app ecosystem"]
            ],
            caption: "Red Ocean vs Blue Ocean Strategy"
          }
        ],
        diagram: "ERRC Grid (Eliminate-Reduce-Raise-Create) untuk value innovation"
      },
      {
        id: "bowman-clock",
        title: "Bowman's Clock",
        content: "Bowman's Clock atau Bowman Strategy Clock adalah framework delapan posisi strategis berdasarkan dua dimensi: price dan perceived added value. Strategi bergerak clockwise dari low price low value menuju premium positioning. Setiap posisi memiliki risiko unik. McDonald's menggunakan strategi 'appropriate value' dengan price moderat dan value tinggi (fast service, consistency). Sementara Starbucks di posisi 'premium value' dengan harga tinggi dan perceived value premium.",
        tables: [
          {
            headers: ["Posisi", "Price", "Perceived Value", "Deskripsi", "Contoh Indonesia"],
            rows: [
              ["1", "Low", "Low", "Low cost, low value - tidak sustainable", ""],
              ["2", "Low", "Medium-Low", "No-frills, basic offering", "Warung tradisional, GoFood ekonomis"],
              ["3", "Low-Medium", "Medium", "Appropriate value, good value for money", "McDonald's, Indomie"],
              ["4", "Medium", "Medium-High", "Better value at medium price", "Café menengah"],
              ["5", "Medium-High", "High", "Premium positioning, higher price justified", "Starbucks, BCA premium service"],
              ["6", "High", "High", "Premium, luxury, exclusive", "Luxury hotel, premium airline"],
              ["7", "High", "Medium", "Overpriced - dangerous position", ""],
              ["8", "Low-Medium", "High", "Value innovation, unexpected value", "Gojek super app, Southwest Airlines"]
            ],
            caption: "Bowman's Strategic Clock Eight Positions"
          }
        ]
      }
    ]
  },
  {
    id: "implementasi-strategi",
    title: "Implementasi Strategi",
    description: "Mekanisme pelaksanaan strategi melalui McKinsey 7S Framework, Change Management, dan Balanced Scorecard untuk mengukur dan mengontrol eksekusi",
    sections: [
      {
        id: "mckinsey-7s",
        title: "McKinsey 7S Framework",
        content: "McKinsey 7S Framework adalah alat untuk menganalisis dan meningkatkan strategic fit antara tujuh elemen organisasi: Strategy, Structure, Systems, Shared Values, Skills, Style, dan Staff. Framework ini memastikan alignment antara strategi dan implementasinya. Ketujuh elemen harus saling mendukung untuk execution yang efektif. Ketika Telkom mengimplementasikan strategi digital transformation, semua elemen 7S harus diselaraskan dari struktur organisasi digital hingga skill karyawan di era digital.",
        tables: [
          {
            headers: ["Elemen 7S", "Penjelasan", "Pertanyaan Kunci"],
            rows: [
              ["Strategy", "Rencana untuk mencapai competitive advantage", "Apa strategi kompetitif kita? Bagaimana mencapai tujuan?"],
              ["Structure", "Organisasi design dan reporting hierarchy", "Apakah struktur mendukung strategi? Centralized atau decentralized?"],
              ["Systems", "Proses dan prosedur operasional untuk implementasi", "Apakah sistem mendukung strategi? Bagaimana mengukur performance?"],
              ["Shared Values (Culture)", "Core values dan beliefs organisasi", "Apakah kultur mendukung strategi? Values alignment?"],
              ["Skills", "Kompetensi dan keahlian karyawan", "Apakah kita punya skills yang diperlukan? Training needs?"],
              ["Style", "Leadership style dan cara pengambilan keputusan", "Bagaimana style leader mendukung strategi?"],
              ["Staff", "People dan talent management", "Apakah kita punya talenta yang tepat? Motivation? Culture?"]
            ],
            caption: "McKinsey 7S Framework Elements"
          }
        ],
        diagram: "Diagram bintang tujuh dengan strategy di center dan enam elemen lain mengelilingi"
      },
      {
        id: "change-management",
        title: "Change Management & Organizational Change",
        content: "Change management adalah proses mengelola transisi organisasi dari state saat ini ke desired future state. Perubahan strategis memerlukan perubahan budaya, proses, dan struktur organisasi secara bersamaan. John Kotter mengidentifikasi delapan tahap change management yang sukses. Ketika PT PLN melakukan transformasi digital, diperlukan change management yang sistematis untuk mengubah mindset karyawan dari traditional operations ke digital-first operations.",
        tables: [
          {
            headers: ["Tahap Kotter", "Deskripsi", "Aktivitas"],
            rows: [
              ["1. Create Urgency", "Establish sense of urgency untuk change", "Komunikasi case for change, threat assessment"],
              ["2. Build Coalition", "Bangun koalisi pemimpin yang champion change", "Identifikasi influencer, align leadership"],
              ["3. Form Vision", "Develop vision dan strategi untuk change", "Create compelling vision, communicate clearly"],
              ["4. Communicate", "Komunikasi vision melalui multiple channels", "Storytelling, multiple touchpoints, two-way communication"],
              ["5. Empower Action", "Empower employees untuk ambil action", "Remove obstacles, enable decision-making"],
              ["6. Create Wins", "Ciptakan short-term wins untuk maintain momentum", "Quick victories, celebrate success"],
              ["7. Don't Give Up", "Konsolidasi gains dan drive continuous improvement", "Assess progress, adjust strategy if needed"],
              ["8. Embed Culture", "Embed change ke dalam organizational culture", "Update systems, processes, selection criteria"]
            ],
            caption: "Kotter's 8-Step Change Management Process"
          },
          {
            headers: ["Model Lewin", "Tahap", "Deskripsi"],
            rows: [
              ["Unfreeze", "Menciptakan readiness untuk change", "Communicate urgency, build motivation untuk change"],
              ["Change", "Implementasi perubahan", "Execute new behaviors, processes, systems"],
              ["Refreeze", "Reinforce perubahan baru", "Stabilize change, update systems dan culture"]
            ],
            caption: "Lewin's Three-Stage Change Model"
          }
        ],
        warning: "Kegagalan change management dapat mengakibatkan resistensi karyawan, drop produktivitas, dan kehilangan talenta. Riset menunjukkan 70% change initiatives gagal karena poor execution atau lack of employee buy-in."
      },
      {
        id: "balanced-scorecard",
        title: "Balanced Scorecard (BSC)",
        content: "Balanced Scorecard adalah framework pengukuran kinerja yang mengukur strategi dari empat perspektif: Financial, Customer, Internal Processes, dan Learning & Growth. BSC menghubungkan strategi dengan operasi dan mengkonversi strategi menjadi KPI yang terukur. PT Bank Internasional Indonesia menggunakan BSC untuk mengukur apakah implementasi strategi ekspansi digital tercapai atau tidak melalui metrics di keempat perspektif.",
        tables: [
          {
            headers: ["Perspektif BSC", "Fokus", "Contoh Metrics"],
            rows: [
              ["Financial", "Bagaimana value creation untuk shareholders?", "Revenue growth, profit margin, ROI, cash flow, stock price"],
              ["Customer", "Bagaimana customer view terhadap kita?", "Customer satisfaction, NPS, retention rate, market share, customer lifetime value"],
              ["Internal Process", "Proses internal apa yang harus excellent?", "Process efficiency, quality, innovation cycle time, operational metrics"],
              ["Learning & Growth", "Bagaimana kita terus berinovasi dan improve?", "Employee satisfaction, training hours, retention rate, revenue per employee"]
            ],
            caption: "Balanced Scorecard Four Perspectives dan Metrics"
          }
        ]
      }
    ]
  },
  {
    id: "strategi-digital",
    title: "Strategi Digital & Transformasi",
    description: "Strategi memanfaatkan teknologi digital untuk menciptakan value dan competitive advantage melalui digital transformation, disruptive innovation, dan platform business models",
    sections: [
      {
        id: "digital-transformation",
        title: "Digital Transformation & Industry 4.0",
        content: "Digital transformation adalah fundamentalperubahan dalam cara perusahaan beroperasi, menciptakan value, dan berinteraksi dengan customers menggunakan teknologi digital. Industry 4.0 (Fourth Industrial Revolution) menggabungkan IoT, AI, cloud computing, dan data analytics. Transformasi digital bukan hanya tentang teknologi tetapi juga tentang mengubah business models, processes, dan organizational culture. PT Astra berinvestasi dalam digital transformation untuk mengintegrasikan supply chain, manufacturing, dan after-sales service dengan teknologi IoT dan data analytics.",
        tables: [
          {
            headers: ["Tahap Transformasi", "Maturity Level", "Karakteristik"],
            rows: [
              ["Initial", "Level 1", "Ad-hoc digital initiatives, limited integration, legacy systems dominan"],
              ["Developing", "Level 2", "Basic digital infrastructure, departmental digitalization, inconsistent adoption"],
              ["Managed", "Level 3", "Integrated digital ecosystem, process digitalization, data-driven decisions"],
              ["Optimized", "Level 4", "End-to-end digital ecosystem, customer-centric, continuous innovation"],
              ["Pioneering", "Level 5", "Disruptive innovation, platform economy, ecosystem orchestration"]
            ],
            caption: "Digital Transformation Maturity Levels"
          },
          {
            headers: ["Industri 4.0 Pilar", "Teknologi", "Impact"],
            rows: [
              ["IoT (Internet of Things)", "Sensors, connectivity, real-time monitoring", "Visibility, predictive maintenance, automation"],
              ["Big Data & Analytics", "Data collection, processing, analytics", "Insights, optimization, decision-making"],
              ["Cloud Computing", "Scalable infrastructure, SaaS, PaaS", "Flexibility, cost efficiency, accessibility"],
              ["AI & Machine Learning", "Algorithms, neural networks, automation", "Optimization, personalization, autonomous decisions"],
              ["Cybersecurity", "Data protection, network security", "Risk mitigation, trust, compliance"]
            ],
            caption: "Industry 4.0 Technology Pillars"
          }
        ]
      },
      {
        id: "disruptive-innovation",
        title: "Disruptive Innovation",
        content: "Disruptive innovation menciptakan pasar baru atau mengganggu pasar existing dengan technology, business model, atau value proposition yang radically different. Clayton Christensen mengidentifikasi bahwa disruptive innovations seringkali dimulai dengan low-end market atau new market segments dengan simpler, cheaper solutions. Gojek adalah contoh disruptive innovation dalam transportation industry dengan mengubah dari traditional taxi service menjadi mobile-based on-demand transportation platform.",
        tables: [
          {
            headers: ["Aspek", "Sustaining Innovation", "Disruptive Innovation"],
            rows: [
              ["Target Market", "Existing market, mainstream customers", "New market atau low-end segment"],
              ["Performance", "Improve pada valued attributes", "Different attributes, simpler, often cheaper"],
              ["Technology", "Incremental improvement existing technology", "New technology atau different application"],
              ["Incumbent Response", "Incumbent lead innovation", "Incumbent ignore atau unable to respond"],
              ["Impact", "Improve market share", "Displace atau transform market structure"],
              ["Contoh", "Ford Model T (car improvement)", "Gojek (disrupt traditional taxi), Netflix (disrupt video rental)"]
            ],
            caption: "Sustaining vs Disruptive Innovation Comparison"
          }
        ]
      },
      {
        id: "platform-business-models",
        title: "Platform Business Models",
        content: "Platform business models menciptakan value dengan memfasilitasi interaksi antara multiple stakeholder groups (producers, consumers, advertisers). Platform ekonomi berbeda dengan pipeline business models yang menciptakan value melalui produksi dan distribusi linear. Tokopedia, Gojek, Grab, dan Spotify adalah contoh platform business models. Platform models memiliki network effects yang powerful sehingga menciptakan switching costs tinggi dan competitive moats yang sustainable.",
        tables: [
          {
            headers: ["Aspek", "Pipeline Model", "Platform Model"],
            rows: [
              ["Value Creation", "Create & Deliver products to customers", "Facilitate interactions antara multiple stakeholders"],
              ["Value Capture", "Revenue dari direct sales", "Revenue dari multiple sources (commissions, ads, data)"],
              ["Revenue Model", "Product sales, subscription", "Transaction fees, advertising, data monetization"],
              ["Network Effects", "Limited network effects", "Powerful network effects (more users = more value)"],
              ["Competitive Advantage", "Scale & efficiency", "Network effects, switching costs, data advantage"],
              ["Contoh", "Traditional retail, manufacturing", "Tokopedia, Gojek, YouTube, Airbnb, Fintech platforms"]
            ],
            caption: "Pipeline vs Platform Business Models"
          }
        ]
      }
    ]
  }
];
