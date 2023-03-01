import Meta from "@hackclub/meta";
import Flag from "../components/flag";
import Head from "next/head";
import { Heading, Box, Text, Flex, Button } from "theme-ui";

const Main = () => (
  <>
    <Meta
      as={Head}
      name="Reboot"
      title="Reboot - First hackathon in China since pandemic"
      description="In Shanghai, this April, 30 teenage hackers will reboot hackathons in China."
      color={`#FF4794`}
    />
    <Box sx={{ mt: [3, 4], textAlign: 'center' }}>
      <img src="https://cloud-c5ssvb2yg-hack-club-bot.vercel.app/0logo.png" height="500" />
      <Heading as="h1" variant="title">
        Reboot
      </Heading>
      <Box sx={{ fontSize: [3, 4], mt: [3, 4], mb: [4, 5] }}>
        <Text>
          Date: April 7th to 9th, 2023
        </Text>
        <br />
        <Text>
          Location: Microsoft Shanghai (Caohejing)
        </Text>
      </Box>
      <Flex sx={{ justifyContent: 'center' }}>
        <Box sx={{ mr: 3 }}>
          <Button sx={{ fontSize: [2, 3], px: [4, 5], py: [2, 3], bg: 'primary', color: 'background', borderRadius: 'default', cursor: 'pointer', '&:hover': { bg: 'secondary' } }}>
            Register
          </Button>
        </Box>
        <Box>
          <Button sx={{ fontSize: [2, 3], px: [4, 5], py: [2, 3], bg: 'secondary', color: 'background', borderRadius: 'default', cursor: 'pointer', '&:hover': { bg: 'primary' } }}>
            Donate
          </Button>
        </Box>
      </Flex>
    </Box>
    <Flag />
  </>
);

export default Main;
