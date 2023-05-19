import React, { useState } from 'react';
import '../App.css'
const CarSellForm = () => {
  const [formInput, setFormInput] = useState({
    carMake: '',
    carModel: '',
    year: '',
    mileage: '',
    condition: 'Excellent',
    features: [],
    transmission: 'Automatic',
    priceRange: 0,
    contactNumber: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCheckboxInput = (e) => {
    const { name, checked } = e.target;
    let updatedFeatures = [...formInput.features];
    if (checked) {
      updatedFeatures.push(name);
    } else {
      updatedFeatures = updatedFeatures.filter((feature) => feature !== name);
    }
    setFormInput((prevData) => ({ ...prevData, features: updatedFeatures }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(formInput);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };
  const validateForm = () => {
    const errors = {};
    if (formInput.carMake.trim() === '') {
      errors.carMake = 'Car Make is required';
    }
    if (formInput.carModel.trim() === '') {
      errors.carModel = 'Car Model is required';
    }
    if (formInput.year === '') {
      errors.year = 'Year is required';
    }
    if (formInput.mileage === '') {
      errors.mileage = 'Mileage is required';
    }
    if (formInput.condition === '') {
      errors.condition = 'Condition is required';
    }
    if (formInput.features.length === 0) {
      errors.features = 'At least one feature must be selected';
    }
    if (formInput.transmission === '') {
      errors.transmission = 'Transmission is required';
    }
    if (formInput.priceRange === '') {
      errors.priceRange = 'Price Range is required';
    }
    if (formInput.contactNumber.trim() === '') {
      errors.contactNumber = 'Contact Number is required';
    }
    return errors;
  }
  return (
    <div className='container'>
      <div className='container1'>
<div className='container2'>
<form onSubmit={handleSubmit}>
  <h2>Car Registration Form</h2>
      <label>Car Make:
        <br /> <br />
        <input type="text" name="carMake" value={formInput.carMake} onChange={handleInputChange} className='input' placeholder='Enter car make'/>
        {formErrors.carMake && <span className="error">{formErrors.carMake}</span>}
      </label>
      <br />
      <label className='label'>Car Model:
        <br /> <br />
        <input ype="text" name="carModel" value={formInput.carModel} onChange={handleInputChange} className='input' placeholder='Enter your car model'/>
         {formErrors.carModel && <span className="error">{formErrors.carModel}</span>}
      </label>
      <br />
      <label className='label'>Year:
        <br /> <br />
        <input type="date" name="year" value={formInput.year} onChange={handleInputChange} className='input'/>
         {formErrors.carMake && <span className="error">{formErrors.carMake}</span>}
      </label>
      <br />
      <label className='label'>Mileage:
        <br /> <br />
        <input type="number" name="mileage" value={formInput.mileage} onChange={handleInputChange} className='input' placeholder='Enter your mileage' />
         {formErrors.mileage && <span className="error">{formErrors.mileage}</span>}
      </label>
      <br />
      <div className='both'>
      <div className='condition'>
  <label>Condition:
          <br />
          </label>
          <input type="radio" name="condition" value="Excellent" checked={formInput.condition === 'Excellent'} onChange={handleInputChange} />
          <label>Excellent
          </label>
          <br />
          <label>
          <input type="radio" name="condition" value="Good" checked={formInput.condition === 'Good'} onChange={handleInputChange} />
            Good
          </label>
          <br />
          <input type="radio" name="condition" value="Fair" checked={formInput.condition === 'Fair'} onChange={handleInputChange} />
          <label>Fair</label>
          <br />
          <input type="radio" name="condition" value="Poor" checked={formInput.condition === 'Poor'} onChange={handleInputChange} />
          <label>Poor</label>
        <br />
  </div>
  <div className='features'>
  <label>
          Features:
          <br />
          <input type="checkbox" name="Air Conditioning" checked={formInput.features.includes('Air Conditioning')} onChange={handleCheckboxInput} />
          <label>Air Conditioning</label>
          <br />
          <input type="checkbox" name="Power Steering" checked={formInput.features.includes('Power Steering')} onChange={handleCheckboxInput} />
          <label>Power Steering</label>
          <br />
          <input type="checkbox" name="Power Windows" checked={formInput.features.includes('Power Windows')} onChange={handleCheckboxInput} />
          <label>Power Windows</label>
          <br />
          <input type="checkbox" name="ABS" checked={formInput.features.includes('ABS')} onChange={handleCheckboxInput} />
          <label>ABS</label>
          <br />
          <input type="checkbox" name="Navigation System" checked={formInput.features.includes('Navigation System')} onChange={handleCheckboxInput} />
             {formErrors.features&& <span className="error">{formErrors.features}</span>}
          <label>Navigation System</label>
        </label>
        <br />
  </div>
      </div>
      <label>Transmission:
        <select name="transmission" value={formInput.transmission} onChange={handleInputChange} className='select'>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        {formErrors.transmission && <span className="error">{formErrors.transmission}</span>}
      </label>
      <br />
      <label>Price Range:
        <input type="range" name="priceRange" min="0"  max="100000"  step="1000" value={formInput.priceRange} onChange={handleInputChange} className='price' />
         {formErrors.priceRange && <span className="error">{formErrors.priceRange}</span>}
      </label>
      <br />
      <label>Contact Number:
        <br /> <br />
        <input type="text" name="contactNumber" value={formInput.contactNumber} onChange={handleInputChange} className='input' placeholder='Enter your phone number' />
         {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}
      </label>
      <br />
      <button type="submit" className='submit'>Submit</button>
    </form>
</div>
      </div>
    </div>
  );
};
export default CarSellForm;