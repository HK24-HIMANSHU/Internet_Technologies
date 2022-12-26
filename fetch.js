function show_message(type,text){
    if(type=="error"){
        var messageBox=document.getElementById("errorMessage");
    }
    else{
        var messageBox=document.getElementById("successMessage");;
    }
    messageBox.innerHTML=text;
    messageBox.style.display="block";
    
    
    setTimeout(function(){
        messageBox.style.display="none";
    },3000)
}


function submitNFT(){
    var nftName=document.getElementById("nftName").value;
    var nftPrice=document.getElementById("nftPrice").value;
    var nftImage=document.getElementById("nftImage").value;

    if(nftName == "" || nftPrice==""){
        show_message("error","Fill all the detail");
        return false;
    }

    else{
        var formData={
            "name":nftName,
            "price":nftPrice,
            "owner": "testOwner",
            "user_id":"1",
            "image":"testimage",
        }
       console.log(formData);
        jsondata=JSON.stringify(formData);
        console.log(jsondata);
        fetch('./action.php',{
            method: 'POST',
            body: jsondata,
            
            headers: {
                'Content-type' :'application/json',
            },
        }).then((respnse)=>respnse.JSON)
        
        .then((result)=>{
            if(result.insert=='success'){
                show_message('success',"Successfully uploaded NFT");
            }else{
                show_message('error',"Unable to uplaod NFT");
            }
        })
        .catch((error)=>{
            console.log(error.JSON);
            show_message('error',"Unable to contact database");
        })
    }
    
    //document.getElementById("myForm").display="none"
}