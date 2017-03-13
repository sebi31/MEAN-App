import $ from 'jquery';

//TO DO: Need a better way of setting this up
const baseUrl = 'http://localhost:3000';

class ApiBase{
    constructor(){

    }

    Get(urlPart, data, callback){
        $.getJSON(baseUrl + urlPart, data, callback)
    }
}

export default new ApiBase();
