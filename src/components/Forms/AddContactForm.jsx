import { useState } from "react";
import {Form, Label, Input, Button} from "./AddContactForm.styled";

const AddContactForm = ({onSubmit})=> {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = (e) =>  {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(name, number);
    resetForm();
  }

  const resetForm = () => {
    setName('')
    setNumber('')
    };
  
    return (
      <>
      <Form onSubmit={handleSubmit} >
      <Label htmlFor='exampleInputEmail1' className='form-label'>
        Name
      </Label>
      <Input
        name='name'
        type='text'
        className='form-control'
        id='exampleInputEmail1'
        aria-describedby='emailHelp'
        value={name}
        onChange={handleChange}
        required
      />
      <Label htmlFor='exampleInputEmail1' className='form-label'>
        Number
      </Label>
      <Input 
      type="tel" 
      name="number" 
      value={number}
      onChange={handleChange}
      required
      />
    <Button type='submit' className='btn btn-primary'>
      Add contact
    </Button>
  </Form>
  </>
    )
  };  


export default AddContactForm;