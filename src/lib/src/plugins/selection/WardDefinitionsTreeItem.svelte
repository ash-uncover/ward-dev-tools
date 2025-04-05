<script lang="ts">
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
  $: definition = $WardStore.definitions[definitionId]
  let providers: Record<string, any>
  $: providers = Object.values($WardStore.providers)
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
