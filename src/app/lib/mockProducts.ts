export type Product = {
id: string;
name: string;
category: string;
categoryTag: string;
price: number;
rating: number;
reviewCount: number;
imageUrl: string;
};


export const mockProducts: Product[] = [
{
id: 'p1',
name: 'Phone Stand',
category: 'Accessories',
categoryTag: 'Other',
price: 29.9,
rating: 5.0,
reviewCount: 1200,
imageUrl: '/images/stand.jfif',
},
{
id: 'p2',
name: 'Detergent',
category: 'Audio',
categoryTag: 'Music',
price: 149.5,
rating: 4.8,
reviewCount: 540,
imageUrl: '/images/detergent.jfif',
},
{
id: 'p3',
name: 'fan',
category: 'Carry',
categoryTag: 'Other',
price: 39.0,
rating: 4.9,
reviewCount: 230,
imageUrl: '/images/fan.jfif',
},
{
id: 'p4',
name: 'fan',
category: 'Carry',
categoryTag: 'Other',
price: 39.0,
rating: 4.9,
reviewCount: 230,
imageUrl: '/images/fan.jfif',
},
{
id: 'p5',
name: 'Fan',
category: 'Carry',
categoryTag: 'Other',
price: 39.0,
rating: 4.9,
reviewCount: 230,
imageUrl: '/images/fan.jfif',
},
{
id: 'p6',
name: 'fan',
category: 'Carry',
categoryTag: 'Other',
price: 39.0,
rating: 4.9,
reviewCount: 230,
imageUrl: '/images/fan.jfif',
},
];

export interface Product_2 {
  id: number;
  name: string;
  price: string;
  imageUrl: string[]; // supports multiple for products like Carabiner Set
  isLimited: boolean;
  isFavorited: boolean;
  category?: string;
  categoryTag?: string;
}

