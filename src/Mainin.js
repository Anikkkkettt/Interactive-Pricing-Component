import React from "react"; 
import './index.css'; 
import {useState, useEffect} from "react"; 
 
export default function Mainin(){ 
    const [sliderValue, setsliderValue] = useState(0);
    const [costMonth, setcostMonth] = useState(0);
    const [pageView, setpageView] = useState(0);
    const [annually, setAnnually] = useState(false);
    const [costYear, setcostYear] = useState(0);
  const [theme,settheme] = useState("light-theme"); 
  const toggletheme =()=>{ 
    if(theme === "dark-theme"){ 
      settheme('light-theme'); 
    }else{ 
      settheme('dark-theme'); 
    } 
 
  } 
  useEffect(() => { 
    document.body.className = theme; 
  }, [theme]) 


    const handleOnChange = (event)=>{
        setsliderValue(event.target.value);
        setpageView(event.target.value*0.5);
        setcostMonth(event.target.value/5);
        let costt=Math.round(event.target.value*0.2*12*0.75);
        setcostYear(costt);
    }
     
    return( 
        <> 
        <main className="container" > 
      <header> 
        <h1>Simple, traffic-based pricing</h1> 
        <p>Sign-up for our 30 day trial.No credit card required</p> 
        <div className="form-check form-switch pull-right" > 
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=> toggletheme()}/> 
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> 
</div>  
      </header> 
      <aside> 
        <div className="subcontainer"> 
         
          <div className="viewers"><span>{pageView}</span>k pageviews</div> 
          <div className="price"> 
            {annually && (<><span>$<span className="pricefix">{costYear}</span></span> 
            <span className="month"> /year</span></>) }
            {!annually && (<><span>$<span className="pricefix">{costMonth}</span></span> 
            <span className="month"> /month</span></>) }
          </div>  
           
        </div> 
         <div className="progres"> 
          <div className="progess-bar"> 
            <input type="range" min="1" max="1000" step="1" value={sliderValue} onChange={handleOnChange} className="myrange"/> 
          </div> 
           
          <div className="monthly"> 
            <span>monthly Billing</span> 
            <label className="switchh" > 
              <input type="checkbox" checked={annually}
            onChange={() => setAnnually(!annually)}/> 
              <span className="slider"></span> 
            </label> 
           
            <span>Yearly Billing</span> 
            <span className="discount">25% discount</span> 
            </div> 
          </div> 
 
          <hr/> 
          <div className="ulitems"> 
            <ul> 
              <li>Unlimited websites</li> 
              <li>100% data ownership</li> 
              <li>email reports</li> 
            </ul> 
            <button>Start my-trial</button> 
          </div> 
      </aside> 
    </main> 
        </> 
    ) 
}