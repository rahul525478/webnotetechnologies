const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'projects');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. FinTech Support AI Agent
const fintechSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="ft-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#091428"/>
      <stop offset="50%" stop-color="#0d213f"/>
      <stop offset="100%" stop-color="#06101e"/>
    </linearGradient>
    <linearGradient id="ft-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="ft-card" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#162c4e" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0c1d35" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="ft-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="450" fill="url(#ft-bg)"/>
  <circle cx="700" cy="80" r="180" fill="#10b981" opacity="0.12" filter="blur(60px)"/>
  <circle cx="100" cy="380" r="160" fill="#0284c7" opacity="0.15" filter="blur(50px)"/>

  <!-- Window Frame -->
  <rect x="30" y="30" width="740" height="390" rx="16" fill="#0b1728" stroke="#1e3a63" stroke-width="1.5"/>
  <rect x="30" y="30" width="740" height="44" rx="16" fill="#0e213b"/>
  <rect x="30" y="58" width="740" height="16" fill="#0e213b"/>
  
  <!-- Window Controls -->
  <circle cx="56" cy="52" r="5" fill="#ef4444"/>
  <circle cx="74" cy="52" r="5" fill="#f59e0b"/>
  <circle cx="92" cy="52" r="5" fill="#10b981"/>
  <text x="120" y="56" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="600">FinTech Support AI Agent • Autonomous RAG System</text>
  <rect x="630" y="42" width="124" height="20" rx="10" fill="#064e3b" stroke="#059669" stroke-width="1"/>
  <circle cx="642" cy="52" r="3" fill="#34d399"/>
  <text x="652" y="56" fill="#34d399" font-family="system-ui, sans-serif" font-size="10" font-weight="700">TIER-1 RESOLVED 80%</text>

  <!-- Left Stats Card -->
  <rect x="54" y="94" width="210" height="302" rx="12" fill="url(#ft-card)" stroke="#1e3a63" stroke-width="1"/>
  <text x="74" y="124" fill="#64748b" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1">RAG PIPELINE TELEMETRY</text>
  <text x="74" y="156" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="800">80.2%</text>
  <text x="74" y="174" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Autonomous Tier-1 Resolution</text>

  <!-- Progress bar -->
  <rect x="74" y="190" width="170" height="6" rx="3" fill="#1e293b"/>
  <rect x="74" y="190" width="136" height="6" rx="3" fill="url(#ft-accent)"/>

  <text x="74" y="224" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Vector Query Latency</text>
  <text x="74" y="244" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">14ms <tspan fill="#10b981" font-size="11">Pinecone</tspan></text>

  <text x="74" y="278" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Tool Execution Engine</text>
  <text x="74" y="298" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">LangChain <tspan fill="#38bdf8" font-size="11">Agent</tspan></text>

  <text x="74" y="332" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">LLM Inference Core</text>
  <text x="74" y="352" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">OpenAI <tspan fill="#a78bfa" font-size="11">GPT-4o</tspan></text>

  <!-- Center Active Chat & Reasoning Console -->
  <rect x="282" y="94" width="468" height="190" rx="12" fill="url(#ft-card)" stroke="#1e3a63" stroke-width="1"/>
  <text x="306" y="126" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">DYNAMIC TOOL CALL EXECUTION</text>

  <!-- Chat Bubbles -->
  <rect x="306" y="142" width="290" height="34" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="320" y="164" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12">Customer: "Requesting real-time wire transfer audit #9281"</text>

  <rect x="340" y="186" width="386" height="48" rx="8" fill="#064e3b" stroke="#059669" stroke-width="1"/>
  <text x="354" y="206" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">AI Agent: Verified via RAG & Core Banking Tool API</text>
  <text x="354" y="222" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="11">Transfer cleared AML check • Settlement: $48,250.00 USD</text>

  <rect x="306" y="246" width="420" height="24" rx="6" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <circle cx="320" cy="258" r="4" fill="#10b981"/>
  <text x="332" y="262" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Dynamic Tool Calling: fetchLedgerData(acc_9281) -> SUCCESS (22ms)</text>

  <!-- Bottom Analytics Graph -->
  <rect x="282" y="296" width="468" height="100" rx="12" fill="url(#ft-card)" stroke="#1e3a63" stroke-width="1"/>
  <text x="306" y="322" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">REAL-TIME TIER-1 INQUIRY FLOW & AUTOMATION CURVE</text>
  <!-- Polyline chart -->
  <path d="M 310 376 L 360 360 L 410 368 L 460 342 L 510 350 L 560 326 L 610 334 L 660 318 L 710 324" fill="none" stroke="url(#ft-accent)" stroke-width="3"/>
  <circle cx="710" cy="324" r="5" fill="#10b981"/>
  <text x="650" y="376" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Next.js • Pinecone • OpenAI</text>
