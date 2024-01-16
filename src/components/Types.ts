import { Dispatch, SetStateAction } from "react";
import { KeyboardTypeOptions, StyleProp, TextInput, TextStyle, ViewStyle } from "react-native";

export interface OtpInputPropType 
    extends OtpInputHookParamType, InputFieldCommonPropType {
    gap?: number
}

export interface OtpInputHookParamType {
    otpLength: number,
    autoFocus?: boolean,
    onChange?: (otp: string) => void,
}

interface InputFieldCommonPropType {
    inputBoxStyles?: StyleProp<ViewStyle> | StyleProp<TextStyle>,
    inputTextStyles?: StyleProp<TextStyle>,
    placeholder?: string,
    activeBorderColor?: string,
    borderColor?: string,
    borderWidth?: number,
    keyboardType?: KeyboardTypeOptions | undefined,
}

export interface InputFieldPropType extends InputFieldCommonPropType {
    activeIndex: number,
    inputIndex: number,
    setActiveIndex: Dispatch<SetStateAction<number>>,
    addInputRef: (ref: TextInput) => void,
    handleOnFocus: (index: number) => void,
    handleOnChange: (text: string) => void,
    handleOnKeyPress: ({nativeEvent: {key}}: {nativeEvent: {key: string}}) => void,
}
