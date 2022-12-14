import React, { useState } from 'react';
import { STUDENTS } from "../studentsList";
// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search({onSearch}) {

  const [stName, setStName] = useState("");
  const [joinDate, setJoinDate] = useState("");

    const onAddStudent = () => {
    const searchedStudent = STUDENTS.filter(
      (student) => student.name.toLowerCase() === stName.toLowerCase()
    );
    if (searchedStudent[0]) {
      const name = searchedStudent[0].name;
      const checkExists = true;
      const validity = checkValidity(joinDate, searchedStudent[0].validityDate);
      onSearch(name, checkExists, validity);
      console.log(name, checkExists, validity);
    } else {
      const checkExists = false;
      const validity = false;
      onSearch(stName, checkExists, validity);
      console.log(stName, checkExists, validity);
    }
    setJoinDate("");
    setStName("");
  };
	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10"
          value={stName} onChange={(e) => setStName(e.target.value)}/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10"
          value={joinDate} onChange={(e) => setJoinDate(e.target.value)}/>
				</div>
			</label>
			<button type="button" onClick={onAddStudent} data-testid="addBtn" className="small mb-0">Add</button>
		</div>
	);
}

export default Search;
