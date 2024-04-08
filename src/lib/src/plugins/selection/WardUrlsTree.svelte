<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { WardStore } from '../../WardStore'
  import type { WardData } from '@uncover/ward'
  import WardTreeItemUrl from './WardUrlsTreeItem.svelte'
  import { SelectionStore } from '../../SelectionStore'

  let urls: Record<string, any>
  const unsubscribe = WardStore.subscribe((wardData: WardData) => {
    urls = wardData.urls
  })

  // Lifecycle //

  let treeUrl: HTMLElement
  onMount(() => {
    treeUrl.addEventListener('item-click', handleTreeItemUrlClick)
  })

  onDestroy(unsubscribe)

  // Event Handlers //

  function handleTreeItemUrlClick(event: any) {
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

<ui5-panel>
  <div
    style="width:100%;display:flex;align-items:center;"
    slot="header"
  >
    <ui5-title
      style="margin-right:auto"
      slot="startContent"
      level="H5"
    >
      {`URLs (${Object.values(urls).length})`}
    </ui5-title>
    <ui5-button icon="add"> Load plugin </ui5-button>
  </div>
  <ui5-tree
    mode="Delete"
    bind:this={treeUrl}
  >
    {#each Object.keys(urls) as url}
      <WardTreeItemUrl urlId={url} />
    {/each}
  </ui5-tree>
</ui5-panel>

<style>
</style>
