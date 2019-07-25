Stripe.setPublishableKey('pk_test_bQacApzIFsYsfd4HhZ6B3Wuy00znUFA2XP');

var $form = $('#checkout-form');

$form.submit(function(event){
    $('#charge-error').removeClass('invisible');
    $form.find('button').prop('disabled', true); //to avoid  multiple submission 
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val(),
    },stripeResponseHandler);
    return false;
})
 
function stripeResponseHandler(status, response){
    if (response.error){ //problem
        $('#charge-error').text(response.error.message);
        $('#charge-error').removeClass('invisible');
        $form.find('button').prop('disabled', false);//re-enable button
    }else {//token was created

        //get token id
        var token = response.id;

        //inserting token into the form so it get submitted to the server
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        //submit the form
        $form.get(0).submit();
    }
}