import Image from "next/image";

function Transactions() {
  const transactionStatus = {
    pending : {
      status : 'Pending',
      style : 'rounded-md text-white p-1 bg-yellow-500'
    },
    done : {
      status : 'Done',
      style : 'rounded-md text-white p-1 bg-gray-500'
    },
    cancelled : {
      status : 'Cancelled',
      style : 'rounded-md text-white p-1 bg-red-400'
    }
  }
  return (
    <section className="transaction bg-slate-800 rounded-md p-3">
      <header>
        <h2 className="mb-3 font-medium text-slate-400">Latest Transactions</h2>        
      </header>
      <div>
        <table className="w-full overflow-scroll">
          <thead>
            <tr>
              <td className="p-2 text-sm">Name</td>
              <td className="p-2 text-sm">Status</td>
              <td className="p-2 text-sm">Date</td>
              <td className="p-2 text-sm">Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 flex flex-row gap-2 text-xs items-center">
                <Image src="/noAvatar1.png" width={40} height={40} alt="avatar" className=" object-cover rounded-full" />John Doe
              </td>
              <td className="p-2 text-xs ">
                <span className={`${transactionStatus.pending.style} `}>
                  {transactionStatus.pending.status}
                </span>
              </td>
              <td className="p-2 text-xs">14.02.2024</td>
              <td className="p-2 text-xs">$3.200</td>
            </tr>
            <tr>
              <td className="p-2 flex flex-row gap-2 text-xs items-center">
                <Image src="/noAvatar1.png" width={40} height={40} alt="avatar" className="" />John Doe
              </td>
              <td className="p-2 text-xs">
                <span className={`${transactionStatus.done.style}`}>
                  {transactionStatus.done.status}
                </span>
              </td>
              <td className="p-2 text-xs raounde">14.02.2024</td>
              <td className="p-2 text-xs">$3.200</td>
            </tr>
            <tr>
              <td className="p-2 flex flex-row gap-2 text-xs items-center">
                <Image src="/noAvatar1.png" width={40} height={40} alt="avatar" className="" />John Doe
              </td>
              <td className="p-2 text-xs">
                <span className={`${transactionStatus.cancelled.style}`}>
                  {transactionStatus.cancelled.status}
                </span>
              </td>
              <td className="p-2 text-xs">14.02.2024</td>
              <td className="p-2 text-xs">$3.200</td>
            </tr>
            <tr>
              <td className="p-2 flex flex-row gap-2 text-xs items-center">
                <Image src="/noAvatar1.png" width={40} height={40} alt="avatar" className="" />John Doe
              </td>
              <td className="p-2 text-xs">
                <span className={`${transactionStatus.done.style}`}>
                  {transactionStatus.done.status}
                </span>
              </td>
              <td className="p-2 text-xs raounde">14.02.2024</td>
              <td className="p-2 text-xs">$3.200</td>
            </tr>
            <tr>
              <td className="p-2 flex flex-row gap-2 text-xs items-center">
                <Image src="/noAvatar1.png" width={40} height={40} alt="avatar" className="" />John Doe
              </td>
              <td className="p-2 text-xs">
                <span className={`${transactionStatus.cancelled.style} `}>
                  {transactionStatus.cancelled.status}
                </span>
              </td>
              <td className="p-2 text-xs">14.02.2024</td>
              <td className="p-2 text-xs">$3.200</td>
            </tr>           
            
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Transactions