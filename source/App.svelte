<script>
    // import 'tailwindcss/dist/base.min.css';
    // import 'tailwindcss/dist/utilities.min.css';

    import Button from './components/Button';
    import { buttonAppearance } from './components/ButtonProps';
    import AppDescription from './components/AppDescription';
    import UuidContainer from './components/UuidContainer';
    import Section from './components/Section';
    import Container from './components/Container';
    import { copyToClipboard } from './services/copy';
    import uuid from 'uuid/v4';

    let uuidResult = uuid();

</script>

<style>
    /* Global normalization */
    :global(*), :global(::after), :global(::before) {
        border-width: 0;
        border-style: solid;
        border-color: #e2e8f0;
    }

    :global(body) {
        margin: 0;
    }

    :global(html) {
        line-height: 1.5;
        box-sizing: border-box;
    }

    :global(button),
    :global(input),
    :global(optgroup),
    :global(select),
    :global(textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
        font-family: inherit;
        font-size: 100%;
        margin: 0;
    }

    :global(button) {
        background: 0 0;
        padding: 0;
    }
</style>

<Container>
    <Section>
        <UuidContainer>
            {uuidResult}
        </UuidContainer>
    </Section>
    <Section>
        <Button
            onClick={() => {
                uuidResult = uuid();
                copyToClipboard(uuidResult);
            }}
        >
            Generate & Copy
        </Button>
    </Section>
    <AppDescription />
</Container>