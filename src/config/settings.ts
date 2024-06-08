export const SETTINGS = {
  TITLE: 'Budget Buddy',
  DESC: 'Budget application tracker Online'
}

export const DEFAULT_CATEGORIES_ICONS: any = {
  FOOD: ['/burger.png', '/diet.png', '/pizza.png', '/vegetable.png'],
  HOME: ['/house.png', '/home.png'],
  TRAVEL: ['/taxi.png', '/vehicles.png', '/travel-bag.png', '/travel-luggage.png'],
}

for (const key in DEFAULT_CATEGORIES_ICONS) {
  if ('ALL' in DEFAULT_CATEGORIES_ICONS) {
    DEFAULT_CATEGORIES_ICONS['ALL'] = [...DEFAULT_CATEGORIES_ICONS.ALL, ...DEFAULT_CATEGORIES_ICONS[key]]
  } else {
    DEFAULT_CATEGORIES_ICONS['ALL'] =  [...DEFAULT_CATEGORIES_ICONS[key]]
  }
}