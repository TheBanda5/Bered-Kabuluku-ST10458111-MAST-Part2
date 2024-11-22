// Define a shared type for menu items
export type MenuItem = {
  dishName: string; // Nom clair pour les plats
  description: string;
  course: string; // Catégorie (ex : entrée, plat, dessert)
  price: number;
};

// Define the RootStackParamList
export type RootStackParamList = {
  Home: { newItem?: MenuItem }; // newItem est optionnel
  AddMenu: undefined; // Pas de paramètres pour AddMenu
  FilterMenu: { menuItems: MenuItem[] }; // Liste des éléments du menu pour FilterMenu
};
