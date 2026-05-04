export interface DossierDIM {
  id: string;
  numeroDomiciliation: string;
  client: string;
  refGUCE: string;
  montant: number;
  statut: 'En cours' | 'Complet' | 'Incomplet' | 'En retard' | 'Suspendu';
  echeance: Date;
  agent: string;
  pays: string;
  fournisseur: string;
  natureBiens: string;
  dateOuverture: Date;
}

export interface DossierDEX {
  id: string;
  numeroDomiciliation: string;
  client: string;
  refGUCE: string;
  montant: number;
  statut: string;
  echeance: Date;
  agent: string;
  pays: string;
  acheteur: string;
  natureBiens: string;
  dateOuverture: Date;
}

export interface Rapatriement {
  id: string;
  refSWIFT: string;
  montant: number;
  devise: string;
  dateReception: Date;
  dossierDEX: string;
  statut: string;
}

export interface IntegrationGUCE {
  id: string;
  date: Date;
  type: string;
  total: number;
  ok: number;
  erreurs: number;
  statut: string;
}

export const MOCK_DIM: DossierDIM[] = [
  {
    id: 'DIM001',
    numeroDomiciliation: 'DOM-2024-0001',
    client: 'KOUAME & FILS SARL',
    refGUCE: 'GUCE-2024-FDI-0012',
    montant: 45000000,
    statut: 'En cours',
    echeance: new Date('2024-06-30'),
    agent: 'Diallo Amadou',
    pays: 'Chine',
    fournisseur: 'GUANGZHOU TRADE CO.',
    natureBiens: 'Équipements industriels',
    dateOuverture: new Date('2024-01-15')
  },
  {
    id: 'DIM002',
    numeroDomiciliation: 'DOM-2024-0002',
    client: 'GLOBAL TRADE CI',
    refGUCE: 'GUCE-2024-FDI-0023',
    montant: 120000000,
    statut: 'Complet',
    echeance: new Date('2024-05-15'),
    agent: 'Koné Fatoumata',
    pays: 'France',
    fournisseur: 'MARSEILLE EXPORTS SA',
    natureBiens: 'Produits pharmaceutiques',
    dateOuverture: new Date('2024-01-20')
  },
  {
    id: 'DIM003',
    numeroDomiciliation: 'DOM-2024-0003',
    client: 'IVOIRE IMPORT',
    refGUCE: 'GUCE-2024-FDI-0034',
    montant: 78500000,
    statut: 'Incomplet',
    echeance: new Date('2024-04-30'),
    agent: 'Yao Bernadette',
    pays: 'Inde',
    fournisseur: 'MUMBAI TEXTILES LTD',
    natureBiens: 'Textiles et confection',
    dateOuverture: new Date('2024-02-01')
  },
  {
    id: 'DIM004',
    numeroDomiciliation: 'DOM-2024-0004',
    client: 'ABIDJAN NÉGOCE',
    refGUCE: 'GUCE-2024-EC-0045',
    montant: 35000000,
    statut: 'En retard',
    echeance: new Date('2024-03-31'),
    agent: 'Ouattara Moussa',
    pays: 'Espagne',
    fournisseur: 'VALENCIA MACHINERY',
    natureBiens: 'Machines agricoles',
    dateOuverture: new Date('2024-01-10')
  },
  {
    id: 'DIM005',
    numeroDomiciliation: 'DOM-2024-0005',
    client: 'SOPROCI',
    refGUCE: 'GUCE-2024-FDI-0056',
    montant: 250000000,
    statut: 'En cours',
    echeance: new Date('2024-08-31'),
    agent: 'Traoré Ibrahim',
    pays: 'Allemagne',
    fournisseur: 'BERLIN CHEMICALS GMBH',
    natureBiens: 'Produits chimiques',
    dateOuverture: new Date('2024-02-15')
  },
  {
    id: 'DIM006',
    numeroDomiciliation: 'DOM-2024-0006',
    client: 'EXPORT IVOIRE SARL',
    refGUCE: 'GUCE-2024-FDI-0067',
    montant: 18000000,
    statut: 'Suspendu',
    echeance: new Date('2024-07-15'),
    agent: 'Coulibaly Sita',
    pays: 'Turquie',
    fournisseur: 'ISTANBUL GOODS CO',
    natureBiens: 'Matériaux de construction',
    dateOuverture: new Date('2024-02-20')
  },
  {
    id: 'DIM007',
    numeroDomiciliation: 'DOM-2024-0007',
    client: 'NKRUMAH TRADING',
    refGUCE: 'GUCE-2024-EC-0078',
    montant: 95000000,
    statut: 'Complet',
    echeance: new Date('2024-06-01'),
    agent: 'Bamba Mariama',
    pays: 'Brésil',
    fournisseur: 'SAO PAULO FOODS LTDA',
    natureBiens: 'Denrées alimentaires',
    dateOuverture: new Date('2024-01-25')
  },
  {
    id: 'DIM008',
    numeroDomiciliation: 'DOM-2024-0008',
    client: 'SOCIÉTÉ IVOIRE PLUS',
    refGUCE: 'GUCE-2024-FDI-0089',
    montant: 62000000,
    statut: 'En cours',
    echeance: new Date('2024-09-30'),
    agent: 'Diabaté Souleymane',
    pays: 'Japon',
    fournisseur: 'TOKYO ELECTRONICS K.K.',
    natureBiens: 'Électronique grand public',
    dateOuverture: new Date('2024-03-01')
  },
  {
    id: 'DIM009',
    numeroDomiciliation: 'DOM-2024-0009',
    client: 'ABISSA COMMERCE',
    refGUCE: 'GUCE-2024-AC-0090',
    montant: 11500000,
    statut: 'En retard',
    echeance: new Date('2024-03-15'),
    agent: 'Gnangoran Paul',
    pays: 'Maroc',
    fournisseur: 'CASABLANCA TRADE SARL',
    natureBiens: 'Fournitures de bureau',
    dateOuverture: new Date('2023-12-10')
  },
  {
    id: 'DIM010',
    numeroDomiciliation: 'DOM-2024-0010',
    client: 'CI DISTRIBUTION',
    refGUCE: 'GUCE-2024-FDI-0101',
    montant: 175000000,
    statut: 'En cours',
    echeance: new Date('2024-10-31'),
    agent: 'Diallo Amadou',
    pays: 'États-Unis',
    fournisseur: 'NEW YORK SUPPLIES INC.',
    natureBiens: 'Pièces de rechange',
    dateOuverture: new Date('2024-03-05')
  }
];

