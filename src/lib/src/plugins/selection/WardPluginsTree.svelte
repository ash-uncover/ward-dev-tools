<script lang="ts">
  import { onMount } from 'svelte'
  import { WardStore } from '../../WardStore'
  import { SelectionStore } from '../../SelectionStore'
  import WardPluginsTreeItem from './WardPluginsTreeItem.svelte'

  // Stores //

  let plugins: Record<string, any>
  $: plugins = $WardStore.roots

  // Lifecycle //

  let treePlugin: HTMLElement
  onMount(() => {
    treePlugin.addEventListener('item-click', handleTreeItemPluginClick)
  })

  // Event Handlers //

  function handleTreeItemPluginClick(event: any) {
    SelectionStore.update((selection) => {
      const type = event.detail.item.getAttribute('data-attribute-type')
      const id = event.detail.item.getAttribute('data-attribute-id')
      if (selection.type === type && selection.id === id) {
        return {
          type: null,
          id: null,
        }
      }
      return {
        type,
        id,
      }
    })
  }
</script>

<ui5-panel style="margin-top:1rem;">
  <div
    style="width:100%;display:flex;align-items:center;"
    slot="header"
  >
    <ui5-title
      style="margin-right:auto"
      slot="startContent"
      level="H5"
    >
      {`Plugins (${Object.values(plugins).length})`}
    </ui5-title>
  </div>
  <ui5-tree bind:this={treePlugin}>
    {#each Object.keys(plugins) as pluginId}
      <WardPluginsTreeItem {pluginId} />
    {/each}
  </ui5-tree>
</ui5-panel>

<style>
</style>
