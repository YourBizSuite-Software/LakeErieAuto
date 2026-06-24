// src/data/vehicles.js
import fallbackImage from "../assets/fallback.PNG";
// --- Image loader (works with 1..11, JPG/JPEG/PNG, any case) ---------------
const ALL = import.meta.glob("../assets/*/*.{jpg,jpeg,JPG,JPEG,png,PNG}", { eager: true });

function loadImages(folder) {
  const imgs = [];
  // Try 1..11 so you can add more later; if only 1..4 exist, that's fine.
  for (let i = 1; i <= 11; i++) {
    const candidates = [
      `../assets/${folder}/${i}.JPG`,
      `../assets/${folder}/${i}.JPEG`,
      `../assets/${folder}/${i}.jpg`,
      `../assets/${folder}/${i}.jpeg`,
      `../assets/${folder}/${i}.png`,
      `../assets/${folder}/${i}.PNG`,
    ];
    for (const key of candidates) {
      if (ALL[key]?.default) {
        imgs.push(ALL[key].default);
        break;
      }
    }
  }
  return imgs;
}

// --- Small helpers for filler fields ---------------------------------------
const trims = ["SE", "Sport", "Limited", "XLT", "LE", "Premium", "Base", ""];
const bodies = ["Sedan", "SUV", "Truck", "Coupe", "Wagon", "Hatchback", ""];
const drivetrains = ["FWD", "RWD", "AWD", "4WD", ""];
const transmissions = ["Automatic", "Manual", "CVT", ""];
const engines = ["I4", "V6", "V8", "Turbo I4", "Hybrid", ""];
const pick = (a) => a[Math.floor(Math.random() * a.length)];

// --- Your vehicles: folder -> exact specs you provided ---------------------
// Folder names MUST match your /src/assets subfolders exactly (typos included).
const base = [
  { folder: "2015JeepCherokee", year: 2015, make: "Jeep", model: "Cherokee", price: 7999, miles: 132000 },
  { folder: "2012FordFusionBlack", year: 2012, make: "Ford", model: "Fusion", price: 5499, miles: 156000 },
  { folder: "2016JeepCherokee", year: 2016, make: "Jeep", model: "Cherokee", price: 8999, miles: 118000 },
  { folder: "2018ChevroletTraverse", year: 2018, make: "Chevrolet", model: "Traverse", price: 11999, miles: 112000 },
  { folder: "2016ChevroletSilverado3500HD", year: 2016, make: "Chevrolet", model: "Silverado 3500HD", price: 26999, miles: 143000 },
  { folder: "2011AudiA8L", year: 2011, make: "Audi", model: "A8L", price: 10999, miles: 128000 },
  { folder: "2012ChevroletImpala", year: 2012, make: "Chevrolet", model: "Impala", price: 5999, miles: 141000 },
  { folder: "2014JeepCherokee", year: 2014, make: "Jeep", model: "Cherokee", price: 7499, miles: 139000 },
  { folder: "2015Chrysler200", year: 2015, make: "Chrysler", model: "200", price: 6499, miles: 126000 },
  { folder: "2017LincolnMKC", year: 2017, make: "Lincoln", model: "MKC", price: 12999, miles: 98000 },
  { folder: "2012SubaruLegacy", year: 2012, make: "Subaru", model: "Legacy", price: 6499, miles: 149000 },
  { folder: "2016KiaSorento", year: 2016, make: "Kia", model: "Sorento", price: 8999, miles: 121000 },
  { folder: "2017FordFusion", year: 2017, make: "Ford", model: "Fusion", price: 8999, miles: 104000 },
  { folder: "2016FordExplorer", year: 2016, make: "Ford", model: "Explorer", price: 11999, miles: 125000 },
  { folder: "2017LincolnMKX", year: 2017, make: "Lincoln", model: "MKX", price: 14999, miles: 97000 },
  { folder: "2016JeepCompass", year: 2016, make: "Jeep", model: "Compass", price: 6999, miles: 134000 },
  { folder: "2015ChevroletEquinox", year: 2015, make: "Chevrolet", model: "Equinox", price: 7499, miles: 129000 },
  { folder: "2017FordFusionSilver", year: 2017, make: "Ford", model: "Fusion", price: 9299, miles: 99000 },
  { folder: "2013NissanRogue", year: 2013, make: "Nissan", model: "Rogue", price: 6999, miles: 138000 },
  { folder: "2014ChevroletTraverse", year: 2014, make: "Chevrolet", model: "Traverse", price: 7999, miles: 146000 },
  { folder: "2013ToyotaCamry", year: 2013, make: "Toyota", model: "Camry", price: 8999, miles: 132000 },
  { folder: "2015ChevroletTrax", year: 2015, make: "Chevrolet", model: "Trax", price: 7499, miles: 122000 },
  { folder: "2015FordFusion", year: 2015, make: "Ford", model: "Fusion", price: 7299, miles: 128000 },
  { folder: "2016JeepCherokeeTrailhawk", year: 2016, make: "Jeep", model: "Cherokee Trailhawk", price: 11999, miles: 111000 },
  { folder: "2015LincolnNavigator", year: 2015, make: "Lincoln", model: "Navigator", price: 16999, miles: 136000 },
  { folder: "2016ChevroletMalibu", year: 2016, make: "Chevrolet", model: "Malibu", price: 7999, miles: 119000 },
  
  { folder: "2013Fiat500", year: 2013, make: "Fiat", model: "500", price: 3999, miles: 145000 },
  { folder: "2015ChevroletTahoe", year: 2015, make: "Chevrolet", model: "Tahoe", price: 15999, miles: 110000 },
  
  { folder: "2017ChevroletSuburban", year: 2017, make: "Chevrolet", model: "Suburban", price: 14999, miles: 120000 },
  { folder: "2016Chrysler300", year: 2013, make: "Chrysler", model: "300", price: 7599, miles: 150000 },
  { folder: "2019FordEscape", year: 2019, make: "Ford", model: "Escape", price: 9999, miles: 117000 },
  { folder: "2020HondaCivic", year: 2020, make: "Honda", model: "Civic", price: 14999, miles: 65000 },
  { folder: "2022NissanALtima", year: 2022, make: "Nissan", model: "Altima", price: 15999, miles: 43000 },
  { folder: "2018ToyotaCorolla", year: 2018, make: "Toyota", model: "Corolla", price: 12999, miles: 132000 },
];

// --- Build final export -----------------------------------------------------
export const vehicles = base.map((v, idx) => {
  const images = loadImages(v.folder);
  
  return {
  id: idx + 1,
  year: v.year,
  make: v.make,
  model: v.model,
  price: v.price,
  miles: v.miles,
  
  // Always provide an image
  image: images[0] || fallbackImage,
  // Prevent gallery/detail page from breaking
  images: images.length ? images : [fallbackImage],
  // lightweight filler so existing UI keeps working
  trim: pick(trims),
  body: pick(bodies),
  drivetrain: pick(drivetrains),
  transmission: pick(transmissions),
  engine: pick(engines),
  folder: v.folder,
  
  };
  });