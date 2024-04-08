<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy } from 'svelte'
  import { SelectionStore, type SelectionData } from '../../SelectionStore'
  import { WardStore } from '../../WardStore'
  import type { WardData } from '@uncover/ward'
  import WardDefinitionsDetails from './WardDefinitionsDetails.svelte'
  import WardUrlsDetails from './WardUrlsDetails.svelte'
  import WardPluginsDetails from './WardPluginsDetails.svelte'
  import WardProvidersDetails from './WardProvidersDetails.svelte'

  let selectionType: string | null
  let selectionId: string | null
  const unsubscribeSelection = SelectionStore.subscribe((selectionData: SelectionData) => {
    selectionType = selectionData.type
    selectionId = selectionData.id
  })

  // Lifecycle //

  onDestroy(() => {
    unsubscribeSelection()
  })
</script>

{#if selectionId}
  {#if selectionType === 'url'}
    <WardUrlsDetails urlId={selectionId} />
  {:else if selectionType === 'plugin'}
    <WardPluginsDetails pluginId={selectionId} />
  {:else if selectionType === 'definition'}
    <WardDefinitionsDetails definitionId={selectionId} />
  {:else if selectionType === 'provider'}
    <WardProvidersDetails providerId={selectionId} />
  {/if}
{/if}

<style>
</style>
