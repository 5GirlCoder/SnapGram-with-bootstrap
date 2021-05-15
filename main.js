/* This is th js for login page*/ 

function agree()
{
    if (document.getElementById("Checkbox").className == "glyphicon glyphicon-check")
    {
        document.getElementById("Checkbox").className = "glyphicon glyphicon-unchecked";
    }
    else
    {
        document.getElementById("Checkbox").className = "glyphicon glyphicon-check";
    }
}
   
function Login()
{
    userName = document.getElementById("UsernameInput").value;
    
    if (document.getElementById("Checkbox").className == "glyphicon glyphicon-check")
    {
        if(document.getElementById("UsernameInput").innerHTML !== "  ")
        {
            localStorage.setItem("UserName", userName);
            window.location = "Snapgram.html";
        }
    }
    else
    {
        document.getElementById("Error").innerHTML = "Note : please accept the terms and conditions ";
    }
}

