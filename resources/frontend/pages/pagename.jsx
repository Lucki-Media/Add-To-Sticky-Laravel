import { Card, Page, Layout, TextContainer, Text } from "@shopify/polaris";

export default function PageName() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Text>Heading</Text>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Text>Heading</Text>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <Text>Heading</Text>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
