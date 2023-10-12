import { create } from 'zustand';

interface useProModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
