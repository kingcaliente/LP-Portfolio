import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import '../Home/index.scss';


const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                {/* <h1>Hi, <br /> I'm
                    <img src={LogoTitle} alt="developer" />
                    nack_mann
                    <br />
                    your friendly neighborhood web developer */}
                <h1> Hi, I'm Luis Pardo your friendly neighborhood web developer.    
                </h1>
                <h2>Frontend Developer / javascript expert</h2>
                <Link to="/contact" className="flat-button">Contact me</Link>
            </div>
        </div>
    );
}


export default Home