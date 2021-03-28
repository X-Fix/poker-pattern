<header class="header">
    <section class="header__content">
        <h1 class="header__heading font-title">Poker Planning</h1>
    </section>
</header>
<main class="main join-session">
    <form onsubmit="return false;" class="join-session-form">
        <h2 class="join-session-form__heading font-headline">
            Join Session
        </h2>
        <label class="join-session-form__text-input text-input">
            <p class="text-input__label">Your Name</p>
            <input
                class="text-input__text"
                type="text"
                placeholder="Eg. ‘John Johnson’" />
        </label>
        <label class="join-session-form__text-input text-input">
            <p class="text-input__label">Session ID</p>
            <input
                class="text-input__text"
                type="text"
                placeholder="Eg. ‘27y2k’" />
        </label>
        <button
            class="join-session-form__submit-button button button--wide"
            type="submit">
            <svg class="button__icon icon" aria-hidden="true">
                <use xlink:href="#join"></use>
            </svg>
            <span class="button__text font-title">Join Session</span>
        </button>
    </form>
</main>
