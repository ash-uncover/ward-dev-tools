<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { WardStore } from '../../WardStore'
  import { SelectionStore, type SelectionData } from '../../SelectionStore'

  // Properties //

  export let pluginId: string

  // Stores //

  let selectionType: string | null
  let selectionId: string | null
  const unsubscribeSelection = SelectionStore.subscribe((selectionData: SelectionData) => {
    selectionType = selectionData.type
    selectionId = selectionData.id
  })

  let plugin: any
  $: plugin = $WardStore.plugins[pluginId]
  let plugins: Record<string, any>
  $: plugins = $WardStore.plugins
  $: dependencyIds = (plugin?.dependencies || []).map((dependency: string) => {
    const plugin = Object.values(plugins).find((p) => p.loadUrl === dependency)
    return plugin?.name
  })

  // Lifecycle //

  let treeItem: HTMLElement
  onMount(() => {
    if (treeItem) {
      treeItem.setAttribute('data-attribute-type', 'plugin')
      treeItem.setAttribute('data-attribute-id', pluginId)
    }
  })

  onDestroy(() => {
    unsubscribeSelection()
  })
</script>

{#if pluginId}
  <ui5-tree-item
    bind:this={treeItem}
    expanded
    icon="tree"
    text={pluginId}
    selected={selectionType === 'plugin' && selectionId === pluginId}
  >
    {#each dependencyIds as dependencyId}
      <svelte:self pluginId={dependencyId} />
    {/each}
  </ui5-tree-item>
{/if}

<style>
</style>
