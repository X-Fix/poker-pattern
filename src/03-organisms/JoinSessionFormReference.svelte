<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Join Session Form">
    <p>
        The join session form allows a user to join an existing poker session by
        providing the required session details
    </p>

    <ReferenceSection heading="Default">
        <p>
            There's only one type of join session form. Like the create session
            form, it has a transparent background on smaller screens, but is
            placed inside a card on larger screens
        </p>

        <div style="height: 600px; background-color: #FAFAFA; padding: 32px;">
            <form onsubmit="return false;" class="join-session-form">
                <h2 class="join-session-form__heading font-headline">
                    Join Session
                </h2>
                <label class="join-session-form__text-input text-input">
                    <p class="text-input__label">Your Name</p>
                    <input
                        class="text-input__text"
                        type="text"
                        placeholder="Eg. ‘John Johnson’" />
                </label>
                <label class="join-session-form__text-input text-input">
                    <p class="text-input__label">Session ID</p>
                    <input
                        class="text-input__text"
                        type="text"
                        placeholder="Eg. ‘27y2k’" />
                </label>
                <button
                    class="join-session-form__submit-button button button--wide"
                    type="submit">
                    <svg class="button__icon icon" aria-hidden="true">
                        <use xlink:href="#join"></use>
                    </svg>
                    <span class="button__text font-title">Join Session</span>
                </button>
            </form>
        </div>
    </ReferenceSection>
</ReferenceSheet>
