// Controller to handle navigation logic
import { menuItems, socialLinks } from '../models/MenuModel';

export const NavigationController = {
  getMenuItems: () => menuItems,
  getSocialLinks: () => socialLinks,
  handleNavigation: (path) => {
 
    console.log(`Navigating to: ${path}`);
  }
};

