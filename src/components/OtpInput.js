"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpInput = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const InputField_1 = require("./InputField");
const useOtpInput_1 = require("./useOtpInput");
const Styles_1 = __importDefault(require("./Styles"));
const OtpInput = props => {
    var _a;
    const { otpLength = 4, inputBoxStyles, placeholder, gap, inputTextStyles, activeBorderColor, borderColor, borderWidth, keyboardType, autoFocus, onChange } = props;
    const { refs, activeIndex, setActiveIndex, addInputRef, handleOnFocus, handleOnChange, handleOnKeyPress, } = (0, useOtpInput_1.useOtpInput)({
        otpLength,
        autoFocus,
        onChange
    });
    return (<react_native_1.View style={[
            Styles_1.default.inputFieldContainer,
            {
                columnGap: gap !== null && gap !== void 0 ? gap : 10,
            },
        ]}>
      {(_a = Array.from({ length: otpLength })) === null || _a === void 0 ? void 0 : _a.map((_, index) => {
            return (<InputField_1.InputField inputBoxStyles={inputBoxStyles} placeholder={placeholder} inputTextStyles={inputTextStyles} activeIndex={activeIndex} setActiveIndex={setActiveIndex} activeBorderColor={activeBorderColor} borderColor={borderColor} borderWidth={borderWidth} inputIndex={index} addInputRef={addInputRef} keyboardType={keyboardType} handleOnFocus={handleOnFocus} handleOnChange={handleOnChange} handleOnKeyPress={handleOnKeyPress}/>);
        })}
    </react_native_1.View>);
};
exports.OtpInput = OtpInput;
