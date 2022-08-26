const cityName = document.getElementById("cityName");

const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const temp_real_val =  document.getElementById("temp_real_val");
const temp_status =  document.getElementById("temp_status");

const  datahide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `Please enter City Name`;
    datahide.classList.add("data_hide");

  } else {

    try {
        let url = `http://api.weatherapi.com/v1/current.json?key=a5735746f2864a5bb59123121221605&q=${cityVal}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData =[data];
        // console.log(data);

        city_name.innerText = `${arrData[0].location.name}, ${arrData[0].location.country}`;
        temp_real_val.innerText = arrData[0].current.temp_c;
        const tempMod = `${arrData[0].current.condition.text}`;
        
        // Temp mode checking..
         if(tempMod == "Clear"){
          temp_status.innerHTML =
            "<i class='fa-solid fa-sun' style= 'color: #red;'></i>";
         }else if (tempMod == "Clouds"){
          temp_status.innerHTML =
          "<i class='fa-solid fa-cloud' style= 'color: #f1f2f6;'></i>";
         }else if (tempMod == "Moderate or heavy rain with thunder"){
          temp_status.innerHTML =
          "<i class='fa-solid fa-cloud-hail-mixed' style= 'color: #a4b0be;'></i>";
         }else{
          temp_status.innerHTML =
          "<i class= 'fa-solid fa-cloud' style= 'color: #red;'></i>";
         };

         datahide.classList.remove("data_hide");



    } catch {
        city_name.innerText = `Please enter city name properly`;
        datahide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
