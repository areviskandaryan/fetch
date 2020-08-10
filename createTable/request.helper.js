let request=(url,method="GET",body=null)=>{
    let requestConfig = {
        method,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    };
    if(body){
        requestConfig.body = JSON.stringify(body);
    }

    return fetch(url,requestConfig)
           .then((r)=>r.json())
}

export let doGet =(url)=>{
  return   request(url);
}