
let saveToCookie = () => {
    //start saving to the cookie
    let arr = ['red' , 'green' , 'blue' , 'black' ,'gray']
    let checked = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(document.getElementById(arr[i]).checked){
            checked = arr[i];
        }
    }
    
    document.cookie = "FavColor="+checked 
    firstPageOpen();
}

let firstPageOpen = () => {
    //when first page is reload
    let x =getCookie() ;//getiing the faccolor content

    if(x === undefined || x=== 'undefined'){
        document.querySelector('.firstpageform').style.visibility = 'visible'
        document.getElementById('removeBut').style.visibility = 'hidden'
        
    }
    else{
        document.querySelector('.firstpageform').style.visibility = 'hidden'
        document.body.style.background = x;
        document.getElementById('removeBut').style.visibility = 'visible' //clearing cookie
    }
    
}


function getCookie(){
    let name = 'FavColor'+"=";
    let coo = document.cookie;
    let cookies = coo.split(';')
    for(let i = 0 ; i < cookies.length ;i++){
        let c = cookies[i];
        if(c.indexOf(name) ==0){
            return c.substring(name.length , c.length)
        }
    }
}


let removeCookie = () => { 
    console.log('ffgd')
    document.cookie = "FavColor="+undefined
    document.body.style.background = 'white';
    firstPageOpen()
    
}