import style from "../css/notification.module.css";

export default function NotificationBar(props) {
    return (
        <>
            <style>
                {`
                #notification_bar {
                    position: relative;
                    width:100%;
                    background-color: #a7434b;
                    clear: both;
                    z-index: 999;
                }
                
                #notification_bar .nbcontainer {
                    margin: 0 auto;
                    padding: 5px;
                }
                
                #notification_bar p {
                    display: block;
                    font-size: 12px;
                    font-weight: 300;
                    margin: 0 0px 0 0;
                    padding: 0;
                    line-height: 20px;
                    color: #fff;
                    text-align: center;
                    
                }
                #notification_bar p.nb_italic{
                    font-style: italic;
                }
                #notification_bar p.nb_italic{
                    font-style: italic;
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
                        } `}
                    >
                        {props.gsNotificationBarText}
                    </p>
                </div>
            </div>
        </>
    );
}
