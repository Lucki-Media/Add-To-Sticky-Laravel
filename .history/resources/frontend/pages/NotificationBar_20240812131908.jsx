import style from "../css/notification.module.css";

export default function NotificationBar(props) {
    return (
        <>
            <style>
                {`
                #notification_bar {
                    position: relative;
                    width:100%;
                    background-color:${props.gsNotificationBarBgColor};
                    clear: both;
                    z-index: 999;
                }
                
                #notification_bar .nbcontainer {
                    margin: 0 auto;
                    padding: ${props.gsNotificationBarHeight};
                }
                
                #notification_bar p {
                    display: block;
                    font-size: ${props.gsNotificationBarFontSize};
                    font-weight: 300;
                    margin: 0 0px 0 0;
                    padding: 0;
                    line-height: 20px;
                    color: ${props.gsNotificationBarTextColor};
                    text-align: center;
                    
                }
                #notification_bar p.nb_italic{
                    font-style: italic;
                }
                #notification_bar p.nb_bolder{
                    font-weight: bolder;
                }
            `}
            </style>

            <div id="notification_bar">
                <div className="nbcontainer">
                    <i className="fa fa-times-circle"></i>
                    <p
                        className={`${
                            props.gsNotificationBarItalic === true
                                ? "nb_italic"
                                : ""
                        } ${
                            props.gsNotificationBarBold === true
                                ? "nb_bolder"
                                : ""
                        } `}
                    >
                        {props.gsNotificationBarText}
                    </p>
                </div>
            </div>
        </>
    );
}
