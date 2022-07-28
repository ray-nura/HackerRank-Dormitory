import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {
  const [residentsList, setResidentsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const onSearch = (name, checkExists, validity) => {
    if (!checkExists) {
      setErrorMessage(`Sorry, ${name} is not a verified student!`);
    } else if (!validity) {
      setErrorMessage(`Sorry, ${name}'s validity has Expired!`);
    }
    if (validity) {
      setResidentsList([...residentsList, { name }]);
      setErrorMessage("");
    }
  };
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search onSearch={onSearch}/>
        {errorMessage && <Error errorMessage={errorMessage} />}
        <ResidentsList residentsList={residentsList}/>
      </div>
    </div>
  );
}

export default App;
