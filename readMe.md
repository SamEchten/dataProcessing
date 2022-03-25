# ReadMe

## Info

Deze API is geschreven in javascript met behulp van NodeJS, via NodeJS is er gebruik gemaakt van verschillende modules die kunnen worden geïnstalleerd doormiddel van NodeJS. Het project bestaat uit de API zelf en de database waarin alle informatie wordt opgeslagen. 

## NodeJs

Om NodeJs te installeren kunt u naar de volgende website gaan: https://nodejs.org/en/

## NodeJs modules

Om de modules te installeren moet u de volgende commando's uitvoeren in uw terminal.

#### Express

```
npm install express
```

Mysql

```
npm install mysql
```

Json schema

```
npm install jsonschema
```

## Database

In het mapje database vindt u de gehele SQL file om de database te kunnen importeren, van belang is dat indien u een andere gebruikersnaam / wachtwoord heeft voor uw database deze worden aangepast in de CURD.js file. 

```
let con = sql.createConnection({
    host: "localhost",
    user: "apiUser",
    password: "password",
    database: "dataprocessing",
    port: 3308
});
```

## Endpoints

Voor de verschillende tabellen zijn verschillende endpoints gemaakt, hieronder vindt u deze en daarbij een JSON formaat die u kunt gebruiken in bijvoorbeeld postman om deze endpoints uit te testen

De URL van de server: http://localhost:3030

Om naar een endpoint te kunnen callen moet de server URL voor de endpoint worden geplaatst.

### Country

Get all countries

>ENDPOINT: /country/getAll
>
>REQUEST: GET

Get country by id

> ENDPOINT: /country/:id
>
> REQUEST: GET
>
> PARAMS: id

Add country

> ENDPOINT: /country/add
>
> REQUEST: POST
>
> JSON:
>
> ```
> {
>     "countryName": "exampleCountry"
> }
> ```

Update country

> ENDPOINT: /country/update
>
> REQUEST: PUT
>
> JSON:
>
> ``` 
> {
>     "id" : 1,
>     "countryName": "newCountryName"
> }
> ```

Delete country

> ENDPOINT: /country/delete/:id
>
> REQUEST: DELETE
>
> PARAMS: id

### GniMale

Get all gniMaleData

>ENDPOINT: /gniMale/getAll
>
>REQUEST: GET

Get gniMaleData by Id

> ENDPOINT: /gniMale/:id
>
> REQUEST: GET
>
> PARAMS: id

Get gniMaleData by countryId

> ENDPOINT: /gniMale/byCountryId/:id
>
> REQUEST: GET
>
> PARAMS: id

Add gniMaleData

> ENDPOINT: /gniMale/add
>
> REQUEST: POST
>
> JSON:
>
> ```
> {
>     "countryId": 1,
>     "1995": 1995,
>     "2000": 2000,
>     "2005": 2005,
>     "2010": 2010,
>     "2011": 2011,
>     "2012": 2012,
>     "2013": 2013,
>     "2015": 2015,
>     "2016": 2016,
>     "2017": 2017,
>     "2018": 2018
> }
> ```

Update gniMaleData

> ENDPOINT: /gniMale/update
>
> REQUEST: PUT
>
> JSON:
>
> ``` 
> {
>     "metaData": {
>         "id": 1
>     },
>     "data" {
>         "countryId": 1,
>         "1995": 1995,
>         "2000": 2000,
>         "2005": 2005,
>         "2010": 2010,
>         "2011": 2011,
>         "2012": 2012,
>         "2013": 2013,
>         "2015": 2015,
>         "2016": 2016,
>         "2017": 2017,
>         "2018": 2018
>     }
> }
> 
> ```

Delete gniFemale

> ENDPOINT: /gniFemale/delete/:id
>
> REQUEST: DELETE
>
> PARAMS: id

### GniFemale

Get all gniFemaleData

>ENDPOINT: /gniFemale/getAll
>
>REQUEST: GET

Get gniFemaleData by Id

> ENDPOINT: /gniFemale/:id
>
> REQUEST: GET
>
> PARAMS: id

Get gniFemaleData by countryId

> ENDPOINT: /gniFemale/byCountryId/:id
>
> REQUEST: GET
>
> PARAMS: id

Add gniFemaleData

> ENDPOINT: /gniFemale/add
>
> REQUEST: POST
>
> JSON:
>
> ```
> {
>     "countryId": 1,
>     "1995": 1995,
>     "2000": 2000,
>     "2005": 2005,
>     "2010": 2010,
>     "2011": 2011,
>     "2012": 2012,
>     "2013": 2013,
>     "2015": 2015,
>     "2016": 2016,
>     "2017": 2017,
>     "2018": 2018
> }
> ```

Update gniFemaleData

> ENDPOINT: /gniFemale/update
>
> REQUEST: PUT
>
> JSON:
>
> ``` 
> {
>     "metaData": {
>         "id": 1
>     },
>     "data" {
>         "countryId": 1,
>         "1995": 1995,
>         "2000": 2000,
>         "2005": 2005,
>         "2010": 2010,
>         "2011": 2011,
>         "2012": 2012,
>         "2013": 2013,
>         "2015": 2015,
>         "2016": 2016,
>         "2017": 2017,
>         "2018": 2018
>     }
> }
> 
> ```

Delete gniFemaleData

> ENDPOINT: /gniFemale/delete/:id
>
> REQUEST: DELETE
>
> PARAMS: id

### GdpData

Get all gdpData

>ENDPOINT: /gdp/getAll
>
>REQUEST: GET

Get gdpData by Id

> ENDPOINT: /gdp/:id
>
> REQUEST: GET
>
> PARAMS: id

Get gdpData by countryId

> ENDPOINT: /gdp/byCountryId/:id
>
> REQUEST: GET
>
> PARAMS: id

Add gdpData

> ENDPOINT: /gdp/add
>
> REQUEST: POST
>
> JSON:
>
> ```
> {
>     "countryId": 1,
>     "1990": 1990,
>     "1995": 1995,
>     "2000": 2000,
>     "2005": 2005,
>     "2010": 2010,
>     "2011": 2011,
>     "2012": 2012,
>     "2013": 2013,
>     "2015": 2015,
>     "2016": 2016,
>     "2017": 2017,
>     "2018": 2018
> }
> ```

Update gdpData

> ENDPOINT: /gdp/update
>
> REQUEST: PUT
>
> JSON:
>
> ``` 
> {
>     "metaData": {
>         "id": 1
>     },
>     "data" {
>         "countryId": 1,
>         "1990": 1990,
>         "1995": 1995,
>         "2000": 2000,
>         "2005": 2005,
>         "2010": 2010,
>         "2011": 2011,
>         "2012": 2012,
>         "2013": 2013,
>         "2015": 2015,
>         "2016": 2016,
>         "2017": 2017,
>         "2018": 2018
>     }
> }
> ```

Delete gdpData

> ENDPOINT: /gdp/delete/:id
>
> REQUEST: DELETE
>
> PARAMS: id

## XML

Vanwege tijdsgebrek ben ik helaas niet aan toegekomen om alle XML goed af te kunnen handelen. Het is op het moment wel mogelijk om XML data naar de API op kunnen sturen, deze wordt alleen nu nog omgezet naar JSON en zo gevalideerd. De opgestuurde XML data wordt dus nog niet gevalideerd tegen een XSD schema maar tegen een JSON schema.