import { Button, Image, Stack, Text, Title } from "@mantine/core";
import messageIcon from "./message-icon.png";

const NoMessages = () => (
  <>
    <Stack align="center" justify="center" h={1000}>
      <Image
        src={messageIcon}
        alt="No messages yet"
        loading="eager"
        w="4rem"
        mb="-sm"
        opacity={0.6}
      />
      <Stack ta="center" gap={0} align="center">
        <Title order={3}>No messages yet</Title>
        <Text opacity={0.8}>Start by sending a new message to a friend</Text>
      </Stack>
      <Button>Send new message</Button>
    </Stack>
  </>
);

export default NoMessages;
