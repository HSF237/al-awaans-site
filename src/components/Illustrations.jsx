/* Custom SVG illustrations for Al Awaans — all vector, no image files needed.
   <SvgDefs /> must be rendered once; every illustration references its gradients. */

export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6E3A1" />
          <stop offset="0.45" stopColor="#D2A441" />
          <stop offset="1" stopColor="#8A6620" />
        </linearGradient>
        <linearGradient id="gGoldSoft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E8C46A" stopOpacity="0.95" />
          <stop offset="1" stopColor="#7A5A1C" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="gBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b3b40" />
          <stop offset="0.5" stopColor="#1a1a1e" />
          <stop offset="1" stopColor="#0c0c0e" />
        </linearGradient>
        <linearGradient id="gScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b1409" />
          <stop offset="0.55" stopColor="#0c0a07" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="gGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.02" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="gGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#D2A441" stopOpacity="0.55" />
          <stop offset="1" stopColor="#D2A441" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gWave" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6E3A1" stopOpacity="0.9" />
          <stop offset="1" stopColor="#8A6620" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── Smartphone ── */
export function Phone({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 200 400" fill="none" role="img" aria-label="Smartphone illustration">
      <rect x="6" y="6" width="188" height="388" rx="38" fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="2" />
      <rect x="14" y="14" width="172" height="372" rx="31" fill="url(#gScreen)" />
      {/* wallpaper waves */}
      <path d="M14 250 C 60 210, 110 300, 186 240 L186 386 L14 386 Z" fill="url(#gWave)" opacity="0.5" />
      <path d="M14 290 C 70 260, 120 340, 186 285 L186 386 L14 386 Z" fill="url(#gGoldSoft)" opacity="0.5" />
      <circle cx="140" cy="120" r="46" fill="url(#gGlow)" />
      {/* island */}
      <rect x="72" y="24" width="56" height="16" rx="8" fill="#000" />
      <circle cx="116" cy="32" r="3" fill="#2a2a35" />
      {/* clock */}
      <text x="100" y="98" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="300" fontSize="40" fill="#F6E3A1">9:41</text>
      <text x="100" y="118" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="3" fill="#B79445">ABU DHABI</text>
      {/* widgets */}
      <rect x="30" y="140" width="68" height="46" rx="12" fill="#ffffff" fillOpacity="0.07" stroke="#D2A441" strokeOpacity="0.25" />
      <rect x="102" y="140" width="68" height="46" rx="12" fill="#ffffff" fillOpacity="0.07" stroke="#D2A441" strokeOpacity="0.25" />
      <rect x="38" y="150" width="30" height="5" rx="2.5" fill="#D2A441" />
      <rect x="38" y="162" width="46" height="4" rx="2" fill="#ffffff" fillOpacity="0.3" />
      <circle cx="136" cy="163" r="13" stroke="#D2A441" strokeWidth="3" fill="none" strokeDasharray="60 22" />
      {/* app grid */}
      {[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => (
        <rect key={`${r}${c}`} x={30 + c * 36} y={206 + r * 36} width="28" height="28" rx="8"
          fill={(r + c) % 3 === 0 ? 'url(#gGold)' : '#ffffff'} fillOpacity={(r + c) % 3 === 0 ? 1 : 0.08} />
      )))}
      <rect x="70" y="372" width="60" height="4" rx="2" fill="#ffffff" fillOpacity="0.5" />
      <path d="M20 20 L110 20 L20 200 Z" fill="url(#gGlass)" />
      {/* side buttons */}
      <rect x="2" y="110" width="4" height="30" rx="2" fill="url(#gGold)" />
      <rect x="194" y="140" width="4" height="52" rx="2" fill="url(#gGold)" />
    </svg>
  )
}

