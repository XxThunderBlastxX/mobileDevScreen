import logo from './images/download.png';
import tape from './images/underConstruction.png';
import exclaim from './images/exclaim.png';
import './App.css';


function App() {
    function getMobileScreenRes() {
        if( window.screen.availWidth < 768 )
            {
                 return 'mobile';
            }
    }
    if(getMobileScreenRes() === "mobile" ){
        return (
        <div className="mobileScreen">
            <nav className={"mobileScreen__nav"}>
                <img src={logo} alt={"affilboost"} className={"mobileScreen__affilboost"}/>
            </nav>
            <div className={"mobileScreen__content"}>
                <img src={exclaim} alt={"!"} className={"mobileScreen__exclaim"}/>
                <div className={"mobileScreen__writing"}>
                    <h1> Mobile Website </h1>
                    <h2>Under-Construction</h2>
                    <h4>Our Apologies. Our Developers are working on it and we will soon come back with our website for mobile phones, so you can enjoy our services right from our mobile phone !!!</h4>
                </div>
            </div>
            <div>
                <img src={tape} alt={"underConstruction"} className={"mobileScreen__tape1"}/>
                <img src={tape} alt={"underConstruction"} className={"mobileScreen__tape2"}/>
            </div>
        </div>
        );
    }
    else{
        return(
            <h1>hello! Open this in Mobile Phone</h1>
        );
    }

}

export default App;
