import React, { useState } from 'react';
import GraphComponent from './Graph'; // Use your existing Graph component
import './AdminPage.css';

const AdminPage = ({ data, setData, setResults, handleLogout }) => {
  const [title, setTitle] = useState('');
  const [section, setSection] = useState('');
  const [first, setFirst] = useState({ name: '', group: '' });
  const [second, setSecond] = useState({ name: '', group: '' });
  const [third, setThird] = useState({ name: '', group: '' });

  const [groupValues, setGroupValues] = useState({
    'group-A': 10,
    'group-B': 20,
    'group-C': 15,
    'group-D': 25,
  });

  const [updatedGroup, setUpdatedGroup] = useState('');
  const [updatedValue, setUpdatedValue] = useState('');

  // Update graph data based on admin input
  const handleGraphChange = () => {
    // Validate input
    if (!updatedGroup || !updatedValue) {
      alert('Please select a group and enter a value');
      return;
    }

    // Ensure the new value is a valid number
    const parsedValue = parseInt(updatedValue, 10);
    if (isNaN(parsedValue)) {
      alert('Please enter a valid number for the value');
      return;
    }

    // Create new data array with updated value
    const newData = data.map(item => 
      item.name === updatedGroup 
        ? { ...item, value: parsedValue } 
        : item
    );

    // Update both local state and parent state
    setGroupValues({
      ...groupValues,
      [updatedGroup]: parsedValue,
    });
    setData(newData);
  };

  // Submit and store results in parent App.js
  const handleResultSubmit = () => {
    // Validate inputs
    if (!title || !section || !first.name || !second.name || !third.name) {
      alert('Please fill in all fields');
      return;
    }

    const newResult = {
      title,
      section,
      first: { name: first.name, group: first.group || 'A' },
      second: { name: second.name, group: second.group || 'B' },
      third: { name: third.name, group: third.group || 'C' }
    };

    // Use the setResults prop to update results in App.js
    setResults(prevResults => [...prevResults, newResult]);

    // Clear the form after submitting
    setTitle('');
    setSection('');
    setFirst({ name: '', group: '' });
    setSecond({ name: '', group: '' });
    setThird({ name: '', group: '' });
  };

  return (
    <div className="admin-page">
      <h2>Admin Section</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>

      {/* Graph Management */}
      <div className="graph-section">
        <h3>Manage Group Values</h3>

        <div className="input-container">
          <label>Group Name: </label>
          <select
            value={updatedGroup}
            onChange={(e) => setUpdatedGroup(e.target.value)}
            className="group-select"
          >
            <option value="">Select Group</option>
            {Object.keys(groupValues).map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label>New Value: </label>
          <input
            type="number"
            value={updatedValue}
            onChange={(e) => setUpdatedValue(e.target.value)}
            className="group-input"
          />
        </div>
        <button onClick={handleGraphChange} className="update-button">
          Update Value
        </button>
      </div>

      {/* Results Management */}
      <div className="results-section">
        <h3>Manage Results</h3>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="result-input"
        />
        <input
          type="text"
          placeholder="Section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="result-input"
        />
        <div className="result-group">
          <input
            type="text"
            placeholder="1st Prize Name"
            value={first.name}
            onChange={(e) => setFirst({ ...first, name: e.target.value })}
            className="result-input"
          />
          <input
            type="text"
            placeholder="1st Prize Group"
            value={first.group}
            onChange={(e) => setFirst({ ...first, group: e.target.value })}
            className="result-input"
          />
        </div>
        <div className="result-group">
          <input
            type="text"
            placeholder="2nd Prize Name"
            value={second.name}
            onChange={(e) => setSecond({ ...second, name: e.target.value })}
            className="result-input"
          />
          <input
            type="text"
            placeholder="2nd Prize Group"
            value={second.group}
            onChange={(e) => setSecond({ ...second, group: e.target.value })}
            className="result-input"
          />
        </div>
        <div className="result-group">
          <input
            type="text"
            placeholder="3rd Prize Name"
            value={third.name}
            onChange={(e) => setThird({ ...third, name: e.target.value })}
            className="result-input"
          />
          <input
            type="text"
            placeholder="3rd Prize Group"
            value={third.group}
            onChange={(e) => setThird({ ...third, group: e.target.value })}
            className="result-input"
          />
        </div>
        <button onClick={handleResultSubmit} className="submit-button">
          Publish Results
        </button>
      </div>

      {/* Graph Display */}
      <GraphComponent data={data} />
    </div>
  );
};

export default AdminPage;
