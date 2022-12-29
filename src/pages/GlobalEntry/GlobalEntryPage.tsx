import { Box, Button, Center, Flex, Heading, Highlight, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import GlobalEntry from '../../assets/images/GlobalEntry.png';
import { globalEntryUseStyles } from "./Classes";

const useStyles = createUseStyles({
    subheaderText: {
        padding: "20px 0"
    },
    highlight: {
        px: '2', py: '1', rounded: 'full', bg: 'red.100'
    }
});

function GlobalEntryPage() {

    const classes = useStyles();
    const globalEntryClasses = globalEntryUseStyles();

    return ( 
        <>
            <Center className={globalEntryClasses.gradientContainer} p="160px 0" bg={"twitter.50"} bgGradient='linear(to-b, blue.600, white)'>
                <SimpleGrid maxW={"60%"} columns={2} spacing={"100"}>
                    <Box>
                        <Heading textAlign={"left"}>
                            Get your Global Entry interview as soon as possible!
                        </Heading>
                        <Text className={classes.subheaderText} align={"left"}>
                            <Highlight query={'FREE'} styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
                                Get FREE email alerts or paid text alerts when you sign up.
                            </Highlight>
                        </Text>
                        <Flex>
                            <Link to={"signup"}>
                                <Button colorScheme="twitter">
                                    Sign Up!
                                </Button>
                            </Link>
                        </Flex>
                    </Box>
                    <Stack align={"center"}>
                        <Image maxH={150} src={GlobalEntry} alt={"Global Entry Logo"}></Image>
                        <Text className={classes.subheaderText} align={"left"}>
                            We're waiting for an interview...
                        </Text>
                    </Stack>
                </SimpleGrid>
            </Center>
        </> 
    );
}

export default GlobalEntryPage;