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
  { folder: "2015ChevroletSuburbanLT", year: 2015, make: "Chevrolet", model: "Suburban LT", price: 15995, miles: 425000 },
  { folder: "2015LincolnMKZ", year: 2015, make: "Lincoln", model: "MKZ", price: 5995, miles: 182000 },
  { folder: "2017CadillacATS", year: 2017, make: "Cadillac", model: "ATS", price: 7450, miles: 189000 },

  { folder: "2015ChevroletSilverado", year: 2015, make: "Chevrolet", model: "Silverado", price: 5495, miles: 261000 },
  
  { folder: "2015LincolnMKZEcoBoost", year: 2015, make: "Lincoln", model: "MKZ EcoBoost", price: 6995, miles: 167000 },
  { folder: "2015NissanRogue", year: 2015, make: "Nissan", model: "Rogue", price: 4995, miles: 121000 },
  { folder: "2015VolkswagenPassat", year: 2015, make: "Volkswagen", model: "Passat", price: 5995, miles: 209000 },
  { folder: "2015VolkswagenTiguan", year: 2015, make: "Volkswagen", model: "Tiguan", price: 4995, miles: 183000 },

  { folder: "2014CadillacSRX", year: 2014, make: "Cadillac", model: "SRX", price: 5495, miles: 213000 },
  { folder: "2014Chrysler300", year: 2014, make: "Chrysler", model: "300", price: 4995, miles: 190000 },

  { folder: "2013ChevroletSonic", year: 2013, make: "Chevrolet", model: "Sonic", price: 4995, miles: 190000 },
  { folder: "2013FordEdge", year: 2013, make: "Ford", model: "Edge", price: 5495, miles: 213000 },
  { folder: "2013KiaSorento", year: 2013, make: "Kia", model: "Sorento", price: 4995, miles: 220000 },
  { folder: "2013NissanTitan", year: 2013, make: "Nissan", model: "Titan", price: 14995, miles: 199000 },
  { folder: "2013VolkswagenJetta", year: 2013, make: "Volkswagen", model: "Jetta", price: 6999, miles: 183000 },

  { folder: "2012CadillacSRX", year: 2012, make: "Cadillac", model: "SRX", price: 4995, miles: 179000 },
  { folder: "2012FordEscape", year: 2012, make: "Ford", model: "Escape", price: 5495, miles: 109000 },
  { folder: "2012GMCAcadia", year: 2012, make: "GMC", model: "Acadia", price: 4995, miles: 190000 },
  { folder: "2012VolvoXC90", year: 2012, make: "Volvo", model: "XC90", price: 6995, miles: 169000 },

  { folder: "2011BMW328i", year: 2011, make: "BMW", model: "328i", price: 5495, miles: 137000 },
  { folder: "2011FordTaurusSEL", year: 2011, make: "Ford", model: "Taurus SEL", price: 6995, miles: 169000 },

  { folder: "2010JeepWrangler", year: 2010, make: "Jeep", model: "Wrangler", price: 12777, miles: 141000 },
  { folder: "2010LincolnMKS", year: 2010, make: "Lincoln", model: "MKS", price: 7995, miles: 160000 },
  { folder: "2010LincolnMKZWhite", year: 2010, make: "Lincoln", model: "MKZ", price: 3995, miles: 190000 },
  { folder: "2010Mazda5", year: 2010, make: "Mazda", model: "Mazda5", price: 4995, miles: 140000 },

  { folder: "2009CadillacCTS", year: 2009, make: "Cadillac", model: "CTS", price: 4495, miles: 205000 },
  { folder: "2009CadillacCTSAWD", year: 2009, make: "Cadillac", model: "CTS AWD", price: 6495, miles: 157000 },
  { folder: "2009JeepLiberty", year: 2009, make: "Jeep", model: "Liberty", price: 4995, miles: 222000 },

  { folder: "2008ChevroletSuburban", year: 2008, make: "Chevrolet", model: "Suburban", price: 7250, miles: 126000 },
  { folder: "2008PontiacTorrent", year: 2008, make: "Pontiac", model: "Torrent", price: 3977, miles: 149000 },

  { folder: "2007HyundaiSonata", year: 2007, make: "Hyundai", model: "Sonata", price: 3495, miles: 96000 },
  { folder: "2007JeepGrandCherokee", year: 2007, make: "Jeep", model: "Grand Cherokee", price: 4250, miles: 209000 },
  { folder: "2007ToyotaCamry", year: 2007, make: "Toyota", model: "Camry", price: 4995, miles: 170000 },

  { folder: "2006DodgeDakota", year: 2006, make: "Dodge", model: "Dakota", price: 4250, miles: 117000 },
  { folder: "2006InfinitiFX35", year: 2006, make: "Infiniti", model: "FX35", price: 6450, miles: 211000 },
  { folder: "2006LandRoverLR3", year: 2006, make: "Land Rover", model: "LR3", price: 5995, miles: 194000 },

  { folder: "2005BMWz4", year: 2005, make: "BMW", model: "Z4", price: 7995, miles: 150000 },
  { folder: "2005JaguarS-Type", year: 2005, make: "Jaguar", model: "S-Type", price: 4995, miles: 159000 },

  { folder: "2003MercedesBenzS-430", year: 2003, make: "Mercedes-Benz", model: "S 430", price: 4995, miles: 130000 },
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