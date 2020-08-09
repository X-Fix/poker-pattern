<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
    import ReferenceCode from '../components/ReferenceCode.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Inputs">
    <p>
        Input components take user input and translate it to a usable action or
        data, eg. providing string value(s) or toggling/switching between states
    </p>
    <ReferenceSection heading="Text Input">
        <p>
            All text inputs will come with a descriptive label, and a
            placeholder showing an example of expected input. The label,
            placeholder, and input text all use title size font
        </p>
        <label class="text-input">
            <p class="text-input__label">Your Name</p>
            <input
                class="text-input__text"
                type="text"
                placeholder="Eg. ‘John Johnson’" />
        </label>
        <ReferenceCode>
            &lt;label class="text-input"&gt;&lt;p class="text-input__label"&gt;Your
            Name&lt;/p&gt;&lt;input class="text-input__text" type="text"
            placeholder="Eg. ‘John Johnson’" /&gt;&lt;/label&gt;
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Radio Input">
        <p>
            Radio inputs represent a list of "pick one" options. All options in
            the same group need to have the same `name` attribute
        </p>
        <p>
            Note that the span used as the custom radio circle has the
            `aria-hidden` attribute to avoid confusion for people with screen
            readers as the screen readers will still pick up the default radio
            element as intended
        </p>
        <label class="radio-input">
            <input type="radio" name="example" checked />
            <span class="radio-input__radio" aria-hidden="true"></span>
            <p class="radio-input__label">Click me</p>
        </label>
        <label class="radio-input">
            <input type="radio" name="example" />
            <span class="radio-input__radio" aria-hidden="true"></span>
            <p class="radio-input__label">Click me</p>
        </label>
        <ReferenceCode>
            &lt;label class="radio-input"&gt;&lt;input type="radio" name="example"
            /&gt;&lt;span class="radio-input__radio"
            aria-hidden="true"&gt;&lt;/span&gt;&lt;p class="radio-input__label"&gt;Click
            me&lt;/p&gt;&lt;/label&gt;
        </ReferenceCode>
    </ReferenceSection>

    <ReferenceSection heading="Switch Input (checkbox)">
        <p>
            Switches function exactly the same way as checkboxes in that they
            offer an independent yes/no option. Under the hood they are still
            native checkboxes with special styling. They will also only ever by
            used as part of a wide control / check list
        </p>
        <p>
            Similarly to radio inputs, switches use a custom-styled span to
            illustrate the switch input which must be hidden from screen readers
            with the `aria-hidden` attribute to avoid confusion
        </p>
        <p>
            Switches are designed to span the width of their container so the
            width will always be equivalent to 100%;
        </p>
        <label class="switch-input" style="width: 324px;">
            <p class="switch-input__label">Include me</p>
            <input type="checkbox" name="example" />
            <span class="switch-input__switch" aria-hidden="true"></span>
        </label>
        <ReferenceCode>
            &lt;label class="switch-input"&gt;&lt;p
            class="switch-input__label"&gt;Include me&lt;/p&gt;&lt;input
            type="checkbox" /&gt;&lt;span class="switch-input__switch"
            aria-hidden="true"&gt;&lt;/span&gt;&lt;/label&gt;
        </ReferenceCode>
    </ReferenceSection>
</ReferenceSheet>
