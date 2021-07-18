import img_ from './images/dev (1).png';
import './App.css';

function App() {
    function getMobileOperatingSystem() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
        {
            return 'iOS';
        }
        else if( userAgent.match( /Android/i ) )
        {
            return 'Android';
        }
        else
        {
            return 'unknown';
        }
    }
    if(getMobileOperatingSystem() === "iOS" || getMobileOperatingSystem === "Android " ){
        return (
            <h1>hello</h1>
        );
    }
    else{
        return(
        <div className="App">
            <div className={"mobile"}>
                <div className={"img"}>
                    <img src={img_} className={"logo"} alt="logo" />
                </div>
                <div className={"box"}>
                    <div className={"text"}>
                        Sorry For the inconvenience ! <br/>
                        Our Website is Still under-construction for mobile devices...<br/>
                        Stay tuned We will get back with all mobile-device compatibility soon
                        So that you can enjoy our services directly from your mobile phone !!!
                    </div>
                </div>

            </div>


        </div>
        );
    }

}

export default App;
