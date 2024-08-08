import style from "../css/notification.module.css";

export default function NotificationBar(props) {
    return (
        <div id="notification_bar"">
            <div className="nbcontainer">
                <i className="fa fa-times-circle"></i>
                <p>{props.gsNotificationBarText}</p>
            </div>
        </div>
    );
}
