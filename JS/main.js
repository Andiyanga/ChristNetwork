< !DOCTYPE html >
    <
    html >

    <
    head >
    <
    meta charset = "utf-8" / >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    title > Gracia | Home - Finding More in Uyo! < /title> <
    link rel = "shortcut icon"
href = "Images/favicon.png"
type = "image/x-icon" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1" >
    <
    link rel = "stylesheet"
type = "text/css"
media = "screen"
href = "./CSS/main.css" / >
    <
    link rel = "stylesheet"
href = "./Font-awesome/fontawesome-free-5.11.2-web/css/fontawesome.min.css" / >
    <
    script src = "./JS/main.js" > < /script> <
    script src = "./Jquery/jquery.min.js" > < /script> <
    /head> <
    header > < /header>

<
body >
    <!-- The Navigation Bar elements starts here -->

    <
    div class = "nav-bar" >
    <
    ul >
    <
    li class = "active-main" > < a href = "#" > Home < /a></li >
    <
    li class = "active-main" > < a href = "#" > Targets < /a> <
    div class = "sub-menu" >
    <
    ul >
    <
    li > < a href = "#" > Cosmetics < /a></li >
    <
    li > < a href = "#" > Electronics < /a></li >
    <
    li > < a href = "#" > Hair Saloon < /a></li >
    <
    li > < a href = "#" > Hospitals < /a></li >
    <
    li > < a href = "#" > Photography / Coverage < /a></li >
    <
    li > < a href = "#" > Restaurant < /a></li >
    <
    li > < a href = "#" > Schools < /a></li >

    <
    /ul> <
    /div> <
    /li> <
    li class = "active-main" > < a href = "#" > Meet Vendors < /a></li >
    <
    li class = "active-main" > < a href = "#" > Services < /a></li >
    <
    li class = "active-main" > < a href = "#" > News < /a></li >

    <
    li >
    Search Here < /li>

<
li class = "active-main" > < a href = "#" > Loggin or Register < /a></li >
    <
    /ul> <
    /div>

<!-- The Navigation Bar elements ends here -->




<
div class = "container"
id = "" >
    <
    div class = "sub-container" >
    <
    form >
    <
    script src = "http://www.remitademo.net/payment/v1/remita-pay-inline.bundle.js" > < /script> <
    button type = "button"
onclick = "makePayment()" > Pay < /button> <
    /form> <
    script >
    function makePayment() {
        var paymentEngine = RmPaymentEngine.init({
            key: ‘public key’ ',
            customerId: "140700251",
            firstName: "Lisa",
            lastName: "Spark",
            email: "demo@remita.net",
            narration: "Payment Description",
            amount: 19999,
            onSuccess: function(response) {
                console.log('callback Successful Response', response);
            },
            onError: function(response) {
                console.log('callback Error Response', response);
            },
            onClose: function() {
                console.log("closed");
            }
        });
        paymentEngine.showPaymentWidget();
    } <
    /script>

<
/div> <
div class = "sub-container" > < /div> <
    /div> <
    footer > < /footer>



<
/body>

<
/html>