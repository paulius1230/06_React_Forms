import React, { useState, useEffect, useReducer, createContext } from 'react';
import { useNavigate, BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const StudentForm = () => {
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


  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople( newPeople);
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
  <button type='submit' className="btn btn-success">Add person</button>
  </div>
</form>

<>
            <div className="container">
            <div className="row bg-success d-flex align-items-center pt-2 pb-2 text-white">
            <div className="col-2">
            Firstname
            </div>
            <div className="col-2">
            Lastname
            </div>
            <div className="col-2">
            Birthdate
            </div><div className="col-2">
            City
            </div>
            <div className="col-2">
            Program
            </div>
            <div className="col-2">
            Group
            </div>
            </div>
            </div>
            </>
        {people.map((person) => {
          const { id, firstName, lastName, birthDate, city, program, group } = person;
          return (
            <div key={id} className="row p-2 pt-4 fw-bold">
            <div className="col-2">
            {firstName}
            </div>   
            <div className="col-2">
            {lastName}
            </div>   
            <div className="col-2">
            {birthDate}
            </div>   
            <div className="col-2">
            {city}
            </div>   
            <div className="col-2">
            {program}
            </div>   
            <div className="col-2">
            {group}
            </div>

            <div className="row pt-4 pb-4">
            <div className="col-12">
            <button type='submit' className="btn btn-success float-end" onClick={() => navigate("/update/"+id)}>Edit person</button>
            <button type='submit' className="btn btn-danger float-end mx-2" onClick={() => removePerson(id)}>Delete person</button>
            </div>
            </div>
            <hr/>
            </div>
          );
        })}
      </article>
      </div>
    </>
  );
};

export default StudentForm;