<svelte:options tag={null} />

<script lang="ts">
  import { WardStore } from '../../WardStore'

  // Properties //

  export let urlId: string

  // Store access //

  let url: any
  $: url = $WardStore.urls[urlId]
</script>

<div>
  <ui5-title level='H5'>{`URL Details (${urlId})`}</ui5-title>
  <p>{urlId}</p>
  <pre>{JSON.stringify(url.data, null, 2)}</pre>
</div>

<style>
</style>
