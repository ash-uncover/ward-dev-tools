<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { WardStore } from '../../WardStore'
  import type { WardData } from '@uncover/ward'
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
  const unsubscribeWard = WardStore.subscribe((wardData: WardData) => {
    url = wardData.urls[urlId]
  })

  $: highlight = url.state === 'LOADED' ? 'Success' : 'Error'

  // Lifecycle //

  let treeItem: HTMLElement
  onMount(() => {
    treeItem.setAttribute('data-attribute-type', 'url')
    treeItem.setAttribute('data-attribute-id', urlId)
  })

  onDestroy(() => {
    unsubscribeSelection()
    unsubscribeWard()
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
  />
{/if}

<style>
</style>
