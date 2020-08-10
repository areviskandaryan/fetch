import {createRow} from "./dom.helper.js";
import {doGet} from "./request.helper.js";



let tbody = document.querySelector("tbody")


doGet( "https://ghibliapi.herokuapp.com/films")
    .then((res)=>{
        res.forEach(createTable);
    })
    .catch((err)=>console.log(err.message))


let createTable=({title,release_date,director,description})=>{
    let row = createRow([title,release_date,director,description]);
    tbody.append(row);
}








