<script>
    import classnames from 'classnames';
    import { buttonAppearance } from './ButtonProps';

    export let appearance = buttonAppearance.PRIMARY;

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
        'py-2 px-4',
        'focus:outline-none focus:shadow-outline',
        {
            'text-white': appearance === buttonAppearance.PRIMARY || appearance === buttonAppearance.WARNING,
            'bg-blue-500 hover:bg-blue-700': appearance === buttonAppearance.PRIMARY && !disabled,
            'text-gray-700 border border-gray-600': appearance === buttonAppearance.SECONDARY && !disabled,
            'bg-orange-500 hover:bg-orange-600': appearance === buttonAppearance.WARNING && !disabled,
            'bg-gray-400 cursor-not-allowed': disabled,
        },
    )}
>
    <slot></slot>
</button>