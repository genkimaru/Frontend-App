async function getData(){
    let  data = await fetch('https://localhost/1.json');
    console.log('getdata');
    return data;
}

async function getData2(){
    let data2 = await getData();
    console.log('data2')
}

let result  = getData2();
console.log(result)

