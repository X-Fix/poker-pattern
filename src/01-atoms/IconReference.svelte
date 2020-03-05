<script>
    import ReferenceCode from '../components/ReferenceCode.svelte';
    export let iconName;

    function capitalise(str) {
        return str
            .split('')
            .map((c, i) => (i ? c.toLowerCase() : c.toUpperCase()))
            .join('');
    }

    const heading = capitalise(iconName);

    let isSnippetVisible = false;
    function toggleSnippet() {
        isSnippetVisible = !isSnippetVisible;
    }
</script>

<style>
    div.icon-reference {
        border: 1px solid #90a4ae;
        padding: 8px;
        margin: 16px;
    }

    figure {
        background: #ccc
            url(data:image/gif;base64,R0lGODlhDAAMAIAAAMzMzP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQjk4OTI0MUY5NTIxMUUyQkJDMEI5NEFEM0Y1QTYwQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQjk4OTI0MkY5NTIxMUUyQkJDMEI5NEFEM0Y1QTYwQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNCOTg5MjNGRjk1MjExRTJCQkMwQjk0QUQzRjVBNjBDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNCOTg5MjQwRjk1MjExRTJCQkMwQjk0QUQzRjVBNjBDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAAAwADAAAAhaEH6mHmmzcgzJAUG/NVGrfOZ8YLlABADs=)
            top left repeat;
        border: 1px solid #90a4ae;
        margin: 0;
        text-align: center;
        height: 10rem;
        width: 15rem;
    }

    figcaption {
        width: 0;
        height: 0;
        overflow: hidden;
    }

    h3 {
        font-size: 1.25rem;
        margin: 8px 0;
    }

    /* Override the ReferenceCode style */
    div.snippet :global(div) {
        margin-top: 0;
    }

    div.snippet {
        border: 1px solid #90a4ae;
        position: absolute;
    }
</style>

<div class="icon-reference">
    <figure title="{`${iconName} icon example`}">
        <svg style="height: 10rem; width: 10rem; color: #000000" class="icon">
            <use xlink:href="#{iconName}"></use>
        </svg>
        <figcaption>{`${iconName} icon example`}</figcaption>
    </figure>
    <h3>{heading}</h3>
    <button on:click="{toggleSnippet}">
        {#if isSnippetVisible}Hide snippet{:else}Show snippet{/if}
    </button>
    {#if isSnippetVisible}
        <div class="snippet">
            <ReferenceCode>
                &lt;svg class="icon">&lt;use xlink:href="#{iconName}">&lt;/use>&lt;/svg>
            </ReferenceCode>
        </div>
    {/if}
</div>
