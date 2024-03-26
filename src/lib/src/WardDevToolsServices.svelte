<svelte:options tag={null} />

<script lang="ts">
  import Ward, {
    ServiceEvent,
    type Message,
    type WardData,
  } from "@uncover/ward";
  
  import { onDestroy } from "svelte";

  interface MessageLog extends Message {
    timestamp: Date;
  }
  let messages: MessageLog[] = [];
  let data: WardData = Ward.data;

  Ward.register(onWardDataChange);

  const wardLogService = Ward.addService("ward-dev-tools--log-service");
  let wardTestService: ServiceEvent;

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
    console.log(data);
  }

  function onSendTestMessage() {
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
    messages = []
  }

  onDestroy(() => {
    Ward.unregister(onWardDataChange);
    wardLogService.terminate();
    wardTestService && wardTestService.terminate();
  });
</script>

<ui5-tab text="Services" selected style="display:flex;">
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
          <ui5-button
            on:click={onResetMessages}
            slot="endContent"
          >
            Reset Messages
          </ui5-button>
        {/if}
    </div>
    <ui5-list>
      {#each messages.toReversed() as message}
        <ui5-li
          additional-text={message.timestamp.toLocaleTimeString("en-us", {
            hour12: false,
          })}
          description={`Sent by ${message._dispatcherId} | ${message._serviceId}`}
          icon="email"
        >
          {message.type}
        </ui5-li>
      {/each}
    </ui5-list>
  </ui5-panel>
</ui5-tab>

<style>
</style>
