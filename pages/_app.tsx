import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Text, Anchor, AppShell, Burger, createStyles, Header, MantineProvider, MediaQuery, Navbar } from '@mantine/core'
import { useState } from 'react';
import Link from 'next/link';

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
          <Header height={NAV_HEIGHT} style={{backgroundColor: "rgb(29, 155, 240)"}}>
            <div style={{display: "flex", width: "90%", maxWidth: "1200px", height: "80px", margin: "0 auto", justifyContent: "space-between", alignItems: "center"}}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Text>Allsvenskinator</Text>
              </MediaQuery>

              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="md"
                />
              </MediaQuery>

              <Text className={classes.links} style={{color: "white", fontWeight: "800", fontSize: "20px", letterSpacing: "1px"}}>ALLSVENSKINATOR</Text>

              <div className={classes.links}>
                  <Link href="/table" passHref>
                    <Anchor component="a" style={{paddingLeft: "30px", color: "white", fontWeight: "600"}}>TABELL</Anchor>
                  </Link>
                  <Link href="/table" passHref>
                    <Anchor component="a" style={{paddingLeft: "30px", color: "white", fontWeight: "600"}}>LAG</Anchor>
                  </Link>
                  <Link href="/table" passHref>
                    <Anchor component="a" style={{paddingLeft: "30px", color: "white", fontWeight: "600"}}>STATISTIK</Anchor>
                  </Link>
              </div>
            </div>
          </Header>
        }
        navbar={
          <Navbar
            className={classes.navbar}
            width={{ base: "100%", sm: 0 }}
            hidden={!opened}
          >
            <Link href="/table" passHref>
              <Anchor component="a" style={{paddingLeft: "30px"}}>TABELL</Anchor>
            </Link>
            <Link href="/table" passHref>
              <Anchor component="a" style={{paddingLeft: "30px"}}>LAG</Anchor>
            </Link>
            <Link href="/table" passHref>
              <Anchor component="a" style={{paddingLeft: "30px"}}>STATISTIK</Anchor>
            </Link>
          </Navbar>
        }
        >

        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  )
}
