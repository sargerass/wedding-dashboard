<?php

require 'twconfig.php';

$q = !empty($_SESSION['q']) ? $_SESSION['q'] : '';
$since = !empty($_SESSION['since']) ? $_SESSION['since'] : '';

if (!empty($_GET['q']) && $q != $_GET['q'] ) {
	$q = $_GET['q'];
	$_SESSION['q'] = $q;
	$since = '';
}
if(empty($q)){
	throw new Exception("Error Processing Request", 1);
	exit;
}

$params = array(
	'q' => '#'.$q,
	'count' => 100
	);
if(!empty($since))
	$params['since_id'] = $since;


$code = $tmhOAuth->apponly_request(array(
	'url' => $tmhOAuth->url('1.1/search/tweets'),
	'params' => $params
	));
if ($code == 200){  
	$raw = $tmhOAuth->response['response'];
	$data = json_decode($raw, true);
	$_SESSION['since'] = $data['search_metadata']['max_id_str'];
	// error_log(print_r($_SESSION,TRUE));
	// error_log(print_r($data,TRUE));
	header('Content-Type: application/json');
	echo json_encode($data['statuses']);
	exit;
}else{
	exit("mala consulta");
}