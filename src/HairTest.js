import "./styles/HairTest.css"

export default function HairTest(){
    return (
        <div className="hair-test">
            <FreeTest />
            <CustomTests />
            <HairPackage />
            <Azure />
        </div>
    )
}

function FreeTest() {
    return (
        <div className="section free-test">
            <div className="free-info">
                <div className="free-top">
                    <h2 className="free-title">Free Hair Care Test</h2>
                    <div className="free-quiz-button">Take the Quiz</div>
                </div>

                <div className="free-detail">
                    <div>Wondering which shampoo and conditioner you <em>should</em> be using?</div>
                    <div>Start your custom hair care journey with Bellu’s Product Finder Quiz.</div>
                </div>
            </div>
            
        </div>
    )
}


function CustomTests() {
    return (
        <div className="section custom-tests">
            <div style={{fontSize:"2em"}}>Custom Hair Analysis Tests</div>
            <div style={{fontSize:"1.5em"}}>Which is right for you?</div>
            <div className="test-options">
                <div>
                    <img className="test-img" src={require("./images/Copy of Standard Hair Test 1.png")}></img>
                    <h3>Premium</h3>
                    <div className="option side">
                        $139.99 - TRY NOW
                    </div>
                </div>
                <div>
                    <img className="test-img" src={require("./images/Copy of Premium Hair Test 1.jpg")}></img>
                    <h3>Azure Bundle</h3>
                    <div className="option center">
                        $17/mo. - BEST VALUE
                    </div>
                </div>
                <div>
                    <img className="test-img" src={require("./images/Copy of Product Finder Quiz.jpg")}></img>
                    <h3>Standard</h3>
                    <div className="option side">
                        $49.99 - TRY NOW
                    </div>
                </div>
            </div>
        </div>
    )
}

const unchecked = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                </svg>

const checked = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>

function CheckDetail({ isChecked, text}) {
    return (
        <div className="check-detail">
            <div>{isChecked ? checked : unchecked}</div>
            <div>{text}</div>
        </div>
    )
}


function HairPackage() {
    return (
        <div className="section package">
            <div style={{fontSize:"2em"}}>Hair Test Package Breakdown</div> 
            <div className="package-options">
                <div className="package-tile azurebundle">
                    <div className="ptitle">Azure Bundle</div>
                    <div className="pvalue">$17.00</div>
                    <div className="pvalue-sub">Per Month ($200/year)</div>
                    <div className="pbutton azurebundle">BEST VALUE</div>
                    <div className="pdetails">
                        <CheckDetail isChecked={true} text={"Microscopic Hair Analysis"} />
                        <CheckDetail isChecked={true} text={"Product Recommendations"} />
                        <CheckDetail isChecked={true} text={"Lifestyle Recommendations"} />
                        <CheckDetail isChecked={true} text={"Shampoo Delivery ($50 value)"} />
                        <CheckDetail isChecked={true} text={"Conditioner Delivery ($50 value)"} />
                        <CheckDetail isChecked={true} text={"Revised Hair Plan every 6 mo.($300 Value)"} />
                    </div>
                </div>
                <div className="package-tile">
                    <div className="ptitle">Premium</div>
                    <div className="pvalue">$139.99</div>
                    <div className="pvalue-sub">One Time Purchase</div>
                    <div className="pbutton">TRY NOW</div>
                    <div className="pdetails">
                        <CheckDetail isChecked={true} text={"Microscopic Hair Analysis"} />
                        <CheckDetail isChecked={true} text={"Product Recommendations"} />
                        <CheckDetail isChecked={true} text={"Lifestyle Recommendations"} />
                        <CheckDetail isChecked={true} text={"Shampoo Delivery ($50 value)"} />
                        <CheckDetail isChecked={true} text={"Conditioner Delivery ($50 value)"} />
                        <CheckDetail isChecked={false} text={"Revised Hair Plan every 6 mo.($300 Value)"} />
                    </div>
                </div>
                <div className="package-tile">
                    <div className="ptitle">Standard</div>
                    <div className="pvalue">$49.99</div>
                    <div className="pvalue-sub">One Time Purchase</div>
                    <div className="pbutton">TRY NOW</div>
                    <div className="pdetails">
                        <CheckDetail isChecked={true} text={"Microscopic Hair Analysis"} />
                        <CheckDetail isChecked={true} text={"Product Recommendations"} />
                        <CheckDetail isChecked={true} text={"Lifestyle Recommendations"} />
                        <CheckDetail isChecked={false} text={"Shampoo Delivery ($50 value)"} />
                        <CheckDetail isChecked={false} text={"Conditioner Delivery ($50 value)"} />
                        <CheckDetail isChecked={false} text={"Revised Hair Plan every 6 mo.($300 Value)"} />
                    </div>
                </div>
            </div> 
        </div>
    )
}


function Azure() {
    return (
        <div className="section azure">
            <div className="azure-info">
                <div className="azure-top">
                    <h2 className="azure-title">Azure Bundle Subscription</h2>
                    <div className="azure-sub">Hair Care that Changes as You Do</div>
                </div>

                <div className="azure-detail">
                    <div>The composition of your hair changes over time. What yourstrands need today won’t necessarily be the same 6 monthsfrom now. Our hair is affected by our environment, diet,hormones, stress levels, exercise, age, life events, and more.</div>
                    <div>By subscribing to Bellu’s Azure Bundle, you get the benefits oftruly custom hair care that changes and grows with you. Plus,you can see the data on how your hair health fluctuatesthroughout the year and get special discounts on productrefills.</div>
                </div>

                <div className="subscribe-button">
                    Subscribe and Save Today!
                </div>
            </div>
            
        </div>
    )
}

