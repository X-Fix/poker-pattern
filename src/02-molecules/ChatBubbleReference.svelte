<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Chat Bubble">
    <p>
        The chat bubbles display a given chat message with the poster's name
    </p>

    <ReferenceSection heading="Default">
        <p>
            The default chat bubble shows a message from any participant other than the current user
        </p>
        <ul style="list-style: none; margin: 0; padding: 0; width: 360px;">
            <li class="chat-bubble">
                <span class="chat-bubble__participant">Damian Stander</span>
                We need to replace the NG1 header with an upgraded version. We don’t need to fully migrate, just write an upgrade file.
            </li>
        </ul>
    </ReferenceSection>
    <ReferenceSection heading="Self">
        <p>
            The 'Self' variation adjusts the color and alignment of the chat bubble within the container. It also should not contain a participant name
        </p>
        <ul style="list-style: none; margin: 0; padding: 0; width: 360px;">
            <li class="chat-bubble chat-bubble--self">
                Remember, this isn’t about time. We’re estimating complexity compared to other tasks, not committing to a deadline...
            </li>
        </ul>
    </ReferenceSection>
</ReferenceSheet>
