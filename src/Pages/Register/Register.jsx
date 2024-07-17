import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedRole, setSelectedRole] = useState('user');
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const Phone = e.target.Phone.value;
        const role = `${selectedRole}`
        const newUser={email, password, name, Phone,role}

        console.log(newUser);

        if (password.length !== 5) {
            setRegisterError('Please provide a 5 digits pin');
            Swal.fire({
                icon: "error",
                text: "Password should be 5 characters!",

            });
            return;
        }
        fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Account Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                        
                    })
                    navigate('/')

                }else if (data.message === 'User with this email already exists') {
                    Swal.fire({
                        icon: 'error',
                        text: 'Already have an account',
                    });
                }
                
            })
            .catch(error => {
        console.log(error);
        setRegisterError('Something went wrong!');
    });
        
    setRegisterError('');
    setSuccess('');
    // createUser(email, password, name, Phone)
        // .then(result => {

        //     console.log(result.user);
        //     setUser(result.user);
        //     setSuccess("Account Created successfully"); 
            // create user entry--------------
            // const userInfo = {
            //     email,
            //     name,
            //     PhotoURL,
            //     role

            // }
            // axiosPublic.post('/users', userInfo)
            //     .then(res => {
            //         if (res.data.insertedId) {
            //             Swal.fire({
            //                 icon: "success",
            //                 text: "Account Created  successfully!",

            //             });
            //         }
            //     })


            // updateUserProfile(name, PhotoURL)
            // // .then()
            // navigate("/");
        // })
        // .catch(error => {
        //     console.log(error);
        //     setRegisterError(error.message);
        // })
}

return (
    <div className="pt-40">
        <div className="lg:w-[500px] lg:h-[700px] sm:w-[400px] sm:h-[550px] bg-gray-600 lg:ml-[500px] sm:ml-0  mb-10 rounded-xl">
            <Helmet>
                <title>Ckash | Register</title>
            </Helmet>
            <div className=" pt-10">
                <h2 className="text-center text-2xl font-bold text-white mb-2">WELCOME TO HEALTH HAVEN</h2>
                <p className="text-center text-xl font-semibold text-black">Register to your account </p>
            </div>
            <form onSubmit={handleRegister} className="pt-8 lg:pl-12 sm:pl-0">
                <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                    <input className="w-full h-full rounded-lg text-center" type="name" placeholder="Your Name" required name="name" />
                </div>
                <br />
                <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                    <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                </div>
                <br />
                <div className="flex ">
                    <div className="w-[400px] " >
                        <input className="text-black rounded-lg text-center w-full     h-[50px]" pattern="\d{5}" placeholder="Enter A Five Digit Pin" required
                            type={showPassword ? "text" : "password"} name="password" />
                    </div>
                    <div className="mt-3  ">
                        <span className="" onClick={() => { setShowPassword(!showPassword) }}>
                            {
                                showPassword ? <FaEyeSlash className="w-10 h-5"></FaEyeSlash> : <FaEye className="w-10 h-5"></FaEye>
                            }
                        </span>
                    </div>
                </div>


                <br />
                <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                    <input className="w-full h-full text-center rounded-lg" type="number" placeholder="Enter Your Phone number" required name="Phone" />
                </div>
                <br />


                <div>
                    <label className="form-control  lg:w-[400px] sm:w-[250px] h-[50px]">

                        <select
                            value={selectedRole} required onChange={handleRoleChange}
                            className="select select-bordered">

                            <option className="text-center  text-xl">user</option>
                            <option className="text-center  text-xl">agent</option>

                        </select>

                    </label>

                </div>


                <br />
                <div className=" lg:w-[400px] sm:w-[250px]]  h-[50px] bg-lime-400 rounded-2xl">
                    <button className="w-full h-full text-white"> Register</button>
                </div>
            </form>
            {
                registerError && <p className="text-red-700 text-center text-xl font-semibold mt-5">{registerError}</p>
            }
            {
                success && <p className="text-green-500 text-center text-xl font-semibold mt-5">{success}</p>
            }
            <br />
            <div className="flex  ml-[240px]   ">
                

            </div>
            <div>
                <h3 className="text-center text-xl font-medium text-amber-600">Already Have An Account? <Link to={"/login"}><span className="text-lime-300" >LOGIN</span></Link></h3>
            </div>
            <div>

            </div>
        </div>
    </div>
);
};

export default Register;