</svg>`;

// 2. HealthData Semantic Search
const healthSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="hd-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041f2c"/>
      <stop offset="50%" stop-color="#083344"/>
      <stop offset="100%" stop-color="#02141e"/>
    </linearGradient>
    <linearGradient id="hd-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="hd-card" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0e4159" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#072b3d" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <rect width="800" height="450" fill="url(#hd-bg)"/>
  <circle cx="720" cy="100" r="170" fill="#06b6d4" opacity="0.12" filter="blur(60px)"/>
  <circle cx="120" cy="360" r="160" fill="#3b82f6" opacity="0.14" filter="blur(50px)"/>

  <!-- Window Frame -->
  <rect x="30" y="30" width="740" height="390" rx="16" fill="#061c28" stroke="#155e75" stroke-width="1.5"/>
  <rect x="30" y="30" width="740" height="44" rx="16" fill="#082f49"/>
  <rect x="30" y="58" width="740" height="16" fill="#082f49"/>

  <circle cx="56" cy="52" r="5" fill="#ef4444"/>
  <circle cx="74" cy="52" r="5" fill="#f59e0b"/>
  <circle cx="92" cy="52" r="5" fill="#10b981"/>
  <text x="120" y="56" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="600">HealthData Semantic Search • HIPAA-Compliant Medical Retrieval</text>
  <rect x="620" y="42" width="134" height="20" rx="10" fill="#164e63" stroke="#0891b2" stroke-width="1"/>
  <circle cx="632" cy="52" r="3" fill="#22d3ee"/>
  <text x="642" y="56" fill="#22d3ee" font-family="system-ui, sans-serif" font-size="10" font-weight="700">HIPAA VERIFIED ACCESS</text>

  <!-- Search Bar -->
  <rect x="54" y="94" width="692" height="48" rx="10" fill="url(#hd-card)" stroke="#155e75" stroke-width="1"/>
  <circle cx="80" cy="118" r="8" fill="none" stroke="#22d3ee" stroke-width="2"/>
  <line x1="86" y1="124" x2="94" y2="132" stroke="#22d3ee" stroke-width="2"/>
  <text x="108" y="123" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="500">Query: "Patients with acute ischemic stroke admitted with elevated troponin levels"</text>
  <rect x="618" y="104" width="114" height="28" rx="6" fill="#0284c7"/>
  <text x="634" y="122" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">FastAPI SEARCH</text>

  <!-- Left: Vector Embedding Visualization -->
  <rect x="54" y="156" width="336" height="240" rx="12" fill="url(#hd-card)" stroke="#155e75" stroke-width="1"/>
  <text x="74" y="184" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="11" font-weight="700">VECTOR EMBEDDING MATRIX (WEAVIATE)</text>
  
  <!-- Embedding Nodes & Connections -->
  <circle cx="110" cy="230" r="14" fill="#0e7490" stroke="#22d3ee" stroke-width="2"/>
  <text x="104" y="234" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">EHR</text>
  <circle cx="210" cy="210" r="18" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
  <text x="194" y="214" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Llama3</text>
  <circle cx="310" cy="240" r="14" fill="#047857" stroke="#34d399" stroke-width="2"/>
  <text x="296" y="244" fill="#ffffff" font-family="system-ui, sans-serif" font-size="9" font-weight="700">ICD-10</text>
  <circle cx="160" cy="310" r="16" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
  <text x="144" y="314" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Radiology</text>
  <circle cx="270" cy="320" r="15" fill="#4338ca" stroke="#818cf8" stroke-width="2"/>
  <text x="254" y="324" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Biomarker</text>

  <line x1="124" y1="228" x2="192" y2="212" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="228" y1="214" x2="296" y2="236" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="202" y1="226" x2="168" y2="296" stroke="#60a5fa" stroke-width="1.5"/>
  <line x1="218" y1="226" x2="262" y2="306" stroke="#818cf8" stroke-width="1.5"/>

  <text x="74" y="376" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Cosine Similarity Confidence: <tspan fill="#34d399" font-weight="700">99.4%</tspan></text>

  <!-- Right: Retrieved Medical Records -->
  <rect x="404" y="156" width="342" height="240" rx="12" fill="url(#hd-card)" stroke="#155e75" stroke-width="1"/>
  <text x="424" y="184" fill="#67e8f9" font-family="system-ui, sans-serif" font-size="11" font-weight="700">DE-IDENTIFIED SEMANTIC RETRIEVALS</text>

  <rect x="424" y="200" width="302" height="54" rx="8" fill="#042f2e" stroke="#0d9488" stroke-width="1"/>
  <text x="438" y="222" fill="#5eead4" font-family="system-ui, sans-serif" font-size="11" font-weight="700">RECORD #MED-8192 • MATCH SCORE 0.984</text>
  <text x="438" y="240" fill="#ccfbf1" font-family="system-ui, sans-serif" font-size="10">Troponin-I 0.08 ng/mL • Post-MRI brainstem ischemia confirmed</text>

  <rect x="424" y="264" width="302" height="54" rx="8" fill="#0c4a6e" stroke="#0284c7" stroke-width="1"/>
  <text x="438" y="286" fill="#7dd3fc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">RECORD #MED-7431 • MATCH SCORE 0.962</text>
  <text x="438" y="304" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="10">Emergency Triage: Acute coronary protocol + Neurological deficits</text>

  <rect x="424" y="328" width="302" height="54" rx="8" fill="#1e1b4b" stroke="#4f46e5" stroke-width="1"/>
  <text x="438" y="350" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">RECORD #MED-6904 • MATCH SCORE 0.941</text>
  <text x="438" y="368" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="10">Dual pathology clinical notes • Llama 3 semantic cross-validation</text>
</svg>`;

