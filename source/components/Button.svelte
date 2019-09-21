<script>
    import classnames from 'classnames';
    
    export let sm;
    export let xs;
    export let primary = true;
    export let secondary;
    export let warning;
    export let disabled;

    export let onClick = null;

    const clickHandler = (e) => {
        onClick && onClick(e);
    };
</script>

<button
    on:click={clickHandler}
    class={classnames(
        'rounded',
        'focus:outline-none focus:shadow-outline',
        {
            'py-2 px-4': !sm && !xs,
            'py-1 px-2': sm || xs,
            'text-sm': sm,
            'text-xs': xs,
            'text-white': (primary || warning) && !secondary,
            'bg-blue-500 hover:bg-blue-700': primary && !secondary && !disabled,
            'text-gray-700 border border-gray-600': secondary && !disabled,
            'bg-orange-500 hover:bg-orange-600': warning && !disabled,
            'bg-gray-400 cursor-not-allowed': disabled,
        },
    )}
>
    <slot></slot>
</button>