import React, { useState } from 'react';
import { useNavigate, BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

const UpdateStudent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [city, setCity] = useState('');
  const [program, setProgram] = useState('');
  const [group, setGroup] = useState('');
  const [people, setPeople] = useState([]);
 const navigate = useNavigate();

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
    navigate("/");
  };




  return (
    <>
    <div className="container p-4">
  <article>
<form className='form' onSubmit={handleSubmit}>


  <div className="form-group">
    <label htmlFor="firstName">Vardas</label>
    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Įveskite vardą" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="lastName">Pavarde</label>
    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Įveskite pavardę" value={lastName} onChange={(e) => setLastName(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="birthDate">Gimimo data</label>
    <input type="date" className="form-control" id="birthDate" name="birthDate" placeholder="Įveskite gimimo data" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="birthDate">Miestas</label>
    <input type="text" className="form-control" id="city" name="city" placeholder="Įveskite miestą" value={city} onChange={(e) => setCity(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="program">Programa</label>
    <input type="text" className="form-control" id="program" name="program" placeholder="Įveskite programą" value={program} onChange={(e) => setProgram(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="group">Grupe</label>
    <input type="text" className="form-control" id="group" name="group" placeholder="Įveskite grupę" value={group} onChange={(e) => setGroup(e.target.value)} />
  </div>
  <div className="pt-2 pb-4">
  <button type='submit' className="btn btn-success" onClick={updatePerson}>Update</button>
  </div>
</form>
    </article>
     </div>
    </>
  );
};

export default UpdateStudent;