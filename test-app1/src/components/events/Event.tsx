import React, { useCallback, useEffect, useState } from "react";
import { useCMA } from "@contentful/react-apps-toolkit"
import { useAsync } from "react-async-hook";
import { EntryProps } from "contentful-management"
import { Flex, Grid, GridItem, Text, Box,
  Subheading, Paragraph, Caption, Asset, Card } from "@contentful/f36-components";

interface EventProps {
  event: EntryProps,
}

const Event = ({event}: EventProps) => {
  const cma = useCMA()

  let spaceId = event.sys.space.sys.id
  let eventId = event.sys.id
  let imageId = event.fields.eventImage['en-US'].sys.id
  let date = new Date(event.fields.eventDate['en-US'])
  let date_str = date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})

  const getImage = useCallback(async () => {
    return await cma.asset.get({assetId: imageId})
  }, [cma]);
  const { result } = useAsync(getImage, [])

  function handleClick(){
    let URL = `${window.location.ancestorOrigins[0]}/spaces/${spaceId}/entries/${eventId}`
    window.open(URL, '_blank')
  }

  return (
    <Box margin="spacingM">
      <Card onClick={handleClick} style={{ }}>
        <Grid style={{
          width: '100%',
        }}
        columns='300px auto'
        >
          <GridItem>
            <img src={result?.fields.file['en-US'].url} alt='event asset' style={{borderRadius: '6px'}}/>
          </GridItem>
          <GridItem>
            <Subheading marginBottom="none">{event.fields.title['en-US']}</Subheading>
            <Caption><span style={{fontWeight: '400'}}>{date_str}</span> - {date.toLocaleTimeString('fi-FI')}</Caption>
            
            <Paragraph marginTop="spacingM">{event.fields.shortDescription['en-US']}</Paragraph>

          </GridItem>
        </Grid>
      </Card>
    </Box>
  )
}
export default Event
