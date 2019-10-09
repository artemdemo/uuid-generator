<script>
    import classnames from '../services/classnames';
    import { buttonAppearance } from './ButtonProps';

    export let appearance = buttonAppearance.PRIMARY;

    export let disabled = false;

    export let onClick = null;

    const clickHandler = (e) => {
        onClick && onClick(e);
    };
</script>

<style>
    .button {
        /* rounded */
        border-radius: .25rem;
        /* py-2 */
        padding-top: .5rem;
        padding-bottom: .5rem;
        /* px-4 */
        padding-left: 1rem;
        padding-right: 1rem;
        /* focus:outline-none */
        outline: 0;
    }
    .button_primary {
        /* text-white */
        color: #fff;
        /* bg-blue-500 */
        background-color: #4299e1;
    }
    .button_primary:hover {
        /* hover:bg-blue-700 */
        background-color: #2b6cb0;
    }
    .button_warning {
        /* text-white */
        color: #fff;
        /* bg-orange-500 */
        background-color: #ed8936;
    }
    .button_warning:hover {
        /* hover:bg-orange-600 */
        background-color: #dd6b20;
    }
    .button_secondary {
        /* border */
        border-width: 1px;
        /* text-gray-700 */
        color: #4a5568;
        /* border-gray-600 */
        border-color: #718096;
    }
    .button_disabled {
        /* bg-gray-400 */
        background-color: #cbd5e0;
        /* cursor-not-allowed */
        cursor: not-allowed;
    }
</style>

<button
    on:click={clickHandler}
    class={classnames(
        'button',
        {
            'button_primary': appearance === buttonAppearance.PRIMARY && !disabled,
            'button_warning': appearance === buttonAppearance.WARNING && !disabled,
            'button_secondary': appearance === buttonAppearance.SECONDARY && !disabled,
            'button_disabled': disabled,
        },
    )}
>
    <slot></slot>
</button>