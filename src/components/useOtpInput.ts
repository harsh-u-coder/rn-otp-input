import React, { useEffect, useState } from "react";
import { OtpInputHookParamType } from "./Types";
import { TextInput } from "react-native";

export const useOtpInput = ({
    otpLength,
    autoFocus,
    onChange
}: OtpInputHookParamType) => {

    const refs: TextInput[] = [];
    const [activeIndex, setActiveIndex] = useState(-1);
    const [userInputs, setUserInputs] = useState((() => {
        const initArray = [];
        for(let i=0;i<otpLength; i++) 
            initArray.push('');
        return initArray;
    })());

    useEffect(() => {
        if(autoFocus)
            refs?.[0]?.focus();
    }, []);

    const addInputRef = (ref: TextInput) => {
        refs.push(ref);
    }

    const gotoBlank = () => {
        const blankIndex = userInputs.findIndex((value: string, index: number) => value.trim() === "");
        setActiveIndex(blankIndex);
    }

    const handleOnFocus = (index: number) => {
        if(userInputs[index]?.trim()?.length === 0) {
            const blankIndex = userInputs.findIndex((value: string, index: number) => value.trim() === "");
            setActiveIndex(blankIndex);
            refs[blankIndex]?.focus?.();
        }
        else {
            setActiveIndex(index);
            refs[index]?.setNativeProps({ start: userInputs[index]?.length, end: userInputs[index]?.length })
            // refs?.[index]?.setNativeProps({ selection: { start: 0, end: 1 } });
        }
    }

    const handleOnChange = (text: string) => {
        if(text == '') {
            // Go Back
            userInputs[activeIndex] = '';
            const gotoIndex = Math.max(activeIndex - 1, 0);
            updateInputFocus(gotoIndex);
            updateOnChange();
        }
        else if(text == ' ') {
            // Do Nothing
        }
        else if(text?.length == 2){
            // Replace field value with latest enter value
            userInputs[activeIndex] = text;
            userInputs[activeIndex] = text[1];
            refs?.[activeIndex]?.setNativeProps({ text: text[1] });
            const gotoIndex = Math.min(activeIndex + 1, otpLength as number - 1);
            updateInputFocus(gotoIndex);
            updateOnChange();
        }
        else {
            // Add input value
            userInputs[activeIndex] = text;
            refs?.[activeIndex]?.setNativeProps({ text: text });
            const gotoIndex = Math.min(activeIndex + 1, otpLength as number - 1);
            updateInputFocus(gotoIndex);
            updateOnChange();
        }
    }

    const updateOnChange = () => {
        onChange?.(userInputs.join(''));
    }

    const updateInputFocus = (index: number) => {
            setActiveIndex(index);
            refs?.[index]?.focus?.();
    }

    const handleOnKeyPress = ({nativeEvent: {key: keyValue} }: {nativeEvent: {key: string}}) => {
        if(keyValue === "Backspace") {
            if(userInputs?.[activeIndex] == '') {
                const gotoIndex = Math.max(activeIndex - 1, 0);
                updateInputFocus(gotoIndex);
            }
        }
    }

    return {
        refs,
        activeIndex,
        setActiveIndex,
        addInputRef,
        setUserInputs,
        gotoBlank,
        handleOnFocus,
        handleOnChange,
        handleOnKeyPress,
    }
}