<svelte:options tag="ward-dev-tools" />

<script lang="ts">
  let avatar: any;
  let dialog: any;

  function onOpenDevTools() {
    dialog.show();
    setTimeout(() => {
      avatar.pressed = false;
    }, 0);
  }

  function onCloseDevTools() {
    dialog.close();
    setTimeout(() => {
      avatar.pressed = false;
      avatar.focus();
    }, 0);
  }
</script>

<span class="ui5-content-density-compact">

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <ui5-avatar
    bind:this={avatar}
    class="ward-dev-tools-button"
    part="ward-dev-tools-button"
    colorScheme="Accent7"
    color-scheme="Accent9"
    design="Emphasized"
    icon="world"
    interactive
    size="XS"
    on:click={onOpenDevTools}
  />

  <ui5-dialog
    bind:this={dialog}
    class="ward-dev-tools-dialog"
    data-ui5-compact-size
    draggable
    header-text={`Ward Dev Tools${window.uncover.wardVersion ? ` (${window.uncover.wardVersion})` : ''}`}
    resizable
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
  .ward-dev-tools-dialog {
    width: 90%;
    height: 95%;
  }
  .ward-dev-tools-dialog::part(content) {
    padding: 0;
    overflow: hidden;
  }
  .ward-dev-tools-dialog::part(footer) {
    padding: 0;
  }
</style>
