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
		document.getElementById('trial').innerHTML=" ";
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('a1').onclick=function() { step1(); };

          	   
	}
	else if (simsubscreennum==2)
	{
	
	refresh1();
	refresh2();
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
		
		
		document.getElementById('stl2-1').onclick=function() { step2(); };
		
				}
				else{
					lnt+=1;
						refresh1();
								document.getElementById('a3').onclick="";

               document.getElementById('a3').style.visibility="visible";
                 document.getElementById('stl2-1').style.visibility="visible";
				 document.getElementById('nob2-1').style.visibility="visible";
			   document.getElementById('canvas5').style.visibility="hidden";
			   
                document.getElementById('nextButton').style.visibility="hidden";
							
	    document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="Trial : " + repeat;
		

		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('stl2-1').onclick=function() { step2(); };
		
	}
		
		
		
		
}
	else if (simsubscreennum==3)
	{
				refresh1();
				document.getElementById('a5').onclick="";
				document.getElementById('ca3-2').style.visibility="visible";
				document.getElementById('ca2-2').style.visibility="hidden";

				document.getElementById('a5').style.visibility="visible";
                 document.getElementById('stl3-1').style.visibility="visible";
				 document.getElementById('nob3-1').style.visibility="visible";
				document.getElementById('nextButton').style.visibility="hidden";

				document.getElementById('a4').style.visibility="hidden";
				
                
					document.getElementById('ca3-1').style.visibility="hidden";
             
				

		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 240px; top: 270px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		
		
		document.getElementById('stl3-1').onclick=function() { step3(); };
                
		
	}
	else if (simsubscreennum==4)
	{
				refresh1();
				document.getElementById('ca3-1').style.visibility="hidden";
				document.getElementById('lcb3-2').style.visibility="hidden";

				document.getElementById('a7').onclick="";

				document.getElementById('a7').style.visibility="visible";
                 document.getElementById('stl4-1').style.visibility="visible";
				 document.getElementById('nob4-1').style.visibility="visible";
				document.getElementById('lcb4').style.visibility="hidden";

				document.getElementById('nextButton').style.visibility="hidden";

				document.getElementById('a6').style.visibility="hidden";
				
				

               
					document.getElementById('w3').style.visibility="hidden";
				
				

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

		document.getElementById('a8').style.visibility="hidden";
		    document.getElementById('wtr4').style.visibility="hidden";

	        document.getElementById('lcb4').style.visibility="hidden";
					 		    //document.getElementById('sp1').style.visibility="visible";
        document.getElementById('can5-1').innerHTML="Empty weight of pycnometer (W<sub>1</sub>)="+values[lnt][0] +"gm";
		document.getElementById('can5-2').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate  (W<sub>2</sub>)= "+values[lnt][1] +"gm " ;
		document.getElementById('can5-3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) =" +values[lnt][2]  +"gm";
		document.getElementById('can5-4').innerHTML="Weight of pycnometer + water  (W<sub>4</sub>) = "+values[lnt][3]  +"gm" ;
		document.getElementById('f1').style.visibility="visible";
         
        
		//document.getElementById('can6-5').innerHTML="Specific gravity of fine aggregate   =" +values1[lnt][4];
		
		
			
		 if(repeat < 4 && repeat>0)
		{
			mpointer=1;
			simsubscreennum=1;
         
		}
			
		
		
	}
	
}

function step1()
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
		 
		document.getElementById('can1').innerHTML="Empty weight of pycnometer (W<sub>1</sub>)="+values[lnt][0]+"gm";
		document.getElementById('v1').innerHTML=+values[lnt][0]+".00gm";
    }, 1200);
}

function step2()
{
	myStopFunction();
	document.getElementById('stl2-1').style.visibility="hidden";
	document.getElementById('stl2-2').style.visibility="visible";
    document.getElementById("stl2-2").onclick=""; 
    document.getElementById("stl2-2").onclick=""; 
    setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute;left: 240px; top: 240px;  height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('nob2-1').onclick=function() { step21(); };
	}, 1200);
}


