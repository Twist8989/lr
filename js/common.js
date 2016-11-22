//universal ajax call function
function ajax_call(path, jsonObj)
{
    var retr;$.ajax({
    type: 'POST',
    url: path,
    data: JSON.stringify(jsonObj),
    contentType: "application/json",
    async: false,
    success: function(data){
        retr = data;
    }
});
    return retr;
}
//form serilize data to array
function getFormData($form)
{
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });
    return indexed_array;
}
//call alert message div
function call_message(type, message)
{
    window.scrollTo(0,0);
    $('#div-alert-success, #div-alert-warning, #div-alert-danger').hide( "fast" );
    $('#p-alert-'+type).html(message);
    $('#div-alert-'+type).show( "slow" );
}
//close alert message div
function close_message()
{
    $('#div-alert-success, #div-alert-warning, #div-alert-danger').hide('fast');
}