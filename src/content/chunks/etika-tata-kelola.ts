export const etikaTataKelolaChapters = [
  {
    id: "kode-etik-akuntan",
    title: "Kode Etik Akuntan",
    description: "Lima prinsip etika dasar, kerangka konseptual, dan Kode Etik IAI untuk professional accountants",
    sections: [
      {
        id: "lima-prinsip-etika",
        title: "Lima Prinsip Dasar Etika Akuntan",
        content: "Kode Etik Akuntan Indonesia (berdasarkan IFAC Code of Ethics) menetapkan lima prinsip dasar yang mengatur perilaku akuntan profesional. Kelima prinsip ini memberikan ethical framework untuk guidance dalam situasi kompleks dan ambiguous. Akuntan harus committed pada lima prinsip ini dalam semua aspek pekerjaan mereka. Pelanggaran terhadap prinsip-prinsip ini dapat mengakibatkan disciplinary action oleh IAI (Ikatan Akuntan Indonesia).",
        tables: [
          {
            headers: ["Prinsip", "Definisi", "Aplikasi Praktis"],
            rows: [
              ["Integritas", "Forthright dan honest dalam semua professional relationships", "Don't accept gift dari audit client, disclose conflicts of interest"],
              ["Objektivitas", "Fair, unbiased dalam fact-finding dan decision-making", "Independent dari prejudice, bias, atau conflicts of interest"],
              ["Kerahasiaan (Confidentiality)", "Respect confidential information, tidak disclose tanpa authorization", "Protect client information, don't use untuk personal gain"],
              ["Kompetensi Profesional", "Maintain professional knowledge dan skill untuk provide quality service", "Continuous learning, understand technical requirements, disclose limitations"],
              ["Perilaku Profesional", "Comply dengan laws & regulations, enhance profession reputation", "Don't engage fraud/illegal activity, report violations, promote ethical standards"]
            ],
            caption: "Lima Prinsip Dasar Kode Etik Akuntan"
          }
        ]
      },
      {
        id: "conceptual-framework",
        title: "Kerangka Konseptual untuk Etika Akuntan",
        content: "Kerangka konseptual memberikan systematic approach untuk identify, evaluate, dan address ethical threats. Framework menggunakan identify threats, evaluate significance, dan implement safeguards approach. Threats dapat berasal dari self-interest, self-review, advocacy, familiarity, atau intimidation. Safeguards dapat berupa professional, organizational, regulatory, atau personal safeguards.",
        steps: [
          "Identify situasi yang berisi potential ethical threat terhadap compliance dengan prinsip etika",
          "Evaluate significance threat (whether reasonable member dari profession akan perceive sebagai material breach)",
          "Identify applicable safeguards untuk address threats",
          "Determine appropriate action jika no safeguards adequately mitigate threats",
          "Document analysis dan conclusions"
        ]
      },
      {
        id: "kode-etik-iai",
        title: "Kode Etik IAI (Ikatan Akuntan Indonesia)",
        content: "Kode Etik IAI adalah standards etika yang mandatory untuk semua akuntan profesional anggota IAI. Kode Etik IAI didasarkan pada IFAC Code of Ethics dengan adaptasi untuk konteks Indonesia. Anggota IAI wajib mematuhi Kode Etik IAI dalam praktik profesional mereka. Pelanggaran Kode Etik dapat mengakibatkan sanctions dari IAI termasuk warning, suspension, atau expulsion dari organisasi.",
        notes: [
          "Kode Etik IAI berlaku untuk public accountants (auditors), management accountants, dan government accountants",
          "Kode Etik IAI mencakup specific guidelines untuk auditors termasuk independence requirements, conduct dalam engagement, dan fee arrangements",
          "Kode Etik IAI juga mengatur perilaku dalam context professional practices seperti tidak merebut clients dari akuntan lain secara tidak etis"
        ]
      }
    ]
  },
  {
    id: "independensi-auditor",
    title: "Independensi Auditor",
    description: "Ancaman terhadap independensi, pengamanan, dan regulasi untuk maintain auditor independence",
    sections: [
      {
        id: "independence-threats",
        title: "Lima Ancaman terhadap Independensi Auditor",
        content: "Independensi adalah cornerstone dari audit profession karena stakeholders mengandalkan auditor untuk provide objective assessment tentang financial statements. Terdapat lima kategori ancaman yang dapat compromise auditor independence. Ancaman ini dapat berasal dari berbagai sumber termasuk audit client, external parties, atau auditor's own interests. Memahami threats dan available safeguards adalah critical untuk maintaining independence.",
        tables: [
          {
            headers: ["Tipe Ancaman", "Definisi", "Contoh"],
            rows: [
              ["Self-Interest Threat", "Personal financial interest dalam audit client atau engagement outcome", "Significant fee dependency pada audit client, investment dalam audit client"],
              ["Self-Review Threat", "Auditor member tim created atau signed off on client's systems/accounts", "Auditor previously worked untuk client sebagai CFO, then become auditor"],
              ["Advocacy Threat", "Auditor promotes interest dari audit client", "Auditor assist client dalam legal disputes dengan third parties"],
              ["Familiarity Threat", "Long relationship dengan client atau key personnel mengurangi skepticism", "Long tenure sebagai auditor (10+ tahun), close personal relationship dengan client management"],
              ["Intimidation Threat", "Client explicitly atau implicitly threaten mengganti auditor jika audit findings unfavorable", "Management threatens dismiss auditor if significant audit adjustments proposed, management withhold information"]
            ],
            caption: "Lima Jenis Threats terhadap Auditor Independence"
          }
        ]
      },
      {
        id: "safeguards-independence",
        title: "Pengamanan Independensi & Regulasi",
        content: "Pengamanan adalah measures untuk mitigate threats terhadap independensi. Pengamanan dapat berupa professional safeguards (peer review, continuing education), firm-level safeguards (quality control, partner rotation), client-level safeguards (audit committee), atau regulatory safeguards. Indonesia memiliki several regulations untuk protect auditor independence termasuk audit partner rotation requirements dan restrictions tentang non-audit services.",
        rules: [
          "Partner rotation: Audit partner (partner bertanggung jawab atas audit engagement) harus rotated setiap maksimal 5 tahun untuk audit client publik",
          "Cooling-off period: Audit partner harus wait minimal 2 tahun sebelum dapat work untuk audit client dalam non-audit capacity",
          "Fee dependency: Audit fee tidak boleh exceed 15% dari total revenue firm (untuk audit clients publik)",
          "Non-audit services restriction: Auditor tidak boleh provide certain non-audit services seperti internal audit, accounting, atau management decision-making services kepada audit client",
          "Audit committee approval: Engagement terms dan fees untuk audit services harus approved oleh audit committee (untuk public companies)",
          "Regulasi OJK & BapepamLK: Indonesian securities regulator memiliki specific independence requirements untuk auditors dari listed companies"
        ]
      },
      {
        id: "independence-warning",
        title: "Peringatan: Risiko Independensi",
        content: "Independence adalah aset paling berharga dari auditor. Compromise independensi dapat mengakibatkan:",
        warning: "Kehilangan credibility dengan stakeholders, ketidaksesuaian dengan regulatory requirements (dapat lead ke delisting atau penalties dari OJK), laporan audit tidak useful, peningkatan audit risk, kemungkinan litigation jika audit miss significant misstatements, dan damage reputasi firm. Auditors harus bersikap proactive dalam identifying threats dan implementing appropriate safeguards untuk maintain independence."
      }
    ]
  },
  {
    id: "tata-kelola-perusahaan",
    title: "Good Corporate Governance (GCG)",
    description: "Prinsip TARIF, organ perseroan, komite audit, dan implementasi GCG di Indonesia",
    sections: [
      {
        id: "tarif-principles",
        title: "Prinsip-Prinsip TARIF dalam GCG",
        content: "GCG adalah sistem untuk mengelola perusahaan dengan accountability, integrity, dan transparency. Komite Nasional Kebijakan Governance (KNKG) di Indonesia mengidentifikasi lima prinsip dasar GCG yang dirangkum sebagai TARIF: Transparency, Accountability, Responsibility, Fairness, dan Independency. Kelima prinsip ini saling terhubung dan essential untuk establishing sound corporate governance practices.",
        tables: [
          {
            headers: ["Prinsip TARIF", "Deskripsi", "Implementasi"],
            rows: [
              ["Transparency", "Disclosure informasi yang akurat, timely, dan comprehensive", "Financial statements published, material issues disclosed, website information"],
              ["Accountability", "Clear responsibility lines dan consequences untuk performance", "Defined roles untuk board/management, performance metrics, compensation tied to performance"],
              ["Responsibility", "Compliance dengan applicable laws & regulations", "Written policies, compliance monitoring, disciplinary procedures"],
              ["Fairness", "Fair treatment untuk semua shareholders dan stakeholders", "Equal information access, fair pricing dalam related-party transactions, protect minority shareholder rights"],
              ["Independency", "Independent decision-making free dari conflicts of interest", "Independent directors, independent audit committee, separate CEO-Chairman roles"]
            ],
            caption: "Prinsip-Prinsip TARIF dalam Good Corporate Governance"
          }
        ]
      },
      {
        id: "organs-perseroan",
        title: "Organ Perseroan & Roles dalam GCG",
        content: "PT memiliki structure dengan three main organs yang specified dalam UU 40/2007: RUPS (Rapat Umum Pemegang Saham), Direksi, dan Dewan Komisaris. Setiap organ memiliki specific roles, responsibilities, dan accountability dalam governance structure. Clear delineation antara powers dan responsibilities dari setiap organ adalah essential untuk effective governance.",
        tables: [
          {
            headers: ["Organ", "Komposisi", "Role & Responsibility", "Accountability"],
            rows: [
              ["RUPS", "Pemegang saham yang hadir", "Tertinggi decision-making body, elect board/audit committee, approve financial statements", "To shareholders dan stakeholders"],
              ["Direksi", "1+ executives", "Manage PT daily operations, implement RUPS decisions, execute strategy", "To RUPS dan third parties"],
              ["Dewan Komisaris", "Min 1 (pribadi) atau 3 (publik)", "Supervise direksi, protect shareholder interests, ensure compliance dengan laws", "To RUPS dan shareholders"]
            ],
            caption: "Organ Perseroan dalam UU 40/2007"
          }
        ]
      },
      {
        id: "audit-committee",
        title: "Komite Audit & Audit Committee Role",
        content: "Komite Audit adalah committee dari board yang responsible untuk oversight tentang financial reporting, internal controls, audit process, dan risk management. Komite Audit harus independent dari management dan primarily accountable kepada shareholders through board. Komite Audit memiliki increasing importance dalam governance terutama setelah corporate scandals yang menunjukkan weakness dalam audit oversight."
      }
    ]
  },
  {
    id: "pengendalian-internal",
    title: "Pengendalian Internal",
    description: "COSO 2013 Framework, Three Lines Model, dan whistleblowing systems",
    sections: [
      {
        id: "coso-framework",
        title: "COSO 2013 Framework - Lima Komponen Pengendalian Internal",
        content: "Committee of Sponsoring Organizations (COSO) menerbitkan Internal Control - Integrated Framework yang merupakan standard internationally recognized untuk internal control. COSO 2013 mengidentifikasi lima komponen pengendalian internal yang integrated dan interrelated. Kelima komponen ini harus present dan functioning secara efektif untuk establish effective internal control system.",
        tables: [
          {
            headers: ["Komponen COSO", "Definisi", "Elemen Utama"],
            rows: [
              ["Control Environment", "Foundation untuk semua komponen lain, ethical values, tone dari top", "Integrity values, ethical behavior, competence, management accountability"],
              ["Risk Assessment", "Identify dan analyze risks terhadap achievement objectives", "Internal/external risk factors, management risk appetite, risk evaluation"],
              ["Control Activities", "Policies dan procedures untuk mitigate identified risks", "Authorization controls, access controls, segregation of duties, reconciliations"],
              ["Information & Communication", "Timely information identified, captured, distributed untuk enable decisions", "Data quality, information flow, internal/external communication channels"],
              ["Monitoring Activities", "Ongoing evaluation atau separate assessment dari control effectiveness", "Continuous monitoring, periodic evaluations, management reviews, internal audit"]
            ],
            caption: "Lima Komponen COSO 2013 Internal Control Framework"
          }
        ]
      },
      {
        id: "three-lines-model",
        title: "Three Lines Model untuk Risk & Control Governance",
        content: "Three Lines Model (revisi dari traditional Three Lines of Defense) menjelaskan roles dan responsibilities dalam risk management dan internal control. Model ini clarify communication, coordination, dan information flows antara board, management, dan internal auditors.",
        diagram: "Three Lines Model menunjukkan: Line 1 (Management) memiliki ownership terhadap risks dan controls, Line 2 (Risk/Compliance functions) provides oversight dan guidance, Line 3 (Internal Audit) provides independent assurance"
      },
      {
        id: "whistleblowing",
        title: "Whistleblowing Systems & Fraud Reporting",
        content: "Whistleblowing systems adalah mechanisms untuk employees melaporkan suspected fraud, misconduct, atau violations dari code of conduct. Effective whistleblowing system adalah penting untuk early detection dari fraud dan misconduct. PT harus establish anonymous reporting channels, protect whistleblower identities, dan investigate allegations secara thorough dan impartial."
      }
    ]
  },
  {
    id: "anti-fraud",
    title: "Anti-Fraud & Fraud Detection",
    description: "Fraud Triangle, red flags, dan regulatory framework anti-fraud di Indonesia",
    sections: [
      {
        id: "fraud-triangle",
        title: "Fraud Triangle: Motivation, Opportunity, Rationalization",
        content: "Fraud Triangle adalah model yang identify tiga elements yang biasanya present dalam fraud situation: Pressure/Motivation (financial stress, greed), Opportunity (weak controls, inadequate oversight), dan Rationalization (justification untuk fraud). Understanding fraud triangle membantu auditors identify fraud risk areas dan design appropriate audit procedures.",
        diagram: "Segitiga dengan tiga sisi: Pressure (motivation), Opportunity (weak controls, access), dan Rationalization (justification)"
      },
      {
        id: "fraud-red-flags",
        title: "Red Flags untuk Fraud Detection",
        content: "Red flags adalah warning signs yang dapat indicate potential fraud. Auditors harus trained untuk recognize red flags dan conduct appropriate investigation. Red flags dapat berasal dari accounting/financial area, management behavior, atau unusual transactions.",
        tables: [
          {
            headers: ["Kategori Red Flag", "Contoh", "Implikasi"],
            rows: [
              ["Accounting Red Flags", "Unusual journal entries, missing documentation, reconciliation issues", "May indicate unauthorized transactions atau attempts cover fraud"],
              ["Management Red Flags", "Excessive confidence/arrogance, override controls, dominance, lifestyle changes", "Management fraud risk potentially significant"],
              ["Transaction Red Flags", "Related-party transactions, unusual timing, round amounts, journal entry reversal", "Need deeper investigation"],
              ["System/Control Red Flags", "Weak segregation of duties, poor documentation, lack of approval procedures", "Increased fraud opportunity"],
              ["Financial Statement Red Flags", "Unusual increases dalam revenue/income, changes dalam estimates, aggressive accounting", "Potential material misstatement"]
            ],
            caption: "Red Flags untuk Fraud Detection"
          }
        ]
      },
      {
        id: "anti-fraud-regulations",
        title: "Regulasi Anti-Fraud: UU Tipikor, FCPA, UK Bribery Act",
        content: "Indonesia dan countries lain memiliki legal frameworks untuk combat fraud dan corruption. UU Tipikor (Tindak Pidana Korupsi) adalah Indonesia's primary anti-corruption law. FCPA (Foreign Corrupt Practices Act) adalah US law yang apply kepada US companies dan entities doing business di US. UK Bribery Act adalah UK's comprehensive anti-bribery law. Perusahaan harus ensure compliance dengan applicable anti-fraud dan anti-corruption laws dalam semua jurisdictions mereka operate.",
        tables: [
          {
            headers: ["Regulasi", "Jurisdiction", "Scope", "Key Provisions"],
            rows: [
              ["UU Tipikor No. 31/1999", "Indonesia", "Corrupt practices, bribery, abuse of position", "Criminalize bribery, corruption, asset seizure provisions, whistleblower protection"],
              ["FCPA 1977", "United States", "Bribery foreign officials, anti-money laundering", "Prohibit payments ke foreign officials untuk obtain business, penalties untuk violations"],
              ["UK Bribery Act 2010", "United Kingdom", "Bribery, corruption, commercial transactions", "Broad scope covering anyone in UK, commercial bribery, corporate liability untuk failure prevent bribery"]
            ],
            caption: "Perbandingan Regulasi Anti-Fraud/Corruption International"
          }
        ]
      }
    ]
  },
  {
    id: "tata-kelola-sektor-publik",
    title: "Tata Kelola Sektor Publik",
    description: "BPK, BPKP, dan SAP dalam konteks governance organisasi publik Indonesia",
    sections: [
      {
        id: "bpk-framework",
        title: "BPK (Badan Pemeriksa Keuangan) & Audit Opini",
        content: "BPK adalah independent supreme audit institution untuk Indonesia yang bertugas audit keuangan pemerintah pusat, pemerintah daerah, dan entities lain sesuai dengan laws. BPK mengaudit untuk compliance dengan laws & regulations dan evaluate value for money dari government spending. BPK menerbitkan audit opinion atas financial statements pemerintah yang dapat menjadi basis untuk accountability dan corrective action.",
        tables: [
          {
            headers: ["Tipe Opini BPK", "Kondisi", "Implikasi"],
            rows: [
              ["Wajar Tanpa Pengecualian (WTP)", "Financial statements fair & complete, no significant misstatements", "Clean audit, good financial management"],
              ["Wajar Dengan Pengecualian (WDP)", "Some material misstatements/deviations, generally fair presentation", "Some issues need attention"],
              ["Tidak Wajar (TW)", "Significant misstatements, pervasive control weaknesses, substantial irregularities", "Serious governance/financial management issues"],
              ["Tidak Memberikan Opini (TMO)", "Unable to obtain sufficient appropriate audit evidence", "Audit limitations prevent opinion"]
            ],
            caption: "Tipe-Tipe Opini Audit BPK"
          }
        ]
      },
      {
        id: "bpkp-sap",
        title: "BPKP (Internal Audit) & SAP (Standar Akuntansi Pemerintah)",
        content: "BPKP adalah internal audit agency untuk pemerintah yang conduct internal audits, investigations, dan consultancy services untuk government agencies. BPKP membantu improve governance, risk management, dan internal controls dalam government organizations. SAP adalah accounting standards yang diatur dalam PP 71/2010 untuk ensure consistent dan comparable financial reporting dalam government sector."
      }
    ]
  }
];
