import { create } from 'zustand';
import toast from 'react-hot-toast';
import api from '../api/axios.js';
import { getError } from '../utils/getError.js';

/**
 * Generates a ready-made CRUD store for any REST resource.
 *   const useProductStore = createCrudStore('/products', 'product');
 * Expects the API to return { products: [...] } for lists and { product: {...} } for one.
 */
export const createCrudStore = (path, name) => {
  const listKey = `${name}s`;

  return create((set) => ({
    items: [],
    loading: false,

    fetchAll: async () => {
      set({ loading: true, items: [] });
      try {
        const { data } = await api.get(path);
        set({ items: data[listKey] });
      } catch (e) {
        toast.error(getError(e));
      } finally {
        set({ loading: false });
      }
    },

    create: async (body) => {
      try {
        const { data } = await api.post(path, body);
        set((s) => ({ items: [data[name], ...s.items] }));
        toast.success('Created');
        return true;
      } catch (e) {
        toast.error(getError(e));
        return false;
      }
    },

    update: async (id, body) => {
      try {
        const { data } = await api.put(`${path}/${id}`, body);
        set((s) => ({ items: s.items.map((i) => (i._id === id ? data[name] : i)) }));
        return true;
      } catch (e) {
        toast.error(getError(e));
        return false;
      }
    },

    remove: async (id) => {
      try {
        await api.delete(`${path}/${id}`);
        set((s) => ({ items: s.items.filter((i) => i._id !== id) }));
        toast.success('Deleted');
        return true;
      } catch (e) {
        toast.error(getError(e));
        return false;
      }
    },
  }));
};
