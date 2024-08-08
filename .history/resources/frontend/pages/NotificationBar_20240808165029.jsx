import style from "../css/notification.module.css";

export default function NotificationBar(props) {
    return (
        <div id={style.notification_bar}>
            <div className={style.nbcontainer}>
                <i className="fa fa-times-circle"></i>
                <p>{props.gsNotificationBarText ?? Great news! Here's something special for you!}</p>
            </div>
        </div>
    );
}
