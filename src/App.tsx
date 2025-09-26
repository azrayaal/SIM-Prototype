import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
// import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import BasicTables2 from "./pages/Tables/BasicTables2";
import FormElements from "./pages/Forms/FormElements";
// import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import EmployeeList from "./pages/EmployeeList";
import EmployeeRequest from "./pages/EmployeeRequest";
import EmployeeActivation from "./pages/EmployeeActivation";
import RequestKaryawanDetail from "./components/karyawan/RequestDetail";
import RequestKaryawanForm from "./components/karyawan/RequestAdd";
import ContractList from "./pages/Contract/ContractList";
import ContractRequest from "./pages/Contract/ContractRequest";
import KontrakDetail from "./components/kontrak/detail/ContractListDetail";
import RequestTableList from "./pages/Absent/Request/RequestList";
import LeaveRequestList from "./pages/Absent/Request/LeaveRequest";
import OvertimeRequestList from "./pages/Absent/Request/OvertimeRequest";
import RequestTableList2 from "./pages/Absent/Approval/RequestList";
import LeaveRequestList2 from "./pages/Absent/Approval/LeaveRequest";
import OvertimeRequestList2 from "./pages/Absent/Approval/OvertimeRequest";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/detail-employee" element={<UserProfiles />} />
            <Route path="/daftar-karyawan" element={<EmployeeList />} />
            <Route path="/daftar-karyawan/:id" element={<EmployeeList />} />
            <Route path="/pengajuan-karyawan" element={<EmployeeRequest />} />
            <Route
              path="/pengajuan-karyawan/:id"
              element={<RequestKaryawanDetail />}
            />
            <Route
              path="/pengajuan-karyawan/tambah"
              element={<RequestKaryawanForm />}
            />
            <Route path="/aktivasi-karyawan" element={<EmployeeActivation />} />
            <Route path="/kontrak" element={<ContractList />} />
            <Route path="/kontrak/:id" element={<KontrakDetail />} />
            <Route path="/pengajuan-kontrak" element={<ContractRequest />} />
            <Route
              path="/pengajuan-kontrak/tambah"
              element={<ContractRequest />}
            />
            {/* <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} /> */}

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />
            <Route path="/basic-tables2" element={<BasicTables2 />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />

            {/* Absent */}
            <Route path="/pengajuan-absen" element={<RequestTableList />} />
            <Route path="/pengajuan-cuti" element={<LeaveRequestList />} />
            <Route path="/pengajuan-lembur" element={<OvertimeRequestList />} />

            <Route path="/konfirmasi-absen" element={<RequestTableList2 />} />
            <Route path="/konfirmasi-cuti" element={<LeaveRequestList2 />} />
            <Route
              path="/konfirmasi-lembur"
              element={<OvertimeRequestList2 />}
            />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
