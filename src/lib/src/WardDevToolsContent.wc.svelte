<svelte:options tag="ward-dev-tools-content" />

<script lang="ts">
  import WardPlugins from "./WardDevToolsPlugins.svelte";
  import WardServices from "./WardDevToolsServices.svelte";
</script>

<ui5-tabcontainer fixed>
  <WardPlugins />
  <WardServices />
</ui5-tabcontainer>

<style>
  ui5-tabcontainer {
    height: 100%;
  }
</style>
