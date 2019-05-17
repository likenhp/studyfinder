<?php
$proxyURL = "https://api.darksky.net/forecast/7acd580a9887c0479c53c3d94bcbf8da/33.728851,-117.765991";

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