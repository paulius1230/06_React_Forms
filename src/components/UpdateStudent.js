import React, { useState, useEffect } from 'react';
import { useNavigate, BrowserRouter, Routes, Route, Link, Navigate, useParams } from 'react-router-dom';

const UpdateStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [city, setCity] = useState('');
  const [program, setProgram] = useState('');
  const [group, setGroup] = useState('');
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const personArr = JSON.parse(localStorage.getItem('people')).filter(peopleDetails => peopleDetails.id === params.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && birthDate, city, program, group) {
      const person = { id: new Date().getTime().toString(), firstName, lastName, birthDate, city, program, group };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setLastName('');
      setBirthDate('');
      setCity('');
      setProgram('');
      setGroup('');
    } else {
      console.log('empty values');
    }
  };



   const updatePerson = (id) => {
  
   };


  return (
    <>
    <div className="container p-4">
  <article>
<form className='form' onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="firstName">Vardas</label>
    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Įveskite vardą" value={personArr[0].firstName} onChange={(e) => setFirstName(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="lastName">Pavarde</label>
    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Įveskite pavardę" value={personArr[0].lastName} onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="birthDate">Gimimo data</label>
    <input type="date" className="form-control" id="birthDate" name="birthDate" placeholder="Įveskite gimimo data" value={personArr[0].birthDate} onChange={(e) => setBirthDate(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="birthDate">Miestas</label>
    <input type="text" className="form-control" id="city" name="city" placeholder="Įveskite miestą" value={personArr[0].city} onChange={(e) => setCity(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="program">Programa</label>
    <input type="text" className="form-control" id="program" name="program" placeholder="Įveskite programą" value={personArr[0].program} onChange={(e) => setProgram(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="group">Grupe</label>
    <input type="text" className="form-control" id="group" name="group" placeholder="Įveskite grupę" value={personArr[0].group} onChange={(e) => setGroup(e.target.value)} />
  </div>
  <div className="pt-2 pb-4">
  <button type='submit' className="btn btn-success" onClick={() => updatePerson()}>Update</button>
  </div>
 

</form>
    </article>
     </div>
    </>
  );
};

export default UpdateStudent;