<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
    import ReferenceCode from '../components/ReferenceCode.svelte';

    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
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
        <div style="padding: 32px; background-color: #E3F1FD;">
            <div class="menu" class:menu--open="{isMenuOpen}">
                <h2 class="menu__heading font-title">Settings</h2>
                <label class="menu__switch switch-input">
                    <p class="switch-input__label">Play notification sounds</p>
                    <input type="checkbox" name="notifications" checked />
                    <span
                        class="switch-input__switch"
                        aria-hidden="true"></span>
                </label>
                <label class="menu__switch switch-input">
                    <p class="switch-input__label">Use one-touch vote</p>
                    <input type="checkbox" name="one-touch" />
                    <span
                        class="switch-input__switch"
                        aria-hidden="true"></span>
                </label>
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
