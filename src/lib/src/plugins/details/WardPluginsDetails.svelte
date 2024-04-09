<svelte:options tag={null} />

<script lang="ts">
  import { WardStore } from '../../WardStore'

  // Properties //

  export let pluginId: string

  // Stores //

  let plugin: any
  $: plugin = $WardStore.plugins[pluginId]
</script>

{#if plugin}
  <div>
    <ui5-title level="H5">{`Plugin Details (${pluginId})`}</ui5-title>
    <br />

    <div>
      <ui5-label>Name:</ui5-label>
      {plugin.name}
    </div>
    <div>
      <ui5-label>URL:</ui5-label>
      {plugin.url}
    </div>
    <br />

    <ui5-title level="H6">{`Dependencies (${plugin.dependencies.length})`}</ui5-title>
    {#if plugin.dependencies.length}
      <ul>
        {#each plugin.dependencies as dependencyId}
          <li>{dependencyId}</li>
        {/each}
      </ul>
    {:else}
      <br />
    {/if}

    <ui5-title level="H6">{`Defines (${plugin.defines.length})`}</ui5-title>
    <ul>
      {#each plugin.defines as define}
        <li>{`${pluginId}/${define.name}`}</li>
      {/each}
    </ul>

    <ui5-title level="H6">{`Provides (${plugin.provides.length})`}</ui5-title>
    <ul>
      {#each plugin.provides as provider}
        <li>{`${provider.define}/${provider.name}`}</li>
      {/each}
    </ul>
  </div>
{:else}
  <div>Plugin not found</div>
{/if}

<style>
</style>
