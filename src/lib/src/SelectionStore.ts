import { writable } from 'svelte/store';

export interface SelectionData {
  type: string | null
  id: string | null
}
export const SelectionStore = writable<SelectionData>({
  type: null,
  id: null,
});
