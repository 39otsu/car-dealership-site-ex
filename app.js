var cars = [
    {
        make : "Acura",
        cars : [
            {
                year : "2001",
                models : [
                    "Integra",
                    "NSX"
                ]
            },
            {
                year : "2004",
                models : [
                    "TSX",
                    "MDX",
                    "RSX Type-S"
                ]
            },
            {
                year : "2016",
                models : [
                    "RDX"
                ] 
            },
            {
                year : "2017",
                models : [
                    "ILX"
                ]
            }
        ]
    },
    {
        make : "Audi",
        cars : [
            {
                year : "2009",
                models : [
                    "A3"
                ]
            }
        ]
    },
    {
        make : "Cadillac",
        cars : [
            {
                year : "2009",
                models : [
                    "Escalade"
                ]
            },
            {
                year : "2010",
                models : [
                    "STS",
                    "DTS",
                ]
            }
        ]
    },
    {
        make : "Dodge",
        cars : [
            {
                year : "2016",
                models : [
                    "Challenger"
                ]
            },
            {
                year : "2017",
                models : [
                    "Challenger"
                ]
            },
            {
                year : "2019",
                models : [
                    "Challenger"
                ]
            },
            {
                year : "2020",
                models : [
                    "Challenger",
                    "Charger"
                ]
            },
            {
                year : "2021",
                models : [
                    "Challenger"
                ]
            }
        ]
    },
    {
        make : "Ford",
        cars : [
            {
                year : "2014",
                models : [
                    "Mustang"
                ]
            }
        ]
    },
    {
        make : "Honda",
        cars : [
            {
                year : "2015",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                    "Fit"
                ]
            },
            {
                year : "2016",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                    "Fit"
                ]
            },
            {
                year : "2017",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                    "Fit"
                ]
            },
            {
                year : "2018",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                    "Fit"
                ]
            },
            {
                year : "2019",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                    "Fit"
                ]
            },
            {
                year : "2020",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                    "Fit"
                ]
            },
            {
                year : "2021",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                ]
            },
            {
                year : "2022",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                ]
            },
            {
                year : "2022",
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                    "Fit"
                ]
            },
            {
                year : (new Date().getFullYear() + 1).toString(),
                models : [
                    "Civic",
                    "CRV",
                    "Accord",
                    "HRV",
                    "Pilot",
                    "Passport",
                    "Odyssey",
                    "Ridgeline"
                ]
            }
        ]
    },
    {
        make : "Scion",
        cars : [
            {
                year : "2014",
                models : [
                    "FRS"
                ]
            },
            {
                year : "2015",
                models : [
                    "FRS"
                ]
            }
        ]
    },
    {
        make : "Subaru",
        cars : [
            {
                year: "2013",
                models: [
                    "Forester"
                ]
            },
            {
                year : "2014",
                models : [
                    "Impreza WRX"
                ]
            },
            {
                year : "2018",
                models : [
                    "WRX",
                    "WRX STi"
                ]
            }
        ]
    },
    {
        make : "Toyota",
        cars : [
            {
                year: "2015",
                models: [
                    "RAV4",
                    "Corolla",
                    "Prius",
                    "Camry"
                ]
            },
            {
                year : "2016",
                models : [
                    "Tacoma",
                ]
            },
            {
                year : "2019",
                models : [
                    "RAV4",
                    "86"
                ]
            }
        ]
    },
    {
        make : "Tesla",
        cars : [
            {
                year: "2020",
                models: [
                    "Model 3",
                    "Model Y"
                ]
            },
            {
                year: "2021",
                models: [
                    "Model S"
                ]
            },
        ]
    }
]



var arrOptions = [];
var e = document.getElementById("stageOne");
var two = document.getElementById("stageTwo")

e.addEventListener("change", function() {

    arrOptions = [];
    if (e.selectedIndex == 0) {
        document.getElementById("stageTwo").disabled = true;
        document.getElementById("stageThree").disabled = true;
        document.getElementById("stageFour").disabled = true;
        document.getElementById("searchbtn").disabled = true;

        arrOptions.push("<option selected>Any Make</option>");
        document.getElementById("stageTwo").innerHTML = arrOptions.join();

        arrOptions = [];
        arrOptions.push("<option selected>Any Year</option>");
        document.getElementById("stageThree").innerHTML = arrOptions.join();

        arrOptions = [];
        arrOptions.push("<option selected>Any Model</option>");
        document.getElementById("stageFour").innerHTML = arrOptions.join();
    }else if (e.selectedIndex == 1) {
        document.getElementById("stageTwo").disabled = true;
        document.getElementById("stageThree").disabled = true;
        document.getElementById("stageFour").disabled = false;

        arrOptions.push("<option selected>Honda</option>");
        two.innerHTML = arrOptions.join();

        arrOptions = [];
        arrOptions.push("<option selected>" + (new Date().getFullYear() + 1).toString() + "</option>");
        document.getElementById("stageThree").innerHTML = arrOptions.join();
        
        arrOptions = [];
        arrOptions.push("<option selected>Any Model</option>");
        
        for (var i = 0; i < cars.length; i++) {
            
            if (cars[i].make == "Honda") {
                
                for (var u = 0; u < cars[i].cars.length; u++) {

                    if (cars[i].cars[u].year == (new Date().getFullYear() + 1).toString()) 
                    {
                        
                        for (var v = 0; v < cars[i].cars[u].models.length; v++) {
                            arrOptions.push("<option value='" + v + "'>" + cars[i].cars[u].models[v] + "</option>")
                        }

                    }
                }
            }
        }
        
        document.getElementById("stageFour").innerHTML = arrOptions.join();

        arrOptions = [];
        arrOptions.push("<option selected>Honda</option>");
    } else {
        document.getElementById("stageTwo").disabled = false;

        arrOptions.push("<option selected>Any Year</option>");
        document.getElementById("stageThree").innerHTML = arrOptions.join();

        arrOptions = [];
        arrOptions.push("<option selected>Any Model</option>");
        document.getElementById("stageFour").innerHTML = arrOptions.join();
        document.getElementById("stageFour").disabled = true;

        for (var i = 0; i < cars.length; i++) {
            var str = "<option value='" + i + "'>" + cars[i].make + "</option>";
            arrOptions.push(str);
        }
        
    }

}) 

two.addEventListener("change", function() {

    arrOptions = [];

    if (two.selectedIndex > 0) {

        document.getElementById("stageThree").disabled = false;

    }else {
        arrOptions.push("<option selected>Any Year</option>");
        document.getElementById("stageThree").innerHTML = arrOptions.join();

        arrOptions = [];
        arrOptions.push("<option selected>Any Model</option>");
        document.getElementById("stageFour").innerHTML = arrOptions.join();

        document.getElementById("stageThree").disabled = true;

    }

})

var four = document.getElementById("stageFour")
four.addEventListener("change", function() {
    if (four.selectedIndex > 0) {
        document.getElementById("searchbtn").disabled = false;
    }else {
        document.getElementById("searchbtn").disabled = true;
    }
})

var sbar = document.getElementById("searchbar")
sbar.placeholder = "Know what you want?";
sbar.addEventListener("click", function() {
    sbar.placeholder = "Not a real searchbar";
})
