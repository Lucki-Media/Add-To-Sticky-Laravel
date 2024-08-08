import style from "../css/notification.module.css";



export default function NotificationBar(props) {
    return (

        <style>
        {`
           @keyframes shake-animation {
                0% { transform:translate(0,0) }
                1.78571% { transform:translate(10px,0) }
                3.57143% { transform:translate(0,0) }
                5.35714% { transform:translate(10px,0) }
                7.14286% { transform:translate(0,0) }
                8.92857% { transform:translate(10px,0) }
                10.71429% { transform:translate(0,0) }
                100% { transform:translate(0,0) }
            }

            .lm_vibrating {
                animation: shake-animation 4.72s ease infinite;
            }
            .lm_quantity_picker .quantity-picker .quantity-display{
                padding: 0;
                background-color: #fff;
                width: 28px !important;
                font-size: 14px;
            }
            .lm_quantity_picker .quantity-modifier{
                height: 35px;
                width: 30px;
                border: none;
                font-size: 16px;
                color: black;
                background-color: #fff;
                border-radius: 0;
            }
            .lm_quantity_picker .quantity-picker{
                background-color: #fff;
                border: 1px solid #dddddd8c;
                border-radius:0;
                display: flex;
                align-items: center;
            }
            .lm_bold{
                font-weight: bolder;
            }
            .lm_italic{
                font-style: italic;
            }
            .lm_underline{
                text-decoration: underline;
            }
        .lm-sticky-Bottom{
            box-shadow: rgba(149, 157, 165, 0.4) 0 -8px 24px;
            background: ${gsBgColor};
            height: ${containerHeight}px;
            bottom:  ${gsOffsetValue}px;
        }
        .lm-sticky-Top{
            box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
            background: ${gsBgColor};
            height: ${containerHeight}px;
            top:  ${gsOffsetValue}px;
        }
        .img_size {
            height: ${containerHeight}px;
            margin-right:15px;
            display: flex;
align-items: center;
        }
        .font_option {
            color: ${gsTitleColor};
            font-size: ${gsFontsize}px;
        }
        .label_color{
            color: ${gsTitleColor};
        }
        .lm_sticky_p_color{
            color: ${gsPriceColor};
            font-size: ${gsPriceFontsize}px;
        }
        .lm_btn{
            width: ${btnWidthValue}px;
            height: ${btnheightValue}px;
            font-size: ${btnFontsize}px;
            background: ${btnBgColor};
            border-Width: ${btnBorderThickness}px;
            border-color: ${btnBorderColor};
            border-radius: ${btnBorderRadius}px;
            color: ${btnTextColor};
        }
        .lm_btn:hover{
            border-color: ${btnBorderHoverColor};
            background: ${btnBgHoverColor};
            color: ${btnTexthoverColor};
        }
        .lm_options {
            position: relative;
        }
        .lm_options .pro_select_menu{
            display: inline-block;
            width: 100px;
        }
        .lm_options .pro_select_menu > div{
            border: 1px solid #dddddd8c;
            font-size: 12px;
            min-height: 36px;
            box-shadow: none;

        }
        .css-1jqq78o-placeholder{
            font-size:12px;
        }
        .css-lkh0o5-menu{
            margin: 0 auto;
        }
        .css-8h3gbh-menu{
            margin: 0 auto;
        }
        .css-1xc3v61-indicatorContainer{
            padding: 0 8px;
        }

        `}
    </style>
    
        <div id="notification_bar">
            <div className="nbcontainer">
                <i className="fa fa-times-circle"></i>
                <p>{props.gsNotificationBarText}</p>
            </div>
        </div>
    );
}
