
function loginfunc(){
    window.location.href="plist.html";
}


  var likevar1 = document.getElementById('like')
  function toggle1()
  {
    if(likevar1.style.color=="red")
    {
        likevar1.style.color="grey"
    }
    else
    {
        likevar1.style.color="red"
    }
  }


  function displaynext()
  {
    const locationInput = document.getElementById('locationInput').value;
    if(locationInput=="Bangalore")
    {
        window.location.href="bangalore.html";
    }
    else if(locationInput=="Chennai")
    {
        window.location.href="chennai.html";
    }
    else if(locationInput=="Pune")
    {
        window.location.href="pune.html";
    }
    else if(locationInput=="Goa")
    {
        window.location.href="Goa.html";
    }
    else
    {
        window.location.href="plist.html";
    }
  }