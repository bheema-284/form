import React from 'react';

function Form() {
  return (
    <div className="container w-50 text-start">
      <h2 className="text-center mb-5">Application Form </h2>

      <form className="row gx-3 gy-2 align-items-center">
        <div className="col-sm-3">
          <label className="">Name</label>
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col-sm-3">
          <label className="">Age</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Age" />
          </div>
        </div>
        <div className="col-sm-3">
          <label className="">Department</label>
          <select className="form-select">
            <option selected>Choose...</option>
            <option value="Science">Science</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
          </select>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-sm-3">
          <label className="">Salary</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Salary" />
          </div>
        </div>
        <div className="col-8">
          <label className="form-check-label">Martial Status</label>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="Single" />
            <label className="form-check-label">Single</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="Married" />
            <label className="form-check-label">Married</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Divorced</label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
