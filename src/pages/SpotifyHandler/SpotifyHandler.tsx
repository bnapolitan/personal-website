

//Packages
import { Button, Center, Flex, Image } from '@chakra-ui/react';
// import { Button, Col, Container, Row } from "react-bootstrap";

//Project files
import { Box, Heading, Highlight, SimpleGrid, Text } from '@chakra-ui/layout';
import { createUseStyles } from "react-jss";
import { loginToSpotify } from '../../apis/personal-node-api/services/userService';
import SpotifyLogo from '../../assets/images/Spotify-logo.png';
import "./SpotifyHandler.scss";

const pageContainerPadding = "30px";
const useStyles = createUseStyles({
    pageContainer: {
        width: "100%",
        padding: "80px 10%"
    },

    subheaderText: {
        padding: "20px 0"
    },
    highlight: {
        px: '2', py: '1', rounded: 'full', bg: 'red.100'
    }
});

function SpotifyHandler() {

    const classes = useStyles();

    return (
        <>
            <Center className={classes.pageContainer}>
                <SimpleGrid columns={2} spacing={"50"}>
                    <Box>
                        <Heading textAlign={"left"}>
                            Register to create automated playlists based on your most recent listened music!
                        </Heading>
                        <Text className={classes.subheaderText} align={"left"}>
                            <Highlight query={'FREE'} styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
                                Get an auto-updating playlist of your most recent songs in your library for FREE.
                            </Highlight>
                        </Text>
                        <Flex>
                            <Button colorScheme={"whatsapp"} onClick={loginToSpotify}>
                                Click to Register
                            </Button>
                        </Flex>
                    </Box>
                    <Center>
                        <Image height={150} src={SpotifyLogo}></Image>
                    </Center>
                </SimpleGrid>
            </Center>
        </>
    );
}

export default SpotifyHandler;
