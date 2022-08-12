//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <main className="container">
        <header>
          <h1>Simple, traffic-based pricing</h1>
          <p>Sign-up for our 30-day trial, No credit card required.</p>
        </header>
        <aside>
          <div className="tarrif">
            <div className="page-views"> <span>100k</span> pageviews</div>
            <div className="price">
              <span>$<span className="pricefix">16</span>.00</span>
              <span className="month"> /month</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar">
              <input type="range" min="1" max="5" step="1" value="3" className="myrange" />
            </div>
            <div className="monthly">
              <span>Monthly Billing</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <span>Yearly Billing</span>
              <span className="discount">25% discount</span>
            </div>
          </div>

          <hr />

          <div className="start">
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <button>Start my trial</button>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
