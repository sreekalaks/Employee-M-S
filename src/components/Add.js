import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
function Add() {
  const history=useNavigate()

  const [id,setId]=useState('');
   const [empname,setEmpname]=useState('');
   const [age,setAge]=useState('');
   const [designation,setDesignation]=useState('');
   const [salary,setSalary]=useState(0);

    const handleUpdate=(e)=>{
      e.preventDefault();//prevent refreshing


     let ids=uuid();
     console.log(ids);

    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);

    
    Employee.push({
      id:uniqueId,
      empname:empname,
      age:age,
      designantion:designation,
      salary:salary

    })
      history('/')
    }


  return (
    <>
     <h1 className='text-primary text-center m-4'>Update Management System</h1>
    <p className='p-3'>An employee management system is a core part of HR. This article will go over the best tools to manage employee records, work history, and other important employee data.

If youare researching HR technology, youare probably doing so for one of two reasons. 1 You need an improvement to the system you currently use and are looking for an employee management app that has more (or better) features than what you are used to. 2 You are a growing business looking to implement employee management software for the first time. Either way, we can help.</p>
   <Row>
    <Col md={4}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnNyE-B3aGXRTXKKH0Gk0Nm2v_iHzZmrVmg&usqp=CAU'/>
    </Col>
    
    <Col md={7}>
    <Form className='border border-3 p-5'>
      <Form.Group className="mb-3" >
        <Form.Label>ID</Form.Label>
        <Form.Control type="email" placeholder="Enter your ID"
        // value={id}
        onChange={(e)=>setId(e.target.value)}
        required

        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name"
        // value={empname}
        onChange={(e)=>setEmpname(e.target.value)}
        required

        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="email" placeholder="Enter your age" 
        // value={age}
        onChange={(e)=>setAge(e.target.value)}
        required

        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Designantion</Form.Label>
        <Form.Control type="email" placeholder="Enter your designation" 
        // value={designation}
        onChange={(e)=>setDesignation(e.target.value)}
        required

        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>salary</Form.Label>
        <Form.Control type="email" placeholder="Enter Your salary" 
        // value={salary}
        onChange={(e)=>setSalary(e.target.value)}
        required

        />
      </Form.Group>



      
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
       Add
      </Button>
    </Form>
    </Col>
   </Row>
    </>
  )
    
  
}

export default Add