import { create } from 'zustand';

export const categoryStore = create<{
  selected: string;
  setSelected: (selected: string) => void;
  reset: () => void;
}>((set) => ({
  selected: 'All',
  setSelected: (selected) =>
    set((state) => ({
      selected: state.selected === selected ? 'All' : selected,
    })),
  reset: () => set({ selected: 'All' }),
}));
