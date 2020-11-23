
let saveToLocal = () => {
    //start saving to the cookie
    let arr = ['red' , 'green' , 'blue' , 'black' ,'gray']
    let checked = '';
    for(let i = 0 ; i < arr.length ; i++){
        if(document.getElementById(arr[i]).checked){
            checked = arr[i];
        }
    }
    
    localStorage.setItem('FavColor' , checked)
    firstPageOpen();
}

let firstPageOpen = () => {
    //when first page is reload
    let x = localStorage.getItem('FavColor') ;//getiing the faccolor content
    console.log(x)
    if(x === null || x=== 'null'){
        document.querySelector('.firstpageform').style.visibility = 'visible'
        document.getElementById('removeBut').style.visibility = 'hidden'
        
    }
    else{
        document.querySelector('.firstpageform').style.visibility = 'hidden'
        document.body.style.background = x;
        document.getElementById('removeBut').style.visibility = 'visible' //clearing cookie
    }
    
}



let removeFromLocal = () => { 
    
    localStorage.setItem('FavColor' , null)
    document.body.style.background = 'white';
    firstPageOpen()
    
}