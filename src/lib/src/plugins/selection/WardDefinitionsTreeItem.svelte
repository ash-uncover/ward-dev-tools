<svelte:options tag={null} />

<script lang="ts">
  import Ward, { type WardData } from '@uncover/ward'
  import { WardStore } from '../../WardStore'
  import { onDestroy, onMount } from 'svelte'
  import WardDefinitionsProvidersTreeItem from './WardDefinitionsProvidersTreeItem.svelte'
  import { SelectionStore, type SelectionData } from '../../SelectionStore'

  // Properties //

  export let definitionId: string

  // Stores //

  let selectionType: string | null
  let selectionId: string | null
  const unsubscribeSelection = SelectionStore.subscribe((selectionData: SelectionData) => {
    selectionType = selectionData.type
    selectionId = selectionData.id
  })

  let definition: any
  let providers: Record<string, any>
  $: providers
  const unsubscribeWard = WardStore.subscribe((wardData: WardData) => {
    definition = Ward.data.definitions[definitionId]
    providers = Object.values(wardData.providers)
  })

  $: providerIds = (providers ?? [])
    .filter((provider: any) => provider.definition === definitionId)
    .map((provider: any) => provider.name)

  // Lifecycle //

  let treeItem: HTMLElement
  onMount(() => {
    treeItem.setAttribute('data-attribute-type', 'definition')
    treeItem.setAttribute('data-attribute-id', definitionId)
  })

  onDestroy(() => {
    unsubscribeSelection()
    unsubscribeWard()
  })
</script>

<ui5-tree-item
  bind:this={treeItem}
  expanded
  icon="documents"
  text={definitionId}
  selected={selectionType === 'definition' && selectionId === definitionId}
  data-ui5-compact-size
>
  {#each providerIds as providerId}
    <WardDefinitionsProvidersTreeItem {providerId} />
  {/each}
</ui5-tree-item>

<style>
</style>
