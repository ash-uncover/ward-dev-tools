<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy } from 'svelte'
  import { WardStore } from '../../WardStore'
  import type { WardData } from '@uncover/ward'

  export let pluginId: string

  let plugins: any
  let definitions: any
  let providers: any
  const unsubscribeWard = WardStore.subscribe((wardData: WardData) => {
    plugins = wardData.plugins
    providers = wardData.providers
    definitions = wardData.definitions
  })

  // Lifecycle //

  onDestroy(() => {
    unsubscribeWard()
  })
</script>

{#if plugins[pluginId]}
  <div>
    <ui5-title level="H5">Plugin Details</ui5-title>
    <br />

    <div>
      <ui5-label>Name:</ui5-label>
      {plugins[pluginId].name}
    </div>
    <div>
      <ui5-label>URL:</ui5-label>
      {plugins[pluginId].url}
    </div>
    <br />

    <ui5-title level="H6">{`Dependencies (${plugins[pluginId].dependencies.length})`}</ui5-title>
    <ul>
      {#each plugins[pluginId].dependencies as dependencyId}
        <li>{dependencyId}</li>
      {/each}
    </ul>

    <ui5-title level="H6">{`Defines (${plugins[pluginId].defines.length})`}</ui5-title>
    <ul>
      {#each plugins[pluginId].defines as define}
        <li>{`${pluginId}/${define.name}`}</li>
      {/each}
    </ul>

    <ui5-title level="H6">{`Provides (${plugins[pluginId].provides.length})`}</ui5-title>
    <ul>
      {#each plugins[pluginId].provides as provideId}
        <li>{providers[provideId].name}</li>
      {/each}
    </ul>
  </div>
{:else}
  <div>Plugin not found</div>
{/if}

<style>
</style>
