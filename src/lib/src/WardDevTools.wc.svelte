<svelte:options tag="ward-dev-tools" />

<script>
  let dialog;

  function onOpenDevTools() {
    dialog.show();
  }

  function onCloseDevTools() {
    dialog.close();
  }
</script>

<span>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <ui5-avatar
    class="ward-dev-tools-button"
    part="ward-dev-tools-button"
    colorScheme="Accent7"
    design="Emphasized"
    icon="world"
    interactive
    size="XS"
    on:click={onOpenDevTools}
  />

  <ui5-dialog
    bind:this={dialog}
    class="ward-dev-tools-dialog"
    header-text="Ward Dev Tools"
  >
    <ward-dev-tools-content />

    <ui5-bar slot="footer">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <ui5-button on:click={onCloseDevTools} slot="endContent">
        Close
      </ui5-button>
    </ui5-bar>
  </ui5-dialog>
</span>

<style>
  .ward-dev-tools-button {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
  }
  .ward-dev-tools-dialog {
    width: 80%;
    height: 80%;
  }
  .ward-dev-tools-dialog::part(content) {
    padding: 0;
    overflow: hidden;
  }
  .ward-dev-tools-dialog::part(footer) {
    padding: 0;
  }
</style>
