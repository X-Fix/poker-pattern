<script>
    let isSelected = false;
    let isChatOpen = false;
    var setValueSelected = () => isSelected = true;
    var toggleIsChatOpen = () => isChatOpen = !isChatOpen;
</script>

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
<main class="main">
    <form onsubmit="return false;" class="poker-cards-form">
        <h2
            class="
                poker-cards-form__heading
                font-title
                fixed-in-footer
                fixed-in-footer--center"
            class:sr-only={isSelected}>
            TSK-124: Create new header
        </h2>
        <!-- <fieldset /> doesn't support display: flex; so we mimic it with a div set to the same role -->
        <!-- Unlike fieldset, div[role="group"] does not automatically get labelled by <legend /> so we just use the manual aria-label approach-->
        <div class="poker-cards" role="group" aria-label="Vote" on:change="{setValueSelected}">
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            ☕
                        </span>
                        <span class="poker-card__center-label" aria-label="Coffee break">☕</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            ☕
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            ½
                        </span>
                        <span class="poker-card__center-label">½</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            ½
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            1
                        </span>
                        <span class="poker-card__center-label">1</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            1
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            2
                        </span>
                        <span class="poker-card__center-label">2</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            2
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            3
                        </span>
                        <span class="poker-card__center-label">3</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            3
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            5
                        </span>
                        <span class="poker-card__center-label">5</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            5
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            8
                        </span>
                        <span class="poker-card__center-label">8</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            8
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            13
                        </span>
                        <span class="poker-card__center-label">13</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            13
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            20
                        </span>
                        <span class="poker-card__center-label">20</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            20
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            40
                        </span>
                        <span class="poker-card__center-label">40</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            40
                        </span>
                    </span>
                </p>
            </label>
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
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
            <label class="poker-card">
                <input type="radio" class="sr-only" name="poker-cards" />
                <p class="poker-card__card">
                    <span class="poker-card__labels">
                        <span class="poker-card__top-left-label" aria-hidden="true">
                            ?
                        </span>
                        <span class="poker-card__center-label" aria-label="Need more information">?</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            ?
                        </span>
                    </span>
                </p>
            </label>
        </div>
        <button
            class="
                poker-cards-form__submit
                button
                button--wide
                fixed-in-footer
                fixed-in-footer--center"
            type="submit"
            disabled={!isSelected || undefined}
            aria-disabled={!isSelected || undefined}
            class:sr-only={!isSelected}>
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#confirm"></use>
            </svg>
            <span class="button__text font-title">
                Confirm Vote
            </span>
        </button>
    </form>
    <aside class="session-panel" aria-label="Participants list">
        <ul class="participants-list">
            <li class="participant participant--me">
                <span class="participant__name font-body">Oom</span>
                <svg
                    class="participant__state icon icon--green"
                    aria-label="This participant is finished voting">
                    <title>This participant is finished voting</title>
                    <use xlink:href="#done" aria-hidden></use>
                </svg>
                <button
                    class="participant__action"
                    title="Click to remove this participant"
                    aria-label="Click to remove this participant">
                    <svg class="icon icon--blue" aria-hidden="true">
                        <use xlink:href="#remove"></use>
                    </svg>
                </button>
            </li>
            <li class="participant participant--owner">
                <span class="participant__name font-body">Paul Treurnicht</span>
                <svg
                    class="participant__state icon icon--green"
                    aria-label="This participant is finished voting">
                    <title>This participant is finished voting</title>
                    <use xlink:href="#done"></use>
                </svg>
            </li>
            <li class="participant">
                <span class="participant__name font-body">Damian Stander</span>
                <svg
                    class="participant__state icon icon--grey"
                    aria-label="This participant has temporarily disconnected">
                    <title>This participant has temporarily disconnected</title>
                    <use xlink:href="#snooze"></use>
                </svg>
                <button
                    class="participant__action"
                    title="Click to remove this participant"
                    aria-label="Click to remove this participant">
                    <svg class="icon icon--blue" aria-hidden="true">
                        <use xlink:href="#remove"></use>
                    </svg>
                </button>
            </li>
            <li class="participant">
                <span class="participant__name font-body">Cameron</span>
                <svg
                    class="participant__state icon"
                    aria-label="This participant is still busy voting">
                    <title>This participant is still busy voting</title>
                    <use xlink:href="#busy"></use>
                </svg>
                <button
                    class="participant__action"
                    title="Click to remove this participant"
                    aria-label="Click to remove this participant">
                    <svg class="icon icon--blue" aria-hidden="true">
                        <use xlink:href="#remove"></use>
                    </svg>
                </button>
            </li>
        </ul>
    </aside>
</main>
<footer class="footer">
</footer>
