<script>
    import 'tailwindcss/dist/base.min.css';
    import 'tailwindcss/dist/utilities.min.css';

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

<style></style>

<Container>
    <Section>
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
    </Section>
    <AppDescription />
</Container>