// 3. Marketing Copy Generator
const marketingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="mk-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180b2b"/>
      <stop offset="50%" stop-color="#2a124a"/>
      <stop offset="100%" stop-color="#120522"/>
    </linearGradient>
    <linearGradient id="mk-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="mk-card" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b1d68" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#241042" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <rect width="800" height="450" fill="url(#mk-bg)"/>
  <circle cx="710" cy="90" r="170" fill="#c084fc" opacity="0.14" filter="blur(60px)"/>
  <circle cx="110" cy="370" r="160" fill="#f472b6" opacity="0.12" filter="blur(50px)"/>

  <!-- Window Frame -->
  <rect x="30" y="30" width="740" height="390" rx="16" fill="#1b0c30" stroke="#581c87" stroke-width="1.5"/>
  <rect x="30" y="30" width="740" height="44" rx="16" fill="#2e1065"/>
  <rect x="30" y="58" width="740" height="16" fill="#2e1065"/>

  <circle cx="56" cy="52" r="5" fill="#ef4444"/>
  <circle cx="74" cy="52" r="5" fill="#f59e0b"/>
  <circle cx="92" cy="52" r="5" fill="#10b981"/>
  <text x="120" y="56" fill="#d8b4fe" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Marketing Copy Generator • Enterprise Gen AI Studio</text>
  <rect x="620" y="42" width="134" height="20" rx="10" fill="#4c1d95" stroke="#7e22ce" stroke-width="1"/>
  <circle cx="632" cy="52" r="3" fill="#e9d5ff"/>
  <text x="642" y="56" fill="#e9d5ff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">BRAND COMPLIANT 98%</text>

  <!-- Left: Campaign Generation Controls -->
  <rect x="54" y="94" width="280" height="302" rx="12" fill="url(#mk-card)" stroke="#581c87" stroke-width="1"/>
  <text x="74" y="124" fill="#e9d5ff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">OMNICHANNEL GENERATION</text>

  <rect x="74" y="142" width="240" height="36" rx="8" fill="#1e1035" stroke="#4c1d95" stroke-width="1"/>
  <text x="88" y="164" fill="#f5d0fe" font-family="system-ui, sans-serif" font-size="11">Tone: Executive Authority (B2B)</text>

  <rect x="74" y="188" width="240" height="36" rx="8" fill="#1e1035" stroke="#4c1d95" stroke-width="1"/>
  <text x="88" y="210" fill="#f5d0fe" font-family="system-ui, sans-serif" font-size="11">Channel: LinkedIn + Email + Ads</text>

  <rect x="74" y="234" width="240" height="36" rx="8" fill="#1e1035" stroke="#4c1d95" stroke-width="1"/>
  <text x="88" y="256" fill="#f5d0fe" font-family="system-ui, sans-serif" font-size="11">Model: Claude 3.5 Sonnet</text>

  <text x="74" y="296" fill="#c084fc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">REDIS CACHE VELOCITY</text>
  <text x="74" y="322" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">4.2ms</text>
  <text x="74" y="340" fill="#a855f7" font-family="system-ui, sans-serif" font-size="11">Sub-second template retrieval</text>

  <rect x="74" y="356" width="240" height="26" rx="6" fill="url(#mk-accent)"/>
  <text x="136" y="373" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">GENERATE VARIANTS</text>

  <!-- Right: Generated Live Copy Streams -->
  <rect x="350" y="94" width="396" height="302" rx="12" fill="url(#mk-card)" stroke="#581c87" stroke-width="1"/>
  <text x="374" y="124" fill="#e9d5ff" font-family="system-ui, sans-serif" font-size="11" font-weight="700">DYNAMIC VARIANT MATRIX (VUE.JS UI)</text>

  <!-- Variant 1 -->
  <rect x="374" y="142" width="348" height="68" rx="8" fill="#1f0f38" stroke="#7e22ce" stroke-width="1"/>
  <text x="390" y="164" fill="#a855f7" font-family="system-ui, sans-serif" font-size="11" font-weight="700">HEADLINE: "Eliminate Cloud Latency with Edge AI Runtimes"</text>
  <text x="390" y="182" fill="#e9d5ff" font-family="system-ui, sans-serif" font-size="10">Drive 4x higher CTR across B2B enterprise infrastructure leads...</text>
  <rect x="650" y="152" width="60" height="20" rx="4" fill="#047857"/>
  <text x="658" y="166" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="9" font-weight="700">SCORE 99</text>

  <!-- Variant 2 -->
  <rect x="374" y="220" width="348" height="68" rx="8" fill="#1f0f38" stroke="#9333ea" stroke-width="1"/>
  <text x="390" y="242" fill="#ec4899" font-family="system-ui, sans-serif" font-size="11" font-weight="700">HEADLINE: "Next-Gen Data Integrity Engineered for Scale"</text>
  <text x="390" y="260" fill="#fce7f3" font-family="system-ui, sans-serif" font-size="10">Zero-downtime architecture compliance built for Fortune 500...</text>
  <rect x="650" y="230" width="60" height="20" rx="4" fill="#047857"/>
  <text x="658" y="244" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="9" font-weight="700">SCORE 97</text>

  <!-- Variant 3 -->
  <rect x="374" y="298" width="348" height="84" rx="8" fill="#1f0f38" stroke="#a855f7" stroke-width="1"/>
  <text x="390" y="320" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">OMNICHANNEL EMAIL SNIPPET</text>
  <text x="390" y="338" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="10">"Hi {{First_Name}}, discover how global engineering teams accelerate</text>
  <text x="390" y="354" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="10">product velocity without compromising enterprise security standards."</text>
