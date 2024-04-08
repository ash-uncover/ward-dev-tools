<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy } from 'svelte'
  import { WardStore } from '../../WardStore'
  import type { WardData } from '@uncover/ward'
  import type PluginDefine from '@uncover/ward/dist/plugin/object/PluginDefine'

  export let definitionId: string
  let definition: PluginDefine
  const unsubscribeWard = WardStore.subscribe((wardData: WardData) => {
    definition = wardData.definitions[definitionId]
  })

  // Lifecycle //

  onDestroy(() => {
    unsubscribeWard()
  })
</script>

<div>
  <ui5-title level="H5">Definition Details</ui5-title>
  <br />

  <div>
    <ui5-label>Name:</ui5-label>
    {definition.name}
  </div>
  <br />

  <ui5-title level="H6">{`Properties (${definition.properties.length})`}</ui5-title>
  <ul>
    {#each definition.properties as property}
      <li>
        {property.name}
        <ul>
          <li><ui5-label>type:</ui5-label> {property.type}</li>
          <li><ui5-label>mandatory:</ui5-label> {String(property.mandatory)}</li>
          <li><ui5-label>array:</ui5-label> {String(property.array)}</li>
        </ul>
      </li>
    {/each}
  </ul>

  <ui5-title level="H6">{`Attributes (${definition.attributes.length})`}</ui5-title>
  <ul>
    {#each definition.attributes as attribute}
      <li>
        {attribute.name}
        <ul>
          <li><ui5-label>type:</ui5-label> {attribute.type}</li>
          <li><ui5-label>mandatory: </ui5-label> {String(attribute.mandatory)}</li>
          <li><ui5-label>array:</ui5-label> {String(attribute.array)}</li>
        </ul>
      </li>
    {/each}
  </ul>

  <ui5-title level="H6">{`Elements (${definition.elements.length})`}</ui5-title>
  <ul>
    {#each definition.elements as element}
      <li>{element.name}</li>
    {/each}
  </ul>
</div>

<style>
</style>
