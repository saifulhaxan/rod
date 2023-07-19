import { useState, useEffect } from "react";

import { DashboardLayout } from '../../Components/Layout/DashboardLayout';
import { notifications } from '../../Config/Data';

import NotificationCard from "../../Components/NotificationCard";

import './style.css'

const Notifications = () => {

  const [notificationState, setNotificationState] = useState([])
  const [notificationType, setNotificationType] = useState('all')

  useEffect(() => {

    document.title = 'Rod Fin | Notifications';

    setNotificationState(notifications)
  }, [])

  return (
    <div>
      <DashboardLayout>
        <div className="dashCard">
          <div className="container-fluid">
            <div className="row mb-3">
              <div className="col-12">
                <h2 className="mainTitle">Notifications</h2>
              </div>
            </div>
            <div className="row">
              {notificationState.map((notification, index) => (
                <>
                  <div className="col-12" key={index}>
                    <NotificationCard text={notification.text} date={notification.date} time={notification.time} read={notification.read} image={notification.userImage} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>


      </DashboardLayout>
    </div>
  )
}

export default Notifications;
