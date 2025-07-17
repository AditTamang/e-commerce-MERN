import React from 'react'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hrlloew done")
    }

    return (
        <>
            <div>Login
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email' > Email</label>
                        <input className='gap-4' id="email" type='text' placeholder='Enter your Email..' />
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input className='md:text-19' id="password" type="password" placeholder='*******' />
                    </div>

                    <button type='submit' >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login