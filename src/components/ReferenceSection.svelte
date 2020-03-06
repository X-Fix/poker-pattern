<script>
    export let heading;
</script>

<style>
    section {
        padding: 0 0 16px;
        border-bottom: 1px solid #90a4ae;
    }

    h2 {
        font-size: 2rem;
    }

    section > :global(p) {
        color: #11181e;
        font-size: 1.5rem;
    }
</style>

<section>
    <h2>{heading}</h2>
    <slot />
</section>
