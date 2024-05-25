<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { WardStore } from '../../WardStore'
  import { SelectionStore, type SelectionData } from '../../SelectionStore'

  // Properties //

  export let providerId: string

  // Stores //

  let selectionType: string | null
  let selectionId: string | null
  const unsubscribeSelection = SelectionStore.subscribe((selectionData: SelectionData) => {
    selectionType = selectionData.type
    selectionId = selectionData.id
  })

  let provider: any
  $: provider = $WardStore.providers[providerId]
  let providers: Record<string, any>
  $: providers = Object.values($WardStore.providers)

  // Lifecycle //

  let treeItem: HTMLElement
  onMount(() => {
    treeItem.setAttribute('data-attribute-type', 'provider')
    treeItem.setAttribute('data-attribute-id', providerId)
  })

  onDestroy(() => {
    unsubscribeSelection()
  })
</script>

<ui5-tree-item
  bind:this={treeItem}
  expanded
  icon="document-text"
  text={providerId}
  selected={selectionType === 'provider' && selectionId === providerId}
  data-ui5-compact-size
>
</ui5-tree-item>

<style>
</style>
