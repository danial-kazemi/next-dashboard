


 const TestPage = () => {
    const handelForm = async(formData)=>{
        "use server"
        const username = formData.get("username")
        console.log(username)
    }
    return(
        <div>
            <form action={handelForm}>
                <input type="text" name="username"/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default TestPage; 