function step21()
{
	myStopFunction();
	document.getElementById('nob2-1').style.visibility="hidden";
	document.getElementById('nob2-2').style.visibility="visible";
    document.getElementById('a3').onclick=""; 
	document.getElementById("nob2-2").onclick=""; 
    document.getElementById("stl2-2").onclick="";
    setTimeout(function(){
	   document.getElementById('hand2').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 590px; top: 165px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('hand2').onclick=function() { step22(); };
	}, 1200);
}

	
function step22()
{
    myStopFunction();
    document.getElementById('hand2').style.transformOrigin = "100% 80%";
	document.getElementById('hand2').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pca').style.visibility="visible";
        document.getElementById('ca2-1').style.visibility="visible";
	    document.getElementById('ca2-1').style.animation = "water-5 1.8s 1 forwards";
		 setTimeout(function()
		{	
		document.getElementById('pca').style.visibility="hidden";
		},1000);
     },500);
	document.getElementById('stl2-2').onclick="";
   setTimeout(function()
	{
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('hand2').style.visibility="hidden";
	document.getElementById('nob2-2').onclick=function() { step23();}
	},800);			  	
}				

 function step23()
{	  
        myStopFunction();  
	    document.getElementById('nob2-2').style.visibility="hidden";
	    document.getElementById('nob2-1').style.visibility="visible"
	    document.getElementById('nob2-1').onclick="";
        setTimeout(function(){
	    myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
			
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
        document.getElementById('stl2-2').onclick=function() { step24();}
		},800);
}				
					
            	
function step24()
{
     myStopFunction();  
	 document.getElementById('stl2-2').style.visibility="hidden";
	 document.getElementById('stl2-1').style.visibility="visible";
	 document.getElementById('nob2-1').onclick="";
	 document.getElementById('stl2-1').onclick="";
    setTimeout(function()
	{
 	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('a3').onclick=function() { step25(); }
	}, 1000);
}
 
function step25()
{
	myStopFunction();
	document.getElementById('a3').style.visibility="hidden";
	document.getElementById('stl2-1').style.visibility="hidden";
	document.getElementById('nob2-1').style.visibility="hidden";
	document.getElementById('ca2-1').style.visibility="hidden";
    document.getElementById('a4').style.visibility="visible";
	document.getElementById('ca2-2').style.visibility="visible";
	document.getElementById('can2').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate(W<sub>2</sub>)="+values[lnt][1]+"gm";
	document.getElementById('v2').innerHTML=+values[lnt][1]+".00gm";
	document.getElementById('nextButton').style.visibility="visible";	
}

function step3()
{
	myStopFunction();
	document.getElementById('stl3-1').style.visibility="hidden";
	document.getElementById('stl3-2').style.visibility="visible";
    document.getElementById("stl3-2").onclick=""; 
   	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top: 240px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('nob3-1').onclick=function() { step31(); };
	}, 1200);
}


function step31()
{
	myStopFunction();
	document.getElementById('nob3-1').style.visibility="hidden";
	document.getElementById('nob3-2').style.visibility="visible";
    document.getElementById("nob3-2").onclick=""; 
    document.getElementById("stl3-2").onclick="";  
    document.getElementById("a5").onclick=""; 
    setTimeout(function(){
	document.getElementById('hand3').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 210px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
	document.getElementById('hand3').onclick=function() { step32(); };
	}, 1400);
}

function step32()
{
    myStopFunction();
    document.getElementById('hand3').style.transformOrigin = "100% 80%";
	document.getElementById('hand3').style.animation = "valveturn-4 1.5s forwards ";
	setTimeout(function()
	{
		document.getElementById('pw3').style.visibility="visible";
		document.getElementById('w3').style.visibility="visible";
	    document.getElementById('w3').style.animation = "water-5 1.8s 1 forwards";
        setTimeout(function()
		{	document.getElementById('pw3').style.visibility="hidden";
			document.getElementById('w3').style.visibility="hidden";
            document.getElementById('lcb3-1').style.visibility="visible";
					
		},1000);

	},500);
	document.getElementById('stl3-2').onclick="";
	setTimeout(function()
	{
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('hand3').style.visibility="hidden";
	document.getElementById('nob3-2').onclick=function() { step33();}
	},800);			  	
}		
  
