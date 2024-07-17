import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // signIn(email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         Swal.fire({
        //             icon: "success",
        //             text: "LogIn successfully!",

        //         });

        //         navigate(from, { replace: true });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         Swal.fire({
        //             icon: "error",
        //             text: "Please Provide Correct Email And Password!",

        //         });

        //     })
    }
    return (
        <div>
            <div className=" lg:w-[500px] sm:w-[350px] lg:h-[600px] sm:h-[500px] bg-lime-100  lg:ml-[500px]  mb-10 rounded-xl sm:ml-[0px]">
                <Helmet>
                    <title>Ckash | Login</title>
                </Helmet>

                <div className=" pt-12">
                    <h2 className="text-center text-2xl font-bold text-pink-400 mb-2">WELCOME TO Ckash</h2>
                    <p className="text-center text-xl font-semibold text-black">Login To Your Account By Entering<br /> Your Email and Password</p>
                </div>
               
                <form  onSubmit={handleLogIn} className="pt-10 lg:pl-12 sm:pl-0">
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                    </div>
                    <br />
                    <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                        <input className="w-full h-full text-center rounded-lg" type="password" placeholder="Enter Your Pin" required pattern="\d{5}"  name="password" />
                    </div>

                    <br />

                    <div className=" lg:w-[400px] sm:w-[250px]  h-[50px] rounded-2xl">
                        <button className=" btn btn-outline btn-secondary w-full h-full text-white"> LOGIN</button>
                    </div>
                </form>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1450">
                    <h3 className="text-center text-2xl font-semibold text-yellow-600">Don`t Have An Account? <Link to={"/register"}><span className="text-lime-300" >Register</span></Link></h3>
                </div>
                <br />
                
            </div>
        </div>
    );
};

export default Login;