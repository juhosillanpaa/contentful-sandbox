import React from 'react';
import { Paragraph, TextLink, Note, Flex } from '@contentful/f36-components';

const LocalhostWarning = () => {
  return (
    <Flex marginTop="spacingXl" justifyContent="center">
      <Note title="Incoming events" style={{ maxWidth: '800px' }}>
        <Paragraph>
          Here is a list of new events <br />
          .... <br/> ... <br />....
       
        </Paragraph>
        <br />

        <Paragraph>
          Follow{' '}
          <TextLink href="https://www.contentful.com/developers/docs/extensibility/app-framework/tutorial/#embed-your-app-in-the-contentful-web-app">
            our guide
          </TextLink>{' '}
          to get started or{' '}
          <TextLink href="https://app.contentful.com/deeplink?link=apps">open Contentful</TextLink>{' '}
          to manage your app.
        </Paragraph>
      </Note>
    </Flex>
  );
};

export default LocalhostWarning;