/* ── Smartwatch ── */
export function Watch({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 160 300" fill="none" role="img" aria-label="Smartwatch illustration">
      <path d="M48 8 H112 L106 76 H54 Z" fill="url(#gBody)" stroke="url(#gGold)" strokeOpacity="0.6" />
      <path d="M54 224 H106 L112 292 H48 Z" fill="url(#gBody)" stroke="url(#gGold)" strokeOpacity="0.6" />
      {[0, 1, 2, 3, 4].map(i => <circle key={i} cx="80" cy={236 + i * 11} r="2" fill="#D2A441" opacity="0.7" />)}
      <rect x="22" y="66" width="116" height="168" rx="38" fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="2.5" />
      <rect x="31" y="75" width="98" height="150" rx="30" fill="url(#gScreen)" />
      <rect x="136" y="116" width="8" height="28" rx="4" fill="url(#gGold)" />
      <rect x="136" y="156" width="6" height="14" rx="3" fill="url(#gGold)" opacity="0.7" />
      {/* rings */}
      <g transform="translate(80 138)" strokeLinecap="round" fill="none">
        <circle r="38" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="8" />
        <circle r="38" stroke="url(#gGold)" strokeWidth="8" strokeDasharray="190 50" transform="rotate(-90)" />
        <circle r="26" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="8" />
        <circle r="26" stroke="#F6E3A1" strokeWidth="8" strokeDasharray="110 54" transform="rotate(-90)" />
        <circle r="14" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="8" />
        <circle r="14" stroke="#B3862C" strokeWidth="8" strokeDasharray="52 36" transform="rotate(-90)" />
      </g>
      <text x="80" y="102" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#F6E3A1">10:09</text>
      <text x="80" y="206" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" letterSpacing="2" fill="#B79445">ACTIVE</text>
      <path d="M30 76 L90 76 L30 160 Z" fill="url(#gGlass)" />
    </svg>
  )
}

/* ── Tablet ── */
export function Tablet({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 260 340" fill="none" role="img" aria-label="Tablet illustration">
      <rect x="4" y="4" width="252" height="332" rx="28" fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="2" />
      <rect x="14" y="14" width="232" height="312" rx="20" fill="url(#gScreen)" />
      <circle cx="130" cy="22" r="2.5" fill="#2a2a35" />
      <text x="30" y="52" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill="#F6E3A1">Dashboard</text>
      <rect x="30" y="62" width="80" height="4" rx="2" fill="#ffffff" fillOpacity="0.2" />
      {/* chart */}
      <rect x="28" y="84" width="204" height="108" rx="14" fill="#ffffff" fillOpacity="0.05" stroke="#D2A441" strokeOpacity="0.2" />
      {[24, 48, 36, 64, 52, 78, 60].map((h, i) => (
        <rect key={i} x={44 + i * 26} y={180 - h} width="14" height={h} rx="4" fill={i === 5 ? 'url(#gGold)' : '#D2A441'} fillOpacity={i === 5 ? 1 : 0.35} />
      ))}
      <path d="M44 150 C 80 120, 110 160, 140 110 S 200 100, 218 96" stroke="#F6E3A1" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* tiles */}
      {[0, 1].map(i => (
        <g key={i}>
          <rect x={28 + i * 104} y="208" width="100" height="52" rx="12" fill="#ffffff" fillOpacity="0.06" stroke="#D2A441" strokeOpacity="0.18" />
          <circle cx={48 + i * 104} cy="234" r="10" fill="url(#gGold)" />
          <rect x={66 + i * 104} y="226" width="42" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.35" />
          <rect x={66 + i * 104} y="237" width="28" height="4" rx="2" fill="#ffffff" fillOpacity="0.15" />
        </g>
      ))}
      <rect x="28" y="274" width="204" height="34" rx="12" fill="url(#gGold)" fillOpacity="0.9" />
      <text x="130" y="296" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1a1204">Open Store</text>
      <path d="M14 14 L170 14 L14 200 Z" fill="url(#gGlass)" />
    </svg>
  )
}

