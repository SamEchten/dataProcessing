const express = require("express");
const router = express.Router();
const crud = require("../db/gdpCRUD");
const validator = require("./middleware/validator");

router.use(express.json());


router.get("/getAll/", async (req, res) => {
    try {
        let result = await crud.getAll();
        res.send(result);
    } catch(err) {
        res.statusMessage = "Something went wrong with getting the data from the database, please contact the Api owner";
        res.status(500);
        res.send();
    }
});

router.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let country = await crud.getById(id);
        res.send(country);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send(err);
    }
});

router.get("/byCountryId/:id", async (req, res) => {
    let id = req.params.id;
    let json = {
        metaData: {

        },
        data: {

        }
    };
    try {
        let country = await crud.getByCountryId(id);
        for(row in country) {
            if(row == "countryId" || row == "id") {
                json.metaData[row] = country[row];
            } else {
                json.data[row] = country[row];
            }
        }
        res.send(json);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send(err);
    }
});

router.post("/add/", validator.validate("add"), async (req, res) => {
    //Json/Xml has been validated in validate middleware ->
    let body = req.body;
    try {
        let status = await crud.add(body);
        res.sendStatus(status);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send(err);
    }
});

router.put("/update/", validator.validate("update"), async (req, res) => {
    //Json/Xml has been validated in validate middleware ->
    let body = req.body;
    try {
        let id = body.metaData.id;
        let status = await crud.update(id, body);
        res.sendStatus(status);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send(err);
    }
});

router.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let status = await crud.deleteCountry(id);
        res.send(status);
    } catch(err) {
        res.statusMessage = err;
        res.status(400).send(err);
    }
});

module.exports = router;