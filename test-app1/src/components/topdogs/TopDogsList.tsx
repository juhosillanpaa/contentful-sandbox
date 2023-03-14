import { Grid, Flex, Text, Subheading, Heading } from "@contentful/f36-components";
import { TopDog } from "./TopDog";
import React from "react";

export const TopDogsList = ({ data }: any): JSX.Element => {

  return (
    <div>
    <Flex justifyContent='center'>
        <Heading marginTop="spacingM" marginBottom="spacingL">Hikuli Hall of Fame</Heading>
    </Flex>
    <Grid
      marginTop="spacingM"
      columns="1"
      rowGap="spacingM"
    >
    {data && data.map((item: any) => {
      return (
        <Grid.Item key={Math.random()}>
            <TopDog
              key={Math.random()}
              person={item?.fields?.topDog || null}
              event={item?.fields}
            />
        </Grid.Item>
      )})
    }

    </Grid>
    </div>
  )
};
