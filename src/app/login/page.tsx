import Image from "next/image"

function LoginPage() {
  return (
    <div className="login-page flex justify-center items-center min-h-screen">
      <div className="login-page__wrapper text-slate-200 bg-slate-800 p-5 rounded-lg">
        <div className="image-container w-full flex flex-col gap-3 items-center ">
          <Image className="rounded-full" src="/noAvatar1.png" width="80" height={80} alt="user" objectFit="cover" />
          <h1 className="text-center">Login</h1>
        </div>
        
        <form className="w-full sm:w-80 flex flex-col gap-3 mt-3" action="">
          <input className="outline-none p-3 rounded border-slate-600 border-solid border-2 w-full bg-transparent" placeholder="Email ID" type="text" name="username" />
          <input className="outline-none p-3 rounded border-slate-600 border-solid border-2 w-full bg-transparent" placeholder="Password" type="password" name="password" />
          <button className="outline-none border-none text-slate-200 w-full p-3 mt-4 bg-green-800 rounded cursor-pointer">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage