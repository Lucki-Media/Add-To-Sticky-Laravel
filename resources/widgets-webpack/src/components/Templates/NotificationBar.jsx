export default function NotificationBar(props) {
    return (
        <>
            <style>
                {`
                #lm_notification_bar-Top {
                    position: relative;
                    width:100%;
                    background-color:${props.gsNotificationBarBgColor};
                    clear: both;
                    z-index: -1;
                }

                #lm_notification_bar-Bottom {
                    position: fixed;
                    width: 100%;
                    background-color: ${props.gsNotificationBarBgColor};
                    clear: both;
                    z-index: 999;
                    bottom: ${props.containerHeight}px;
                }
                
                #lm_notification_bar-Top .lm_nbcontainer , #lm_notification_bar-Bottom .lm_nbcontainer{
                    margin: 0 auto;
                    padding: ${props.gsNotificationBarHeight}px;
                }
                
                #lm_notification_bar-Top p , #lm_notification_bar-Bottom p{
                    display: block;
                    font-size: ${props.gsNotificationBarFontSize}px;
                    font-weight: 300;
                    margin: 0 0px 0 0;
                    padding: 0;
                    line-height: 20px;
                    color: ${props.gsNotificationBarTextColor};
                    text-align: center;
                    
                }
                #lm_notification_bar-Top p.lm_nb_italic , #lm_notification_bar-Bottom p.lm_nb_italic{
                    font-style: italic;
                }
                #lm_notification_bar-Top p.lm_nb_bolder , #lm_notification_bar-Bottom p.lm_nb_bolder{
                    font-weight: bolder;
                }

                .lm_font_class {
                    font-family: var(--font-body-family) ;
                }

                @keyframes slideTop {
                    from {
                        top: -100%; 
                    }
                    to {
                        top: 0; 
                    }
                }

                @keyframes slideBottom {
                    from {
                        top: 0; 
                    }
                    to {
                        top: -100%; 
                    }
                }

                .lm_nb_open {
                    // position: fixed; 
                    // top: -100%; 
                    // left: 0;
                    // right: 0;
                    animation: slideTop 0.5s ease-in-out forwards; 
                }

                .lm_nb_close {
                    // position: fixed;
                    // top: 0; 
                    // left: 0;
                    // right: 0;
                    animation: slideBottom 0.5s ease-in-out forwards; 
                }
            `}
            </style>

            <div id={`lm_notification_bar-${props.position}`} className="lm_nb_open">
                <div className="lm_nbcontainer lm_font_class">
                    <p
                        className={`${
                            props.gsNotificationBarItalic === true
                                ? "lm_nb_italic"
                                : ""
                        } ${
                            props.gsNotificationBarBold === true
                                ? "lm_nb_bolder"
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