export const MOCK_DEX: DossierDEX[] = [
  {
    id: 'DEX001',
    numeroDomiciliation: 'EXP-2024-0001',
    client: 'CACAO CI EXPORT',
    refGUCE: 'GUCE-2024-DEX-0010',
    montant: 320000000,
    statut: 'En cours',
    echeance: new Date('2024-06-30'),
    agent: 'Koné Fatoumata',
    pays: 'Pays-Bas',
    acheteur: 'AMSTERDAM COCOA BV',
    natureBiens: 'Fèves de cacao',
    dateOuverture: new Date('2024-01-10')
  },
  {
    id: 'DEX002',
    numeroDomiciliation: 'EXP-2024-0002',
    client: 'CAFÉ IVOIRE SA',
    refGUCE: 'GUCE-2024-DEX-0020',
    montant: 185000000,
    statut: 'Apuré',
    echeance: new Date('2024-04-30'),
    agent: 'Yao Bernadette',
    pays: 'Italie',
    acheteur: 'MILAN COFFEE COMPANY',
    natureBiens: 'Café robusta',
    dateOuverture: new Date('2024-01-20')
  },
  {
    id: 'DEX003',
    numeroDomiciliation: 'EXP-2024-0003',
    client: 'PALMCI',
    refGUCE: 'GUCE-2024-DEX-0030',
    montant: 240000000,
    statut: 'En cours',
    echeance: new Date('2024-07-31'),
    agent: 'Traoré Ibrahim',
    pays: 'Malaisie',
    acheteur: 'KUALA LUMPUR OILS SDN',
    natureBiens: 'Huile de palme brute',
    dateOuverture: new Date('2024-02-01')
  },
  {
    id: 'DEX004',
    numeroDomiciliation: 'EXP-2024-0004',
    client: 'BOIS TROPICAUX CI',
    refGUCE: 'GUCE-2024-DEX-0040',
    montant: 95000000,
    statut: 'En retard',
    echeance: new Date('2024-03-31'),
    agent: 'Ouattara Moussa',
    pays: 'Chine',
    acheteur: 'GUANGZHOU TIMBER CO.',
    natureBiens: 'Bois tropicaux',
    dateOuverture: new Date('2023-12-15')
  },
  {
    id: 'DEX005',
    numeroDomiciliation: 'EXP-2024-0005',
    client: 'CAOUTCHOUC SUD',
    refGUCE: 'GUCE-2024-DEX-0050',
    montant: 410000000,
    statut: 'En cours',
    echeance: new Date('2024-09-30'),
    agent: 'Bamba Mariama',
    pays: 'Allemagne',
    acheteur: 'FRANKFURT RUBBER GMBH',
    natureBiens: 'Caoutchouc naturel',
    dateOuverture: new Date('2024-02-10')
  },
  {
    id: 'DEX006',
    numeroDomiciliation: 'EXP-2024-0006',
    client: 'ANANAS GOLD',
    refGUCE: 'GUCE-2024-DEX-0060',
    montant: 55000000,
    statut: 'Incomplet',
    echeance: new Date('2024-05-15'),
    agent: 'Coulibaly Sita',
    pays: 'France',
    acheteur: 'PARIS FRUITS SASU',
    natureBiens: 'Ananas frais',
    dateOuverture: new Date('2024-02-20')
  },
  {
    id: 'DEX007',
    numeroDomiciliation: 'EXP-2024-0007',
    client: 'COTON CI',
    refGUCE: 'GUCE-2024-DEX-0070',
    montant: 280000000,
    statut: 'Apuré',
    echeance: new Date('2024-04-15'),
    agent: 'Diabaté Souleymane',
    pays: 'Bangladesh',
    acheteur: 'DHAKA TEXTILE MILLS',
    natureBiens: 'Coton brut',
    dateOuverture: new Date('2024-01-05')
  },
  {
    id: 'DEX008',
    numeroDomiciliation: 'EXP-2024-0008',
    client: 'NOIX DE CAJOU CI',
    refGUCE: 'GUCE-2024-DEX-0080',
    montant: 165000000,
    statut: 'En cours',
    echeance: new Date('2024-08-31'),
    agent: 'Gnangoran Paul',
    pays: 'Inde',
    acheteur: 'MUMBAI CASHEW PVTLTD',
    natureBiens: 'Noix de cajou',
    dateOuverture: new Date('2024-02-25')
  },
  {
    id: 'DEX009',
    numeroDomiciliation: 'EXP-2024-0009',
    client: 'MINERAUX CI',
    refGUCE: 'GUCE-2024-DEX-0090',
    montant: 520000000,
    statut: 'Suspendu',
    echeance: new Date('2024-06-15'),
    agent: 'Diallo Amadou',
    pays: 'Chine',
    acheteur: 'BEIJING MINERALS CORP',
    natureBiens: 'Manganèse',
    dateOuverture: new Date('2024-03-01')
  },
  {
    id: 'DEX010',
    numeroDomiciliation: 'EXP-2024-0010',
    client: 'BEURRE KARITÉ EXPORT',
    refGUCE: 'GUCE-2024-DEX-0100',
    montant: 72000000,
    statut: 'En cours',
    echeance: new Date('2024-10-31'),
    agent: 'Koné Fatoumata',
    pays: 'États-Unis',
    acheteur: 'NEW YORK COSMETICS LLC',
    natureBiens: 'Beurre de karité',
    dateOuverture: new Date('2024-03-10')
  }
];

