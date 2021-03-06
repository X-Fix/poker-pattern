<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
    import ReferenceCode from '../components/ReferenceCode.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Buttons">
    <p>
        Button components are used to trigger and action like displaying/hiding
        a menu, or transition the voting process to the next stage
    </p>
    <p>
        Almost every button is accompanied by an associated icon. This is to
        build easy visual recognition of a button's purpose for the user.
    </p>
    <p>
        Aside from their default state, each button will also have a hovered,
        presed (active) and disabled state. These state will always modify the
        button in a consistent style, regardless of the type of button
    </p>
    <ReferenceSection heading="Default Button (eg. 'Menu' button)">
        <p>Default buttons use a title-size font and a large icon</p>
        <button class="button" style="margin-right: 0.5rem;">
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Menu</span>
        </button>
        <button class="button" disabled>
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Disabled</span>
        </button>
        <ReferenceCode>
            &lt;button class="button"&gt;&lt;svg class="button__icon icon"
            aria-hidden="true"&gt;&lt;use
            xlink:href="#menu"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="button__text
            font-title"&gt;Menu&lt;/span&gt;&lt;/button&gt;
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Secondary Button">
        <p>
            Secondary buttons get a `--secondary` modifier. This applies a color
            and background-color adjustment
        </p>
        <button class="button button--secondary" style="margin-right: 0.5rem;">
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Menu</span>
        </button>
        <button class="button button--secondary" disabled>
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Disabled</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--secondary"&gt;&lt;svg
            class="button__icon icon" aria-hidden="true"&gt;&lt;use
            xlink:href="#menu"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="button__text
            font-title"&gt;Menu&lt;/span&gt;&lt;/button&gt;
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Dark Button">
        <p>
            Dark buttons get a `--dark` modifier. This applies a
            background-color adjustment. Primarily used to indicate when a menu
            button's options are being displayed
        </p>
        <button class="button button--header button--dark">
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Menu</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--dark"&gt;&lt;svg class="button__icon
            icon" aria-hidden="true"&gt;&lt;use
            xlink:href="#menu"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="button__text
            font-title"&gt;Menu&lt;/span&gt;&lt;/button&gt;
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Header Button">
        <p>
            Header buttons appear in the page header. On larger screens they
            display smaller than default buttons, and on smaller screens they
            are reduced to round icon buttons.
        </p>
        <p>
            Even when reduced, the text still exists. It is just visually hidden
            but remains readable by screen readers
        </p>
        <button class="button button--header" style="margin-right: 0.5rem;">
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-body">Menu</span>
        </button>
        <button class="button button--header" disabled>
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-body">Disabled</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--header"&gt;&lt;svg class="button__icon
            icon" aria-hidden="true"&gt;&lt;use
            xlink:href="#menu"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="button__text
            font-body"&gt;Menu&lt;/span&gt;&lt;/button&gt;
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Wide Button">
        <p>
            Wide buttons tend to span footers, either most of the width on small
            screens or a large percentage on larger screens
        </p>
        <button class="button button--wide" style="margin-right: 0.5rem;">
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#create"></use>
            </svg>
            <span class="button__text font-title">Create New Session</span>
        </button>
        <button class="button button--wide" disabled>
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#create"></use>
            </svg>
            <span class="button__text font-title">Create New Session</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--wide"&gt;&lt;svg class="button__icon
            icon" aria-hidden="true"&gt;&lt;use
            xlink:href="#create"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="button__text
            font-title"&gt;Create New Session&lt;/span&gt;&lt;/button&gt;
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Square Button">
        <p>
            Square buttons have a pretty fixed size as they have a very specific
            use case. They use the `--huge` modified icon, and the smaller body
            font size
        </p>
        <button class="button button--square" style="margin-right: 0.5rem;">
            <svg class="button__icon icon icon--huge" aria-hidden="true">
                <use xlink:href="#join"></use>
            </svg>
            <span class="button__text font-body">Join Session</span>
        </button>
        <button class="button button--square" disabled>
            <svg class="button__icon icon icon--huge" aria-hidden="true">
                <use xlink:href="#join"></use>
            </svg>
            <span class="button__text font-body">Join Session</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--square"&gt;&lt;svg class="button__icon
            icon icon--huge" aria-hidden="true"&gt;&lt;use
            xlink:href="#join"&gt;&lt;/use&gt;&lt;/svg&gt;&lt;span class="button__text
            font-body"&gt;Join Session&lt;/span&gt;&lt;/button&gt;
        </ReferenceCode>
    </ReferenceSection>
</ReferenceSheet>
