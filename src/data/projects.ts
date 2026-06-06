import heroAlmond from "@/assets/hero-almond-farm.jpg";
import almondDrone from "@/assets/almond-drone.jpg";
import almondBlossom from "@/assets/almond-blossom.jpg";
import almondResort from "@/assets/almond-resort.jpg";
import almondMasterplan from "@/assets/almond-masterplan.jpg";
import almondExperience from "@/assets/almond-future-experience.jpg";
import almondWellness from "@/assets/almond-future-wellness.jpg";

import pistaFarm from "@/assets/pista-farm.jpg";
import oliveDrone from "@/assets/olive-drone.jpg";
import pistachioHarvest from "@/assets/pistachio-harvest.jpg";
import oliveMill from "@/assets/olive-mill.jpg";
import oliveMasterplan from "@/assets/olive-masterplan.jpg";
import oliveWedding from "@/assets/olive-future-wedding.jpg";
import oliveCulinary from "@/assets/olive-future-culinary.jpg";

import georgia from "@/assets/georgia-land.jpg";
import potatoDrone from "@/assets/potato-drone.jpg";
import potatoHarvest from "@/assets/potato-harvest.jpg";
import foodFactory from "@/assets/food-factory.jpg";
import frozenPlant from "@/assets/frozen-plant.jpg";
import tsalkaMasterplan from "@/assets/tsalka-masterplan.jpg";
import tsalkaExport from "@/assets/tsalka-export.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  acreage: string;
  currentBusiness: string;
  description: string;
  currentRevenue: string[];
  futureRevenue: string[];
  phases?: { phase: string; title: string }[];
  projectedGrowth: string;
  roi: string;
  cover: string;
  gallery: { src: string; label: string }[];
  futureProjections: { src: string; title: string; caption: string }[];
  currentAssetValue: string;
  tokenSupply: string;
  expectedYield: string;
  assetBacking: string;
  valueGrowth: { year: string; value: number }[];
  yieldGrowth: { year: string; value: number }[];
};

