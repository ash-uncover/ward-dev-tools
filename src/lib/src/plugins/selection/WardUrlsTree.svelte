<svelte:options tag={null} />

<script lang="ts">
  import { onMount } from 'svelte'
  import { WardStore } from '../../WardStore'
  import WardTreeItemUrl from './WardUrlsTreeItem.svelte'
  import { SelectionStore } from '../../SelectionStore'
  import Ward from '@uncover/ward'

  // Stores //

  let urls: Record<string, any>
  $: urls = $WardStore.urls

  // Lifecycle //

  let inputUrl: any
  let buttonUrl: HTMLElement
  let treeUrl: HTMLElement
  onMount(() => {
    inputUrl.addEventListener('change', handleButtonUrlClick)
    buttonUrl.addEventListener('click', handleButtonUrlClick)
    treeUrl.addEventListener('item-click', handleTreeItemUrlClick)
    treeUrl.addEventListener('item-delete', handleTreeItemUrlDelete)
  })

  // Event Handlers //

  function handleButtonUrlClick() {
    Ward.loadPlugin(inputUrl.value)
  }

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

  function handleTreeItemUrlDelete(event: any) {
    const id = event.detail.item.getAttribute('data-attribute-id')
    console.log(id)
    console.log(event.detail.item.highlight)
    switch (event.detail.item.highlight) {
      case 'Success': {
        Ward.unloadPlugin(id)
        break
      }
      case 'Critical': {
        Ward.unexcludePlugin(id)
        break
      }
      default: {
        // Load error - we do nothing
        break
      }
    }
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
    <ui5-input
      bind:this={inputUrl}
      placeholder="Enter plugin url"
    ></ui5-input>
    <ui5-button
      bind:this={buttonUrl}
      icon="add"
    >
      Load plugin
    </ui5-button>
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
