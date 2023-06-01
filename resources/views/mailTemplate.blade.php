<!doctype html>
<html lang="en-US">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Customer Information</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css">
    <style type="text/css">
        a:hover {text-decoration: underline !important;}
        body{
            background-image: url("https://freshly.luckistore.in/images/api_images/body-bg-image.png");
            background-repeat: no-repeat;
            background-position: center center;
    /* height: 100%; */
            background-size: contain;
        }
       table{
           background-color: transparent;
       }
    </style>
</head>

<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
    <!--100% body table-->
    <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
        style="font-family: 'Open Sans', sans-serif;@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Playfair+Display:ital,wght@0,400;1,700&display=swap');">

            <td>
                <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%";background-image:"https://designmodo.com/demo/emailtemplate/images/header-background.jpg" border="0"
                    align="center" cellpadding="0" cellspacing="0" >
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:560px;background:#fff; border-radius:8px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="text-align:center;">
                                        <h1 style="max-width:560px;font-family: 'Rubik',sans-serif;font-size:30px;font-weight: 400;color: #FFF;background-color:#03696D;margin: 0 auto;padding: 40px 0;border-radius: 8px;">LM Request Quote & Hide Price</h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:560px;background:#fff; border-radius:8px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                <tr>
                                    <td style="padding:60px 70px;">
                                        <h1 style="margin-bottom:30px;font-size:36px;text-align:left;color:#03696D;font-family: 'Inter', sans-serif;font-weight: 700;">One More<br> Installation!</h1>
                                        <p style="color:#455056; font-size:15px;line-height:24px; margin:0;text-align: left;">
                                            Hooray !!
                                            <br><br>
                                            We would like to inform you that a new user has installed your app.
                                            <br><br>
                                            Visit the store at <b><a href="{{ $data['shop_name'] }}">{{ $data['shop_name'] }}</a></b>
                                            <br>
                                            You can send mail to the customer on {{ $data['shop_email'] }}
                                            Please take appropriate actions to welcome and assist the new user.
                                            <br><br>
                                            Please Note that, This mail has been sent to you just for your information.
                                            <br><br>
                                            Thank you.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="height:20px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                style="max-width:560px; text-align:center;">
                                <tr>
                                    <td style="padding:20px 0px;">
                                        <h1 style="font-family: 'Rubik',sans-serif;font-size:30px;font-weight: 400;text-align: center;">LM Request Quote & Hide Price</h1>
                                        <p style="color:#455056; font-size:10px;line-height:20px; margin:0;text-align:center;">
                                            You received this message because someone has installed your app LM Request A Quote & Hide Price on their Shopify Store.
                                        </p>
                                        <p style="color:#455056; font-size:10px;line-height:20px; margin:0;text-align:center;">
                                            © 2023 Sent from Luckimedia with ❤️ 
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
