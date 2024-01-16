import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import styles from "./Styles";
import { InputFieldPropType } from "./Types";

export const InputField: React.FC<InputFieldPropType> = ({
    inputBoxStyles,
    placeholder,
    borderWidth,
    borderColor,
    activeBorderColor,
    activeIndex,
    inputIndex,
    setActiveIndex,
    addInputRef,
    keyboardType,
    handleOnFocus,
    handleOnChange,
    handleOnKeyPress,
}) => {

    return (
        <TextInput 
            style={[styles.inputField, inputBoxStyles, {
                borderWidth: borderWidth && typeof borderWidth == "number" ? borderWidth : 2,
                borderColor: activeIndex === inputIndex ?
                    activeBorderColor ?? "darkgrey" :
                    borderColor ?? "lightgrey",
            }]}
            maxLength={2}
            placeholder={placeholder}
            onFocus={() => {
                handleOnFocus(inputIndex);
            }}
            ref={(ref) => addInputRef(ref as TextInput)}
            keyboardType={keyboardType ? keyboardType : "default"}
            onChangeText={(text) => handleOnChange(text)}
            onKeyPress={(event) => handleOnKeyPress(event)}
        />
    )
}
