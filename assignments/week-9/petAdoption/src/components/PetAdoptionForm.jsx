import { useState } from "react"
import AdopterData from "./AdopterData";

const PetAdoptionForm = () => {
    const [values, setValues] = useState({
        petName: "",
        petType: "Cat",
        breed: "",
        adopterName: "",
        email: "",
        phone: ""
    });
    const [formData, setFormData]  = useState([])
    const [showTable, setShowTable] = useState(false)
    function handleChange(event){
        const { name, value } = event.target;
        setValues({
            ...values,
             [name]: value
            })
    }
    
    const data = { 
        petName: values.petName, petType: values.petType, breed: values.breed,
        adopterName: values.adopterName,  email: values.email, phone: values.phone}
    function handleSubmit(event){
        event.preventDefault()
        setFormData(prev => [...prev, data])
        console.log(formData)
        setShowTable(true)
    }
    const handleGoBack = () => setShowTable(!showTable);

   
    if(showTable){
        return <div>
            <AdopterData formData={formData} handleGoBack={handleGoBack}></AdopterData>
        </div>
    }

    return <div>
            <div className='form'>
                <div>
                    <label htmlFor="petName">Pet Name</label>
                    <input
                        type="text"
                        name="petName"
                        placeholder="Pet Name"
                        value={values.petName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="petType">Pet Type</label>
                    <select value={values.petType} name="petType" onChange={handleChange}>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Bird">Bird</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="breed">Breed</label>
                    <input
                        type="text"
                        name="breed"
                        placeholder="Breed"
                        value={values.breed}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='adopterName'>Your Name</label>
                    <input type="text"
                        name="adopterName"
                        placeholder='Your Name'
                        value={values.adopterName}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input type="email" name="email" placeholder='Email' value={values.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor='phone'>
                        Phone
                    </label>
                    <input type="text"
                        name="phone"
                        placeholder='Phone'
                        value={values.phone}
                        onChange={handleChange} />

                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
    </div>
}

export default PetAdoptionForm