</svg>`;

// 4. Legal Contract Analyzer
const legalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="lg-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141a29"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="lg-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <linearGradient id="lg-card" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#283548" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#192333" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <rect width="800" height="450" fill="url(#lg-bg)"/>
  <circle cx="700" cy="110" r="170" fill="#f59e0b" opacity="0.12" filter="blur(60px)"/>
  <circle cx="120" cy="350" r="160" fill="#ef4444" opacity="0.10" filter="blur(50px)"/>

  <!-- Window Frame -->
  <rect x="30" y="30" width="740" height="390" rx="16" fill="#111827" stroke="#374151" stroke-width="1.5"/>
  <rect x="30" y="30" width="740" height="44" rx="16" fill="#1f2937"/>
  <rect x="30" y="58" width="740" height="16" fill="#1f2937"/>

  <circle cx="56" cy="52" r="5" fill="#ef4444"/>
  <circle cx="74" cy="52" r="5" fill="#f59e0b"/>
  <circle cx="92" cy="52" r="5" fill="#10b981"/>
  <text x="120" y="56" fill="#d1d5db" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Legal Contract Analyzer • NLP Clause Risk Mitigation Pipeline</text>
  <rect x="620" y="42" width="134" height="20" rx="10" fill="#78350f" stroke="#b45309" stroke-width="1"/>
  <circle cx="632" cy="52" r="3" fill="#fde68a"/>
  <text x="642" y="56" fill="#fde68a" font-family="system-ui, sans-serif" font-size="10" font-weight="700">RISK MITIGATION ACTIVE</text>

  <!-- Left: Dense Contract Viewer with Highlighted Clauses -->
  <rect x="54" y="94" width="410" height="302" rx="12" fill="url(#lg-card)" stroke="#374151" stroke-width="1"/>
  <text x="74" y="124" fill="#9ca3af" font-family="system-ui, sans-serif" font-size="11" font-weight="700">MASTER SERVICES AGREEMENT (MSA-902)</text>

  <!-- Contract Paragraphs -->
  <text x="74" y="152" fill="#d1d5db" font-family="system-ui, sans-serif" font-size="11">12.1 INDEMNIFICATION & CONSEQUENTIAL DAMAGES</text>
  <rect x="74" y="162" width="370" height="44" rx="6" fill="#7f1d1d" opacity="0.4" stroke="#ef4444" stroke-width="1"/>
  <text x="84" y="180" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="11">"Party B shall unconditionally indemnify and hold harmless Party A</text>
  <text x="84" y="196" fill="#fca5a5" font-family="system-ui, sans-serif" font-size="11">without monetary ceiling for indirect and consequential loss..."</text>

  <text x="74" y="230" fill="#d1d5db" font-family="system-ui, sans-serif" font-size="11">14.3 TERMINATION FOR CONVENIENCE NOTICE PERIOD</text>
  <rect x="74" y="240" width="370" height="44" rx="6" fill="#78350f" opacity="0.4" stroke="#f59e0b" stroke-width="1"/>
  <text x="84" y="258" fill="#fde68a" font-family="system-ui, sans-serif" font-size="11">"Either party may terminate upon seven (7) business days written</text>
  <text x="84" y="274" fill="#fde68a" font-family="system-ui, sans-serif" font-size="11">notice without cause, forfeiture of prepaid milestones applies."</text>

  <text x="74" y="308" fill="#d1d5db" font-family="system-ui, sans-serif" font-size="11">18.7 GOVERNING LAW & ARBITRATION VENUE</text>
  <rect x="74" y="318" width="370" height="40" rx="6" fill="#064e3b" opacity="0.4" stroke="#10b981" stroke-width="1"/>
  <text x="84" y="336" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11">"Standard expedited neutral arbitration under ICC rules."</text>
  <text x="74" y="380" fill="#9ca3af" font-family="system-ui, sans-serif" font-size="10">Powered by PyTorch • Hugging Face Transformers • React UI</text>

  <!-- Right: Risk Taxonomy & Clause Mitigation Panel -->
  <rect x="480" y="94" width="266" height="302" rx="12" fill="url(#lg-card)" stroke="#374151" stroke-width="1"/>
  <text x="500" y="124" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="700">EXTRACTED RISK TAXONOMY</text>

  <rect x="500" y="142" width="226" height="66" rx="8" fill="#1f2937" stroke="#ef4444" stroke-width="1"/>
  <text x="514" y="164" fill="#f87171" font-family="system-ui, sans-serif" font-size="11" font-weight="700">HIGH RISK: Unlimited Liability</text>
  <text x="514" y="180" fill="#d1d5db" font-family="system-ui, sans-serif" font-size="10">Suggested Fix: Insert mutual cap of</text>
  <text x="514" y="196" fill="#d1d5db" font-family="system-ui, sans-serif" font-size="10">12 months aggregate fees paid.</text>

  <rect x="500" y="218" width="226" height="66" rx="8" fill="#1f2937" stroke="#f59e0b" stroke-width="1"/>
  <text x="514" y="240" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="11" font-weight="700">MEDIUM RISK: Short Notice</text>
  <text x="514" y="256" fill="#d1d5db" font-family="system-ui, sans-serif" font-size="10">Suggested Fix: Extend termination</text>
  <text x="514" y="272" fill="#d1d5db" font-family="system-ui, sans-serif" font-size="10">notice period to minimum 30 days.</text>

  <rect x="500" y="294" width="226" height="88" rx="8" fill="#1f2937" stroke="#10b981" stroke-width="1"/>
  <text x="514" y="316" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">COMPLIANCE SCORE: 88/100</text>
  <text x="514" y="334" fill="#9ca3af" font-family="system-ui, sans-serif" font-size="10">18 Clauses Analyzed</text>
  <text x="514" y="350" fill="#9ca3af" font-family="system-ui, sans-serif" font-size="10">2 Critical Flags Identified</text>
  <text x="514" y="366" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="10">Auto-Redline Generated (PDF/Docx)</text>
</svg>`;

