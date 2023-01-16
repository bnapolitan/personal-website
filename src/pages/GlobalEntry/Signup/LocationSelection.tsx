import { Button, Center, Checkbox, CheckboxGroup, HStack, Heading, Input, Stack, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from 'recoil';
import { globalEntryLocations } from "../../../constants/globalEntryConstants";
import { globalEntryUseStyles } from "../Classes";
import { locationSelectionsState, singupStepState } from '../recoil/atoms';

function LocationSelection() {

    const globalEntryClasses = globalEntryUseStyles();

    //Recoil State
    const setSignupStep = useSetRecoilState(singupStepState);
    const [locationSelections, setLocationSelections] = useRecoilState(locationSelectionsState);

    //React State
    const [locationsList, setLocationsList] = useState(globalEntryLocations);

    const toast = useToast();

    useEffect(() => {
        setLocationSelections([]);
    }, []);


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

    function filterLocations(filterString: string) {
        const newLocationsList: string[] = [...globalEntryLocations];
        for (let i = globalEntryLocations.length - 1; i >= 0; i--) {
            const location = globalEntryLocations[i];

            if(!location.toLowerCase().includes(filterString.toLowerCase()))
            {
                newLocationsList.splice(i, 1);
            }
        }
    
        setLocationsList(newLocationsList);
      }


    return (
        <Center className={globalEntryClasses.gradientContainer} bg={"twitter.50"} bgGradient='linear(to-b, blue.600, white)'>
            <Stack w={"400px"} position={"absolute"} top={"120px"}>
                <Heading>What's your email?</Heading>
                <Input placeholder="dope.email@hotmail.com" />

                <Heading mt={"40px !important"}>Select your locations:</Heading>
                <Text>Up to 5 locations</Text>
                <HStack>
                    <Text>Filter: </Text>
                    <Input placeholder="Location" 
                        onChange={(event) => filterLocations(event.target.value)}
                    />
                </HStack>
                <Button mt={"20px !important"} mb={"24px !important"} w="50%" marginInline={"25% !important"} colorScheme={"green"} 
                    onClick={handleSingupClick}
                >
                    Next Step
                </Button>
                <CheckboxGroup>
                    {locationsList.map((locationString) => (
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
