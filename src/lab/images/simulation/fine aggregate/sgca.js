//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var sub="";
 var n,p,a,b,c;

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
		document.getElementById('a2').style.visibility="hidden";
      	document.getElementById('nextButton').style.visibility="hidden";
      	document.getElementById('sand').style.visibility="visible";

     setTimeout(function()
      {
		setTimeout(function()
		{
		       if(document.getElementById('r').checked)
		       {
			     flag=1;
	           }
	           else 
			   {
		         flag=2;
		        }
				
         },500);
		 			document.getElementById('nextButton').style.visibility="visible";
	
	}, 3000);
			}
	
	else if (simsubscreennum==2)
	{  

		refresh1();
		document.getElementById('sand').style.visibility="hidden";
	
		document.getElementById('nextButton').style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML=" ";
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('a1').onclick=function() { step2(); };  	   
	}
	else if (simsubscreennum==3)
	{
	refresh2();
	refresh1();
	repeat+=1;
		if(mpointer==0)
		{
			refresh1();
            document.getElementById('a2').style.visibility="hidden";
            document.getElementById('nextButton').style.visibility="hidden";
		    document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		    document.getElementById('trial').innerHTML="Trial : " + repeat;
		    myInt = setInterval(function(){ animatearrow(); }, 500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 270px; height: 40px; z-index: 10;";
		    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    // Code for IE9
		    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    // Standard syntax
		    document.getElementById("arrow1").style.transform = "rotate(180deg)";
		    document.getElementById('stl3-1').onclick=function() { step3(); };
		}
		else
		{
			lnt++;
			refresh1();
			document.getElementById('a3').onclick="";
            document.getElementById('a3').style.visibility="visible";
            document.getElementById('stl3-1').style.visibility="visible";
			document.getElementById('nob3-1').style.visibility="visible";
			document.getElementById('canvas6').style.visibility="hidden";
			document.getElementById('can6-1').style.visibility="hidden";
            document.getElementById('can6-2').style.visibility="hidden";
            document.getElementById('can6-3').style.visibility="hidden";
            document.getElementById('can6-4').style.visibility="hidden";
            document.getElementById('nextButton').style.visibility="hidden";
		    document.getElementById('trial').style="visibility:visible ;left:700px; top:100px; position: absolute;font-weight: bold;text-transform: uppercase;";
		    document.getElementById('trial').innerHTML="Trial : " + repeat;
		    myInt = setInterval(function(){ animatearrow(); }, 500);
		    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 270px; height: 40px; z-index: 10;";
            document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		    // Code for IE9
		    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		    // Standard syntax
		    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	        document.getElementById('stl3-1').onclick=function() { step3(); };
		}
	}
	else if (simsubscreennum==4)
	{
		refresh1();
		document.getElementById('a5').onclick="";
        document.getElementById('a5').style.visibility="visible";
        document.getElementById('stl4-1').style.visibility="visible";
		document.getElementById('nob4-1').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="hidden";
        document.getElementById('a4').style.visibility="hidden";
		if(flag==1)
		{
			document.getElementById('wrs3').style.visibility="hidden";
            document.getElementById('rs4').style.visibility="visible";
		}
		else if(flag==2)
		{
			document.getElementById('wbs3').style.visibility="hidden";
            document.getElementById('bs4').style.visibility="visible";
		}
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('stl4-1').onclick=function() { step4(); };
    }
	else if (simsubscreennum==5)
	{
		refresh1();
		document.getElementById('a7').onclick="";
        document.getElementById('a7').style.visibility="visible";
        document.getElementById('stl5-1').style.visibility="visible";
		document.getElementById('nob5-1').style.visibility="visible";
		document.getElementById('lcb4').style.visibility="hidden";
        document.getElementById('nextButton').style.visibility="hidden";
        document.getElementById('a6').style.visibility="hidden";
		if(flag==1)
		{
			document.getElementById('wmr').style.visibility="hidden";
		}
		else if(flag==2)
		{
			document.getElementById('wmb').style.visibility="hidden";
		}
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('stl5-1').onclick=function() { step5(); };
	}
	else if (simsubscreennum==6)
	{
		refresh1();
        document.getElementById('a8').style.visibility="hidden";
		document.getElementById('wtr5').style.visibility="hidden";
        document.getElementById('lcb5').style.visibility="hidden";
		//document.getElementById('sp1').style.visibility="visible";
        document.getElementById('f1').style.visibility="visible";
		if(repeat>0 && repeat<4)
		{
			mpointer=1;
			simsubscreennum=2;
		}
		document.getElementById('can6-1').style.visibility="visible";
		document.getElementById('can6-2').style.visibility="visible";
		document.getElementById('can6-3').style.visibility="visible";
		document.getElementById('can6-4').style.visibility="visible";
		if(flag==1)
		{
			document.getElementById('can6-1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) ="+values[lnt][0]+" gm"
			document.getElementById('can6-2').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate (W<sub>2</sub>) ="+values[lnt][1]+" gm"
			document.getElementById('can6-3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) ="+values[lnt][2]+" gm"
			document.getElementById('can6-4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) ="+values[lnt][3]+" gm"
        }
		else if(flag==2)
		{
			document.getElementById('can6-1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) ="+values1[lnt][0]+" gm"
			document.getElementById('can6-2').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate (W<sub>2</sub>) ="+values1[lnt][1]+" gm"
			document.getElementById('can6-3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) ="+values1[lnt][2]+" gm"
			document.getElementById('can6-4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) ="+values1[lnt][3]+" gm"
        }
		stepstop();
	}
}

function step2()
{
	myStopFunction();
	document.getElementById('a1').style.visibility="hidden";
	setTimeout(function(){
	    document.getElementById('a2').style.visibility="visible";
	}, 500);
	setTimeout(function()
	{
		setTimeout(function()
		{
			document.getElementById('nextButton').style.visibility="visible";
        },500);
		if(flag==1)
		{
		    document.getElementById('can1').innerHTML="Empty weight of pycnometer (W<sub>1</sub>)="+values[lnt][0]+"gm";
		    document.getElementById('v1').innerHTML=+values[lnt][0]+".00gm";
		}
		else if(flag==2)
		{
		    document.getElementById('can1').innerHTML="Empty weight of pycnometer (W<sub>1</sub>)="+values1[lnt][0]+"gm";
            document.getElementById('v1').innerHTML=+values1[lnt][0]+".00gm";
        }
	}, 1200);
}

function step3()
{
	myStopFunction();
	document.getElementById('stl3-1').style.visibility="hidden";
	document.getElementById('stl3-2').style.visibility="visible";
    document.getElementById("stl3-2").onclick=""; 
    setTimeout(function(){
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute;left: 240px; top: 240px;  height: 40px; z-index: 10;";
	    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
	}, 1000);
	
	setTimeout(function()
	{
		document.getElementById("stl3-2").onclick=""; 
        document.getElementById('nob3-1').onclick=function() { step31(); };
    }, 1600);
}


function step31()
{
	myStopFunction();
	document.getElementById('nob3-1').style.visibility="hidden";
	document.getElementById('nob3-2').style.visibility="visible";
    document.getElementById('a3').onclick=""; 
	document.getElementById('nob3-2').onclick=""; 
    setTimeout(function(){
	    document.getElementById('hand3').style.visibility="visible";
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 465px; top: 200px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
	}, 1600);
	setTimeout(function()
	{
        document.getElementById("nob3-2").onclick=""; 
        document.getElementById("stl3-2").onclick=""; 
        document.getElementById('hand3').onclick=function() { step32(); };
    }, 1600);
}

	
function step32()
{
    myStopFunction();
    document.getElementById('hand3').style.transformOrigin = "100% 80%";
	document.getElementById('hand3').style.animation = "valveturn-4 1.5s forwards ";
	if(flag==1)
	{
		setTimeout(function()
		{
			document.getElementById('prs3').style.visibility="visible";
            document.getElementById('lrs3').style.visibility="visible";
	        document.getElementById('lrs3').style.animation = "water-5 1.5s 1 reverse";
	        document.getElementById('rs3').style.visibility="visible";
	        document.getElementById('rs3').style.animation = "water-5 1.8s 1 forwards";
            setTimeout(function()
			{	
			    document.getElementById('prs3').style.visibility="hidden";
	            document.getElementById('lrs3').style.visibility="hidden";
			},1000);
        },500);
	}
	else if(flag==2)
	{
		setTimeout(function()
	    {
			document.getElementById('pbs3').style.visibility="visible";
            document.getElementById('lbs3').style.visibility="visible";
	        document.getElementById('lbs3').style.animation = "water-5 1.5s 1 reverse";
	        document.getElementById('bs3').style.visibility="visible";
	        document.getElementById('bs3').style.animation = "water-5 1.8s 1 forwards";
		    setTimeout(function()
		    {	
		        document.getElementById('pbs3').style.visibility="hidden";
	            document.getElementById('lbs3').style.visibility="hidden";
		    },1000);
		},500);
	}
	document.getElementById('stl3-2').onclick="";
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	setTimeout(function()
	{				  
        document.getElementById('hand3').style.visibility="hidden";
	},800);
	document.getElementById('nob3-2').onclick=function() { step33();}
}				
function step33()
{	  
    myStopFunction();  
	document.getElementById('nob3-2').style.visibility="hidden";
	document.getElementById('nob3-1').style.visibility="visible"
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('nob3-1').onclick="";
    document.getElementById('stl3-2').onclick=function() { step34();}
}				
function step34()
{
    myStopFunction();  
	document.getElementById('stl3-2').style.visibility="hidden";
	document.getElementById('stl3-1').style.visibility="visible";
	document.getElementById('nob3-1').onclick="";
	document.getElementById('stl3-1').onclick="";
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    setTimeout(function()
	{
        document.getElementById('a3').onclick=function() { step35(); }
	}, 2000);
}
function step35()
{
	myStopFunction();
	if(flag==1)
	{
		document.getElementById('a3').style.visibility="hidden";
		document.getElementById('stl3-1').style.visibility="hidden";
		document.getElementById('nob3-1').style.visibility="hidden";
		document.getElementById('rs3').style.visibility="hidden";
        document.getElementById('a4').style.visibility="visible";
	    document.getElementById('wrs3').style.visibility="visible";
		document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate(W<sub>2</sub>)="+values[lnt][1]+"gm";
		document.getElementById('v3').innerHTML=+values[lnt][1]+".00gm";
    }
	 else if(flag==2)
	{
		document.getElementById('stl3-1').style.visibility="hidden";
		document.getElementById('nob3-1').style.visibility="hidden";
		document.getElementById('bs3').style.visibility="hidden";
		document.getElementById('a3').style.visibility="hidden";
	    document.getElementById('a4').style.visibility="visible";
	    document.getElementById('wbs3').style.visibility="visible";
		document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate(W<sub>2</sub>)="+values1[lnt][1]+"gm";
        document.getElementById('v3').innerHTML=+values1[lnt][1]+".00gm";    
	}
	document.getElementById('nextButton').style.visibility="visible";
}

function step4()
{
	myStopFunction();
	document.getElementById('stl4-1').style.visibility="hidden";
	document.getElementById('stl4-2').style.visibility="visible";
    document.getElementById("stl4-2").onclick=""; 
    setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 240px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
    // Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	}, 1600);
	setTimeout(function()
	{
		document.getElementById("stl4-2").onclick=""; 
        document.getElementById('nob4-1').onclick=function() { step41(); };
    }, 1600);
}
function step41()
{
	myStopFunction();
	document.getElementById('nob4-1').style.visibility="hidden";
	document.getElementById('nob4-2').style.visibility="visible";
    document.getElementById('nob4-2').onclick=""; 
    document.getElementById("a5").onclick=""; 
    setTimeout(function()
	{
		document.getElementById('hand4').style.visibility="visible";
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 210px; height: 40px; z-index: 10;";
        document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
	}, 1600);
	
	setTimeout(function()
	{
        document.getElementById("nob4-2").onclick=""; 
        document.getElementById("stl4-2").onclick=""; 
        document.getElementById('hand4').onclick=function() { step42(); };
    }, 1600);
}
function step42()
{
    myStopFunction();
    document.getElementById('hand4').style.transformOrigin = "100% 80%";
	document.getElementById('hand4').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pw4').style.visibility="visible";
        document.getElementById('lw4').style.visibility="visible";
	    document.getElementById('lw4').style.animation = "water-5 1.5s 1 reverse";
	    document.getElementById('w4').style.visibility="visible";
	    document.getElementById('w4').style.animation = "water-5 1.8s 1 forwards";
        setTimeout(function()
		{	
		    document.getElementById('pw4').style.visibility="hidden";
	        document.getElementById('lw4').style.visibility="hidden";
			document.getElementById('w4').style.visibility="hidden";
            document.getElementById('cb4').style.visibility="visible";
            if(flag==1)
		    {
				document.getElementById('rs4').style.visibility="hidden";
                document.getElementById('riv').style.visibility="visible";
            }
		    else if(flag==2)
		    {
				document.getElementById('bs4').style.visibility="hidden";
                document.getElementById('bch').style.visibility="visible";
            }
		},1000);
    },500);
	document.getElementById('stl4-2').onclick="";
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    setTimeout(function()
	{				  
        document.getElementById('hand4').style.visibility="hidden";
	},800);
	document.getElementById('nob4-2').onclick=function() { step43();}
}		
function step43()
{	  
    myStopFunction();  
	document.getElementById('nob4-2').style.visibility="hidden";
	document.getElementById('nob4-1').style.visibility="visible"
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
    // Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('nob4-1').onclick="";
    document.getElementById('stl4-2').onclick=function() { step44();}
}				
function step44()
{
    myStopFunction();  
	document.getElementById('stl4-2').style.visibility="hidden";
	document.getElementById('stl4-1').style.visibility="visible";
    document.getElementById('nob4-1').onclick="";
	document.getElementById('stl4-1').onclick="";
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    setTimeout(function()
	{
        document.getElementById('a5').onclick=function() { step45(); }
	}, 2000);
}
 
function step45()
{
	myStopFunction();
	if(flag==1)
	{
		document.getElementById('a5').style.visibility="hidden";
		document.getElementById('stl4-1').style.visibility="hidden";
		document.getElementById('nob4-1').style.visibility="hidden";
		document.getElementById('riv').style.visibility="hidden";
        document.getElementById('lcb4').style.visibility="visible";
        document.getElementById('cb4').style.visibility="hidden";
        document.getElementById('a6').style.visibility="visible";
	    document.getElementById('wmr').style.visibility="visible";
		document.getElementById('can4').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>)="+values[lnt][2]+"gm";
        document.getElementById('v4').innerHTML=+values[lnt][2]+".00gm";
	}
	else if(flag==2)
	{
		document.getElementById('stl4-1').style.visibility="hidden";
		document.getElementById('nob4-1').style.visibility="hidden";
		document.getElementById('bch').style.visibility="hidden";
        document.getElementById('lcb4').style.visibility="visible";
        document.getElementById('cb4').style.visibility="hidden";
        document.getElementById('a5').style.visibility="hidden";
	    document.getElementById('a6').style.visibility="visible";
	    document.getElementById('wmb').style.visibility="visible";
        document.getElementById('can4').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>)="+values1[lnt][2]+"gm";
        document.getElementById('v4').innerHTML=+values1[lnt][2]+".00gm";
	}
	document.getElementById('nextButton').style.visibility="visible";
}
		
function step5()
{
	myStopFunction();
	document.getElementById('stl5-1').style.visibility="hidden";
	document.getElementById('stl5-2').style.visibility="visible";
    document.getElementById("stl5-2").onclick=""; 
    setTimeout(function()
	{
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 240px; height: 40px; z-index: 10;";
	    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
        // Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	    // Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
	}, 1000);
	setTimeout(function()
	{
		document.getElementById("stl5-2").onclick=""; 
        document.getElementById('nob5-1').onclick=function() { step51(); };
    }, 1600);
}


function step51()
{
	myStopFunction();
	document.getElementById('nob5-1').style.visibility="hidden";
	document.getElementById('nob5-2').style.visibility="visible";
    document.getElementById("a7").onclick=" ";
	document.getElementById('nob5-2').onclick=""; 
    setTimeout(function()
	{
		document.getElementById('hand5').style.visibility="visible";
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 210px; height: 40px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(360deg)";
	}, 1600);
	setTimeout(function()
	{
        document.getElementById("nob5-2").onclick=""; 
        document.getElementById("stl5-2").onclick=""; 
        document.getElementById('hand5').onclick=function() { step52(); };
    }, 1600);
}
function step52()
{
    myStopFunction();
    document.getElementById('hand5').style.transformOrigin = "100% 80%";
	document.getElementById('hand5').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pw5').style.visibility="visible";
        document.getElementById('lw5').style.visibility="visible";
	    document.getElementById('lw5').style.animation = "water-5 1.5s 1 reverse";
	    document.getElementById('w5').style.visibility="visible";
	    document.getElementById('w5').style.animation = "water-5 1.8s 1 forwards";
        setTimeout(function()
		{	
		    document.getElementById('pw5').style.visibility="hidden";
	        document.getElementById('lw5').style.visibility="hidden";
			document.getElementById('cb5').style.visibility="visible";
	    },1000);

	},500);
	document.getElementById('w5').style.visibility="hidden";
	document.getElementById('stl5-2').onclick="";
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	setTimeout(function()
	{				  
        document.getElementById('hand5').style.visibility="hidden";
	},800);
		document.getElementById('nob5-2').onclick=function() { step53();}
}		
function step53()
{	  
    myStopFunction();  
	document.getElementById('nob5-2').style.visibility="hidden";
	document.getElementById('nob5-1').style.visibility="visible"
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('nob5-1').onclick="";
    document.getElementById('stl5-2').onclick=function() { step54();}
}				
function step54()
{
    myStopFunction();  
	document.getElementById('stl5-2').style.visibility="hidden";
	document.getElementById('stl5-1').style.visibility="visible";
	document.getElementById('nob5-1').onclick="";
	document.getElementById('stl5-1').onclick="";
    myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";

	setTimeout(function()
	{
             

				document.getElementById('a7').onclick=function() { step55(); }
			

	}, 2000);

	
	
}
 
