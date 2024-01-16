"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputField = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Styles_1 = __importDefault(require("./Styles"));
const InputField = ({ inputBoxStyles, placeholder, borderWidth, borderColor, activeBorderColor, activeIndex, inputIndex, setActiveIndex, addInputRef, keyboardType, handleOnFocus, handleOnChange, handleOnKeyPress, }) => {
    return (<react_native_1.TextInput style={[Styles_1.default.inputField, inputBoxStyles, {
                borderWidth: borderWidth && typeof borderWidth == "number" ? borderWidth : 2,
                borderColor: activeIndex === inputIndex ?
                    activeBorderColor !== null && activeBorderColor !== void 0 ? activeBorderColor : "darkgrey" :
                    borderColor !== null && borderColor !== void 0 ? borderColor : "lightgrey",
            }]} maxLength={2} placeholder={placeholder} onFocus={() => {
            handleOnFocus(inputIndex);
        }} ref={(ref) => addInputRef(ref)} keyboardType={keyboardType ? keyboardType : "default"} onChangeText={(text) => handleOnChange(text)} onKeyPress={(event) => handleOnKeyPress(event)}/>);
};
exports.InputField = InputField;
