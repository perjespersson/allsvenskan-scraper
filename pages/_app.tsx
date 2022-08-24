import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Anchor, AppShell, Burger, createStyles, Header, MantineProvider, MediaQuery, Navbar } from '@mantine/core'
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
    }
  }
}));

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
        navbarOffsetBreakpoint="sm"
        header={
          <Header height={50}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>
            <div className={classes.links}>
              <Anchor>Home</Anchor>
              <Anchor>Features</Anchor>
              <Anchor>Pricing</Anchor>
            </div>
          </Header>
        }
        navbar={
          <Navbar
            className={classes.navbar}
            width={{ base: "100%", sm: 0 }}
            hidden={!opened}
          >
            <Anchor>Home</Anchor>
            <Anchor>Features</Anchor>
            <Anchor>Pricing</Anchor>
          </Navbar>
        }
        >

      </AppShell>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
