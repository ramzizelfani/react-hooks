import React, { useContext } from 'react';
import { userContext, channelContext } from '../App';
export default function ComponentF() {
  const user = useContext(userContext);
  const channel = useContext(channelContext);
  return (
    <div style={{ backgroundColor: 'red' }}>
      I am {user} and My channel is {channel}
    </div>
  );
}
