import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { singupStepState } from "../recoil/atoms";
import ContactInfo from "./ContactInfo";
import LocationSelection from "./LocationSelection";

function GlobalEntrySignup() {

    //React State
    const [signupStep, setSignupStep] = useRecoilState(singupStepState);

    useEffect(() => {
        setSignupStep(0);
    }, []);


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
