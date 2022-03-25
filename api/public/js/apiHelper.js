const serverInfo = {
    serverIp: "http://localhost:3030"
}

const getAllCountries = async() => {
    try {
        let response = await fetch(serverInfo.serverIp + "/country/getAll/");
        let json = await response.json();
        return json;
    } catch(err) {
        Swal.fire({
            title: 'Error!',
            text: err,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

const getGniMaleByCountry = async(id) => {
    try {
        let response = await fetch(serverInfo.serverIp + "/gniMale/byCountryId/"+id+"");
        let json = await response.json();
        return json;
    } catch(err) {
        Swal.fire({
            title: 'Error!',
            text: err,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

const getGniFemaleByCountry = async(id) => {
    try {
        let response = await fetch(serverInfo.serverIp + "/gniFemale/byCountryId/"+id+"");
        let json = await response.json();
        return json;
    } catch(err) {
        Swal.fire({
            title: 'Error!',
            text: err,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

const getGdpByCountry = async(id) => {
    try {
        let response = await fetch(serverInfo.serverIp + "/gdp/byCountryId/"+id+"");
        let json = await response.json();
        return json;
    } catch(err) {
        Swal.fire({
            title: 'Error!',
            text: err,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}