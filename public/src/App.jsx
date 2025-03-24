import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [documentType, setDocumentType] = useState("CV");
  const [file, setFile] = useState(null);




  const submitHandler = async (event) => {
    event.preventDefault();

    //with form data
     const body = new FormData();
     body.append("firstName", firstName);
    body.append("lastName", lastName);
    body.append("email", email);
     body.append("documentType", documentType);D
     body.append("file", file);

     const response = await fetch(`${apiBaseUrl}/auth/register`, {
       method: "POST",
      body: body,
    }).then((response) => console.log(response.json()));

    

    //without formdata
     //const body = {
      //"FirstName": firstName,
      //"LastName": lastName,
      //"emailAddress": email,
     // "documentType": documentType,   
    //}

    //console.log("firsname : ", body);

    //const response = await fetch(`${apiBaseUrl}/auth/register`, {
      //method: "POST",
      //headers: {
      //'Content-Type': 'application/json'
      //},
      //body: JSON.stringify(body),
    //}).then((response) => console.log(response.json()));
  //};

  return (
    <>
      <div class="container">
        <h2>Document submission form</h2>

        <form  onSubmit={submitHandler} id="uploadForm">
            <label for="firstName">FirstName :</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName"
              onChange={(event) => setFirstName(event.target.value)}
              />
            
          
            <label for="lastName">LastName :</label>
            <input 
              type="text" 
              id="LastName" 
              name="lastName"
              onChange={(event) => setLastName(event.target.value)}
              />

            <label for="email">EmailAdress :</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <label for="documentType"> DocumentType :</label>
            <select id="documentType" name="documentType" onChange={(event) => setDocumentType(event.target.value)}>
                <option value="CV">Resume</option>
                <option value="Projet">Projet</option>
                <option value="Profil">Profil</option>
                <option value="Script">Script</option>
            </select>

            <label for="file">File:</label>
            <input
             type="file"
              id="file" 
              name="file" 
              accept=".pdf,.docx,.txt"
              onChange={(event) => setFile(event.target.files[0])}
            />

            <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
