
export let createUl = (newArr) => {
    let ul = document.createElement("ul");
    newArr.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.append(li);

    });
    ul.className="info-item"
    return ul;
};


