import { useState, useEffect } from "react";
import { getAccount } from "./utils/wallet";
import Navbar from "./components/Navbar";
import { addRecordOperation, registerOperation } from "./utils/operation";
import { loginOperation } from "./utils/operation";
import { fetchStorage } from "./utils/tzkt";
import { fetchStorage1 } from "./utils/tzkt";
import Accordion from "./Accordion";
import { BrowserRouter, Router, Routes} from "react-router-dom";
import pps from "./pps-image.png";
import mt16 from "./mt16-image.png";
import heart from "./heart.png"


const App = () => {
  // Patients and health register history
  // const [noOfPatients, setNumber] = useState()
  const [message, setMessage] = useState(''); //date
  const [message1, setMessage1] = useState(''); //doctor
  const [message2, setMessage2] = useState(''); //age
  const [message3, setMessage3] = useState(''); //height
  const [message4, setMessage4] = useState(''); //weight
  const [message5, setMessage5] = useState(''); //hospital
  const [message6, setMessage6] = useState(''); //prescription

  const [record, setRecord] = useState([]);
  const [patients, setPatient] = useState([]);
  const [date, setDate] = useState([]);
  // const [recd_txt, setRecordtxt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [isregistered, setIsRegister] = useState(false);
  const [accountRecord, setAccountRecord] = useState([]);
  const [loginRecord, setLoginRecord] = useState([]);

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    (async () => {
      const currentaccount = await getAccount();
      const storage = await fetchStorage();
      setRecord(Object(storage))
      setPatient(Object.keys(storage));
      setDate(Object.values(storage));

      if(Object.keys(storage).includes(currentaccount)) {
        setIsRegister(true);
        setAccountRecord(Object.values(storage[currentaccount]));
        setLoginRecord(Object.values(storage[currentaccount]));
      };
      
      // Frontend logic
      const firstHalf = document.querySelector('.firstHalf');
      const firstHalfmodified = document.querySelector('.firstHalfmodified');
      const firstHalf_selector_1 = document.querySelector('.firstHalf-selector-1');
      const firstHalf_selector_2 = document.querySelector('.firstHalf-selector-2');
      
      //const accordion = document.querySelectorAll('.accordion-item-header');

      // const accordion_items = document.querySelector('.accordion');

      // const submitButton = document.querySelector('#submit');

      // submitButton.addEventListener('click', addNewAccordionItem);
      // function addNewAccordionItem(){
      //     const newAccordionItem = document.createElement('div');
      //     newAccordionItem.classList.add('accordion-item');

      //     newAccordionItem.innerHTML = `
      //     <div class="accordion-item-header">
      //         Why is this website important?
      //     </div>
      //     <div class="accordion-item-body">
      //         <div class="accordion-item-body-content">
      //             Because we want to have a legit website for Tezasia Hackathon.
      //         </div>
      //     </div>
      //     `;
      //     accordion_items.appendChild(newAccordionItem);
      
      //     const newAccordionItemHeader = newAccordionItem.querySelector('.accordion-item-header');
      
      //     newAccordionItemHeader.addEventListener('click', () => {
      //         newAccordionItemHeader.classList.toggle('active');
      //     });
      // }

      // accordion.forEach(item => {
      //     item.addEventListener('click', () => {
      //         item.classList.toggle('active');
      //     });
      // })

      firstHalf_selector_1.addEventListener("click", () => {
          if(firstHalf_selector_1.classList.contains('active')){
          firstHalf.classList.toggle('active');
          firstHalfmodified.classList.toggle('active');
          firstHalf_selector_1.classList.toggle('active');
          firstHalf_selector_2.classList.toggle('active');}
      })

      firstHalf_selector_2.addEventListener("click", () => {
          if(!firstHalf_selector_1.classList.contains('active')){
          firstHalf.classList.toggle('active');
          firstHalfmodified.classList.toggle('active');
          firstHalf_selector_1.classList.toggle('active');
          firstHalf_selector_2.classList.toggle('active');}
})
    })();
  }, []);

  // handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name] : value
  //   });
  // }

  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange1 = event => {
    setMessage1(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange2 = event => {
    setMessage2(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange3 = event => {
    setMessage3(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange4 = event => {
    setMessage4(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange5 = event => {
    setMessage5(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleChange6 = event => {
    setMessage6(event.target.value);
    console.log('value is:', event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  }

  // onAddRecord for add_record function
  const onAddRecord = async () => {
    try {
      setLoading(true);
      await addRecordOperation(message2, message, message1, message3, message5, message6, message4);
      alert("Transaction succesful! Record is added.");
      setMessage('');
      setMessage1('');
      setMessage2('');
      setMessage3('');
      setMessage4('');
      setMessage5('');
      setMessage6('');

    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const onLogin = async () => {
    try {
      if(loginRecord){
        if(message2 == loginRecord[0][0] && message3 == loginRecord[0][1]){
          setLoading1(true);
          alert("Login succesful!");
        }
      }
      else {
          setLoading1(true);
          await loginOperation(message2, message3);
          alert("Registration succesful!");
          setMessage2('');
          setMessage3('');
      }
    } catch (err) {
      alert(err.message);
    }
    setLoading1(false);
  };

  const onRegister = async () => {
    try {
      setLoading1(true);
      await registerOperation();
      alert("Registered!");
    } catch (err) {
      alert(err.message);
    }
    setLoading1(false);
  };

  // function ShowRecord(accRec) {
  //   return (
  //     <>
  //     {accRec.length > 0 && 
  //       <ul>
  //       {accountRecord.map(data => (
  //       <li key={data.date}> {data.date} : {data.record_text}</li>
  //         ))}
  //       </ul>
  //     }
  //     </>
  //   );
  // }

  function ShowAccordion(accRec) {
    return (
      <>{isregistered 
        ?
        accRec.length
        ?
        <div>
        <h1>Your Medical <span>History</span>!</h1><br/>
        <div class="accordion">
        {accountRecord.map(data => (
          <Accordion title={data.date} data1={data.date} data2={data.doctor} data3={data.age} data4={data.height} data5 ={data.weight} data6={data.hospital} data7={data.prescription}> </Accordion>
          ))}
        </div></div>
        :
        <div align="center"><h4>Hey! You have not added any record yet.</h4><br/>
        Use the form to add your first record!
        <br></br>
        <br></br></div>
     :
     <div align="center">
     <h3>You seem to be a new user!</h3><br/>
     Register you account to start your electronic health record journey
     <br></br>
     <br></br>
      <button onClick={onRegister} id="submit1">
      {/* TODO 7.b - Call onBuyTicket on click */}
      {/* TODO 7.c - Show "loading..." when buying operation is pending */}
      {loading1 ? "Loading..." : "Register"}
      </button>
      </div>
     }
      </>
    );
  }

  return (
    <html>
      <Navbar></Navbar>
      <head>
      {/* <script src="script.js" defer></script> */}
      </head>
    <body>
    <nav class="navbar">        
        {/* <div class="navbar-logo"> */}
            {/* <a href="index.html" class="navbar-brand"><img src="img.png" alt="logo"/></a> */}
            {/* <a href="/" className="navbar-brand">
          Health Register
        </a>
        </div>
        <ul class="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul> */}
    </nav>
    <div class="mainbox">

        <div class="firstHalf-selectors">
            <div class="firstHalf-selector"></div>
            <div class="firstHalf-selector-1">1</div>
            <div class="firstHalf-selector-2">2</div>
        </div>

        <div class="firstHalf">
            {/* <h1>Your Medical <span>History</span>!</h1>
            <br/> */}
                {ShowAccordion(accountRecord)}
          
            <div class=""></div>
        
        </div>

        <div class="firstHalfmodified">
            <h1>Why decentralized medical records?</h1>
            <br/>
            <p>The pace of development is accelerating at ever-increasing rates in the area of
healthcare. Today, there is a demand for high-quality medical facilities that are
supported by cutting-edge and modern technology. Here, Blockchain might be
important in revolutionising the healthcare industry. Additionally, the structure
of the healthcare system is changing in favour of a patient-centred strategy that
emphasises two key components: always having access to the right resources
for treatment. Healthcare organisations can better provide proper patient care
and top-notch medical facilities thanks to the blockchain.</p>
<p>Blockchain applications can precisely detect serious errors, including potentially
deadly ones, in the medical industry. In the healthcare sector, it can therefore enhance
the efficiency, security, and transparency of sharing medical data.</p>
        </div>

        <div class="secondHalf">
            <h1 id="formTitle">Add Record</h1>
            <br/>
            <form>
              <div class="form-group">
                <div class="form-group-1">
                  <label for="message" id="name-label">Date</label><br/>
                  <input id="message" name="message" type="date" placeholder="Date" onChange={handleChange} value={message}/><br/>

                  <label for="message1" id="email-label">Doctor</label><br/>
                  <input id="message1" name="message1" type="text" placeholder="Doctor" onChange={handleChange1} value={message1}/><br/>

                  <label for="message2" id="email-label">Age</label><br/>
                  <input id="message2" name="message2" type="number" placeholder="Age" onChange={handleChange2} value={message2}/><br/>
                </div>
                
                <div class="form-group-2">
                  <label for="message3" id="email-label">Height</label><br/>
                  <input id="message3" name="message3" type="number" placeholder="Height (cm)" onChange={handleChange3} value={message3}/><br/>

                  <label for="message4" id="email-label">Weight</label><br/>
                  <input id="message4" name="message4" type="number" placeholder="Weight (kg)" onChange={handleChange4} value={message4}/><br/>

                  <label for="message5" id="email-label">Hospital</label><br/>
                  <input id="message5" name="message5" type="text" placeholder="Hospital" onChange={handleChange5} value={message5}/><br/>
                </div>
              </div>
              <div class="form-group-3">
                  <label for="message6" id="email-label">Prescription</label><br/>
                  <textarea id="message6" name="message6" type="text" placeholder="Prescription" onChange={handleChange6} value={message6}/><br/>
                  {/* <label for="number" id="number-label">Password</label><br/>
                  <input id="number" type="password" name="number" placeholder="Password"/><br/><br/> */}
                  
                  <br/><br/>
                  <input id="submit" type="button" value={loading ? "Loading..." : "Submit"} onClick={onAddRecord}/>
              </div>          
            </form>
        </div>

        {/* <div class="secondHalfmodified">
            <h1 id="formTitle">Register/Login</h1>
            <br/>
            <form>

                <label for="fname" id="name-label">Name</label><br/>
                <input id="message2" name="message2" type="text" placeholder="Name" onChange={handleChange2} value={message2}/><br/>

                <label for="email" id="email-label">Password</label><br/>
                <input id="message3" name="message3" type="text" placeholder="Password" onChange={handleChange3} value={message3}/><br/>
                <br/><br/>
                <input id="submit" type="button" value={loading1 ? "Loading..." : "Login"} onClick={onLogin}/>          
            </form>
        </div> */}

    </div>
    <div class="redirect">
      <div class="new-page-Cover">
        <div class="About-Us">
          <p class="new-page-header">About Us</p>
          <h2 class="Topic">Inspiration</h2>
          <p class="new-page-text">
            <br></br> <img class="abc" src={heart} />The pace of development is accelerating at ever-increasing rates in the area of
healthcare. Today, there is a demand for high-quality medical facilities that are
supported by cutting-edge and modern technology. Here, Blockchain might be
important in revolutionising the healthcare industry. Additionally, the structure
of the healthcare system is changing in favour of a patient-centred strategy that
emphasises two key components: always having access to the right resources
for treatment. Healthcare organisations can better provide proper patient care
and top-notch medical facilities thanks to the blockchain.
<br></br><br></br>
Blockchain applications can precisely detect serious errors, including potentially
deadly ones, in the medical industry. In the healthcare sector, it can therefore enhance
the efficiency, security, and transparency of sharing medical data. Medical institutions
can acquire insight and improve the analysis of patient information with the use of
this technology. It can provide a distinctive data storage pattern at the greatest level of
security and lessen the concern about data tampering in healthcare.
<br></br>
Creating a database management system like this will result in better transparency for
all people, including the patients, medical personnel, and those who are in the
business of developing medicines.
<br></br></p><h2 class="Topic">Tech Architecture</h2><p class="new-page-text">
Tezos Blockchain | Smart-Py (for Smart contract) | Taquito library | React JS
<br></br><br></br></p>
<h2 class ="Topic">About our application</h2><p class="new-page-text">
A user-friendly application which allows users (patients, doctors, etc.)
to track their medical records. A user (patient, doctor, etc.) should be able to
add the record via a form in the application and view the history of previous
medical prescriptions/records.<br></br><br></br></p>
<h2 class="Topic">How to use the application</h2><p class="new-page-text">
Step-1: Connect you wallet <br></br>
Step-2: Register your account if you are a new user <br></br>
Step-3: Start adding medical records to your history <br></br>
</p>
<h2 class="Topic">Future improvements</h2><p class="new-page-text">
Addition of fungible tokens rewards to users
</p>
        </div>
      </div>
      <div class="new-page-Cover">
        <div class="Contact-Us">
          <p class="new-page-header">Contact Us</p>
          <div class="contact-us-photos">
            <div class="photo">
              <a href="https://github.com/pps-19012"><img  class = 'pps-photo' src={pps} alt="Pushpendra Pratap Singh"/></a>
              <p class="Name">Pushpendra Pratap Singh</p>
            </div>
            <div class="photo">
              <a href="https://github.com/MumukshTayal"><img  class="pps-photo" src={mt16} alt="Mumuksh Tayal"/></a>
              <p class="Name">Mumuksh Tayal</p>
            </div>
          </div>
          {/* <p class="new-page-text">lorem ipsum dlanflanasd asdlasdlkas asdlamdlask asdas;lkd;KD edad aadad sdfsfasf sddf sdfsad sdg g fs dfsdf sdf</p> */}
        </div>
      </div>
    </div>
    <footer>

    </footer>
</body>
</html>
  );
};

export default App;