function step33()
{	  
   myStopFunction();  
   document.getElementById('nob3-2').style.visibility="hidden";
	document.getElementById('nob3-1').style.visibility="visible";
	document.getElementById('nob3-1').onclick="";
	setTimeout(function(){
	   myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
			
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
       document.getElementById('stl3-2').onclick=function() { step34();}
	},500);
}				
					
function step34()
{
     myStopFunction();  
	document.getElementById('stl3-2').style.visibility="hidden";
	document.getElementById('stl3-1').style.visibility="visible";
	document.getElementById('nob3-1').onclick="";
	document.getElementById('stl3-1').onclick="";
    setTimeout(function()
	{
 	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('a5').onclick=function() { step35(); }
	}, 1000);
}
 
function step35()
{
    myStopFunction();
	document.getElementById('a5').style.visibility="hidden";
	document.getElementById('stl3-1').style.visibility="hidden";
	document.getElementById('nob3-1').style.visibility="hidden";
	document.getElementById('lcb3-1').style.visibility="hidden";
    document.getElementById('lcb3-2').style.visibility="visible";
    document.getElementById('w3').style.visibility="hidden";
    document.getElementById('a6').style.visibility="visible";
	document.getElementById('ca3-1').style.visibility="visible";
	document.getElementById('ca3-2').style.visibility="hidden";
    document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate +water (W<sub>3</sub>)="+values[lnt][2]+"gm";
    document.getElementById('v3').innerHTML=+values[lnt][2]+".00gm";
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
	document.getElementById('nob4-1').onclick=function() { step41(); };
	}, 1200);
}


function step41()
{
	myStopFunction();
	document.getElementById('nob4-1').style.visibility="hidden";
	document.getElementById('nob4-2').style.visibility="visible";
	document.getElementById("a7").onclick=" ";
	document.getElementById("nob4-2").onclick=""; 
    document.getElementById("stl4-2").onclick=""; 
	setTimeout(function(){
	document.getElementById('hand4').style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 470px; top: 210px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(360deg)";
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
			document.getElementById('cb4').style.visibility="visible";
	    },1000);
    },500);
	document.getElementById('w4').style.visibility="hidden";
	document.getElementById('stl4-2').onclick="";
	setTimeout(function()
	{
	document.getElementById('hand4').style.visibility="hidden";
	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 245px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('nob4-2').onclick=function() { step43();}
	},800);			  	
}	
	
function step43()
{	  
        myStopFunction();  
	    document.getElementById('nob4-2').style.visibility="hidden";
	    document.getElementById('nob4-1').style.visibility="visible";
		document.getElementById('nob4-1').onclick="";
		setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); }, 500);
        document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 85px; top: 285px; height: 40px; z-index: 10;";
			
        document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
        document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
        document.getElementById("arrow1").style.transform = "rotate(180deg)";
	    document.getElementById('stl4-2').onclick=function() { step44();}
		},500);
}				
					
function step44()
{
    myStopFunction();  
	document.getElementById('stl4-2').style.visibility="hidden";
    document.getElementById('stl4-1').style.visibility="visible";
	document.getElementById('nob4-1').onclick="";
	document.getElementById('stl4-1').onclick="";
    setTimeout(function()
	{
 	myInt = setInterval(function(){ animatearrow(); }, 500);
    document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 200px; top: 320px; height: 40px; z-index: 10;";
			
    document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		// Code for IE9
    document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		// Standard syntax
    document.getElementById("arrow1").style.transform = "rotate(180deg)";
    document.getElementById('a7').onclick=function() { step45(); }
	}, 1000);
}
 
