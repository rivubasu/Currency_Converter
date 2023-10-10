var audio= new  Audio("./sounds/dollar.mp3");
const populate =async (value, currency)=>{
    let myStr= ""
    audio.play();
    url="https://api.currencyapi.com/v3/latest?apikey=cur_live_0wQ0M0QKllXpXWHodYc0u4QCYP0Zz4GYFkCV3YYS&base_currency="+currency;
    let response=await fetch(url);
    let rJson= await response.json();
    document.querySelector(".output").style.display ="block";

    for(let key of Object.keys(rJson["data"])){

        myStr+=`<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${rJson["data"][key]["value"] * value}</td>
                </tr>`;
    }

    const tableBody= document.getElementsByTagName("tbody");
    tableBody[0].innerHTML= myStr;
    
}  


const btn= document.querySelector(".btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();  //Otherwise the form get submitted
    const value= parseInt(document.querySelector("input[name='quantity']").value);
    const currency= document.querySelector("select[name='currency']").value;
    
    
    populate(value, currency);
})



