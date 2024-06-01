import { Link, Location, useLocation } from "react-router-dom"
import { RiCoupon3Fill , RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri"
import { AiFillFileText } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { IconType } from "react-icons"
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
// import { HiMenuAlt4 } from "react-icons/hi";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <DivOne location={location} />
      <DivTwo location={location} />
      <DivThree location={location} />
    </aside>
  )
}

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li url="/admin/dashboard"
        text='Dashboard'
        Icon={RiDashboardFill}
        location={location} />
      <Li url="/admin/products"
        text='Products'
        Icon={RiShoppingBag3Fill}
        location={location} />
      <Li url="/admin/customers"
        text='Customers'
        Icon={IoIosPeople}
        location={location} />
      <Li url="/admin/transaction"
        text='Transaction'
        Icon={AiFillFileText}
        location={location} />
    </ul>
  </div>
)
const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li url="/admin/chart/bar"
        text='Bar Chart'
        Icon={FaChartBar}
        location={location} />
      <Li url="/admin/chart/pie"
        text='Pie Chart'
        Icon={FaChartPie}
        location={location} />
      <Li url="/admin/chart/line"
        text='Line Chart'
        Icon={FaChartLine}
        location={location} />
    </ul>
  </div>
)
const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li url="/admin/app/stopwatch"
        text='Stopwatch'
        Icon={FaStopwatch}
        location={location} />
      <Li url="/admin/app/coupon"
        text='Coupons'
        Icon={RiCoupon3Fill}
        location={location} />
      <Li url="/admin/app/toss"
        text='Toss'
        Icon={FaGamepad}
        location={location} />
    </ul>
  </div>
)

interface LiProps {
  url: string,
  text: string,
  location: Location,
  Icon: IconType
}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li style={
    { backgroundColor: location.pathname.includes(url) ? "rgba(0,115,225,0.1)" : "white" }
  }>
    <Link to={url} style={
      { color: location.pathname.includes(url) ? "rgba(0,115,225)" : "black" }
    }>
      <Icon />
      {text}
    </Link>
  </li>

)

export default AdminSidebar