function step45()
{
	myStopFunction();
	    document.getElementById('a7').style.visibility="hidden";
		document.getElementById('w4').style.visibility="hidden";
        document.getElementById('cb4').style.visibility="hidden";

		document.getElementById('stl4-1').style.visibility="hidden";
		document.getElementById('nob4-1').style.visibility="hidden";

        document.getElementById('lcb4').style.visibility="visible";

	    document.getElementById('a8').style.visibility="visible";
	    document.getElementById('wtr4').style.visibility="visible";
		
		document.getElementById('can4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>)="+values[lnt][3]+"gm";
		document.getElementById('v4').innerHTML=+values[lnt][3]+".00gm";
		 
		document.getElementById('nextButton').style.visibility="visible";

	
}
		

function refresh1()
{
	document.getElementById('hand3').style.transformOrigin = "";
	document.getElementById('hand3').style.animation = "";
	document.getElementById('hand4').style.transformOrigin = "";
	document.getElementById('hand4').style.animation = "";
	document.getElementById('hand2').style.transformOrigin = "";
	document.getElementById('hand2').style.animation = "";
	document.getElementById('arrow1').style.animation = "";

	
	document.getElementById('can5-5').innerHTML="";
    document.getElementById('can5-7').innerHTML="";
	document.getElementById('can5-8').innerHTML="";

	
	
	document.getElementById('ca2-1').style.transformOrigin = "";
	document.getElementById('ca2-1').style.animation = "";
	document.getElementById('lcb3-1').style.transformOrigin = "";
	document.getElementById('lcb3-1').style.animation = "";
	document.getElementById('lw4').style.transformOrigin = "";
	document.getElementById('lw4').style.animation = "";
	document.getElementById('w4').style.transformOrigin = "";
	document.getElementById('w4').style.animation = "";
	document.getElementById('wtr4').style.transformOrigin = "";
	document.getElementById('wtr4').style.animation = "";
	
	document.getElementById('can1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) = ";
	document.getElementById('can2').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate(W<sub>2</sub>) = ";
	document.getElementById('can3').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate +water (W<sub>3</sub>) =  ";
	document.getElementById('can4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) = ";
	
	
	
	document.getElementById('can5-1').innerHTML="Empty weight of pycnometer(W<sub>1</sub>) = ";
	document.getElementById('can5-2').innerHTML="Weight of pycnometer + 1/3rd of coarse aggregate (W<sub>2</sub>) = ";
	document.getElementById('can5-3').innerHTML="Weight of pycnometer + 1/3rd of fine aggregate +water (W<sub>3</sub>) =  ";
	document.getElementById('can5-4').innerHTML="Weight of pycnometer + water(W<sub>4</sub>) = ";
	//document.getElementById('can6-5').innerHTML=" Specific gravity of fine aggregate= ";
	 

		document.getElementById('v1').innerHTML=" ";
        document.getElementById('v3').innerHTML=" ";
		document.getElementById('v4').innerHTML=" ";
		document.getElementById('v2').innerHTML=" ";
		

	
	
	
	document.getElementById('nextButton').style.visibility="hidden";	
	

}

function refresh2()
{
		document.getElementById('i1').value="";

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
	a=values[lnt][4];
	p=((a-n)/a)*100;
	document.getElementById('f1').style.visibility="hidden";
    document.getElementById('can5-5').style.visibility="visible";
	document.getElementById('can5-7').style.visibility="visible";
	document.getElementById('can5-8').style.visibility="visible";
    document.getElementById('can5-5').innerHTML="Actual Specific gravity of cement   =" +values[lnt][4];
	document.getElementById('can5-7').innerHTML="Entered Specific gravity of cement  =" +n;				    
	document.getElementById('can5-8').innerHTML="Percentage(%) Error =" +p.toFixed(2);	
    if(repeat==4)
    {
		document.getElementById('can5-9').style.visibility="visible";
        document.getElementById('can5-9').innerHTML="Average Specific gravity of coarse aggregate = 2.7";
 
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
 


