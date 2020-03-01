<script>
    export let iconName;
    export let style;
</script>

<style>
    svg {
        color: #000000;
        fill: currentColor;
        height: 1.5rem;
        width: 1.5rem;
    }
</style>

<svg {style}>
    <use xlink:href="#{iconName}"></use>
</svg>
