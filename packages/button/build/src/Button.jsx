"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = ({ id, onClick, children, }) => {
    return (<button id={id} onClick={onClick}>
      {children}
    </button>);
};
exports.Button = Button;
