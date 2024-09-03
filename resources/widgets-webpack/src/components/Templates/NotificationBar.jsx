export default function NotificationBar(props) {
    return (
        <>
            <style>
                {`
                #notification_bar-Top {
                    position: relative;
                    width:100%;
                    background-color:${props.gsNotificationBarBgColor};
                    clear: both;
                    z-index: 999;
                }

                #notification_bar-Bottom {
                    position: fixed;
                    width: 100%;
                    background-color: ${props.gsNotificationBarBgColor};
                    clear: both;
                    z-index: 999;
                    bottom: ${props.containerHeight}px;
                }
                
                #notification_bar-Top .nbcontainer , #notification_bar-Bottom .nbcontainer{
                    margin: 0 auto;
                    padding: ${props.gsNotificationBarHeight}px;
                }
                
                #notification_bar-Top p , #notification_bar-Bottom p{
                    display: block;
                    font-size: ${props.gsNotificationBarFontSize}px;
                    font-weight: 300;
                    margin: 0 0px 0 0;
                    padding: 0;
                    line-height: 20px;
                    color: ${props.gsNotificationBarTextColor};
                    text-align: center;
                    
                }
                #notification_bar-Top p.nb_italic , #notification_bar-Bottom p.nb_italic{
                    font-style: italic;
                }
                #notification_bar-Top p.nb_bolder , #notification_bar-Bottom p.nb_bolder{
                    font-weight: bolder;
                }
            `}
            </style>

            <div id={`notification_bar-${props.position}`}>
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
