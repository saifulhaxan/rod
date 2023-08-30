import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "../Screens/Auth/Login";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import { Dashboard } from "../Screens/Dashboard";
import { RolesManagement } from "../Screens/RolesManagement";
import UserDetails from "../Screens/RolesManagement/UserDetails";
import { TaskView } from "../Screens/ProjectView";
import TaskDetails from "../Screens/ProjectView/TaskDetails";

import { DepartmentManagement } from "../Screens/DepartmentManagement";
import DepartDetails from "../Screens/DepartmentManagement/DepartDetails";
import { UserManagement } from "../Screens/UserManagement";
import UserManagementDetail from "../Screens/RolesManagement/UserDetails";
import { Feedbacks } from "../Screens/Feedbacks";
import FeedbackDetails from "../Screens/Feedbacks/FeedbackDetails";
import Profile from "../Screens/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";
import Notifications from "../Screens/Notifications";
import Error from "../Screens/Error";


export default function AdminRouter() {
  return (
    <BrowserRouter basename="/projectCamp">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/user-management/user-details/:id" element={<UserManagementDetail />} />

        <Route path="/task-view" element={<TaskView />} />
        <Route path="/task-view/task-details/:id" element={<TaskDetails />} />

        <Route path="/roles-management" element={<RolesManagement />} />
        <Route path="/roles-management/user-details/:id" element={<UserDetails />} />

        <Route path="/department-management" element={<DepartmentManagement />} />
        <Route path="/department-management/depart-details/:id" element={<DepartDetails />} />

        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/feedbacks/feedback-details/:id" element={<FeedbackDetails />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit-profile" element={<EditProfile />} />
        <Route path="/profile/change-password" element={<ChangePassword />} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