export const MOCK_RAPATRIEMENTS: Rapatriement[] = [
  {
    id: 'RRE001',
    refSWIFT: 'SWIFT-2024-BNP-0012',
    montant: 185000000,
    devise: 'EUR',
    dateReception: new Date('2024-04-02'),
    dossierDEX: 'EXP-2024-0002',
    statut: 'Validé'
  },
  {
    id: 'RRE002',
    refSWIFT: 'SWIFT-2024-SG-0023',
    montant: 280000000,
    devise: 'USD',
    dateReception: new Date('2024-04-05'),
    dossierDEX: 'EXP-2024-0007',
    statut: 'En attente'
  },
  {
    id: 'RRE003',
    refSWIFT: 'SWIFT-2024-CA-0034',
    montant: 95000000,
    devise: 'USD',
    dateReception: new Date('2024-04-08'),
    dossierDEX: 'EXP-2024-0004',
    statut: 'En cours'
  },
  {
    id: 'RRE004',
    refSWIFT: 'SWIFT-2024-DB-0045',
    montant: 320000000,
    devise: 'EUR',
    dateReception: new Date('2024-04-10'),
    dossierDEX: 'EXP-2024-0001',
    statut: 'Partiel'
  },
  {
    id: 'RRE005',
    refSWIFT: 'SWIFT-2024-HSBC-0056',
    montant: 55000000,
    devise: 'EUR',
    dateReception: new Date('2024-04-12'),
    dossierDEX: 'EXP-2024-0006',
    statut: 'En attente'
  }
];

export const MOCK_INTEGRATIONS: IntegrationGUCE[] = [
  {
    id: 'INT001',
    date: new Date('2024-04-15'),
    type: 'FDI',
    total: 53,
    ok: 45,
    erreurs: 8,
    statut: 'Partiel'
  },
  {
    id: 'INT002',
    date: new Date('2024-04-12'),
    type: 'EC',
    total: 28,
    ok: 28,
    erreurs: 0,
    statut: 'Succès'
  },
  {
    id: 'INT003',
    date: new Date('2024-04-10'),
    type: 'AC',
    total: 15,
    ok: 12,
    erreurs: 3,
    statut: 'Partiel'
  }
];
