import React, { useState } from 'react';

export default function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  return (
    <div>
      <form>
        <input
          type='text'
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type='text'
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your First Name is - {name.firstName}</h2>
        <h2>Your lastname is {name.lastName} </h2>
      </form>
    </div>
  );
}
