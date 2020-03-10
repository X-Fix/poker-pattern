<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
    import ReferenceCode from '../components/ReferenceCode.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Participants List">
    <p>
        The participants list is a list of all the users in the session. During
        the "create vote" phase, all participants will appear in the list, but
        During the "voting" phase, the users who were not included in the
        current vote will not appear in the list, although they will still be a
        participant of the session.
    </p>

    <ReferenceSection heading="Idle">
        <p>
            On their own the participant cards are very simple. Just a bottom
            border and some spacing
        </p>
        <ul class="participants-list" style="width: 324px;">
            <li class="participant">
                <span class="participant__name font-body">Oom</span>
            </li>
        </ul>
    </ReferenceSection>

    <ReferenceSection heading="Modifiers">
        <p>
            There are a couple of modifiers that will apply to the participant
            cards depending on their relation to the user viewing the app, and
            (later) the participant's score relative to the others. These
            modifiers are all independent of each other and can be used in any
            appropriate combination
        </p>

        <p>"--me" indicates the participant card represents the viewing user</p>

        <ul class="participants-list" style="width: 324px;">
            <li class="participant participant--me">
                <span class="participant__name font-body">Oom</span>
            </li>
        </ul>

        <p>
            "--owner" indicates the participant card represents the session
            owner
        </p>

        <ul class="participants-list" style="width: 324px;">
            <li class="participant participant--owner">
                <span class="participant__name font-body">Sinta</span>
            </li>
        </ul>

        <p>
            "--outlier" indicates this participant's score is an overall outlier
        </p>

        <ul class="participants-list" style="width: 324px;">
            <li class="participant participant--outlier">
                <span class="participant__name font-body">Cameron</span>
                <span class="participant__score font-headline">5</span>
            </li>
        </ul>

    </ReferenceSection>

    <ReferenceSection heading="{'"Create Vote" phase'}">
        <p>
            The listed participants cards will include a switch to toggle their
            participation in the next vote
        </p>

        <ul class="participants-list" style="width: 324px;">
            <li class="participant participant--me">
                <label class="switch-input">
                    <p class="switch-input__label">Oom</p>
                    <input type="checkbox" name="participants" checked />
                    <span
                        class="switch-input__switch"
                        aria-hidden="true"></span>
                </label>
            </li>
            <li class="participant">
                <label class="switch-input">
                    <p class="switch-input__label">Paul Treurnicht</p>
                    <input type="checkbox" name="participants" />
                    <span
                        class="switch-input__switch"
                        aria-hidden="true"></span>
                </label>
            </li>
        </ul>
    </ReferenceSection>

    <ReferenceSection heading="{'"Voting" phase'}">
        <p>
            The listed participants will each have an icon displaying their
            current progress in the voting process. If viewed from the
            session-owner's point of view, the participants will each have a
            'remove' button programmatically added
        </p>

        <p>
            It's important to ensure that the state icon has a title element,
            the action button has the title attribute, and both have the
            aria-label attribute
        </p>

        <ul class="participants-list" style="width: 324px;">
            <li class="participant participant--me">
                <span class="participant__name font-body">Oom</span>
                <svg
                    class="participant__state icon icon--green"
                    aria-label="This participant is finished voting">
                    <title>This participant is finished voting</title>
                    <use xlink:href="#done"></use>
                </svg>
                <button
                    class="participant__action"
                    title="Click to remove this participant"
                    aria-label="Click to remove this participant">
                    <svg class="icon icon--blue" aria-hidden="true">
                        <use xlink:href="#remove"></use>
                    </svg>
                </button>
            </li>
            <li class="participant participant--owner">
                <span class="participant__name font-body">Paul Treurnicht</span>
                <svg
                    class="participant__state icon icon--green"
                    aria-label="This participant is finished voting">
                    <title>This participant is finished voting</title>
                    <use xlink:href="#done"></use>
                </svg>
                <!-- <button class="participant__action">
                    <svg class="icon icon--blue">
                        <use xlink:href="#remove"></use>
                    </svg>
                </button> -->
            </li>
            <li class="participant">
                <span class="participant__name font-body">Damian Stander</span>
                <svg
                    class="participant__state icon icon--grey"
                    aria-label="This participant has temporarily disconnected">
                    <title>This participant has temporarily disconnected</title>
                    <use xlink:href="#snooze"></use>
                </svg>
                <button
                    class="participant__action"
                    title="Click to remove this participant"
                    aria-label="Click to remove this participant">
                    <svg class="icon icon--blue" aria-hidden="true">
                        <use xlink:href="#remove"></use>
                    </svg>
                </button>
            </li>
            <li class="participant">
                <span class="participant__name font-body">Cameron</span>
                <svg
                    class="participant__state icon"
                    aria-label="This participant is still busy voting">
                    <title>This participant is still busy voting</title>
                    <use xlink:href="#busy"></use>
                </svg>
                <button
                    class="participant__action"
                    title="Click to remove this participant"
                    aria-label="Click to remove this participant">
                    <svg class="icon icon--blue" aria-hidden="true">
                        <use xlink:href="#remove"></use>
                    </svg>
                </button>
            </li>
        </ul>
    </ReferenceSection>

    <ReferenceSection heading="{'"Review" phase'}">
        <p>
            During the review phase, everyone's selected score is displayed and
            the outliers are highlighted for quick reference
        </p>

        <ul class="participants-list" style="width: 324px;">
            <li class="participant participant--me participant--outlier">
                <span class="participant__name font-body">Oom</span>
                <span class="participant__score font-headline">8</span>
            </li>
            <li class="participant participant--owner">
                <span class="participant__name font-body">Paul Treurnicht</span>
                <span class="participant__score font-headline">5</span>
            </li>
            <li class="participant participant--outlier">
                <span class="participant__name font-body">Damian Stander</span>
                <span class="participant__score font-headline">3</span>
            </li>
            <li class="participant">
                <span class="participant__name font-body">Cameron</span>
                <span class="participant__score font-headline">5</span>
            </li>
        </ul>
    </ReferenceSection>
</ReferenceSheet>
