export const ekonomiStatistikChapters = [
  {
    id: "mikroekonomi",
    title: "Mikroekonomi",
    description: "Analisis perilaku konsumen dan produsen, demand-supply, elastisitas, dan struktur pasar dalam ekonomi mikro",
    sections: [
      {
        id: "demand-supply-equilibrium",
        title: "Demand & Supply, Elastisitas, & Market Equilibrium",
        content: "Permintaan (demand) adalah kuantitas barang yang konsumen bersedia membeli pada berbagai price levels. Penawaran (supply) adalah kuantitas barang yang produsen bersedia menjual pada berbagai price levels. Keseimbangan pasar (market equilibrium) terjadi ketika quantity demanded sama dengan quantity supplied. Elastisitas mengukur responsiveness permintaan atau penawaran terhadap perubahan harga. Memahami demand-supply dynamics adalah fundamental untuk business forecasting dan pricing strategy.",
        tables: [
          {
            headers: ["Elemen", "Faktor Yang Mempengaruhi", "Hubungan dengan Harga"],
            rows: [
              ["Demand", "Income, preferences, substitutes, complements, expectations", "Inverse (harga ↑ → quantity demanded ↓)"],
              ["Supply", "Production costs, technology, input prices, expectations, taxes", "Direct (harga ↑ → quantity supplied ↑)"],
              ["Equilibrium", "Intersection dari demand & supply curves", "Price dimana Qd = Qs"]
            ],
            caption: "Demand-Supply Framework"
          },
          {
            headers: ["Tipe Elastisitas", "Rumus", "Interpretasi", "Contoh"],
            rows: [
              ["Price Elasticity of Demand (PED)", "% Change Qd / % Change Price", "Elastic (|PED|>1)=responsive, Inelastic (|PED|<1)=unresponsive", "Luxury goods elastic, staple inelastic"],
              ["Income Elasticity", "% Change Qd / % Change Income", ">0 normal goods, <0 inferior goods", "Gourmet coffee >0, instant noodle <0"],
              ["Cross-Price Elasticity", "% Change Qda / % Change Priceb", ">0 substitutes, <0 complements", "Coke vs Pepsi >0, car & gasoline <0"],
              ["Price Elasticity of Supply (PES)", "% Change Qs / % Change Price", "Elastic >1, inelastic <1", "Manufacturing elastic, land inelastic"]
            ],
            caption: "Tipe-Tipe Elastisitas"
          }
        ],
        formula: "PED = (ΔQd/ΔPrice) × (Average Price/Average Quantity), Equilibrium: Qd = Qs pada Price = E"
      },
      {
        id: "market-structures",
        title: "Struktur Pasar & Tingkat Kompetisi",
        content: "Struktur pasar mengacu pada karakteristik industri yang menentukan tingkat kompetisi dan pricing power perusahaan. Terdapat empat struktur pasar utama: perfect competition, monopolistic competition, oligopoly, dan monopoly. Setiap struktur memiliki implikasi berbeda untuk pricing, market entry, dan profitabilitas. Indonesia memiliki berbagai industri dengan berbeda market structures - dari perfectly competitive agriculture hingga oligopolistic telecommunications.",
        tables: [
          {
            headers: ["Struktur Pasar", "Jumlah Firm", "Diferensiasi Produk", "Pricing Power", "Contoh Indonesia"],
            rows: [
              ["Perfect Competition", "Sangat banyak", "Homogeneous", "Sangat rendah (price taker)", "Agriculture (rice, vegetables)"],
              ["Monopolistic Competition", "Banyak", "Differentiated", "Moderat (some pricing power)", "Retail shops, restaurants, small businesses"],
              ["Oligopoly", "Sedikit", "Dapat differentiated", "Tinggi (significant pricing power)", "Telecom (Telkomsel, Indosat, XL), Airlines"],
              ["Monopoly", "Satu", "Unique/no substitutes", "Sangat tinggi (full pricing power)", "PDAM (water), PLN (electricity dalam area)", "Utility monopolies"]
            ],
            caption: "Perbandingan Empat Struktur Pasar"
          }
        ]
      }
    ]
  },
  {
    id: "makroekonomi",
    title: "Makroekonomi",
    description: "Analisis ekonomi nasional mencakup GDP, pengangguran, inflasi, dan kebijakan fiskal-moneter",
    sections: [
      {
        id: "gdp-calculation",
        title: "Gross Domestic Product (GDP) & Perhitungan",
        content: "GDP adalah nilai total dari semua final goods dan services yang diproduksi dalam suatu negara pada periode tertentu. GDP adalah indikator utama kesehatan ekonomi nasional. Terdapat tiga pendekatan untuk menghitung GDP: production approach, income approach, dan expenditure approach. Setiap pendekatan seharusnya menghasilkan GDP yang sama. Bank Indonesia dan BPS regularly mempublikasikan GDP growth sebagai key economic indicator.",
        tables: [
          {
            headers: ["Pendekatan", "Formula", "Komponen Utama"],
            rows: [
              ["Production Approach", "GDP = Σ (Output - Intermediate Input)", "Output dari semua industries minus intermediate goods (untuk avoid double counting)"],
              ["Income Approach", "GDP = Wages + Profit + Rent + Interest", "Semua income dari factors of production (labor, capital, land, entrepreneurship)"],
              ["Expenditure Approach", "GDP = C + I + G + (X-M)", "Consumption, Investment, Government spending, Net Exports"]
            ],
            caption: "Tiga Pendekatan Perhitungan GDP"
          }
        ],
        formula: "GDP (Expenditure) = C + I + G + (X - M)\nNominal GDP = Real GDP × Price Index\nGDP Growth Rate = (GDP_current - GDP_previous) / GDP_previous × 100%"
      },
      {
        id: "unemployment-policies",
        title: "Pengangguran & Kebijakan Ekonomi",
        content: "Pengangguran adalah situasi ketika individu yang willing dan able untuk bekerja tidak dapat menemukan pekerjaan. Tingkat pengangguran adalah indikator penting dari kondisi ekonomi. Terdapat beberapa tipe pengangguran dengan penyebab dan solusi berbeda. Kebijakan fiskal (government spending, taxation) dan moneter (interest rates, money supply) digunakan oleh pemerintah untuk manage unemployment dan inflasi.",
        tables: [
          {
            headers: ["Tipe Pengangguran", "Penyebab", "Deskripsi", "Solusi"],
            rows: [
              ["Frictional", "Job searching, transition time", "Temporary unemployment saat individuals berpindah jobs", "Improve job matching (job centers, training)"],
              ["Structural", "Skill mismatch, industry decline", "Unemployment karena skills tidak match dengan job requirements", "Retraining programs, industry restructuring"],
              ["Cyclical", "Economic downturn, recession", "Unemployment karena aggregate demand turun di recession", "Expansionary fiscal/monetary policy"],
              ["Seasonal", "Seasonal fluctuations", "Unemployment pada certain seasons (harvest season, tourism season)", "Prepare dalam advance, flexible contracts"]
            ],
            caption: "Tipe-Tipe Pengangguran dan Solusi"
          },
          {
            headers: ["Aspek", "Kebijakan Fiskal", "Kebijakan Moneter"],
            rows: [
              ["Tools", "Government spending, taxation, transfers", "Interest rates, money supply, reserve requirements"],
              ["Objective", "Manage aggregate demand untuk full employment & price stability", "Control inflation & unemployment through money supply"],
              ["Implementation", "Ditentukan oleh government/legislature", "Ditentukan oleh central bank (BI)"],
              ["Time Lag", "Long implementation & effectiveness lag (1-2 years)", "Shorter lag tetapi variable effectiveness"],
              ["Trade-off", "Deficit spending dapat cause inflation jika economy overheating", "Higher rates control inflation but may reduce growth"]
            ],
            caption: "Perbandingan Kebijakan Fiskal vs Moneter"
          }
        ],
        formula: "Multiplier Effect (Fiscal) = 1 / (1 - MPC) dimana MPC = Marginal Propensity to Consume"
      }
    ]
  },
  {
    id: "ekonomi-indonesia",
    title: "Ekonomi Indonesia",
    description: "Struktur ekonomi Indonesia, institusi kunci (BI, OJK), dan kebijakan APBN",
    sections: [
      {
        id: "bi-ojk-framework",
        title: "Bank Indonesia (BI) & OJK - Peran & Instruments",
        content: "Bank Indonesia adalah central bank Indonesia yang bertanggung jawab atas monetary policy, payment system, dan banking supervision. Otoritas Jasa Keuangan (OJK) adalah regulatory authority untuk capital markets dan non-bank financial institutions. Keduanya adalah institusi kunci dalam stabilitas finansial dan ekonomi Indonesia. BI dan OJK bekerja koordinasi untuk ensure sound financial system dan protect investor/consumer interests.",
        tables: [
          {
            headers: ["Institusi", "Fungsi Utama", "Authority", "Objective"],
            rows: [
              ["Bank Indonesia", "Central bank, monetary authority, banking supervisor", "Monetary policy implementation, payment system, BI Rate", "Price stability, financial system stability"],
              ["OJK", "Financial services regulator, supervisor capital markets & non-bank financial", "Registration, supervision, enforcement capital markets & insurance", "Market efficiency, investor/consumer protection"]
            ],
            caption: "Peran BI dan OJK dalam Sistem Finansial Indonesia"
          },
          {
            headers: ["Instrumen Kebijakan", "Tipe", "Definisi", "Contoh Implementasi"],
            rows: [
              ["BI Rate", "Moneter", "Official interest rate set oleh BI yang affects market rates", "Increase BI Rate untuk control inflation"],
              ["Open Market Operations (OMO)", "Moneter", "Trading securities oleh BI untuk adjust money supply", "Sell BI Bills (SBI) untuk absorb liquidity"],
              ["Reserve Requirement Ratio (RRR)", "Moneter", "Percentage dari deposits yang banks harus hold di BI", "Lower RRR untuk increase money supply"],
              ["Macroprudential Measures", "Both", "Measures untuk contain systemic risks dalam financial system", "Loan-to-value limits, counter-cyclical buffers"],
              ["Regulation & Supervision", "Regulatory", "Rules dan oversight dari financial institutions", "LPS deposit insurance, compliance requirements"]
            ],
            caption: "Instrumen Kebijakan Moneter & Regulatory BI dan OJK"
          }
        ]
      },
      {
        id: "apbn-structure",
        title: "APBN & Struktur Anggaran Pemerintah",
        content: "APBN (Anggaran Pendapatan dan Belanja Negara) adalah dokumen rencana keuangan pemerintah pusat untuk tahun fiscal. APBN mengidentifikasi sumber revenue (taxes, non-tax revenue) dan allocation spending (personnel, operations, investment, debt service). APBN adalah tool penting untuk fiscal policy implementation. Kementerian Keuangan adalah responsible authority untuk APBN preparation, approval, dan execution.",
        tables: [
          {
            headers: ["Komponen APBN", "Kategori", "Contoh Sumber/Alokasi"],
            rows: [
              ["Pendapatan", "Pajak", "PPh (income tax), PPN (VAT), Bea Cukai (excise/tariff)"],
              ["", "Non-Pajak", "Interest income, resource rent, service revenues"],
              ["Belanja", "Belanja Operasional", "Gaji pegawai, utilities, supplies, maintenance"],
              ["", "Belanja Modal", "Infrastructure (roads, bridges), education facilities, health facilities"],
              ["", "Belanja Transfer", "Social welfare programs, education subsidies, health subsidies"],
              ["", "Belanja Bunga", "Interest payments pada government debt"],
              ["Pembiayaan", "Penerimaan", "Borrowing (SUN - Surat Utang Negara), asset sales"],
              ["", "Pengeluaran", "Debt repayment, loan disbursement"],
              ["Keseimbangan APBN", "Surplus/Deficit", "Revenue - Expenditure (positive = surplus, negative = deficit)"]
            ],
            caption: "Struktur APBN Indonesia"
          }
        ],
        formula: "Tax Ratio = Total Tax Revenue / GDP × 100%, APBN Balance = Total Revenue - Total Expenditure"
      }
    ]
  },
  {
    id: "statistika-deskriptif",
    title: "Statistika Deskriptif",
    description: "Metode statistik untuk deskripsi dan analisis data melalui ukuran pemusatan dan penyebaran",
    sections: [
      {
        id: "descriptive-statistics",
        title: "Ukuran Pemusatan & Penyebaran",
        content: "Statistika deskriptif adalah teknik untuk meringkas dan mendeskripsikan data menggunakan angka dan grafik. Ukuran pemusatan (central tendency) menunjukkan nilai sentral atau representative dari dataset. Ukuran penyebaran (dispersion) menunjukkan how spread out data adalah dari nilai sentral. Keduanya penting untuk understand karakteristik dataset dengan komprehensif.",
        tables: [
          {
            headers: ["Ukuran", "Formula", "Interpretasi", "Kegunaan"],
            rows: [
              ["Mean (Rata-rata)", "Σx / n", "Average value, sensitive to outliers", "Most commonly used"],
              ["Median", "Middle value ketika sorted", "Resistant to outliers, appropriate untuk skewed data", "Better untuk ordinal/skewed data"],
              ["Modus", "Value dengan frequency tertinggi", "Most frequently occurring value", "Categorical/nominal data"],
              ["Variance (σ²)", "Σ(x - mean)² / n", "Average squared deviation dari mean", "Measure variability"],
              ["Standard Deviation (σ)", "√Variance", "Same unit sebagai data, interpretable measure dispersion", "Most used dispersion measure"],
              ["Coefficient of Variation (CV)", "(SD / Mean) × 100%", "Relative variability, comparable across datasets", "Compare variability berbeda units/scales"],
              ["Range", "Max - Min", "Spread dari data, sensitive to outliers", "Quick measure dispersion"]
            ],
            caption: "Ukuran Pemusatan dan Penyebaran Statistik"
          }
        ]
      },
      {
        id: "frequency-distribution",
        title: "Distribusi Frekuensi & Data Organization",
        content: "Distribusi frekuensi adalah tabel yang menunjukkan frequency dari different values dalam dataset. Distribusi frekuensi membantu organize data besar dan identify patterns. Frequency distribution dapat direpresentasikan dalam histogram, frequency polygon, atau cumulative distribution untuk visualisasi.",
        steps: [
          "Tentukan range dari data (Max - Min)",
          "Tentukan number of classes (typically 5-20, dapat use Sturges rule: k = 1 + 3.322 log n)",
          "Tentukan class width (Range / Number of Classes)",
          "Tentukan class boundaries/limits untuk setiap class",
          "Count frequency untuk setiap class (berapa banyak data points dalam setiap class)",
          "Calculate relative frequency (frequency / total observations)",
          "Calculate cumulative frequency (running total dari frequencies)",
          "Present dalam tabel dengan class interval, frequency, relative frequency, cumulative frequency"
        ]
      }
    ]
  },
  {
    id: "statistika-inferensial",
    title: "Statistika Inferensial",
    description: "Metode untuk membuat inferences tentang population berdasarkan sample data",
    sections: [
      {
        id: "probability-sampling",
        title: "Probability Theory & Sampling Distributions",
        content: "Probabilitas adalah measure dari likelihood suatu event terjadi. Probability theory adalah fundamental untuk statistical inference. Sampling distribution adalah distribution dari statistic (seperti sample mean) across semua possible samples. Central Limit Theorem mengatakan bahwa distribution dari sample means approaches normal distribution ketika sample size meningkat. Memahami probability dan sampling adalah foundational untuk hypothesis testing dan confidence intervals.",
        tables: [
          {
            headers: ["Konsep", "Definisi", "Rumus/Interpretasi"],
            rows: [
              ["Probability", "Likelihood suatu event terjadi", "P(A) = (favorable outcomes) / (total outcomes)"],
              ["Conditional Probability", "Probability event A given event B sudah terjadi", "P(A|B) = P(A∩B) / P(B)"],
              ["Addition Rule", "P(A atau B)", "P(A∪B) = P(A) + P(B) - P(A∩B)"],
              ["Multiplication Rule", "P(A dan B)", "P(A∩B) = P(A) × P(B|A)"],
              ["Z-Score", "Standardized score showing std devs dari mean", "Z = (X - Mean) / SD, Z distribution adalah N(0,1)"]
            ],
            caption: "Konsep Probability Utama"
          },
          {
            headers: ["Metode Sampling", "Deskripsi", "Keuntungan", "Kelemahan"],
            rows: [
              ["Random Sampling", "Setiap element dalam population punya equal chance", "Unbiased, representative", "Memerlukan complete population list"],
              ["Stratified Sampling", "Divide population ke strata, sample dari setiap stratum", "Ensure representation semua groups", "Complex, memerlukan knowledge tentang population structure"],
              ["Cluster Sampling", "Divide population ke clusters, random select clusters", "Cost-effective untuk dispersed population", "Higher sampling error dibanding simple random"],
              ["Systematic Sampling", "Select setiap kth element", "Simple, efficient", "Risk of pattern dalam population"]
            ],
            caption: "Metode Sampling dalam Statistika Inferensial"
          }
        ],
        formula: "Z-Score: Z = (X - μ) / σ, Margin of Error: E = Z × (σ/√n)"
      },
      {
        id: "confidence-intervals",
        title: "Confidence Intervals & Interval Estimation",
        content: "Confidence interval adalah range dari values yang berisi population parameter dengan certain level of confidence (typically 95% atau 99%). Confidence interval provide measure uncertainty dalam estimation. Interval yang lebih narrow menunjukkan estimate lebih precise, sedangkan wider interval menunjukkan more uncertainty. Sample size, variability, dan confidence level mempengaruhi width interval.",
        formula: "Confidence Interval untuk Mean: X̄ ± (Z atau t) × (SE), dimana SE = σ/√n atau S/√n"
      },
      {
        id: "hypothesis-testing",
        title: "Hypothesis Testing & Statistical Significance",
        content: "Hypothesis testing adalah procedure untuk test claim tentang population parameter menggunakan sample data. Test menentukan apakah evidence cukup untuk reject null hypothesis (H0) dan accept alternative hypothesis (H1). Significance level (α, typically 0.05) adalah probability dari Type I error (reject H0 ketika true). P-value adalah probability dari observing data yang extreme atau lebih extreme assuming H0 true.",
        tables: [
          {
            headers: ["Tipe Test", "H0", "H1", "Test Statistic", "Digunakan Untuk"],
            rows: [
              ["One Sample t-test", "μ = μ0", "μ ≠ μ0 (two-tailed)", "t = (X̄ - μ0)/(S/√n)", "Test mean dari single sample"],
              ["Two Sample t-test", "μ1 = μ2", "μ1 ≠ μ2", "t = (X̄1 - X̄2)/√(pooled SE²)", "Compare means dua samples"],
              ["Chi-Square Test", "Categorical variables independent", "Variables dependent", "χ² = Σ(observed-expected)²/expected", "Test association kategori variables"],
              ["ANOVA (F-test)", "Means dari k groups sama", "At least one mean berbeda", "F = Between-group var / Within-group var", "Compare means lebih dari 2 groups"],
              ["Correlation Test", "ρ = 0 (no correlation)", "ρ ≠ 0 (correlation exists)", "t = r√(n-2)/√(1-r²)", "Test significance dari correlation"]
            ],
            caption: "Tipe-Tipe Hypothesis Tests Utama"
          }
        ],
        steps: [
          "State null hypothesis (H0) dan alternative hypothesis (H1)",
          "Select significance level (α, typically 0.05)",
          "Select appropriate test statistic based pada data type dan question",
          "Calculate test statistic dari sample data",
          "Determine p-value atau critical value region",
          "Compare p-value dengan α (if p-value < α, reject H0)",
          "Draw conclusion dalam context dari original question"
        ]
      }
    ]
  },
  {
    id: "regresi-korelasi",
    title: "Regresi & Korelasi",
    description: "Analisis hubungan antara variabel menggunakan regresi linear dan korelasi",
    sections: [
      {
        id: "regression-analysis",
        title: "Regresi Linear & OLS Estimation",
        content: "Regresi linear menganalisis relationship antara dependent variable (Y) dan independent variable(s) (X). Simple linear regression memiliki satu X, multiple regression memiliki beberapa X. Ordinary Least Squares (OLS) adalah metode untuk estimate regression coefficients dengan minimize sum squared residuals. Regression output memberikan information tentang strength relationship, significance dari coefficients, dan goodness of fit.",
        formula: "Simple Linear Regression: Ŷ = a + bX, dimana b = Σ(x-x̄)(y-ȳ)/Σ(x-x̄)², a = ȳ - b×x̄\nR² = 1 - (SSE/SST) = proportion variance dalam Y explained oleh X\nAdjusted R² = 1 - [(n-1)/(n-k-1)] × (1-R²)"
      },
      {
        id: "correlation-analysis",
        title: "Korelasi Pearson & Kekuatan Hubungan",
        content: "Korelasi mengukur strength dan direction dari linear relationship antara dua variabel. Pearson Correlation Coefficient (r) berkisar dari -1 ke +1. r = +1 menunjukkan perfect positive correlation, r = -1 perfect negative, r = 0 no linear relationship. Correlation tidak menunjukkan causation, hanya association. Korelasi adalah step pertama dalam exploratory data analysis sebelum regression analysis.",
        tables: [
          {
            headers: ["Korelasi (r)", "Interpretasi Strength", "Interpretasi Direction"],
            rows: [
              ["0.00", "No correlation", "N/A"],
              ["0.01 - 0.30", "Weak", "Positive (if r > 0) atau Negative (if r < 0)"],
              ["0.31 - 0.60", "Moderate", "Positive atau Negative"],
              ["0.61 - 0.90", "Strong", "Positive atau Negative"],
              ["0.91 - 1.00", "Very Strong", "Positive atau Negative"]
            ],
            caption: "Interpretasi Pearson Correlation Coefficient"
          }
        ],
        formula: "Pearson r = Σ[(x-x̄)(y-ȳ)] / √[Σ(x-x̄)² × Σ(y-ȳ)²]"
      },
      {
        id: "classical-assumptions",
        title: "Asumsi Klasik & Diagnostic Tests",
        content: "OLS regression memiliki empat asumsi klasik yang harus dipenuhi untuk estimates menjadi BLUE (Best Linear Unbiased Estimators). Violations dari asumsi dapat menghasilkan biased estimates atau incorrect significance tests. Diagnostic tests membantu detect violations sehingga corrective actions dapat diambil.",
        tables: [
          {
            headers: ["Asumsi Klasik", "Deskripsi", "Deteksi Violation", "Konsekuensi"],
            rows: [
              ["Linearity", "Relationship antara Y dan X linear", "Scatter plot, residual plot", "Biased estimates, poor fit"],
              ["Independence", "Residuals independent (no autocorrelation)", "Durbin-Watson (DW) test, Breusch-Godfrey test", "Biased SE, incorrect inference"],
              ["Homoscedasticity", "Variance dari residuals constant (no heteroscedasticity)", "Breusch-Pagan, White, Goldfeld-Quandt tests", "Inefficient estimates, incorrect SE"],
              ["Normality", "Residuals normally distributed", "Q-Q plot, Jarque-Bera test, Shapiro-Wilk", "Incorrect inference untuk small samples"]
            ],
            caption: "Empat Asumsi Klasik OLS Regression dan Diagnostic Tests"
          }
        ],
        notes: [
          "Durbin-Watson (DW): DW ≈ 2 indicates no autocorrelation (values 0-4, values close to 2 preferred)",
          "Variance Inflation Factor (VIF): Measures multicollinearity, VIF > 10 indicates problematic multicollinearity",
          "Breusch-Pagan test: H0 homoscedasticity vs H1 heteroscedasticity, p-value < 0.05 indicates heteroscedasticity"
        ]
      }
    ]
  }
];
