import { CheckCircleIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Center, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { createUseStyles } from "react-jss";
import { useLocation } from "react-router-dom";
import GlobalEntryEmail from "../../../assets/images/GlobalEntryEmail.png";
import { globalEntryUseStyles } from "../Classes";

interface Props {
    locations: string[];
    email: string;
    phoneNumber: string;
}

const useStyles = createUseStyles({
    subheaderText: {
        padding: "20px 0"
    },
});

function SignupSuccess() {
    const location = useLocation();
    console.log(location);
    let { locations, email, phoneNumber } = location.state as Props
    
    const classes = useStyles();
    const globalEntryClasses = globalEntryUseStyles();

    return ( 
        <>
            <Center className={globalEntryClasses.gradientContainer} p="160px 0" bg={"twitter.50"} bgGradient='linear(to-b, blue.600, white)'>
                <SimpleGrid maxW={"60%"} columns={2} spacing={"100"}>
                    <Box>
                        <Heading>
                            Success!
                        </Heading>
                        <Text fontSize={"2xl"} fontWeight={"medium"} className={classes.subheaderText}>
                            You'll get emails sent to:
                        </Text>
                        <Text fontSize={"2xl"} fontWeight={"extrabold"}>
                            <EmailIcon />
                            {` ${email}`}
                        </Text>
                        {/* <Text fontSize={"2xl"} fontWeight={"medium"} className={classes.subheaderText}>
                            And texts sent to:
                        </Text>
                        <Text fontSize={"2xl"} fontWeight={"extrabold"}>
                            <Icon as={MdPhoneAndroid} />
                            {` ${phoneNumber}`}
                        </Text> */}
                    </Box>

                    <Stack align={"center"}>
                        <Heading>
                            Your locations are:
                        </Heading>
                            <Stack>
                            { locations.map(loc => (
                                <Text fontSize={"3xl"} py={"10px"} align={"left"}>
                                    <CheckCircleIcon color={"green.500"} />
                                    {` ${loc}`}
                                </Text>
                            )
                            ) }
                            </Stack>
                    </Stack>
                </SimpleGrid>

                
            </Center>
            <Stack>
                <Text>
                        Lookout for emails like this:
                </Text>
                <Center>
                    <Image w={"clamp(200px, 30%, 600px)"} src={GlobalEntryEmail} />
                </Center>
            </Stack>
        </> 
    );
}

export default SignupSuccess;