<script lang="ts">
  import { onMount } from "svelte";
  import { WardStore } from "../../WardStore";
  import WardDefinitionsTreeItem from "./WardDefinitionsTreeItem.svelte";
  import { SelectionStore } from "../../SelectionStore";

  // Stores //

  let definitions: Record<string, any>;
  $: definitions = $WardStore.definitions;

  // Lifecycle //

  let treeDefinition: HTMLElement;

  onMount(() => {
    treeDefinition.addEventListener(
      "item-click",
      handleTreeItemDefinitionClick
    );
  });

  // Event Handlers //

  function handleTreeItemDefinitionClick(event: any) {
    SelectionStore.update((selection) => {
      const type = event.detail.item.getAttribute("data-attribute-type");
      const id = event.detail.item.getAttribute("data-attribute-id");
      if (selection.type === type && selection.id === id) {
        return {
          type: null,
          id: null,
        };
      }
      return {
        type,
        id,
      };
    });
  }
</script>

<ui5-panel style="margin-top:1rem;">
  <div style="width:100%;display:flex;align-items:center;" slot="header">
    <ui5-title style="margin-right:auto" slot="startContent" level="H5">
      {`Definitions (${Object.values(definitions).length})`}
    </ui5-title>
  </div>
  <ui5-tree bind:this={treeDefinition}>
    {#each Object.keys(definitions) as definitionId}
      <WardDefinitionsTreeItem {definitionId} />
    {/each}
  </ui5-tree>
</ui5-panel>

<style>
</style>
