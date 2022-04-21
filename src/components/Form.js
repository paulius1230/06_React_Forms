import React, { Component } from "react";
import List from "./List";
import swal from 'sweetalert';

export default class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name: "",
      surname: "",
      date: "",
      city: "",
      program: "",
      group: "",
      btn: "Pridėti",
      updateId: "",
    };
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    if (this.state.btn === "Pridėti") {
      const data = [
        ...this.state.users,
        {
          id: Date.now(),
          name: this.state.name,
          surname: this.state.surname,
          date: this.state.date,
          city: this.state.city,
          program: this.state.program,
          group: this.state.group
        },
      ];
      console.log(data);
      this.setState({
        users: data,
        name: "",
        surname: "",
        date: "",
        city: "",
        program: "",
        group: "",
      });
    } else {
      const data = [...this.state.users];
      const index = this.state.users.findIndex(
        (user) => user.id === this.state.updateId
      );
      data[index] = {
        ...data[index],
        name: this.state.name,
        surname: this.state.surname,
        date: this.state.date,
        city: this.state.city,
        program: this.state.program,
        group: this.state.group
      };
      this.setState({
        users: data,
        btn: "Pridėti",
        name: "",
        surname: "",
        date: "",
        city: "",
        program: "",
        group: "",
      });
    }
  };

  deleteUser = (id) => {
    const data = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: data,
    });
    swal("Jūsų įrašas pašalintas!");
  };

  editUser = (user) => {
    this.setState({
      name: user.name,
      surname: user.surname,
      city: user.city,
      btn: "Atnaujinti",
      updateId: user.id,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <form className="border p-3" onSubmit={this.submitForm}>
              <h3 className="mb-3">Mokinių registras</h3>
              <div className="form-group">
                <label htmlFor="name">Vardas</label>
                <input
                  type="text" required
                  className="form-control"
                  id="name"
                  placeholder="Įveskite vardą"
                  value={this.state.name}
                  name="name"
                  onChange={this.inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Pavardė</label>
                <input
                  type="text" required
                  className="form-control"
                  id="surname"
                  placeholder="Įveskite pavardę"
                  value={this.state.surname}
                  name="surname"
                  onChange={this.inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Gimimo metai</label>
                <input
                  type="date" required
                  className="form-control"
                  id="date"
                  placeholder="Gimimo metai"
                  value={this.state.date}
                  name="date"
                  onChange={this.inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Miestas</label>
                <input
                  type="text" required
                  className="form-control"
                  id="city"
                  placeholder="Įveskite miestą"
                  value={this.state.city}
                  name="city"
                  onChange={this.inputChange}
                />
              </div>
              <div className="form-group">
              <label htmlFor='program'>Programa: </label>
            <select className="form-select" aria-label="Default select example" id='program'  required={true} name='program' onChange={this.inputChange} value={this.state.program}>
              <option disabled selected value="">--Pasirinkite--</option>
              <option value="PHP">PHP</option>
              <option value="JavaScript">JavaScript</option>
              <option value="JAVA">JAVA</option>
            </select>
          </div>
          <div className="form-group">
              <label htmlFor='group'>Grupė: </label>
            <select className="form-select" aria-label="Default select example" id='group' required={true} name='group' onChange={this.inputChange} value={this.state.group}>
              <option disabled selected value="">--Pasirinkite--</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
              <button type="submit" className="btn btn-primary">
                {this.state.btn}
              </button>
            </form>
          </div>
          <div className="col-8">
            {this.state.users.length > 0 && (
              <List
                users={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}