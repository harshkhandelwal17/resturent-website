const menu = [
  {
    category: "Thali Special",
    categoryImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    items: [
      {
        name: "Daily Normal Thali",
        price: 78,
        description: "Dal, Rice, Raita, Papad, Sabji, Pickle, Salad, 4 Tawa Roti / 3 Tandoori",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
      },
      {
        name: "Daily Special Thali",
        price: 100,
        description: "Paneer Sabji, Raita, Papad, Dal, Rice, Pickle, Salad, 4 Tawa Roti / 3 Tandoori",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
      },
      {
        name: "Special Meal",
        price: 150,
        description: "Paneer Sabji, Seasonal Veg, Dal, Rice, Pickle, Salad, 3 Tawa Roti / 3 Tandoori",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
      },
      {
        name: "Super Special Meal",
        price: 220,
        description: "Paneer, Seasonal Veg, Dal, Rice, Pickle, Papad, Raita, Salad, 3 Tawa Roti / 1 Laccha Paratha / 1 Butter Naan",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "Combo Special",
    categoryImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    items: [
      { 
        name: "Dal, Raita with Jeera Rice", 
        price: 80,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop"
      },
      { 
        name: "Chole Chawal", 
        price: 80,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
      },
      { 
        name: "Kadhi Chawal, Dal Chawal", 
        price: 60,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
      },
      { 
        name: "Butter Paneer, Aloo Sabji, Bundi Raita, Laccha Paratha, Garlic Naan", 
        price: 170,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
      },
      { 
        name: "Dal Makhani Wall with Cheese Garlic Naan", 
        price: 160,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
      },
    ]
  },
  {
    category: "Paratha",
    categoryImage: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=300&fit=crop",
    items: [
      { 
        name: "Aloo Paratha", 
        price: 35,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Tandoor Aloo Paratha", 
        price: 40,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Gobi Paratha", 
        price: 40,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Tandoor Gobhi Paratha", 
        price: 50,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Mix Veg Paratha", 
        price: 60,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Paneer Onion Paratha", 
        price: 80,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Paneer Bhurji Paratha", 
        price: 80,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Cheese Chilli Onion Paratha", 
        price: 85,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Corn Cheese Paratha", 
        price: 80,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Corn Cheese Tandoor", 
        price: 80,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
    ]
  },
  {
    category: "Chinese",
    categoryImage: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=300&fit=crop",
    items: [
      { 
        name: "Hakka Noodles", 
        price: 60,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop"
      },
      { 
        name: "Veg Noodles", 
        price: 80,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop"
      },
      { 
        name: "Schezwan Noodles", 
        price: 90,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop"
      },
      { 
        name: "Fried Rice", 
        price: 100,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
      },
      { 
        name: "Veg Fried Rice", 
        price: 120,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
      },
      { 
        name: "Schezwan Fried Rice", 
        price: 150,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
      },
      { 
        name: "Fried Rice Triple", 
        price: 160,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
      },
      { 
        name: "Paneer with Manchurian", 
        price: 150,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop"
      },
      { 
        name: "Veg Manchurian", 
        price: 120,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop"
      },
      { 
        name: "Crispy Corn", 
        price: 100,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop"
      },
      { 
        name: "Crispy Honey Chilli Potato", 
        price: 180,
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop"
      },
    ]
  },
  {
    category: "Tikka & Kabab (6 Pcs)",
    categoryImage: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=300&fit=crop",
    items: [
      { 
        name: "Paneer Tikka", 
        price: 180,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Achari Paneer Tikka", 
        price: 180,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Mint Pudina Tikka", 
        price: 200,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Hara Bhara Kabab", 
        price: 160,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
      { 
        name: "Dahi Kabab", 
        price: 160,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop"
      },
    ]
  },
  {
    category: "Sunday Special",
    categoryImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop",
    items: [
      { 
        name: "Dal Bafle", 
        price: 110, 
        description: "2 Bafle, Dal, Rice, Raita, Kadi, Sabji, Salad, Green Red Chutney",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
      }
    ]
  },
  {
    category: "Coffee",
    categoryImage: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=300&fit=crop",
    items: [
      { 
        name: "Classic Cold Coffee", 
        price: 100,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
      },
      { 
        name: "Hazelnut Cold Coffee", 
        price: 120,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
      },
      { 
        name: "Caramel Cold Coffee", 
        price: 150,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
      },
    ]
  },
  // {
  //   category: "Shake",
  //   categoryImage: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=300&fit=crop",
  //   items: [
  //     { name: "Oreo Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
  //     { name: "KitKat Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
  //     { name: "Banana Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
  //     { name: "Strawberry Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
  //     { name: "Vanilla Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
  //     { name: "Mango Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
  //     { name: "Chocolate Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
  //     { name: "Butterscotch Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" },
  //     { name: "Anjeer Badam Shake", price: 120, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop" }
  //   ]
  // },
  {
    category: "Fries",
    categoryImage: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=500&h=300&fit=crop",
    items: [
      { 
        name: "Salted Fries", 
        price: 80,
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop"
      },
      { 
        name: "Peri Peri Fries", 
        price: 100,
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop"
      },
      { 
        name: "Masala Fries", 
        price: 100,
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop"
      },
      { 
        name: "Cheese Overloaded Fries", 
        price: 150,
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop"
      },
    ]
  }
];

export default menu;