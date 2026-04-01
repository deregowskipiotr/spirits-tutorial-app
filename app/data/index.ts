import { GiBeerBottle, GiSnowBottle, GiGlassShot, GiChampagneCork } from "react-icons/gi";
import { LiaGlassWhiskeySolid } from "react-icons/lia";
import { MdOutlineLiquor } from "react-icons/md";

export  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Intention", href: "/#intention" },
    { name: "Hints", href: "/#hints" },
    { name: "Contact", href: "/#contact" },
    { name: "Spirits", href: "/spirits" },
  ];

  export const categories = [
  { 
    name: "Vodka", 
    slug: "vodka", 
    icon: GiGlassShot, 
    description: "Pure expression, crystalline clarity. The essence of the north, filtered through centuries of tradition." 
  },
  {
    name: "Whisky", 
    slug: "whisky", 
    icon: LiaGlassWhiskeySolid, 
    description: "Time, wood, and smoke. A conversation between the cask and the spirit that lasts decades." 
  },
  {
    name: "Gin", 
    slug: "gin", 
    icon: GiBeerBottle, 
    description: "Botanical alchemy. A complex landscape of juniper, herbs, and exotic aromatics." 
  },
  {
    name: "Rum", 
    slug: "rum", 
    icon: GiSnowBottle, 
    description: "Caribbean heritage. Tropical sweetness aging into deep, mahogany complexity." 
  },
  {
    name: "Champagne", 
    slug: "champagne", 
    icon: GiChampagneCork, 
    description: "The height of celebration. Effervescent elegance crafted in the heart of France." 
  },
  {
    name: "Liqueurs", 
    slug: "liqueurs", 
    icon: MdOutlineLiquor, 
    description: "Crafted complexity. The perfect marriage of spirits, sugar, and secret ingredients." 
  },
];  

 // Quotations data
  export const quotations = [
    {
      quote: "Whisky is liquid sunshine, a distillation of time, tradition, and the very soul of the Scottish Highlands.",
      author: "Angus MacLeod",
      title: "Master Distiller, Glenhaven Estate"
    },
    {
      quote: "In every bottle lies a story of patience, where years become seconds and wood becomes wisdom.",
      author: "Eleanor Davenport",
      title: "Keeper of the Quaich"
    }
  ];

  // data/index.ts

export interface VodkaProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  sections: {
    id: number;
    text: string;
    image: string;
    imagePosition: 'left' | 'right';
  }[];
}

