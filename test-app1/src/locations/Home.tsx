import React, { useCallback } from "react";
import { useCMA, useSDK } from "@contentful/react-apps-toolkit";
import { useAsync } from "react-async-hook";
import { Flex, Text, Grid, GridItem, Heading } from "@contentful/f36-components";
import tokens from "@contentful/f36-tokens";
import Events from '../components/events/Events'

export const Home = () => {
  const sdk = useSDK();
  const cma = useCMA();
  const getSpace = useCallback(async () => {
    return await cma.space.get({});
  }, [cma]);

  const { result } = useAsync(getSpace, []);

  return (
    <Flex flexDirection="column" alignItems="center" fullWidth>
      <Flex
        justifyContent="center"
        padding="spacing3Xl"
        fullWidth
        style={{ backgroundColor: tokens.gray700 }}
      >
        <Flex flexDirection="column" gap="spacingXl" style={{ width: "900px" }}>
          <Text
            fontColor="colorWhite"
            fontSize="fontSize4Xl"
            fontWeight="fontWeightDemiBold"
          >
            👋 Welcome {sdk.user.firstName}! Have a good one!
          </Text>
          {result && (
            <Text
              fontColor="colorWhite"
              fontSize="fontSizeXl"
              fontWeight="fontWeightDemiBold"
            >
              Space: {result.name}
            </Text>
          )}
        </Flex>
      </Flex>
      <Grid style={{width: '100%', height: '100%'}}
      columns='1fr 1fr'
      rows='1fr'
      columnGap='spacingM'
      rowGap='spacingM'
      >
        <GridItem style={{ height: '100%'}}>
          <Events />
        </GridItem>
        <GridItem style={{backgroundColor: 'red'}}>
          hall of fame
        </GridItem>

      </Grid>
    </Flex>
  );
};

export default Home;
