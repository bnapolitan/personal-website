import { Button, Center, Checkbox, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { globalEntryUseStyles } from '../Classes';
import { locationSelectionsState } from '../recoil/atoms';


function ContactInfo() {

    const globalEntryClasses = globalEntryUseStyles();
    const navigate = useNavigate();

    //Recoil State
    const locationSelections = useRecoilValue(locationSelectionsState);

    //React State
    const [emailToggle, setEmailToggle] = useState(false);
    const [textToggle, setTextToggle] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [phoneNumberValue, setPhoneNumberValue] = useState("");

    async function handleUserRegister()
    {
        console.log(emailValue);
        
        navigate("/globalEntry/success", {
            replace: false,
            state: {
                locations: locationSelections,
                email: emailValue,
                phoneNumber: phoneNumberValue
            }
        });
        // registerNewGlobalFastUser(locationSelections, emailValue, phoneNumberValue)
        // .then(res => {
        //     console.log("success");
        //     navigate("/globalEntry/success", {
        //         state: {
        //             locations: locationSelections,
        //             email: emailValue,
        //             phoneNumber: phoneNumberValue
        //         }
        //     });
        // })
        // .catch(err => {
        //     console.error(err);
        // })
    }

    return ( 
        <>
            <Center className={globalEntryClasses.gradientContainer} bg={"twitter.50"} bgGradient='linear(to-b, blue.600, white)'>
                <Stack position={"absolute"} top="120px">
                    <Heading>Email Notifications</Heading>
                    <Center>
                        <Checkbox
                            onChange={(event) => (setEmailToggle(event.target.checked))}
                        >Opt In</Checkbox>
                    </Center>
                    <Input placeholder="dope.email@hotmail.com" value={emailValue}
                        hidden={!emailToggle}
                        onChange={(event) => setEmailValue(event.target.value)}
                    />

                    <Heading mt={"30px !important"}>Text Notifications</Heading>
                    <Text><b>NOTE:</b> Text notifications will cost <b>$5 for 1 month</b></Text>
                    <Center>
                        <Checkbox
                            onChange={(event) => (setTextToggle(event.target.checked))}
                        >Opt In</Checkbox>
                    </Center>
                    <Input placeholder="5558675309" value={phoneNumberValue}
                        hidden={!textToggle}
                        onChange={(event) => setPhoneNumberValue(event.target.value)}
                    />

                    <Button mt={"30px !important"} colorScheme="green"
                        onClick={handleUserRegister}
                    >
                        {textToggle ? "Go to Payment" : "Sign Up for Free!"}
                    </Button>
                    <Text
                        hidden={!textToggle}
                    >You have selected the paid version. Thank you!</Text>
                </Stack>
            </Center>
        </>
    );
}

export default ContactInfo;