export const mockProducts_2: Product_2[] = [
  // Additional 40 products
  { id: 4, name: "Indomie Instant Noodles (5 Pack)", price: "₦1,500", imageUrl: ["/images/indomie.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Noodles" },
  { id: 5, name: "Golden Morn Cereal", price: "₦1,200", imageUrl: ["/images/golden-morn.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Cereal" },
  { id: 6, name: "Mama’s Chicken Stock Cube (12 pcs)", price: "₦800", imageUrl: ["/images/maggi.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Seasoning" },
  { id: 7, name: "Peak Milk (6 Tins)", price: "₦4,500", imageUrl: ["/images/peak.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Dairy" },
  { id: 8, name: "Sunlight Dish Wash (750ml)", price: "₦850", imageUrl: ["/images/sunlight.jfif"], isLimited: false, isFavorited: false, category: "Household", categoryTag: "Cleaning" },
  { id: 9, name: "Omo Washing Powder (1kg)", price: "₦1,600", imageUrl: ["/images/omo.jfif"], isLimited: false, isFavorited: false, category: "Household", categoryTag: "Laundry" },
  { id: 10, name: "Dettol Hand Wash (250ml)", price: "₦950", imageUrl: ["/images/dettol.jfif"], isLimited: false, isFavorited: false, category: "Personal Care", categoryTag: "Hand Wash" },
  { id: 11, name: "Closeup Toothpaste (200g)", price: "₦1,200", imageUrl: ["/images/closeup.jfif"], isLimited: false, isFavorited: false, category: "Personal Care", categoryTag: "Oral Care" },
  { id: 12, name: "Pampers Baby Diapers (M, 30pcs)", price: "₦8,000", imageUrl: ["/images/pampers.jfif"], isLimited: false, isFavorited: false, category: "Personal Care", categoryTag: "Baby Care" },
  { id: 13, name: "Sunflower Oil (1L)", price: "₦1,800", imageUrl: ["/images/sunflower.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Cooking Oil" },
  { id: 14, name: "Tomatoes (1kg)", price: "₦800", imageUrl: ["/images/tomatoes.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" },
  { id: 15, name: "Onions (1kg)", price: "₦1,000", imageUrl: ["/images/onions.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" },
  { id: 16, name: "Royal Gala Apples (1kg)", price: "₦2,500", imageUrl: ["/images/gala.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Fruits" },
  { id: 17, name: "Bananas (1 Dozen)", price: "₦1,500", imageUrl: ["/images/bananas.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Fruits" },
  { id: 18, name: "Chin Chin (500g)", price: "₦1,200", imageUrl: ["/images/chinchin.jpg"], isLimited: false, isFavorited: false, category: "Snacks", categoryTag: "Bakery" },
  { id: 19, name: "Plantain Chips (250g)", price: "₦900", imageUrl: ["/images/plantain-chips.jfif"], isLimited: false, isFavorited: false, category: "Snacks", categoryTag: "Chips" },
  { id: 20, name: "Bournvita (400g)", price: "₦1,800", imageUrl: ["/images/bournvita.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Malt Drink" },
  { id: 21, name: "Coca-Cola (12 Bottles)", price: "₦4,500", imageUrl: ["/images/coke.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Soft Drinks" },
  { id: 22, name: "Fanta Orange (12 Bottles)", price: "₦4,500", imageUrl: ["/images/fanta.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Soft Drinks" },
  { id: 23, name: "Eva Drinking Water (6 Bottles)", price: "₦1,000", imageUrl: ["/images/eva-water.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Water" },
  { id: 24, name: "Peak Cheese (200g)", price: "₦950", imageUrl: ["/images/cheese.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Dairy" },
  { id: 25, name: "Titus Sardine (125g)", price: "₦600", imageUrl: ["/images/titus.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Canned Food" },
  { id: 26, name: "Lipton Tea Bags (50pcs)", price: "₦1,200", imageUrl: ["/images/lipton.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Beverage" },
  { id: 27, name: "Coke (1 Bottles)", price: "₦5,000", imageUrl: ["/images/coke.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Alcohol" },
  { id: 28, name: "fanta (1 Bottles)", price: "₦7,000", imageUrl: ["/images/fanta.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Alcohol" },
  { id: 29, name: "Pepsi (12 Bottles)", price: "₦4,500", imageUrl: ["/images/pepsi.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Soft Drinks" },
  { id: 30, name: "Maggi Chicken Cube (12 pcs)", price: "₦800", imageUrl: ["/images/maggi.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Seasoning" },
  { id: 31, name: "White Rice (10kg)", price: "₦8,500", imageUrl: ["/images/bag-of-rice.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Grains" },
  { id: 32, name: "Beans (5kg)", price: "₦6,500", imageUrl: ["/images/beans.jpg"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Legumes" },
  { id: 33, name: "Garri (5kg)", price: "₦3,000", imageUrl: ["/images/garri.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Grains" },
  { id: 34, name: "Yam (5kg)", price: "₦4,500", imageUrl: ["/images/yam.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Tubers" },
  { id: 35, name: "Sweet Potatoes (5kg)", price: "₦3,500", imageUrl: ["/images/sweet-potatoes.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Tubers" },
  { id: 36, name: "Irish Potatoes (5kg)", price: "₦4,000", imageUrl: ["/images/irish potatoes.jiff"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Tubers" },
  { id: 37, name: "Milo (400g)", price: "₦2,000", imageUrl: ["/images/milo.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Malt Drink" },
  { id: 38, name: "Nutella (400g)", price: "₦3,500", imageUrl: ["/images/nutella.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Spread" },
  { id: 39, name: "Lactose-Free Milk (1L)", price: "₦1,500", imageUrl: ["/images/milk.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Dairy" },
  { id: 40, name: "Cheddar Cheese (200g)", price: "₦1,200", imageUrl: ["/images/cheese.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Dairy" },
  { id: 41, name: "Nigerian Beef Suya (500g)", price: "₦3,000", imageUrl: ["/images/kilishi.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Meat" },
  { id: 42, name: "Chicken Drumsticks (1kg)", price: "₦2,500", imageUrl: ["/images/chicken.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Meat" },
  { id: 43, name: "Fish (Tilapia, 1kg)", price: "₦3,500", imageUrl: ["/images/fish.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Seafood" },
  { id: 44, name: "Vegetable Oil (5L)", price: "₦5,500", imageUrl: ["/images/vegetable oil.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Cooking Oil" },
  { id: 45, name: "Palm Oil (5L)", price: "₦4,500", imageUrl: ["/images/palm oil.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Cooking Oil" },
  { id: 46, name: "Fresh Tomatoes (1kg)", price: "₦800", imageUrl: ["/images/tomatoes.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" },
  { id: 47, name: "Fresh Onions (1kg)", price: "₦1,000", imageUrl: ["/images/onions.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" },
  { id: 48, name: "Cucumber (1kg)", price: "₦900", imageUrl: ["/images/cucumber.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" },
  { id: 49, name: "Carrots (1kg)", price: "₦1,200", imageUrl: ["/images/carrots.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" },
  { id: 50, name: "Lettuce (1 Head)", price: "₦700", imageUrl: ["/images/lettuce.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" }, // … products 4–23 …
  { id: 51, name: "Indomie Noodles (5 Pack)", price: "₦1500", imageUrl: ["/images/indomie.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Noodles" },
  { id: 52, name: "Golden Morn Cereal", price: "₦1200", imageUrl: ["/images/golden-morn.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Cereal" },
  { id: 53, name: "Peak Milk (6 Tins)", price: "₦4500", imageUrl: ["/images/peak.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Dairy" },
  { id: 54, name: "Mama’s Chicken Stock Cube (12 pcs)", price: "₦800", imageUrl: ["/images/chicken.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Seasoning" },
  { id: 55, name: "Coca-Cola (12 Bottles)", price: "₦4500", imageUrl: ["/images/coke.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Soft Drinks" },
  { id: 56, name: "Eva Drinking Water (6 Bottles)", price: "₦1000", imageUrl: ["/images/eva-water.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Water" },
  { id: 57, name: "Fanta Orange (12 Bottles)", price: "₦4500", imageUrl: ["/images/fanta.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Soft Drinks" },
  { id: 58, name: "Sunlight Dish Wash (750ml)", price: "₦850", imageUrl: ["/images/sunlight.jfif"], isLimited: false, isFavorited: false, category: "Household", categoryTag: "Cleaning" },
  { id: 59, name: "Omo Washing Powder (1kg)", price: "₦1600", imageUrl: ["/images/omo.jfif"], isLimited: false, isFavorited: false, category: "Household", categoryTag: "Laundry" },
  { id: 60, name: "Dettol Hand Wash (250ml)", price: "₦950", imageUrl: ["/images/dettol.jfif"], isLimited: false, isFavorited: false, category: "Personal Care", categoryTag: "Hand Wash" },
  { id: 61, name: "Closeup Toothpaste (200g)", price: "₦1200", imageUrl: ["/images/closeup.jfif"], isLimited: false, isFavorited: false, category: "Personal Care", categoryTag: "Oral Care" },
  { id: 62, name: "Pampers Baby Diapers (M, 30pcs)", price: "₦8000", imageUrl: ["/images/pampers.jfif"], isLimited: false, isFavorited: false, category: "Personal Care", categoryTag: "Baby Care" },
  { id: 63, name: "Peak Cheese (200g)", price: "₦950", imageUrl: ["/images/cheese.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Dairy" },
  { id: 64, name: "Sunflower Oil (1L)", price: "₦1800", imageUrl: ["/images/sunflower-oil.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Cooking Oil" },
  { id: 65, name: "Indomie Chicken Flavour (1 Pack)", price: "₦300", imageUrl: ["/images/indomie.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Noodles" },
  { id: 66, name: "Royal Gala Apples (1kg)", price: "₦2500", imageUrl: ["/images/gala.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Fruits" },
  { id: 67, name: "Bananas (1 Dozen)", price: "₦1500", imageUrl: ["/images/bananas.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Fruits" },
  { id: 68, name: "Tomatoes (1kg)", price: "₦800", imageUrl: ["/images/tomatoes.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" },
  { id: 69, name: "Onions (1kg)", price: "₦1000", imageUrl: ["/images/onions.jfif"], isLimited: false, isFavorited: false, category: "Groceries", categoryTag: "Vegetables" },
  { id: 70, name: "Chin Chin (500g)", price: "₦1200", imageUrl: ["/images/chinchin.jfif"], isLimited: false, isFavorited: false, category: "Snacks", categoryTag: "Bakery" },
  { id: 71, name: "Plantain Chips (250g)", price: "₦900", imageUrl: ["/images/plantain-chips.jfif"], isLimited: false, isFavorited: false, category: "Snacks", categoryTag: "Chips" },
  { id: 72, name: "Bournvita (400g)", price: "₦1800", imageUrl: ["/images/bournvita.jfif"], isLimited: false, isFavorited: false, category: "Beverages", categoryTag: "Malt Drink" },
  // … continue with similar pattern up to id: 123 to reach 100+ products across 7 categories …
];
