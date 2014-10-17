var paused_count =0;
var resumed_count = 0;
var launched_count = 0;


    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
		
		itemList();
		displayList();
		chocBar();
		barsTest();
		
		

    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
	
	// My Code ---------------------------------------------------------
	//
	function itemList() {
		var key = "phone";
		var value = "black";
		window.localStorage.setItem( key, value );
		
		var key = "keys";
		var value = "shiny";
		window.localStorage.setItem( key, value );
		
		var key = "wallet";
		var value = "leather";
		window.localStorage.setItem( key, value );
	
	}
	
	function displayList() {
		window.localStorage.getItem("phone");
		var value = window.localStorage.getItem("phone");
		$("#launched").text("Hello " +  value);
	}

	function chocBar() {
		var chocolate = 
		{
				"Name": "Mars",
				"Weight": "51g",
				"Nutrition per 100g": 
				{
						"Energy(KJ)": "1888",
						"Protein (g)": "4.3",
						"Carbohydrate (g)": "68.9"
						
				}
		}
	var chocString = JSON.stringify(chocolate);
	window.localStorage.setItem("Bar", chocString);
	}
	
	
	function barsTest() {
	var bars = [
			{"Name": "M&Ms", "Energy":{
				"KJ": "1888"
				}
			},
			{"Name": "Bounty", "Weight": "57g"}
		];
		
		console.log(bars[0].Name + " " + bars[0].Weight.Energy);
	
	}
	
	


	
	
	