

// mockData.js - Marketing Data-Driven Analysis Data

export const marketingData = [
  {
    id: 1,
    date: "2025-01-05",
    customer_id: "C001",
    customer_name: "Amina Njoya",
    campaign: "Promo Jan",
    channel: "Facebook",
    category: "Email Marketing",
    amount: 300000,
    region: "Douala"
  },
  {
    id: 2,
    date: "2025-01-06",
    customer_id: "C002",
    customer_name: "Jean Mbarga",
    campaign: "Promo Jan",
    channel: "Google Ads",
    category: "Formations",
    amount: 150000,
    region: "Yaounde"
  },
  {
    id: 3,
    date: "2025-01-08",
    customer_id: "C001",
    customer_name: "Amina Njoya",
    campaign: "Promo Jan",
    channel: "Facebook",
    category: "Email Marketing",
    amount: 200000,
    region: "Douala"
  },
  {
    id: 4,
    date: "2025-01-12",
    customer_id: "C003",
    customer_name: "Sandrine Etoa",
    campaign: "Promo Jan",
    channel: "Instagram",
    category: "Social Media Audit",
    amount: 180000,
    region: "Bafoussam"
  },
  {
    id: 5,
    date: "2025-01-18",
    customer_id: "C002",
    customer_name: "Jean Mbarga",
    campaign: "Promo Jan",
    channel: "Google Ads",
    category: "Formations",
    amount: 220000,
    region: "Yaounde"
  },
  {
    id: 6,
    date: "2025-02-02",
    customer_id: "C001",
    customer_name: "Amina Njoya",
    campaign: "Valentine Boost",
    channel: "Facebook",
    category: "Email Marketing",
    amount: 140000,
    region: "Douala"
  },
  {
    id: 7,
    date: "2025-02-04",
    customer_id: "C004",
    customer_name: "Patrick Ndzi",
    campaign: "Valentine Boost",
    channel: "LinkedIn",
    category: "Data Analytics Packs",
    amount: 350000,
    region: "Douala"
  },
  {
    id: 8,
    date: "2025-02-06",
    customer_id: "C003",
    customer_name: "Sandrine Etoa",
    campaign: "Valentine Boost",
    channel: "Instagram",
    category: "Social Media Audit",
    amount: 200000,
    region: "Bafoussam"
  },
  {
    id: 9,
    date: "2025-02-10",
    customer_id: "C005",
    customer_name: "Luc Fotso",
    campaign: "Valentine Boost",
    channel: "Google Ads",
    category: "Formations",
    amount: 180000,
    region: "Dschang"
  },
  {
    id: 10,
    date: "2025-03-01",
    customer_id: "C001",
    customer_name: "Amina Njoya",
    campaign: "March Campaign",
    channel: "Facebook",
    category: "Email Marketing",
    amount: 160000,
    region: "Douala"
  },
  {
    id: 11,
    date: "2025-03-03",
    customer_id: "C002",
    customer_name: "Jean Mbarga",
    campaign: "March Campaign",
    channel: "Google Ads",
    category: "Formations",
    amount: 240000,
    region: "Yaounde"
  },
  {
    id: 12,
    date: "2025-03-05",
    customer_id: "C004",
    customer_name: "Patrick Ndzi",
    campaign: "March Campaign",
    channel: "LinkedIn",
    category: "Data Analytics Packs",
    amount: 420000,
    region: "Douala"
  },
  {
    id: 13,
    date: "2025-03-08",
    customer_id: "C006",
    customer_name: "Nathalie Kouam",
    campaign: "March Campaign",
    channel: "Instagram",
    category: "Community Management",
    amount: 210000,
    region: "Bafoussam"
  },
  {
    id: 14,
    date: "2025-03-10",
    customer_id: "C003",
    customer_name: "Sandrine Etoa",
    campaign: "March Campaign",
    channel: "Instagram",
    category: "Social Media Audit",
    amount: 190000,
    region: "Bafoussam"
  },
  {
    id: 15,
    date: "2025-03-12",
    customer_id: "C001",
    customer_name: "Amina Njoya",
    campaign: "March Campaign",
    channel: "Facebook",
    category: "Email Marketing",
    amount: 180000,
    region: "Douala"
  }
];

// Données agrégées utiles pour les analyses

export const campaigns = ["Promo Jan", "Valentine Boost", "March Campaign"];

export const channels = ["Facebook", "Google Ads", "Instagram", "LinkedIn"];

export const categories = [
  "Email Marketing",
  "Formations",
  "Social Media Audit",
  "Data Analytics Packs",
  "Community Management"
];

export const regions = ["Douala", "Yaounde", "Bafoussam", "Dschang"];

export const customers = [
  { id: "C001", name: "Amina Njoya" },
  { id: "C002", name: "Jean Mbarga" },
  { id: "C003", name: "Sandrine Etoa" },
  { id: "C004", name: "Patrick Ndzi" },
  { id: "C005", name: "Luc Fotso" },
  { id: "C006", name: "Nathalie Kouam" }
];

// Fonction utilitaire pour obtenir les données par période
export const getDataByMonth = (month) => {
  return marketingData.filter(item => item.date.startsWith(`2025-${month.toString().padStart(2, '0')}`));
};

// Fonction utilitaire pour calculer le revenu total
export const getTotalRevenue = (data = marketingData) => {
  return data.reduce((sum, item) => sum + item.amount, 0);
};

// Fonction utilitaire pour obtenir les données par campagne
export const getDataByCampaign = (campaignName) => {
  return marketingData.filter(item => item.campaign === campaignName);
};

// Fonction utilitaire pour obtenir les données par client
export const getDataByCustomer = (customerId) => {
  return marketingData.filter(item => item.customer_id === customerId);
};

// Fonction utilitaire pour obtenir les données par canal
export const getDataByChannel = (channelName) => {
  return marketingData.filter(item => item.channel === channelName);
};

export default marketingData;