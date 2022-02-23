const applyColor = (text, regex, color) =>
    text.replace(regex, `<span style="color:#${color}"><b>$1</b></span>`);

const files = require("./files.js");
const text = files.read("fontCode.html");

const codeRegex = /<code>[\s\S]*<\/code>/i;

let code = text.match(codeRegex)[0];

//get all Strings
code = applyColor(code, /(\".*\")/g, "ce9178");

//get all reserved words
code = applyColor(code, /\b(package|public|class|static|if|else)\b/g, "d857cf");

//get all reserved types
code = applyColor(code, /\b(void|int)\b/g, "1385e2");

//get all multiple lines
code = applyColor(code, /(\/\*[\s\S]*\*\/)/g, "267703");

//get all comments of one line
code = applyColor(code, /(\/\/.*?\n)/g, "267703");

const finalContent = text.replace(codeRegex, code);
files.write("fontCode.html", finalContent);
