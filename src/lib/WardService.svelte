<script lang="ts">
  import Ward, { type Message } from '@uncover/ward'
  import { onDestroy } from 'svelte'

  interface MessageLog extends Message {
    timestamp: Date
  }
  let messages: MessageLog[] = []

  const wardLogService = Ward.addService('ward-dev-tools--log-service')
  const wardTestService = Ward.addService('ward-dev-tools--test-service')

  wardLogService.addHandler((message: Message) => {
    messages = [
      ...messages,
      {
        ...message,
        timestamp: new Date(),
      },
    ]
  })

  const sendTestMessage = function () {
    wardTestService.sendMessage({
      type: 'test-message',
      payload: 'test',
    })
  }

  onDestroy(() => {
    wardLogService.terminate()
    wardTestService.terminate()
  })
</script>

<ui5-tab
  text="Services"
  selected
>
  <div>
    <ui5-button
      accessibleRole="Button"
      on:click={sendTestMessage}
    >
      Send Message
    </ui5-button>
  </div>

  <ui5-panel header-text={`Dispatchers (${Object.values(Ward.data.dispatchers).length})`}>
    <ui5-list>
      {#if Ward.data}
        {#each Object.values(Ward.data.dispatchers) as dispatcher}
          <ui5-li>
            <ui5-label>{dispatcher.id}</ui5-label>
          </ui5-li>
        {/each}
      {/if}
    </ui5-list>
  </ui5-panel>

  <ui5-panel header-text={`Services (${Object.values(Ward.data.services).length})`}>
    <ui5-list>
      {#if Ward.data}
        {#each Object.values(Ward.data.services) as service}
          <ui5-li>
            <ui5-label>{service.id}</ui5-label>
          </ui5-li>
        {/each}
      {/if}
    </ui5-list>
  </ui5-panel>

  <ui5-panel header-text={`Messages (${messages.length})`}>
    <ui5-list>
      {#each messages.toReversed() as message}
        <ui5-li
          additional-text={message.timestamp.toLocaleTimeString('en-us', { hour12: false })}
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
