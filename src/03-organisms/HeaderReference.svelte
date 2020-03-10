<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
    import ReferenceCode from '../components/ReferenceCode.svelte';
</script>

<style>

</style>

<div style="height: 60px;"></div>
<ReferenceSheet heading="Header">
    <p>
        The main header appears at the top of the page at all times. Before
        joining or creating a session, the header buttons are not visible as
        their options do not apply (this will be handled programmatically)
    </p>
    <p>
        The header's buttons and spacing adjust as the screen gets larger. At
        smaller screens, the buttons are just icons, and at the largest screen
        sizes the buttons receive outter padding to maintain a maximum width
    </p>
    <ReferenceSection heading="Default">
        <p>
            There is only one style of heading. Resize this webpage to see the
            various header versions
        </p>

        <header class="header">
            <section class="header__content">
                <button class="button button--header">
                    <svg class="button__icon icon" aria-hidden="true">
                        <use xlink:href="#menu"></use>
                    </svg>
                    <span class="button__text font-body">Menu</span>
                </button>
                <h1 class="header__heading font-title">Poker Planning</h1>
                <button class="button button--header">
                    <svg class="button__icon icon" aria-hidden="true">
                        <use xlink:href="#chat"></use>
                    </svg>
                    <span class="button__text font-body">Chat</span>
                </button>
            </section>
        </header>
    </ReferenceSection>
</ReferenceSheet>
