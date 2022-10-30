import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatablepaymentmethod from "../../components/datatable/Datatablepaymentmethod"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatablepaymentmethod/>
      </div>
    </div>
  )
}

export default List