const btn = document.querySelector("#btn");
const wt = document.querySelector("#weight");
const ht = document.querySelector("#height");

const bm = document.querySelector('#BM');
 

btn.addEventListener("click",()=>{
    let weightValue = Number(wt.value);
    let heightValue = Number(ht.value);
    console.log(weightValue);
    console.log(heightValue);

    heightValue = heightValue*0.01;
    let ans = (weightValue/(heightValue*heightValue));
    // ans = Math.round(ans); Round a number in Javasrcipt
    ans = ans.toFixed(2);
     
    bm.value = ans;

})

