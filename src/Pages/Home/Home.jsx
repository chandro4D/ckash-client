
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Ckash | Home</title>
            </Helmet>
            <h1 className="text-center text-2xl">This is Home</h1>
            <Link to="/login"><button className=" btn btn-outline btn-secondary w-[200px] h-full text-white"> LOGIN</button></Link>
            <Link to="/register"><button className="w-[200px] h-full btn btn-outline text-white"> Register</button></Link>
            
        </div>
    );
};

export default Home;