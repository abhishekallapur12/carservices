
import { NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Products', id: 'products' },
  { label: 'Services', id: 'services' },
  { label: 'Clients', id: 'clients' },
  { label: 'Contact', id: 'contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'CNC Vertical Machining Center',
    category: 'CNC Machines',
    description: 'High-precision machining center designed for complex industrial parts with extreme accuracy.',
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    specs: ['Spindle Speed: 8000 RPM', 'Table Size: 1000x500mm', 'ATC: 24 Tools']
  },
  {
    id: '2',
    name: 'Wire Cut EDM',
    category: 'EDM Solutions',
    description: 'Advanced wire erosion technology for intricate die and mold manufacturing.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    specs: ['Accuracy: ±0.003mm', 'Wire Dia: 0.15-0.30mm', 'Max Load: 500kg']
  },
  {
    id: '3',
    name: 'Industrial Robotic Arm',
    category: 'Automation',
    description: '6-Axis articulated robot for welding, pick-and-place, and assembly lines.',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
    specs: ['Reach: 1450mm', 'Payload: 20kg', 'Repeatability: ±0.02mm']
  },
  {
    id: '4',
    name: 'Fiber Laser Cutting Machine',
    category: 'Laser Solutions',
    description: 'High-speed metal cutting with fiber laser source for maximum efficiency.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    specs: ['Power: 1kW - 6kW', 'Working Area: 3000x1500mm', 'Materials: Carbon, Stainless, Alu']
  }
];

export const SERVICES = [
  {
    title: 'Machine Retrofitting',
    description: 'Modernize your legacy machines with latest CNC controllers and electronics to enhance productivity and extend machine life.',
    icon: '🛠️',
    details: ['Controller Upgrades', 'Electronic Refurbishment', 'Accuracy Restoration']
  },
  {
    title: 'AMC Services',
    description: 'Comprehensive Annual Maintenance Contracts to ensure zero downtime and peak performance of your machinery.',
    icon: '📋',
    details: ['Preventive Maintenance', 'Emergency Repairs', 'Spare Part Inventory']
  },
  {
    title: 'Application Support',
    description: 'Expert engineering support for process optimization, tool selection, and time study analysis for your components.',
    icon: '💡',
    details: ['Cycle Time Reduction', 'Tooling Solutions', 'Operator Training']
  }
];
