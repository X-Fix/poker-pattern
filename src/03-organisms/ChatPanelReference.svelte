<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Chat Panel">
    <p>
        The chat panel allows participants to communicate in real time via text messages
    </p>

    <ReferenceSection heading="Default">
        <p>
            By default the chat panel height will be 100vh, and hidden off-screen to the right. This example has inline overrides to demonstrate what it would look like on a small screen (so beware when copy/pasting)
        </p>
        <div style="border: 1px solid black; height: 600px; width: 360px; position: relative;">
            <div class="chat-panel" style="height: 100%; position: static; transform: none; width: 100%">
                <ul class="chat-panel__messages">
                    <li class="chat-bubble chat-bubble--self">
                        So what’s this task all about anyway?
                    </li>
                    <li class="chat-bubble">
                        <span class="chat-bubble__participant">Damian Stander</span>
                        We need to replace the NG1 header with an upgraded version. We don’t need to fully migrate, just write an upgrade file.
                    </li>
                    <li class="chat-bubble">
                        <span class="chat-bubble__participant">Oom</span>
                        We’ve done it before, it’s not very difficult. Create a new file and add about 10 lines of code
                    </li>
                    <li class="chat-bubble">
                        <span class="chat-bubble__participant">Sinta</span>
                        So how long is that, half an hour?
                    </li>
                    <li class="chat-bubble chat-bubble--self">
                        Remember, this isn’t about time. We’re estimating complexity compared to other tasks, not committing to a deadline...
                    </li>
                </ul>
                <form onsubmit="return false" class="chat-panel__message-form">
                    <label class="text-input" aria-label="Type a message">
                        <input
                            class="text-input__text"
                            type="text"
                            placeholder="Type a message" />
                    </label>
                    <button class="button button--secondary" type="submit" aria-label="Send Message" title="Send Message">
                        <svg class="button__icon icon" aria-hidden="true" focusable="false">
                            <use xlink:href="#send"></use>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </ReferenceSection>
</ReferenceSheet>
