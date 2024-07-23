import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Footer from "../ui/dashboard/footer/footer";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
function Dashboard() {
  return (
    <div className="dashboard flex flex-col md:flex-row flex-nowrap gap-5">
      <div className="main flex flex-auto flex-col w-full md:w-3/4 sm:gap-5">
        <section className="cards flex gap-5 justify-between ">
          <Card />
          <Card />
          <Card />
        </section>         
        <Transactions />        
        <Chart />                     
      </div>
      <div className="flex flex-auto w-full md:w-1/4">
        <Rightbar />
      </div>    
    </div>
  )
}

export default Dashboard