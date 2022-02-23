const fs = require("fs");

const read = (fileName) => {
    return fs.readFileSync(`${__dirname}/originals/${fileName}`, {
        encoding: "utf-8",
    });
};

const write = (fileName, content) => {
    const dirname = `${__dirname}/altered`;

    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }

    fs.writeFileSync(`${dirname}/${fileName}`, content, { encoding: "utf-8" });
};

module.exports = { read, write };
