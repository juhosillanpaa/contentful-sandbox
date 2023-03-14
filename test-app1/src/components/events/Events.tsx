import React, { useCallback } from "react";
import { useCMA } from "@contentful/react-apps-toolkit"
import { useAsync } from "react-async-hook";
import { Flex, Grid, GridItem, Text, Heading,
  Subheading, Paragraph, Caption, Asset, Card } from "@contentful/f36-components";
import Event from './Event'



const Events = () => {
  const cma = useCMA()

  const getEvents = useCallback(async () => {
    return await cma.entry.getMany({query: {content_type: 'event'}})
  }, [cma]);

  const { result } = useAsync(getEvents, [])
  let events = []
  if(result?.items){
    events = filterUpComing(result.items)
  }

  function filterUpComing(items:any[]){
    let now = Date.now()
    console.log('items: ', items)

    let upcoming = items.filter(item => {
      let date = Date.parse(item.fields.eventDate['en-Us'])
      console.log('date: ', date)
      return date > now
    })

    console.log('upcoming: ', upcoming)
    let sorted = upcoming.sort((a, b) => {
      let a_d = Date.parse(a.fields.eventDate['en-US'])
      let b_d = Date.parse(b.fields.eventDate['en-Us'])
      return a_d > b_d ? 1 : -1
    })
    return sorted.slice(0, 3)

  }
  
  return (
    <div>
      <Flex justifyContent='center'>
        <Heading marginTop="spacingM" marginBottom="spacingL">Upcoming events</Heading>
      </Flex>
      
      {events.map((item, index) => (
        <Event event={item} key={index}/>
      ))}
    </div>
  )

}

export default Events