const images=[]
let currentIndex=-1

async function display(){

    try {
        const response = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );
        const data=await response.json()
        if(!response.ok){
            throw new Error("sever faild to fetch")
        }
        else{
            images.push(data.message)
            currentIndex=images.length-1

            showimage()
        }
    } catch (error) {
        console.log(error)
    }

    
}
function previous(){
    if(currentIndex>0){
        currentIndex--
        showimage()
    }
}
function  showimage(){
const image=document.getElementById("image")
image.src=images[currentIndex]
}

function next(){
    display()
}
