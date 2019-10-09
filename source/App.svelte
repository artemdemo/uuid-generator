<script>
    import 'tailwindcss/dist/base.min.css';
    // import 'tailwindcss/dist/components.min.css';
    import 'tailwindcss/dist/utilities.min.css';

    import Button from './components/Button';
    import { buttonAppearance } from './components/ButtonProps';
    import AppDescription from './components/AppDescription';
    import UuidContainer from './components/UuidContainer';
    import { copyToClipboard } from './services/copy';
    import uuid from 'uuid/v4';

    let uuidResult = uuid();

</script>

<style></style>

<div class="container mx-auto px-4">
    <div class="max-w-xl mx-auto my-4">
        <UuidContainer>
            {uuidResult}
        </UuidContainer>
        <Button
            onClick={() => {
                uuidResult = uuid();
                copyToClipboard(uuidResult);
            }}
        >
            Generate & Copy
        </Button>
    </div>
    <AppDescription />
</div>