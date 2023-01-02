import {
  ButtonGroup,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  View,
  IconPhone,
  IconEmail,
  IconLocationOn,
  useTheme,
  TextField,
  TextAreaField,
  FieldGroupIcon,
  IconPerson,
  Icon,
  Link,
} from "@aws-amplify/ui-react";
import { BsTwitter, BsJournal, BsYoutube } from "react-icons/bs";

export default function Home() {
  const { tokens } = useTheme();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.message.value);
  };
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Card
        padding={{ large: tokens.space.xxxl }}
        variation="elevated"
        borderRadius={tokens.radii.medium}
        backgroundColor={tokens.colors.green[80]}
      >
        <Flex
          direction={{ base: "column", large: "row" }}
          justifyContent={{ large: "center" }}
          gap={tokens.space.xl}
        >
          <Flex direction={"column"} justifyContent="space-between">
            <View style={{ marginBottom: tokens.space.small }}>
              <Heading color={tokens.colors.white} level={3}>
                Contact Datadel
              </Heading>
              <Text color={tokens.colors.neutral[60]}>We're here to help.</Text>
            </View>
            <ButtonGroup
              style={{ marginBottom: tokens.space.small }}
              color={tokens.colors.neutral[20]}
              direction={"column"}
              variation="link"
            >
              <Button
                color={tokens.colors.neutral[40]}
                justifyContent={"start"}
                gap="1rem"
              >
                <IconPhone color={tokens.colors.blue[40]} /> +1 707.664.5712
              </Button>
              <Button
                color={tokens.colors.neutral[40]}
                justifyContent={"start"}
                gap="1rem"
              >
                <IconEmail color={tokens.colors.blue[40]} /> info@datadel.io
              </Button>
              <Button
                color={tokens.colors.black[90]}
                justifyContent={"start"}
                gap="1rem"
              >
                <IconLocationOn color={tokens.colors.blue[40]} />
                <span direction="column">
                  <div>Petaluma, California </div>
                  <div> Las Cruces, New Mexico</div>
                  <div>United States</div>
                </span>
              </Button>
            </ButtonGroup>
            <Flex style={{ marginLeft: tokens.space.large }}>
              <Link
                href="https://twitter.com/X2nSatInc"
                color={tokens.colors.blue[20]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="twitter" as={BsTwitter} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCMeo7qTkHPznnptRLSoIH6g"
                color={tokens.colors.red[60]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="youtube" as={BsYoutube} />
              </Link>
              <Link
                href="https://www.datadel.io/blog"
                color={tokens.colors.green[40]}
                fontSize={"2rem"}
              >
                <Icon ariaLabel="blog" as={BsJournal} />
              </Link>
            </Flex>
          </Flex>
          <View
            width={{ base: "70vw", large: "400px" }}
            backgroundColor={tokens.colors.white}
            padding={tokens.space.medium}
            borderRadius={tokens.radii.medium}
          >
            <Flex as="form" direction={"column"} onSubmit={handleFormSubmit}>
              <TextField
                required
                label="From"
                name="name"
                placeholder="Datadel User Feedback"
                innerStartComponent={
                  <FieldGroupIcon ariaLabel="">
                    {/** Accessibility tip: pass empty ariaLabel for decorative icons. */}
                    <IconPerson />
                  </FieldGroupIcon>
                }
              />
              <TextField
                label="Email"
                name="email"
                placeholder="you@email.com"
                type={"email"}
                required
                innerStartComponent={
                  <FieldGroupIcon ariaLabel="">
                    {/** Accessibility tip: pass empty ariaLabel for decorative icons. */}
                    <IconEmail />
                  </FieldGroupIcon>
                }
              />
              <TextAreaField
                required
                label="Message"
                name="message"
                placeholder="Feel welcome to include your preferred contact method and phone number in your message. We will follow up with you soon."
              />
              <View style={{ marginTop: tokens.space.medium }}>
                <Button type="submit" variation="primary">
                  Send Message
                </Button>
              </View>
            </Flex>
          </View>
        </Flex>
      </Card>
    </Flex>
  );
}
