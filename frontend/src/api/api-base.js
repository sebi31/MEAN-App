import $ from 'jquery';

//TO DO: Need a better way of setting this up
const baseUrl = 'http://localhost:3000';

class ApiBase{
    constructor(){
        /*this.Get = function(urlPart, data, callback){
            $.getJSON(baseUrl + urlPart, data, callback)
        }*/

    }

    Get(urlPart, data, callback){
        $.getJSON(baseUrl + urlPart, data, callback)
    }
}

export default new ApiBase();
