<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy } from 'svelte'
  import { WardStore } from '../../WardStore'
  import type { WardData } from '@uncover/ward'

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
