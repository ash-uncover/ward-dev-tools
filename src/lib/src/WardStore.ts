import { writable } from 'svelte/store';

import Ward, { type WardData } from '@uncover/ward'
import type PluginProvider from '@uncover/ward/dist/plugin/object/PluginProvider';

interface WardStoreData {
  plugin: string | null
  loaded: boolean
  urls: { [key: string]: string }
  roots: { [key: string]: string }
  plugins: { [key: string]: string }
  definitions: { [key: string]: any }
  providers: { [key: string]: PluginProvider }
  services: { [key: string]: string }
  dispatchers: string[]
}

export const WardStore = writable<WardStoreData>({
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