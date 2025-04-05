import { writable } from 'svelte/store';

import { Ward } from '@sol.ac/ward'
import type PluginProvider from '@sol.ac/ward/dist/plugin/object/PluginProvider';
import type { PluginManagerDataUrl } from '@sol.ac/ward/dist/plugin/PluginManager';
import type Plugin from '@sol.ac/ward/dist/plugin/object/Plugin';
import type { MessageDispatcherDataServices } from '@sol.ac/ward/dist/message/MessageDispatcher';

interface WardStoreData {
  urls: Record<string, PluginManagerDataUrl>
  roots: Record<string, Plugin>
  plugins: Record<string, Plugin>
  definitions: { [key: string]: any }
  providers: { [key: string]: PluginProvider }
  services: MessageDispatcherDataServices
  dispatchers: string[]
}

export const WardStore = writable<WardStoreData>({
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