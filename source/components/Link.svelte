<script>
    export let href = '';
</script>

<style>
    .link {
        /* text-blue-500 */
        color: #4299e1;
        /* underline */
        text-decoration: underline;
    }
</style>

<a
    class="link"
    href={href}
>
    <slot></slot>
</a>