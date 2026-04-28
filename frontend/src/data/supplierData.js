/**
 * supplierData.js
 * Central data store for supplier profiles.
 * Keyed by supplierId so the profile page can look up data from the URL param.
 * Each entry mirrors the shape expected by the SupplierProfile components.
 */

export const supplierProfiles = {
  'nexus-global-core': {
    supplierId: 'SUP-001-NEXUS',
    tier: 'Tier 1 Supplier',
    name: 'Nexus Global Core',
    tagline:
      'End-to-end supply chain optimization focusing on the EMEA region and high-value cargo.',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClBZMvXFdaxilVcviB8u8Va2oa55gTkEG_A7R2SaPuUZ68nB8_Eb_HaJbp7A5HYJl0kQdMU32hz6T0vcfiqDuLX4JLIuGxkD4oyknhIkfnE8bRm6IhVsJTm9GpRJv0JnK2G3zuFrlmfrtVtfCA3IoLgr1H8e0dI3OxfVoBT8sisJMcJHoUc-wXfg2DVwT2rAJ44KjT1n_iibxhiDti7kf-qz9rUPRcODEkoXLD2q283zJ6beEL8NKppju12AX8IrEFEGNM7IvA-Oz6',
    stats: {
      aggregateRating: '4.90',
      ratingBasis: 'Based on 1,240 verified transactions',
      metrics: [
        { label: 'Delivery Reliability', value: '98%', pct: '98%' },
        { label: 'Quality Compliance', value: '100%', pct: '100%' },
        { label: 'Communication Speed', value: '92%', pct: '92%' },
      ],
    },
    products: [
      {
        icon: 'settings_input_component',
        name: 'X-7 Waveguide Modular',
        subtitle: 'Aerospace Grade Aluminum',
        sku: 'NG-WAV-07',
        leadTime: '14 Days',
        price: '$2,450.00',
        stock: 'In Stock',
      },
      {
        icon: 'memory',
        name: 'Cryo-Logic Processor C2',
        subtitle: 'Sub-zero Quantum Processing',
        sku: 'NG-PRC-C2',
        leadTime: '30 Days',
        price: '$12,900.00',
        stock: 'Low Stock',
      },
      {
        icon: 'router',
        name: '5G Nano-Antenna Array',
        subtitle: 'Multi-band High Gain',
        sku: 'NG-ANT-5G',
        leadTime: '7 Days',
        price: '$840.00',
        stock: 'In Stock',
      },
    ],
    insights: {
      coveragePct: 94,
      reviewFrequency: 'High',
      avgPerMonth: 12,
      reviews: [
        {
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCCxlQnBcggvFA_wchCeZN07Z_q8UMVR0vjtxfU3FpTSVcMlnN9kNrjKBwuz4WozJx5wInQbc6BJyGzyumC2InP89FO_Uv2rh65HlSWIqbarBAoIPBGQyyDfHYg3BaUOSFG41tDKqGkijtJPa03Ml3CUS56tlKBNe6Fk6roYVJESCN49ODF-utLeagFuFdy080OYVK0CFEELafGxCvzVJV8WNTkCbludJSqvyk--vmbLU4bngQu1Coh36e3NSuNnUG5UNWzWiLNeuU-',
          name: 'Sarah Jenkins',
          role: 'Procurement Lead, OrbitSat',
          rating: 5,
          text: '"Nexus Global Core has been our primary provider for the last three quarters. Their supply chain coordination across EMEA is unmatched. Delivery was exactly on time as promised."',
          tags: ['Reliability', 'Precision'],
        },
        {
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD4B7kZb2b9uvDOMO93gzL0lZGalJP88MF1QImQVg5nwPdtZRHOuv_a-JwmJVqHrxQtHA18h5W2GxqW2KnIVVg1lP1mq_FpfbaJQzA3xNCkxUIi47ZYlm_bFu9fjSpwLjZRlpyBTUASZb6e52dVtVHG0W2ijEDLd57F2X1EG31Rp9bPUvPYEP9hQO9R_2Y1q8wdHN5LEDRAN1-J1s23ziDMs6kiYzbdSQ-ERlZ3x-zmrf8W9yYE9FktxK3IKWqrEDV3ef2Iw0_GTuNm',
          name: 'David Chen',
          role: 'CTO, NextStream Networks',
          rating: 4,
          text: '"Exceptional logistics management. We had a slight delay during Q3 but the account manager was proactive and transparent throughout. Their documentation is best-in-class."',
          tags: ['Communication', 'Transparency'],
        },
      ],
    },
  },

  'silicon-path-systems': {
    supplierId: 'SUP-002-SPS',
    tier: 'Tier 2 Supplier',
    name: 'Silicon Path Systems',
    tagline:
      'Specialized micro-processor fabrication and custom PCB assembly for medical diagnostics.',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDskVn4eaCOKXm6WHeaO890RkDpxH1xmRsNiWg3M9zG2wNUjiGO7fTDNuf7g8ZPCx0JKwrVewmB_4DIfUEu8cjmi6u1Efnl-gb_qdJzZi5UN7F-jt9w3gt2bfU2ExPNxqGCZE8CNSUgyDyBIY4TYYHgr30KRYs8Y7YrEtymQRFWvHDt7SJefxnlJB2Q1E52jalWozH-OhS98najh1a-5QiSSLaL75Wri3y0DEr2WTWFvIKGQYYj_1FEJxUzZGhm_t3h3557QNBKs0ov',
    stats: {
      aggregateRating: '4.70',
      ratingBasis: 'Based on 870 verified transactions',
      metrics: [
        { label: 'Delivery Reliability', value: '95%', pct: '95%' },
        { label: 'Quality Compliance', value: '99%', pct: '99%' },
        { label: 'Communication Speed', value: '88%', pct: '88%' },
      ],
    },
    products: [
      {
        icon: 'memory',
        name: 'Custom PCB Assembly MX',
        subtitle: 'Medical-Grade ISO 13485',
        sku: 'SPS-PCB-MX',
        leadTime: '21 Days',
        price: '$1,200.00',
        stock: 'In Stock',
      },
      {
        icon: 'settings_input_component',
        name: 'Micro-Processor Fab Unit',
        subtitle: '7nm Process Node',
        sku: 'SPS-MPU-7N',
        leadTime: '45 Days',
        price: '$8,500.00',
        stock: 'Low Stock',
      },
    ],
    insights: {
      coveragePct: 88,
      reviewFrequency: 'Medium',
      avgPerMonth: 8,
      reviews: [
        {
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCCxlQnBcggvFA_wchCeZN07Z_q8UMVR0vjtxfU3FpTSVcMlnN9kNrjKBwuz4WozJx5wInQbc6BJyGzyumC2InP89FO_Uv2rh65HlSWIqbarBAoIPBGQyyDfHYg3BaUOSFG41tDKqGkijtJPa03Ml3CUS56tlKBNe6Fk6roYVJESCN49ODF-utLeagFuFdy080OYVK0CFEELafGxCvzVJV8WNTkCbludJSqvyk--vmbLU4bngQu1Coh36e3NSuNnUG5UNWzWiLNeuU-',
          name: 'Maria Lopez',
          role: 'VP Engineering, MediTech Corp',
          rating: 5,
          text: '"Silicon Path consistently delivers ISO-compliant PCBs with zero defect rates. Their medical-grade manufacturing is exactly what our diagnostic equipment requires."',
          tags: ['Quality', 'Compliance'],
        },
      ],
    },
  },

  'titan-forge-metals': {
    supplierId: 'SUP-003-TITAN',
    tier: 'Tier 1 Supplier',
    name: 'Titan Forge Metals',
    tagline:
      'Advanced alloy manufacturing and sustainable recycling processes for heavy industry.',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCuhMoigl6WAWA6ePFAZUhhk7QevOYc_bqbdk4j0zD0lzTDcYBn6bCu_2DkCpV5-NEElxrpfppk44Ykc27sgbUFn1IEt3gPbpURSn8Ks9sgrbzZKtScna0BqfMW_JY3HOW2mYEf50Zj2abj6rTWbaIVqHpqDZNBnpsgHH2l968uJeXhX7py700aY1oFfMEsbzBNpZ6PJw8GEWKt_wM26qfWJDZR3Gn0-vIuYht82sIjDCXoe2nfdgYKaQYvLWP4JZotJ-_iVH8pwKjJ',
    stats: {
      aggregateRating: '5.00',
      ratingBasis: 'Based on 2,100 verified transactions',
      metrics: [
        { label: 'Delivery Reliability', value: '100%', pct: '100%' },
        { label: 'Quality Compliance', value: '100%', pct: '100%' },
        { label: 'Communication Speed', value: '97%', pct: '97%' },
      ],
    },
    products: [
      {
        icon: 'settings_input_component',
        name: 'Grade-7 Titanium Billet',
        subtitle: 'Aerospace & Defense',
        sku: 'TF-TI-G7',
        leadTime: '10 Days',
        price: '$5,600.00',
        stock: 'In Stock',
      },
      {
        icon: 'router',
        name: 'Recycled Steel Alloy Sheet',
        subtitle: 'Sustainable Heavy Industry',
        sku: 'TF-ST-RSA',
        leadTime: '5 Days',
        price: '$320.00',
        stock: 'In Stock',
      },
    ],
    insights: {
      coveragePct: 98,
      reviewFrequency: 'High',
      avgPerMonth: 20,
      reviews: [
        {
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD4B7kZb2b9uvDOMO93gzL0lZGalJP88MF1QImQVg5nwPdtZRHOuv_a-JwmJVqHrxQtHA18h5W2GxqW2KnIVVg1lP1mq_FpfbaJQzA3xNCkxUIi47ZYlm_bFu9fjSpwLjZRlpyBTUASZb6e52dVtVHG0W2ijEDLd57F2X1EG31Rp9bPUvPYEP9hQO9R_2Y1q8wdHN5LEDRAN1-J1s23ziDMs6kiYzbdSQ-ERlZ3x-zmrf8W9yYE9FktxK3IKWqrEDV3ef2Iw0_GTuNm',
          name: 'James Okafor',
          role: 'Head of Procurement, BuildCore',
          rating: 5,
          text: '"A perfect 5-star supplier. Titan Forge consistently exceeds expectations. Their sustainable alloy recycling program aligns perfectly with our ESG targets. Highly recommended."',
          tags: ['Sustainability', 'Reliability', 'ESG'],
        },
      ],
    },
  },

  'greenbond-catalysts': {
    supplierId: 'SUP-004-GBC',
    tier: 'Tier 2 Supplier',
    name: 'GreenBond Catalysts',
    tagline:
      'Specialty polymer production and catalytic converters for sustainable automotive solutions.',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAokcgOBtlB0s-kOt83WuEd6H4mZy7NGGEstzalNuSrku8l3xv_8oJbNz2wXdKeEFNfeI2M1avE_rv5zJoPxLowxGT5GSS1xJltAXSjRL4qIImeS7GSn6A94SrMoaE6K6cicR9w6wwxxqdR_Dn8HMVynPsICD5NhLZv45pxXJhwkxmOOS3Nn0PE43tlojWcfxNT2mu5WzgcHtEKRxYIEjcrKrPE6_5ig7G2d4s9E-9emX2roDgctxd3wyiq611BLsTsq2xBJH8K7H00',
    stats: {
      aggregateRating: '4.50',
      ratingBasis: 'Based on 620 verified transactions',
      metrics: [
        { label: 'Delivery Reliability', value: '91%', pct: '91%' },
        { label: 'Quality Compliance', value: '96%', pct: '96%' },
        { label: 'Communication Speed', value: '85%', pct: '85%' },
      ],
    },
    products: [
      {
        icon: 'memory',
        name: 'Platinum Group Catalyst',
        subtitle: 'EV Battery-Grade Purity',
        sku: 'GBC-PGM-01',
        leadTime: '18 Days',
        price: '$3,800.00',
        stock: 'Low Stock',
      },
    ],
    insights: {
      coveragePct: 82,
      reviewFrequency: 'Medium',
      avgPerMonth: 6,
      reviews: [
        {
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCCxlQnBcggvFA_wchCeZN07Z_q8UMVR0vjtxfU3FpTSVcMlnN9kNrjKBwuz4WozJx5wInQbc6BJyGzyumC2InP89FO_Uv2rh65HlSWIqbarBAoIPBGQyyDfHYg3BaUOSFG41tDKqGkijtJPa03Ml3CUS56tlKBNe6Fk6roYVJESCN49ODF-utLeagFuFdy080OYVK0CFEELafGxCvzVJV8WNTkCbludJSqvyk--vmbLU4bngQu1Coh36e3NSuNnUG5UNWzWiLNeuU-',
          name: 'Priya Sharma',
          role: 'R&D Director, AutoGreen Labs',
          rating: 4,
          text: '"GreenBonds ESG compliance and polymer innovation is excellent. Lead times can stretch during peak season but the quality makes up for it."',
          tags: ['ESG Compliant', 'Innovation'],
        },
      ],
    },
  },

  'apex-strategic-sourcing': {
    supplierId: 'SUP-005-APEX',
    tier: 'Tier 1 Supplier',
    name: 'Apex Strategic Sourcing',
    tagline:
      'Strategic procurement consultancy for Fortune 500 tech firms specializing in hardware.',
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwUxPLRNxGVxHWiTshwbuHdQnODTvwgUp02yAx5L926uKlv1WoAHv_hdB5NH-wtbgbeW5itoH4AAxyQmXeMRMUKFTj_qIZBbnHYSCZsPxRMBZsx0Uy651KymGqdY3iAuu5wbLZk9tkU5O5kLxRZmy0KZRKHtopLRcyxuf0XVMVvv40dfxzliOkPq7FjL46DHscUD9vSpDysx2UfWdVjVJKTqKvX_O7VSpq-FLL6peznTPTkT2C1vteQyWK0TTtsCE6Lhvzn_jeTN_U',
    stats: {
      aggregateRating: '4.80',
      ratingBasis: 'Based on 1,050 verified transactions',
      metrics: [
        { label: 'Delivery Reliability', value: '96%', pct: '96%' },
        { label: 'Quality Compliance', value: '98%', pct: '98%' },
        { label: 'Communication Speed', value: '95%', pct: '95%' },
      ],
    },
    products: [
      {
        icon: 'router',
        name: 'Enterprise Hardware Bundle',
        subtitle: 'Fortune 500 Edition',
        sku: 'APS-EHB-F5',
        leadTime: '7 Days',
        price: '$18,000.00',
        stock: 'In Stock',
      },
    ],
    insights: {
      coveragePct: 91,
      reviewFrequency: 'High',
      avgPerMonth: 10,
      reviews: [
        {
          avatar:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD4B7kZb2b9uvDOMO93gzL0lZGalJP88MF1QImQVg5nwPdtZRHOuv_a-JwmJVqHrxQtHA18h5W2GxqW2KnIVVg1lP1mq_FpfbaJQzA3xNCkxUIi47ZYlm_bFu9fjSpwLjZRlpyBTUASZb6e52dVtVHG0W2ijEDLd57F2X1EG31Rp9bPUvPYEP9hQO9R_2Y1q8wdHN5LEDRAN1-J1s23ziDMs6kiYzbdSQ-ERlZ3x-zmrf8W9yYE9FktxK3IKWqrEDV3ef2Iw0_GTuNm',
          name: 'Lena Fischer',
          role: 'CPO, CloudBurst Technologies',
          rating: 5,
          text: '"Apex transformed our procurement process completely. Their hardware sourcing strategy saved us 22% YoY. A true strategic partner, not just a vendor."',
          tags: ['Strategy', 'Cost Efficiency', 'New Partner'],
        },
      ],
    },
  },
};

/** Helper: convert supplier card name → slug key used in the data store and URL */
export const nameToSlug = (name) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
