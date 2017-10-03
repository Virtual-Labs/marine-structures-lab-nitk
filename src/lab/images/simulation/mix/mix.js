
//on click of next button
var mpointer=0;
var repeat =0;
var flag=0;
var sub="";
var n=0;
var count=0;
var time=0;
var s1;
var grd,exp,agg,slump,place1,place2;
var sd=0,fck=0,Fck=0;
var wcratio=0;
var wcnt=0,spratio=0,watercnt=0;
var cement=0;
var mincement=0;
var ca=0,fa=0;
var pump=0;
var vc=0,vw=0,vcad=0,vall=0,mca=0,mfa=0;
var cmix=0,famix=0,camix=0,wmix=0,admix=0;

function navNext()
{
    
     for (temp = 1; temp <= 8; temp++) 
     { 
         document.getElementById ('canvas'+temp).style.visibility="hidden";
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


window.setTimeout(function() {
    $('#sd3').css('visibility', 'visible');
}, 100);


 function wcrto()
		 {
		    
						 document.getElementById('table2').style.visibility="visible";
			 			 document.getElementById('wc').style.visibility="visible";

		   
		 }
		 
		 
function slumpto()
		 {
		   
				         document.getElementById('wtr3').style.visibility="hidden";
						 document.getElementById('table3').style.visibility="visible";
			 			 document.getElementById('waterc').style.visibility="visible";
		  
		 }

function magic()
{
	
	if (simsubscreennum==1)
	{	
     if(document.getElementById('p').checked)
	  {
		  flag=1;
		  		   document.getElementById('r').disabled="true";
		  		   document.getElementById('select1').style.visibility="hidden";
		           document.getElementById('a2').style.visibility="visible";
				   document.getElementById('type').style.visibility="visible";
		           document.getElementById('type').innerHTML="PLAIN CONCRETE";
				   setTimeout(function()
				   {
                   step1();
				   },1000);

	  }
	  else if(document.getElementById('r').checked)
	  {
		  flag=2;
		  		   document.getElementById('p').disabled="true";
		  		   document.getElementById('select1').style.visibility="hidden";
		           document.getElementById('a2').style.visibility="visible";
				   document.getElementById('type').style.visibility="visible";
		           document.getElementById('type').innerHTML="REINFORCED CONCRETE";
				    setTimeout(function()
				   {
                   stepr1();
				   },1000);


	  }
    }
	
	
	else if (simsubscreennum==2)
	{
		 document.getElementById('nextButton').style.visibility="hidden";
		 document.getElementById('a2').style.visibility="hidden";
		 document.getElementById('a3').style.visibility="hidden";
		 document.getElementById('a4').style.visibility="hidden";
		 document.getElementById('a5').style.visibility="hidden";
		 document.getElementById('a6').style.visibility="hidden";
		 document.getElementById('type').style.visibility="hidden";
		 document.getElementById('target').innerHTML="For the Concrete Grade = "+grd;
		 setTimeout(function()
		 {
			 document.getElementById('sd').style.visibility="visible";
			 
		 },3500);
    }
	else if (simsubscreennum==3)
	{			

				   document.getElementById('nextButton').style.visibility="hidden"; 
				   document.getElementById('sd3').style.visibility="hidden"; 
				   document.getElementById('sd4').style.visibility="hidden"; 
				   document.getElementById('wcrt').innerHTML="For the Exposure Condition = "+exp;
          // setTimeout(function()
		 // {
			 document.getElementById('wcrt').style.visibility="visible";
			 if(flag==1)
			 {
				 if(exp=="Mild")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.60 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.50 ;
				 }
				  else if(exp=="Moderate")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.60 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.50 ;
				 }
				 else if(exp=="Severe")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.50 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.45 ;
				 }
				 else if(exp=="Very Severe")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.45 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.40 ;
				 }
				 else if(exp=="Extreme")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.45 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.40 ;
				 }
			 }
				 else if(flag==2)
			 {
				 if(exp=="Mild")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.55 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.50 ;
				 }
				  else if(exp=="Moderate")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.50 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.45 ;
				 }
				 else if(exp=="Severe")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.45 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.40 ;
				 }
				 else if(exp=="Very Severe")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.45 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.40 ;
				 }
				 else if(exp=="Extreme")
				 {
				 	document.getElementById('wcrt1').innerHTML="Maximum W/C Ratio ="+ 0.45 ;
					// document.getElementById('wcrt2').innerHTML="Minimum W/C Ratio ="+ 0.40 ;
				 }

			 }
			 
			 wcrto();
		 // },4000);
	}
	else if (simsubscreennum==4)
	{
			 document.getElementById('nextButton').style.visibility="hidden"; 
			 document.getElementById('wc2').style.visibility="hidden"; 
			 document.getElementById('wc3').style.visibility="hidden"; 
		     document.getElementById('wcrt').style.visibility="hidden"; 
			 document.getElementById('wcrt1').style.visibility="hidden"; 
			 if(agg=="10mm")
			 {
				 // document.getElementById('slump1').innerHTML="Minimum W/C Ratio ="+ 187 ;
				 document.getElementById('slump2').innerHTML="Maximum Water Content ="+ 208+"Kg" ;
			}
			 else if(agg=="20mm")
			 {
				 // document.getElementById('slump1').innerHTML="Minimum W/C Ratio ="+ 166 ;
				 document.getElementById('slump2').innerHTML="Maximum Water Content ="+ 186+"Kg" ;
			 }
			  else if(agg=="40mm")
			 {
				 // document.getElementById('slump1').innerHTML="Minimum W/C Ratio ="+ 146 ;
				 document.getElementById('slump2').innerHTML="Maximum Water Content ="+ 165+"Kg" ;
			 }
             document.getElementById('water').innerHTML="For the Aggregate Size = "+agg;

         setTimeout(function()
		 {
			 slumpto();
		 },4000);

	}
	else if (simsubscreennum==5)
	{
		if(flag==1)
		{
			if(exp=="Mild")mincement=220;
			else if(exp=="Moderate")mincement=240;
			else if(exp=="Severe")mincement=250;
			else if(exp=="Very Severe")mincement=260;
			else if(exp=="Extreme")mincement=280;
		}
		else if(flag==2)
		{
			if(exp=="Mild")mincement=300;
			else if(exp=="Moderate")mincement=300;
			else if(exp=="Severe")mincement=320;
			else if(exp=="Very Severe")mincement=340;
			else if(exp=="Extreme")mincement=360;
		}
			 document.getElementById('nextButton').style.visibility="hidden";
			 document.getElementById('wtr4').style.visibility="hidden";
			 document.getElementById('wtr3').style.visibility="hidden";
			 document.getElementById('wtr3a').style.visibility="hidden";
			 document.getElementById('wtr3b').style.visibility="hidden";
			 document.getElementById('cement').style.visibility="visible";
			 document.getElementById('cement').innerHTML="Selected W/C Ratio = "+wcratio;
			 document.getElementById('cement0').style.visibility="visible";
			 document.getElementById('cement0').innerHTML="Water Content = "+watercnt+"Kg";
			 document.getElementById('cement1').style.visibility="visible";

			  setTimeout(function()
		 {
			 document.getElementById('cement2').style.visibility="visible";
			 
			 cement=watercnt/wcratio;
			  
			 watercnt=watercnt.toFixed(2);
			
			 document.getElementById('cement2').innerHTML="=&nbsp(&nbsp"+watercnt+"&nbsp)&nbsp/&nbsp(&nbsp"+wcratio+"&nbsp)";
		 },4000);
		  setTimeout(function()
		 {
			 document.getElementById('cement3').style.visibility="visible";
			 document.getElementById('cement3').innerHTML="=&nbsp<u>"+cement.toFixed(2)+"&nbspkg/m<sup>3</sup></u>"; 
		 },5000);
		 
		  setTimeout(function()
		 {
			 document.getElementById('cement3').style.visibility="hidden";
			 
			 document.getElementById('cement2').innerHTML="=&nbsp<u>"+cement.toFixed(2)+"&nbspkg/m<sup>3</sup></u>"; 
		 },6000);
		   setTimeout(function()
		 {
			 document.getElementById('cement4').style.visibility="visible";
			 document.getElementById('cement4').innerHTML="From Table 5 of IS 456-2000, for the Selected Exposure Condition&nbsp=&nbsp"+exp; 
		 },9000);
		  setTimeout(function()
		 {
			 document.getElementById('cement5').style.visibility="visible";
			 document.getElementById('cement5').innerHTML="Minimum Cement Content&nbsp=&nbsp"+mincement+"&nbspkg/m<sup>3</sup>&nbsp&nbsp&nbspSelected Cement Content&nbsp=&nbsp"+cement.toFixed(2)+"&nbspkg/m<sup>3</sup>"; 
		 },12500);
		  setTimeout(function()
		 {
			 if(cement>mincement)
			 {
			 document.getElementById('cement5').style.visibility="hidden";
			 document.getElementById('cement6').style.visibility="visible";
			 document.getElementById('cement6').innerHTML=cement.toFixed(2)+"&nbspkg/m<sup>3</sup>&nbsp>&nbsp"+mincement+"&nbspkg/m<sup>3</sup><br/><br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong>Valid</strong>"; 
			 document.getElementById('nextButton').style.visibility="visible";
			 }
			 else
			 {
				 document.getElementById('cement5').style.visibility="hidden";
			 document.getElementById('cement6').style.visibility="visible";
			   document.getElementById('un').style.visibility="visible";
			 document.getElementById('cement6').innerHTML=cement.toFixed(2)+"&nbspkg/m<sup>3</sup>&nbsp<&nbsp"+mincement+"&nbspkg/m<sup>3</sup><br/><br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<strong>Repeat the Experiment</strong>"; 
			 }
		 },14500);




		
  	 }
	else if (simsubscreennum==6)
	{
	
	
	        if(wcratio>=0.4 && wcratio<0.45){ca=0.58;}
			else if(wcratio>=0.45 && wcratio<0.5){ca=0.59;}
			else if(wcratio>=0.5 && wcratio<0.55){ca=0.6;}
			else if(wcratio>=0.55 && wcratio<0.6){ca=0.61;}
			else if(wcratio==0.6){ca=0.62;}
			
		
			 document.getElementById('nextButton').style.visibility="hidden";
			 document.getElementById('cement2').style.visibility="hidden";
			 document.getElementById('cement6').style.visibility="hidden";
			 document.getElementById('cement4').style.visibility="hidden";
			 document.getElementById('cement1').style.visibility="hidden";
			 document.getElementById('cement3').style.visibility="hidden";
			 document.getElementById('cement').style.visibility="hidden";
			 document.getElementById('cement0').style.visibility="hidden";

			 
			 setTimeout(function()
		     {
			    document.getElementById('cf1').style.visibility="visible";
				if(pump==1)
				{
					fa=1-ca;
					setTimeout(function()
				{
				document.getElementById('cf1').innerHTML="W/C Ratio&nbsp="+wcratio+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspConcrete Placing Method:&nbsp<blink>Manual</blink>";
				},1500);
				setTimeout(function()
				{
			    document.getElementById('cf2').style.visibility="visible";
				document.getElementById('cf2').innerHTML="Volume of Coarse Aggregate&nbsp=&nbsp"+ca.toFixed(2)+"m<sup>3</sup>";
				},4500);
				setTimeout(function()
				{
			    document.getElementById('cf3').style.visibility="visible";
				document.getElementById('cf3').innerHTML="Volume of Fine aggregate = 1- Volume of coarse aggregate";
				},6500);
				setTimeout(function()
				{
				document.getElementById('cf3a').style.visibility="visible";
				document.getElementById('cf3a').innerHTML="= 1-"+ca;
				},9000);
				setTimeout(function()
				{
				document.getElementById('cf3a').innerHTML="= "+fa.toFixed(2)+"m<sup>3</sup>";
				document.getElementById('nextButton').style.visibility="visible";
				},10500);
				}
				else if(pump==2)
				{
					fa=1-ca;
					setTimeout(function()
				{
				document.getElementById('cf1').innerHTML="W/C Ratio&nbsp="+wcratio+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspConcrete Placing Method:&nbsp<blink>Pumping</blink>";
				},1500);
				setTimeout(function()
				{
			    document.getElementById('cf2').style.visibility="visible";
				document.getElementById('cf2').innerHTML="Volume of Coarse Aggregate&nbsp=&nbspvolume of coarse aggregate&nbsp* 0.9";
				},3500);
				setTimeout(function()
				{
				document.getElementById('cf2a').style.visibility="visible";
				document.getElementById('cf2a').innerHTML="=&nbsp"+ca+"&nbsp*&nbsp"+0.9;
				ca=ca*0.9;
				},5500);
				setTimeout(function()
				{
				document.getElementById('cf2a').innerHTML="=&nbsp"+ca.toFixed(2)+"m<sup>3</sup>";
				},6500);
				setTimeout(function()
				{
			    document.getElementById('cf3').style.visibility="visible";
				document.getElementById('cf3').innerHTML="Volume of Fine aggregate&nbsp&nbsp&nbsp&nbsp = 1- Volume of coarse aggregate";
				},7500);
				setTimeout(function()
				{
				document.getElementById('cf3a').style.visibility="visible";
				document.getElementById('cf3a').innerHTML="&nbsp&nbsp&nbsp&nbsp= 1-"+ca;
				},10000);
				setTimeout(function()
				{
					
				document.getElementById('cf3a').innerHTML="&nbsp&nbsp&nbsp&nbsp= "+fa.toFixed(2)+"m<sup>3</sup>";
				document.getElementById('nextButton').style.visibility="visible";
				},11500);
				
				}
		     },5000);
			 

		
	}
	else if (simsubscreennum==7)
	{	
             document.getElementById('nextButton').style.visibility="hidden";
			 document.getElementById('cf').style.visibility="hidden";
			 document.getElementById('cf1').style.visibility="hidden";
			 document.getElementById('cf2').style.visibility="hidden";
			 document.getElementById('cf3').style.visibility="hidden";
			 document.getElementById('cf2a').style.visibility="hidden";
			 document.getElementById('cf3a').style.visibility="hidden";
			  document.getElementById('mix').innerHTML="Specific gravity of water = 1&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMass of Water="+watercnt+"Kg<br/><br/>Specific gravity of cement = 3.15&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMass of Cement="+cement.toFixed(2)+"Kg<br/><br/>Specific gravity of coarse aggregate = 2.74<br/><br/>Specific gravity of fine aggregate = 2.7<br/><br/>Specific gravity of admixture = 1.145&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMass of admixture="+spratio;
			  document.getElementById('mix2').style.visibility="visible";
			 step71();			
      
	}
	
	
	else if (simsubscreennum==8)
	{	
             document.getElementById('nextButton').style.visibility="hidden";
			 document.getElementById('mix').style.visibility="hidden";
			 document.getElementById('mix1').style.visibility="hidden";
			 document.getElementById('mix2').style.visibility="hidden";
			 document.getElementById('mix2a').style.visibility="hidden";
			 document.getElementById('mix3').style.visibility="hidden";
			 document.getElementById('mix3a').style.visibility="hidden";
			 document.getElementById('mix4').style.visibility="hidden";
			 document.getElementById('mix4a').style.visibility="hidden";
			 
			 document.getElementById('mix8').innerHTML="Specific gravity of coarse aggregate = 2.74&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspVolume of Coarse Aggregate="+ca.toFixed(4)+"m<sup>3</sup><br/><br/>Specific gravity of fine aggregate = 2.7&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspVolume of Fine Aggregate="+fa.toFixed(4)+"m<sup>3</sup><br/><br/><strong>a)</strong>Volume of Concrete=1m<sup>3</sup><br/><br/><strong>b)</strong>Volume of Cement="+vc.toFixed(4)+"m<sup>3</sup><br/><br/><strong>b)</strong>Volume of Water="+vw.toFixed(4)+"m<sup>3</sup><br/><br/><strong>d)</strong>Volume of Admixture="+vcad.toFixed(4)+"m<sup>3</sup>";
			 step74();
      
	}
	else if (simsubscreennum==9)
	{	
             document.getElementById('nextButton').style.visibility="hidden";
			 document.getElementById('mix8').style.visibility="hidden";
			 document.getElementById('mix5').style.visibility="hidden";
			 document.getElementById('mix5a').style.visibility="hidden";
			 document.getElementById('mix6').style.visibility="hidden";
			 document.getElementById('mix6a').style.visibility="hidden";
			 document.getElementById('mix7').style.visibility="hidden";
			 document.getElementById('mix7a').style.visibility="hidden";
			  document.getElementById('mix9').innerHTML="Mass of Cement ="+cement.toFixed(4)+"Kg<br/><br/>Mass of Fine Aggregate="+fa.toFixed(4)+"kg<br/><br/>Mass of Coarse Aggregate = "+ca.toFixed(4)+"Kg<br/><br/>Mass of Water="+watercnt+"Kg<br/><br/>Mass of Chemical Admixture="+spratio+"Kg";
			  final1();
      
	}
}
    
	
	
	function step1()
	{
		if(document.getElementById('a2').style.visibility=="visible")
		{
			  setTimeout(function()
			  {
				   grd=document.getElementById("b2").value;
					if(grd=="M10") fck=10;
					else if(grd=="M15") fck=15;
					else if(grd=="M20") fck=20;
					else if(grd=="M25") fck=25;
					else if(grd=="M30") fck=30;
					else if(grd=="M35") fck=35;
					else if(grd=="M40") fck=40;
					else if(grd=="M45") fck=45;
					else if(grd=="M50") fck=50;
					else if(grd=="M55") fck=55;
					if(grd=='M15')
					{				   
				      document.getElementById("pmd").disabled=true;  
				      document.getElementById("ps").disabled=true;  
				      document.getElementById("pvs").disabled=true; 
					  document.getElementById("px").disabled=true;
                      document.getElementById('a3').style.visibility="visible";
				     step1a();					  
					}	
				   else if(grd=='M20')
				    {
				   document.getElementById("b2").disabled=true;
				   document.getElementById("px").disabled=true;  
				   document.getElementById('a3').style.visibility="visible";
				   step1a();
				  }
				   else
				  {
				   document.getElementById("b2").disabled=true;
				   document.getElementById('a3').style.visibility="visible";
				   step1a();
				  }
			  },3500);
		 }
	}
	function stepr1()
	{
		if(document.getElementById('a2').style.visibility=="visible")
		{
			 setTimeout(function()
			  {
                    grd=document.getElementById("b2").value;
					if(grd=="M10") fck=10;
					else if(grd=="M15") fck=15;
					else if(grd=="M20") fck=20;
					else if(grd=="M25") fck=25;
					else if(grd=="M30") fck=30;
					else if(grd=="M35") fck=35;
					else if(grd=="M40") fck=40;
					else if(grd=="M45") fck=45;
					else if(grd=="M50") fck=50;
					else if(grd=="M55") fck=55;
		
			 
				  document.getElementById("b2").disabled=true;
				   document.getElementById('a3').style.visibility="visible";
				   step1a();
			 },3500);
		 }
	}		
		 function step1a()
{
		if(document.getElementById('a3').style.visibility=="visible")
		   {
		
			  setTimeout(function()
			  {
				  exp=document.getElementById("b3").value;
				  document.getElementById("b3").disabled=true;
				  document.getElementById('a4').style.visibility="visible";
                 step1b();
			   },5500);
		 }
		 
		function step1b()
		{		
		 if(document.getElementById('a4').style.visibility=="visible")
		   {
		
			  setTimeout(function()
			  {
				  agg=document.getElementById("b4").value;
				  document.getElementById("b4").disabled=true;
				  document.getElementById('a5').style.visibility="visible";
				step1c();
			  },6500);
		   }
		}
		   
		 function step1c()
		 {		 
			    if(document.getElementById('a5').style.visibility=="visible")
		   {
		
			  setTimeout(function()
			  {
				  slump=document.getElementById("b5").value;
				  document.getElementById("b5").disabled=true;
				  document.getElementById('a6').style.visibility="visible";
				  step1d();
				  },7500);
		   }
		 }
		  function step1d()
		 {		 
			    if(document.getElementById('a6').style.visibility=="visible")
		   {
		
			  setTimeout(function()
			  {
				  if(document.getElementById('pman').checked ==false && document.getElementById('ppump').checked==false )
				  {
					  checkform();
				  }
				  else if(document.getElementById('pman').checked)
				  {
					  pump=1;
					  place1=document.getElementById('pman').value;
					  document.getElementById("ppump").disabled=true;
					  checkform(); 
			      }
				  else if(document.getElementById('ppump').checked)
				  {
					  pump=2;
				      place2=document.getElementById('ppump').value;
					  document.getElementById("pman").disabled=true;
                      checkform(); 
				   }
				},3200);
		   }
		 }
				  
	
		}
	
	
	
	 function step2()
		 {
			
		 
		    if(grd=="M10" || grd =="M15")
			   sd=3.5;
		   else if(grd=="M20" || grd=="M25")
			   sd=4.0;
		   else if(grd=="M30" || grd=="M35" || grd == "M40" || grd == "M45" || grd == "M50" || grd == "M55" )
			   sd=5.0;
		   Fck=fck+(1.65*sd);
		   document.getElementById('sd').reset(); 
		   document.getElementById('sd').style.visibility="hidden"; 
           setTimeout(function()
		   {
			 document.getElementById('table1').style.visibility="hidden"; 
			 document.getElementById('sd3').style.visibility="visible"; 
			 document.getElementById('sd3').innerHTML="Fck&nbsp=&nbsp"+fck+"&nbsp+&nbsp"+1.65+"&nbsp(&nbsp"+sd+"&nbsp)"; 
		   },2500);
		   setTimeout(function()
		   {
			 document.getElementById('sd4').style.visibility="visible"; 
			 document.getElementById('sd4').innerHTML="Fck&nbsp=&nbsp<u>"+Fck+"&nbspN/mm<sup>2</sup></u>"; 
			 document.getElementById('nextButton').style.visibility="visible"; 
		   },3200);
		 
		   

		 }
		 
		 
		 
	 function step3()
		 {
			 
			 if(flag==1)
		{
			if(exp=="Mild")
			{
				document.getElementById("wcr").min=0.50;
				document.getElementById("wcr").max=0.60;
				document.getElementById("wcr").step=0.01;
			}
			else if(exp=="Moderate")
			{
				document.getElementById("wcr").min=0.50;
				document.getElementById("wcr").max=0.60;
				document.getElementById("wcr").step=0.01;
			}
			else if(exp=="Severe")
            {
			 	document.getElementById("wcr").min=0.50;
				document.getElementById("wcr").max=0.45;
				document.getElementById("wcr").step=0.01;
			}			
			else if(exp=="Very Severe")
            {
				document.getElementById("wcr").min=0.40;
				document.getElementById("wcr").max=0.45;
				document.getElementById("wcr").step=0.01;
			}			
			else if(exp=="Extreme")
            {
				document.getElementById("wcr").min=0.40;
				document.getElementById("wcr").max=0.45;
				document.getElementById("wcr").step=0.01;
			}		
			}
		else if(flag==2)
		{
			if(exp=="Mild")
			{
				document.getElementById("wcr").min=0.50;
				document.getElementById("wcr").max=0.55;
				document.getElementById("wcr").step=0.01;
			}
			else if(exp=="Moderate")
			{
				document.getElementById("wcr").min=0.45;
				document.getElementById("wcr").max=0.50;
				document.getElementById("wcr").step=0.01;
			}
			else if(exp=="Severe")
            {
			 	document.getElementById("wcr").min=0.40;
				document.getElementById("wcr").max=0.45;
				document.getElementById("wcr").step=0.01;
			}			
			else if(exp=="Very Severe")
            {
				document.getElementById("wcr").min=0.40;
				document.getElementById("wcr").max=0.45;
				document.getElementById("wcr").step=0.01;
			}			
			else if(exp=="Extreme")
            {
				document.getElementById("wcr").min=0.40;
				document.getElementById("wcr").max=0.45;
				document.getElementById("wcr").step=0.01;
			}		
		}
			
		   wcratio=document.getElementById('wcr').value;
		   document.getElementById('wc').reset(); 
		   document.getElementById('wc').style.visibility="hidden";
       setTimeout(function()
	   {	
     	   document.getElementById('table2').style.visibility="hidden"; 
	       document.getElementById('wc2').style.visibility="visible";
		   document.getElementById('wc2').innerHTML="Selected W/C ratio = "+wcratio;
	   },1500);
	   setTimeout(function()
	   {
		  
		  if(flag==1)
		  {
			  if(exp=="Mild")
			  {
				  if(wcratio>=0.50 && wcratio<=0.60)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.60+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
			  
			 else if(exp=="Moderate")
			  {
				  if(wcratio>=0.50 && wcratio<=0.60)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.60+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
			  
			 else if(exp=="Severe")
			  {
				  if(wcratio>=0.45 && wcratio<=0.50)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.50+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
			  
			  if(exp=="Very Severe")
			  {
				  if(wcratio>=0.40 && wcratio<=0.45)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.45+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
			  
			 else if(exp=="Extreme")
			  {
				  if(wcratio>=0.40 && wcratio<=0.45)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.45+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
		  }
		  else if(flag==2)
		  {
			  if(exp=="Mild")
			  {
				  if(wcratio>=0.50 && wcratio<=0.55)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.55+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
			  
			 else if(exp=="Moderate")
			  {
				  if(wcratio>=0.45 && wcratio<=0.50)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.50+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
			  
			 else if(exp=="Severe")
			  {
				  if(wcratio<=0.45 && wcratio>=0.40)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.45+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
			  
			  if(exp=="Very Severe")
			  {
				  if(wcratio>=0.40 && wcratio<=0.45)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.45+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
			  
			 else if(exp=="Extreme")
			  {
				  if(wcratio<=0.45 && wcratio>=0.40)
				  {
					  document.getElementById('wc3').style.visibility="visible"; 
		              document.getElementById('wc3').innerHTML=wcratio+"&lt;="+0.45+"<br/><br/><strong>Valid Entry!!</strong";
		              document.getElementById('nextButton').style.visibility="visible"; 
				  }
				  else 
				  {
			          document.getElementById('wc3').style.visibility="visible"; 
			          document.getElementById('wc3').innerHTML=+wcratio+"<br/><br/><strong>Invalid Entry!!</strong";
			       setTimeout(function()
			      {
			          document.getElementById('wc3').style.visibility="hidden";
		              document.getElementById('wc2').style.visibility="hidden";
			          wcrto();
			       },2500);
		          }
			  }
		  }
			  
		 
		   
		 },2800);
	  }
	  
	  
	  function step4()
		 {
		   watercnt=document.getElementById('water1').value;
		   document.getElementById('waterc').reset(); 
		   document.getElementById('waterc').style.visibility="hidden";
		   document.getElementById('table3').style.visibility="hidden";
       setTimeout(function()
	   {
    			   
	       if(agg=="10mm")
		   {
			   if(watercnt<=208&&watercnt>=187)
			   {
				    if(slump=="75mm" ||slump=="100mm")
				   {
					
					slumpinc();  
				   }
				   else
				   {
				    document.getElementById('wtr3').style.visibility="visible";
		            document.getElementById('wtr3').innerHTML="Water Content = "+watercnt+"kg";
					document.getElementById('wtr2').innerHTML="Selected Slump = "+slump;
					plastic();
				   }
					
			   }
			   else
			   {
				    document.getElementById('wtr3').style.visibility="visible";
		            document.getElementById('wtr3').innerHTML="Invalid Entry!!";
					slumpto();
			   }
			   
		   }
		   else if(agg=="20mm")
		   {
			    if(watercnt<=186&&watercnt>=166)
			   {
				    if(slump=="75mm" ||slump=="100mm")
				   {
					
					 slumpinc();  
				   }
				   else
				   {
				    document.getElementById('wtr3').style.visibility="visible";
		            document.getElementById('wtr3').innerHTML="Water Content = "+watercnt+"kg";
					document.getElementById('wtr2').innerHTML="Selected Slump = "+slump;
					plastic();
				   }
			   }
			   else
			   {
				    document.getElementById('wtr3').style.visibility="visible";
		            document.getElementById('wtr3').innerHTML="Invalid Entry!!";
					slumpto();
			   }
		   }
		    else if(agg=="40mm")
		   {
			    if(watercnt<=165&&watercnt>=146)
			   {
				    if(slump=="75mm" ||slump=="100mm")
				   {
					
				    
					    slumpinc();  
				   }
				   else
				   {
				    document.getElementById('wtr3').style.visibility="visible";
		            document.getElementById('wtr3').innerHTML="Water Content = "+watercnt+"kg";
					document.getElementById('wtr2').innerHTML="Selected Slump = "+slump;
					plastic();
				   }
			   }
			   else
			   {
				    document.getElementById('wtr3').style.visibility="visible";
		            document.getElementById('wtr3').innerHTML="Invalid Entry!!";
					slumpto();
			   }
		   }
			 
		 
	   },5500);
			 
	   }
	   function slumpinc()
	   { 
	   setTimeout(function()
	   {
	   document.getElementById('wtr3').style.visibility="visible";
	   document.getElementById('wtr3').innerHTML="Water Content = "+watercnt+"kg";
	   document.getElementById('wtr2').innerHTML="Selected Slump = "+slump;
	   },2500);
	   setTimeout(function()
	   {
		   if(slump=="75mm")
		   {
			   wcnt=parseFloat(watercnt*0.03);
			   watercnt=eval(watercnt)+eval(wcnt);
			}
			 else if(slump=="100mm")
			 { 
		         wcnt=parseFloat(watercnt*0.06);
				 watercnt=eval(watercnt)+eval(wcnt);
			 }
			 		   document.getElementById('wtr3a').style.visibility="visible";
			 		   document.getElementById('wtr3a').innerHTML="Since Slump>50mm, then  for every 25mm slump water content has to be increased by 3%"; 

	   },5500);
	   
			 setTimeout(function()
			 {
			   document.getElementById('wtr3b').style.visibility="visible";
			   document.getElementById('wtr3b').innerHTML="Now the Water Content = "+watercnt+"kg";
			   plastic();
			 },7500);
	   }
    function plastic()
	{
		 setTimeout(function()
			   {
				    if(slump=="75mm" ||slump=="100mm")
				   {
			           
			          document.getElementById('wtr4').style.visibility="visible";
				   }
				   else
				   {
					    document.getElementById('wtr4').style.left="86px";
			            document.getElementById('wtr4').style.top="260px";
			            document.getElementById('wtr4').style.visibility="visible";
				   }
			   },2500);
			   setTimeout(function()
			   {
				   if(slump=="75mm" ||slump=="100mm")
				   {
			           
					   document.getElementById('ratioc').style.visibility="visible";
				   }
				   else
				   {
					    document.getElementById('ratioc').style.left="86px";
			            document.getElementById('ratioc').style.top="325px";
			            document.getElementById('ratioc').style.visibility="visible";
				   }
			   },3500);
	}
	
	function step41()
	{
		spratio=document.getElementById('ratio1').value;
		watercnt=watercnt-(watercnt*(spratio/100));
		document.getElementById('ratioc').reset(); 
		document.getElementById('ratioc').style.visibility="hidden";
		if(slump=="75mm" ||slump=="100mm")
		{
		document.getElementById('fcontent').innerHTML="Maximum Water Content&nbsp=&nbsp"+watercnt.toFixed(2)+"kg"; 
		document.getElementById('nextButton').style.visibility="visible";
		}
		else
		{
		document.getElementById('fcontent').style.left="275px";
	    document.getElementById('fcontent').style.top="325px";
	    document.getElementById('fcontent').innerHTML="Maximum Water Content&nbsp=&nbsp"+watercnt.toFixed(2)+"kg"; 
		document.getElementById('nextButton').style.visibility="visible";
		}

	}
	function step71()
	{
		setTimeout(function()
		{
		 vc=(cement/3.15)*(1/1000);
	     document.getElementById('mix2').innerHTML="<strong>b)</strong>Volume of Cement&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp = (Mass of Cement/Specific Gravity of Cement) * (1/1000)";
		},3500);
		setTimeout(function()
		{
		 document.getElementById('mix2a').style.visibility="visible";
	     document.getElementById('mix2a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= (&nbsp"+cement+"/&nbsp"+3.15+"&nbsp) * (" +1/1000+ ")";
		},5500);
		setTimeout(function()
		{
	     document.getElementById('mix2a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= "+vc.toFixed(4)+"m<sup>3</sup>";
		 step72();
		},7500);

	}
	function step72()
	{
		setTimeout(function()
		{
		 vw=(watercnt/1)*(1/1000);
		 document.getElementById('mix3').style.visibility="visible";
	     document.getElementById('mix3').innerHTML="<strong>c)</strong>Volume of Water&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp = (Mass of Water/Specific Gravity of Water) * (1/1000)";
		},3500);
		setTimeout(function()
		{
		 document.getElementById('mix3a').style.visibility="visible";
	     document.getElementById('mix3a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= (&nbsp"+watercnt+"/&nbsp"+1+"&nbsp) * (" +1/1000+ ")";
		},5500);
		setTimeout(function()
		{
	     document.getElementById('mix3a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= "+vw.toFixed(4)+"m<sup>3</sup>";
		 step73();
		},7500);

	}
	function step73()
	{
		setTimeout(function()
		{
		 vcad=(spratio/1.145)*(1/1000);
		 document.getElementById('mix4').style.visibility="visible";
	     document.getElementById('mix4').innerHTML="<strong>d)</strong>Volume of chemical admixture<br/>(superplasticizer)(@2.0percent<br/>by mass of cementitious material) = (Mass of chemical admixture/Specific Gravity of admixture) * (1/1000)";
		},3500);
		setTimeout(function()
		{
		 document.getElementById('mix4a').style.visibility="visible";
	     document.getElementById('mix4a').innerHTML=" = (&nbsp"+spratio+"/&nbsp"+1.145+"&nbsp) * (" +1/1000+ ")";
		},5500);
		setTimeout(function()
		{
	     document.getElementById('mix4a').innerHTML=" = "+vcad.toFixed(4)+"m<sup>3</sup>";
		 document.getElementById('nextButton').style.visibility="visible";
		},7500);

	}
	
	function step74()
	{
		setTimeout(function()
		{
		    vall=1-(vc+vw+vcad);
		 document.getElementById('mix5').style.visibility="visible";
		document.getElementById('mix5').innerHTML="<strong>e)</strong>Volume of all in aggregate = {a-(b+c+d)}";
		},3500);
		setTimeout(function()
		{
		 document.getElementById('mix5a').style.visibility="visible";
	     document.getElementById('mix5a').innerHTML="= { "+ 1 +" -( "+vc.toFixed(4)+"+"+vw.toFixed(4)+"+"+vcad.toFixed(4)+") }";
		},5500);
		setTimeout(function()
		{
	     document.getElementById('mix5a').innerHTML="= "+vall.toFixed(4)+"m<sup>3</sup>";
		 step75();
		},7500);

	}
	function step75()
	{
		setTimeout(function()
		{
		mca=vall*ca*2.74*1000;
		 document.getElementById('mix6').style.visibility="visible";
		document.getElementById('mix6').innerHTML="<strong>f)</strong>Mass of Coarse Aggregate = e*Volume of coarse aggregate*Specific gravity of coarse aggregate*1000";
		},3500);
		setTimeout(function()
		{
	     document.getElementById('mix6a').style.visibility="visible";
	     document.getElementById('mix6a').innerHTML="= "+vall.toFixed(4)+"*"+ca.toFixed(4)+"*"+2.74+"*"+1000;
		},5500);
		setTimeout(function()
		{
	     document.getElementById('mix6a').innerHTML="= "+mca.toFixed(4)+"Kg";
		 step76();
		},7500);

	}
	function step76()
	{
		setTimeout(function()
		{
		mfa=vall*fa*2.7*1000;
		 document.getElementById('mix7').style.visibility="visible";
		document.getElementById('mix7').innerHTML="<strong>g)</strong>Mass of Fine Aggregate &nbsp&nbsp&nbsp= e*Volume of fine aggregate*Specific gravity of fine aggregate*1000";
		},3500);
		setTimeout(function()
		{
		 document.getElementById('mix7a').style.visibility="visible";
	     document.getElementById('mix7a').innerHTML="&nbsp&nbsp&nbsp= "+vall.toFixed(4)+"*"+fa.toFixed(4)+"*"+2.7+"*"+1000;
		},5500);
		setTimeout(function()
		{
	     document.getElementById('mix7a').innerHTML="&nbsp&nbsp&nbsp= "+mfa.toFixed(4)+"Kg";
		 document.getElementById('nextButton').style.visibility="visible";
		},7500);

	}
	function final1()
	{
		cmix=cement/cement;
		famix=mfa/cement;
		camix=mca/cement;
		wmix=watercnt/cement;
		admix=spratio/cement;
		setTimeout(function()
		{
		 document.getElementById('mix91').style.visibility="visible";
		document.getElementById('mix91').innerHTML="Water-Cement Ratio= "+wcratio;
		},3500);
		setTimeout(function()
		{
		 document.getElementById('mix92').style.visibility="visible";
	     document.getElementById('mix92').innerHTML="Cement&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= "+cmix.toFixed(4);
		},4500);
		setTimeout(function()
		{
		 document.getElementById('mix93').style.visibility="visible";
	     document.getElementById('mix93').innerHTML="Fine Aggregate&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= "+famix.toFixed(4);
		},5500);
		setTimeout(function()
		{
		 document.getElementById('mix94').style.visibility="visible";
	     document.getElementById('mix94').innerHTML="Coarse Aggregate&nbsp&nbsp&nbsp&nbsp= "+camix.toFixed(4);
		},6500);
		setTimeout(function()
		{
		 document.getElementById('mix95').style.visibility="visible";
	     document.getElementById('mix95').innerHTML="Water&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp= "+famix.toFixed(4);
		},7500);
		setTimeout(function()
		{
		 document.getElementById('mix96').style.visibility="visible";
	     document.getElementById('mix96').innerHTML="Chemical Admixture&nbsp= "+admix.toFixed(4);
		},8500);
	}
	
	
	function checkform()
	{
		if(grd!=""&&exp!=""&&agg!=""&&slump!=""&&pump!=0)
		{
           document.getElementById('nextButton').style.visibility="visible";
		} 			
		else if(grd==""||exp==""||agg==""||slump==""||pump==0)
		{
		 alert("Form Incomplete!!!!\nPlease fill all data");
		 document.getElementById('a2').style.visibility="hidden";
		 document.getElementById('a2').reset();
		 document.getElementById('b2').disabled=false;
         document.getElementById('a3').style.visibility="hidden";
		 document.getElementById('a3').reset();
		 document.getElementById('b3').disabled=false;
         document.getElementById('a4').style.visibility="hidden";
		 document.getElementById('a4').reset();
		 document.getElementById('b4').disabled=false;
         document.getElementById('a5').style.visibility="hidden";
		 document.getElementById('a5').reset();
		 document.getElementById('b5').disabled=false;
         document.getElementById('a6').style.visibility="hidden";
		 document.getElementById('a6').reset();
		 document.getElementById('pman').disabled=false;
		 document.getElementById('ppump').disabled=false;

		 if(flag==1)
		 {
		   document.getElementById('a2').style.visibility="visible";
		   step1();	 
		 }
		 else if(flag==2)
		 {
		   document.getElementById('a2').style.visibility="visible";
		   stepr1();			 		
	     }
}	
					 	
	}
		 
		 
		
	

	
