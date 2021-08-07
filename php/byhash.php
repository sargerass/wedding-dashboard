<?php

require 'twconfig.php';

if (!empty($_GET['q'])) {
	$q = $_GET['q'];
	$_SESSION['q'] = $q;
  $code = $tmhOAuth->apponly_request(array(
    'url' => $tmhOAuth->url('1.1/search/tweets'),
    'params' => array(
      'q' => '#'.$q,
      'count' => 100
    )
  ));
  if ($code == 200){  
  	$raw = $tmhOAuth->response['response'];
  	$data = json_decode($raw, true);
  	$_SESSION['since'] = $data['search_metadata']['max_id_str'];
  	// error_log(print_r($data,TRUE));
  	header('Content-Type: application/json');
  	//echo $raw;
    echo json_encode($data['statuses']);
  	exit;
  }else{
  	exit("mala consulta");
  }
}else{
	exit("Error..");
}