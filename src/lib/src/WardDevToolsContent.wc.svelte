<svelte:options tag="ward-dev-tools-content" />

<script lang="ts">
  import WardPlugins from "./plugins/WardPlugins.svelte";
  import WardServices from "./services/WardServices.svelte";
</script>

<ui5-tabcontainer fixed data-ui5-compact-size>
  <WardPlugins />
  <WardServices />
</ui5-tabcontainer>

<style>
  ui5-tabcontainer {
    height: 100%;
  }
</style>
