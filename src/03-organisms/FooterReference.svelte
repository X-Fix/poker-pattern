<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Footer">
    <p>
        The main footer appears at the bottom of the page at all times, even
        though lexically it may be defined inside of forms when it contains a
        submit-type button
    </p>
    <p>
        The header's spacing adjusts as the screen gets larger, although it
        never gets wider than the widest intended view-width (1024px)
    </p>

    <ReferenceSection heading="Default">
        <p>
            The default footer just has content which can either be text and/or
            a CTA. If it contains a CTA, the text will be hidden.
        </p>

        <footer
            class="footer"
            style="position: static; transform: none; margin: 0 auto;">
            <span class="footer__content">
                <span class="footer__status-text font-title">
                    TSK-124: Create new header
                </span>
            </span>
        </footer>
        <footer
            class="footer"
            style="position: static; transform: none; margin: 16px auto 0;">
            <span class="footer__content">
                <span class="footer__cta">
                    <button class="button button--wide">
                        <svg class="button__icon icon" aria-hidden="true">
                            <use xlink:href="#create"></use>
                        </svg>
                        <span class="button__text font-title">
                            Confirm Vote
                        </span>
                    </button>
                </span>
                <span class="footer__status-text font-title">
                    TSK-124: Create new header
                </span>
            </span>
        </footer>

    </ReferenceSection>
    <ReferenceSection heading="Actions">
        <p>
            The --actions modifier changes the spacing to allow for actions in
            the footer. This will align the content to the left and actions to
            the right on larger screens, and on smaller screens the actions will
            be centered and the content will be hidden
        </p>

        <footer
            class="footer footer--actions"
            style="position: static; transform: none; margin: 0 auto;">
            <span class="footer__content">
                <span class="footer__status-text font-title">
                    TSK-124: Create new header
                </span>
            </span>
            <span class="footer__actions">
                <button class="button button--secondary">
                    <svg class="button__icon icon icon--reverse" aria-hidden="true">
                        <use xlink:href="#redo"></use>
                    </svg>
                    <span class="button__text font-title">Redo Vote</span>
                </button>
                <button class="button">
                    <svg class="button__icon icon" aria-hidden="true">
                        <use xlink:href="#create"></use>
                    </svg>
                    <span class="button__text font-title">New Vote</span>
                </button>
            </span>
        </footer>
        <footer
            class="footer footer--actions"
            style="position: static; transform: none; margin: 16px auto 0;">
            <span class="footer__content">
                <span class="footer__cta">
                    <button class="button button--wide">
                        <svg class="button__icon icon" aria-hidden="true">
                            <use xlink:href="#create"></use>
                        </svg>
                        <span class="button__text font-title">
                            Confirm Vote
                        </span>
                    </button>
                </span>
                <span class="footer__status-text font-title">
                    TSK-124: Create new header
                </span>
            </span>
            <span class="footer__actions">
                <button class="button button--secondary">
                    <svg class="button__icon icon icon--reverse" aria-hidden="true">
                        <use xlink:href="#redo"></use>
                    </svg>
                    <span class="button__text font-title">Redo Vote</span>
                </button>
                <button class="button">
                    <svg class="button__icon icon" aria-hidden="true">
                        <use xlink:href="#create"></use>
                    </svg>
                    <span class="button__text font-title">New Vote</span>
                </button>
            </span>
        </footer>
    </ReferenceSection>
</ReferenceSheet>
