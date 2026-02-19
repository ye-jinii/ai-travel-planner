export interface BudgetOption {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  icon: string;
}

export interface StyleOption {
  id: string;
  label: string;
  icon: string;
}

export interface DestinationOption {
  id: string;
  name: string;
  country: string;
  cities: string;
  price: string;
  flag: string;
}
