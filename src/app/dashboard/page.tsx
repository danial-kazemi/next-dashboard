import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Footer from "../ui/dashboard/footer/footer";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
function Dashboard() {
  return (
    <div className="dashboard flex flex-col md:flex-row flex-nowrap gap-3">
      <div className="main flex flex-auto flex-col w-full lg:w-3/4 gap-3">
        <section className="cards flex gap-3 justify-between ">
          <Card />
          <Card />
          <Card />
        </section>         
        <Transactions />        
        <Chart />
        <Footer />                   
      </div>
      <div className="hidden lg:flex lg:w-1/4">
        <Rightbar />
      </div>    
    </div>
  )
}

export default Dashboard