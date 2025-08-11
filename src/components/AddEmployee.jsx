import React from 'react';

const AddEmployee = () => {
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b"> 
      <div className="px-8 py-8">
        <div className=""> 
          <h1 className="text-black font-thin text-2xl">Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4"> 
            <label className="block text-blue-600 text-sm font-normal">First NAME FOR EMPLOYEE MANAGEMENT SYSTEM</label>
            <input type="text" className="h-10 w-96 border mt-2 px-2 text-sm focus:outline-none focus:border-blue-500" placeholder="Enter First Name" />
        </div> 
      </div>
    </div>
  );
};

export default AddEmployee