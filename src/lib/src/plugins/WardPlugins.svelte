<svelte:options tag={null} />

<script lang="ts">
  import Ward, { type WardData } from '@uncover/ward'
  import { onDestroy, onMount } from 'svelte'
  import { WardStore } from '../WardStore'
  import WardUrlsTree from './selection/WardUrlsTree.svelte'
  import WardPluginsTree from './selection/WardPluginsTree.svelte'
  import WardDefinitionsTree from './selection/WardDefinitionsTree.svelte'
  import WardDetails from './details/WardDetails.svelte'
  import { SelectionStore, type SelectionData } from '../SelectionStore'

  export let plugin = 'https://ash-uncover.github.io/ap-games/plugin.json'

  Ward.loadPlugin(plugin)

  let selectionType: string | null
  let selectionId: string | null
  const unsubscribeSelection = SelectionStore.subscribe((selectionData: SelectionData) => {
    selectionType = selectionData.type
    selectionId = selectionData.id
  })

  $: layout = selectionId && selectionType ? "TwoColumnsMidExpanded" : "OneColumn"

  let data: WardData
  const unsubscribeWard = WardStore.subscribe((wardData) => {
    data = wardData
  })

  // Lifecycle //

  onDestroy(() => {
    unsubscribeSelection()
    unsubscribeWard()
  })
</script>

<ui5-tab
  text="Plugins"
  data-ui5-compact-size
>
  <ui5-flexible-column-layout
    {layout}
    style="height:100%"
  >
    <div
      slot="startColumn"
      style="padding-right:1em;"
    >
      {#if Object.values(data.urls).length}
        <WardUrlsTree />
      {/if}

      {#if Object.values(data.plugins).length}
        <WardPluginsTree />
      {/if}

      {#if Object.values(data.definitions).length}
        <WardDefinitionsTree />
      {/if}
    </div>

    <div slot="midColumn">
      <WardDetails />
    </div>
  </ui5-flexible-column-layout>
</ui5-tab>

<style>
</style>
