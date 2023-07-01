import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function plan  (){
  return (
    <div className=''>
      <h1 className='d-flex justify-content-center align-items-center rounded bg-secondary m-0'>Making  Plan  Process </h1>
<div className='d-flex justify-content-center align-items-center rounded bg-secondary m-0'>


<table className="bg-white p-3  w-25">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" >1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
  )
}

export default plan
