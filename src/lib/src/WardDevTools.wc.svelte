<svelte:options tag="ward-dev-tools" />

<script>
    import WardPlugins from "./WardPlugins.svelte";
    import WardServices from "./WardServices.svelte";

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
