<?php
//questions?  Ask Dan Paschal daniel.paschal@learningfuze.com
$proxyURL = "https://api.darksky.net/forecast/fe42c988ad036f09376551f306c17ae9/33.728851,-117.765991";
//$proxyURL = "https://api.fortnitetracker.com/v1/profile/{$_GET['platform']}/{$_GET['player']}";

header("Access-Control-Allow-Origin: *");

$headers = apache_request_headers();

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "$proxyURL",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_SSL_VERIFYHOST => 0,
  CURLOPT_SSL_VERIFYPEER => 0,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
$err = curl_error($curl);
echo $err;
echo $response;
?>