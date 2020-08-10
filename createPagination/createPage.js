import {createUl} from "./dom.helper.js";
let div = document.querySelector(".info")


 export let createPage = (r) => {
    r.docs.forEach(
        ({ title, author_name, first_publish_year, subject }, index) => {
            if (subject && subject.length > 5) {
                subject = subject.slice(0, 5);
            } else if (subject && subject.length < 5) {
                subject = subject.slice(0);
            }

            let newArr = [title, author_name, first_publish_year, subject].filter(
                (item) => item
            );
            let newUl = createUl(newArr);
            div.append(newUl);
        }
    );
};