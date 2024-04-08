<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { WardStore } from '../../WardStore'
  import WardDefinitionsTreeItem from './WardDefinitionsTreeItem.svelte'
  import { SelectionStore } from '../../SelectionStore'

  let definitions: Record<string, any>

  let treeDefinition: HTMLElement

  const unsubscribe = WardStore.subscribe((wardData) => {
    definitions = wardData.definitions
  })

  // Lifecycle //

  onMount(() => {
    treeDefinition.addEventListener('item-click', handleTreeItemDefinitionClick)
  })

  onDestroy(unsubscribe)

  // Event Handlers //

  function handleTreeItemDefinitionClick(event: any) {
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
      {`Definitions (${Object.values(definitions).length})`}
    </ui5-title>
  </div>
  <ui5-tree bind:this={treeDefinition}>
    {#each Object.keys(definitions) as definitionId}
      <WardDefinitionsTreeItem {definitionId} />
    {/each}
  </ui5-tree>
</ui5-panel>

<style>
</style>
