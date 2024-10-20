export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('inventories').del()
  
  // Inserts seed entries
  await knex('inventories').insert([
    {
      id: 1,
      warehouse_id: 1,
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'IN STOCK',
      quantity: 500,
    },
    {
      id: 2,
      warehouse_id: 1,
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 3,
      warehouse_id: 1,
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 4,
      warehouse_id: 1,
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'IN STOCK',
      quantity: 2000,
    },
    {
      id: 5,
      warehouse_id: 1,
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 4350,
    },
    {
      id: 6,
      warehouse_id: 1,
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'IN STOCK',
      quantity: 10000,
    },
    {
      id: 7,
      warehouse_id: 1,
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'IN STOCK',
      quantity: 800,
    },
    {
      id: 8,
      warehouse_id: 1,
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. breathable layers without a ton of vents and perforations.',
      category: 'Apparel',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 9,
      warehouse_id: 1,
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 10,
      warehouse_id: 1,
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 12500,
    },
    {
      id: 11,
      warehouse_id: 2,
      item_name: 'Monitor',
      description:
        'A 32" IPS LED ultrawide monitor, perfect for work or gaming.',
      category: 'Electronics',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 12,
      warehouse_id: 2,
      item_name: 'Backpack',
      description:
        'This sleek, 40L backpack is completely waterproof making it perfect for adventures or the daily commute.',
      category: 'Gear',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 13,
      warehouse_id: 2,
      item_name: 'T-Shirt',
      description:
        'Breathable, and made of 100% organic cotton, this is an essential piece for any wardrobe',
      category: 'Apparel',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 14,
      warehouse_id: 2,
      item_name: 'Belt',
      description:
        'Made from 100% full grain leather this belt will go with any dress or casual outfit.',
      category: 'Accessories',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 15,
      warehouse_id: 2,
      item_name: 'Toothpaste',
      description:
        'This toothpaste is specially formulated to protect enamel and whiten teeth with natural ingredients.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 4000,
    },
    {
      id: 16,
      warehouse_id: 2,
      item_name: 'Mouse',
      description:
        'With a 1-month battery life this mouse is perfect for travel and productivity.',
      category: 'Electronics',
      status: 'IN STOCK',
      quantity: 785,
    },
    {
      id: 17,
      warehouse_id: 2,
      item_name: 'Sleeping Bag',
      description:
        'This ultra-light sleeping bag is packed with an eco-friendly fill. Best used in spring or summer temperatures.',
      category: 'Gear',
      status: 'IN STOCK',
      quantity: 987,
    },
    {
      id: 18,
      warehouse_id: 2,
      item_name: 'Windbreaker',
      description:
        'Made from waterproof material, this windbreaker is best layered on top of a sweater to keep warm in inclement conditions.',
      category: 'Apparel',
      status: 'IN STOCK',
      quantity: 1185,
    },
    {
      id: 19,
      warehouse_id: 2,
      item_name: 'Water Bottle',
      description:
        'With a 1-litre capacity and BPA-free, this water-bottle is perfect for long days out.',
      category: 'Accessories',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 20,
      warehouse_id: 2,
      item_name: 'Protein Powder',
      description:
        '100% natural plant-based protein powder from organic ingredients.',
      category: 'Health',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 21,
      warehouse_id: 3,
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 22,
      warehouse_id: 3,
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'IN STOCK',
      quantity: 565,
    },
    {
      id: 23,
      warehouse_id: 3,
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'IN STOCK',
      quantity: 245,
    },
    {
      id: 24,
      warehouse_id: 3,
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 25,
      warehouse_id: 3,
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 209,
    },
    {
      id: 26,
      warehouse_id: 3,
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 27,
      warehouse_id: 3,
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 28,
      warehouse_id: 3,
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. ',
      category: 'Apparel',
      status: 'IN STOCK',
      quantity: 125,
    },
    {
      id: 29,
      warehouse_id: 3,
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'IN STOCK',
      quantity: 123,
    },
    {
      id: 30,
      warehouse_id: 3,
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 863,
    },
    {
      id: 31,
      warehouse_id: 4,
      item_name: 'Monitor',
      description:
        'A 32" IPS LED ultrawide monitor, perfect for work or gaming.',
      category: 'Electronics',
      status: 'IN STOCK',
      quantity: 50,
    },
    {
      id: 32,
      warehouse_id: 4,
      item_name: 'Backpack',
      description:
        'This sleek, 40L backpack is completely waterproof making it perfect for adventures or the daily commute.',
      category: 'Gear',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 33,
      warehouse_id: 4,
      item_name: 'T-Shirt',
      description:
        'Breathable, and made of 100% organic cotton, this is an essential piece for any wardrobe',
      category: 'Apparel',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 34,
      warehouse_id: 4,
      item_name: 'Belt',
      description:
        'Made from 100% full grain leather this belt will go with any dress or casual outfit.',
      category: 'Accessories',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 35,
      warehouse_id: 4,
      item_name: 'Toothpaste',
      description:
        'This toothpaste is specially formulated to protect enamel and whiten teeth with natural ingredients.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 400,
    },
    {
      id: 36,
      warehouse_id: 4,
      item_name: 'Mouse',
      description:
        'With a 1-month battery life this mouse is perfect for travel and productivity.',
      category: 'Electronics',
      status: 'IN STOCK',
      quantity: 1275,
    },
    {
      id: 37,
      warehouse_id: 4,
      item_name: 'Sleeping Bag',
      description:
        'This ultra-light sleeping bag is packed with an eco-friendly fill. Best used in spring or summer temperatures.',
      category: 'Gear',
      status: 'IN STOCK',
      quantity: 5672,
    },
    {
      id: 38,
      warehouse_id: 4,
      item_name: 'Windbreaker',
      description:
        'Made from waterproof material, this windbreaker is best layered on top of a sweater to keep warm in inclement conditions.',
      category: 'Apparel',
      status: 'IN STOCK',
      quantity: 374,
    },
    {
      id: 39,
      warehouse_id: 4,
      item_name: 'Water Bottle',
      description:
        'With a 1-litre capacity and BPA-free, this water-bottle is perfect for long days out.',
      category: 'Accessories',
      status: 'IN STOCK',
      quantity: 9875,
    },
    {
      id: 40,
      warehouse_id: 4,
      item_name: 'Protein Powder',
      description:
        '100% natural plant-based protein powder from organic ingredients.',
      category: 'Health',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 41,
      warehouse_id: 5,
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 42,
      warehouse_id: 5,
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'IN STOCK',
      quantity: 1895,
    },
    {
      id: 43,
      warehouse_id: 5,
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 44,
      warehouse_id: 5,
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 45,
      warehouse_id: 5,
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 4774,
    },
    {
      id: 46,
      warehouse_id: 5,
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'IN STOCK',
      quantity: 9872,
    },
    {
      id: 47,
      warehouse_id: 5,
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'IN STOCK',
      quantity: 3349,
    },
    {
      id: 48,
      warehouse_id: 5,
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. ',
      category: 'Apparel',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 49,
      warehouse_id: 5,
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'IN STOCK',
      quantity: 2997,
    },
    {
      id: 50,
      warehouse_id: 5,
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 51,
      warehouse_id: 6,
      item_name: 'Monitor',
      description:
        'A 32" IPS LED ultrawide monitor, perfect for work or gaming.',
      category: 'Electronics',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 52,
      warehouse_id: 6,
      item_name: 'Backpack',
      description:
        'This sleek, 40L backpack is completely waterproof making it perfect for adventures or the daily commute.',
      category: 'Gear',
      status: 'IN STOCK',
      quantity: 607,
    },
    {
      id: 53,
      warehouse_id: 6,
      item_name: 'T-Shirt',
      description:
        'Breathable, and made of 100% organic cotton, this is an essential piece for any wardrobe',
      category: 'Apparel',
      status: 'IN STOCK',
      quantity: 1205,
    },
    {
      id: 54,
      warehouse_id: 6,
      item_name: 'Belt',
      description:
        'Made from 100% full grain leather this belt will go with any dress or casual outfit.',
      category: 'Accessories',
      status: 'IN STOCK',
      quantity: 9863,
    },
    {
      id: 55,
      warehouse_id: 6,
      item_name: 'Toothpaste',
      description:
        'This toothpaste is specially formulated to protect enamel and whiten teeth with natural ingredients.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 1230,
    },
    {
      id: 56,
      warehouse_id: 6,
      item_name: 'Mouse',
      description:
        'With a 1-month battery life this mouse is perfect for travel and productivity.',
      category: 'Electronics',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 57,
      warehouse_id: 6,
      item_name: 'Sleeping Bag',
      description:
        'This ultra-light sleeping bag is packed with an eco-friendly fill. Best used in spring or summer temperatures.',
      category: 'Gear',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 58,
      warehouse_id: 6,
      item_name: 'Windbreaker',
      description:
        'Made from waterproof material, this windbreaker is best layered on top of a sweater to keep warm in inclement conditions.',
      category: 'Apparel',
      status: 'IN STOCK',
      quantity: 4508,
    },
    {
      id: 59,
      warehouse_id: 6,
      item_name: 'Water Bottle',
      description:
        'With a 1-litre capacity and BPA-free, this water-bottle is perfect for long days out.',
      category: 'Accessories',
      status: 'IN STOCK',
      quantity: 2500,
    },
    {
      id: 60,
      warehouse_id: 6,
      item_name: 'Protein Powder',
      description:
        '100% natural plant-based protein powder from organic ingredients.',
      category: 'Health',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 61,
      warehouse_id: 7,
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'IN STOCK',
      quantity: 1300,
    },
    {
      id: 62,
      warehouse_id: 7,
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 63,
      warehouse_id: 7,
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 64,
      warehouse_id: 7,
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'IN STOCK',
      quantity: 298,
    },
    {
      id: 65,
      warehouse_id: 7,
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'IN STOCK',
      quantity: 2888,
    },
    {
      id: 66,
      warehouse_id: 7,
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'IN STOCK',
      quantity: 983,
    },
    {
      id: 67,
      warehouse_id: 7,
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'IN STOCK',
      quantity: 1406,
    },
    {
      id: 68,
      warehouse_id: 7,
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. ',
      category: 'Apparel',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 69,
      warehouse_id: 7,
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
    {
      id: 70,
      warehouse_id: 7,
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'OUT OF STOCK',
      quantity: 0,
    },
  ]);
};