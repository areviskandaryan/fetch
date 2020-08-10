
export let createRow=(items)=>{
    let tr = document.createElement("tr");
    items.forEach((item)=>{
        let td =  document.createElement("td");
        td.textContent=item;
        tr.append(td)
    })
    return tr;
}