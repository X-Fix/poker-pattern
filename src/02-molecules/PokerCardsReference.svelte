<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
    import ReferenceCode from '../components/ReferenceCode.svelte';
</script>

<style>

</style>

<ReferenceSheet heading="Poker Cards">
    <p>
        The poker cards are used by participants during the voting phase to
        indicate the value they are voting for
    </p>
    <p>
        Semantically, a radio input is used. This is the markup that would make
        the most sense without any CSS, and will also make more sense once
        combined into a full organsim/form
    </p>
    <ReferenceSection heading="Default">
        <p>
            There is only one type of card. This class will have the card adjust
            its size according to the screen size. For smaller screens it will
            display the smaller card, and for larger screens it will display the
            larger cards
        </p>
        <label class="poker-card">
            <input type="radio" name="poker-cards" />
            <p class="poker-card__card">
                <span class="poker-card__labels">
                    <span class="poker-card__top-left-label" aria-hidden="true">
                        100
                    </span>
                    <span class="poker-card__center-label">100</span>
                    <span
                        class="poker-card__bottom-right-label"
                        aria-hidden="true">
                        100
                    </span>
                </span>
            </p>
        </label>
        <label class="poker-card" style="margin-top: 8px;">
            <input type="radio" name="poker-cards" />
            <p class="poker-card__card">
                <span class="poker-card__labels">
                    <span class="poker-card__top-left-label" aria-hidden="true">
                        ☕
                    </span>
                    <span class="poker-card__center-label">☕</span>
                    <span
                        class="poker-card__bottom-right-label"
                        aria-hidden="true">
                        ☕
                    </span>
                </span>
            </p>
        </label>
        <ReferenceCode>
            &lt;label class="poker-card"&gt;&lt;input type="radio"
            name="poker-cards" /&gt;&lt;p class="poker-card__card"&gt;&lt;span
            class="poker-card__labels"&gt;&lt;span
            class="poker-card__top-left-label"
            aria-hidden="true"&gt;100&lt;/span&gt;&lt;span
            class="poker-card__center-label"&gt;100&lt;/span&gt;&lt;span
            class="poker-card__bottom-right-label"
            aria-hidden="true"&gt;100&lt;/span&gt;&lt;/span&gt;&lt;/p&gt;&lt;/label&gt;
        </ReferenceCode>
    </ReferenceSection>
</ReferenceSheet>
