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
        border-bottom: 1px solid #b0bec5;
        font-family: 'Questrial', sans-serif;
        font-size: 20px;
        line-height: 1;
        padding: 16px;
    }

    a {
        align-items: center;
        color: #1d60be;
        display: flex;
        padding: 8px;
        text-decoration: none;
    }

    a:hover {
        background-color: blanchedalmond;
    }

    a > span {
        margin-bottom: -4px;
    }

    svg {
        margin-right: 4px;
    }

    li > span {
        display: block;
        font-size: 18px;
        margin-left: 8px;
        margin-top: 8px;
    }
</style>

<!-- TODO: Convert to button (maybe) -->
<li>
    <a href="{routeOption.transitionName}" on:click|preventDefault="{redirect}">
        <svg class="icon">
            <use xlink:href="#{routeOption.icon}"></use>
        </svg>
        <span>{routeOption.title}</span>
    </a>
    <span>{routeOption.description}</span>
</li>
