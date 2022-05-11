const fs = require("fs")
module.exports = class Reader{
    static readJSONFile(filepath){
        const raw_data = fs.readFileSync(filepath)
        return JSON.parse(raw_data)
    }
}