import React from 'react';
import { Paragraph, Note, Heading, Grid, GridItem } from '@contentful/f36-components';
import { HomeExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Home = () => {
  const sdk = useSDK<HomeExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return (
    <Grid style={{width: '100%'}}
    columns='1fr 1fr'
    columnGap='spacingM'
    rowGap='spacingM'
    >
      <GridItem area='span 1 / span 2' style={{backgroundColor: 'lightblue'}}>
        <Heading>Welcome back Patrick! </Heading>
      </GridItem>
      <GridItem style={{backgroundColor: 'red'}}>
        elements
      </GridItem>
      <GridItem style={{backgroundColor: 'red'}}>
        hall of fame
      </GridItem>

    </Grid>
  )
};

export default Home;
