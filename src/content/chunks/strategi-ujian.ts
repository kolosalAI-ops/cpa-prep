export const strategiUjianChapters = [
  {
    id: "panduan-ujian-ca",
    title: "Panduan Ujian CA (Chartered Accountant)",
    description: "Format ujian, mata ujian, jadwal, biaya, dan sistem penilaian CA Indonesia",
    sections: [
      {
        id: "format-struktur-ujian",
        title: "Format & Struktur Ujian CA",
        content: "Ujian CA Indonesia diselenggarakan oleh IAI (Ikatan Akuntan Indonesia) dan terdiri dari beberapa modul yang harus diambil secara bertahap. Setiap modul memiliki format yang berbeda dengan combination dari multiple-choice questions, essay questions, dan case analysis. Peserta harus memenuhi prerequisites dan work experience requirements sebelum dapat mendaftar. Pemahaman yang detail tentang format ujian sangat penting untuk persiapan yang efektif.",
        notes: [
          "Format ujian combine objective questions dan subjective questions untuk test understanding dan application",
          "Beberapa modules memiliki practical components yang memerlukan demonstrated competency",
          "Ujian dilakukan dalam Bahasa Indonesia dengan beberapa terminology dalam English",
          "Calculator dan limited reference materials mungkin diperkenankan tergantung pada modul"
        ]
      },
      {
        id: "mata-ujian-modules",
        title: "Mata Ujian & Modules CA",
        content: "Ujian CA terdiri dari multiple modules yang mencakup berbagai areas dalam accounting, finance, dan business. Setiap module memiliki specific learning objectives dan assessment criteria. Modules biasanya dikelompokkan dalam tiers (beginner, intermediate, advanced) dengan prerequisites antara modules. Peserta harus lulus semua required modules untuk mendapat certification.",
        tables: [
          {
            headers: ["Module", "Level", "Duration (hours)", "Focus Area"],
            rows: [
              ["Fundamentals of Accounting", "Beginner", "3-4", "Basic accounting principles, journalizing, ledger, trial balance"],
              ["Financial Reporting", "Intermediate", "4-5", "PSAK, financial statement preparation, disclosure requirements"],
              ["Audit & Assurance", "Intermediate", "4-5", "Audit process, sampling, evidence, reporting, ISA standards"],
              ["Taxation", "Intermediate", "4-5", "PPh individuals/corporates, VAT, other taxes, tax planning"],
              ["Management Accounting", "Intermediate", "4-5", "Cost accounting, budgeting, variance analysis, decision-making"],
              ["Business Law", "Intermediate", "3-4", "Contract law, company law, commercial law, employment law"],
              ["Strategic Business Reporting", "Advanced", "4-5", "Complex consolidation, IFRS, integrated reporting"],
              ["Advanced Taxation", "Advanced", "4-5", "International taxation, transfer pricing, tax controversy"],
              ["Professional Ethics & GCG", "Intermediate", "3", "Ethics principles, independence, corporate governance"],
              ["Business Strategy & Risk", "Advanced", "4-5", "Strategic planning, risk management, balanced scorecard"]
            ],
            caption: "Module-Module Ujian CA Indonesia"
          }
        ]
      },
      {
        id: "jadwal-biaya-penilaian",
        title: "Jadwal, Biaya, & Sistem Penilaian Ujian",
        content: "Ujian CA diselenggarakan multiple times per tahun dengan jadwal yang ditetapkan oleh IAI. Biaya pendaftaran dan ujian bervariasi tergantung pada module dan delivery method. Sistem penilaian menggunakan passing score tertentu untuk dinyatakan lulus. Peserta yang tidak lulus dapat mengambil ulang dengan persyaratan tertentu.",
        rules: [
          "Ujian typically diselenggarakan setidaknya 2x per tahun untuk setiap module",
          "Peserta harus register minimum 2 minggu sebelum ujian",
          "Biaya exam fee includes study materials dan exam access, biasanya Rp 2-4 juta per module",
          "Passing score typically 50-60% depending pada module",
          "Peserta yang gagal dapat retake setelah waiting period tertentu (biasanya 3-6 bulan)",
          "Total waktu untuk complete semua modules biasanya 2-3 years tergantung pace"
        ]
      }
    ]
  },
  {
    id: "strategi-belajar",
    title: "Strategi Belajar Efektif",
    description: "Spaced repetition, Pomodoro technique, study planning, dan learning strategies untuk ujian CA",
    sections: [
      {
        id: "spaced-repetition",
        title: "Spaced Repetition Schedule untuk Retention",
        content: "Spaced repetition adalah learning technique yang repeatedly expose learner kepada material pada increasing intervals. Research menunjukkan bahwa spaced repetition significantly lebih effective untuk long-term retention dibanding cramming. Scheduling reviews pada strategic intervals memaksimalkan memory encoding dan retrieval.",
        tables: [
          {
            headers: ["Review Interval", "Timing", "Purpose"],
            rows: [
              ["Initial Learning", "Same day after first study", "Encode information into memory"],
              ["1st Review", "1 day after initial learning", "Strengthen memory trace"],
              ["2nd Review", "3 days after initial learning", "Refresh before forgetting"],
              ["3rd Review", "1 week after initial learning", "Move into medium-term memory"],
              ["4th Review", "2 weeks after initial learning", "Further consolidation"],
              ["5th Review", "1 month after initial learning", "Long-term retention check"],
              ["6th Review", "3 months before exam", "Final consolidation before exam"]
            ],
            caption: "Spaced Repetition Schedule untuk Optimal Retention"
          }
        ]
      },
      {
        id: "pomodoro-technique",
        title: "Pomodoro Technique & Time Management",
        content: "Pomodoro Technique adalah time management method yang menggunakan short focused work intervals (25 minutes) separated oleh short breaks. Technique ini membantu maintain focus, reduce procrastination, dan increase productivity. Pomodoro ideal untuk intense intellectual work seperti studying untuk ujian.",
        steps: [
          "Choose task atau material yang ingin dipelajari",
          "Set timer untuk 25 minutes (satu Pomodoro)",
          "Work dengan complete focus hingga timer berakhir, no distractions",
          "Take short break (5 minutes) untuk relax dan recharge",
          "After 4 Pomodoros (setelah 2 jam kerja), take longer break (15-30 minutes)",
          "During breaks, step away dari desk, stretch, drink water, refresh mind",
          "Track Pomodoros completed untuk monitor progress dan productivity"
        ]
      },
      {
        id: "study-plan-weekly",
        title: "Study Plan & Weekly Schedule",
        content: "Effective study planning requires structured approach dengan clear objectives, time allocation, dan progress tracking. Weekly study plan harus balance antara reviewing existing material dengan learning new material. Consistency dan discipline lebih important daripada duration.",
        tables: [
          {
            headers: ["Hari", "Morning (8am-12pm)", "Afternoon (1pm-5pm)", "Evening (6pm-9pm)", "Total Hours"],
            rows: [
              ["Senin", "Belajar Module A (new content) - 2 Pomodoros", "Latihan soal Module A - 2 Pomodoros", "Review Module A + Problem-solving - 1 Pomodoro", "4.5 hours"],
              ["Selasa", "Belajar Module B (new content) - 2 Pomodoros", "Latihan soal Module B - 2 Pomodoros", "Review Module B + Discussion - 1 Pomodoro", "4.5 hours"],
              ["Rabu", "Review Module A + Case study - 2 Pomodoros", "Exam-style questions Module A-B - 2 Pomodoros", "Remedial learning weak areas - 1 Pomodoro", "4.5 hours"],
              ["Kamis", "Belajar Module C (new content) - 2 Pomodoros", "Latihan soal Module C - 2 Pomodoros", "Review Module C + Group discussion - 1 Pomodoro", "4.5 hours"],
              ["Jumat", "Case studies & applications - 2 Pomodoros", "Mock exam Module A-C - 2 Pomodoros", "Analysis & improvement areas - 1 Pomodoro", "4.5 hours"],
              ["Sabtu", "Review semua modules - 2 Pomodoros", "Additional weak areas practice - 2 Pomodoros", "Consolidation & planning minggu depan - 1 Pomodoro", "4.5 hours"],
              ["Minggu", "Rest & light review - 1 Pomodoro", "Preparation untuk minggu depan - 1 Pomodoro", "Relax & personal time", "2 hours"]
            ],
            caption: "Contoh Weekly Study Schedule untuk CA Exam Preparation"
          }
        ]
      }
    ]
  },
  {
    id: "teknik-menjawab-soal",
    title: "Teknik Menjawab Soal Ujian",
    description: "Strategi untuk multiple-choice, essay, IRAC, time management, dan common traps dalam ujian",
    sections: [
      {
        id: "multiple-choice-strategy",
        title: "Strategi Menjawab Multiple-Choice Questions",
        content: "Multiple-choice questions memerlukan different approach dibanding essay questions. Strategi yang baik dapat significantly improve accuracy dan speed dalam menjawab MCQ. Understanding question structure dan identifying distractors adalah key untuk memilih jawaban yang benar.",
        steps: [
          "Read soal dengan careful tanpa melihat pilihan jawaban dulu",
          "Try jawab pertanyaan dalam pikiran sebelum melihat pilihan",
          "Read semua pilihan jawaban sebelum memilih",
          "Eliminate clearly incorrect options terlebih dahulu (eliminate distractors)",
          "Antara remaining options, pilih yang paling direct answer ke pertanyaan",
          "Watch untuk absolutes seperti always, never yang sering incorrect",
          "Be cautious tentang overly detailed atau complicated options yang mungkin traps",
          "Jika uncertain, trust instinct - first impression often correct"
        ]
      },
      {
        id: "essay-irac",
        title: "Essay & IRAC Method untuk Question Analysis",
        content: "IRAC (Issue, Rule, Analysis, Conclusion) adalah structured method untuk menjawab essay questions terutama dalam accounting dan law-related questions. IRAC framework memastikan jawaban logis, comprehensive, dan well-organized.",
        steps: [
          "ISSUE: Identify legal/accounting issue atau question yang ditanyakan",
          "RULE: State applicable rules, standards, principles, atau accounting treatments",
          "ANALYSIS: Apply rules ke facts dari kasus, discuss implications dan considerations",
          "CONCLUSION: State conclusion berdasarkan analysis, answer pertanyaan dengan jelas"
        ]
      },
      {
        id: "time-management-exam",
        title: "Time Management dalam Exam",
        content: "Time management adalah critical skill karena ujian memiliki time limit yang ketat. Poor time allocation dapat menyebabkan incomplete answers pada soal-soal yang mudah.",
        tables: [
          {
            headers: ["Tahap", "Aktivitas", "Time Allocation (%)"],
            rows: [
              ["Planning", "Read all questions, identify weights, allocate time", "5%"],
              ["Execution", "Answer questions terstruktur (mulai dari familiar topics)", "85%"],
              ["Review", "Check answers, correct errors, complete incomplete answers", "10%"]
            ],
            caption: "Time Management During Exam"
          },
          {
            headers: ["Soal Tipe", "Bobot Nilai", "Time per Question"],
            rows: [
              ["Multiple-choice", "30-40%", "1-2 minutes each"],
              ["Short answer/calculation", "30-40%", "5-10 minutes each"],
              ["Essay/case analysis", "20-30%", "15-30 minutes each"]
            ],
            caption: "Alokasi Waktu Berdasarkan Tipe Soal"
          }
        ]
      },
      {
        id: "common-traps",
        title: "Common Exam Traps & Pitfalls",
        content: "Mengerti common mistakes dan traps dalam ujian membantu avoid unnecessary errors yang bisa dihindari.",
        warning: "Common traps dalam ujian CA include: misreading soal sehingga answer wrong question, calculation errors dari rushing, incomplete answers yang hanya address part dari soal, over-explaining sederhana points sehingga kehabisan waktu, confidence too much sehingga tidak review, mixing concepts dari berbeda modules, neglecting important details atau qualifications dalam soal, dan forget show calculations/working dalam soal numerik sehingga tidak dapat partial credit."
      }
    ]
  },
  {
    id: "review-latihan",
    title: "Review & Latihan Soal",
    description: "Key topics review, common mistakes, exam day preparation, dan mental readiness",
    sections: [
      {
        id: "key-topics-review",
        title: "Key Topics & High-Weight Areas",
        content: "Focusing pada high-weight topics adalah efficient strategy karena maximizes points gained untuk given study effort. Identifying key topics memerlukan analysis dari exam patterns dan weightings.",
        tables: [
          {
            headers: ["Module", "Key Topics (High Weight)", "Expected Questions"],
            rows: [
              ["Financial Reporting", "Revenue recognition (PSAK 72), Consolidation (PSAK 4), Fair value", "2-3 essay questions, multiple calculation scenarios"],
              ["Audit & Assurance", "Audit planning/risk assessment, Evidence gathering, Reporting, Going concern", "Case analysis, audit report evaluation"],
              ["Taxation", "PPh Badan calculation, Deductible/non-deductible expenses, Transfer pricing", "Multiple scenarios dengan calculations"],
              ["Management Accounting", "Cost behavior, Cost allocation, Variance analysis, Relevant costing", "Case analysis, financial impact assessment"],
              ["Advanced Reporting", "Consolidation with fair value, Segmental reporting, IFRS conversion", "Complex consolidation scenarios"],
              ["Business Law", "Contract formation, Company law (PT/CV/Firma), Employment relations", "Scenario-based practical questions"]
            ],
            caption: "Key High-Weight Topics untuk Setiap Module"
          }
        ]
      },
      {
        id: "common-mistakes",
        title: "Common Mistakes & Learning Points",
        content: "Analyzing common mistakes dari practice exams atau previous candidates membantu learn dari others' errors dan avoid repeating mereka.",
        tables: [
          {
            headers: ["Mistake Kategori", "Contoh Mistake", "Prevention Strategy"],
            rows: [
              ["Calculation Error", "Wrong decimal placement, arithmetic mistakes, formula error", "Use calculator, double-check calculations, show working"],
              ["Conceptual Error", "Misunderstand revenue recognition rules, consolidation mechanics", "Review concept sebelum practice, understand why not just how"],
              ["Procedural Error", "Skip required steps, incomplete disclosure, miss documentation", "Follow systematic approach, don't rush"],
              ["Time Management Error", "Spend too long pada one question, tidak complete paper", "Practice time allocation, set time limits during practice"],
              ["Reading Comprehension", "Answer wrong question, miss qualifications dalam soal", "Read soal carefully twice, underline key requirements"]
            ],
            caption: "Common Exam Mistakes dan Prevention Strategies"
          }
        ]
      },
      {
        id: "exam-day-checklist",
        title: "Exam Day Checklist & Mental Preparation",
        content: "Persiapan pada exam day melibatkan practical checklist dan mental preparation untuk optimal performance.",
        steps: [
          "Night before exam: Prepare materials, get good sleep, avoid last-minute cramming",
          "Morning of exam: Eat healthy breakfast, arrive early, avoid stress/anxiety triggers",
          "Before entering exam room: Gather all permitted materials, empty pockets, check ID",
          "Upon receiving exam paper: Read instructions carefully, skim all questions untuk plan approach",
          "During exam: Stay focused, manage time strictly, answer dengan confidence",
          "Last 5 minutes: Review incomplete answers, check calculations, make sure answers legible",
          "After exam: Don't dwell pada performance, start preparing untuk next module"
        ]
      }
    ]
  }
];
