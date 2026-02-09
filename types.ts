
export type PageId = 'home' | 'about' | 'products' | 'services' | 'clients' | 'contact';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface NavItem {
  label: string;
  id: PageId;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
