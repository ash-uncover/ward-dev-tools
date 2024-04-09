<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { WardStore } from '../../WardStore'
  import { SelectionStore, type SelectionData } from '../../SelectionStore'

  // Properties //

  export let urlId: string

  // Stores //

  let selectionType: string | null
  let selectionId: string | null
  const unsubscribeSelection = SelectionStore.subscribe((selectionData: SelectionData) => {
    selectionType = selectionData.type
    selectionId = selectionData.id
  })

  let url: any
  $: url = $WardStore.urls[urlId]
  $: highlight = url.state === 'LOADED' ? 'Success' : url.state === 'EXCLUDED' ? 'Critical' : 'Error'
  let plugins: Record<string, any>
  $: plugins = $WardStore.roots

  // Lifecycle //

  let treeItem: HTMLElement
  onMount(() => {
    treeItem.setAttribute('data-attribute-type', 'url')
    treeItem.setAttribute('data-attribute-id', urlId)
  })

  onDestroy(() => {
    unsubscribeSelection()
  })
</script>

{#if urlId}
  <ui5-tree-item
    bind:this={treeItem}
    icon="world"
    {highlight}
    text={urlId}
    data-attribute-id={urlId}
    selected={selectionType === 'url' && selectionId === urlId}
    class='toto'
  />
{/if}

<style>
  .toto::part(delete-button)  {
    display: none
  }
</style>
