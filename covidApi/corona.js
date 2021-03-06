        // 1. We want the ability for the user to choose statistics between continents.
        // Problem:
        // We have a problem that our covid api does not give us the ability to choose
        // statistics between continent countries. It only gives you statistics of the whole
        // world.
        // Solution
        // The solution is to call our countries api and choose from their the specific
        // continent you want the list of countries from and compare those countries to
        // our covid 19 countries.
        // 2. The statistics we want from each country is the following:
        // - Confirmed Cases
        // - Number of Deaths
        // - Number of recovered
        // - Number of critical condition
        // We want the ability to choose what statistics we want to see and display them
        // on a graph.
        const asiaBtn = document.querySelector("#asia");
        const africaBtn = document.querySelector("#africa");
        const euroBtn = document.querySelector("#europe");
        const americaBtn = document.querySelector(".america");
        const oceaniaBtn = document.querySelector("#oceania");
        const otherBtn = document.querySelector("#other");

 

        const urlCountries =
        `https://api.codetabs.com/v1/proxy?quest=`+
        // `https://cors-anywhere.herokuapp.com/` +
        `https://restcountries.herokuapp.com/api/v1`;

        const covidMap = [];
        const data = [];
        const countries = async () => {
            const countriesResponse = await fetch(urlCountries);
            const countriesJson = await countriesResponse.json();
            console.log(countriesJson);
            countriesJson.forEach((element) => {
                if (!covidMap[element.cca2]) {
                    return;
                }

                if (!data[element.region]) {
                    data[element.region] = [];
                    data[element.region].push({
                        name: element.name.common,
                        countryCovidData: covidMap[element.cca2],
                    });
                }
                else {
                    data[element.region].push({
                        name: element.name.common,
                        countryCovidData: covidMap[element.cca2],
                    });
                }
            });

            

            
            //-------Region button click-------\\

        asiaBtn.addEventListener("click", () => {
            countriesRender(data.Asia);  // region asia button to countries.
            const countriesArr = [];
            const asiaCountries = data.Asia.forEach((element)=>{
                //console.log(element.name.common);
                //return country.name.common;
                countriesArr.push(element.name.common);
            })
            graphRender(countriesArr);
        });

        africaBtn.addEventListener("click", () => {
            countriesRender(data.Africa);  // region asia button to countries.
            const countriesArr = [];
            const countries = data.Africa.forEach((element)=>{
                countriesArr.push(element.name.common);
            })
            graphRender(countriesArr);
        });

        euroBtn.addEventListener("click", () => {
            countriesRender(data.Europe);  // region asia button to countries.
            const countriesArr = [];
            const countries = data.Europe.forEach((element)=>{
                countriesArr.push(element.name.common);
            })
            graphRender(countriesArr);
        });

        americaBtn.addEventListener("click", () => {
            countriesRender(data.Americas);  // region asia button to countries.
            const countriesArr = [];
            const countries = data.Americas.forEach((element)=>{
                countriesArr.push(element.name.common);
            })
            graphRender(countriesArr);
        });

        oceaniaBtn.addEventListener("click", () => {
            countriesRender(data.Oceania);  // region asia button to countries.
            const countriesArr = [];
            const countries = data.Oceania.forEach((element)=>{
                countriesArr.push(element.name.common);
            })
            graphRender(countriesArr);
        });

        otherBtn.addEventListener("click", () => {
            countriesRender(others);  // region asia button to countries.
            const countriesArr = [];
            const countries = data.Africa.forEach((element)=>{
                countriesArr.push(element.name.common);
            })
            graphRender(countriesArr);
        });
            const others = data[""];
            //console.log(others);
            console.log(data);
        };

        //countries();
         // ---------countriesRender----------\\

        const countriesRender = (continent) => {
            document.querySelector("#countriesContainer").innerHTML = "";
            // countries array from region.
            continent.forEach((country)=> {
                //console.log(country.name.common);
                const medina = document.createElement("div");
                medina.textContent = country.name.common;
                medina.style.marginLeft = "1%";
                document.querySelector("#countriesContainer").appendChild(medina);
            })  
            

        };
        // ---------coronaData----------\\

        const coronaData = [];
        
        const urlCorona = `https://corona-api.com/countries`;

        const corona = async () => {
            const coronaResponse = await fetch(urlCorona);
            const coronaJson = await coronaResponse.json();
            //console.log(coronaJson);
            //coronaData.push(coronaJson);
            coronaJson.data.forEach((element) => {
                covidMap[element.code] = {  // covidMap = stats
                    //countryName: element.name,
                    countryCovidUpdate: element.updated_at,
                    countryCovidData: element.latest_data,
                }
            })

            //------\\

            // coronaData[0].data.forEach((element) => {
            //     covidMap.push({
            //         countryName: element.name,
            //         countryCode: element.code,
            //         countryCovidData: element.latest_data,
            //     })
            // })
            
    }

    corona();
    //console.log(coronaData);
    console.log(covidMap);
    countries();
 

         // --------graphRender-----------\\

        const graphRender = (countries) => {
        const ctx = document.getElementById("myChart").getContext("2d");
        const chart = new Chart(ctx, {
        type: "line",
        data: {
        labels: [], // empty array -> countries
        datasets: [
            {
            label: "covid cases",
            backgroundColor: "rgb(100, 99, 132)",
            borderColor: "rgb(250, 5, 50)",
            data: [],
            },
        ],
        },
        options: {},
    });

    }


    //-----Getting Stats By Region ------\\
        const box = document.querySelector(".america");
        box.addEventListener("click", (element) => {
        getStatsByRegion(element.target.textContent, 'deaths');
        });

        const getStatsByRegion = (region,value) => {
            console.log(region);
            console.log(data);
            const labels = [];
            const parameters = [];
            data[region].forEach((x)=> {
                labels.push(x.name);
                //console.log(x.name, " ", x.statsArr);
                parameters.push(x.statsArr.countryCovidData[value]);
                console.log(x.statsArr.countryCovidData[value]);
                
            });
            chart.data.labels = labels;
            chat.data.datasets.data = parameters;
            chart.update();
        }




        // - Confirmed Cases
        // - Number of Deaths
        // - Number of recovered
        // - Number of critical condition

                //130
        //     document.querySelector("button").addEventListener("click", () => { 
        //         const data = document.createElement("h2");
        //         data.textContent = `${(coronaJson.data[0].name)}`;
        //         document.querySelector(".data").appendChild(data);
        //  })


               //---status buttons ---\\
        // const deathsBtn = document.querySelector("#deaths");
        // deathsBtn.addEventListener("click", coronaDataClick);
        // const confirmedBtn = document.querySelector("#confirmed");
        // confirmedBtn.addEventListener("click", coronaDataClick);
        // const recoveredBtn = document.querySelector("#recovered");
        // recoveredBtn.addEventListener("click", coronaDataClick);
        // const criticalBtn = document.querySelector("#critical");
        // criticalBtn.addEventListener("click", coronaDataClick);

        //-= countries regions original--\\\

        // const countries = async () => {
        //     const countriesResponse = await fetch(urlCountries);
        //     const countriesJson = await countriesResponse.json();
        //     console.log(countriesJson);
        //     countriesJson.forEach((element) => {
        //         if(!data[element.region]){  // data = world
        //             data[element.region] = [element]; // making new region if isn't exist.
        //         }else {
        //             data[element.region].push(element);
        //         }
        //     });


               //----Combining the two API's----\\
        // const updateChartByClick= (element) => {
        //     const dataByRegion=[]; // Matching the data => all names and relative covid status
        //     const dataNames=[]; // All countries names
        //     const dataData=[];  // COVID DATA

        //     const regionClick = element.currentTarget.textContent; // Usage of the button region text to fid the covid data
        //     data.forEach((element) => {
        //         dataByRegion.push({
        //             name: element.name,
        //             ID: element.code,
        //         })
        //     })

            
        // }

        