<?php

require 'vendor/autoload.php';

session_start();

$config = array(

        // change the values below to ones for your application
        'consumer_key'    => '2XrxFf47TVB5zbNrpkT651X8b',
        'consumer_secret' => '0DbIjUT74MMxSurrlHfWrxfj0cYEEeUeVJW0JHSy1YDRYDycWR',
        'token'           => '8268642-NUXiZY0S5cMl5RVppVv0DZaEW5omxNNVv5OEK1i9ms',
        'secret'          => 'JL47yBIKrnvn9GYZVo1S7mtGdMoWWORdGGhC1JGkYNshL',
        'bearer'          => 'AAAAAAAAAAAAAAAAAAAAADIuxAAAAAAATBt8l9AEI%2BCEL6edlRQJ0xtN1vk%3DCBuHTdWh049HU60ELveFFj62rwE2S9WhBh4iqi3sODVj44y2kl',

        'user_agent'      => 'tmhOAuth ' . tmhOAuth::VERSION . ' Examples 0.1',
      );



$tmhOAuth = new tmhOAuth($config);