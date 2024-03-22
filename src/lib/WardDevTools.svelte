<svelte:options customElement="ward-dev-tools" />

<script>
  import '@ui5/webcomponents-icons/dist/Email.js'

  import '@ui5/webcomponents/dist/Button.js'
  import '@ui5/webcomponents/dist/Label.js'
  import '@ui5/webcomponents/dist/List.js'
  import '@ui5/webcomponents/dist/Panel.js'
  import '@ui5/webcomponents/dist/StandardListItem.js'
  import '@ui5/webcomponents/dist/Tab.js'
  import '@ui5/webcomponents/dist/TabContainer'
  import '@ui5/webcomponents/dist/Title'

  import WardPlugins from './WardPlugins.svelte'
  import WardService from './WardService.svelte'
</script>

<ui5-tabcontainer fixed>
  <WardPlugins />
  <WardService />
</ui5-tabcontainer>

<style>
  ui5-tabcontainer {
    height: 100%;
  }
</style>
