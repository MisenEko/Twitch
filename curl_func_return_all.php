<?php

function doCurl(string $url, string $type = 'GET', array $headers = [], array $post_fields = [], string $user_agent = '', string $referrer = '', bool $follow = true, bool $use_ssl = false, int $con_timeout = 10, int $timeout = 40)
{
   $crl = curl_init($url);
    curl_setopt($crl, CURLOPT_CUSTOMREQUEST, $type);
    curl_setopt($crl, CURLOPT_USERAGENT, $user_agent);
    curl_setopt($crl, CURLOPT_REFERER, $referrer);
    if ($type == 'POST') {
        curl_setopt($crl, CURLOPT_POST, true);
        if (!empty($post_fields)) {
            curl_setopt($crl, CURLOPT_POSTFIELDS, $post_fields);
        }
    }
    if (!empty($headers)) {
        curl_setopt($crl, CURLOPT_HTTPHEADER, $headers);
    }
    curl_setopt($crl, CURLOPT_FOLLOWLOCATION, $follow);
    curl_setopt($crl, CURLOPT_CONNECTTIMEOUT, $con_timeout);
    curl_setopt($crl, CURLOPT_TIMEOUT, $timeout);
    curl_setopt($crl, CURLOPT_SSL_VERIFYHOST, $use_ssl);
    curl_setopt($crl, CURLOPT_SSL_VERIFYPEER, $use_ssl);
    curl_setopt($crl, CURLOPT_ENCODING, 'gzip,deflate'); 
    curl_setopt($crl, CURLOPT_RETURNTRANSFER, true);
    $call_response = curl_exec($crl);
    curl_close($crl);
    return $call_response;//Return data
}