// 5. Personalized AI Tutor
const tutorSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="tu-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1736"/>
      <stop offset="50%" stop-color="#142654"/>
      <stop offset="100%" stop-color="#081024"/>
    </linearGradient>
    <linearGradient id="tu-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <linearGradient id="tu-card" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1c356b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#102247" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <rect width="800" height="450" fill="url(#tu-bg)"/>
  <circle cx="700" cy="90" r="170" fill="#3b82f6" opacity="0.14" filter="blur(60px)"/>
  <circle cx="120" cy="370" r="160" fill="#10b981" opacity="0.12" filter="blur(50px)"/>

  <!-- Window Frame -->
  <rect x="30" y="30" width="740" height="390" rx="16" fill="#0d1b38" stroke="#1d4ed8" stroke-width="1.5"/>
  <rect x="30" y="30" width="740" height="44" rx="16" fill="#1e3a8a"/>
  <rect x="30" y="58" width="740" height="16" fill="#1e3a8a"/>

  <circle cx="56" cy="52" r="5" fill="#ef4444"/>
  <circle cx="74" cy="52" r="5" fill="#f59e0b"/>
  <circle cx="92" cy="52" r="5" fill="#10b981"/>
  <text x="120" y="56" fill="#bfdbfe" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Personalized AI Tutor • Adaptive Learning System</text>
  <rect x="620" y="42" width="134" height="20" rx="10" fill="#172554" stroke="#2563eb" stroke-width="1"/>
  <circle cx="632" cy="52" r="3" fill="#93c5fd"/>
  <text x="642" y="56" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="10" font-weight="700">MISTRAL + NEO4J</text>

  <!-- Left: Comprehension Radar & Mastery Track -->
  <rect x="54" y="94" width="280" height="302" rx="12" fill="url(#tu-card)" stroke="#1d4ed8" stroke-width="1"/>
  <text x="74" y="124" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11" font-weight="700">STUDENT COMPREHENSION MODEL</text>

  <text x="74" y="156" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="800">Advanced Calculus</text>
  <text x="74" y="174" fill="#34d399" font-family="system-ui, sans-serif" font-size="11">Mastery Index: 89.4% (Adaptive Difficulty Level 4)</text>

  <!-- Knowledge Graph Nodes -->
  <circle cx="120" cy="230" r="16" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
  <text x="100" y="234" fill="#ffffff" font-family="system-ui, sans-serif" font-size="9" font-weight="700">Limits</text>

  <circle cx="210" cy="210" r="20" fill="#047857" stroke="#34d399" stroke-width="2"/>
  <text x="186" y="214" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Derivatives</text>

  <circle cx="160" cy="300" r="18" fill="#1e3a8a" stroke="#93c5fd" stroke-width="2"/>
  <text x="140" y="304" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">Integrals</text>

  <circle cx="260" cy="280" r="16" fill="#065f46" stroke="#6ee7b7" stroke-width="2"/>
  <text x="242" y="284" fill="#ffffff" font-family="system-ui, sans-serif" font-size="9" font-weight="700">Series</text>

  <line x1="136" y1="228" x2="190" y2="214" stroke="#60a5fa" stroke-width="2"/>
  <line x1="204" y1="228" x2="168" y2="284" stroke="#34d399" stroke-width="2"/>
  <line x1="226" y1="224" x2="252" y2="266" stroke="#6ee7b7" stroke-width="2"/>

  <text x="74" y="360" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11">Knowledge Graph: <tspan fill="#ffffff" font-weight="700">Neo4j GraphDB</tspan></text>
  <text x="74" y="378" fill="#bfdbfe" font-family="system-ui, sans-serif" font-size="10">Node.js Microservices • Real-Time WebSockets</text>

  <!-- Right: Adaptive Explanation Canvas -->
  <rect x="350" y="94" width="396" height="302" rx="12" fill="url(#tu-card)" stroke="#1d4ed8" stroke-width="1"/>
  <text x="374" y="124" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="11" font-weight="700">DYNAMIC EXPLANATION TAILORING</text>

  <rect x="374" y="142" width="348" height="74" rx="8" fill="#0f1f42" stroke="#2563eb" stroke-width="1"/>
  <text x="390" y="164" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">STUDENT INQUIRY:</text>
  <text x="390" y="182" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="11">"Why does the derivative of e^x equal itself intuitively?"</text>
  <text x="390" y="200" fill="#93c5fd" font-family="system-ui, sans-serif" font-size="10">Comprehension telemetry: Visual learner, geometry preference detected</text>

  <rect x="374" y="226" width="348" height="154" rx="8" fill="#064e3b" stroke="#059669" stroke-width="1"/>
  <text x="390" y="248" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11" font-weight="700">MISTRAL 7B ADAPTIVE RESPONSE:</text>
  <text x="390" y="270" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">"Imagine a bank account compounding continuously where the growth rate</text>
  <text x="390" y="288" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11">at any exact instant is strictly identical to your account balance..."</text>
  <text x="390" y="316" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11 font-weight=600">Visual slope tangent generated: f'(x) = f(x) for all x in Real.</text>
  <rect x="390" y="336" width="160" height="26" rx="6" fill="#047857"/>
  <text x="404" y="353" fill="#ffffff" font-family="system-ui, sans-serif" font-size="10" font-weight="700">INTERACTIVE STEP CHECK &gt;</text>
