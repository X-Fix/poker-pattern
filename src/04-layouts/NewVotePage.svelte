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
    <form
        onsubmit="return false;"
        class="poker-cards-form poker-cards-form--inert"
        aria-disabled="true">
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
                        <span class="poker-card__center-label">☕</span>
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
                        <span class="poker-card__center-label">?</span>
                        <span
                            class="poker-card__bottom-right-label"
                            aria-hidden="true">
                            ?
                        </span>
                    </span>
                </p>
            </label>
        </div>
    </form>
    <aside class="session-panel session-panel--show">
        <form onsubmit="return false;" class="new-vote-form">
            <div class="new-vote">
                <h2 class="new-vote__title font-headline">New Vote</h2>
                <label class="new-vote__text-input text-input">
                    <p class="text-input__label">User story / task name</p>
                    <input
                        class="text-input__text"
                        type="text"
                        placeholder="Eg. ‘TSK-1209’" />
                </label>
                <p class="new-vote__participants-description font-title">Who is voting...</p>
            </div>
            <ul class="participants-list">
                <li class="participant participant--me participant--owner">
                    <label class="switch-input">
                        <p class="switch-input__label">Darisha</p>
                        <input type="checkbox" class="sr-only" name="participants" checked />
                        <span
                            class="switch-input__switch"
                            aria-hidden="true"></span>
                    </label>
                </li>
                <li class="participant">
                    <label class="switch-input">
                        <p class="switch-input__label">Kershin</p>
                        <input type="checkbox" class="sr-only" name="participants" checked />
                        <span
                            class="switch-input__switch"
                            aria-hidden="true"></span>
                    </label>
                </li>
                <li class="participant">
                    <label class="switch-input">
                        <p class="switch-input__label">Peter</p>
                        <input type="checkbox" class="sr-only" name="participants" />
                        <span
                            class="switch-input__switch"
                            aria-hidden="true"></span>
                    </label>
                </li>
                <li class="participant">
                    <label class="switch-input">
                        <p class="switch-input__label">Tony</p>
                        <input type="checkbox" class="sr-only" name="participants" checked />
                        <span
                            class="switch-input__switch"
                            aria-hidden="true"></span>
                    </label>
                </li>
                <li class="participant">
                    <label class="switch-input">
                        <p class="switch-input__label">PiePie</p>
                        <input type="checkbox" class="sr-only" name="participants" checked />
                        <span
                            class="switch-input__switch"
                            aria-hidden="true"></span>
                    </label>
                </li>
            </ul>
            <button
                class="
                    new-vote-form__submit
                    button
                    button--wide
                    fixed-in-footer
                    fixed-in-footer--center"
                type="submit">
                <svg class="button__icon icon" aria-hidden="true">
                    <use xlink:href="#start"></use>
                </svg>
                <span class="button__text font-title">
                    Start Voting
                </span>
            </button>
        </form>
    </aside>
</main>
<footer class="footer">
</footer>
