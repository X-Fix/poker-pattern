<header class="header">
    <section class="header__content">
        <h1 class="header__heading font-title">Poker Planning</h1>
    </section>
</header>
<main class="main create-session">
    <form onsubmit="return false;" class="create-session-form">
        <h2 class="create-session-form__heading font-headline">
            Create New Session
        </h2>
        <label class="create-session-form__text-input text-input">
            <p class="text-input__label">Your Name</p>
            <input
                class="text-input__text"
                type="text"
                placeholder="Eg. ‘John Johnson’" />
        </label>
        <label class="create-session-form__text-input text-input">
            <p class="text-input__label">Session Name (optional)</p>
            <input
                class="text-input__text"
                type="text"
                placeholder="Eg. ‘Fuzzy Wumpus’" />
        </label>
        <fieldset class="create-session-form__fieldset">
            <legend class="create-session-form__legend font-title">
                Card Sequence
            </legend>
            <label class="create-session-form__radio-input radio-input">
                <input type="radio" class="sr-only" name="card-sequence" />
                <span
                    class="radio-input__radio"
                    aria-hidden="true"></span>
                <p class="radio-input__label">
                    ½, 1, 2, 3, 5, 8, 13, 20, 40, 100
                </p>
            </label>
            <label class="create-session-form__radio-input radio-input">
                <input type="radio" class="sr-only" name="card-sequence" />
                <span
                    class="radio-input__radio"
                    aria-hidden="true"></span>
                <p class="radio-input__label">
                    1, 2, 5, 10, 20, 50, 100
                </p>
            </label>
            <label class="create-session-form__radio-input radio-input">
                <input type="radio" class="sr-only" name="card-sequence" />
                <span
                    class="radio-input__radio"
                    aria-hidden="true"></span>
                <p class="radio-input__label">
                    1, 2, 4, 8, 12, 16, 24, 40, 80
                </p>
            </label>
            <label class="create-session-form__radio-input radio-input">
                <input type="radio" class="sr-only" name="card-sequence" />
                <span
                    class="radio-input__radio"
                    aria-hidden="true"></span>
                <p class="radio-input__label">
                    XXS, XS, S, M, L, XL, XXL
                </p>
            </label>
        </fieldset>
        <button class="button button--wide" type="submit">
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#create"></use>
            </svg>
            <span class="button__text font-title">
                Create New Session
            </span>
        </button>
    </form>
</main>
