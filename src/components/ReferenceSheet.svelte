<script>
    export let heading;
</script>

<style>
    article {
        background-color: white;
        padding: 1rem 2rem;
    }

    h1 {
        font-size: 3rem;
        margin: 0;
    }

    article > :global(p) {
        color: #11181e;
        font-size: 1.5rem;
    }
</style>

<article>
    <h1>{heading}</h1>
    <slot />
</article>