/* ── Earbuds + case ── */
export function Earbuds({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 220 190" fill="none" role="img" aria-label="Wireless earbuds illustration">
      {/* case */}
      <rect x="40" y="86" width="140" height="92" rx="40" fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="2" />
      <path d="M40 126 H180" stroke="url(#gGold)" strokeOpacity="0.6" />
      <circle cx="110" cy="152" r="5" fill="url(#gGold)" />
      <rect x="95" y="134" width="30" height="3" rx="1.5" fill="#D2A441" opacity="0.5" />
      <path d="M52 98 L120 94 L60 130 Z" fill="url(#gGlass)" />
      {/* buds */}
      {[0, 1].map(i => (
        <g key={i} transform={i ? 'translate(220 0) scale(-1 1)' : ''}>
          <path d="M62 20 C 38 20 30 44 40 62 C 46 72 58 74 64 66 L66 100 C 66 106 76 106 76 100 L76 52 C 76 34 72 20 62 20 Z"
            fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="1.8" />
          <circle cx="56" cy="44" r="6" fill="url(#gScreen)" stroke="#D2A441" strokeOpacity="0.5" />
          <path d="M44 34 C 48 26 56 24 60 28" stroke="#fff" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  )
}

/* ── Headphones ── */
export function Headphones({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 240 240" fill="none" role="img" aria-label="Headphones illustration">
      <path d="M36 150 V120 A84 84 0 0 1 204 120 V150" stroke="url(#gGold)" strokeWidth="10" strokeLinecap="round" />
      <path d="M52 112 A68 68 0 0 1 188 112" stroke="#000" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
      {[0, 1].map(i => (
        <g key={i} transform={i ? 'translate(240 0) scale(-1 1)' : ''}>
          <rect x="18" y="116" width="52" height="94" rx="24" fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="2" />
          <rect x="28" y="132" width="32" height="62" rx="16" fill="url(#gScreen)" stroke="#D2A441" strokeOpacity="0.4" />
          <circle cx="44" cy="163" r="8" fill="url(#gGold)" />
          <path d="M22 122 L52 122 L22 168 Z" fill="url(#gGlass)" />
        </g>
      ))}
    </svg>
  )
}

/* ── Power bank ── */
export function PowerBank({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 220" fill="none" role="img" aria-label="Power bank illustration">
      <rect x="6" y="6" width="108" height="208" rx="26" fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="2" />
      <rect x="22" y="26" width="76" height="52" rx="12" fill="url(#gScreen)" stroke="#D2A441" strokeOpacity="0.35" />
      <text x="60" y="60" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" fill="#F6E3A1">87%</text>
      {[0, 1, 2, 3].map(i => (
        <rect key={i} x={24 + i * 19} y="100" width="14" height="6" rx="3" fill={i < 3 ? 'url(#gGold)' : '#ffffff'} fillOpacity={i < 3 ? 1 : 0.15} />
      ))}
      <path d="M66 126 L50 156 H62 L56 184 L76 150 H64 Z" fill="url(#gGold)" />
      <rect x="40" y="198" width="40" height="6" rx="3" fill="#000" />
      <path d="M14 12 L70 12 L14 120 Z" fill="url(#gGlass)" />
    </svg>
  )
}

/* ── Fast charger ── */
export function Charger({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 140 220" fill="none" role="img" aria-label="Fast charger illustration">
      <rect x="40" y="6" width="12" height="26" rx="3" fill="url(#gGold)" />
      <rect x="88" y="6" width="12" height="26" rx="3" fill="url(#gGold)" />
      <rect x="20" y="30" width="100" height="116" rx="22" fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="2" />
      <rect x="54" y="116" width="32" height="12" rx="6" fill="#000" stroke="#D2A441" strokeOpacity="0.5" />
      <path d="M74 52 L56 84 H68 L62 108 L86 74 H73 Z" fill="url(#gGold)" />
      <path d="M70 146 C 70 190, 110 170, 110 210" stroke="url(#gGold)" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M26 36 L76 36 L26 100 Z" fill="url(#gGlass)" />
    </svg>
  )
}

/* ── Phone case (rear view) ── */
export function CaseBack({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 200 400" fill="none" role="img" aria-label="Phone case illustration">
      <rect x="6" y="6" width="188" height="388" rx="38" fill="url(#gBody)" stroke="url(#gGold)" strokeWidth="2" />
      <rect x="22" y="22" width="76" height="86" rx="22" fill="#0a0a0c" stroke="url(#gGold)" strokeWidth="1.5" />
      <circle cx="46" cy="46" r="14" fill="url(#gScreen)" stroke="#D2A441" /><circle cx="46" cy="46" r="6" fill="#2a2a35" />
      <circle cx="46" cy="84" r="14" fill="url(#gScreen)" stroke="#D2A441" /><circle cx="46" cy="84" r="6" fill="#2a2a35" />
      <circle cx="80" cy="64" r="8" fill="url(#gScreen)" stroke="#D2A441" />
      <path d="M60 300 q40 -50 80 0" stroke="url(#gGold)" strokeWidth="2" fill="none" />
      <text x="100" y="340" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="16" letterSpacing="4" fill="url(#gGold)">AL AWAANS</text>
      <path d="M14 14 L120 14 L14 220 Z" fill="url(#gGlass)" />
    </svg>
  )
}
