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
            &lt;label class="text-input">&lt;p class="text-input__label">Your
            Name&lt;/p>&lt;input class="text-input__text" type="text"
            placeholder="Eg. ‘John Johnson’" />&lt;/label>
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
        <label class="radio">
            <input type="radio" name="example" checked />
            <span class="radio__circle" aria-hidden="true"></span>
            <p class="radio__label">Click me</p>
        </label>
        <label class="radio">
            <input type="radio" name="example" />
            <span class="radio__circle" aria-hidden="true"></span>
            <p class="radio__label">Click me</p>
        </label>
        <ReferenceCode>
            &lt;label class="radio">&lt;input type="radio" name="example"
            />&lt;span class="radio__circle" aria-hidden="true">&lt;/span>&lt;p
            class="radio__label">Click me&lt;/p>&lt;/label>
        </ReferenceCode>
    </ReferenceSection>
</ReferenceSheet>
