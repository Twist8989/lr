$(function() {
    $('body').vegas({
        delay: 6000,
        slides: [
            { src: 'img/img01.jpg' },
            { src: 'img/img02.jpg' },
            { src: 'img/img03.jpg' }
        ]
    });

    $('#form-login').submit(function(event){
        var $form = $("#form-login");
        var jsonObj = new Object();
        var path = 'ajax/ajax-login-ctrl.php';
        jsonObj.funct = "login";
        jsonObj.parameters = {arr:getFormData($form)};
        var response = jQuery.parseJSON(ajax_call(path, jsonObj));
        if(response.status=='success'){
            call_message('success', response.msg);
        }
        console.log(response);
        event.preventDefault();
    });
});