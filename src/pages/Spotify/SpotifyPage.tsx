

//Packages
import { Button, Center, Flex, Image } from '@chakra-ui/react';
// import { Button, Col, Container, Row } from "react-bootstrap";

//Project files
import { Box, Heading, Highlight, SimpleGrid, Text } from '@chakra-ui/layout';
import { createUseStyles } from "react-jss";
import { loginToSpotify } from '../../apis/lambda/Spotify/services/userService';
import SpotifyLogo from '../../assets/images/Spotify-logo.png';
import SpotifyPlaylist from '../../assets/images/SpotifyPlaylist.png';
import "./SpotifyPage.scss";

const useStyles = createUseStyles({
    topContainer: {
        width: "100%",
        padding: "80px 0"
    },

    subheaderText: {
        padding: "20px 0"
    },
    highlight: {
        px: '2', py: '1', rounded: 'full', bg: 'red.100'
    }
});

function SpotifyPage() {

    const classes = useStyles();

    return (
        <>
            <Center bgGradient='linear(to-b, green.400, white)' className={classes.topContainer}>
                <SimpleGrid maxW={"60%"} columns={2} spacing={"50"}>
                    <Box>
                        <Heading textAlign={"left"}>
                            Register to create automated playlists!
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
                        <Image maxH={150} src={SpotifyLogo} alt="Spotify Logo" />
                    </Center>
                </SimpleGrid>
            </Center>
            
            <Center mt={"80px"}>
                <SimpleGrid maxW={"60%"} columns={2} spacing={"100"}>
                    <Center>
                        <Image src={SpotifyPlaylist} alt="Spotify Playlist" />
                    </Center>

                    <Box alignSelf={"center"}>
                        <Heading textAlign={"left"}>
                            Your 100 Newest Saved Songs to Shuffle!
                        </Heading>
                        <Text className={classes.subheaderText} align={"left"}>
                            <Highlight query={'FREE'} styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
                            To focus on what you’re bumpin’ right now.
                            </Highlight>
                        </Text>
                    </Box>
                </SimpleGrid>
            </Center>
            <Button mt={"40px"} colorScheme={"whatsapp"} onClick={loginToSpotify}>
                Click to Register
            </Button>
        </>
    );
}

export default SpotifyPage;
