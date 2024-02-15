const input = document.querySelector("input"),
        btn = document.querySelector("button"),
        city_name = document.querySelector(".city_name"),
        temp = document.querySelector(".temp"),
        icon = document.querySelector(".icon"),
        description = document.querySelector(".description"),
        speed = document.querySelector(".speed");


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=f65e32faa80c40a876bd4112cd36e525`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            let tempe = data.main.temp;
            let temperature = Math.floor(tempe - 273.15);
            let image = data.weather[0].icon
            let Desc = data.weather[0].main
            let W_speed = data.wind.speed
            let icon_image = `https://openweathermap.org/img/wn/${image}@2x.png`
            city_name.innerHTML = data.name;
            temp.innerHTML = `${temperature}'C`
            icon.innerHTML = `
              <img src = ${icon_image}>
            `
            description.innerHTML = Desc
            speed.innerHTML = W_speed
          })

      btn.addEventListener("click", function(){
        if(input.value != ""){
          let city = input.value;
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f65e32faa80c40a876bd4112cd36e525`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            let tempe = data.main.temp;
            let temperature = Math.floor(tempe - 273.15);
            let image = data.weather[0].icon
            let Desc = data.weather[0].main
            let W_speed = data.wind.speed
            let icon_image = `https://openweathermap.org/img/wn/${image}@2x.png`
            city_name.innerHTML = data.name;
            temp.innerHTML = `${temperature}'C`
            icon.innerHTML = `
              <img src = ${icon_image}>
            `
            description.innerHTML = Desc
            speed.innerHTML = W_speed

          })
        }
        else{
          alert("Please type city name")
        }
      })

