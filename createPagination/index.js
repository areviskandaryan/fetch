
import {createUl} from "./dom.helper.js";
import {createPage} from "./createPage.js";

let btn = document.querySelector(".btn")
let input = document.querySelector(".input")
let div = document.querySelector(".info")
let body = document.querySelector(("body"))
let pagination = document.querySelector(".pagination")
let p =document.createElement("p")

btn.addEventListener("click", (event)=>{
    div.innerHTML="";
    pagination.innerHTML="";
    event.preventDefault();
    if(input.value.trim()){
        render(input.value)
    }

})

let render = (bookName) => {
    fetch(`http://openlibrary.org/search.json?q=${bookName}`)
        .then((res) => {
            return res.json();
        })
        .then((r) => {
            p.textContent = `Total count of results : ${r.numFound}`;
            div.append(p);
            createPage(r);
            let countPages = Math.round(r.numFound / 100);
            createPagination(countPages, bookName);
        });
};


let createPagination = (countPages, bookName) => {
    if (countPages) {
        let arr = [];
        arr.length = countPages;
        arr.fill(0);
        arr.forEach((el, index) => {
          let a = document.createElement("a");
          a.className="pageNumStyle";
          pagination.append(a);
          let num = index + 1;
          a.textContent = index + 1;
          a.addEventListener("click", () => {
              div.innerHTML = "";
              fetch(`http://openlibrary.org/search.json?q=${bookName}&page=${num}`)
              .then((res) => {
                 return res.json();
              })
             .then((r) => {
                 createPage(r);
             });
          });
        });
    }
};





