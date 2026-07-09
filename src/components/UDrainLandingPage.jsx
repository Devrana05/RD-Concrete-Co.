"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight, Download, Plus, Minus, Search, CheckCircle2, X } from "lucide-react";
import InquiryModal from "@/components/InquiryModal";

const productData = {
  SEWER_CHAMBER: {
    titlePrefix: "Circular House Sewer Connection Chamber",
    badge: "Sanitary Solutions",
    descTop: "High-quality precast circular house sewer connection chambers for residential and municipal drainage systems.",
    mainSectionTitle: "",
    overallDescription: [
      "Our Precast Circular House Sewer Connection Chambers provide a durable, modular solution for residential and commercial sewer connectivity.",
      "Engineered from high-strength reinforced concrete, they offer a leak-proof connection point that is quick to install and easy to maintain.",
      "These chambers replace traditional brick-built inspection chambers, offering superior structural integrity and a longer lifespan, ensuring seamless sewage management."
    ],
    heroImage: "/prod15.png",
    heroImageFit: "cover",
    gallery: ["/sewer.jpeg", "/sewer1.jpeg", "/sewer2.jpeg", "/sewer3.png"],
    bulletPoints: [],
    implementationFeatures: [
      { cat: "Residential Housing", desc: "Reliable connection from household drains to municipal sewer lines." },
      { cat: "Commercial Buildings", desc: "Durable chambers capable of handling high-volume wastewater." },
      { cat: "Municipal Projects", desc: "Standardized inspection chambers for city-wide sewage networks." }
    ],
    specsTable: [
      { label: "Product Type", value: "Sewer Connection Chamber - Section 1" },
      { label: "Size", value: "300 X 450 X 100 mm" },
      { label: "Material", value: "Reinforced Precast Concrete" },
      { label: "Grade", value: "M-30" },
      { label: "Application", value: "Sewerage & Drainage" }
    ],
    additionalSections: [
      {
        title: "",
        gallery: ["/sewer.jpeg", "/sewer1.jpeg", "/sewer2.jpeg", "/sewer4.png"],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "Sewer Connection Chamber - Section 2" },
          { label: "Size", value: "450 X 450 X 100 mm" },
          { label: "Material", value: "Reinforced Precast Concrete" },
          { label: "Grade", value: "M-30" },
          { label: "Application", value: "Sewerage & Drainage" }
        ]
      },
      {
        title: "",
        gallery: ["/sewer.jpeg", "/sewer1.jpeg", "/sewer2.jpeg", "/sewer5.png"],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "Sewer Connection Chamber - Section 3" },
          { label: "Size", value: "450 X 600 X 100 mm" },
          { label: "Material", value: "Reinforced Precast Concrete" },
          { label: "Grade", value: "M-30" },
          { label: "Application", value: "Sewerage & Drainage" }
        ]
      }
    ]
  },

  MANHOLE_CHAMBER: {
    titlePrefix: "Precast Concrete Manhole",
    badge: "Underground Infrastructure",
    descTop: "Comprehensive precast manhole chambers for efficient underground sewage and drainage systems.",
    mainSectionTitle: "Precast Manhole : 1000 mm",
    overallDescription: [
      "Our Precast Concrete Manhole and Circular House Sewer Connection Chambers provide robust and modular access points for heavy duty underground utility systems.",
      "Engineered from high-grade reinforced concrete, these chambers are designed to withstand structural loads and resist corrosive environments typically found in sewage networks.",
      "With pre-configured inlets and outlets, they offer significantly faster installation times compared to traditional brick or cast-in-situ manholes, ensuring a leak-proof and durable infrastructure solution."
    ],
    heroImage: "/MANHOLE.jpeg",
    heroImageFit: "cover",
    gallery: ["/manhole4.jpeg", "/manhole5.jpeg", "/manhole6.png"],
    bulletPoints: [],
    implementationFeatures: [
      { cat: "Municipal Sewage", desc: "Reliable access points for main sewer lines in urban infrastructure." },
      { cat: "Residential Connections", desc: "Efficient circular chambers for connecting housing sewage to municipal systems." },
      { cat: "Industrial Drainage", desc: "Heavy-duty chambers capable of handling industrial effluents and heavy surface traffic." }
    ],
    specsTable: [
      { label: "Shape", value: "cone" },
      { label: "Usage/Application", value: "Drainage" },
      { label: "Material", value: "Concrete" },
      { label: "Uses", value: "Sewerage, Drainage, Water Harvesting, Cabling" },
      { label: "Grade", value: "M40" },
      { label: "Size of Chamber", value: "1000 mm" },
      { label: "Height of Chamber", value: "800 mm" },
      { label: "Height of Extension Rings", value: "1 & 2 Running Feet" },
      { label: "Approved Design By", value: "DELHI JAL BOARD" }
    ],
    additionalSections: [
      {
        title: "RCC Manhole Riser for 1000 mm Manhole",
        gallery: ["/riser11.jpeg", "/riser10.jpeg"],
        isDescriptionOnly: true,
        fullDescription: ["Extra per meter depth of 1.0 m internal dia circular Pre-cast RCC M-40 grade manhole beyond 1.125 m for 250mm (ID) pipe and 1.18m for 300mm (ID) pipe, upto I.L. 1.67m depth built with 1.0 m internal dia Precast risers of M-40 grade RCC circular risers of height 150/300 mm and wall thickness of 125 mm duly fitted with SFRC Foot rests."]
      },
      {
        title: "Precast Manhole : 1200 mm",
        gallery: ["/manhole9.png", "/manhole10.jpeg", "/manhole7.png"],
        bulletPoints: [],
        specsTable: [
          { label: "Shape", value: "cone" },
          { label: "Usage/Application", value: "Drainage" },
          { label: "Material", value: "Concrete" },
          { label: "Uses", value: "Sewerage, Drainage, Water Harvesting, Cabling" },
          { label: "Grade", value: "M40" },
          { label: "Size of Chamber", value: "1200 mm" },
          { label: "Height of Chamber", value: "1000 mm" },
          { label: "Height of Extension Rings", value: "1, 2 & 3 Running Feet" },
          { label: "Approved Design By", value: "DELHI JAL BOARD" }
        ]
      },
      {
        title: "RCC Manhole Riser for 1200 mm Manhole",
        gallery: ["/manhole10.jpeg", "/riser9.jpeg"],
        isDescriptionOnly: true,
        fullDescription: ["Extra per meter depth of 1.20 m internal dia circular Pre-cast RCC M-40 grade manhole beyond 1.67 m up to IL 2.28m depth built with 1.20 m internal dia Precast risers of M-40 grade RCC circular risers of height 150/225/300/600/900 mm and wall thickness of 125 mm duly fitted with SFRC Foot rests."]
      },
      {
        title: "Precast Manhole : 1500 mm",
        gallery: ["/manhole4.jpeg", "/manhole5.jpeg", "/manhole8.png"],
        bulletPoints: [],
        specsTable: [
          { label: "Shape", value: "cone" },
          { label: "Usage/Application", value: "Drainage" },
          { label: "Material", value: "Concrete" },
          { label: "Uses", value: "Sewerage, Drainage, Water Harvesting, Cabling" },
          { label: "Grade", value: "M40" },
          { label: "Size of Chamber", value: "1500 mm" },
          { label: "Height of Chamber", value: "1300 mm" },
          { label: "Height of Extension Rings", value: "1, 2 & 4 Running Feet" },
          { label: "Approved Design By", value: "DELHI JAL BOARD" }
        ]
      },
      {
        title: "RCC Manhole Riser for 1500 mm Manhole",
        gallery: ["/riser7.jpeg", "/riser8.jpeg"],
        isDescriptionOnly: true,
        fullDescription: ["Extra per meter depth of 1.50 m internal dia circular Pre-cast RCC M-40 grade manhole beyond 2.28 m up to IL 11.27m depth built with 1.50 m internal dia Precast risers of M-40 grade RCC circular risers of height 150/225/300/600/900/1200 mm and wall thickness of 125 mm duly fitted with SFRC Foot rests."]
      }
    ]
  },
  SIGN_BOARD: {
    titlePrefix: "RCC Sign Board & Plot Indicator",
    badge: "Property Marking",
    descTop: "Precast concrete sign boards and plot indicators for clear, long-lasting property marking.",
    overallDescription: [
      "Our Precast Concrete Sign Boards and Plot Indicators provide a robust, highly visible solution for property marking and directions. Manufactured to precise specifications to ensure durability against weather and impact.",
      "Engineered from high-grade reinforced concrete, these markers are designed to withstand harsh environmental conditions, including heavy rain, intense sunlight, and accidental impacts, ensuring that your markings remain clear and legible for years to come.",
      "Whether you need clear boundary demarcation for residential plots, directional signage for highways, or informational boards for commercial zones, our versatile precast solutions offer unparalleled longevity and low maintenance compared to traditional metal or wooden signs."
    ],
    heroImage: "/prod11.png",
    heroImageFit: "cover",
    gallery: ["/prod11.png"],
    bulletPoints: [],
    implementationFeatures: [
      { cat: "Highways & Roads", desc: "Durable and weather-resistant signage for long-term road markings." },
      { cat: "Residential Plots", desc: "Clear plot indicators for housing societies and private properties." },
      { cat: "Commercial Areas", desc: "Visible boundary markers and informational boards for commercial zones." }
    ],
    specsTable: [
      { label: "Product Type", value: "RCC Sign Board - Type 1" },
      { label: "Material", value: "Reinforced Concrete" },
      { label: "Grade", value: "M-30" }
    ],
    additionalSections: [
      {
        title: "Plot Indicator - Type 2",
        gallery: ["/prod11.png"],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "Plot Indicator - Type 2" },
          { label: "Material", value: "Reinforced Concrete" },
          { label: "Grade", value: "M-30" }
        ]
      },
      {
        title: "Direction Board - Type 3",
        gallery: ["/prod11.png"],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "Direction Board - Type 3" },
          { label: "Material", value: "Reinforced Concrete" },
          { label: "Grade", value: "M-30" }
        ]
      },
      {
        title: "Boundary Marker - Type 4",
        gallery: ["/prod11.png"],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "Boundary Marker - Type 4" },
          { label: "Material", value: "Reinforced Concrete" },
          { label: "Grade", value: "M-30" }
        ]
      }
    ]
  },
  RAILWAY_COPING_STONE: {
    titlePrefix: "Railway Coping Stone",
    badge: "Railway Standards",
    descTop: "Specialized precast coping stones designed to railway standards for platform edges.",
    overallDescription: [
      "Our Precast Concrete Railway Coping Stones provide a robust and safe edge for railway platforms. Manufactured to precise specifications to ensure durability and safety.",
      "Designed specifically for high-traffic environments, these stones offer exceptional resistance to weathering and wear. Their anti-slip surfaces ensure passenger safety while facilitating smooth transitions between platforms and trains.",
      "Available in a variety of dimensions and finishes to meet diverse project requirements, our coping stones are the ideal choice for modernizing railway infrastructure and maintaining the highest safety standards across the network."
    ],
    heroImage: "/prod10.png",
    heroImageFit: "cover",
    gallery: ["/copping-stone1.jpeg", "/copping-stone3.jpeg", "/copping-stone2.jpeg"],
    bulletPoints: [],
    implementationFeatures: [
      { cat: "Railway Stations", desc: "Provides a safe, demarcated edge for passenger platforms." },
      { cat: "Industrial Depots", desc: "Durable edge protection for heavy loading and unloading zones." },
      { cat: "Metro Stations", desc: "Aesthetic and high-strength coping stones for modern transit systems." }
    ],
    specsTable: [
      { label: "Product Type", value: "Railway Coping Stone - Type 1" },
      { label: "Size", value: "1125 X 530 X 100 mm" },
      { label: "Dimensions", value: "Length X Breadth X Thickness" },
      { label: "Material", value: "High-strength Concrete" },
      { label: "Grade", value: "M-30" }
    ],
    additionalSections: [
      {
        gallery: ["/prod10.png", "/copping-stone4.jpeg", "/copping-stone.jpeg"],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "Railway Coping Stone - Type 2" },
          { label: "Size", value: "1100 X 900 X 150 mm" },
          { label: "Dimension", value: "Length X Breadth X Thickness" },
          { label: "Material", value: "High-strength Concrete" },
          { label: "Grade", value: "M-30" }
        ]
      },
      {
        title: "Precast Coping Wall",
        gallery: ["/copping-wall1.jpeg", "/copping-wall2.jpeg", "/copping-wall.png"],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "Precast Coping Wall" },
          { label: "Dimensions", value: "1540 X 980 mm" },
          { label: "Material", value: "High-strength Concrete" },
          { label: "Grade", value: "M-30" }
        ]
      }
    ]
  },
  DRAIN_COVER: {
    titlePrefix: "Concrete Drain Cover",
    badge: "Durable",
    descTop: "High-quality precast concrete drain covers designed for urban infrastructure, pedestrian walkways, and public safety.",
    overallDescription: [
      "Introducing the Heavy-Duty Reinforced Precast Concrete Drain Cover—the superior solution for modern urban infrastructure and pedestrian safety.",
      "Ideal for use in city streets, walkways, and industrial sites, our concrete drain covers are highly durable, easy to install, and ensure long-term reliability in protecting drainage systems.",
      "Engineered with high-grade concrete and reinforced steel, these drain covers are designed to withstand heavy vehicular and foot traffic without cracking or degrading over time.",
      "The precision-cast design ensures a perfect fit, preventing waterlogging while maintaining a seamless and aesthetically pleasing surface for public areas."
    ],
    heroImage: "/drain.jpeg",
    heroImageFit: "cover",
    gallery: ["/drain1.jpeg", "/drain2.jpeg", "/drain3.jpeg", "/drain4.jpeg"],
    bulletPoints: ["Grade : M-25 to M-50"],
    specsTable: [
      { label: "Product Type", value: "Reinforced Precast Concrete Drain Cover" },
      { label: "Material", value: "Perforated or Plain" },
      { label: "Size", value: <span>500 X 500 X 50 mm <strong>to</strong> 1000 X 500 X 100 mm</span> },
      { label: "Dimension", value: "Length X Breadth X Thickness" },
      { label: "Grade", value: "M-25 to M-50" },
      { label: "Application", value: "Walkways, roads, drainage systems" },
      { label: "Finish", value: "Smooth / Anti-slip" }
    ],
    additionalSections: [
      {
        gallery: ["/drain5.jpeg"],
        specsTable: [
          { label: "Product Type", value: "Reinforced Precast Concrete Drain Cover" },
          { label: "Material", value: "Perforated or Plain" },
          { label: "Size", value: <span>1000 X 500 X 100 mm <strong>to</strong> 2000 X 500 X 100 mm</span> },
          { label: "Dimension", value: "Length X Breadth X Thickness" },
          { label: "Grade", value: "M-25 to M-50" },
          { label: "Application", value: "Walkways, roads, drainage systems" },
          { label: "Finish", value: "Smooth / Anti-slip" }
        ]
      }
    ],
    implementationFeatures: [
      { cat: "Urban Infrastructure", desc: "Provides safe covering for street-level drainage systems." },
      { cat: "Pedestrian Safety", desc: "Anti-slip surface ensures safety for foot traffic." }
    ]
  },
  T25: {
    titlePrefix: "T25 U Shape Drain",
    badge: "Heavy",
    descTop: "Heavy-duty precast RCC drain channel engineered for high-volume stormwater discharge in roads, highways, and industrial zones.",
    heroImage: "/prod1.png",
    heroVideo: "/prod-video-2.mp4",
    bulletPoints: ["Grade : M-30 to M-60"],
    gallery: ["/img1.png", "/img2.png", "/img3.png", "/img4.png", "/img5.png"],
    specsImage: "/U-drain.avif",
    diagramImage: "/u-drain-d.png",
    implementationFeatures: [
      { cat: "Highway Drainage", desc: "Engineered for high-capacity stormwater management along national highways, capable of withstanding heavy vehicular loads without structural degradation." },
      { cat: "Industrial Estates", desc: "Ideal for chemical and manufacturing zones, providing safe, efficient, and easily accessible routing for wastewater and industrial effluents." },
      { cat: "Urban Infrastructure", desc: "Perfect for city roads and residential developments, seamlessly integrating into pavements to prevent urban waterlogging and flooding." },
      { cat: "Utility Cable Ducts", desc: "Functions as a secure, dry underground housing for electrical and telecommunication cables when paired with our solid cover slabs." }
    ]
  },
  T6: {
    titlePrefix: "T6 U Shape Drain",
    badge: "Light",
    descTop: "Light-duty precast RCC drain channel designed for efficient stormwater management in pedestrian areas and light traffic zones.",
    heroImage: "/t6.png",
    heroVideo: "/hero-bg-3.mp4",
    bulletPoints: ["Grade : M-30 to M-60"],
    gallery: ["/t6-1.1.png", "/t6-2.png", "/t6-3.png", "/t6-4.png"],
    specsImage: "/t6-6.png",
    diagramImage: "/t6-7.png",
    implementationFeatures: [
      { cat: "Low Maintenance & Easy Installation", desc: "Designed for cost-effective drainage solutions, offering quick installation and requiring minimal upkeep over its lifespan." },
      { cat: "Stormwater Management", desc: "Suitable for various applications, efficiently managing surface water runoff and preventing pooling in critical areas." },
      { cat: "Concrete Floor Drainage", desc: "Easily integrated into concrete floors for reliable internal and external drainage." },
      { cat: "Residential & Commercial Use", desc: "Advanced manufacturing ensures high durability and efficiency across both residential and commercial settings." }
    ]
  },
  FT: {
    titlePrefix: "FT Flume",
    badge: "Precast Drain",
    descTop: "High-quality precast concrete flume for controlled water flow and agricultural drainage systems.",
    heroImage: "/ft-flume.png",
    heroVideo: "/prod-video-1.mp4",
    bulletPoints: ["Grade : M-30 to M-60"],
    gallery: ["/ft-1.png", "/ft-2.png", "/ft-3.png", "/ft-4.png"],
    specsImage: "/ft-6.png",
    diagramImage: "/ft-7.png",
    implementationFeatures: [
      { cat: "Open Channel Flow Measurement", desc: "Highly practical for accurately measuring and monitoring water flow rates across various open channel systems." },
      { cat: "Irrigation Applications", desc: "Ideal for agricultural use, ensuring precise flow measurements for efficient water distribution in irrigation." },
      { cat: "Wastewater Management", desc: "Reliable performance in wastewater treatment facilities, assisting in monitoring effluent flow and treatment processes." },
      { cat: "Precision Flow Control", desc: "Designed with specific shapes and dimensions to control water flow, guaranteeing highly accurate and consistent measurements." }
    ]
  },
  CULVERT: {
    titlePrefix: "RCC Culvert Box",
    badge: "Heavy Duty",
    descTop: "Precast Reinforced Concrete Box Culverts engineered for heavy traffic loads, storm water drains, and road crossings.",
    heroImage: "/prod4.1.png",
    heroVideo: "/culvert-bg.mp4",
    bulletPoints: ["Grade : M-30 to M-60"],
    gallery: ["/prod4.1.png", "/prod4.2.png", "/prod4.3.png", "/prod4.4.jpeg"],
    specsTable: [
      { label: "Product Type", value: "Precast Reinforced Box Culvert" },
      { label: "Material", value: "Reinforced Precast Concrete" },

      { label: "Grade", value: "M-30 to M-60" },
      { label: "Available Internal Width", value: "600 mm - 2500 mm" },
      { label: "Section", value: "Closed rectangular box" },
      { label: "Joint", value: "Spigot & socket with rubber gasket" },
      { label: "Load Class", value: "Heavy vehicular / highway loading" },
      { label: "Applications", value: "Road & rail underpasses, stormwater drains, service ducts" }
    ],
    specsImage: "/U-drain.avif",
    diagramImage: "/box-culvert.png",
    implementationFeatures: [
      { cat: "Road Crossings", desc: "Perfect for constructing robust road crossings over natural streams, ensuring safe and uninterrupted vehicular movement." },
      { cat: "Storm Water Drains", desc: "High-capacity sections ideal for main municipal storm water drainage networks in urban and industrial zones." },
      { cat: "Utility Tunnels", desc: "Can be utilized as secure underground utility corridors for large-scale piping and cabling infrastructure." },
      { cat: "Bridge Replacement", desc: "A cost-effective and rapidly deployable alternative to short-span bridges, offering superior load-bearing capabilities." }
    ]
  },
  KERB_STONE: {
    titlePrefix: "Precast Kerb Stone & Saucer Drain",
    badge: "Premium Quality",
    descTop: "Precast concrete kerb stones for road edges, pavement borders, and pedestrian safety.",
    heroImage: "/kerb.png",
    heroImageFit: "contain",
    overallTitle: "Precast Kerb Stone",
    overallDescription: [
      "Our Precast Concrete Kerb Stones provide a robust and durable edge to pavements and roadways. Manufactured with high-strength concrete, they ensure a long lifespan even under harsh environmental conditions and heavy traffic loads.",
      "Designed for both aesthetic appeal and functional performance, these kerb stones help in proper water drainage by guiding runoff to designated channels while also physically separating vehicular and pedestrian areas to enhance safety."
    ],
    overallBulletPoints: [
      "High compressive strength and durability",
      "Excellent resistance to weather and wear",
      "Easy and quick to install",
      "Enhances road safety and aesthetics",
      "Available in multiple profiles and sizes"
    ],
    galleryTitle: "Size : RDKS 01",
    gallery: ["/kerb3.png"],
    fullDescription: [],
    bulletPoints: [],
    additionalSections: Array.from({ length: 4 }).map((_, i) => ({
      title: `Size : RDKS ${(i + 2).toString().padStart(2, '0')}`,
      gallery: [i === 0 ? "/kerb4.png" : i === 1 ? "/kerb5.png" : i === 2 ? "/kerb6.png" : i === 3 ? "/kerb8.png" : "/kerb3.png"],
      fullDescription: [],
      bulletPoints: []
    })),
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Kerb Stone" },
      { label: "Material", value: "PCC / High-strength Concrete" },

      { label: "Grade", value: "M-20 to M-30" },
      { label: "Dimensions", value: "Various standard sizes available" },
      { label: "Application", value: "Road edges, walkways, landscaping" },
      { label: "Finish", value: "Smooth / Textured" }
    ],
    implementationFeatures: [
      { cat: "Road & Highway", desc: "Clearly defines carriageway edges and prevents lateral spread of pavement materials." },
      { cat: "Pedestrian Safety", desc: "Provides a physical barrier separating walkways from vehicular traffic zones." },
      { cat: "Drainage Control", desc: "Channels surface runoff effectively into catch basins and drainage networks." },
      { cat: "Landscaping", desc: "Creates neat, attractive borders for parks, gardens, and commercial complexes." }
    ]
  },
  INTERLOCKING_PAVERS: {
    titlePrefix: "Interlocking Pavers",
    badge: "Premium Quality",
    descTop: "High-quality precast concrete interlocking pavers available in various shapes, sizes, and colors for durable and aesthetic pavements.",
    heroImage: "/interlocking.png",
    heroImageFit: "cover",
    overallTitle: "Interlocking Pavers",
    overallDescription: [
      "Our Precast Concrete Interlocking Pavers are the perfect solution for creating beautiful, highly durable, and easily maintainable paved surfaces. Manufactured using advanced concrete mix technology, they offer exceptional load-bearing capacity.",
      "The interlocking design ensures a rigid surface that distributes weight evenly, making them ideal for both heavy traffic zones and aesthetic pedestrian walkways. They are resistant to extreme weather and chemical spills."
    ],
    overallBulletPoints: [
      "Exceptional load-bearing capacity",
      "Available in multiple shapes and colors",
      "Easy installation and minimal maintenance",
      "Resistant to wear, weather, and chemicals",
      "Enhances the visual appeal of any landscape"
    ],
    galleryTitle: "Penta Shape",
    gallery: ["/paver1.png", "/paver2.png"],
    fullDescription: [],
    bulletPoints: [],
    additionalSections: [
      {
        title: "I Shape",
        gallery: ["/paver5.jpg", "/paver3.png"],
        fullDescription: [],
        bulletPoints: []
      },
      {
        title: "Hourglass Shape",
        gallery: ["/paver6.png", "/paver4.png"],
        fullDescription: [],
        bulletPoints: []
      },
      {
        title: "Shape 4",
        gallery: ["/paver8.png", "/paver7.png"],
        fullDescription: [],
        bulletPoints: []
      }
    ],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Interlocking Paver" },
      { label: "Material", value: "High-strength Concrete" },

      { label: "Grade", value: "M-25 to M-50" },
      { label: "Dimensions", value: "Available in 60mm, 80mm, 100mm thickness" },
      { label: "Application", value: "Driveways, walkways, industrial yards" },
      { label: "Finish", value: "Smooth / Textured" }
    ],
    implementationFeatures: [
      { cat: "Driveways & Roads", desc: "Provides a durable, high-strength surface capable of withstanding heavy vehicular traffic without rutting or cracking." },
      { cat: "Pedestrian Walkways", desc: "Creates safe, slip-resistant, and aesthetically pleasing pathways for parks, campuses, and residential areas." },
      { cat: "Industrial Yards", desc: "Ideal for heavy-duty applications like port terminals and warehouses due to excellent load distribution capabilities." },
      { cat: "Landscaping", desc: "Offers versatile design options with various colors and patterns to enhance the architectural beauty of any project." }
    ]
  },
  GRASS_PAVER: {
    titlePrefix: "Grass Pavers",
    badge: "Eco-Friendly",
    descTop: "High-quality precast concrete grass pavers designed to support vehicular traffic while allowing grass to grow, promoting natural drainage.",
    heroImage: "/grass7.png",
    heroImageFit: "cover",
    overallTitle: "Grass Pavers",
    overallDescription: [
      "Our Precast Concrete Grass Pavers are the perfect solution for creating environmentally friendly, permeable paved surfaces. Manufactured using advanced concrete mix technology, they offer exceptional load-bearing capacity while maintaining green spaces.",
      "The hollow design allows grass to grow through the paver, reducing runoff and improving natural water drainage. They are ideal for parking lots, fire lanes, and landscaping."
    ],
    overallBulletPoints: [
      "Exceptional load-bearing capacity",
      "Promotes natural water drainage",
      "Easy installation and minimal maintenance",
      "Reduces heat island effect",
      "Enhances the visual appeal with green integration"
    ],
    galleryTitle: "Standard Grid",
    gallery: ["/grass2.png", "/grass1.png"],
    fullDescription: [],
    bulletPoints: [],
    additionalSections: [
      {
        title: "Heavy Duty Grid",
        gallery: ["/grass4.jpeg", "/grass3.png"],
        fullDescription: [],
        bulletPoints: []
      },
      {
        title: "Hexagonal Grid",
        gallery: ["/grass6.png", "/grass5.jpeg"],
        fullDescription: [],
        bulletPoints: []
      }
    ],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Grass Paver" },
      { label: "Material", value: "High-strength Concrete" },

      { label: "Grade", value: "M-25 to M-50" },
      { label: "Dimensions", value: "Available in 80mm, 100mm thickness" },
      { label: "Application", value: "Parking lots, fire lanes, driveways" },
      { label: "Finish", value: "Smooth / Textured" }
    ],
    implementationFeatures: [
      { cat: "Parking Areas", desc: "Provides a stable surface for vehicles while maintaining a green aesthetic." },
      { cat: "Fire Lanes", desc: "Supports the weight of heavy emergency vehicles on access routes." },
      { cat: "Erosion Control", desc: "Stabilizes soil on embankments and slopes." }
    ]
  },
  BRICK_PAVER: {
    titlePrefix: "Brick Pavers",
    badge: "Classic Finish",
    descTop: "High-quality precast concrete brick pavers available in various sizes, shapes, and color options for durable and aesthetic pavements.",
    heroImage: "/brick.jpg",
    heroImageFit: "cover",
    overallTitle: "Brick Pavers",
    overallDescription: [
      "Our Precast Concrete Brick Pavers are the perfect solution for creating beautiful, highly durable, and easily maintainable paved surfaces. Manufactured using advanced concrete mix technology, they offer exceptional load-bearing capacity.",
      "The classic brick design ensures a rigid surface that distributes weight evenly, making them ideal for both heavy traffic zones and aesthetic pedestrian walkways. They are resistant to extreme weather and chemical spills."
    ],
    overallBulletPoints: [
      "Exceptional load-bearing capacity for heavy traffic",
      "Resistant to extreme weather and chemical spills",
      "Easy installation and minimal maintenance",
      "Available in multiple colors and textures",
      "Enhances the architectural beauty of any project"
    ],
    galleryTitle: "Standard Brick",
    gallery: ["/brick3.png", "/brick4.jpeg"],
    fullDescription: [],
    bulletPoints: [],
    additionalSections: [
      {
        title: "Large Format Brick",
        gallery: ["/brick2.png", "/brick.jpg"],
        fullDescription: [],
        bulletPoints: []
      }
    ],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Brick Paver" },
      { label: "Material", value: "High-strength Concrete" },

      { label: "Grade", value: "M-25 to M-50" },
      { label: "Dimensions", value: "Available in various standard sizes" },
      { label: "Application", value: "Driveways, walkways, patios" },
      { label: "Finish", value: "Smooth / Textured" }
    ],
    implementationFeatures: [
      { cat: "Driveways & Roads", desc: "Provides a durable, high-strength surface capable of withstanding heavy vehicular traffic without rutting or cracking." },
      { cat: "Pedestrian Walkways", desc: "Creates safe, slip-resistant, and aesthetically pleasing pathways for parks, campuses, and residential areas." },
      { cat: "Landscaping", desc: "Offers versatile design options with various colors and patterns to enhance the architectural beauty of any project." }
    ]
  },
  COMBI_PAVER: {
    titlePrefix: "Combi Pavers",
    badge: "Versatile Design",
    descTop: "High-quality precast concrete combi pavers available in versatile patterns for durable and aesthetic pavements.",
    heroImage: "/combi3.jpg",
    heroImageFit: "fill",
    overallTitle: "Combi Pavers",
    overallDescription: [
      "Our Precast Concrete Combi Pavers provide a highly versatile paving solution with interlocking patterns that ensure maximum stability and visual appeal. Manufactured using advanced concrete mix technology, they offer exceptional load-bearing capacity.",
      "The combi design allows for intricate, seamless patterns that distribute weight evenly, making them perfect for both heavy traffic zones and aesthetic pedestrian walkways. They are resistant to extreme weather and chemical spills."
    ],
    overallBulletPoints: [
      "Exceptional load-bearing capacity for heavy traffic",
      "Seamless interlocking design for maximum stability",
      "Easy installation and minimal maintenance",
      "Available in multiple colors and textures",
      "Enhances the architectural beauty of any project"
    ],
    galleryTitle: "Checkered Pattern RD 01",
    gallery: ["/combi2.jpg", "/combi4.png"],
    fullDescription: [],
    bulletPoints: [],
    additionalSections: [
      {
        title: "Checkered Pattern RD 02",
        gallery: ["/combi1.jpeg", "/combi5.jpeg"],
        fullDescription: [],
        bulletPoints: []
      }
    ],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Combi Paver" },
      { label: "Material", value: "High-strength Concrete" },

      { label: "Grade", value: "M-25 to M-50" },
      { label: "Dimensions", value: "Available in various standard sizes" },
      { label: "Application", value: "Driveways, walkways, patios" },
      { label: "Finish", value: "Smooth / Textured" }
    ],
    implementationFeatures: [
      { cat: "Driveways & Roads", desc: "Provides a durable, high-strength surface capable of withstanding heavy vehicular traffic without rutting or cracking." },
      { cat: "Pedestrian Walkways", desc: "Creates safe, slip-resistant, and aesthetically pleasing pathways for parks, campuses, and residential areas." },
      { cat: "Landscaping", desc: "Offers versatile design options with various colors and patterns to enhance the architectural beauty of any project." }
    ]
  },
  COBBLE_STONE: {
    titlePrefix: "Cobble Stone Pavers",
    badge: "Classic Finish",
    descTop: "Explore our range of Cobble Stone Pavers with various sizes, shapes, and color options.",
    heroImage: "/cobble5.png",
    heroImageFit: "fill",
    overallTitle: "Cobble Stone Pavers",
    overallDescription: [
      "Our Precast Concrete Cobble Stone Pavers provide a highly versatile paving solution with classic patterns that ensure maximum stability and visual appeal. Manufactured using advanced concrete mix technology, they offer exceptional load-bearing capacity.",
      "The cobble design allows for intricate, seamless patterns that distribute weight evenly, making them perfect for both heavy traffic zones and aesthetic pedestrian walkways. They are resistant to extreme weather and chemical spills."
    ],
    overallBulletPoints: [
      "Exceptional load-bearing capacity for heavy traffic",
      "Seamless interlocking design for maximum stability",
      "Easy installation and minimal maintenance",
      "Available in multiple colors and textures",
      "Enhances the architectural beauty of any project"
    ],
    galleryTitle: "Cobble Stone Paver - RD CS 01",
    gallery: ["/cobble2.png", "/cobble1.png"],
    fullDescription: [
      "High-quality cobble stone paver — rd cs 01 suitable for various infrastructure projects."
    ],
    bulletPoints: [],
    additionalSections: [
      {
        title: "Cobble Stone Paver - RD CS 02",
        gallery: ["/cobble4.png", "/cobble3.png"],
        fullDescription: [
          "High-quality cobble stone paver — rd cs 02 suitable for various infrastructure projects."
        ],
        bulletPoints: []
      }
    ],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Cobble Stone Paver" },
      { label: "Material", value: "High-strength Concrete" },

      { label: "Grade", value: "M-25 to M-50" },
      { label: "Dimensions", value: "Available in various standard sizes" },
      { label: "Application", value: "Driveways, walkways, patios" },
      { label: "Finish", value: "Smooth / Textured" }
    ],
    implementationFeatures: [
      { cat: "Driveways & Roads", desc: "Provides a durable, high-strength surface capable of withstanding heavy vehicular traffic without rutting or cracking." },
      { cat: "Pedestrian Walkways", desc: "Creates safe, slip-resistant, and aesthetically pleasing pathways for parks, campuses, and residential areas." },
      { cat: "Landscaping", desc: "Offers versatile design options with various colors and patterns to enhance the architectural beauty of any project." }
    ]
  },
  MANHOLE_COVER: {
    titlePrefix: "Manhole Cover & Frame",
    badge: "Heavy Duty",
    descTop: "Explore our range of Manhole Covers & Frames with various sizes, load capacities, and shapes.",
    heroImage: "/interlocking.png",
    heroImageFit: "fill",
    overallTitle: "Manhole Cover & Frame",
    overallDescription: [
      "Our Precast Concrete Manhole Covers provide a highly versatile utility solution that ensures maximum stability and safety. Manufactured using advanced concrete mix technology, they offer exceptional load-bearing capacity.",
      "The precision design allows for seamless integration with utility chambers, distributing weight evenly and making them perfect for both heavy traffic zones and pedestrian walkways. They are resistant to extreme weather and heavy impact."
    ],
    overallBulletPoints: [
      "Exceptional load-bearing capacity for heavy traffic",
      "Seamless fit for maximum stability and safety",
      "Easy installation and minimal maintenance",
      "Available in multiple sizes and load ratings",
      "Enhances the longevity of utility infrastructure"
    ],
    galleryTitle: "Manhole Cover - Type 01",
    gallery: ["/manhole1.png", "/manhole11.png", "/manhole3.png", "/manhole2.png"],
    fullDescription: [
      "High-quality manhole cover — Type 01 suitable for various infrastructure projects."
    ],
    bulletPoints: [],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Manhole Cover & Frame" },
      { label: "Material", value: "High-strength Concrete" },

      { label: "Grade", value: "M-30" },
      { label: "Dimensions", value: "Available in various standard sizes" },
      { label: "Application", value: "Roads, walkways, utility chambers" },
      { label: "Load Capacity", value: "Light / Heavy Duty" }
    ],
    implementationFeatures: [
      { cat: "Road Networks", desc: "Provides a durable, high-strength cover capable of withstanding heavy vehicular traffic without cracking." },
      { cat: "Pedestrian Walkways", desc: "Creates safe, flush surfaces for pedestrian areas and residential zones." },
      { cat: "Utility Networks", desc: "Offers secure access to underground utility lines while protecting them from external elements." }
    ]
  },
  CHEQUERED_TILES: {
    titlePrefix: "Chequered & Tactile Tiles",
    badge: "Premium Quality",
    descTop: "Precast concrete chequered and tactile tiles for anti-slip flooring and visual/tactile guidance.",
    heroImage: "/Tile.jpeg",
    heroImageFit: "cover",
    overallTitle: "Chequered Tiles",
    overallDescription: [
      "Our Precast Concrete Chequered Tiles provide a robust, anti-slip surface for pavements and walkways. Manufactured with high-strength concrete, they ensure a long lifespan even under harsh environmental conditions and heavy foot traffic.",
      "Designed for both aesthetic appeal and functional performance, these tiles help in preventing slips and falls while offering a distinct pattern that enhances the visual layout of urban spaces."
    ],
    overallBulletPoints: [
      "High compressive strength and durability",
      "Excellent anti-slip properties",
      "Easy and quick to install",
      "Enhances pedestrian safety and aesthetics",
      "Available in multiple sizes and colors"
    ],
    galleryTitle: "Chequered Tile - Type 01",
    gallery: ["/tile2.jpeg", "/tile1.jpeg"],
    fullDescription: [],
    bulletPoints: [],
    additionalSections: [
      {
        title: "Chequered Tile - Type 02",
        gallery: ["/tile4.jpeg", "/tile3.jpeg"],
        fullDescription: [],
        bulletPoints: []
      },
      {
        title: "Chequered Tile - Type 03",
        gallery: ["/tile6.jpeg", "/tile5.jpeg"],
        fullDescription: [],
        bulletPoints: []
      },
      {
        title: "Chequered Tile - Type 04",
        gallery: ["/tile8.jpeg", "/tile7.jpeg"],
        fullDescription: [],
        bulletPoints: []
      }
    ],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Chequered Tile" },
      { label: "Material", value: "High-strength Concrete" },

      { label: "Grade", value: "M-30" },
      { label: "Size", value: "Various Sizes" },
      { label: "Dimensions", value: "Length X Breadth X Thickness" },
      { label: "Tiles per sq. m", value: "Various" },
      { label: "Application", value: "Walkways, railway platforms, commercial spaces" },
      { label: "Finish", value: "Chequered / Anti-slip" }
    ],
    implementationFeatures: [
      { cat: "Railway Platforms", desc: "Provides safe, anti-slip flooring for high-traffic commuter areas." },
      { cat: "Pedestrian Walkways", desc: "Enhances safety on public sidewalks and parks, especially in wet conditions." },
      { cat: "Commercial Plazas", desc: "Offers a durable and aesthetically pleasing surface for outdoor commercial areas." }
    ]
  },
  RETAINING_WALL: {
    titlePrefix: "Earth Retaining Wall",
    badge: "Heavy Duty",
    descTop: "Precast Concrete Earth Retaining Walls engineered for maximum stability, soil retention, and rapid installation.",
    heroImage: "/earth-wall.png",
    heroVideo: "/wall-bg.mp4",
    bulletPoints: ["Grade : M-30 to M-60"],
    gallery: ["/earth-wall.png", "/earth-wall-2.png", "/earth-wall-3.png", "/earth-wall-4.png"],
    fullDescription: [
      "The Earth Retaining Wall is a precast L-shaped reinforced concrete system used for soil retention, slope stabilization, and erosion control. Each panel is cast to precise dimensions in a controlled factory environment and is available in heights from 600 mm to 3000 mm with a standard panel length of 2000 mm, allowing walls to be built quickly and to a consistent finish.",
      "The structure is engineered for stability with a sliding safety factor of 1.5 or greater, designed against a soil internal-friction angle of 30° and an overburden load of 10 kN/m². Precast construction removes the need for extensive site formwork and curing, speeding up project timelines. The Earth Retaining Wall is well suited to embankments, road and rail formations, landscaping, and any site where reliable, long-lasting soil retention is required."
    ],
    bulletPoints: [
      "Engineered for high soil pressure resistance",
      "Quick and modular installation",
      "Weather and erosion resistant",
      "Custom heights and thicknesses available",
      "Minimal site preparation needed"
    ],
    specsTable: [
      { label: "Product Type", value: "Precast L-Shaped Retaining Wall" },
      { label: "Material", value: "Reinforced Precast Concrete" },

      { label: "Grade", value: "M-30 to M-60" },
      { label: "Available Height", value: "600 mm - 3000 mm" },
      { label: "Standard Panel Length", value: "2000 mm" },
      { label: "Design Soil Friction Angle", value: "30°" },
      { label: "Design Overburden Load", value: "10 kN/m²" },
      { label: "Sliding Safety Factor", value: "≥ 1.5" },
      { label: "Applications", value: "Slope stabilization, soil retention, embankments" }
    ],
    specsImage: "/U-drain.avif",
    diagramImage: "/wall-retaining.png",
    implementationFeatures: [
      { cat: "Infrastructure Projects", desc: "Ideal for highway embankments, bridge abutments, and large-scale soil stabilization." },
      { cat: "Commercial Developments", desc: "Efficient space utilization for commercial properties requiring grade separation." },
      { cat: "Erosion Control", desc: "Provides robust protection against soil erosion and landslide prevention in sloped areas." },
      { cat: "Rapid Deployment", desc: "Precast sections allow for significantly faster installation compared to cast-in-place concrete." }
    ]
  },
  COMPOUND_WALL: {
    titlePrefix: "Precast Compound Wall",
    badge: "Premium",
    descTop: "Durable and aesthetically pleasing precast compound boundary walls for residential, commercial, and industrial security.",
    heroImage: "/earth-wall.png",
    gallery: ["/wall-1.png", "/wall-1.png", "/wall-1.png", "/wall-1.png"],
    specsImage: "/U-drain.avif",
    diagramImage: "/u-drain-d.png",
    implementationFeatures: [
      { cat: "Perimeter Security", desc: "Provides a robust and highly secure boundary for industrial and residential complexes." },
      { cat: "Aesthetic Appeal", desc: "Available in various textures and finishes to complement architectural designs." },
      { cat: "Cost Effective", desc: "Lower overall cost and faster erection time compared to traditional brick or block walls." },
      { cat: "Weather Resistant", desc: "High-grade concrete mix ensures excellent durability against harsh environmental conditions." }
    ]
  },
  JERSEY_BARRIER: {
    titlePrefix: "Jersey Barrier",
    badge: "Highway Safety",
    descTop: "Standard precast concrete Jersey barrier designed for highway safety, traffic management, and temporary road blocks.",
    heroImage: "/barrier-jersey.png",
    heroVideo: "/jersey-bg.mp4",
    gallery: ["/barrier-jersey.png", "/jersey-steel.png", "/jersey-barrier.png"],
    fullDescription: [
      "Our precast concrete Jersey barriers are meticulously engineered to maximize highway safety and effectively manage traffic flow. These barriers are the industry standard for redirecting stray vehicles and preventing head-on collisions on fast-moving highways.",
      "Manufactured in a highly controlled environment, each barrier ensures consistent strength and durability. The specific modular design allows for rapid deployment and reconfiguration, making them ideal for both permanent installations and temporary construction zones."
    ],
    bulletPoints: [
      "M-30 to M-50 high-grade concrete",
      "Engineered to deflect vehicle impacts",
      "Rapid and modular deployment",
      "Highly visible for traffic direction",
      "Weather and crash resistant"
    ],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Jersey Barrier" },
      { label: "Material", value: "High-strength Reinforced Concrete (typically M30 to M50 grade)" },

      { label: "Grade", value: "M-30 to M-50" },
      {
        label: "Standard Dimensions", value: (
          <>
            Base Width: 600 mm – 610 mm (~24 inches)<br />
            Top Width: 150 mm – 200 mm (~6-8 inches)<br />
            Height: 810 mm – 900 mm (~32-36 inches)<br />
            Length: Typically 2.5 m, 3.0 m, or customized
          </>
        )
      },
      { label: "Profile Design", value: "Symmetrical or Asymmetrical dual-slope face (a shallow lower slope to intercept vehicle tires, and a steeper upper slope to redirect the vehicle body)" },
      { label: "Reinforcement", value: "High-Yield Strength Deformed (HYSD) / TMT Steel Bars (typically 8mm to 12mm diameter for main and distribution bars)" },
      { label: "Connection / Joints", value: "Interlocking J-J hooks, steel pin and wire rope loop, or tongue-and-groove joints for continuous chain alignment" },
      { label: "Weight", value: "Approximately 1,500 kg to 2,000 kg per 3-meter section (varies by exact dimensions and density)" },
      { label: "Applications", value: "Highway medians, construction work zones, traffic lane separation, perimeter security, and temporary roadblocks" }
    ],
    specsImage: "/prod9.jpg",
    implementationFeatures: [
      { cat: "Highway Medians", desc: "Prevents crossover accidents and safely redirects errant vehicles." },
      { cat: "Construction Zones", desc: "Protects workers and equipment by clearly defining temporary traffic lanes." },
      { cat: "Perimeter Security", desc: "Acts as a formidable physical barrier against unauthorized vehicular access." },
      { cat: "Event Management", desc: "Quickly deployable for controlling large crowds and directing vehicle flow during events." }
    ]
  },
  CRASH_BARRIER: {
    titlePrefix: "Precast Crash Barrier",
    badge: "Heavy Duty Impact",
    descTop: "Heavy-duty precast crash barrier built to absorb and withstand severe vehicular impacts.",
    heroImage: "/crash-barrier.jpeg",
    heroVideo: "/crash-bg.mp4",
    gallery: ["/crash-barrier.jpeg", "/crash-barrier-2.jpeg", "/Precast Crash Barrier.png"],
    fullDescription: [
      "The Precast Crash Barrier is a heavy-duty safety structure engineered specifically for high-risk zones where severe vehicular impacts are possible. Designed to absorb kinetic energy and safely redirect heavy vehicles, this barrier is essential for expressways and hazardous curves.",
      "Using high-strength reinforced concrete ranging from M-30 to M-50, these barriers offer unparalleled structural integrity. Their massive weight and specialized profile ensure maximum stability, preventing barrier failure even under extreme collision forces."
    ],
    bulletPoints: [
      "M-30 to M-50 extreme strength concrete",
      "Maximum energy absorption design",
      "Prevents roll-overs and breakthroughs",
      "Ideal for high-speed expressways",
      "Zero maintenance required"
    ],
    specsTable: [
      { label: "Product Type", value: "Precast Concrete Crash Barrier (e.g., Jersey or F-Shape)" },
      { label: "Material", value: "High-strength Reinforced Precast Concrete (typically M30 to M50 grade)" },

      {
        label: "Typical Dimensions", value: (
          <>
            Length: 3000 mm – 3040 mm<br />
            Height: 900 mm – 1000 mm<br />
            Base Width: 500 mm – 610 mm
          </>
        )
      },
      { label: "Reinforcement", value: "HYSD / TMT Steel Bars (typically 8mm and 10mm diameter)" },
      { label: "Section", value: "Asymmetrical (Single-sided) or Symmetrical (Double-sided) sloped profile" },
      { label: "Joint", value: "Interlocking tongue and groove, steel pin and loop, or butt joint" },
      { label: "Load Class", value: "Normal to High Containment (Heavy vehicular/highway impact)" },
      { label: "Applications", value: "Highway medians, road edge protection, construction work zones, bridge approaches, traffic diversion" }
    ],
    specsImage: "/prod9.jpg",
    implementationFeatures: [
      { cat: "High-Speed Expressways", desc: "Essential for preventing catastrophic crossover accidents on fast-moving roads." },
      { cat: "Hazardous Curves", desc: "Provides necessary containment and redirection on sharp or dangerous highway curves." },
      { cat: "Bridge Approaches", desc: "Ensures vehicles are safely guided onto bridges without striking rigid bridge ends." },
      { cat: "Industrial Protection", desc: "Protects critical industrial infrastructure from accidental heavy vehicle strikes." }
    ]
  },
  SFRC_RAILING: {
    titlePrefix: "SFRC Railing",
    badge: "Durable",
    descTop: "Steel Fiber Reinforced Concrete (SFRC) railings for enhanced durability and aesthetics.",
    heroImage: "/prod8.png",
    heroImageFit: "cover",
    overallTitle: "SFRC Railing",
    overallDescription: [
      "Our Steel Fiber Reinforced Concrete (SFRC) railings provide an exceptionally strong and durable boundary solution. Manufactured with high-grade concrete and reinforced with steel fibers, they are engineered to resist impact, cracking, and harsh weather conditions.",
      "Designed for both functionality and aesthetic appeal, these railings are ideal for park boundaries and garden enclosures. The modular precast design ensures quick installation and a long, maintenance-free lifespan."
    ],
    overallBulletPoints: [
      "High impact resistance and durability",
      "Steel fiber reinforcement prevents cracking",
      "Quick and modular installation",
      "Zero maintenance required",
      "Available in multiple aesthetic designs"
    ],
    galleryTitle: "SFRC Railing",
    gallery: ["/railing2.jpeg", "/railing3.jpeg", "/railing1.jpeg"],
    fullDescription: [],
    bulletPoints: [],
    specsTable: [
      { label: "Product Type", value: "SFRC Railing" },
      { label: "Material", value: "Steel Fiber Reinforced Concrete" },
      { label: "Grade", value: "M-25 to M-50" },
      { label: "Size", value: "1030 X 900 X 50 mm" }
    ],
    implementationFeatures: [
      { cat: "Perimeter Security", desc: "Provides a robust and durable boundary for parks and gardens." },
      { cat: "Aesthetic Appeal", desc: "Enhances the visual appeal of residential and commercial properties." },
      { cat: "Tree Protection", desc: "Effectively guards tree saplings and plants from animals and pedestrian traffic." }
    ],
    additionalSections: [
      {
        gallery: ["/prod8.png", "/railing10.jpeg", "/railing11.jpeg"],
        fullDescription: [],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "SFRC Railing" },
          { label: "Material", value: "Steel Fiber Reinforced Concrete" },
          { label: "Grade", value: "M-25 to M-50" },
          { label: "Size", value: "1500 X 1000 X 60 mm" }
        ]
      },
      {
        gallery: ["/railing6.jpeg", "/railing5.jpeg", "/railing4.jpeg"],
        fullDescription: [],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "SFRC Railing" },
          { label: "Material", value: "Steel Fiber Reinforced Concrete" },
          { label: "Grade", value: "M-25 to M-50" },
          { label: "Size", value: "1035 X 1000 X 50 mm" }
        ]
      },
      {
        title: "RCC Tree Gaurd",
        gallery: ["/railing7.jpeg", "/railing8.jpeg", "/railing9.jpeg"],
        fullDescription: [
          "Our precast RCC Tree Guards offer exceptional protection for saplings and growing trees against stray animals, pedestrian traffic, and environmental wear. Manufactured with high-grade Steel Fiber Reinforced Concrete (SFRC), they are designed to blend seamlessly into parks, urban streetscapes, and residential gardens while ensuring zero maintenance and long-term durability."
        ],
        bulletPoints: [],
        specsTable: [
          { label: "Product Type", value: "RCC Tree Gaurd" },
          { label: "Material", value: "Steel Fiber Reinforced Concrete" },
          { label: "Grade", value: "M-25 to M-50" },
          { label: "Size", value: "1800 X 620 X 35 mm" }
        ]
      }
    ]
  },
  "RDGF-01": {
    titlePrefix: "Chair Bench with Back Rest",
    badge: "Garden Furniture",
    descTop: "High-quality precast concrete garden bench with back rest for parks, residential complexes, and public spaces.",
    heroImage: "/bg.jpg",
    gallery: ["/back-1.png", "/back-2.png", "/back-3.png"],
    fullDescription: [
      "The precast concrete garden bench with back rest offers a durable and comfortable seating solution for outdoor public spaces. Made with high-strength concrete, it withstands harsh weather conditions without deteriorating.",
      "With its robust L-shape base supports and reinforced concrete planks, this bench ensures long-lasting stability and minimal maintenance. Ideal for parks, campuses, and urban streetscapes."
    ],
    bulletPoints: [
      "Grade M-30 reinforced concrete",
      "Ergonomic back rest design",
      "Weather and vandal resistant",
      "Zero maintenance required"
    ],
    specsTable: [
      { label: "Base support", value: "2 Nos. L-shape base support in grey cement color (thickness:100 mm, Back height:1000 mm, front height:450 mm, Base width:620mm)" },
      { label: "Grade", value: "M-30 to M-50" },
      { label: "Planks", value: "5 Nos. reinforced concrete planks in red color of size 1500mm X 100mm X 50mm, and 1 No. of reinforced concrete plank of size 1500mm X 200mm X 50mm." },
      { label: "Overall Dimensions", value: "Seating length of the Bench: 1500 mm; Seating height of the Bench: 450 mm; Total height of the Bench: 1000 mm" }
    ],
    specsImage: "/prod5.png",
    implementationFeatures: [
      { cat: "Public Parks", desc: "Provides durable, permanent seating for visitors in recreational areas." },
      { cat: "Residential Complexes", desc: "Enhances community spaces with aesthetic and functional outdoor furniture." }
    ]
  },
  "RDGF-02": {
    titlePrefix: "Chair Bench with Hand Rest",
    badge: "Garden Furniture",
    descTop: "High-quality precast concrete garden bench with hand rest for parks, residential complexes, and public spaces.",
    heroImage: "/bg.jpg",
    gallery: ["/hand-1.png", "/hand-2.png", "/hand-3.png"],
    fullDescription: [
      "This precast concrete bench features integrated hand rests for added comfort and accessibility. Engineered from M-30 grade concrete, it provides a permanent, heavy-duty seating option for outdoor environments.",
      "The sturdy base and reinforced seating plank offer excellent load-bearing capacity, making it a reliable choice for high-traffic pedestrian zones and community gardens."
    ],
    bulletPoints: [
      "Grade M-30 reinforced concrete",
      "Integrated hand rests for comfort",
      "Weather and vandal resistant",
      "Zero maintenance required"
    ],
    specsTable: [
      { label: "Base support", value: "2 Nos. L-shape base support in grey cement colour (thickness:80 mm, Back height:890 mm, Front height:450mm, and Base width:690mm)" },
      { label: "Grade", value: "M-30 to M-50" },
      { label: "Planks", value: "1 nos. reinforced concrete plank in red colour of size 1500mm X 400mm X 50mm, and 1 no. of reinforced concrete plank in red colour of size 1500mm X 425mm X 50mm" },
      { label: "Overall Dimensions", value: "Seating length of the Bench: 1500 mm, Seating height of the Bench: 450 mm, Total height of the Bench: 890 mm" }
    ],
    specsImage: "/prod5.png",
    implementationFeatures: [
      { cat: "Public Parks", desc: "Provides durable, permanent seating for visitors in recreational areas." },
      { cat: "Residential Complexes", desc: "Enhances community spaces with aesthetic and functional outdoor furniture." }
    ]
  },
  "RDGF-03": {
    titlePrefix: "Round Table with Four Bench",
    badge: "Garden Furniture",
    descTop: "High-quality precast concrete round table set with four curved benches for outdoor gatherings.",
    heroImage: "/bg.jpg",
    gallery: ["/circle-1.png", "/circle-2.png", "/circle-3.png"],
    fullDescription: [
      "The precast concrete round table set creates an inviting space for picnics, meetings, or relaxation in any outdoor setting. The set includes a robust 1000mm diameter table and four matching curved benches.",
      "Manufactured using M-30 grade concrete with a terrazzo, red, or green color finish, this set combines visual appeal with structural integrity, ensuring it remains a permanent fixture for decades."
    ],
    bulletPoints: [
      "Grade M-30 reinforced concrete",
      "Complete set: 1 table, 4 curved benches",
      "Terrazzo, Red, or Green color finish",
      "Zero maintenance required"
    ],
    specsTable: [
      { label: "Base support", value: "2 Nos. in grey cement concrete" },
      { label: "Grade", value: "M-30 to M-50" },
      { label: "Table", value: "1000mm dia. X 50mm thickness in terrazzo, red, or green color finish" },
      { label: "Benches", value: "4 nos. of size 1000mm length X 350mm width X 50mm thickness in terrazzo, red, or green color finish (Curved)" },
      { label: "Overall Dimensions", value: "Height of table: 800 mm; Height of benches: 450 mm" }
    ],
    specsImage: "/prod5.png",
    implementationFeatures: [
      { cat: "Picnic Areas", desc: "Perfect for parks and recreational zones needing permanent picnic tables." },
      { cat: "Corporate Campuses", desc: "Provides outdoor meeting and lunch spaces for employees." }
    ]
  },
  "RDGF-04": {
    titlePrefix: "Square Table with 4 Bench",
    badge: "Garden Furniture",
    descTop: "High-quality precast concrete square table set with four benches for outdoor dining and meetings.",
    heroImage: "/bg.jpg",
    gallery: ["/square-2.png", "/square-1.png", "/square-3.png"],
    fullDescription: [
      "This precast concrete square table set is designed for maximum utility and durability in public and private outdoor spaces. The 1000x1000mm table offers ample space, surrounded by four sturdy benches.",
      "Cast with high-strength M-30 concrete, the set resists weathering, vandalism, and wear. The terrazzo, red, or green color finish adds a touch of elegance to its robust form."
    ],
    bulletPoints: [
      "Grade M-30 reinforced concrete",
      "Complete set: 1 square table, 4 benches",
      "Terrazzo, Red, or Green color finish",
      "Zero maintenance required"
    ],
    specsTable: [
      { label: "Base support", value: "2 Nos. in grey cement" },
      { label: "Grade", value: "M-30 to M-50" },
      { label: "Table top", value: "1 Nos. of size 1000mm X 1000mm X 50mm thickness in terrazzo, red, or green color finish" },
      { label: "Benches", value: "4 Nos. of size 1000mm length X 350mm width X 50mm thickness in terrazzo, red, or green color finish" },
      { label: "Overall Dimensions", value: "Height of table: 800 mm; Height of benches: 450 mm" }
    ],
    specsImage: "/prod5.png",
    implementationFeatures: [
      { cat: "Picnic Areas", desc: "Perfect for parks and recreational zones needing permanent picnic tables." },
      { cat: "Corporate Campuses", desc: "Provides outdoor meeting and lunch spaces for employees." }
    ]
  }
};

