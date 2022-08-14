import React from "react"; 
import './index.css'; 
import {useState, useEffect} from "react"; 
 
export default function Mainin(){ 
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
         
          <div className="viewers"><span>100k</span> pageviews</div> 
          <div className="price"> 
            <span>$<span className="pricefix">16</span>.00</span> 
            <span className="month"> /month</span> 
          </div>  
           
        </div> 
         <div className="progres"> 
          <div className="progess-bar"> 
            <input type="range" min="1" max="5" step="1" value="3" className="myrange"/> 
          </div> 
           
          <div className="monthly"> 
            <span>monthly Billing</span> 
            <label className="switchh"> 
              <input type="checkbox"/> 
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