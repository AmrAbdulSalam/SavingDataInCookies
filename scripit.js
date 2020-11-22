
let saveToCookie = () => {
    //start saving to the cookie
    let arr = ['red' , 'green' , 'blue' , 'black' ,'gray']
    let checked = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(document.getElementById(arr[i]).checked){
            checked = arr[i];
        }
    }
    document.cookie = "FavColor = "+checked 
    let name = document.cookie.FavColor
    console.log(name)
}

let firstPageOpen = () => {
    //when first page is reload
    console.log('welcome to my first page')
}