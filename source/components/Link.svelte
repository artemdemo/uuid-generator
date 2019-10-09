<script>
    export let href = '';
</script>

<a
    class="text-blue-500 underline"
    href={href}
>
    <slot></slot>
</a>