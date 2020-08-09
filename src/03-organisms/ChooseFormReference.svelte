<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Choose Form">
    <p>
        The choose form allows the user to select whether to create a new
        session or join an existing session
    </p>

    <ReferenceSection heading="Default">
        <p>
            There is only one type of choose form which will change its
            orientation based on the screen size (portrait on smaller screens,
            landscape on larger screens)
        </p>
        <div style="height: 600px;">
            <form onsubmit="return false;" class="choose-form">
                <button
                    class="choose-form__create-session button button--square">
                    <svg
                        class="button__icon icon icon--huge"
                        aria-hidden="true">
                        <use xlink:href="#create"></use>
                    </svg>
                    <span class="button__text font-body">Create Session</span>
                </button>
                <button class="choose-form__join-session button button--square">
                    <svg
                        class="button__icon icon icon--huge"
                        aria-hidden="true">
                        <use xlink:href="#join"></use>
                    </svg>
                    <span class="button__text font-body">Join Session</span>
                </button>
            </form>
        </div>
    </ReferenceSection>
</ReferenceSheet>
