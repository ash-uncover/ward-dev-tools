<script lang="ts">
  import { onDestroy } from 'svelte'
  import { WardStore } from '../WardStore'
  import WardUrlsTree from './selection/WardUrlsTree.svelte'
  import WardPluginsTree from './selection/WardPluginsTree.svelte'
  import WardDetails from './details/WardDetails.svelte'
  import { SelectionStore, type SelectionData } from '../SelectionStore'

  let selectionType: string | null
  let selectionId: string | null
  const unsubscribeSelection = SelectionStore.subscribe((selectionData: SelectionData) => {
    selectionType = selectionData.type
    selectionId = selectionData.id
  })

  $: layout = selectionId && selectionType ? 'TwoColumnsMidExpanded' : 'OneColumn'

  let data: any
  $: data = $WardStore

  // Lifecycle //

  onDestroy(() => {
    unsubscribeSelection()
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
      <WardUrlsTree />
      <WardPluginsTree />
    </div>

    <div slot="midColumn">
      <WardDetails />
    </div>
  </ui5-flexible-column-layout>
</ui5-tab>

<style>
</style>
