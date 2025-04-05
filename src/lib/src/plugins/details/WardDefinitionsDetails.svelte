<script lang="ts">
  import { WardStore } from '../../WardStore'

  // Properties //

  export let definitionId: string

  // Stores //

  let definition: any
  $: definition = $WardStore.definitions[definitionId]
</script>

{#if definition}
  <div>
    <ui5-title level="H5">{`Definition Details (${definitionId})`}</ui5-title>
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
{:else}
  <div>Deinition not found</div>
{/if}

<style>
</style>
