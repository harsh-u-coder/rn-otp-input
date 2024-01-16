"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    inputField: {
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        textAlign: "center",
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: "grey",
    },
    inputFieldContainer: {
        flexDirection: "row",
        columnGap: 10,
        flex: 1,
    }
});
