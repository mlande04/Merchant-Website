// Add to Cart function
function addCart()
{
	while(onclick)
	{
		document.getElementById("cartItem").value += document.getElementById("price").value;
	}
}

// Number of items to add to cart
function addVol()
{
	// find # of inputs
	var inputs = document.getElementById('form1');
	
	// search for valid matches
	for (var i = 0; i < inputs.length; i++)
	{
		// find input value
		var date = document.forms[3].elements[i].value;
		
	}	
}

// Total cost of items in cart
function total() 
{
    var x = document.forms;
	var numItems = 0;
    var costItems = 0;
	var totalCost = 0;
	
    for (var i = 0; i < 10; i++) 
	{
		numItems = numItems + x.elements[i].value;
		costItems = numItems * x.elements[i].nextElementSibling;
    }
    document.getElementById("cart").innerHTML = totalCost;
}

// Form validation
function formValidation()
{
	var nameF = document.form1.name1;
	var nameL = document.form1.name2;
	var streetAdd = document.form1.street;
	var cityOf = document.form1.city;
	var stateOf = document.form1.state;
	var countryOf = document.form1.country;
	var zipOf = document.form1.zip;
	var emailAdd = document.form1.email;
	var yesAdd = document.form1.yes;
	var noAdd = document.form1.no; 
	
	if(validFName(nameF,1,20))
	{
		if(validLName(nameL,1,20))
		{
			if(validStreet(streetAdd))
			{
				if(validCity(cityOf))
				{ 
					if(validState(stateOf)
					{
						if(validZip(zipOf))
						{
							if(countryselect(countryOf))
							{
								if(validEmail(emailAdd))
								{
									if(signUp(yesAdd,noAdd))
									{
									}
								} 
							}
						} 
					}
				}
			}
		}
	}

	return false;
}

// Validate name entrys
function validFName()
{
	// find # of inputs
	var inputs = document.getElementById('pi1');
	
	// search for valid matches
	for (var i = 0; i < inputs.length; i++)
	{
		// find input value
		var name1 = document.forms[1].elements[i].value;
		
		// hide next element
		var letters = /^[a-zA-Z]+$/;
		if(name1.search(letters) >= 0)
		{
			document.getElementById("pi1").nextElementSibling.style.visibility = "hidden";
			return true;
		}
		else
		{
			document.getElementById("pi1").nextElementSibling.style.visibility = "visible";
			nameF.focus();
			return false;
		}
	}
}

function validLName(nameL)
{
	var letters = /^[a-zA-Z]+$/;
	
	if(nameL.value.match(letters))
	{
		document.getElementById("item2").nextElementSibling.style.visibility = "hidden";
		return true;
	}
	else
	{
		document.getElementById("item2").nextElementSibling.style.visibility = "visible";
		nameL.focus();
		return false;
	}
}

// Validate Street Address
function validStreet(streetAdd)
{
	var letters = /^[0-9a-zA-Z]+$/;
	
	if(streetAdd.value.match(letters))
	{
		document.getElementById("item3").nextElementSibling.style.visibility = "hidden";
		return true;
	}
	else
	{
		document.getElementById("item3").nextElementSibling.style.visibility = "visible";
		streetAdd.focus();
		return false;
	}
}

// Validate City Input
function validCity(cityOf)
{
	var letters = /^[a-zA-Z]+$/;
	
	if(cityOf.value.match(letters))
	{
		document.getElementById("item2").nextElementSibling.style.visibility = "hidden";
		return true;
	}
	else
	{
		document.getElementById("item2").nextElementSibling.style.visibility = "visible";
		cityOf.focus();
		return false;
	}
}

// Validate State Input
var states = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','
					MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI',
					'SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','AS','GU','MH','FM','MP','PW','PR','VI']
					
function validState(stateOf)
{
	//var letters = /^[a-zA-Z]{2}$/;
	
	if(stateOf.value.match(states))
	{
		document.getElementById("item4").nextElementSibling.style.visibility = "hidden";
		return true;
	}
	else
	{
		document.getElementById("item4").nextElementSibling.style.visibility = "visible";
		stateOf.focus();
		return false;
	}
}

