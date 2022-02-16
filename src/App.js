import React, { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [bussiness, setBussiness] = useState("");
  const [age, setAge] = useState("");
  const [prod1, setProd1] = useState("");
  const [offer, setOffer] = useState("");
  const [prod2, setProd2] = useState("");
  const [process, setProcess] = useState("");
  const [year, setYear] = useState("");
  const [skill, setSkill] = useState("");
  const [unique, setUnique] = useState("");
  const [owner, setOwner] = useState("");
  const [established, setEstablished] = useState("");
  const [mark, setMark] = useState("");
  const [area, setArea] = useState("");

  const handlename = (e) => {
    setName(e.target.value)
  }
  const handleselect = (e) => {
    setBussiness(e.target.value)
  }


  const handleage = (e) => {
    setAge(e.target.value)
  }


  const handleprod1 = (e) => {
    setProd1(e.target.value)
  }
  const handleoffer = (e) => {
    setOffer(e.target.value)
  }


  const handleprod2 = (e) => {
    setProd2(e.target.value)
  }

  const handleprocess = (e) => {
    setProcess(e.target.value)
  }

  const handleyear = (e) => {
    setYear(e.target.value)
  }

  const handleskill = (e) => {
    setSkill(e.target.value)
  }
  const handleunique = (e) => {
    setUnique(e.target.value)
  }
  const handleOwner = (e) => {
    setOwner(e.target.value)
  }
  const handleEstablished = (e) => {
    setEstablished(e.target.value)
  }
  const handlemark = (e) => {
    setMark(e.target.value)
  }
  const handlearea = (e) => {
    setArea(e.target.value)
  }






  return (
    <div className="App">
      <div className="cont">
        <div className="cont1">
          <label>Username:</label><br />

          <input type="text" onChange={handlename} name="username" placeholder='UserName' /><br />

          <label >Stage of business:</label>
          <select name="business_stage" onChange={handleselect}>
            <option value="Select">Select</option>
            <option value="Start-up">Start-up</option>
            <option value="Scale-up">Scale-up</option>
          </select> <br />


          <label >Age of establishment:</label>
          <input type="number" onChange={handleage} placeholder='Age of establishment' min="0" max="100" placeholder=" in years" />
          <br></br>


          <label>Primary Products/Services offfered :</label>
          <input type="text" onChange={handleprod1} placeholder='primary_product_service_offered' />

          <br></br>

          <label>Offered to:</label> <br />
          <select name="Offered to" onChange={handleoffer} >
            <option value="Endcustomers">End customers</option>
            <option value="Wholesalers">Wholesalers</option>
            <option value="Distributors">Distributors</option>
            <option value="Retailers">Retailers</option>
          </select>
          <br />

          <label >Secondary Product/Services</label>
          <input type="text" onChange={handleprod2} />
          <br></br>
          <label> Processed Products</label>
          <input type="text" onChange={handleprocess} placeholder='Processed Products' />
          <br></br>

          <label >Years of relevant experience in this field</label>
          <input type="number" onChange={handleyear} placeholder='Releavent' />
          <br></br>
          <label >Skill training</label>
          <select onChange={handleskill}>
            <option >No formal skill taining</option>
            <option >Has formal skill training and certificate</option>
          </select>
          <br></br>
          <label >Unique Seling Proposition </label>
          <select onChange={handleunique}>
            <option >the Entrepreners's experience in this field</option>
            <option >innovative product</option>
            <option >high profit margin</option>
            <option >high growth potenial </option>
          </select>

          <br></br>
          <label >Ownership of infrastructure</label>
          <select
            onChange={handleOwner}
          >
            <option >Rented</option>
            <option >Leased</option>
            <option >Self-owned</option>
          </select><br />
          <label>
            Establishment area (square feet)
            (Enter 0 if the establishment area is irrelevant)  :
          </label>

          <input type="number" placeholder=' Establishment area'
            onChange={handleEstablished}

          />
          <h2>Target Market :  </h2>

          <label >Market research</label><br />
          <select
            onChange={handlemark}
          >
            <option >Not Conducted</option>
            <option >Market research has been conducted</option>

          </select><br />
          <label >Primary market</label>
          <select
            onChange={handlearea}
          >
            <option value="local">Local</option>
            <option value="Regional">Regional</option>
            <option value="National">National</option>
            <option >International</option>

          </select><br />
        </div>
        <div className="cont2">

          <p> <strong>{name}</strong> is looking <strong>{bussiness}</strong> to their business of sharemarket</p>
          <p>This enterprise has been operational since <strong>{age}</strong> years and has been serving its customers since then</p>
          <p>This establishment offers products/services like  <strong>{prod1}</strong> to <strong>{offer}</strong></p>
          <p>In addition, the enterprise shall also be invloved in  <strong>{prod2}</strong>  </p>
          <p>other products of the enterprise shall include in  <strong>{process}</strong> </p>
          <p>  <strong>{name}</strong> has relevant experience of <strong>{year}</strong> years in the field</p>
          <p>The entrepreneur <strong>{skill}</strong> in this field of work</p>
          <p>The enterprise is uniquely positioned because of its <strong>{unique}</strong> </p>

          <p>The mumbai is located in area of in a <strong>{owner}</strong> property</p>

          <p>The size of the establishment is {established} sq ft</p>
          <p> <strong>{mark}</strong> and the range of products and target market has been identified after that.</p>
          <p>The enterprise shall focus on offering its products/services to <strong>{area}</strong> markets</p>

        </div>
      </div>
    </div>
  );
}

export default App;