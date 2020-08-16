<script>
    import { transition } from '../stores/router';

    // Expose the `routeOption` component prop
    export let routeOption;

    function redirect(event) {
        // Transition using this link's transitionName
        transition(routeOption.transitionName);
    }
</script>

<style>
    li {
        border-bottom: 0.0625rem solid #b0bec5;
        font-size: 1.25rem;
        line-height: 1;
        padding: 1rem;
    }

    a {
        align-items: center;
        color: #1d60be;
        display: flex;
        padding: 0.5rem;
        text-decoration: none;
    }

    a:hover {
        background-color: blanchedalmond;
    }

    a > span {
        margin-bottom: -0.25rem;
    }

    svg {
        margin-right: 0.25rem;
    }

    li > span {
        display: block;
        font-size: 1.125rem;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }
</style>

<!-- TODO: Convert to button (maybe) -->
<li>
    <a
        href="{routeOption.transitionName}"
        on:click|preventDefault="{redirect}"
        data-testid="{`link-${routeOption.transitionName}`}">
        <svg class="icon icon--small">
            <use xlink:href="#{routeOption.icon}"></use>
        </svg>
        <span>{routeOption.title}</span>
    </a>
    <span>{routeOption.description}</span>
</li>
