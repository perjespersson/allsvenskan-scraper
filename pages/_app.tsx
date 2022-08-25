import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Anchor, AppShell, Burger, createStyles, Header, MantineProvider, MediaQuery, Navbar, Autocomplete, Center } from '@mantine/core'
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    },
    [theme.fn.largerThan("sm")]: {
      display: "flex",
      alignItems: 'center',
      height: `${NAV_HEIGHT}px`
    }
  }
}));

const NAV_HEIGHT = 80;

export default function MyApp({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <MantineProvider
      theme={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <AppShell
        fixed
        header={
          <Header height={NAV_HEIGHT} style={{alignItems: "center"}}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="md"
              />
            </MediaQuery>

            <div className={classes.links}>
              <Anchor>TABELL</Anchor>
              <Anchor>LAG</Anchor>
              <Anchor>STATISTIK</Anchor>
            </div>
          </Header>
        }
        navbar={
          <Navbar
            className={classes.navbar}
            width={{ base: "100%", sm: 0 }}
            hidden={!opened}
          >
            <Anchor style={{margin: "0 auto", padding: "30px 0"}}>TABELL</Anchor>
            <Anchor style={{margin: "0 auto", padding: "30px 0"}}>LAG</Anchor>
            <Anchor style={{margin: "0 auto", padding: "30px 0"}}>STATISTIK</Anchor>
          </Navbar>
        }
        >

        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}
