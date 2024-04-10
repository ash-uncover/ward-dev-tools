<svelte:options tag={null} />

<script lang="ts">
  import { WardStore } from '../../WardStore'
  import type PluginProvider from '@uncover/ward/dist/plugin/object/PluginProvider'

  // Properties //

  export let providerId: string

  // Stores //

  let provider: PluginProvider
  $: provider = $WardStore.providers[providerId]
</script>

<div>
  <ui5-title level="H5">Provider Details</ui5-title>
  <br />

  <div>
    <ui5-label>Name:</ui5-label>
    {provider.name}
  </div>
  <br />

  <ui5-title level="H6">{`Attributes (${Object.values(provider.getAttributes()).length})`}</ui5-title>
  <ul>
    {#each Object.values(provider.getAttributes()) as attribute}
      <li>
        {attribute.name}
        <ul>
          <li><ui5-label>value:</ui5-label> {attribute.value}</li>
          <li><ui5-label>type:</ui5-label> {attribute.type}</li>
          <li><ui5-label>mandatory: </ui5-label> {String(attribute.mandatory)}</li>
          <li><ui5-label>array:</ui5-label> {String(attribute.array)}</li>
        </ul>
      </li>
    {/each}
  </ul>

  <ui5-title level="H6">{`Elements (${Object.values(provider.getElements()).length})`}</ui5-title>
  <ul>
    {#each Object.values(provider.getElements()) as element}
      <li>
        {element.name}
        <ul>
          <li><ui5-label>type:</ui5-label> {element.type}</li>
          <li><ui5-label>url: </ui5-label> {String(element.url)}</li>
          <li><ui5-label>element:</ui5-label> {String(element.element)}</li>
        </ul>
      </li>
    {/each}
  </ul>
</div>

<style>
</style>
