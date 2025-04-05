<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { LogLevels } from "@uncover/js-utils-logger";
  import {
    Ward, 
    ServiceEvent,
    type Message,
    type WardData,
  } from "@uncover/ward";

  interface MessageLog extends Message {
    timestamp: Date;
  }
  let messages: MessageLog[] = [];
  let messageSelected: MessageLog | null = null;
  let data: WardData = Ward.data;

  let refButtonLog: HTMLElement;
  let refListMessages: HTMLElement;

  Ward.register(onWardDataChange);

  const wardLogService = Ward.addService("ward-dev-tools--log-service");
  let wardTestService: ServiceEvent | null = null;

  wardLogService.addHandler((message: Message) => {
    messages = [
      ...messages,
      {
        ...message,
        timestamp: new Date(),
      },
    ];
  });

  function onWardDataChange() {
    data = Ward.data;
  }

  function onSendTestMessage() {
    wardTestService &&
      wardTestService.sendMessage({
        type: "test-message",
        payload: "test",
      });
  }

  function onStartTestService() {
    wardTestService = Ward.addService("ward-dev-tools--test-service");
  }

  function onStopTestService() {
    wardTestService && wardTestService.terminate();
    wardTestService = null;
  }

  function onResetMessages() {
    messageSelected = null;
    messages = [];
  }

  // Lifecycle //

  onMount(() => {
    refButtonLog.addEventListener("selection-change", handleLogSelectionChange);
    refListMessages.addEventListener(
      "selection-change",
      handleListMessagesSelectionChange
    );
  });

  onDestroy(() => {
    Ward.unregister(onWardDataChange);
    wardLogService.terminate();
    wardTestService && wardTestService.terminate();
  });

  // Event Handlers //

  function handleLogSelectionChange(event: any) {
    const selectedLogLevel = parseInt(
      event.detail.selectedItems[0].getAttribute("data-log-level")
    );
    switch (selectedLogLevel) {
      case LogLevels.DEBUG: {
        Ward.logConfig.debug();
        break;
      }
      case LogLevels.INFO: {
        Ward.logConfig.info();
        break;
      }
      case LogLevels.WARN: {
        Ward.logConfig.warn();
        break;
      }
      case LogLevels.ERROR: {
        Ward.logConfig.error();
        break;
      }
      default: {
        Ward.logConfig.off();
        break;
      }
    }
  }

  function handleListMessagesSelectionChange(event: any) {
    const messageClicked =
      messages[
        event.detail.selectedItems[0].getAttribute("data-message-index")
      ];
    messageSelected = messageClicked;
  }
</script>

<ui5-tab text="Services" style="display:flex;" data-ui5-compact-size>
  {#if window.uncover.wardVersion}
    <ui5-segmented-button bind:this={refButtonLog}>
      {#each Object.keys(LogLevels) as level}
        <ui5-segmented-button-item
          data-log-level={LogLevels[level]}
          pressed={LogLevels[level] === Ward.logConfig.level}
          >{level}</ui5-segmented-button-item
        >
      {/each}
    </ui5-segmented-button>
  {/if}

  {#if Object.values(data.dispatchers).length}
    <ui5-panel
      header-text={`Dispatchers (${Object.values(data.dispatchers).length})`}
      style="margin-top:1rem;"
    >
      <ui5-list>
        {#each Object.values(data.dispatchers) as dispatcher}
          <ui5-li>
            <ui5-label>{dispatcher}</ui5-label>
          </ui5-li>
        {/each}
      </ui5-list>
    </ui5-panel>
  {/if}

  {#if Object.values(data.services).length}
    <ui5-panel style="margin-top:1rem;">
      <div style="width:100%;display:flex;align-items:center;" slot="header">
        <ui5-title style="margin-right:auto" slot="startContent" level="H5">
          {`Services (${Object.values(data.services).length})`}
        </ui5-title>
        {#if wardTestService}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <ui5-button
            on:click={onSendTestMessage}
            design="Emphasized"
            slot="endContent"
          >
            Send Test Message
          </ui5-button>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <ui5-button
            style="margin-left: 0.5rem"
            design="Negative"
            slot="endContent"
            on:click={onStopTestService}
          >
            Stop Test Service
          </ui5-button>
        {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <ui5-button
            on:click={onStartTestService}
            design="Emphasized"
            slot="endContent"
          >
            Start Test Service
          </ui5-button>
        {/if}
      </div>

      <ui5-list>
        {#each Object.values(data.services) as service}
          <ui5-li
            additional-text={`${messages.filter((msg) => msg._serviceId === service.id).length} messages`}
            additional-text-state="Information"
            icon={service.type === "event" ? "enter-more" : "journey-arrive"}
            tooltip={service.type === "event"
              ? "local service"
              : "iframe service"}
          >
            <ui5-label>{service.id}</ui5-label>
          </ui5-li>
        {/each}
      </ui5-list>
    </ui5-panel>
  {/if}

  <ui5-panel
    header-text={`Messages (${messages.length})`}
    style="margin-top:1rem;"
  >
    <div style="width:100%;display:flex;align-items:center;" slot="header">
      <ui5-title style="margin-right:auto" slot="startContent" level="H5">
        {`Messages (${messages.length})`}
      </ui5-title>
      {#if messages.length}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <ui5-button on:click={onResetMessages} slot="endContent">
          Reset Messages
        </ui5-button>
      {/if}
    </div>
    <ui5-list bind:this={refListMessages} mode="SingleSelect">
      {#each messages.toReversed() as message, i}
        <ui5-li-custom
          style="padding:0.5rem"
          data-message-index={messages.length - 1 - i}
        >
          <div style="width:100%">
            <div
              style="display:flex;align-items:center;width:100%;height:2rem;"
            >
              <ui5-icon style="margin-inline-end:0.5rem" name="email"></ui5-icon>
              <span>{message.type}</span>
              <ui5-label style="margin-inline-start:auto">
                {message.timestamp.toLocaleTimeString("en-us", {
                  hour12: false,
                })}
              </ui5-label>
            </div>
            <div
              style={`display:${messageSelected === message ? "block" : "none"}`}
            >
              <div>
                <ui5-label style="height:1.5rem">
                  {`Sent by ${message._dispatcherId} | ${message._serviceId}`}
                </ui5-label>
              </div>
              <div>
                {JSON.stringify(message.payload, null, 2)}
              </div>
            </div>
          </div>
        </ui5-li-custom>
      {/each}
    </ui5-list>
  </ui5-panel>
</ui5-tab>

<style>
</style>