export const vodkaData: Record<string, VodkaProduct> = {
  premium: {
    id: 'premium',
    title: 'Premium',
    slug: 'premium',
    description: 'Experience the pinnacle of vodka craftsmanship. Each bottle represents uncompromising quality and exceptional smoothness that defines true luxury.',
    sections: [
      {
        id: 1,
        text: 'Crafted from the finest winter wheat grown in the pristine fields of Northern Europe, our Premium vodka undergoes a meticulous five-column distillation process. This careful method removes impurities while preserving the delicate grain character, resulting in an exceptionally pure spirit with a velvety mouthfeel and subtle notes of vanilla and white pepper.',
        image: '/images/vodka/premium-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The signature filtration process sets our Premium vodka apart. Using a proprietary blend of activated charcoal and diamond dust, the spirit is filtered seven times over 72 hours. This extraordinary attention to detail creates an unmatched purity with a crystalline clarity that captivates both connoisseurs and casual enthusiasts alike.',
        image: '/images/vodka/premium-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Each batch rests for a minimum of six months in temperature-controlled stainless steel tanks, allowing the molecules to achieve perfect harmony. The result is a remarkably smooth vodka with a clean finish, subtle sweetness, and an elegant complexity that makes it the definitive choice for discerning palates.',
        image: '/images/vodka/premium-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  standard: {
    id: 'standard',
    title: 'Standard',
    slug: 'standard',
    description: 'A classic expression of traditional vodka craftsmanship. Balanced, versatile, and refined for any occasion.',
    sections: [
      {
        id: 1,
        text: 'Our Standard vodka honors traditional distillation methods passed down through generations. Using locally sourced grain and pure spring water, this spirit undergoes triple distillation to achieve its characteristic clean profile. The result is a versatile vodka with a crisp character and subtle grain sweetness that performs beautifully in any cocktail.',
        image: '/images/vodka/standard-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'What makes this expression truly special is its remarkable balance. The filtration process employs natural charcoal filters that polish the spirit without stripping away its essential character. This thoughtful approach yields a vodka with gentle notes of fresh bread, white flowers, and a whisper of citrus that lingers on the palate.',
        image: '/images/vodka/standard-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Versatility defines the Standard Collection. Whether enjoyed neat, on the rocks, or as the foundation for classic cocktails like the Martini or Moscow Mule, this vodka delivers consistent quality and smoothness. Its approachable character makes it an ideal choice for both everyday enjoyment and sophisticated gatherings.',
        image: '/images/vodka/standard-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  flavored: {
    id: 'flavored',
    title: 'Flavored',
    slug: 'flavored',
    description: 'Naturally infused with the finest botanicals and fruits. A journey through innovative taste experiences.',
    sections: [
      {
        id: 1,
        text: 'Our Flavored Collection begins with our premium vodka base, then undergoes a natural infusion process using real fruits and botanicals. No artificial flavors or sweeteners are ever used. The raspberry expression captures the essence of sun-ripened berries, offering bright, authentic fruit notes that dance on the tongue without overwhelming the spirit\'s character.',
        image: '/images/vodka/flavored-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The cucumber mint variation represents the pinnacle of refreshing sophistication. Hand-selected cucumbers and fresh mint leaves are cold-infused for precisely 48 hours, extracting vibrant flavors while maintaining the vodka\'s crisp integrity. This expression delivers a cooling, garden-fresh profile that elevates any cocktail to new heights of elegance.',
        image: '/images/vodka/flavored-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'For those seeking bold innovation, our citrus medley combines blood orange, yuzu, and bergamot for a complex flavor profile. Each fruit is individually infused to preserve its unique characteristics before blending to achieve perfect harmony. This sophisticated expression proves that flavored vodka can be both approachable and exceptionally refined.',
        image: '/images/vodka/flavored-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  unique: {
    id: 'unique',
    title: 'Unique',
    slug: 'unique',
    description: 'Limited edition expressions that push boundaries. For the adventurous spirit seeking something extraordinary.',
    sections: [
      {
        id: 1,
        text: 'Our Unique Collection showcases experimental techniques and rare ingredients. The first expression in this series features vodka aged in rare Japanese Mizunara oak casks for six months. This unconventional aging process imparts exotic notes of sandalwood, coconut, and Japanese incense, creating a spirit that defies traditional vodka categorization.',
        image: '/images/vodka/unique-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The second release explores the concept of terroir through single-estate distillation. Sourced from a single family farm in the French Alps, these potatoes are harvested at peak ripeness and distilled within 24 hours. The resulting vodka carries the unmistakable signature of alpine mineral water and volcanic soil, offering a profound sense of place rarely found in spirits.',
        image: '/images/vodka/unique-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Our most daring creation incorporates liquid diamonds through a proprietary suspension process that creates a subtle shimmer and enhanced mouthfeel. Combined with rare saffron from Kashmir and hand-harvested sea salt, this limited release represents the absolute frontier of vodka innovation. Only 500 bottles produced annually.',
        image: '/images/vodka/unique-3.jpg',
        imagePosition: 'right'
      }
    ]
  }
};

// data/index.ts

// ... existing vodkaData

export interface WhiskyProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  sections: {
    id: number;
    text: string;
    image: string;
    imagePosition: 'left' | 'right';
  }[];
}

export const whiskyData: Record<string, WhiskyProduct> = {
  bourbon: {
    id: 'bourbon',
    title: 'Bourbon',
    slug: 'bourbon',
    description: 'Discover the unmistakable sweetness of American craftsmanship. Aged in charred new oak barrels, our bourbon delivers rich notes of caramel, vanilla, and warm spice.',
    sections: [
      {
        id: 1,
        text: 'Crafted using the traditional sour mash process, our Bourbon begins with a carefully selected mash bill of at least 51% corn, complemented by rye and malted barley. This precise combination creates a robust foundation with natural sweetness and complexity. Distilled in copper pot stills and aged in new American white oak barrels that have been charred to level 4, the spirit extracts maximum flavor from the wood.',
        image: '/images/whisky/bourbon-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The Kentucky climate plays a crucial role in our aging process. With dramatic seasonal temperature variations, the bourbon expands into the wood during summer and contracts in winter, creating a unique flavor profile. After a minimum of 6 years in the barrel, our bourbon develops deep notes of toasted oak, vanilla bean, dried cherry, and a signature warm finish with hints of cinnamon and nutmeg.',
        image: '/images/whisky/bourbon-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Each batch is bottled at 92 proof to preserve the integrity of the spirit. The result is a remarkably balanced bourbon with a rich amber color, aromas of caramelized sugar and baking spices, and a long, smooth finish that lingers with notes of honey and toasted nuts. Perfect for sipping neat or elevating classic cocktails like the Old Fashioned.',
        image: '/images/whisky/bourbon-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  scotch: {
    id: 'scotch',
    title: 'Scotch',
    slug: 'scotch',
    description: 'Embrace the heritage of Scotland with our single malt Scotch whisky. Smoky, complex, and deeply rooted in centuries of tradition.',
    sections: [
      {
        id: 1,
        text: 'Sourced from the legendary Speyside region, our single malt Scotch is crafted from 100% malted barley and pure spring water from the River Spey. The barley is dried over peat fires, imparting the distinctive smoky character that defines authentic Scotch whisky. Distilled twice in traditional copper pot stills, the spirit emerges with remarkable purity and depth.',
        image: '/images/whisky/scotch-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'Aged for a minimum of 12 years in a combination of ex-bourbon and Oloroso sherry casks, our Scotch develops extraordinary complexity. The bourbon casks contribute notes of vanilla and honey, while the sherry casks add layers of dried fruit, dark chocolate, and subtle spice. The result is a perfectly balanced whisky with aromas of heather honey, sea salt, and gentle smoke.',
        image: '/images/whisky/scotch-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'On the palate, expect a harmonious blend of peat smoke, malt sweetness, and coastal minerality. The finish is long and warming, with lingering notes of oak spice, toasted almonds, and a whisper of brine. This expression captures the essence of the Scottish Highlands and represents the pinnacle of traditional whisky making.',
        image: '/images/whisky/scotch-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  irish: {
    id: 'irish',
    title: 'Irish',
    slug: 'irish',
    description: 'Experience the smooth, approachable character of Irish whiskey. Triple distilled for unparalleled smoothness and light, fruity elegance.',
    sections: [
      {
        id: 1,
        text: 'Our Irish whiskey honors a tradition dating back centuries. Using a mash bill of malted and unmalted barley, we triple distill our spirit in copper pot stills to achieve exceptional smoothness. This unique process removes impurities while preserving the delicate grain character, resulting in a light, approachable whiskey that is distinctly Irish.',
        image: '/images/whisky/irish-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The aging process takes place in a combination of ex-bourbon and ex-sherry casks, with the whiskey maturing for a minimum of 8 years. The bourbon casks contribute notes of vanilla and coconut, while the sherry casks add layers of dried fruit and subtle spice. The Irish climate, with its cool temperatures and high humidity, allows for a slow, graceful aging process.',
        image: '/images/whisky/irish-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The final product is exceptionally smooth with notes of green apple, honey, and white flowers. On the palate, you\'ll discover flavors of shortbread, vanilla custard, and a hint of citrus zest. The finish is clean and gentle, with lingering sweetness that makes this whiskey perfect for both newcomers and connoisseurs alike.',
        image: '/images/whisky/irish-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  japanese: {
    id: 'japanese',
    title: 'Japanese',
    slug: 'japanese',
    description: 'Discover the precision and artistry of Japanese whisky. Meticulously crafted with unparalleled attention to detail.',
    sections: [
      {
        id: 1,
        text: 'Inspired by Scottish traditions but refined with Japanese precision, our Japanese whisky represents the pinnacle of craftsmanship. We source the finest barley and pure water from the Japanese Alps, then distill using a combination of traditional pot stills and unique Japanese-made column stills. This dual approach allows us to create a spirit of exceptional purity and complexity.',
        image: '/images/whisky/japanese-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'Our master blender selects from a diverse range of cask types, including rare Japanese Mizunara oak, American white oak, and European sherry butts. The whisky ages for a minimum of 10 years in the unique climate of Japan, where temperature and humidity variations differ dramatically from Western whisky regions. The Mizunara oak in particular imparts exotic notes of sandalwood, incense, and coconut.',
        image: '/images/whisky/japanese-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The result is an extraordinarily balanced whisky with aromas of pear, honey, and delicate floral notes. On the palate, expect flavors of candied orange, almond, and a hint of white pepper, leading to an elegant, lingering finish. This expression embodies the Japanese philosophy of "wa" - harmony - where each element works in perfect balance to create something greater than the sum of its parts.',
        image: '/images/whisky/japanese-3.jpg',
        imagePosition: 'right'
      }
    ]
  }
};

// data/index.ts

// ... existing vodkaData and whiskyData

export interface RumProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  sections: {
    id: number;
    text: string;
    image: string;
    imagePosition: 'left' | 'right';
  }[];
}

export const rumData: Record<string, RumProduct> = {
  premium: {
    id: 'premium',
    title: 'Premium',
    slug: 'premium',
    description: 'Experience the pinnacle of rum craftsmanship. Aged for exceptional smoothness and complexity, our premium rum represents the ultimate expression of Caribbean heritage.',
    sections: [
      {
        id: 1,
        text: 'Crafted from the finest sugarcane grown in the volcanic soils of Barbados, our Premium rum begins with freshly pressed cane juice rather than molasses. This traditional method, known as "agricole" style, preserves the authentic character of the sugarcane, resulting in a remarkably pure spirit with distinctive grassy and floral notes rarely found in modern rums.',
        image: '/images/rum/premium-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'Aged for a minimum of 15 years in a combination of ex-bourbon and French oak casks, this expression develops extraordinary depth and complexity. The tropical climate accelerates the aging process, with angels sharing nearly 10% of each barrel annually. This intense interaction with the wood creates rich notes of toffee, dried tropical fruits, dark chocolate, and a subtle hint of tobacco.',
        image: '/images/rum/premium-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The final blend is a masterpiece of balance, combining rums from different barrel types and ages to achieve perfect harmony. On the palate, expect layers of caramelized banana, vanilla bean, orange zest, and warm baking spices. The finish is exceptionally long and elegant, with lingering notes of oak, honey, and a whisper of sea salt.',
        image: '/images/rum/premium-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  white: {
    id: 'white',
    title: 'White',
    slug: 'white',
    description: 'Clean, crisp, and versatile. Our white rum captures the pure essence of sugarcane with exceptional clarity and subtle tropical character.',
    sections: [
      {
        id: 1,
        text: 'Our White rum is crafted using a unique continuous column still process that produces an exceptionally clean and light-bodied spirit. Made from a blend of fresh sugarcane juice and high-quality molasses, this rum undergoes a delicate filtration process that removes impurities while preserving the natural sweetness and subtle fruit notes of the base ingredients.',
        image: '/images/rum/white-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'Unlike traditional white rums that are aged for only a short period, our expression rests for 2 years in stainless steel tanks followed by a proprietary charcoal filtration system. This innovative approach allows the rum to develop complexity while maintaining its crystal clarity. The result is a remarkably smooth spirit with notes of fresh coconut, citrus blossom, and a hint of sugarcane sweetness.',
        image: '/images/rum/white-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Perfect for crafting classic cocktails like the Mojito and Daiquiri, our White rum brings authenticity and elegance to any mixed drink. Its clean profile allows other ingredients to shine while adding a subtle tropical foundation. Enjoy it also as a refreshing highball with premium tonic water and a squeeze of fresh lime for an elevated experience.',
        image: '/images/rum/white-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  dark: {
    id: 'dark',
    title: 'Dark',
    slug: 'dark',
    description: 'Rich, bold, and deeply complex. Our dark rum is aged for intensity, delivering robust flavors of molasses, oak, and warm spices.',
    sections: [
      {
        id: 1,
        text: 'Sourced from the legendary distilleries of Jamaica and Guyana, our Dark rum represents the boldest expression in our collection. Using traditional pot stills and a heavy molasses base, this rum retains intense flavors of ripe tropical fruits, burnt sugar, and earthy undertones that have made Caribbean dark rums famous for centuries.',
        image: '/images/rum/dark-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'Aged for up to 12 years in heavily charred American oak barrels, this rum develops extraordinary depth and richness. The extended aging process allows for the extraction of deep caramel, toffee, and dark chocolate notes, while the tropical climate accelerates maturation, creating a spirit of remarkable intensity. Master blenders select only the most exceptional casks for this expression.',
        image: '/images/rum/dark-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The result is a rum of exceptional character with aromas of molasses, dried fig, coffee, and allspice. On the palate, expect bold flavors of dark chocolate, roasted nuts, vanilla, and a warming finish with hints of cinnamon and clove. Perfect for sipping neat or adding depth to classic cocktails like the Dark \'N\' Stormy and Rum Old Fashioned.',
        image: '/images/rum/dark-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  spiced: {
    id: 'spiced',
    title: 'Spiced',
    slug: 'spiced',
    description: 'An exotic journey through Caribbean botanicals. Our spiced rum features a secret blend of tropical spices for a warm, aromatic experience.',
    sections: [
      {
        id: 1,
        text: 'Our Spiced rum begins with a premium aged base rum, to which we add a proprietary blend of 12 Caribbean spices and botanicals. The recipe includes vanilla from Madagascar, cassia bark from Sri Lanka, allspice from Jamaica, and ginger from the Windward Islands. Each spice is individually macerated to extract optimal flavor before being carefully balanced in the final blend.',
        image: '/images/rum/spiced-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The infusion process takes place over 21 days, during which the rum is gently rotated to ensure even extraction. Unlike mass-produced spiced rums that rely on artificial flavorings, our expression uses only whole spices and natural ingredients. Additional notes of orange peel, coconut, and nutmeg are introduced, creating a complex aromatic profile that evokes the vibrant spirit of the Caribbean.',
        image: '/images/rum/spiced-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The final product is remarkably smooth with a warming, lingering finish. Aromas of vanilla, cinnamon, and toasted coconut lead to flavors of caramelized pineapple, clove, and honey. Perfect for sipping on its own, mixing into classic cocktails like the Rum Punch, or simply enjoying with premium ginger beer and fresh lime for an authentic Dark \'N\' Stormy experience.',
        image: '/images/rum/spiced-3.jpg',
        imagePosition: 'right'
      }
    ]
  }
};

// data/index.ts

// ... existing vodkaData, whiskyData, and rumData

export interface LiqueurProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  sections: {
    id: number;
    text: string;
    image: string;
    imagePosition: 'left' | 'right';
  }[];
}

export const liqueurData: Record<string, LiqueurProduct> = {
  premium: {
    id: 'premium',
    title: 'Premium',
    slug: 'premium',
    description: 'Elevate your palate with our luxury liqueur collection. Crafted with the finest ingredients and meticulous attention to detail for an unparalleled sipping experience.',
    sections: [
      {
        id: 1,
        text: 'Our Premium liqueur series begins with a base of the finest French cognac and small-batch vodka, creating an exceptionally smooth foundation. To this, we add rare ingredients including Madagascar vanilla beans, which are hand-split and steeped for six months to extract their full aromatic potential. The result is a liqueur of extraordinary depth and elegance.',
        image: '/images/liqueur/premium-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The production process involves a unique cold-compounding method that preserves the delicate flavors of our botanicals. Each ingredient is macerated separately at precise temperatures before being blended by our master liqueurist. This painstaking approach ensures that every subtle note—from the floral hints of wild honey to the warm embrace of toasted almonds—is perfectly preserved and balanced.',
        image: '/images/liqueur/premium-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Aged for up to 24 months in French oak barrels, this liqueur develops additional complexity and a silky mouthfeel that sets it apart from standard offerings. The final product presents with aromas of vanilla bean, candied orange, and delicate spices. On the palate, expect layers of honey, dried apricot, and a luxurious, lingering finish that makes this liqueur exceptional when sipped neat or in premium cocktails.',
        image: '/images/liqueur/premium-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  herbal: {
    id: 'herbal',
    title: 'Herbal',
    slug: 'herbal',
    description: 'A masterful blend of 36 botanicals from the Alpine regions. Complex, aromatic, and deeply rooted in European apothecary traditions.',
    sections: [
      {
        id: 1,
        text: 'Our Herbal liqueur pays homage to centuries-old European monastic traditions. The recipe, passed down through generations, calls for 36 hand-foraged botanicals including gentian root, angelica, hyssop, and lemon balm. Each ingredient is harvested at its peak potency, primarily from the French Alps and the Italian Dolomites, ensuring the highest quality and authentic alpine character.',
        image: '/images/liqueur/herbal-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The production process is a closely guarded secret, involving a combination of maceration and distillation techniques. Botanicals are carefully sorted and steeped in a neutral grain spirit for up to 12 weeks, allowing for complete extraction of essential oils and aromatic compounds. The resulting liquid is then distilled in traditional copper pot stills to refine and concentrate the complex flavor profile.',
        image: '/images/liqueur/herbal-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The final liqueur presents with a beautiful amber hue and an intensely aromatic bouquet featuring notes of fresh herbs, citrus peel, and warm spices. On the palate, expect a complex interplay of bitter gentian, sweet honey, and aromatic botanicals leading to a long, warming finish. Traditionally enjoyed as a digestif, this versatile liqueur also elevates classic cocktails like the Corpse Reviver #2 or can be simply savored over ice.',
        image: '/images/liqueur/herbal-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  fruit: {
    id: 'fruit',
    title: 'Fruit',
    slug: 'fruit',
    description: 'Capturing the essence of sun-ripened orchards. Our fruit liqueurs celebrate nature\'s sweetness with authentic, vibrant flavors.',
    sections: [
      {
        id: 1,
        text: 'Our Fruit liqueur collection begins with fruit sourced from the finest growing regions around the world. Wild raspberries from the Scottish Highlands, Morello cherries from the Loire Valley, and blood oranges from Sicily are hand-picked at peak ripeness. Within 24 hours of harvest, the fruit is gently pressed and infused into a premium vodka base, preserving the fresh, vibrant character of each varietal.',
        image: '/images/liqueur/fruit-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'Unlike mass-produced fruit liqueurs that rely on artificial flavors and syrups, our expression uses a traditional infusion method. Whole fruits are macerated for up to eight weeks, allowing for the gradual extraction of natural flavors, colors, and essential oils. A minimal amount of pure cane sugar is added to balance the natural acidity, resulting in a liqueur that tastes authentically of the fruit itself.',
        image: '/images/liqueur/fruit-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The final product is bottled at 25% ABV, preserving the delicate fruit character without excessive sweetness. Aromas are intensely fruity and true to varietal, while the palate offers a perfect balance of natural sweetness and bright acidity. Perfect for elevating sparkling wines, enhancing cocktails like the French Martini or Kir Royale, or drizzling over fresh desserts for an elegant finishing touch.',
        image: '/images/liqueur/fruit-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  cream: {
    id: 'cream',
    title: 'Cream',
    slug: 'cream',
    description: 'Indulgent and velvety smooth. Our cream liqueur combines premium Irish whiskey with fresh dairy cream for an irresistibly luxurious experience.',
    sections: [
      {
        id: 1,
        text: 'Our Cream liqueur begins with the finest Irish single malt whiskey, aged for a minimum of four years in ex-bourbon casks. This rich, honeyed spirit provides the perfect foundation for the fresh dairy cream sourced from family farms in County Cork. The cream is gently pasteurized and homogenized to achieve a velvety texture that blends seamlessly with the whiskey.',
        image: '/images/liqueur/cream-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'What sets our Cream liqueur apart is the unique emulsification process that creates an exceptionally stable and smooth product. Using a proprietary cold-blend technique, the whiskey and cream are combined with fair-trade cocoa from the Dominican Republic and vanilla from Papua New Guinea. This careful process ensures a perfectly balanced flavor without the separation issues common in lesser cream liqueurs.',
        image: '/images/liqueur/cream-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The result is an indulgent liqueur with aromas of rich chocolate, toasted almonds, and butterscotch. On the palate, expect layers of creamy caramel, roasted coffee, and a whisper of oak spice leading to a smooth, lingering finish. Serve chilled over ice, add to coffee for an elevated after-dinner treat, or use to create decadent desserts and cocktails like the Mudslide or White Russian.',
        image: '/images/liqueur/cream-3.jpg',
        imagePosition: 'right'
      }
    ]
  }
};

// data/index.ts

// ... existing vodkaData, whiskyData, rumData, and liqueurData

export interface GinProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  sections: {
    id: number;
    text: string;
    image: string;
    imagePosition: 'left' | 'right';
  }[];
}

export const ginData: Record<string, GinProduct> = {
  premium: {
    id: 'premium',
    title: 'Premium',
    slug: 'premium',
    description: 'The pinnacle of gin craftsmanship. Our premium gin features rare botanicals and a meticulous distillation process for an exceptionally refined spirit.',
    sections: [
      {
        id: 1,
        text: 'Our Premium gin begins with a base of the finest English wheat spirit, distilled five times for exceptional purity. To this pristine foundation, we add a carefully curated selection of 12 botanicals, including juniper from Tuscany, coriander seed from Morocco, angelica root from Germany, and orris root from Italy. Each botanical is individually selected for its unique aromatic properties and quality.',
        image: '/images/gin/premium-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The distillation process is an art form in itself. Using a combination of traditional pot still and modern vacuum distillation, we extract the most delicate flavors from our botanicals. Juniper berries are vapor-infused rather than boiled, preserving their bright, piney character, while citrus peels are distilled at lower temperatures to maintain their fresh, vibrant oils. This dual approach allows us to capture the full spectrum of botanical expressions.',
        image: '/images/gin/premium-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The result is an exceptionally balanced gin with aromas of fresh juniper, citrus blossom, and white flowers. On the palate, expect layers of angelica root, cardamom, and a subtle hint of licorice leading to a long, clean finish with lingering notes of grapefruit and spice. Perfect for premium cocktails like a classic Martini or simply enjoyed with a premium tonic and a twist of grapefruit.',
        image: '/images/gin/premium-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  london: {
    id: 'london',
    title: 'London',
    slug: 'london',
    description: 'The definitive London Dry Gin. Bold, classic, and uncompromising in quality, honoring centuries of British distilling tradition.',
    sections: [
      {
        id: 1,
        text: 'Our London Dry Gin adheres strictly to the traditional definition of the style. Distilled in copper pot stills using only natural botanicals, with no added flavors or sweeteners after distillation. The recipe features juniper as the dominant note, supported by a classic combination of coriander, angelica root, orris root, cassia bark, and citrus peels. This timeless formula has remained unchanged for over 150 years.',
        image: '/images/gin/london-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The distillation process is traditional and uncompromising. Our master distiller monitors each batch carefully, separating the heads and tails to capture only the purest heart of the run. The botanicals are steeped for 24 hours before distillation, allowing their essential oils to fully integrate with the spirit. The result is a gin of remarkable character with a perfectly balanced juniper-forward profile that defines the London Dry style.',
        image: '/images/gin/london-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Aromas are intensely juniper with supporting notes of citrus peel and warm spice. The palate is dry and crisp, featuring piney juniper, earthy angelica, and a peppery finish from the coriander. This gin was designed for the perfect Gin & Tonic and is essential for classic cocktails like the Negroni, Martini, and Gimlet. Its bold character stands up beautifully in any mixed drink while maintaining its distinctive personality.',
        image: '/images/gin/london-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  flavored: {
    id: 'flavored',
    title: 'Flavored',
    slug: 'flavored',
    description: 'Innovative expressions that push the boundaries of gin. Our flavored collection showcases unique botanical combinations for contemporary palates.',
    sections: [
      {
        id: 1,
        text: 'Our Flavored Gin collection represents the next evolution of gin craftsmanship. While maintaining a solid juniper foundation, we introduce innovative botanical combinations that create entirely new taste experiences. The cucumber and rose expression combines fresh English cucumber with Damascus rose petals, resulting in a delicately floral gin with refreshing notes that has become a modern classic.',
        image: '/images/gin/flavored-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The blood orange and rosemary expression showcases our commitment to bold flavor combinations. Sicilian blood oranges are steeped separately before being blended with fresh rosemary from the Mediterranean coast. This careful balance creates a gin with bright citrus notes complemented by herbaceous, piney undertones. Each botanical is infused at optimal temperatures to preserve the delicate essential oils and natural colors.',
        image: '/images/gin/flavored-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Our pink grapefruit and pink peppercorn expression rounds out the collection with its vibrant, zesty character. Australian pink peppercorns add a subtle floral heat that perfectly complements the bright, tangy grapefruit. These flavored gins excel in contemporary cocktails, pair beautifully with premium tonics, and offer approachable entry points for those new to the gin category while satisfying adventurous gin enthusiasts.',
        image: '/images/gin/flavored-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  genever: {
    id: 'genever',
    title: 'Genever',
    slug: 'genever',
    description: 'The original gin style from the Netherlands. Maltier, richer, and deeply historical—the grandfather of modern gin.',
    sections: [
      {
        id: 1,
        text: 'Our Genever pays homage to the original gin style that originated in 16th-century Holland. Unlike modern gin, Genever begins with a base of malt wine—a distillate made from a grain mash of rye, corn, and wheat—which gives the spirit its distinctive, whiskey-like character. This malt wine is then blended with a neutral grain spirit and redistilled with a traditional blend of juniper and other botanicals.',
        image: '/images/gin/genever-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The production process follows the traditional "oude" (old) style, with a higher proportion of malt wine. After distillation, the Genever rests for a minimum of 18 months in neutral vessels, allowing the flavors to marry and mature. This aging process softens the juniper edge and allows the rich, malty character to come forward. The botanical profile includes juniper, caraway, clove, and citrus, creating a complex, aromatic spirit.',
        image: '/images/gin/genever-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The result is a spirit unlike any other gin—with aromas of malted grain, dried fruit, and subtle juniper. On the palate, expect flavors of honey, toasted nuts, baking spices, and a gentle pine note leading to a warming, satisfying finish. Traditionally enjoyed ice-cold and sipped from a tulip glass, Genever is essential for historic cocktails like the Original Martini and serves as a fascinating bridge between whiskey and modern gin.',
        image: '/images/gin/genever-3.jpg',
        imagePosition: 'right'
      }
    ]
  }
};

// data/index.ts

// ... existing vodkaData, whiskyData, rumData, liqueurData, and ginData

export interface ChampagneProduct {
  id: string;
  title: string;
  slug: string;
  description: string;
  sections: {
    id: number;
    text: string;
    image: string;
    imagePosition: 'left' | 'right';
  }[];
}

export const champagneData: Record<string, ChampagneProduct> = {
  premium: {
    id: 'premium',
    title: 'Premium',
    slug: 'premium',
    description: 'The epitome of Champagne excellence. Crafted from Grand Cru vineyards using only the finest first-press grapes for an unparalleled expression of luxury.',
    sections: [
      {
        id: 1,
        text: 'Our Premium Champagne is sourced exclusively from Grand Cru villages in the Montagne de Reims and Côte des Blancs. The blend features 60% Chardonnay from Avize and Cramant, known for their exceptional minerality and elegance, and 40% Pinot Noir from Verzenay and Bouzy, contributing structure and depth. Only the cuvée (first press) of each grape is used, ensuring the finest quality and delicacy.',
        image: '/images/champagne/premium-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The aging process sets this Champagne apart. After the initial fermentation, the wine ages on its lees in our 12th-century chalk cellars for a minimum of 8 years—more than triple the legal requirement. This extended aging allows for the development of extraordinary complexity, creating fine, persistent bubbles and rich notes of brioche, toasted almonds, and honey that define exceptional vintage Champagnes.',
        image: '/images/champagne/premium-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'The result is a Champagne of remarkable finesse and power. Aromas of white flowers, green apple, and citrus blossom lead to a palate of ripe pear, hazelnut, and a distinctive chalky minerality. The mousse is exceptionally fine and persistent, with a long, elegant finish that lingers with notes of lemon zest and fresh pastry. Perfect for celebrating life\'s most significant moments or pairing with fine caviar and seafood.',
        image: '/images/champagne/premium-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  elegant: {
    id: 'elegant',
    title: 'Elegant',
    slug: 'elegant',
    description: 'Light, refined, and effortlessly sophisticated. Our elegant Champagne showcases the delicate side of the region with a focus on finesse and balance.',
    sections: [
      {
        id: 1,
        text: 'Our Elegant Champagne is crafted predominantly from Chardonnay grown in the Côte des Blancs, with a smaller proportion of Pinot Noir for structure. The blend emphasizes freshness and finesse, with grapes harvested from Premier Cru vineyards at optimal ripeness. The wine undergoes malolactic fermentation to soften the natural acidity, resulting in a rounder, more approachable style that still maintains classic Champagne character.',
        image: '/images/champagne/elegant-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'Aged for 4 years on the lees in our historic cellars, this Champagne develops subtle complexity without sacrificing its vibrant freshness. The dosage is kept deliberately low—6 grams per liter—allowing the natural fruit character and minerality to shine through. This careful balance creates a wine that is both immediately appealing and capable of graceful aging for those who prefer to cellar their bottles.',
        image: '/images/champagne/elegant-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'On the nose, expect delicate aromas of white peach, jasmine, and freshly baked bread. The palate is light and creamy with flavors of green apple, lemon curd, and a hint of marzipan, supported by a persistent, refined bubble structure. This Champagne is perfect as an aperitif, pairs beautifully with light appetizers, and offers an approachable entry point to the region while maintaining all the hallmarks of quality.',
        image: '/images/champagne/elegant-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  rose: {
    id: 'rose',
    title: 'Rose',
    slug: 'rose',
    description: 'Romantic and vibrant. Our Rosé Champagne combines the elegance of traditional Champagne with the seductive charm of red fruit flavors.',
    sections: [
      {
        id: 1,
        text: 'Our Rosé Champagne is crafted using the traditional "saignée" method, where a portion of Pinot Noir juice is allowed brief skin contact to extract its beautiful pink hue and delicate red fruit character. The blend features 70% Chardonnay for elegance and structure, complemented by 30% still red wine from the Bouzy and Ambonnay regions—some of the finest Pinot Noir in Champagne—adding depth and complexity.',
        image: '/images/champagne/rose-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The wine undergoes secondary fermentation in the bottle and ages on its lees for 5 years, allowing the flavors to integrate and develop. The addition of still red wine contributes vibrant notes of fresh strawberries, raspberries, and red currant that distinguish this Rosé from white Champagnes. The final blend achieves perfect balance between the freshness of Chardonnay and the fruit-forward character of Pinot Noir.',
        image: '/images/champagne/rose-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'With its beautiful salmon-pink hue and aromas of wild strawberries, rose petals, and red berries, this Champagne is as visually stunning as it is delicious. The palate is elegant and expressive, featuring flavors of ripe cherry, blood orange, and a hint of spice, supported by fine, persistent bubbles. Perfect for romantic occasions, pairing with grilled salmon, or serving with fresh berry desserts.',
        image: '/images/champagne/rose-3.jpg',
        imagePosition: 'right'
      }
    ]
  },
  
  unique: {
    id: 'unique',
    title: 'Unique',
    slug: 'unique',
    description: 'Limited edition expressions that defy convention. Our unique collection pushes boundaries while honoring traditional Champagne craftsmanship.',
    sections: [
      {
        id: 1,
        text: 'Our Unique Champagne collection represents the pinnacle of innovation in the region. The "Solera" expression combines a perpetual reserve system, where each new vintage is blended with reserve wines dating back 30 years. This solera method, rarely used in Champagne, creates extraordinary depth and consistency, with layers of dried fruit, honey, and roasted nuts that evolve with each release while maintaining a signature character.',
        image: '/images/champagne/unique-1.jpg',
        imagePosition: 'right'
      },
      {
        id: 2,
        text: 'The "Terroir" expression showcases single-vineyard Champagne from the famous Clos du Mesnil. This walled vineyard produces Chardonnay of exceptional concentration and minerality, offering a true sense of place rarely found in Champagne. The wine ages for 12 years on its lees, developing remarkable complexity while retaining vibrant acidity and a distinctive chalky character that speaks to its unique origin.',
        image: '/images/champagne/unique-2.jpg',
        imagePosition: 'left'
      },
      {
        id: 3,
        text: 'Our limited edition "Blanc de Noirs" features 100% Pinot Noir from the Grand Cru village of Aÿ, crafted entirely in oak barrels for added texture and complexity. Only 2,000 bottles are produced annually, each individually numbered. With its powerful structure, notes of dark berries, toasted spices, and exceptional aging potential, this Champagne appeals to collectors and connoisseurs seeking the extraordinary and rare.',
        image: '/images/champagne/unique-3.jpg',
        imagePosition: 'right'
      }
    ]
  }
};