// Validate Zip Code
function validZip(zipOf)
{ 
	var numbers = /^[0-9]+$/;

	(zipOf.value.match(numbers))
	{
		document.getElementById("item5").nextElementSibling.style.visibility = "hidden";
		return true;
	}
	else
	{
		document.getElementById("item5").nextElementSibling.style.visibility = "visible";
		zipOf.focus();
		return false;
	}
}

// Validate country dropbox
function countryselect(countryOf)
{
	if(countryOf.value == "Default")
	{
		countryOf.focus();
		return false;
	}
	else
	{
		return true;
	}
}

// Validate Email Address
function validEmail(emailAdd)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(emailAdd.value.match(mailformat))
	{
		document.getElementById("item6").nextElementSibling.style.visibility = "hidden";
		return true;
	}
	else
	{
		document.getElementById("item6").nextElementSibling.style.visibility = "visible";
		emailAdd.focus();
		return false;
	}
}

// Select Yes or No Box for Email
function signUp(yesAdd,noAdd)
{
	x=0;

	if(yesAdd.checked) 
	{
		x++;
	} 
	if(noAdd.checked)
	{
		x++; 
	}
	if(x==0)
	{
		yesAdd.focus();
		return false;
	}
	else
	{
		window.location.reload()
		return true;
	}
}

// Validate Phone Number
function validPhone(phoneNum)
{
	// find # of inputs
	var inputs = document.getElementById('form3');
	
	// search for valid matches
	for (var i = 0; i < inputs.length; i++)
	{
		// find input value
		var phone = document.forms[2].elements[i].value;
		
		// for error checking
		//console.log(inputs[i].value);
		
		// hide next element
		if (phone.search(/^[0-9]{3}\s?[0-9]{3}\s?[0-9]{4}$/) >= 0) {
			document.forms[2].elements[i].nextElementSibling.style.visibility = "hidden";
		} else {
				document.forms[2].elements[i].nextElementSibling.style.visibility = "visible";
		}
	}
}


// Validate Credit Card Information
function validCCN()
{
	// find # of inputs
	var inputs = document.getElementById('form2');
	
	// search for valid matches
	for (var i = 0; i < inputs.length; i++)
	{
		// find input value
		var ccn = document.forms[1].elements[i].value;
		
		// hide next element
		if (ccn.search(/^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/) >= 0) {
			document.forms[1].elements[i].nextElementSibling.style.visibility = "hidden";
		} else {
				document.forms[1].elements[i].nextElementSibling.style.visibility = "visible";
		}
	}
}

function validExp()
{
	// # of inputs
	var inputs = document.getElementById('form3');
	
	// search for valid matches
	for (var i = 0; i < inputs.length; i++)
	{
		var exp = document.forms[2].elements[i].value;
		
		//for error checking 
		console.log(inputs[i].value;
		
		// search for valid CCN & show next element
		if (exp.search(/^[0-9]{2}\s?[0-9]{2}$/) >= 0) {
				document.forms[2].elements[i].nextElementSibling.style.visibility = "hidden";
			}
		else {
			document.forms[2].elements[i].nextElementSibling.style.visibility = "visible";
		}
	}
}

function validCCV()
{
	// # of inputs
	var inputs = document.getElementById('form4');
	
	// search for valid matches
	for (var i = 0; i < inputs.length; i++)
	{
		var ccv = document.forms[3].elements[i].value;
		
		//for error checking 
		console.log(inputs[i].value;
		
		// search for valid CCN & show next element
		if (ccv.search(/^[0-9]{3}$/) >= 0) {
				document.forms[3].elements[i].nextElementSibling.style.visibility = "hidden";
			}
		else {
			document.forms[3].elements[i].nextElementSibling.style.visibility = "visible";
		}
	}
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function payButton() 
{
    document.getElementById("myPay").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) 
{
  if (!event.target.matches('.dropBtn')) 
  {

    var dropdowns = document.getElementsByClassName("btnType");
    var i;
    for (i = 0; i < dropdowns.length; i++) 
	{
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) 
	  {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Submit form
document.getElementById("endForm").onsubmit = function() {submitForm()};

function submitForm() {
    alert("The form was submitted");
}

// Reset form
function resetForm() {
	var inForm = document.forms.value;
	inForm = "";
    console.log("The form was reset.");
}
