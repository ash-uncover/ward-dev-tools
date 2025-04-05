import { writable } from 'svelte/store';

import { Ward } from '@uncover/ward'
import type PluginProvider from '@uncover/ward/dist/plugin/object/PluginProvider';
import type { PluginManagerDataUrl } from '@uncover/ward/dist/plugin/PluginManager';
import type Plugin from '@uncover/ward/dist/plugin/object/Plugin';
import type { MessageDispatcherDataServices } from '@uncover/ward/dist/message/MessageDispatcher';

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