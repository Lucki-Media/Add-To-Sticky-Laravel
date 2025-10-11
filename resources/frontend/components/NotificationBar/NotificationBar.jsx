import style from "../../css/notification.module.css";

export default function NotificationBar(props) {
    return (
        <>
            <style>
                {`
                #notification_bar {
                    position: relative;
                    width:100%;
                    background-color:${props.gsNotificationBarBgColor ?? "#000000"
                    };
                    clear: both;
                    z-index: 999;
                }
                
                #notification_bar .nbcontainer {
                    margin: 0 auto;
                    padding: ${props.gsNotificationBarHeight ?? 5}px;
                }
                
                #notification_bar p {
                    display: block;
                    font-size: ${props.gsNotificationBarFontSize ?? 12}px;
                    font-weight: 300;
                    margin: 0 0px 0 0;
                    padding: 0;
                    line-height: 20px;
                    color: ${props.gsNotificationBarTextColor ?? "#ffffff"};
                    text-align: center;
                    
                }
                #notification_bar p.nb_italic{
                    font-style: italic;
                }
                #notification_bar p.nb_bolder{
                    font-weight: bolder;
                }


                .lm-sticky-pos-Bottom #notification_bar{
                        position: absolute;
                        bottom: ${props.containerHeight}px;
                    }
                
                   @media screen and (max-width: 767px) { 
                     .lm-sticky-pos-Bottom #notification_bar{
                       bottom: 106px;
                     }
                   }


            `}
            </style>

            <div id="notification_bar">
                <div className="nbcontainer">
                    <p
                        className={`${props.gsNotificationBarItalic === true
                                ? "nb_italic"
                                : ""
                            } ${props.gsNotificationBarBold === true
                                ? "nb_bolder"
                                : ""
                            } `}
                    >
                        {props.gsNotificationBarText ??
                            "Yayy! Product Added to Cart!"}
                    </p>
                </div>
            </div>
        </>
    );
}
