"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOtpInput = void 0;
const react_1 = require("react");
const useOtpInput = ({ otpLength, autoFocus, onChange }) => {
    const refs = [];
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(-1);
    const [userInputs, setUserInputs] = (0, react_1.useState)((() => {
        const initArray = [];
        for (let i = 0; i < otpLength; i++)
            initArray.push('');
        return initArray;
    })());
    (0, react_1.useEffect)(() => {
        var _a;
        if (autoFocus)
            (_a = refs === null || refs === void 0 ? void 0 : refs[0]) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    const addInputRef = (ref) => {
        refs.push(ref);
    };
    const gotoBlank = () => {
        const blankIndex = userInputs.findIndex((value, index) => value.trim() === "");
        setActiveIndex(blankIndex);
    };
    const handleOnFocus = (index) => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (((_b = (_a = userInputs[index]) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            const blankIndex = userInputs.findIndex((value, index) => value.trim() === "");
            setActiveIndex(blankIndex);
            (_d = (_c = refs[blankIndex]) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.call(_c);
        }
        else {
            setActiveIndex(index);
            (_e = refs[index]) === null || _e === void 0 ? void 0 : _e.setNativeProps({ start: (_f = userInputs[index]) === null || _f === void 0 ? void 0 : _f.length, end: (_g = userInputs[index]) === null || _g === void 0 ? void 0 : _g.length });
            // refs?.[index]?.setNativeProps({ selection: { start: 0, end: 1 } });
        }
    };
    const handleOnChange = (text) => {
        var _a, _b;
        if (text == '') {
            // Go Back
            userInputs[activeIndex] = '';
            const gotoIndex = Math.max(activeIndex - 1, 0);
            updateInputFocus(gotoIndex);
            updateOnChange();
        }
        else if (text == ' ') {
            // Do Nothing
        }
        else if ((text === null || text === void 0 ? void 0 : text.length) == 2) {
            // Replace field value with latest enter value
            userInputs[activeIndex] = text;
            userInputs[activeIndex] = text[1];
            (_a = refs === null || refs === void 0 ? void 0 : refs[activeIndex]) === null || _a === void 0 ? void 0 : _a.setNativeProps({ text: text[1] });
            const gotoIndex = Math.min(activeIndex + 1, otpLength - 1);
            updateInputFocus(gotoIndex);
            updateOnChange();
        }
        else {
            // Add input value
            userInputs[activeIndex] = text;
            (_b = refs === null || refs === void 0 ? void 0 : refs[activeIndex]) === null || _b === void 0 ? void 0 : _b.setNativeProps({ text: text });
            const gotoIndex = Math.min(activeIndex + 1, otpLength - 1);
            updateInputFocus(gotoIndex);
            updateOnChange();
        }
    };
    const updateOnChange = () => {
        onChange === null || onChange === void 0 ? void 0 : onChange(userInputs.join(''));
    };
    const updateInputFocus = (index) => {
        var _a, _b;
        setActiveIndex(index);
        (_b = (_a = refs === null || refs === void 0 ? void 0 : refs[index]) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    const handleOnKeyPress = ({ nativeEvent: { key: keyValue } }) => {
        if (keyValue === "Backspace") {
            if ((userInputs === null || userInputs === void 0 ? void 0 : userInputs[activeIndex]) == '') {
                const gotoIndex = Math.max(activeIndex - 1, 0);
                updateInputFocus(gotoIndex);
            }
        }
    };
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
    };
};
exports.useOtpInput = useOtpInput;
