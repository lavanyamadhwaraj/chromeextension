const getJokes=async()=>{
try{
    const res=fetch("https://api.chucknorris.io/jokes/random");
    const data= await (await res).json();
    const myJoke=document.querySelector("#myJoke");
    myJoke.innerHTML=data.value;
}
catch(error){}
};
window.addEventListener("load",()=>{
    getJokes();
});