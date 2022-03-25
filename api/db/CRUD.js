const sql = require("mysql");

let con = sql.createConnection({
    host: "localhost",
    user: "apiUser",
    password: "password",
    database: "dataprocessing",
    port: 3308
});

async function getAll(sql, params) {
    let data = [];
    return new Promise(res => {
        con.query(sql, params, function(err, result) {
            //Error ->
            if(err) throw err;

            //Result ->
            for(let i = 0; i < result.length; i++) {
                data.push(result[i]);
            }
            res(data);
        });
    });
}

async function getById(sql, params) {
    return new Promise((res, error) => {
        con.query(sql, params, function(err, result) {
            //Error ->
            if(err) error("Something went wrong while getting the data from the database");
            if(result.length == 0) error("No rows found with given id");
            
            //Result ->
            res(result[0]);
        });
    });
}

async function add(sql, params) {
    return new Promise((res, error) => {
        con.query(sql, params, function(err) {
            //Error ->
            if(err) error("Something went wrong while inserting data into database");

            //Succes ->
            res(200);
        });
    });
}

async function update(sql, params) {
    return new Promise((res, error) => {
        con.query(sql, params, function(err) {
            console.log(err);
            //Error ->
            if(err) error("Something went wrong while updating data into database");

            //Succes ->
            res(200);
        });
    });
}

async function deleteRec(sql, params) {
    return new Promise((res, error) => {
        con.query(sql, params, function(err) {
            //Error ->
            if(err) error("Something went wrong while deleting data into database");

            //Succes ->
            res(200);
        });
    });
}

module.exports = {
    getAll: getAll,
    getById: getById,
    add: add,
    update: update,
    delete: deleteRec
}