import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom"
import { Contact } from './components/pages/Contact';
import { About } from './components/pages/About';
import { Home } from './components/pages/Home';
import { Services } from './components/pages/Services';
import { Header1 } from './components/Header1';
import { Staff } from './components/pages1/Staff';
import { Parent } from './components/pages1/Parent';
import { Student } from './components/pages1/Student';
import { Contractor } from './components/pages1/Contractor';
import { DateTime } from 'luxon';
import { useMemo } from 'react'
import BasicTable from './components/BasicTable'
import movies from './MOCK_DATA.json' 

function App() {
  const data = useMemo(() => movies, [])

  const movieColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Email',
      accessorKey: 'email',
    },
    {
      header: 'First Name',
      accessorKey: 'first_name',
    },
    {
      header: 'Last First',
      accessorKey: 'last_first',
    },
    {
      header: 'Last Name',
      accessorKey: 'last_name',
    },
    {
      header: 'Biometric ID',
      accessorKey: 'b_id',
    },
    {
      header: 'Contractor Employer',
      accessorKey: 'contractor_employer',
    },
    {
      header: 'Contractor ID',
      accessorKey: 'c_id',
    },
    {
      header: 'DOB',
      accessorKey: 'dob',
    },
    {
      header: 'DOJ',
      accessorKey: 'doj',
    },
    {
      header: 'Employer',
      accessorKey: 'employer',
    },
    {
      header: 'Action',
      accessorKey: 'action',
      type:"button"
    },
  ]
  return (
    <div className="App">
      
      <Header/>
      <Header1/>
      <Routes>
      <Route path ="/" element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path ="/contact" element = {<Contact/>} />
        <Route path ="/services" element = {<Services/>} />
      </Routes>
      <Routes>
        <Route path = "/staff" element = {<Staff/>} />
        <Route path ="/parent" element = {<Parent/>} />
        <Route path ="/student" element = {<Student/>} />
        <Route path ="/contractor" element = {<Contractor/>} />
      </Routes>
      <Navbar/>
     <div className='container mt-5'>
      
      <BasicTable data={data} columns={movieColumns} />
     </div>
    </div>
  );
}
export default App;
