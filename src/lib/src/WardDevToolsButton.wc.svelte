<svelte:options tag="ward-dev-tools-button" />

<script lang="ts">
  import Ward, { type Message } from "@uncover/ward";

  let avatar;

  const service = Ward.addService("ward-dev-tools-button");

  service.addHandler(onMessage);

  function onMessage(message: Message) {
    switch (message.type) {
      case "ward-dev-tools/close": {
        avatar.focus();
        handleAvatarInteracted();
        break;
      }
      default: {
        break;
      }
    }
  }

  function onOpenDevTools() {
    service.sendMessage({
      type: "ward-dev-tools/open",
      payload: null,
    });
    handleAvatarInteracted();
  }

  function handleAvatarInteracted() {
    setTimeout(() => {
      avatar.pressed = false;
    }, 0);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ui5-avatar
  bind:this={avatar}
  part="ward-dev-tools-button"
  color-scheme="Accent9"
  design="Emphasized"
  icon="world"
  interactive
  size="XS"
  on:click={onOpenDevTools}
/>

<style>
</style>
