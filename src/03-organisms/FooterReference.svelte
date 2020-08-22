<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';

    let variation = 'default';
    const setVariation = (value) => {
        variation = value;
    }
</script>

<style>

</style>

<ReferenceSheet heading="Footer">
    <p>
        The main footer appears at the bottom of the page at all times. It is effectively a blank canvas for other elements to be placed on using position: fixed;
    </p>
    <p>
        The header's width adjusts as the screen gets larger, although it
        never gets wider than the widest intended view-width (1024px/64rem)
    </p>

    <ReferenceSection heading="Variations">
        <p>
            Select an option below to see the various options available
        </p>


        <label style="display: block; margin-bottom: 0.5rem;">
            <input type="radio" bind:group={variation} value="default" />
            <span>Default</span>
        </label>
        <label  style="display: block; margin-bottom: 0.5rem;">
            <input type="radio" bind:group={variation} value="center" />
            <span>Center</span>
        </label>
        <label  style="display: block; margin-bottom: 0.5rem;">
            <input type="radio" bind:group={variation} value="left" />
            <span>Left</span>
        </label>
        <label  style="display: block; margin-bottom: 0.5rem;">
            <input type="radio" bind:group={variation} value="right" />
            <span>Right</span>
        </label>

        {#if variation === 'default'}
            <p>
                By default the footer has no content. This is because all the content that will be appearing at this spot in the page is lexically defined as part of other elements on the page
            </p>

            <footer class="footer"></footer>
        {:else if variation === 'center'}
            <p>The fixed-in-footer class sets an element to similar properties as the footer so it appears to be part of the footer's content. The element can then be lexically placed in the document wherever it makes the most semantic sense</p>
            <p>The --center variation also ensures the content appears horizontally centered relative to the footer</p>

            <p class="fixed-in-footer fixed-in-footer--center" style="margin-bottom: 1rem;">I am in the footer</p>
            <footer class="footer"></footer>
        {:else if variation === 'left'}
            <p>The --left variation ensures the content appears on the left side of the footer while honouring the footer's max-width. Spacing is left up to the element itself</p>

            <p class="fixed-in-footer fixed-in-footer--left" style="margin-bottom: 1rem;">I am in the footer</p>
            <footer class="footer"></footer>
        {:else if variation === 'right'}
            <p>The --right variation does the same but for right-aligned content</p>

            <p class="fixed-in-footer fixed-in-footer--right" style="margin-bottom: 1rem;">I am in the footer</p>
            <footer class="footer"></footer>
        {/if}
    </ReferenceSection>

    <div style="height: 3rem;"></div>
</ReferenceSheet>