function step55()
{
	myStopFunction();
	    document.getElementById('a7').style.visibility="hidden";
		document.getElementById('w5').style.visibility="hidden";
        document.getElementById('cb5').style.visibility="hidden";

		document.getElementById('stl5-1').style.visibility="hidden";
		document.getElementById('nob5-1').style.visibility="hidden";

        document.getElementById('lcb5').style.visibility="visible";

	    document.getElementById('a8').style.visibility="visible";
	    document.getElementById('wtr5').style.visibility="visible";
		if(flag==1)
		 {
		document.getElementById('can5').innerHTML="Weight of pycnometer + water(W<sub>4</sub>)="+values[lnt][3]+"gm";
		document.getElementById('v5').innerHTML=+values[lnt][3]+".00gm";
		 }
		 else if(flag==2)
		 {
			 		document.getElementById('can5').innerHTML="Weight of pycnometer + water(W<sub>4</sub>)="+values1[lnt][3]+"gm";

                document.getElementById('v5').innerHTML=+values1[lnt][3]+".00gm";

         }

		document.getElementById('nextButton').style.visibility="visible";

	
}
		

function refresh1()
{
	document.getElementById('hand3').style.transformOrigin = "";
	document.getElementById('hand3').style.animation = "";
	document.getElementById('hand4').style.transformOrigin = "";
	document.getElementById('hand4').style.animation = "";
	document.getElementById('hand5').style.transformOrigin = "";
	document.getElementById('hand5').style.animation = "";
	document.getElementById('arrow1').style.animation = "";
    document.getElementById('sand').style.transformOrigin = "";

	
	document.getElementById('can6-5').innerHTML="";
    document.getElementById('can6-7').innerHTML="";
	document.getElementById('can6-8').innerHTML="";

	
	
	document.getElementById('prs3').style.transformOrigin = "";
	document.getElementById('prs3').style.animation = "";
	document.getElementById('lrs3').style.transformOrigin = "";
	document.getElementById('lrs3').style.animation = "";
	document.getElementById('pbs3').style.transformOrigin = "";
	document.getElementById('pbs3').style.animation = "";
	document.getElementById('lbs3').style.transformOrigin = "";
	document.getElementById('lbs3').style.animation = "";
	document.getElementById('lw4').style.transformOrigin = "";
	document.getElementById('lw4').style.animation = "";
	document.getElementById('pw4').style.transformOrigin = "";
	document.getElementById('pw4').style.animation = "";
	document.getElementById('pw5').style.transformOrigin = "";
	document.getElementById('pw5').style.animation = "";
	document.getElementById('bs3').style.animation = "";
    document.getElementById('rs3').style.transformOrigin = "";
	
	
	
	
	
	
	document.getElementById('bch').style.transformOrigin = "";
	document.getElementById('bch').style.animation = "";
	document.getElementById('riv').style.transformOrigin = "";
	document.getElementById('riv').style.animation = "";
	document.getElementById('w4').style.animation = "";
    document.getElementById('w4').style.transformOrigin = "";
	
	
	
	document.getElementById('pw5').style.transformOrigin = "";
	document.getElementById('pw5').style.animation = "";
	document.getElementById('lw5').style.transformOrigin = "";
	document.getElementById('lw5').style.animation = "";
	document.getElementById('w5').style.animation = "";
    document.getElementById('w5').style.transformOrigin = "";
	
	
	
	
	
	document.getElementById('can1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) = ";
	document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate(W<sub>2</sub>)=";
	document.getElementById('can4').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) =  ";
	document.getElementById('can5').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) = ";
	
	
	
	document.getElementById('can6-1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) = ";
	document.getElementById('can6-2').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate(W<sub>2</sub>)= ";
	document.getElementById('can6-3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) =  ";
	document.getElementById('can6-4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) = ";
	//document.getElementById('can6-5').innerHTML=" Specific gravity of fine aggregate= ";
	 

		document.getElementById('v1').innerHTML=" ";
        document.getElementById('v3').innerHTML=" ";
		document.getElementById('v4').innerHTML=" ";
		document.getElementById('v5').innerHTML=" ";
		

	
	
	
	document.getElementById('nextButton').style.visibility="hidden";	
	

}

function stepstop()
{
		document.getElementById('nextButton').style.visibility="hidden";	
	
}
 


function checkval()
{
	n=document.getElementById('i1').value;
	while(n==="")
	{
		alert("You have not entered any value");
        n=prompt("Enter the specific gravity of cement : ","");
	}
	
	document.getElementById('f1').style.visibility="hidden";
    document.getElementById('can6-7').style.visibility="visible";
	document.getElementById('can6-8').style.visibility="visible";
	document.getElementById('can6-5').style.visibility="visible";
	if(flag==1)
	{
	a=values[lnt][4];
	p=((a-n)/a)*100;
    document.getElementById('can6-5').innerHTML="Actual Specific gravity of fine aggragate=" +values[lnt][4];
	document.getElementById('can6-7').innerHTML="Entered Specific gravity of fine aggragate=" +n;				    
	document.getElementById('can6-8').innerHTML="Percentage(%) Error =" +p.toFixed(2);	
	
	}	
	else if(flag==2)
	{
	b=values1[lnt][4];
	p=((b-n)/b)*100;
    document.getElementById('can6-5').innerHTML="Actual Specific gravity of fine aggragate=" +values1[lnt][4];
	document.getElementById('can6-7').innerHTML="Entered Specific gravity of fine aggragate=" +n;				    
	document.getElementById('can6-8').innerHTML="Percentage(%) Error =" +p.toFixed(2);	
	}
	if(repeat==4)
	{
	document.getElementById('can6-6').style.visibility="visible";
    if(flag==1)
	{
		 document.getElementById('can6-6').innerHTML="Average Specific gravity of fine aggregate = 2.7";
	}
	else if(flag==2)
	{
	     document.getElementById('can6-6').innerHTML="Average Specific gravity of fine aggregate = 2.67";
	}
	document.getElementById('nextButton').style.visibility="hidden";
    }
	else
	{
	setTimeout(function()
	{
		document.getElementById('nextButton').style.visibility="visible";
	},800);
	}
}



function refresh2()
{
	document.getElementById('i1').value="";
}