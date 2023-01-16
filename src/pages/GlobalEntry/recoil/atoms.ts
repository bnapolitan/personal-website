import { atom } from "recoil";

export const singupStepState = atom({
    key: "singupStep",
    default: 0
})

const emptyArray: string[] = [];
export const locationSelectionsState = atom({
    key: "locationSelections",
    default: emptyArray
})
