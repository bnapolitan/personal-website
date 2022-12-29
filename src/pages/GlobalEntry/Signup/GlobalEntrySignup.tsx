import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { createUseStyles } from 'react-jss';
import { useRecoilState } from "recoil";
import { globalEntryUseStyles } from "../Classes";
import { singupStepState } from "../recoil/atoms";
import ContactInfo from "./ContactInfo";
import LocationSelection from "./LocationSelection";

const useStyles = createUseStyles({
})

function GlobalEntrySignup() {

    const classes = useStyles();
    const globalEntryClasses = globalEntryUseStyles();

    //React State
    const [signupStep, setSignupStep] = useRecoilState(singupStepState);
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
            console.log("moving to signup...");
        }
    }


    useEffect(() => {
        console.log("moving on...");
    }, [signupStep]);


    return (
        <>
            {signupStep === 0 ?
                <LocationSelection />
                :
                <ContactInfo />
            }
        </>
    );
}

export default GlobalEntrySignup;
