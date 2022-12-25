import { Box, Center, Heading, Highlight, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";

//Project files
import SpotifyPlaylist from '../../../assets/images/SpotifyPlaylist.png';

const useStyles = createUseStyles({

    subheaderText: {
        padding: "20px 0"
    },
});

function RegisterCallbackPage() {

    const classes = useStyles();

    return ( 
        <Box bgGradient='linear(to-b, green.400, white)'>
            <Heading p={"40px"}>Success!</Heading>
            <Center>
                <SimpleGrid mb={"80px"} maxW={"60%"} columns={2} spacing={"100"}>
                    <Center>
                        <Image src={SpotifyPlaylist} alt="Spotify Playlist" />
                    </Center>

                    <Box alignSelf={"center"}>
                        <Heading textAlign={"left"}>
                            Your new playlist will look like this!
                        </Heading>
                        <Text className={classes.subheaderText} align={"left"}>
                            <Highlight query={'FREE'} styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
                            Now get to bragging about your new hidden gems!
                            </Highlight>
                        </Text>
                    </Box>
                </SimpleGrid>
            </Center>
        </Box>
     );
}

export default RegisterCallbackPage;
