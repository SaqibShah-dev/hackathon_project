import { createCrudStore } from './createCrudStore.js';

// One line per resource. Add more the same way (e.g. products, orders).
export const useItemStore = createCrudStore('/items', 'item');
