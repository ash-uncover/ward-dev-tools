<svelte:options tag={null} />

<script lang="ts">
  import { onDestroy } from 'svelte'
  import { WardStore } from '../../WardStore'
  import type { WardData } from '@uncover/ward'

  // Properties //

  export let urlId: string

  // Store access //

  let urls: any
  const unsubscribeWard = WardStore.subscribe((wardData: WardData) => {
    urls = wardData.urls
  })

  // Lifecycle //

  onDestroy(() => {
    unsubscribeWard()
  })
</script>

<div>
  <ui5-title level='H5'>URL Details</ui5-title>
  <p>{urlId}</p>
  <pre>{JSON.stringify(urls[urlId].data, null, 2)}</pre>
</div>

<style>
</style>
