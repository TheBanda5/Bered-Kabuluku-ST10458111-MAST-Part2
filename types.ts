export type MenuItem = {
  dishName: string; // Le nom du plat
  description: string; // La description du plat
  course: string; // La catégorie du plat (Entrée, Plat, Dessert)
  price: number; // Le prix du plat
};

export type RootStackParamList = {
  Home: { newItem?: MenuItem }; // La page Home accepte un paramètre newItem de type MenuItem
  AddMenu: undefined;
  FilterMenu: { menuItems: MenuItem[] };
};