export const projects: Project[] = [
  {
    slug: "almond-valley-estate",
    name: "Almond Valley Estate",
    location: "Rustavi, Georgia",
    acreage: "130 Acres",
    currentBusiness: "Commercial Almond Farming",
    description:
      "A large-scale almond plantation positioned for long-term agricultural production and premium agro-tourism development.",
    currentRevenue: ["Almond Production", "Almond Processing", "Agricultural Sales"],
    futureRevenue: [
      "Luxury Farm Stay Villas",
      "Organic Tourism",
      "Horse Riding Trails",
      "Experience Farming",
      "Almond Blossom Festival",
      "Wellness Retreats",
      "Yoga Retreats",
      "Farm-to-Table Restaurant",
      "Eco Lodges",
      "Glamping Experiences",
      "Family Adventure Activities",
      "Corporate Retreat Programs",
      "Cycling Trails",
      "Outdoor Cinema",
      "Farm Weddings",
      "Weekend Escapes",
      "Children's Farm Learning Programs",
    ],
    projectedGrowth: "Agriculture Revenue + Tourism Revenue + Land Appreciation",
    roi: "12% – 18% Annual Target",
    cover: heroAlmond,
    gallery: [
      { src: almondDrone, label: "Aerial Orchard View" },
      { src: almondBlossom, label: "Almond Blossom Season" },
      { src: almondResort, label: "Luxury Villa Concept" },
      { src: almondMasterplan, label: "Estate Masterplan" },
      { src: almondExperience, label: "Horse Riding Experience" },
    ],
    futureProjections: [
      { src: almondResort, title: "Luxury Farm Stay Villas", caption: "Modern stone villas with infinity pools nestled inside the orchards." },
      { src: almondExperience, title: "Horse Riding & Experience Tourism", caption: "Curated outdoor experiences across the estate trails." },
      { src: almondWellness, title: "Wellness & Yoga Retreats", caption: "Open-air wellness platforms hosted under the almond canopy." },
      { src: almondMasterplan, title: "Estate Masterplan", caption: "Phased rollout of villas, F&B, wellness and event spaces." },
    ],
    currentAssetValue: "$5.2M",
    tokenSupply: "5,200,000 AVE",
    expectedYield: "12–18% Target APY",
    assetBacking: "1 Token = 1 USD of Land + Crop NAV",
    valueGrowth: [
      { year: "Y1", value: 5 },
      { year: "Y2", value: 6.5 },
      { year: "Y3", value: 8 },
      { year: "Y4", value: 11 },
      { year: "Y5", value: 15 },
    ],
    yieldGrowth: [
      { year: "Y1", value: 8 },
      { year: "Y2", value: 12 },
      { year: "Y3", value: 15 },
      { year: "Y4", value: 18 },
      { year: "Y5", value: 22 },
    ],
  },
  {
    slug: "olive-pistachio-reserve",
    name: "Olive & Pistachio Reserve",
    location: "Kakheti, Georgia",
    acreage: "115 Acres",
    currentBusiness: "Olive Farming and Pistachio Cultivation",
    description:
      "Premium agricultural estate combining high-value olive and pistachio production with future luxury tourism experiences.",
    currentRevenue: ["Olive Production", "Pistachio Farming", "Agricultural Exports"],
    futureRevenue: [
      "Olive Oil Experience Center",
      "Olive Oil Factory Tours",
      "Olive Tasting Lounge",
      "Pistachio Harvest Festivals",
      "Luxury Eco Villas",
      "Wine and Olive Pairing Events",
      "Culinary Tourism",
      "Traditional Georgian Food Experiences",
      "Wellness Retreats",
      "Premium Camping",
      "Nature Photography Tours",
      "Wedding Destination Venue",
      "Sustainable Living Workshops",
      "Farm Markets",
      "Cooking Classes",
      "ATV Adventure Trails",
    ],
    projectedGrowth: "Agriculture Revenue + Tourism Revenue + Premium Product Sales",
    roi: "14% – 20% Annual Target",
    cover: pistaFarm,
    gallery: [
      { src: oliveDrone, label: "Olive Groves — Aerial" },
      { src: pistachioHarvest, label: "Pistachio Harvest" },
      { src: oliveMill, label: "Olive Oil Tasting Lounge" },
      { src: oliveMasterplan, label: "Eco-Villa Masterplan" },
      { src: oliveCulinary, label: "Farm-to-Table Experience" },
    ],
    futureProjections: [
      { src: oliveMill, title: "Olive Oil Experience Center", caption: "Tastings, tours and signature olive oil retail in a heritage setting." },
      { src: oliveWedding, title: "Destination Weddings", caption: "Cinematic outdoor venue among ancient olive trees." },
      { src: oliveCulinary, title: "Culinary Tourism", caption: "Traditional Georgian dining and cooking classes under the canopy." },
      { src: oliveMasterplan, title: "Luxury Eco Villas Masterplan", caption: "Phased rollout of villas, wellness and event venues." },
    ],
    currentAssetValue: "$6.1M",
    tokenSupply: "6,100,000 OPR",
    expectedYield: "14–20% Target APY",
    assetBacking: "1 Token = 1 USD of Grove + Export NAV",
    valueGrowth: [
      { year: "Y1", value: 6 },
      { year: "Y2", value: 8 },
      { year: "Y3", value: 10 },
      { year: "Y4", value: 13 },
      { year: "Y5", value: 17 },
    ],
    yieldGrowth: [
      { year: "Y1", value: 9 },
      { year: "Y2", value: 13 },
      { year: "Y3", value: 16 },
      { year: "Y4", value: 19 },
      { year: "Y5", value: 23 },
    ],
  },
  {
    slug: "tsalka-agro-industrial-estate",
    name: "Tsalka Agro Industrial Estate",
    location: "Tsalka, Georgia",
    acreage: "270 Acres",
    currentBusiness: "Potato Farming",
    description:
      "Large-scale agricultural project designed to evolve into a vertically integrated food processing ecosystem.",
    currentRevenue: ["Potato Farming", "Agricultural Sales"],
    futureRevenue: [
      "Agro Industrial Tourism",
      "Processing Plant Tours",
      "Food Innovation Center",
      "Investor Experience Center",
      "Educational Agriculture Programs",
      "Agricultural Research Facility",
      "Farm Café",
      "Product Experience Store",
      "School Educational Visits",
      "Corporate Factory Tours",
    ],
    phases: [
      { phase: "Phase 1", title: "Potato Production" },
      { phase: "Phase 2", title: "French Fries Manufacturing" },
      { phase: "Phase 3", title: "Potato Chips Manufacturing" },
      { phase: "Phase 4", title: "Frozen Food Processing Facility" },
      { phase: "Phase 5", title: "Export Operations" },
    ],
    projectedGrowth: "Agriculture Revenue + Food Processing Revenue + Export Revenue",
    roi: "18% – 25% Annual Target",
    cover: georgia,
    gallery: [
      { src: potatoDrone, label: "Tsalka Highland Fields" },
      { src: potatoHarvest, label: "Mechanized Harvest" },
      { src: foodFactory, label: "French Fries Production" },
      { src: frozenPlant, label: "Frozen Food Facility" },
      { src: tsalkaMasterplan, label: "Industrial Masterplan" },
    ],
    futureProjections: [
      { src: foodFactory, title: "French Fries Manufacturing", caption: "Phase 2 — high-throughput potato processing line." },
      { src: frozenPlant, title: "Frozen Food Plant", caption: "Phase 4 — cold-chain frozen food production facility." },
      { src: tsalkaExport, title: "Export Logistics Hub", caption: "Phase 5 — container exports to EU and MENA markets." },
      { src: tsalkaMasterplan, title: "Agro-Industrial Masterplan", caption: "Vertically integrated farm, factory, R&D and tourism campus." },
    ],
    currentAssetValue: "$9.4M",
    tokenSupply: "9,400,000 TAIE",
    expectedYield: "18–25% Target APY",
    assetBacking: "1 Token = 1 USD of Land + Processing NAV",
    valueGrowth: [
      { year: "Y1", value: 9 },
      { year: "Y2", value: 12 },
      { year: "Y3", value: 16 },
      { year: "Y4", value: 22 },
      { year: "Y5", value: 30 },
    ],
    yieldGrowth: [
      { year: "Y1", value: 10 },
      { year: "Y2", value: 14 },
      { year: "Y3", value: 18 },
      { year: "Y4", value: 22 },
      { year: "Y5", value: 25 },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
