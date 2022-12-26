<?php
$servername = "localhost"; 
$dbname = "nft_market";
$username = "root";  
$password = "";  
$conn = mysqli_connect('localhost','root','',"nft_market") or die("Connection Failed.");

$input = file_get_contents('php://input');
$decode = json_decode($input, true);

$name=$decode['nftName'];
$price=(double)$decode['nftPrice'];
$owner=$decode['owner'];
$user_id=(int)$decode['user_id'];
$image=$decode['image'];

$sql= "SELECT user_id FROM nft_details";

//$sql="INSERT INTO tbl_nft(name, price, owner, user_id, image) VALUES ('{$name}','{$price}','{$owner}','{$user_id}','{$image}');";
// $stmt = $conn->prepare($sql);
// $stmt->bind_param("s", $user_id);
// $stmt->execute();
if(mysqli_query($conn,$sql)){
    echo "connected";
    echo json_encode(array('insert'=>'success'));
}else{
    echo json_encode(array('insert'=>'error'));
}
?>