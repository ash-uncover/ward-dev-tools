<svelte:options tag={null} />

<script lang="ts">
  import Ward, { type WardData } from '@uncover/ward'
  import { WardStore } from '../../WardStore'
  import { onDestroy, onMount } from 'svelte'
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
  let providers: Record<string, any>
  const unsubscribeWard = WardStore.subscribe((wardData: WardData) => {
    provider = Ward.data.providers[providerId]
    providers = Object.values(wardData.providers)
  })

  // Lifecycle //

  let treeItem: HTMLElement
  onMount(() => {
    treeItem.setAttribute('data-attribute-type', 'provider')
    treeItem.setAttribute('data-attribute-id', providerId)
  })

  onDestroy(() => {
    unsubscribeSelection()
    unsubscribeWard()
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
