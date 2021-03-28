<script>
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
    <form onsubmit="return false;" class="poker-cards-form poker-cards-form--inert" aria-disabled="true">
        <h2
            class="
                poker-cards-form__heading
                font-title
                fixed-in-footer
                fixed-in-footer--center
                sr-only">
            TSK-124: Create new header
        </h2>
        <!-- <fieldset /> doesn't support display: flex; so we mimic it with a div set to the same role -->
        <!-- Unlike fieldset, div[role="group"] does not automatically get labelled by <legend /> so we just use the manual aria-label approach-->
        <div class="poker-cards" role="group" aria-label="Vote">
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
                <input type="radio" class="sr-only" name="poker-cards"/>
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
                <input type="radio" class="sr-only" name="poker-cards" checked />
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
                sr-only"
            type="submit"
            disabled="true"
            aria-disabled="true">
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#confirm"></use>
            </svg>
            <span class="button__text font-title">
                Confirm Vote
            </span>
        </button>
    </form>
    <aside class="session-panel session-panel--show" aria-label="Participants list">
        <h2 class="session-panel__status fixed-in-footer fixed-in-footer--left">Voting done!</h2>
        <ul class="participants-list">
            <li class="participant">
                <span class="participant__name font-body">Cameron</span>
                <span class="participant__score font-headline">5</span>
            </li>
            <li class="participant">
                <span class="participant__name font-body">Damian Stander</span>
                <span class="participant__score font-headline">5</span>
            </li>
            <li class="participant">
                <span class="participant__name font-body">Kershin</span>
                <span class="participant__score font-headline">8</span>
            </li>
            <li class="participant participant--outlier">
                <span class="participant__name font-body">Oom</span>
                <span class="participant__score font-headline">13</span>
            </li>
            <li class="participant">
                <span class="participant__name font-body">Paul Treurnicht</span>
                <span class="participant__score font-headline">5</span>
            </li>
            <li class="participant participant--me participant--owner">
                <span class="participant__name font-body">Sinta</span>
                <span class="participant__score font-headline">5</span>
            </li>
            <li class="participant participant--outlier">
                <span class="participant__name font-body">Tony</span>
                <span class="participant__score font-headline">3</span>
            </li>
        </ul>
        <div class="session-panel__actions fixed-in-footer fixed-in-footer--right">
            <button class="button button--secondary">
                <svg class="button__icon icon icon--reverse" aria-hidden="true">
                    <use xlink:href="#redo"></use>
                </svg>
                <span class="button__text font-title">Redo Vote</span>
            </button>
            <button class="button">
                <svg class="button__icon icon" aria-hidden="true">
                    <use xlink:href="#create"></use>
                </svg>
                <span class="button__text font-title">New Vote</span>
            </button>
        </div>
    </aside>
</main>
<footer class="footer">
</footer>
