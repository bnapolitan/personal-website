import { Button, Center, Checkbox, CheckboxGroup, HStack, Heading, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createUseStyles } from 'react-jss';
import { useRecoilState } from 'recoil';
import { globalEntryLocations } from "../../../constants/globalEntryConstants";
import { globalEntryUseStyles } from "../Classes";
import { singupStepState } from '../recoil/atoms';

const useStyles = createUseStyles({
})

function LocationSelection() {

    const classes = useStyles();
    const globalEntryClasses = globalEntryUseStyles();

    //Recoil State
    const [signupStep, setSignupStep] = useRecoilState(singupStepState);

    //React State
    const [locationSelections, setLocationSelections] = useState<string[]>([]);

    const toast = useToast();

    useEffect(() => {
        console.log(locationSelections);
    }, [locationSelections]);


    function handleCheckboxChange(locationString: string, event: React.ChangeEvent<HTMLInputElement>)
    {
        const locationIndex = locationSelections.indexOf(locationString);
        let newLocations = [...locationSelections];
        if(locationIndex === -1)
        {
            newLocations.push(event.target.value);
            setLocationSelections(newLocations);
        } else {
            newLocations.splice(locationIndex, 1);
            setLocationSelections(newLocations);
        }
    }

    function handleSingupClick()
    {
        if(locationSelections.length === 0)
        {
            return toast({
                title: 'Alert',
                description: "Please select at least 1 location before proceeding.",
                status: "warning",
                duration: 9000,
                isClosable: true
            })
        } else {
            setSignupStep(1);
        }
    }


    return (
        <Center className={globalEntryClasses.gradientContainer} bg={"twitter.50"} bgGradient='linear(to-b, blue.600, white)'>
            <Stack position={"absolute"} top={"120px"}>
                <Heading>What's your email?</Heading>
                <Input placeholder="dope.email@hotmail.com" variant={"filled"}></Input>

                <Heading mt={"40px !important"}>Select your locations:</Heading>
                <Text>Up to 5 locations</Text>
                <HStack>
                    <Text>Filter: </Text>
                    <Input placeholder="Location" variant={"filled"}></Input>
                </HStack>
                <Button mt={"20px !important"} mb={"24px !important"} w="50%" marginInline={"25% !important"} colorScheme={"green"} 
                    // disabled={locationSelections.length === 0}
                    onClick={handleSingupClick}
                >
                    Next Step
                </Button>
                <CheckboxGroup>
                    {globalEntryLocations.map((locationString: string) => (
                        <Checkbox borderColor={"gray.600"} value={locationString}
                            onChange={(event) => handleCheckboxChange(locationString, event)}
                        >
                            {locationString}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
            </Stack>
        </Center>
    );
}

export default LocationSelection;
