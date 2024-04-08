import { writable } from 'svelte/store';

import Ward, { type WardData } from '@uncover/ward'

export const WardStore = writable({
  plugin: null,
  loaded: false,
  urls: {},
  roots: {},
  plugins: {},
  definitions: {},
  providers: {},
  services: {},
  dispatchers: []
});

Ward.register(onWardDataChange)
function onWardDataChange() {
  WardStore.set(Ward.data)
}