// Tesla Model Data for React Context/Components
export const teslaModels = [
  {
    name: "Model S",
    basePrice: 79990,
    description: "Premium luxury sedan with cutting-edge technology and impressive performance",
    imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1757274358/pplx_project_search_images/42bc768e171d68355f7f013100c40c5ba7bd77c5.png",
    options: {
      battery: [
        { type: "Standard Range", price: 0 },
        { type: "Long Range", price: 15000 },
        { type: "Plaid", price: 35000 }
      ],
      color: [
        { name: "Pearl White Multi-Coat", price: 0, imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1757274358/pplx_project_search_images/42bc768e171d68355f7f013100c40c5ba7bd77c5.png" },
        { name: "Deep Blue Metallic", price: 1500, imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1758387756/pplx_project_search_images/f55e44b31440c247381c11ded7179896a4c1c898.png" },
        { name: "Red Multi-Coat", price: 2500, imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1758387756/pplx_project_search_images/e38b0b6b5049388678a77c6f17ab07c492d5b85e.png" },
        { name: "Midnight Silver Metallic", price: 1500, imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1758387756/pplx_project_search_images/e6a798ff3aa72a33c8bb54d1c72fc6a7f3b79bec.png" }
      ],
      wheels: [
        { name: "19-inch Tempest", price: 0 },
        { name: "21-inch Arachnid", price: 4500 }
      ],
      interior: [
        { name: "All Black", price: 0 },
        { name: "Black and White", price: 2000 }
      ]
    }
  },
  {
    name: "Model 3",
    basePrice: 42490,
    description: "Affordable electric sedan with exceptional range and performance",
    imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1758387756/pplx_project_search_images/e38b0b6b5049388678a77c6f17ab07c492d5b85e.png",
    options: {
      battery: [
        { type: "Rear-Wheel Drive", price: 0 },
        { type: "Long Range AWD", price: 5000 },
        { type: "Performance AWD", price: 12500 }
      ],
      color: [
        { name: "Pearl White Multi-Coat", price: 0, imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1758387756/pplx_project_search_images/e38b0b6b5049388678a77c6f17ab07c492d5b85e.png" },
        { name: "Deep Blue Metallic", price: 1000, imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1758387756/pplx_project_search_images/544edaf91f724d8850f3c499ea1720f2d9bfdbaa.png" },
        { name: "Red Multi-Coat", price: 2000, imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1758387756/pplx_project_search_images/e38b0b6b5049388678a77c6f17ab07c492d5b85e.png" },
        { name: "Midnight Silver Metallic", price: 1000, imageUrl: "https://pplx-res.cloudinary.com/image/upload/v1758387756/pplx_project_search_images/e6a798ff3aa72a33c8bb54d1c72fc6a7f3b79bec.png" }
      ],
      wheels: [
        { name: "18-inch Aero", price: 0 },
        { name: "19-inch Sport", price: 1500 }
      ],
      interior: [
        { name: "All Black", price: 0 },
        { name: "Black and White", price: 1500 }
      ]
    }
  }
];