</svg>`;

// 6. Retail Inventory Predictor
const retailSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="rt-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#190e2b"/>
      <stop offset="50%" stop-color="#21153b"/>
      <stop offset="100%" stop-color="#10081c"/>
    </linearGradient>
    <linearGradient id="rt-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="rt-card" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#341f59" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#1f1138" stop-opacity="0.9"/>
    </linearGradient>
  </defs>

  <rect width="800" height="450" fill="url(#rt-bg)"/>
  <circle cx="700" cy="100" r="170" fill="#f97316" opacity="0.14" filter="blur(60px)"/>
  <circle cx="120" cy="360" r="160" fill="#06b6d4" opacity="0.12" filter="blur(50px)"/>

  <!-- Window Frame -->
  <rect x="30" y="30" width="740" height="390" rx="16" fill="#170c2a" stroke="#4c1d95" stroke-width="1.5"/>
  <rect x="30" y="30" width="740" height="44" rx="16" fill="#2e1065"/>
  <rect x="30" y="58" width="740" height="16" fill="#2e1065"/>

  <circle cx="56" cy="52" r="5" fill="#ef4444"/>
  <circle cx="74" cy="52" r="5" fill="#f59e0b"/>
  <circle cx="92" cy="52" r="5" fill="#10b981"/>
  <text x="120" y="56" fill="#fed7aa" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Retail Inventory Predictor • Supply Chain Disruption Forecaster</text>
  <rect x="620" y="42" width="134" height="20" rx="10" fill="#7c2d12" stroke="#ea580c" stroke-width="1"/>
  <circle cx="632" cy="52" r="3" fill="#ffedd5"/>
  <text x="642" y="56" fill="#ffedd5" font-family="system-ui, sans-serif" font-size="10" font-weight="700">PREDICTIVE ACCURACY 92%</text>

  <!-- Left: Predictive Confidence & Model Telemetry -->
  <rect x="54" y="94" width="240" height="302" rx="12" fill="url(#rt-card)" stroke="#4c1d95" stroke-width="1"/>
  <text x="74" y="124" fill="#fed7aa" font-family="system-ui, sans-serif" font-size="11" font-weight="700">TENSORFLOW ML PIPELINE</text>
  <text x="74" y="156" fill="#ffffff" font-family="system-ui, sans-serif" font-size="30" font-weight="800">92.0%</text>
  <text x="74" y="174" fill="#fb923c" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Disruption Forecast Precision</text>

  <rect x="74" y="190" width="190" height="6" rx="3" fill="#1e1035"/>
  <rect x="74" y="190" width="175" height="6" rx="3" fill="url(#rt-accent)"/>

  <text x="74" y="226" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Inference Latency</text>
  <text x="74" y="246" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">18ms <tspan fill="#38bdf8" font-size="11">SageMaker</tspan></text>

  <text x="74" y="280" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">SKU Data Pipeline</text>
  <text x="74" y="300" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="700">2.4M items / day</text>

  <text x="74" y="334" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">Early Warning Window</text>
  <text x="74" y="354" fill="#34d399" font-family="system-ui, sans-serif" font-size="16" font-weight="700">14 Days Lead Time</text>

  <!-- Right: Stock Velocity & Predictive Curve -->
  <rect x="310" y="94" width="436" height="302" rx="12" fill="url(#rt-card)" stroke="#4c1d95" stroke-width="1"/>
  <text x="334" y="124" fill="#fed7aa" font-family="system-ui, sans-serif" font-size="11" font-weight="700">MULTI-REGIONAL SUPPLY CHAIN TELEMETRY (PYTHON / SAGEMAKER)</text>

  <!-- Stock Velocity Bars -->
  <rect x="334" y="146" width="388" height="60" rx="8" fill="#1b0e30" stroke="#6d28d9" stroke-width="1"/>
  <text x="350" y="170" fill="#f97316" font-family="system-ui, sans-serif" font-size="11" font-weight="700">WAREHOUSE HUB NA-EAST • STOCK REORDER TRIGGERED</text>
  <text x="350" y="190" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="10">Predicted stockout in 72 hours • Automated purchase order #PO-4091 dispatched</text>

  <!-- Forecast Graph -->
  <rect x="334" y="218" width="388" height="164" rx="8" fill="#1b0e30" stroke="#6d28d9" stroke-width="1"/>
  <text x="350" y="240" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" font-weight="700">DEMAND VS. BUFFER VELOCITY</text>

  <!-- Chart lines -->
  <path d="M 350 340 L 400 310 L 450 325 L 500 270 L 550 280 L 600 250 L 650 260 L 700 230" fill="none" stroke="#f97316" stroke-width="3"/>
  <path d="M 350 360 L 400 345 L 450 350 L 500 330 L 550 335 L 600 315 L 650 320 L 700 300" fill="none" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 4"/>
  
  <circle cx="700" cy="230" r="5" fill="#f97316"/>
  <text x="560" y="365" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="10">TensorFlow • AWS SageMaker • Python</text>
</svg>`;

fs.writeFileSync(path.join(targetDir, 'fintech-agent.svg'), fintechSvg);
fs.writeFileSync(path.join(targetDir, 'healthdata-semantic-search.svg'), healthSvg);
fs.writeFileSync(path.join(targetDir, 'marketing-copy-generator.svg'), marketingSvg);
fs.writeFileSync(path.join(targetDir, 'legal-contract-analyzer.svg'), legalSvg);
fs.writeFileSync(path.join(targetDir, 'personalized-ai-tutor.svg'), tutorSvg);
fs.writeFileSync(path.join(targetDir, 'retail-inventory-predictor.svg'), retailSvg);

console.log('Successfully generated all 6 project SVG visual assets in:', targetDir);
