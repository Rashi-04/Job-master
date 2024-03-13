async function off(find){
    
    const url = 'https://jsearch.p.rapidapi.com/search?query=' + find + '&page=1&num_pages=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '92108f4d1dmsh648eed31d4ac159p145f56jsn3c3894ef9365',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data[0]);
        
        const para = document.querySelector("#para");
        const inp = document.querySelector(".job");
        const btn = document.querySelector("button");

        inp.remove();
        btn.remove();


        para.innerHTML = "Top 3 job results are ;)";
        const div1 = document.createElement("div");
        div1.innerHTML = "<b>Job Id: " + result.data[0].job_id + "<br/>" + "Apply here: ";
        const ancor1 = document.createElement("a");
        ancor1.setAttribute("href", result.data[0].job_apply_link);
        const text1 = document.createTextNode(result.data[0].job_apply_link);
        ancor1.appendChild(text1);
        document.body.appendChild(div1);
        div1.appendChild(ancor1);

        const div2 = document.createElement("div");
        div2.innerHTML = "<b>Job Id: " + result.data[1].job_id + "<br/>" + "Apply here: ";
        const ancor2 = document.createElement("a");
        ancor2.setAttribute("href", result.data[1].job_apply_link);
        const text2 = document.createTextNode(result.data[1].job_apply_link);
        ancor2.appendChild(text2);
        document.body.appendChild(div2);
        div2.appendChild(ancor2);

        const div3 = document.createElement("div");
        div3.innerHTML = "<b>Job Id: " + result.data[2].job_id + "<br/>"+ "Apply here: ";
        const ancor3 = document.createElement("a");
        ancor3.setAttribute("href", result.data[2].job_apply_link);
        const text3 = document.createTextNode(result.data[2].job_apply_link);
        ancor3.appendChild(text3);
        document.body.appendChild(div3);
        div3.appendChild(ancor3);

        
    } catch (error) {
        console.error(error);
    }


}
submit.addEventListener("click", ()=>{
    off(city.value)
});