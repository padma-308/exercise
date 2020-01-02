
function checkName()
{
	 // var name=document.getElementById("un").value;
	  var name=$('#un').val();
	  
	 
	  for(i=0;i<name.length;i++)
		  {
		    var ch=name.charAt(i);
		    //alert(ch);
		    if( (ch <= 'Z' && ch >='A') || (ch <= 'z' && ch >='a'))
		    	{
		      	//document.getElementById("ne").innerHTML="";
				$('#ne').html();
				
		    	}
		  
		    else
		    	{
		    	//document.getElementById("ne").innerHTML="Invalid Character";
				$('#ne').html("invalid character");
		    	}
		  }

}

function checkEmptyFields()
{
	  //var name=document.getElementById("un").value;
	  var name=$('#un').val();
	  //var pwd=document.getElementById("pwd").value;
	  var pwd=$('#pwd').val();
	  //var email=document.getElementById("eml").value;
	  var email=$('#eml').val();
	  
	  var namePresent=true;
	  var pwdPresent=true;
	  var emailPresent=true;
	  
	  //alert(name+" "+pwd+ " "+email);
	  if(name==null || name.length<=0)
		  namePresent=false;
	  
	  if(pwd==null || pwd.length<=0)
		  pwdPresent=false;
	
	  if(email==null || email.length<=0)
		  emailPresent=false;
	  
	  if(!namePresent || !pwdPresent || !emailPresent)
		  {
		   document.getElementById("mem").innerHTML="* marked fields are mandatory";
		   $('#mem').html("*marked fields are manditory");
		   return false;		  
		  }
	  
	  else
		  {
		   return true;
		  }
}