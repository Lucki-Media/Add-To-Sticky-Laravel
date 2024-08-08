import style from "../css/notificationbar.module.css";

export default function NotificationBar() {
    return (
        <div id={style.notification_bar}>
            <div className={style.nbcontainer}>
                <i className="fa fa-times-circle"></i>
                <p>
                    Write for Mobisium &amp; earn <strong> Rs. 150</strong> and
                    more for every Published article!
                </p>
            </div>
        </div>
    );
}
