import React from 'react';
import Button from "./components/Button/button";
// import Button, { ButtonType, ButtonSize } from "./components/Button/button";
var App = function () {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" }, "Button\u7EC4\u4EF6"),
        React.createElement(Button, { disabled: true, className: 'cust' }, "Button"),
        React.createElement(Button, { btnType: 'primary', size: 'lg', onClick: function (e) { console.log(e); } }, "TestButton"),
        React.createElement(Button, { btnType: 'link', href: 'https://www.baidu.com', target: '_blank' }, "baidu")));
};
export default App;
