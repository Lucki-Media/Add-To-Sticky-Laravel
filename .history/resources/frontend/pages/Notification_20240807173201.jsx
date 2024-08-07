import style from "../css/notification.module.css";

export default function Notification() {
    return (
        <div id={style.notification_bar}>
            <div className={style.container}>
                <i className="fa fa-times-circle"></i>
                <p>
                    Write for Mobisium &amp; earn <strong> Rs. 150</strong> and
                    more for every Published article!
                </p>
            </div>
        </div>
    );
}
