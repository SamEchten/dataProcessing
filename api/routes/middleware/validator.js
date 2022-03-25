const val = require("jsonschema").validate;

//Schemas ->
const jsonSchemas = {
    add: "../../schemas/json/country/addSchema.json",
    update: "../../schemas/json/country/updateSchema.json"
}

const xmlSchemas = {
    add: "../../schemas/xml/country/addSchema.xsd",
    update: "../../schemas/xml/country/updateSchema.xsd"
}

const validate = (route) => {
    return (req, res, next) => {
        let contentType = req.headers["content-type"];
        let json = req.body

        if(contentType == "application/xml") {
            json = parseXmlToJson(req.body);
        }

        let schema = require(jsonSchemas[route]);
        if(val(json, schema).valid) {
            //Json schema is valid -> return to original route
            req.body = json;
            next();
        } else {
            //Json scheme is not valid -> return error message
            res.statusMessage = "Given data does not match json schema";
            res.status(400).send();
        }
    }
}

function parseXmlToJson(xml) {
    let data = xml["data"];
    let json = {};

    let id = data["id"];
    if(id != null) {
        json["id"] = parseInt(id[0]);
    }

    let countryName = data["countryName"];
    if(countryName != null) {
        json["countryName"] = countryName[0];
    }

    return json;
}

module.exports = {
    validate: validate
}