
import { Box, Flex, Text, Grid, Subheading } from "@contentful/f36-components";
import React, { useCallback } from "react";
import { useAsync } from "react-async-hook";
import { useCMA, useSDK } from "@contentful/react-apps-toolkit";

interface PersonProps {
  person: any;
  event: any;
}

// export const TopDog = ({ name, avatarUrl = '' }: PersonProps): JSX.Element => {
export const TopDog = ({ person, event }: PersonProps ): JSX.Element => {
  const cma = useCMA();
  const getPersonData = useCallback(async () => {
    return (
      person !== null
        ? await cma.entry.get({entryId: person["en-US"].sys.id})
        : null
    );
  }, [cma, person]);

  const personDataResult = useAsync(getPersonData, []);
  const personData = personDataResult?.result;

  const getPersonAvatar = useCallback(async (assetId: string) => {
    console.log('assetId :>> ', assetId);
    return (
      person !== null && personData
        ? await cma.asset.get({ assetId })
        : null
    );
  }, [cma, person, personData]);
  const personAvatarResult = useAsync(() => getPersonAvatar(personData?.fields?.image["en-US"]?.sys?.id), []);
  const personAvatarData = personAvatarResult.result;
  console.log('personAvatarData :>> ', personAvatarData);
  console.log('personData :>> ', personData);
  console.log('topdog, event :>> ', event);

  const eventDate = new Date(event?.eventDate["en-US"])
  console.log('eventDate :>> ', eventDate);
//
  return (
    <Box margin="spacingM">
      <Flex gap="spacingM" flexDirection="row" alignItems="center">
            <img
              alt="no one"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
              src={personAvatarData?.fields?.file["en-US"]?.url || ''}
            />
          <Flex gap="spacingM" flexDirection="column">
            <Subheading marginBottom="spacing2Xs">{event?.title["en-US"]}</Subheading>
            <Text fontSize="fontSizeL">{eventDate?.toLocaleDateString()}</Text>
            <Text fontSize="fontSizeL">
              {personData
                ? personData.fields.name["en-US"]
                : "No top dog for event 🙁"
              }
            </Text>
          </Flex>
    </Flex>
    </Box>
  )
};
