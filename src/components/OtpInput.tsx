import React, { useState } from 'react';
import {Text, View} from 'react-native';
import {OtpInputPropType} from './Types';
import {InputField} from './InputField';
import {useOtpInput} from './useOtpInput';
import styles from './Styles';

export const OtpInput: React.FC<OtpInputPropType> = props => {
  const {
    otpLength = 4,
    inputBoxStyles,
    placeholder,
    gap,
    inputTextStyles,
    activeBorderColor,
    borderColor,
    borderWidth,
    keyboardType,
    autoFocus,
    onChange
  } = props;

  const {
    refs, 
    activeIndex, 
    setActiveIndex,
    addInputRef,
    handleOnFocus,
    handleOnChange,
    handleOnKeyPress,
  } = useOtpInput({
    otpLength,
    autoFocus,
    onChange
  });


  return (
    <View
      style={[
        styles.inputFieldContainer,
        {
          columnGap: gap ?? 10,
        },
      ]}>
      {Array.from({length: otpLength})?.map((_, index) => {
        return (
          <InputField
            inputBoxStyles={inputBoxStyles}
            placeholder={placeholder}
            inputTextStyles={inputTextStyles}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            activeBorderColor={activeBorderColor}
            borderColor={borderColor}
            borderWidth={borderWidth}
            inputIndex={index}
            addInputRef={addInputRef}
            keyboardType={keyboardType}
            handleOnFocus={handleOnFocus}
            handleOnChange={handleOnChange}
            handleOnKeyPress={handleOnKeyPress}
          />
        );
      })}
    </View>
  );
};
