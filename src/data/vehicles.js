// src/data/vehicles.js

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
  { folder: "2010ChevroletCamaro", year: 2010, make: "Chevrolet", model: "Camaro 2ss", price: 16999, miles: 68000 },

  { folder: "2015BuickEncore", year: 2015, make: "Buick", model: "Encore", price: 6999, miles:145000 },

  { folder: "2017DodgeCharger", year: 2017, make: "Dodge", model: "Charger", price: 10599, miles: 96000 },

  { folder: "2017HondaOdyssey", year: 2017, make: "Honda", model: "Odyssey", price: 13999, miles: 102000 },

  { folder: "2018FordEcoSport", year: 2018, make: "Ford", model: "EcoSport", price: 8995, miles: 63000 },

  { folder: "2018FordExplorerBlack", year: 2018, make: "Ford", model: "Explorer", price: 13599, miles:91000 },

  { folder: "2018JeepCherokee", year: 2018, make: "Jeep", model: "Cherokee", price: 10599, miles: 89000 },

  { folder: "2018JeepCompass", year: 2018, make: "Jeep", model: "Compass", price: 5999, miles: 278000 },
  
  { folder: "2018JeepWrangler", year: 2018, make: "Jeep", model: "Wrangler", price: 14999, miles: 69000 },
  
  { folder: "2019JeepCompass", year: 2019, make: "Jeep", model: "Compass", price: 15599, miles: 85000 },

  { folder: "2019MercedesAMG-C", year: 2019, make: "Mercedes Benz", model: "AMG C-Class", price: 25999, miles: 85000 },

  { folder: "2020ChevroletEquinox", year: 2020, make: "Chevrolet", model: "Equinox", price: 9899, miles: 137000 },

  { folder: "2020FordFusion", year: 2020, make: "Ford", model: "Fusion", price: 12999, miles: 69000 },

  { folder: "2020JeepGrandCherokee", year: 2020, make: "Jeep", model: "Grand Cherokee", price: 39899, miles: 37000 },

  { folder: "2020KiaForte", year: 2020, make: "Kia", model: "Forte", price: 10599, miles: 55000 },

  { folder: "2021ChevroletMalibu", year: 2021, make: "Chevrolet", model: "Malibu", price: 13899, miles: 35000 },

  { folder: "2021DodgeDurango", year: 2021, make: "Dodge", model: "Durango", price: 28999, miles: 72000 },

  { folder: "2021HondaAccord", year: 2021, make: "Honda", model: "Accord", price: 19899, miles: 46000 },
  
  { folder: "2022ChevroletColorado", year: 2022, make: "Chevrolet", model: "Colorado Crew Cab Z71 Pickup 4D 5ft", price: 25899, miles: 44000 },


  { folder: "2022Ford250SuperDuty", year: 2022, make: "Ford", model: "F 250 Super Duty Crew Cab Lariat Pickup 4D 6 3/4 ft", price: 45999, miles: 60000 },
  
  { folder: "2022FordEscape", year: 2022, make: "Ford", model: "Escape", price: 15999, miles: 68000 },

  { folder: "2023ChevroletBlazer", year: 2023, make: "Chevrolet", model: "Blazer", price: 19899, miles: 45000 },

  { folder: "2023ChevroletTraverse", year: 2023, make: "Chevrolet", model: "Traverse", price: 25999, miles: 27000 },

  { folder: "2023ChevroletTraverseWhite", year: 2023, make: "Chevrolet", model: "Traverse", price: 19899, miles: 39000 },

  { folder: "2023FordExplorer", year: 2023, make: "Ford", model: "Explorer", price: 29999, miles: 21000 },

  { folder: "2023GMCAcadia", year: 2023, make: "GMC", model: "Acadia", price: 26899, miles: 6000 },

  { folder: "2024BuickEnvista", year: 2024, make: "Buick", model: "Envista", price: 18999, miles: 24000 },

  { folder: "2024ChevroletEquinox", year: 2024, make: "Chevrolet", model: "Equinox", price: 19899, miles: 20000 },
  
  { folder: "2024ChevroletTrax", year: 2024, make: "Chevrolet", model: "Trax", price: 17999, miles: 29000 },

  { folder: "2024KiaSorentoHybrid", year: 2024, make: "Kia", model: "Sorento Hybrid", price: 24999, miles: 16000 },
  
  { folder: "2025ChevroletTrax", year: 2025, make: "Chevrolet", model: "Trax", price: 19599, miles: 7000 },
  
  { folder: "2025FordF150SuperCrew", year: 2025, make: "Ford", model: "F150 SuperCrew Cab", price: 35999, miles: 52000 },

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
    image: images[0] || "",
    images,
    // lightweight filler so existing UI keeps working
    trim: pick(trims),
    body: pick(bodies),
    drivetrain: pick(drivetrains),
    transmission: pick(transmissions),
    engine: pick(engines),
    folder: v.folder,
  };
});