export default function UDrainLandingPage({ productType = "T25" }) {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const data = productData[productType] || productData.T25;
  const isPaver = productType === 'INTERLOCKING_PAVERS' || productType === 'GRASS_PAVER' || productType === 'BRICK_PAVER' || productType === 'COMBI_PAVER' || productType === 'COBBLE_STONE' || productType === 'MANHOLE_COVER';

  const tactileTilesSections = [
    { title: "Tactile Tile - Type 01", size: "300 X 300 X 25/30/40/60 mm", tilesPerSqM: "11 Nos.", images: ["/tile10.jpeg", "/tile9.jpeg"] },
    { title: "Tactile Tile - Type 02", size: "300 X 300 X 25/30/40/60 mm", tilesPerSqM: "11 Nos.", images: ["/tile12.jpeg", "/tile11.jpeg"] }
  ];

  const getActiveGallery = () => {
    if (!lightboxImage) return data.gallery || [];
    if (data.gallery && data.gallery.includes(lightboxImage)) return data.gallery;
    if (data.additionalSections) {
      for (const section of data.additionalSections) {
        if (section.gallery && section.gallery.includes(lightboxImage)) return section.gallery;
      }
    }
    if (productType === 'CHEQUERED_TILES') {
      for (const tile of tactileTilesSections) {
        if (tile.images && tile.images.includes(lightboxImage)) return tile.images;
      }
    }
    return data.gallery || [];
  };

  const activeGallery = getActiveGallery();
  const currentImageIndex = activeGallery.indexOf(lightboxImage);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setLightboxImage(activeGallery[currentImageIndex - 1]);
    } else if (activeGallery.length > 0) {
      setLightboxImage(activeGallery[activeGallery.length - 1]);
    }
  };



  const handleNextImage = (e) => {
    e.stopPropagation();
    if (currentImageIndex < activeGallery.length - 1) {
      setLightboxImage(activeGallery[currentImageIndex + 1]);
    } else if (activeGallery.length > 0) {
      setLightboxImage(activeGallery[0]);
    }
  };
  return (
    <div className="w-full bg-[#f4f4f4] text-[#333333] font-body min-h-screen">

      {/* =========================================
          HERO SECTION
          ========================================= */}
      <section className="relative w-full min-h-[60vh] py-16 md:py-0 md:min-h-screen md:aspect-auto flex flex-col justify-center items-center md:pt-24 md:pb-12 overflow-hidden bg-[#111]">
        {/* Full width background media */}
        <div className="absolute inset-0 z-0 bg-[#111]">
          {data.heroVideo ? (
            <video
              src={data.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={data.heroImage} alt={data.titlePrefix} className={`w-full h-full ${data.heroImageFit === 'contain' ? 'object-contain' : data.heroImageFit === 'fill' ? 'object-contain md:object-fill' : 'object-cover'}`} />
          )}
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50 z-10 pointer-events-none"></div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-900 text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-2 md:mb-6 drop-shadow-xl"
          >
            {data.titlePrefix} <span className="text-gray-400 font-300 inline-block mx-1 md:mx-2">|</span> {data.badge}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-xs sm:text-sm md:text-xl text-gray-200 mb-4 md:mb-10 max-w-[90%] md:max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            {data.descTop}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setInquiryOpen(true)}
              className="bg-white text-[#111] px-3 py-1.5 md:px-8 md:py-4 text-[10px] md:text-base font-display font-bold uppercase tracking-wider hover:bg-[#0066B3] hover:text-white transition-colors flex items-center gap-1.5 md:gap-3 mx-auto shadow-lg"
            >
              Get free quote <ArrowRight className="w-3 h-3 md:w-5 md:h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          OVERALL DESCRIPTION SECTION (Optional)
          ========================================= */}
      {data.overallDescription && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col ${(isPaver || productType === 'CHEQUERED_TILES' || productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) ? 'items-center text-center' : 'lg:flex-row gap-16 items-center'}`}>

              {/* Left Column: Text & Bullets */}
              <div className={`w-full ${(isPaver || productType === 'CHEQUERED_TILES' || productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) ? 'max-w-4xl' : 'lg:w-1/2'}`}>
                {data.overallTitle && (
                  <h2 className="font-display font-900 text-3xl md:text-4xl text-[#222] mb-6 tracking-tight">
                    {data.overallTitle}
                  </h2>
                )}
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                  {data.overallDescription.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {data.overallBulletPoints && (
                  <div className={`grid sm:grid-cols-2 gap-4 ${(isPaver || productType === 'CHEQUERED_TILES' || productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) ? 'text-left max-w-3xl mx-auto' : ''}`}>
                    {data.overallBulletPoints.map((point, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
                          <svg className="w-3.5 h-3.5 text-[#222]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="font-body text-[#222] font-bold text-[15px]">{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: New Main Image */}
              {(!isPaver && productType !== 'CHEQUERED_TILES' && productType !== 'DRAIN_COVER' && productType !== 'SFRC_RAILING' && productType !== 'RAILWAY_COPING_STONE' && productType !== 'SIGN_BOARD' && (productType !== 'MANHOLE_CHAMBER' && productType !== 'SEWER_CHAMBER')) && (
                <div
                  className="w-full lg:w-1/2 mt-8 lg:mt-0 cursor-pointer group"
                  onClick={() => setLightboxImage("/kerb1.png")}
                >
                  <img src="/kerb1.png" alt="Precast Kerb Stone" className="w-full h-auto object-contain rounded-xl drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* =========================================
          PRODUCT DESCRIPTION SECTION
          ========================================= */}
      <section className="py-24 bg-white">
        <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${isPaver ? 'max-w-[1536px] xl:px-12' : 'max-w-7xl'}`}>
          {data.mainSectionTitle && (
            <div className="mb-12 text-center max-w-4xl mx-auto">
              <h2 className="font-display font-900 text-3xl md:text-4xl text-[#222] mb-6 uppercase tracking-wide">{typeof data.mainSectionTitle === 'string' ? data.mainSectionTitle.split(/(mm)/i).map((part, i) => part.toLowerCase() === 'mm' ? <span key={i} className="lowercase">mm</span> : part) : data.mainSectionTitle}</h2>
            </div>
          )}
          <div className={`flex flex-col gap-8 lg:gap-12 items-center ${(productType === 'KERB_STONE' || productType === 'CHEQUERED_TILES' || isPaver) ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

            {/* Left Column: Images */}
            <div className={`w-full ${(isPaver) ? 'lg:w-[60%]' : ((productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) ? 'lg:w-[55%]' : 'lg:w-1/2'}`}>
              {data.gallery.length === 2 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First column: Image */}
                  <div
                    onClick={() => setLightboxImage(data.gallery[0])}
                    className="w-full h-auto bg-[#f4f4f4] border border-gray-200 relative overflow-hidden flex items-center justify-center p-4 cursor-pointer group"
                  >
                    <img src={data.gallery[0]} alt={`${data.titlePrefix} Detail 1`} className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Second column: Image 2 */}
                  <div
                    onClick={() => setLightboxImage(data.gallery[1])}
                    className="w-full h-auto bg-[#f4f4f4] border border-gray-200 relative overflow-hidden flex items-center justify-center p-2 md:p-4 cursor-pointer group"
                  >
                    <img src={data.gallery[1]} alt={`${data.titlePrefix} Detail 2`} className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className="w-full bg-[#f4f4f4] mb-4 border border-gray-200 relative overflow-hidden flex items-center justify-center p-4 md:p-6 cursor-pointer group rounded-lg"
                    onClick={() => setLightboxImage(data.gallery[0])}
                  >
                    <img src={data.gallery[0]} alt={`${data.titlePrefix} Detail`} className="w-full h-auto max-h-[350px] object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  {data.gallery.length > 1 && (
                    <div className={`grid gap-4 ${data.gallery.length - 1 === 2 ? 'grid-cols-2' : data.gallery.length - 1 === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                      {data.gallery.slice(1).map((imgUrl, index) => (
                        <div
                          key={index}
                          onClick={() => setLightboxImage(imgUrl)}
                          className="aspect-video bg-[#f4f4f4] border border-gray-200 flex items-center justify-center overflow-hidden cursor-pointer p-2"
                        >
                          <img src={imgUrl} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Right Column: Text */}
            <div className={`w-full ${(isPaver) ? 'lg:w-[40%]' : ((productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) ? 'lg:w-[45%]' : 'lg:w-1/2'} pt-4`}>
              {(productType !== 'KERB_STONE' && productType !== 'CHEQUERED_TILES' && productType !== 'DRAIN_COVER' && productType !== 'SFRC_RAILING' && productType !== 'RAILWAY_COPING_STONE' && productType !== 'SIGN_BOARD' && (productType !== 'MANHOLE_CHAMBER' && productType !== 'SEWER_CHAMBER') && !isPaver) && (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#0066B3]"></div>
                  <span className="font-mono text-xs uppercase tracking-widest text-gray-600 font-bold">Service overview</span>
                </div>
              )}

              {((productType !== 'KERB_STONE' && productType !== 'CHEQUERED_TILES' && productType !== 'DRAIN_COVER' && productType !== 'SFRC_RAILING' && productType !== 'RAILWAY_COPING_STONE' && productType !== 'SIGN_BOARD' && (productType !== 'MANHOLE_CHAMBER' && productType !== 'SEWER_CHAMBER') && !isPaver) || productType === 'SFRC_RAILING') && (
                <h2 className="font-display font-900 text-4xl text-[#222] mb-8">{data.galleryTitle || "Product Description"}</h2>
              )}

              {(productType === 'KERB_STONE' || productType === 'CHEQUERED_TILES' || productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER') || isPaver) ? (
                <div className="w-full h-full flex flex-col justify-center">
                  <h3 className="font-display font-900 text-2xl text-[#222] mb-6 uppercase tracking-wider text-center lg:text-left">Specifications</h3>
                  <div className="w-full border-t border-l border-r border-gray-200 bg-white shadow-sm">
                    <table className="w-full text-left font-body text-[13px] md:text-sm text-gray-600">
                      <tbody>
                        {(((productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) && data.specsTable) ? data.specsTable : (productType === 'KERB_STONE' ? [
                          { label: 'Product Type', value: 'Precast Concrete Kerb Stone' },
                          { label: 'Material', value: 'PCC / High-strength Concrete' },

                          { label: "Grade", value: "M-20 to M-30" },
                          { label: 'Size', value: '300 X 300 X 150 (mm)' },
                          { label: 'Dimensions', value: 'Length X Height X Thickness' },
                          { label: 'Application', value: 'Road edges, walkways, landscaping' },
                          { label: 'Finish', value: 'Smooth / Textured' }
                        ] : productType === 'GRASS_PAVER' ? [
                          { label: 'Product Type', value: 'Precast Concrete Grass Paver' },
                          { label: 'Material', value: 'High-strength Concrete' },

                          { label: "Grade", value: "M-25 to M-50" },
                          { label: 'Size', value: '600 X 400 X 70 mm' },
                          { label: 'Tiles per sq. m', value: '4 Nos.' },
                          { label: 'Application', value: 'Parking lots, fire lanes, driveways' },
                          { label: 'Finish', value: 'Smooth / Textured' }
                        ] : productType === 'BRICK_PAVER' ? [
                          { label: 'Product Type', value: 'Precast Concrete Brick Paver' },
                          { label: 'Material', value: 'High-strength Concrete' },

                          { label: "Grade", value: "M-25 to M-50" },
                          { label: 'Size', value: '300 X 150 mm' },
                          { label: 'Thickness', value: '60mm / 80mm' },
                          { label: 'Tiles per sq. m', value: '22 Nos.' },
                          { label: 'Application', value: 'Driveways, walkways, patios' },
                          { label: 'Finish', value: 'Smooth / Textured' }
                        ] : productType === 'COMBI_PAVER' ? [
                          { label: 'Product Type', value: 'Precast Concrete Combi Paver' },
                          { label: 'Material', value: 'High-strength Concrete' },

                          { label: "Grade", value: "M-25 to M-50" },
                          { label: 'Size', value: (<span>200 X 100 mm<br />100 X 100 mm</span>) },
                          { label: 'Thickness', value: '60mm / 80mm' },
                          { label: 'Tiles per sq. m', value: 'As per requirement' },
                          { label: 'Application', value: 'Driveways, walkways, patios' },
                          { label: 'Finish', value: 'Smooth / Textured' }
                        ] : productType === 'COBBLE_STONE' ? [
                          { label: 'Product Type', value: 'Precast Concrete Cobble Stone Paver' },
                          { label: 'Material', value: 'High-strength Concrete' },

                          { label: "Grade", value: "M-25 to M-50" },
                          { label: 'Size', value: '200 X 200 mm' },
                          { label: 'Thickness', value: '60mm / 80mm' },
                          { label: 'Tiles per sq. m', value: '24.21 Nos' },
                          { label: 'Application', value: 'Driveways, walkways, patios' },
                          { label: 'Finish', value: 'Smooth / Textured' }
                        ] : productType === 'MANHOLE_COVER' ? [
                          { label: 'Product Type', value: 'Precast Concrete Manhole Cover & Frame' },
                          { label: 'Material', value: 'High-strength Concrete' },

                          { label: "Grade", value: "M-20 to M-35" },
                          { label: 'Dimensions', value: 'Various Sizes' },
                          { label: 'Load Capacity', value: 'Various' },
                          { label: 'Application', value: 'Roads, walkways, utility chambers' },
                          { label: 'Finish', value: 'Smooth / Textured' }
                        ] : productType === 'CHEQUERED_TILES' ? [
                          { label: 'Product Type', value: 'Precast Concrete Chequered Tile' },
                          { label: 'Material', value: 'High-strength Concrete' },

                          { label: "Grade", value: "M-25 to M-50" },
                          { label: 'Size', value: '300 X 300 X 25 mm' },
                          { label: 'Dimensions', value: 'Length X Breadth X Thickness' },
                          { label: 'Tiles per sq. m', value: '11 Nos.' },
                          { label: 'Application', value: 'Walkways, railway platforms, commercial spaces' },
                          { label: 'Finish', value: 'Chequered / Anti-slip' }
                        ] : [
                          { label: 'Product Type', value: 'Precast Concrete Interlocking Paver' },
                          { label: 'Material', value: 'High-strength Concrete' },

                          { label: "Grade", value: "M-25 to M-50" },
                          { label: 'Size', value: '270 mm outer' },
                          { label: 'Thickness', value: '60mm / 80mm' },
                          { label: 'Tiles per sq. m', value: '23.5 Nos.' },
                          { label: 'Application', value: 'Driveways, walkways, industrial yards' },
                          { label: 'Finish', value: 'Smooth / Textured' }
                        ])).map((spec, i) => (
                          <tr key={i} className="border-b border-gray-200">
                            <td className="py-4 px-5 font-bold w-[30%] text-[#111] border-r border-gray-200">{spec.label}</td>
                            <td className="py-4 px-5 text-gray-600">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <>
                  {data.fullDescription ? (
                    data.fullDescription.map((paragraph, index) => (
                      <p key={index} className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <>
                      <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                        Introducing the Heavy-Duty Precast RCC U Drain—the superior solution for modern civil infrastructure and water management.
                      </p>

                      <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                        Ideal for use in urban infrastructure, highways, and industrial sites, U-Drain systems are easy to install, require minimal maintenance, and ensure long-term reliability in managing surface water runoff.
                      </p>
                    </>
                  )}

                  {data.bulletPoints && data.bulletPoints.length > 0 && (
                    <ul className="mt-8 space-y-4">
                      {data.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center bg-transparent">
                            <svg className="w-3.5 h-3.5 text-[#222]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          </div>
                          <span className="font-body text-[#222] font-bold text-[15px]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          ADDITIONAL PRODUCT DESCRIPTION SECTIONS
          ========================================= */}
      {data.additionalSections && data.additionalSections.map((section, idx) => (
        <section key={idx} className={`py-24 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}>
          <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${isPaver ? 'max-w-[1536px] xl:px-12' : 'max-w-7xl'}`}>
            <div className="mb-12 text-center max-w-4xl mx-auto">
              {((productType !== 'KERB_STONE' && productType !== 'CHEQUERED_TILES' && productType !== 'DRAIN_COVER' && productType !== 'SFRC_RAILING' && productType !== 'RAILWAY_COPING_STONE' && productType !== 'SIGN_BOARD' && (productType !== 'MANHOLE_CHAMBER' && productType !== 'SEWER_CHAMBER') && !isPaver) || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) && section.title && (
                <h2 className="font-display font-900 text-3xl md:text-4xl text-[#222] mb-6 uppercase tracking-wide">{typeof section.title === 'string' ? section.title.split(/(mm)/i).map((part, i) => part.toLowerCase() === 'mm' ? <span key={i} className="lowercase">mm</span> : part) : section.title}</h2>
              )}
              {((productType === 'KERB_STONE' || productType === 'CHEQUERED_TILES' || productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER') || isPaver)) && !section.isDescriptionOnly && section.fullDescription && section.fullDescription.map((paragraph, pIdx) => (
                <p key={pIdx} className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${((productType === 'KERB_STONE' || productType === 'CHEQUERED_TILES' || isPaver) && idx % 2 !== 0) || ((productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) && idx % 2 === 0) ? 'lg:flex-row-reverse' : ''}`}>

              {/* Images */}
              <div className={`w-full ${(isPaver) ? 'lg:w-[60%]' : ((productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) ? 'lg:w-[55%]' : 'lg:w-1/2'}`}>
                {section.gallery.length === 2 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First column: Image */}
                    <div
                      onClick={() => setLightboxImage(section.gallery[0])}
                      className="w-full h-auto bg-[#f4f4f4] border border-gray-200 relative overflow-hidden flex items-center justify-center p-2 md:p-3 cursor-pointer group"
                    >
                      <img src={section.gallery[0]} alt={`${data.titlePrefix} Detail ${idx + 2}-1`} className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    {/* Second column: Image 2 */}
                    <div
                      onClick={() => setLightboxImage(section.gallery[1])}
                      className="w-full h-auto bg-[#f4f4f4] border border-gray-200 relative overflow-hidden flex items-center justify-center p-2 md:p-3 cursor-pointer group"
                    >
                      <img src={section.gallery[1]} alt={`${data.titlePrefix} Detail ${idx + 2}-2`} className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="w-full bg-[#f4f4f4] mb-4 border border-gray-200 relative overflow-hidden flex items-center justify-center p-2 md:p-4 cursor-pointer group"
                      onClick={() => setLightboxImage(section.gallery[0])}
                    >
                      <img src={section.gallery[0]} alt={`${data.titlePrefix} Detail ${idx + 2}`} className="w-full h-auto max-h-[700px] object-contain transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    {section.gallery.length > 1 && (
                      <div className={`grid gap-4 ${section.gallery.length - 1 === 2 ? 'grid-cols-2' : section.gallery.length - 1 === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                        {section.gallery.slice(1).map((imgUrl, imgIndex) => (
                          <div
                            key={imgIndex}
                            onClick={() => setLightboxImage(imgUrl)}
                            className="aspect-video bg-[#f4f4f4] border border-gray-200 flex items-center justify-center overflow-hidden cursor-pointer p-2"
                          >
                            <img src={imgUrl} alt={`Thumbnail ${idx + 2}-${imgIndex + 1}`} className="w-full h-full object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all" />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Text */}
              <div className={`w-full ${(isPaver) ? 'lg:w-[40%]' : ((productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) ? 'lg:w-[45%]' : 'lg:w-1/2'} pt-4`}>
                {(productType !== 'KERB_STONE' && productType !== 'CHEQUERED_TILES' && productType !== 'DRAIN_COVER' && productType !== 'SFRC_RAILING' && productType !== 'RAILWAY_COPING_STONE' && productType !== 'SIGN_BOARD' && (productType !== 'MANHOLE_CHAMBER' && productType !== 'SEWER_CHAMBER') && !isPaver) && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#0066B3]"></div>
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-600 font-bold">Service overview</span>
                  </div>
                )}



                {section.isDescriptionOnly ? (
                  <div className="w-full h-full flex flex-col justify-center">
                    <h3 className="font-display font-900 text-2xl text-[#222] mb-6 uppercase tracking-wider text-center lg:text-left">Description</h3>
                    {section.fullDescription && section.fullDescription.map((p, pIdx) => (
                      <p key={pIdx} className="font-body text-gray-600 text-base md:text-lg leading-relaxed mb-4">{p}</p>
                    ))}
                  </div>
                ) : (productType === 'KERB_STONE' || productType === 'CHEQUERED_TILES' || productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER') || isPaver) ? (
                  <div className="w-full h-full flex flex-col justify-center">
                    <h3 className="font-display font-900 text-2xl text-[#222] mb-6 uppercase tracking-wider text-center lg:text-left">Specifications</h3>
                    <div className="w-full border-t border-l border-r border-gray-200 bg-white shadow-sm">
                      <table className="w-full text-left font-body text-[13px] md:text-sm text-gray-600">
                        <tbody>
                          {(((productType === 'DRAIN_COVER' || productType === 'SFRC_RAILING' || productType === 'RAILWAY_COPING_STONE' || productType === 'SIGN_BOARD' || (productType === 'MANHOLE_CHAMBER' || productType === 'SEWER_CHAMBER')) && section.specsTable) ? section.specsTable : (productType === 'KERB_STONE' ? [
                            { label: 'Product Type', value: 'Precast Concrete Kerb Stone' },
                            { label: 'Material', value: 'PCC / High-strength Concrete' },

                            { label: "Grade", value: "M-25 to M-50" },
                            { label: 'Size', value: `${idx === 0 ? '300 X 450 X 150' : idx === 1 ? '300 X 300/250 X 150/100' : idx === 2 ? '450 X 300 X 100' : idx === 3 ? '300 X 450 X 150/100' : '300 X 300 X 150'} (mm)` },
                            { label: 'Dimensions', value: 'Length X Height X Thickness' },
                            { label: 'Application', value: 'Road edges, walkways, landscaping' },
                            { label: 'Finish', value: 'Smooth / Textured' }
                          ] : productType === 'GRASS_PAVER' ? [
                            { label: 'Product Type', value: 'Precast Concrete Grass Paver' },
                            { label: 'Material', value: 'High-strength Concrete' },

                            { label: "Grade", value: "M-25 to M-50" },
                            { label: 'Size', value: idx === 0 ? '265 X 265 mm' : <span>300 X 300 mm<br />250 X 250 mm</span> },
                            { label: 'Thickness', value: idx === 0 ? '60mm / 80mm' : '60mm / 80mm' },
                            { label: 'Tiles per sq. m', value: idx === 0 ? '13.80 Nos.' : <span>11 Nos. (300 X 300 mm)<br />15.5 Nos. (250 X 250 mm)</span> },
                            { label: 'Application', value: 'Parking lots, fire lanes, driveways' },
                            { label: 'Finish', value: 'Smooth / Textured' }
                          ] : productType === 'BRICK_PAVER' ? [
                            { label: 'Product Type', value: 'Precast Concrete Brick Paver' },
                            { label: 'Material', value: 'High-strength Concrete' },

                            { label: "Grade", value: "M-25 to M-50" },
                            { label: 'Size', value: idx === 0 ? <span>200 X 200 mm<br />100 X 100 mm</span> : '300 X 150 X 100 mm' },
                            { label: 'Thickness', value: idx === 0 ? '60mm / 80mm' : '100mm' },
                            { label: 'Tiles per sq. m', value: idx === 0 ? '24.2 Nos.' : '22 Nos.' },
                            { label: 'Application', value: 'Heavy traffic areas, industrial' },
                            { label: 'Finish', value: 'Smooth / Textured' }
                          ] : productType === 'COMBI_PAVER' ? [
                            { label: 'Product Type', value: 'Precast Concrete Combi Paver' },
                            { label: 'Material', value: 'High-strength Concrete' },

                            { label: "Grade", value: "M-25 to M-50" },
                            { label: 'Size', value: idx === 0 ? <span>200 X 200 mm<br />200 X 100 mm</span> : 'Various Sizes' },
                            { label: 'Thickness', value: idx === 0 ? '60mm / 80mm' : '60mm / 80mm' },
                            { label: 'Tiles per sq. m', value: idx === 0 ? 'As per requirement' : 'Various' },
                            { label: 'Application', value: 'Driveways, walkways, patios' },
                            { label: 'Finish', value: 'Smooth / Textured' }
                          ] : productType === 'COBBLE_STONE' ? [
                            { label: 'Product Type', value: 'Precast Concrete Cobble Stone Paver' },
                            { label: 'Material', value: 'High-strength Concrete' },

                            { label: "Grade", value: "M-25 to M-50" },
                            { label: 'Size', value: idx === 0 ? '150 X 150 mm' : 'Various Sizes' },
                            { label: 'Thickness', value: idx === 0 ? '22 mm' : '60mm / 80mm' },
                            { label: 'Tiles per sq. m', value: idx === 0 ? '43 Nos.' : 'Various' },
                            { label: 'Application', value: 'Driveways, walkways, patios' },
                            { label: 'Finish', value: 'Smooth / Textured' }
                          ] : productType === 'MANHOLE_COVER' ? [
                            { label: 'Product Type', value: 'Precast Concrete Manhole Cover & Frame' },
                            { label: 'Material', value: 'High-strength Concrete' },

                            { label: "Grade", value: "M-20 to M-35" },
                            { label: 'Dimensions', value: idx === 0 ? 'Various Sizes' : 'Various Sizes' },
                            { label: 'Load Capacity', value: idx === 0 ? 'Various' : 'Various' },
                            { label: 'Application', value: 'Roads, walkways, utility chambers' },
                            { label: 'Finish', value: 'Smooth / Textured' }
                          ] : productType === 'CHEQUERED_TILES' ? [
                            { label: 'Product Type', value: 'Precast Concrete Chequered Tile' },
                            { label: 'Material', value: 'High-strength Concrete' },

                            { label: "Grade", value: "M-25 to M-50" },
                            { label: 'Size', value: '300 X 300 X 25 mm' },
                            { label: 'Dimensions', value: 'Length X Breadth X Thickness' },
                            { label: 'Tiles per sq. m', value: '11 Nos.' },
                            { label: 'Application', value: 'Walkways, railway platforms, commercial spaces' },
                            { label: 'Finish', value: 'Chequered / Anti-slip' }
                          ] : [
                            { label: 'Product Type', value: 'Precast Concrete Interlocking Paver' },
                            { label: 'Material', value: 'High-strength Concrete' },

                            { label: "Grade", value: "M-25 to M-50" },
                            { label: 'Size', value: idx === 2 ? 'Overall: 200 × 200 mm | Cut: 100 × 100 mm' : `${idx === 0 ? '260 X 150' : idx === 1 ? '198 X 158' : '150 X 150'} (mm)` },
                            { label: 'Thickness', value: idx === 1 ? '60mm / 80mm / 100mm / 120mm' : idx === 2 ? '60mm / 80mm' : '60mm / 80mm / 100mm' },
                            { label: 'Tiles per sq. m', value: `${idx === 0 ? '32.5' : idx === 1 ? '35' : idx === 2 ? '32.5' : '44'} Nos.` },
                            { label: 'Application', value: 'Driveways, walkways, industrial yards' },
                            { label: 'Finish', value: 'Smooth / Textured' }
                          ])).filter(Boolean).map((spec, i) => (
                            <tr key={i} className="border-b border-gray-200">
                              <td className="py-4 px-5 font-bold w-[30%] text-[#111] border-r border-gray-200">{spec.label}</td>
                              <td className="py-4 px-5 text-gray-600">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <>
                    {section.fullDescription && section.fullDescription.map((paragraph, pIdx) => (
                      <p key={pIdx} className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}

                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="mt-8 space-y-4">
                        {section.bulletPoints && section.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm">
                              <svg className="w-3.5 h-3.5 text-[#222]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <span className="font-body text-[#222] font-bold text-[15px]">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* =========================================
          PRECAST SIZES SECTION (IMAGE OVERRIDE)
          ========================================= */}
      {(productType !== 'KERB_STONE' && productType !== 'CHEQUERED_TILES' && productType !== 'DRAIN_COVER' && productType !== 'SFRC_RAILING' && productType !== 'RAILWAY_COPING_STONE' && productType !== 'SIGN_BOARD' && (productType !== 'MANHOLE_CHAMBER' && productType !== 'SEWER_CHAMBER') && !isPaver) && (
        <section className="py-24 bg-[#f9f9f9] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full flex justify-center items-center">
              {data.specsTable ? (
                <div className="w-full max-w-5xl">
                  <h3 className="text-center font-display font-900 text-4xl mb-12 text-[#222]">Specifications</h3>
                  <div className="bg-white border border-gray-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        {data.specsTable.map((row, i) => (
                          <tr key={i} className="border-b border-gray-200 last:border-0">
                            <td className="py-5 px-6 md:px-8 font-display font-bold text-lg text-[#222] w-1/3 border-r border-gray-100">{row.label}</td>
                            <td className="py-5 px-6 md:px-8 font-body text-gray-600">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <img
                  src={data.specsImage}
                  alt={`${data.titlePrefix} Specifications`}
                  className="w-full max-w-5xl h-auto object-contain border border-gray-200 shadow-sm bg-white"
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          TECHNICAL DETAILS (MANHOLE COVER ONLY)
          ========================================= */}
      {productType === 'MANHOLE_COVER' && (
        <section className="py-24 bg-white">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-900 text-3xl md:text-4xl text-center text-[#222] mb-12">
              Technical Details of SFRC Manhole covers and Frames
            </h2>
            <div className="flex justify-center mb-12 bg-[#f9f9f9] border border-gray-200 rounded-lg p-6 overflow-hidden">
              <img src="/manhole.png" alt="Manhole Dimensions Diagram" className="max-w-full h-auto max-h-[250px] object-contain" />
            </div>
            <div className="overflow-x-auto border border-[#222] rounded-lg shadow-sm">
              <table className="w-full text-center text-[12px] md:text-sm border-collapse bg-white">
                <thead>
                  <tr className="border-b border-[#222]">
                    <th className="border-r border-[#222] py-4 px-2 md:px-4 font-bold text-[#222] leading-tight">Grade<br />Designation<br /></th>
                    <th className="border-r border-[#222] py-4 px-2 md:px-4 font-bold text-[#222] leading-tight text-left">Description<br /></th>
                    <th className="border-r border-[#222] py-4 px-2 md:px-4 font-bold text-[#222] leading-tight">Clear Opening<br />in Frame, A<br /></th>
                    <th className="border-r border-[#222] py-4 px-2 md:px-4 font-bold text-[#222] leading-tight">B<br /></th>
                    <th className="border-r border-[#222] py-4 px-2 md:px-4 font-bold text-[#222] leading-tight">C<br /></th>
                    <th className="border-r border-[#222] py-4 px-2 md:px-4 font-bold text-[#222] leading-tight">D<br /></th>
                    <th className="border-r border-[#222] py-4 px-2 md:px-4 font-bold text-[#222] leading-tight">E<br />Min<br /></th>
                    <th className="py-4 px-2 md:px-4 font-bold text-[#222] leading-tight">F<br />Nominal<br /></th>
                  </tr>
                </thead>
                <tbody className="text-gray-800">
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">LD-2.5</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Light Duty<br />Rectangular</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">450 &times; 600</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">50</td>
                    <td className="py-3 px-2 md:px-4">559 &times; 709</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">LD-2.5</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Light Duty<br />Square</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">400 &times; 400<br />450 &times; 450</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50</td>
                    <td className="py-3 px-2 md:px-4 leading-relaxed">509 &times; 509<br />559 &times; 559</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">LD-2.5</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Light Duty<br />Circular</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">370<br />450<br />500<br />560</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50<br />50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50<br />50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50<br />50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50<br />50<br />50</td>
                    <td className="py-3 px-2 md:px-4 leading-relaxed">479<br />559<br />609<br />669</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">MD-10</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Medium Duty<br />Rectangular</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">450 &times; 600</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">70</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">50</td>
                    <td className="py-3 px-2 md:px-4">560 &times; 710</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">MD-10</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Medium Duty<br />Square</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">450 &times; 450<br />600 &times; 600</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">70<br />70</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50</td>
                    <td className="py-3 px-2 md:px-4 leading-relaxed">560 &times; 560<br />710 &times; 710</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">MD-10</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Medium Duty<br />Circular</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">450<br />500<br />560<br />600</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">70<br />70<br />70<br />70</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50<br />50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50<br />50<br />50</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">50<br />50<br />50<br />50</td>
                    <td className="py-3 px-2 md:px-4 leading-relaxed">560<br />610<br />670<br />710</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">HD-20</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Heavy Duty<br />Rectangular<br />(Scrapper)</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">900 &times; 450</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">90</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="py-3 px-2 md:px-4">1060 &times; 610</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">HD-20</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Heavy Duty<br />Square</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">560 &times; 560</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">90</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="py-3 px-2 md:px-4">720 &times; 720</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">HD-20</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Heavy Duty<br />Circular</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">450<br />500<br />560<br />600</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">90<br />90<br />90<br />90</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">75<br />75<br />75<br />75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">75<br />75<br />75<br />75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">75<br />75<br />75<br />75</td>
                    <td className="py-3 px-2 md:px-4 leading-relaxed">610<br />660<br />720<br />760</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">HD-20</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Heavy Duty<br />Lamphole</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">350</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">90</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="py-3 px-2 md:px-4">510</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">EHD-35</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Extra Heavy Duty<br />Rectangular</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">900 &times; 560</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">100</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="py-3 px-2 md:px-4">1060 &times; 720</td>
                  </tr>
                  <tr className="border-b border-[#222] hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">EHD-35</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Extra Heavy Duty<br />Square</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">560 &times; 560</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">100</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4">75</td>
                    <td className="py-3 px-2 md:px-4">720 &times; 720</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 font-600">EHD-35</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 text-left leading-relaxed">Extra Heavy Duty<br />Circular</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">450<br />500<br />560<br />600</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">100<br />100<br />100<br />100</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">75<br />75<br />75<br />75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">75<br />75<br />75<br />75</td>
                    <td className="border-r border-[#222] py-3 px-2 md:px-4 leading-relaxed">75<br />75<br />75<br />75</td>
                    <td className="py-3 px-2 md:px-4 leading-relaxed">610<br />660<br />720<br />760</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          PRODUCT ASSEMBLY SECTION
          ========================================= */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left Column */}
            <div className="w-full lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#0066B3]"></div>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-300 font-bold">Applications & Use Cases</span>
              </div>
              <h2 className="font-display font-900 text-4xl text-white mb-6">Practical implementation</h2>
            </div>

            {/* Right Column: Features List */}
            <div className="w-full lg:w-2/3">
              <div className="space-y-12">
                {data.implementationFeatures.map((feature, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-gray-800 pb-8 last:border-0 last:pb-0">
                    <div className="w-full md:w-1/3">
                      <h3 className="font-display font-bold text-lg uppercase text-[#0066B3]">{feature.cat}</h3>
                    </div>
                    <div className="w-full md:w-2/3">
                      <p className="font-body text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          ASSEMBLY / IMPLEMENTATION DIAGRAM SECTION
          ========================================= */}
      {data.diagramImage && (
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <img
              src={data.diagramImage}
              alt={`${data.titlePrefix} Diagram`}
              className="w-full max-w-5xl h-auto object-contain"
            />
          </div>
        </section>
      )}



      {/* =========================================
          SAUCER DRAIN SECTION (Only for Kerb Stone page)
          ========================================= */}
      {productType === 'KERB_STONE' && (
        <>
          {/* Saucer Drain Overall Description */}
          <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-16 items-center">

                {/* Left Column: Text */}
                <div className="w-full lg:w-1/2">
                  <h2 className="font-display font-900 text-3xl md:text-4xl text-[#222] mb-6 tracking-tight">
                    Saucer Drain
                  </h2>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                    <p>
                      Our Precast Concrete Saucer Drains are specifically designed to effectively channel surface water runoff from roads and pavements. They integrate seamlessly with our kerb stones to form a complete drainage solution.
                    </p>
                    <p>
                      Manufactured with high-strength concrete, these drains offer excellent hydraulic flow and structural durability, ensuring long-lasting performance in both urban and industrial environments.
                    </p>
                  </div>
                </div>

                {/* Right Column: New Main Image */}
                <div
                  className="w-full lg:w-1/2 cursor-pointer group"
                  onClick={() => setLightboxImage("/saucer.png")}
                >
                  <img src="/saucer.png" alt="Saucer Drain" className="w-full h-auto object-contain rounded-xl drop-shadow-sm transition-transform duration-300 group-hover:scale-105" />
                </div>

              </div>
            </div>
          </section>

          {/* Saucer Drain Specific Sections (1 section) */}
          {[
            { title: "Size : SD 01", size: <>450 X 300 X 100/70 (mm) <br /> 600 X 300 X 100/70 (mm)</> }
          ].map((drain, idx) => (
            <section key={idx} className={`py-24 border-b border-gray-100 ${idx === 1 ? 'bg-[#f9f9f9]' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col gap-16 items-start ${idx === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                  {/* Left Column: Specs Table */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-full h-full flex flex-col justify-center max-w-xl">
                      <h3 className="font-display font-900 text-2xl text-[#222] mb-6 uppercase tracking-wider text-center lg:text-left">
                        Specifications
                      </h3>
                      <div className="w-full border-t border-l border-r border-gray-200 bg-white shadow-sm">
                        <table className="w-full text-left font-body text-[13px] md:text-sm text-gray-600">
                          <tbody>
                            {[
                              { label: 'Product Type', value: 'Precast Concrete Saucer Drain' },
                              { label: 'Material', value: 'PCC / High-strength Concrete' },

                              { label: "Grade", value: "M-25 to M-50" },
                              { label: 'Size', value: drain.size },
                              { label: 'Dimensions', value: 'Length X Width X Thickness' },
                              { label: 'Application', value: 'Surface water drainage' },
                              { label: 'Finish', value: 'Smooth' }
                            ].map((spec, i) => (
                              <tr key={i} className="border-b border-gray-200">
                                <td className="py-4 px-5 font-bold w-[40%] text-[#111] border-r border-gray-200">{spec.label}</td>
                                <td className="py-4 px-5 text-gray-600">{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dimensional Image */}
                  <div
                    className="w-full lg:w-1/2 cursor-pointer group"
                    onClick={() => setLightboxImage("/saucer1.png")}
                  >
                    <img src="/saucer1.png" alt={`${drain.title} Diagram`} className="w-full h-auto object-contain rounded-xl drop-shadow-sm border border-gray-100 bg-white p-4 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                </div>
              </div>
            </section>
          ))}

          {/* =========================================
              SAUCER DRAIN APPLICATIONS / USE CASES
              ========================================= */}
          {data.implementationFeatures && (
            <section className="py-24 bg-[#111]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">

                {/* Left Column: Heading */}
                <div className="w-full lg:w-1/3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                    <div className="w-2 h-2 rounded-full bg-[#0066B3]"></div>
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-300 font-bold">Applications & Use Cases</span>
                  </div>
                  <h2 className="font-display font-900 text-4xl md:text-5xl text-white uppercase tracking-tighter">Practical Implementation</h2>
                </div>

                {/* Right Column: Features List */}
                <div className="w-full lg:w-2/3">
                  <div className="space-y-12">
                    {[
                      { cat: "Surface Drainage", desc: "Efficiently collects and channels rainwater away from road surfaces to prevent waterlogging and aquaplaning." },
                      { cat: "Highway & Toll Plazas", desc: "Ideal for high-traffic zones, providing robust drainage without interfering with vehicle movement." },
                      { cat: "Industrial Parks", desc: "Effectively manages large volumes of surface runoff in expansive commercial and industrial estates." },
                      { cat: "Residential Complexes", desc: "Maintains clean and dry pedestrian walkways and internal roads, enhancing neighborhood safety and hygiene." }
                    ].map((feature, i) => (
                      <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-gray-800 pb-8 last:border-0 last:pb-0">
                        <div className="w-full md:w-1/3">
                          <h3 className="font-display font-bold text-lg uppercase text-[#0066B3]">{feature.cat}</h3>
                        </div>
                        <div className="w-full md:w-2/3">
                          <p className="font-body text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>
          )}
        </>
      )}

      {/* =========================================
          TACTILE TILES SECTION (Only for Chequered Tiles page)
          ========================================= */}
      {productType === 'CHEQUERED_TILES' && (
        <>
          {/* Tactile Tiles Overall Description */}
          <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center text-center">

                {/* Left Column: Text */}
                <div className="w-full max-w-4xl">
                  <h2 className="font-display font-900 text-3xl md:text-4xl text-[#222] mb-6 tracking-tight">
                    Tactile Tiles
                  </h2>
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                    <p>
                      Our Precast Concrete Tactile Tiles are designed to provide physical cues to visually impaired individuals, ensuring safety and directional guidance in public spaces.
                    </p>
                    <p>
                      Featuring distinctive surface patterns, these tiles are commonly used in railway stations, bus terminals, and urban crosswalks. Manufactured for durability, they withstand heavy pedestrian traffic and harsh weather.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Tactile Tiles Specific Sections (2 sections) */}
          {tactileTilesSections.map((tile, idx) => (
            <section key={idx} className={`py-24 border-b border-gray-100 ${idx === 1 ? 'bg-[#f9f9f9]' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col gap-16 items-start ${idx === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                  {/* Left Column: Specs Table */}
                  <div className="w-full lg:w-1/2">
                    <div className="w-full h-full flex flex-col justify-center max-w-xl">
                      <h3 className="font-display font-900 text-2xl text-[#222] mb-6 uppercase tracking-wider text-center lg:text-left">
                        Specifications
                      </h3>
                      <div className="w-full border-t border-l border-r border-gray-200 bg-white shadow-sm">
                        <table className="w-full text-left font-body text-[13px] md:text-sm text-gray-600">
                          <tbody>
                            {[
                              { label: 'Product Type', value: 'Precast Concrete Tactile Tile' },
                              { label: 'Material', value: 'High-strength Concrete' },

                              { label: "Grade", value: "M-25 to M-50" },
                              { label: 'Size', value: tile.size },
                              { label: 'Dimensions', value: 'Length X Breadth X Thickness' },
                              { label: 'Tiles per sq. m', value: tile.tilesPerSqM },
                              { label: 'Application', value: 'Visual/tactile guidance, platforms, walkways' },
                              { label: 'Finish', value: 'Textured / Blister / Directional' }
                            ].map((spec, i) => (
                              <tr key={i} className="border-b border-gray-200">
                                <td className="py-4 px-5 font-bold w-[40%] text-[#111] border-r border-gray-200">{spec.label}</td>
                                <td className="py-4 px-5 text-gray-600">{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dimensional Image */}
                  <div className="w-full lg:w-1/2 lg:mt-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tile.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="w-full h-auto bg-[#f4f4f4] border border-gray-200 relative overflow-hidden flex items-center justify-center p-2 md:p-3 cursor-pointer group"
                          onClick={() => setLightboxImage(img)}
                        >
                          <img src={img} alt={`${tile.title} ${imgIdx + 1}`} className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </section>
          ))}
        </>
      )}

      {/* =========================================
          WORKFLOW SECTION
          ========================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Column */}
            <div className="w-full lg:w-1/3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-[#0066B3]"></div>
                <span className="font-mono text-xs uppercase tracking-widest text-gray-600 font-bold">Simple & Transparent</span>
              </div>
              <h2 className="font-display font-900 text-4xl text-[#222] mb-8">Our proven workflow</h2>
            </div>

            {/* Right Column: Timeline */}
            <div className="w-full lg:w-2/3 relative mt-12 lg:mt-0">
              {/* Connecting Line */}
              <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0 hidden md:block"></div>

              <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#111] flex justify-center items-center text-white mb-4 shadow-lg">
                    <span className="font-display font-900 text-xl">1</span>
                  </div>
                  <h4 className="font-display font-bold text-sm uppercase text-[#222] text-center">Design and planning</h4>
                </div>
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#111] flex justify-center items-center text-[#111] mb-4 shadow-lg">
                    <span className="font-display font-900 text-xl">2</span>
                  </div>
                  <h4 className="font-display font-bold text-sm uppercase text-[#222] text-center">Precision machining</h4>
                </div>
                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#0066B3] flex justify-center items-center text-white mb-4 shadow-lg shadow-blue-500/30">
                    <span className="font-display font-900 text-xl">3</span>
                  </div>
                  <h4 className="font-display font-bold text-sm uppercase text-[#222] text-center">Final inspection<br />& dispatch</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            <button
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-[110]"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>

            {activeGallery.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-[110] bg-black/50 p-2 rounded-full hover:bg-black/80"
                  onClick={handlePrevImage}
                >
                  <ChevronLeft size={36} />
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-[110] bg-black/50 p-2 rounded-full hover:bg-black/80"
                  onClick={handleNextImage}
                >
                  <ChevronRight size={36} />
                </button>
              </>
            )}

            <motion.img
              key={lightboxImage}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightboxImage}
              alt="Expanded view"
              className="max-w-full md:max-w-5xl max-h-[85vh] w-auto h-auto object-contain bg-[#f4f4f4] rounded-xl shadow-2xl p-2 md:p-8 cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />

    </div>
  );
}
