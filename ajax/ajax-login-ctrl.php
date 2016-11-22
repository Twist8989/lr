<?php
$f = json_decode(file_get_contents('php://input'), true);
call_user_func($f['funct'], $f['parameters']);

function login($data)
{
    $response = array();

    $response['status'] = 'success';
    $response['msg'] = 'Successfully logged in.';
    echo json_encode($response);
}
?>