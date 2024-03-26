<svelte:options tag="ward-dev-tools-dialog" />

<script lang="ts">
  import Ward, { type Message } from "@uncover/ward";

  let dialog;

  const service = Ward.addService("ward-dev-tools-dialog");
  service.addHandler(onMessage);

  function onMessage(message: Message) {
    switch (message.type) {
      case "ward-dev-tools/open": {
        dialog.show();
        break;
      }
      case "ward-dev-tools/close": {
        dialog.close();
        break;
      }
      default: {
        break;
      }
    }
  }
  
  function onCloseDevTools() {
    dialog.close();
  }
</script>

<ui5-dialog
  bind:this={dialog}
  id="ward-dev-tools-dialog"
  data-ui5-compact-size
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

<style>
  #ward-dev-tools-dialog {
    width: 80%;
    height: 80%;
  }
  #ward-dev-tools-dialog::part(content) {
    padding: 0;
    overflow: hidden;
  }
  #ward-dev-tools-dialog::part(footer) {
    padding: 0;
  }
</style>
