<?php 



$Name = $_REQUEST['Name'];
$Age = $_REQUEST['Age']; 
$Email = $_REQUEST['Email'];    



if(isset($_POST['Start Editing'])){ 

  
    $host = "localhost"; 
    $user = "root"; 
    $password =""; 
    $db = "vero_data";


    
    @$conn= mysqli_connect($host,$user,$password,$db);
   

   
    $insert= "insert into editors values('$Name','$Age','$Email')";
    
   
    mysqli_query($conn,$insert);

   

  
    if($conn){
       
        echo("<h1 style=color:green;> Your Registartion is Done!</h1>");
        

    }
    else{
        echo("<h1 style=color:red;> Your Registartion is Failed❌</h1>");
    }
   
}
/
?>

