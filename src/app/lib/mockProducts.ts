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
id: 'p3',
name: 'Fan',
category: 'Carry',
categoryTag: 'Other',
price: 39.0,
rating: 4.9,
reviewCount: 230,
imageUrl: '/images/fan.jfif',
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
];