<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';

    let isMenuOpen = true;
    const settings = {
        displayAnnouncements: true,
        displayTips: false,
        playNotificationSounds: true,
        useOneTouchVote: false,
    };

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function toggleSetting(event) {
        const setting = event.currentTarget.value;
        settings[setting] = !settings[setting];
    }
</script>

<style>

</style>

<ReferenceSheet heading="Menu">
    <p>
        The menu component is displayed as a drop down when the menu button is
        toggled in the header component
    </p>

    <ReferenceSection heading="Default">
        <p>
            There's only one type of menu. It will span the width of the screen
            on smaller screen-sizes, and then adopt a max-width on larger
            screens
        </p>

        <button on:click="{toggleMenu}">Toggle menu</button>
        <div style="padding: 2rem; background-color: #E3F1FD;">
            <div class="menu" class:menu--open="{isMenuOpen}">
                <h2 class="menu__heading font-title">Settings</h2>
                <button
                    class="menu__toggle-button toggle-button"
                    type="button"
                    aria-pressed="{settings.displayAnnouncements}"
                    on:click="{toggleSetting}"
                    value="displayAnnouncements">
                    <span class="toggle-button__label">
                        Display announcements
                    </span>
                    <span
                        class="toggle-button__switch"
                        aria-hidden="true"></span>
                </button>
                <button
                    class="menu__toggle-button toggle-button"
                    type="button"
                    aria-pressed="{settings.displayTips}"
                    on:click="{toggleSetting}"
                    value="displayTips">
                    <span class="toggle-button__label">Display tips</span>
                    <span
                        class="toggle-button__switch"
                        aria-hidden="true"></span>
                </button>
                <button
                    class="menu__toggle-button toggle-button"
                    type="button"
                    aria-pressed="{settings.playNotificationSounds}"
                    on:click="{toggleSetting}"
                    value="playNotificationSounds">
                    <span class="toggle-button__label">Play notifications</span>
                    <span
                        class="toggle-button__switch"
                        aria-hidden="true"></span>
                </button>
                <button
                    class="menu__toggle-button toggle-button"
                    type="button"
                    aria-pressed="{settings.useOneTouchVote}"
                    on:click="{toggleSetting}"
                    value="useOneTouchVote">
                    <span class="toggle-button__label">Use one-touch vote</span>
                    <span
                        class="toggle-button__switch"
                        aria-hidden="true"></span>
                </button>
                <h2 class="menu__heading font-title">Actions</h2>
                <button class="menu__action">
                    <span class="menu__action-text font-body">
                        Copy link to session
                    </span>
                    <svg
                        class="menu__action-icon icon icon--small icon--blue"
                        aria-hidden="true">
                        <use xlink:href="#copy"></use>
                    </svg>
                </button>
                <button class="menu__action">
                    <span class="menu__action-text font-body">
                        Leave session
                    </span>
                    <svg
                        class="menu__action-icon icon icon--small icon--blue"
                        aria-hidden="true">
                        <use xlink:href="#leave"></use>
                    </svg>
                </button>
            </div>
        </div>
    </ReferenceSection>
</ReferenceSheet>
