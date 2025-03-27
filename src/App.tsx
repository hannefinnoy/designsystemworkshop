// import '../design-tokens-build/DITT_TEMA.css'
import '@digdir/designsystemet-theme'
import { Button, Heading, Paragraph } from '@digdir/designsystemet-react';
import './App.css'

function App() {
  return (
    <>
      <Heading data-size='lg' level={1}>Velkommen til Designsystemet workshop.</Heading>
      <Paragraph>Redigere kildekoden i <code>App.tsx</code> for å endre utseendet på denne siden</Paragraph>
      <Button >Knapp</Button>
    </>
  )
}

export default App
