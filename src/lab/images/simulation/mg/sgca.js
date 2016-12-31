//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;



function navNext()
{

for (temp = 0; temp <= 5 ; temp++) 
{ 
document.getElementById('canvas'+temp).style.visibility="hidden";
}

simsubscreennum+=1;
document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
document.getElementById('nextButton').style.visibility="hidden";
magic();
}


//Move pointing finger with mouse
/*$(document).mousemove(function(e)
{

if(simsubscreennum==1 && mpointer==0) 
{
if(e.pageX<800 && e.pageY<600)  
{
document.getElementById('onarm').style.visibility="visible";

 $("#onarm").css({left:e.pageX, top:e.pageY});
}


}

else if(simsubscreennum!=1)
{
	document.getElementById('onarm').style.visibility="hidden";
}


});*/
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
if (document.getElementById('arrow1').style.visibility=="hidden")
document.getElementById('arrow1').style.visibility="visible";
else
document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}

//-------------------------------------function magic starts here----------------------------------------------------

function magic()
{
	
	if (simsubscreennum==1)
	{
		refresh1();
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="";
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('a2').onclick=function() { step1(); };
	}
	
	else if (simsubscreennum==2)
	{
		refresh1();
		repeat+=1;
		if(flag==1)
		{
				 document.getElementById('canvas6').style.visibility="hidden";
                 				 document.getElementById('flask').style.visibility="visible";
				 document.getElementById('nob').style.visibility="visible";

	    
			           
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;

			document.getElementById('nextButton').style.visibility="hidden";

		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob').onclick=function() { step2(); };
	}
	else
				{
		document.getElementById('a3').style.visibility="hidden";
	document.getElementById('a4').style.visibility="hidden";
			document.getElementById('nextButton').style.visibility="hidden";

		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		
		
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob').onclick=function() { step2(); };
	}
		
		
	}
	else if (simsubscreennum==3)
	{
				refresh1();

					 document.getElementById('flask3').style.visibility="visible";
				 document.getElementById('nob3-1').style.visibility="visible";
		
	document.getElementById('cem3-1').style.visibility="visible";
	document.getElementById('a5').style.visibility="hidden";
	document.getElementById('a6').style.visibility="hidden";
	document.getElementById('cem2-3').style.visibility="hidden";
	    
			document.getElementById('nextButton').style.visibility="hidden";

		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob3-1').onclick=function() { step3(); };
		
		
		
		
		
		
	}
	else if (simsubscreennum==4)
	{
				refresh1();

		 document.getElementById('flask4').style.visibility="visible";
				 document.getElementById('nob4-1').style.visibility="visible";
document.getElementById('a11').style.visibility="hidden";
	document.getElementById('a12').style.visibility="hidden";
document.getElementById('k1').style.visibility="hidden";
	document.getElementById('k2').style.visibility="hidden";	
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob4-1').onclick=function() { step4(); };
	}
	else if (simsubscreennum==5)
	{
				refresh1();

		 document.getElementById('flask5').style.visibility="visible";
				 document.getElementById('nob5-1').style.visibility="visible";
document.getElementById('a7').style.visibility="hidden";
	document.getElementById('a8').style.visibility="hidden";
document.getElementById('k3').style.visibility="hidden";
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 190px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('nob5-1').onclick=function() { step5(); };
				
	}
	else if (simsubscreennum==6)
	{
				refresh1();

		document.getElementById('k5').style.visibility="hidden";
	document.getElementById('a9').style.visibility="hidden";
	document.getElementById('a10').style.visibility="hidden";
	
		document.getElementById('can6-1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)="+values[lnt][0] +"gm";
		document.getElementById('can6-2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = "+values[lnt][1] +"gm " ;
		document.getElementById('can6-3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =" +values[lnt][2]  +"gm";
		document.getElementById('can6-4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = "+values[lnt][3]  +"gm" ;
		document.getElementById('can6-5').innerHTML="Weight of flask+water (W<sub>5</sub>) =" +values[lnt][4]  +"gm";
		document.getElementById('can6-6').innerHTML=" Specific gravity of kerosene =" +values[lnt][6];
		document.getElementById('can6-7').innerHTML="Specific gravity of cement ="+values[lnt][7];
		lnt+=1;
		if(repeat==5)
		{
			        	document.getElementById('can6-8').style.visibility="visible";

					document.getElementById('can6-8').innerHTML="Average Specific gravity of cement = 3.14";

			stepstop();
			
		}
		
		else if(repeat < 5 && repeat>0)
		{
			flag=1;
			simsubscreennum=1;
					document.getElementById('nextButton').style.visibility="visible";

            /*document.getElementById('k5').style.visibility="hidden";
	document.getElementById('a9').style.visibility="hidden";
	document.getElementById('a10').style.visibility="hidden";
document.getElementById('k5').style.visibility="hidden";
	document.getElementById('a9').style.visibility="hidden";
	document.getElementById('a10').style.visibility="hidden";
	document.getElementById('k5').style.visibility="hidden";
	document.getElementById('a9').style.visibility="hidden";
	document.getElementById('a10').style.visibility="hidden";
document.getElementById('k5').style.visibility="hidden";
	document.getElementById('a9').style.visibility="hidden";
	document.getElementById('a10').style.visibility="hidden";*/
		}
			
		
		
	}

	function step1()
{
	myStopFunction();
	document.getElementById('a1').style.visibility="hidden";
	document.getElementById('a2').style.visibility="hidden";
	setTimeout(function(){
	document.getElementById('a3').style.visibility="visible";
	document.getElementById('a4').style.visibility="visible";
	}, 500);
	setTimeout(function()
	{
		setTimeout(function()
		{
				document.getElementById('nextButton').style.visibility="visible";
         },500);
		document.getElementById('can1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)="+values[lnt][0]+"gm";


	}, 1200);
}


	function step2()
{
	myStopFunction();
	document.getElementById('nob').style.visibility="hidden";
	document.getElementById('nob1').style.visibility="visible";
	setTimeout(function(){
   document.getElementById('hand').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	}, 1000);
	
	setTimeout(function()
	{
                document.getElementById("nob1").onclick=""; 
				document.getElementById('hand').onclick=function() { step21(); };

	}, 1600);
}


function step21()
{
	myStopFunction();
	
	document.getElementById('hand').style.transformOrigin = "100% 80%";
	document.getElementById('hand').style.animation = "valveturn-4 1.5s forwards ";
			
			setTimeout(function()
			{
			document.getElementById('cem2-4').style.visibility="visible";

		document.getElementById('cem2-1').style.visibility="visible";
	document.getElementById('cem2-1').style.animation = "water-5 1.5s 1 reverse";
	document.getElementById('cem2-2').style.visibility="visible";
	document.getElementById('cem2-2').style.animation = "water-5 1.8s 1 forwards";
				

			},500);
   
	setTimeout(function()
	{
		document.getElementById('cem2-4').style.visibility="hidden";
					document.getElementById('cem2-1').style.visibility="hidden";
        document.getElementById('hand').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
   					
    document.getElementById('nob1').onclick=function() { step22(); };

       }, 1800);
}}
	
function step22()
{
myStopFunction();
				document.getElementById('nob1').style.visibility="hidden";
			document.getElementById('nob2').style.visibility="visible";
						document.getElementById('cflask').style.visibility="visible";

			myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		setTimeout(function()
		{
            					document.getElementById('cflask').onclick=function() { step23(); };

 }, 1600);
}
 
function step23()
{
	myStopFunction();
	document.getElementById('flask').style.visibility="hidden";
		document.getElementById('cflask').style.visibility="hidden";

	document.getElementById('nob2').style.visibility="hidden";
	document.getElementById('cem2-2').style.visibility="hidden";
	setTimeout(function(){
	document.getElementById('a5').style.visibility="visible";
	document.getElementById('a6').style.visibility="visible";
	document.getElementById('cem2-3').style.visibility="visible";
	}, 500);
	setTimeout(function()
	{
		setTimeout(function()
		{
				document.getElementById('nextButton').style.visibility="visible";
         },500);
      document.getElementById('can2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = "+values[lnt][1]+"gm";

	}, 1200);
}



function step3()
{
	myStopFunction();
	document.getElementById('nob3-1').style.visibility="hidden";
	document.getElementById('nob3-2').style.visibility="visible";
	setTimeout(function(){
   document.getElementById('hand3').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	}, 1000);
	
	setTimeout(function()
	{
		                        document.getElementById("nob3-2").onclick=""; 

				document.getElementById('hand3').onclick=function() { step31(); };

	}, 1600);
}


function step31()
{
	myStopFunction();
	
	document.getElementById('hand3').style.transformOrigin = "100% 80%";
	document.getElementById('hand3').style.animation = "valveturn-4 1.5s forwards ";
			
			setTimeout(function()
			{
							document.getElementById('kero3-4').style.visibility="visible";

		document.getElementById('ker3-1').style.visibility="visible";
	document.getElementById('ker3-1').style.animation = "water-5 1.5s 1 reverse";
	document.getElementById('ker3-2').style.visibility="visible";
	document.getElementById('ker3-2').style.animation = "water-5 4.5s 1 forwards";
			},250);

	setTimeout(function()
	{
					document.getElementById('kero3-4').style.visibility="hidden";

					document.getElementById('ker3-1').style.visibility="hidden";
					document.getElementById('ker3-2').style.visibility="visible";
					//document.getElementById('kc3-1').style.visibility="visible";

										
        document.getElementById('hand3').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById('nob3-2').onclick=function() { step32(); };

       }, 1600);
}

	
function step32()
{
myStopFunction();
				document.getElementById('nob3-2').style.visibility="hidden";
			document.getElementById('nob3-3').style.visibility="visible";
						document.getElementById('cflask3').style.visibility="visible";

			myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		setTimeout(function()
		{
            					document.getElementById('cflask3').onclick=function() { step33(); };

 }, 1600);
}
 
function step33()
{
	myStopFunction();
		document.getElementById('cflask3').style.visibility="hidden";

	document.getElementById('flask3').style.visibility="hidden";
	document.getElementById('nob3-3').style.visibility="hidden";
	document.getElementById('ker3-2').style.visibility="hidden";
		document.getElementById('cem3-1').style.visibility="hidden";

	setTimeout(function(){
		document.getElementById('k1').style.visibility="visible";
	document.getElementById('k2').style.visibility="visible";
	document.getElementById('a11').style.visibility="visible";
	document.getElementById('a12').style.visibility="visible";
		}, 500);
	setTimeout(function()
	{
		setTimeout(function()
		{
				document.getElementById('nextButton').style.visibility="visible";
         },500);
		document.getElementById('can3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) = "+values[lnt][2]  +"gm";

	}, 1200);
}

	function step4()
{
	myStopFunction();
	document.getElementById('nob4-1').style.visibility="hidden";
	document.getElementById('nob4-2').style.visibility="visible";
	setTimeout(function(){
   document.getElementById('hand4').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	}, 1000);
	
	setTimeout(function()
	{
		                        document.getElementById("nob4-2").onclick=""; 

				document.getElementById('hand4').onclick=function() { step41(); };

	}, 1600);
}


function step41()
{
	myStopFunction();
	
	document.getElementById('hand4').style.transformOrigin = "100% 80%";
	document.getElementById('hand4').style.animation = "valveturn-4 1.5s forwards ";
			
			setTimeout(function()
			{
			document.getElementById('kero4-3').style.visibility="visible";

		document.getElementById('kero4-1').style.visibility="visible";
	document.getElementById('kero4-1').style.animation = "water-5 1.5s 1 reverse";
	document.getElementById('kero4-2').style.visibility="visible";
	document.getElementById('kero4-2').style.animation = "water-5 1.8s 1 forwards";
				

			},500);
   
	setTimeout(function()
	{
		document.getElementById('kero4-3').style.visibility="hidden";
					document.getElementById('kero4-1').style.visibility="hidden";
        document.getElementById('hand4').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById('nob4-2').onclick=function() { step42(); };

       }, 1800);
}
	
function step42()
{
myStopFunction();
				document.getElementById('nob4-2').style.visibility="hidden";
			document.getElementById('nob4-3').style.visibility="visible";
									document.getElementById('cflask4').style.visibility="visible";

			myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		setTimeout(function()
		{
            					document.getElementById('cflask4').onclick=function() { step43(); };

 }, 1600);
}
 
function step43()
{
	myStopFunction();
	document.getElementById('flask4').style.visibility="hidden";
		document.getElementById('cflask4').style.visibility="hidden";

	document.getElementById('nob4-3').style.visibility="hidden";
	document.getElementById('kero4-2').style.visibility="hidden";
	setTimeout(function(){
		document.getElementById('k3').style.visibility="visible";
	document.getElementById('a7').style.visibility="visible";
	document.getElementById('a8').style.visibility="visible";
	
	}, 500);
	setTimeout(function()
	{
		setTimeout(function()
		{
				document.getElementById('nextButton').style.visibility="visible";
         },500);
		document.getElementById('can4').innerHTML="Weight of flask + kerosene(W<sub>4</sub>) = "+values[lnt][3] +"gm";

	}, 1200);
}

function step5()
{
	myStopFunction();
	document.getElementById('nob5-1').style.visibility="hidden";
	document.getElementById('nob5-2').style.visibility="visible";
	setTimeout(function(){
   document.getElementById('hand5').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 420px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	}, 1000);
	
	setTimeout(function()
	{
		                        document.getElementById("nob1").onclick=""; 

				document.getElementById('hand5').onclick=function() { step51(); };

	}, 1600);
}


function step51()
{
	myStopFunction();
	
	document.getElementById('hand5').style.transformOrigin = "100% 80%";
	document.getElementById('hand5').style.animation = "valveturn-4 1.5s forwards ";
			
			setTimeout(function()
			{
			document.getElementById('wtr2').style.visibility="visible";

		//document.getElementById('wtr3').style.visibility="visible";
	//document.getElementById('wtr3').style.animation = "water-5 1.5s 1 reverse";
	document.getElementById('wtr').style.visibility="visible";
	document.getElementById('wtr').style.animation = "water-5 1.8s 1 forwards";
				

			},500);
   
	setTimeout(function()
	{
		document.getElementById('wtr2').style.visibility="hidden";
					document.getElementById('wtr3').style.visibility="hidden";
        document.getElementById('hand5').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 150px; top: 190px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById('nob5-2').onclick=function() { step52(); };

       }, 1800);
}
	
function step52()
{
myStopFunction();
				document.getElementById('nob5-2').style.visibility="hidden";
			document.getElementById('nob5-3').style.visibility="visible";
						document.getElementById('cflask5').style.visibility="visible";

			myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 190px; top: 300px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		setTimeout(function()
		{
            					document.getElementById('cflask5').onclick=function() { step53(); };

 }, 1600);
}
 
function step53()
{
	myStopFunction();
	document.getElementById('flask5').style.visibility="hidden";
		document.getElementById('cflask5').style.visibility="hidden";

	document.getElementById('nob5-3').style.visibility="hidden";
	document.getElementById('wtr').style.visibility="hidden";
	setTimeout(function(){
		document.getElementById('k5').style.visibility="visible";
	document.getElementById('a9').style.visibility="visible";
	document.getElementById('a10').style.visibility="visible";
	
	}, 500);
	setTimeout(function()
	{
		setTimeout(function()
		{
				document.getElementById('nextButton').style.visibility="visible";
         },500);
		document.getElementById('can5').innerHTML="Weight of flask+water (W<sub>5</sub>)= "+values[lnt][4]  +"gm";

	}, 1200);
}
function refresh1()
{
	document.getElementById('hand').style.transformOrigin = "";
	document.getElementById('hand').style.animation = "";
	document.getElementById('hand3').style.transformOrigin = "";
	document.getElementById('hand3').style.animation = "";
	document.getElementById('hand4').style.transformOrigin = "";
	document.getElementById('hand4').style.animation = "";
	document.getElementById('hand5').style.transformOrigin = "";
	document.getElementById('hand5').style.animation = "";
	document.getElementById("arrow1").style.animation = "";
	
	document.getElementById('can1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)	=";
	document.getElementById('can2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
	document.getElementById('can3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";
	
	document.getElementById('can4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
	document.getElementById('can5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";
	document.getElementById('can6-1').innerHTML="Empty weight of flask with stopper (W<sub>1</sub>)=";
	
	document.getElementById('can6-2').innerHTML="Weight of flask + cement (W<sub>2</sub>) = ";
		document.getElementById('can6-3').innerHTML="Weight of flask + cement + kerosene (W<sub>3</sub>) =";
	document.getElementById('can6-4').innerHTML="Weight of flask + kerosene (W<sub>4</sub>) = ";
	document.getElementById('can6-5').innerHTML="Weight of flask+water (W<sub>5</sub>) =";
	document.getElementById('can6-6').innerHTML=" Specific gravity of kerosene ";
	document.getElementById('can6-7').innerHTML="Specific gravity of cement =";

	
	
	
	
	document.getElementById('nextButton').style.visibility="hidden";	
	
}
function stepstop()
{
		document.getElementById('nextButton').style.visibility="hidden";	
	
}
