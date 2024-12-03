import React, { useState } from 'react';

const ResultsAdmin = ({ results, setResults }) => {
  const [title, setTitle] = useState('');
  const [section, setSection] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [groupPoints, setGroupPoints] = useState({
    'group-A': '',
    'group-B': '',
    'group-C': '',
    'group-D': ''
  });

  const handleAddResult = () => {
    const newResult = {
      title,
      section,
      first: { name: first, group: 'A' },
      second: { name: second, group: 'B' },
      third: { name: third, group: 'C' }
    };
    setResults([...results, newResult]);
    setTitle('');
    setSection('');
    setFirst('');
    setSecond('');
    setThird('');
  };

  const handleGroupPointsChange = (group, value) => {
    setGroupPoints({
      ...groupPoints,
      [group]: value
    });
  };

  return (
    <div>
      <h4>Add New Result</h4>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Section"
        value={section}
        onChange={(e) => setSection(e.target.value)}
      />
      <input
        type="text"
        placeholder="1st Prize"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <input
        type="text"
        placeholder="2nd Prize"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <input
        type="text"
        placeholder="3rd Prize"
        value={third}
        onChange={(e) => setThird(e.target.value)}
      />

      {/* Group Points Section */}
      <div>
        <h5>Update Group Points</h5>
        {['group-A', 'group-B', 'group-C', 'group-D'].map((group) => (
          <div key={group}>
            <label>{group} Points: </label>
            <input
              type="number"
              value={groupPoints[group]}
              onChange={(e) => handleGroupPointsChange(group, e.target.value)}
            />
          </div>
        ))}
      </div>

      <button onClick={handleAddResult}>Add Result</button>
    </div>
  );
};

export default ResultsAdmin;
