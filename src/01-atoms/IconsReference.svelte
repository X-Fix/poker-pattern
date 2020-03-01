<script>
    import ReferenceSheet from '../components/ReferenceSheet.svelte';
    import ReferenceSection from '../components/ReferenceSection.svelte';
    import IconReference from './IconReference.svelte';

    const iconNames = [
        'busy',
        'chat',
        'component',
        'confirm',
        'copy',
        'create',
        'done',
        'folder',
        'join',
        'leave',
        'menu',
        'redo',
        'remove',
        'send',
        'snooze',
    ];
</script>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: -16px 0 0;
        padding: 0;
    }
</style>

<ReferenceSheet heading="Icons">
    <p>
        The icons we use are SVG elements referencing their compiled spritesheet
        counterparts. This allows us to save on browser image requests being
        sent for every icon, and including the spritesheet at the top of the
        html body ensures every is available as soon as the page loads
    </p>
    <p>
        Below is a list of the icons available in this spritesheet and examples
        of how to implement them
    </p>
    <ReferenceSection heading="Available Icons">
        <ul>
            {#each iconNames as iconName}
                <li>
                    <IconReference {iconName} />
                </li>
            {/each}
        </ul>
    </ReferenceSection>
</ReferenceSheet>
