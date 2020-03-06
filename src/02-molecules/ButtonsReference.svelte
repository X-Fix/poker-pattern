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
        <button class="button" style="margin-right: 8px;">
            <svg class="button__icon icon icon--large">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Menu</span>
        </button>
        <button class="button" disabled>
            <svg class="button__icon icon icon--large">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Disabled</span>
        </button>
        <ReferenceCode>
            &lt;button class="button">&lt;svg class="button__icon icon
            icon--large">&lt;use xlink:href="#menu">&lt;/use>&lt;/svg>&lt;span
            class="button__text font-title">Menu&lt;/span>&lt;/button>
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Secondary Button">
        <p>
            Secondary buttons get a `--secondary` modifier. This applies a color
            and background-color adjustment
        </p>
        <button class="button button--secondary" style="margin-right: 8px;">
            <svg class="button__icon icon icon--large">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Menu</span>
        </button>
        <button class="button button--secondary" disabled>
            <svg class="button__icon icon icon--large">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-title">Disabled</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--secondary">&lt;svg
            class="button__icon icon icon--large">&lt;use
            xlink:href="#menu">&lt;/use>&lt;/svg>&lt;span class="button__text
            font-title">Menu&lt;/span>&lt;/button>
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Small Button">
        <p>
            Small buttons use a body-size font and default icon size, along with
            a class modifier
        </p>
        <button class="button button--small" style="margin-right: 8px;">
            <svg class="button__icon icon icon">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-body">Menu</span>
        </button>
        <button class="button button--small" disabled>
            <svg class="button__icon icon icon">
                <use xlink:href="#menu"></use>
            </svg>
            <span class="button__text font-body">Disabled</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--small">&lt;svg class="button__icon
            icon">&lt;use xlink:href="#menu">&lt;/use>&lt;/svg>&lt;span
            class="button__text font-body">Menu&lt;/span>&lt;/button>
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Wide Button">
        <p>
            Wide buttons tend to span footers, either most of the width on small
            screens or a large percentage on larger screens
        </p>
        <button class="button button--wide" style="margin-right: 8px;">
            <svg class="button__icon icon icon--large">
                <use xlink:href="#create"></use>
            </svg>
            <span class="button__text font-title">Create New Session</span>
        </button>
        <button class="button button--wide" disabled>
            <svg class="button__icon icon icon--large">
                <use xlink:href="#create"></use>
            </svg>
            <span class="button__text font-title">Create New Session</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--wide">&lt;svg class="button__icon
            icon icon--large">&lt;use
            xlink:href="#create">&lt;/use>&lt;/svg>&lt;span class="button__text
            font-title">Create New Session&lt;/span>&lt;/button>
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Round Button">
        <p>
            Round buttons are only used on smaller screens when there is not
            enough space to fit text with the icon.
        </p>
        <button class="button button--round" style="margin-right: 8px;">
            <svg class="button__icon icon icon--large">
                <use xlink:href="#chat"></use>
            </svg>
        </button>
        <button class="button button--round" disabled>
            <svg class="button__icon icon icon--large">
                <use xlink:href="#chat"></use>
            </svg>
        </button>
        <ReferenceCode>
            &lt;button class="button button--round">&lt;svg class="button__icon
            icon icon--large">&lt;use
            xlink:href="#chat">&lt;/use>&lt;/svg>&lt;/button>
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Square Button">
        <p>
            Square buttons have a pretty fixed size as they have a very specific
            use case. They use the `--huge` modified icon, and the smaller body
            font size
        </p>
        <button class="button button--square" style="margin-right: 8px;">
            <svg class="button__icon icon icon--huge">
                <use xlink:href="#join"></use>
            </svg>
            <span class="button__text font-body">Join Session</span>
        </button>
        <button class="button button--square" disabled>
            <svg class="button__icon icon icon--huge">
                <use xlink:href="#join"></use>
            </svg>
            <span class="button__text font-body">Join Session</span>
        </button>
        <ReferenceCode>
            &lt;button class="button button--square">&lt;svg class="button__icon
            icon icon--huge">&lt;use
            xlink:href="#join">&lt;/use>&lt;/svg>&lt;span class="button__text
            font-body">Join Session&lt;/span>&lt;/button>
        </ReferenceCode>
    </ReferenceSection>
</ReferenceSheet>