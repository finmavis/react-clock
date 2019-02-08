import React from 'react';

import useDate from '../hooks/date';
import useToggle from '../hooks/toggle';

import { options } from '../clockOptions';

const Clock = props => {
  const date = useDate();
  const { show, toggle } = useToggle(false);

  return (
    <div className='wrapper d-flex justify-content-center align-items-center flex-column'>
      <div className='toggle-date-switch d-flex justify-content-center align-items-center mb-3'>
        <label className='switch'>
          <input type='checkbox' onChange={toggle} />
          <span className='slider' />
        </label>
        <label className='switch-label ml-2'>
          <i className='far fa-calendar-alt' />
        </label>
      </div>

      <div className='clock-wrapper d-flex justify-content-center align-items-center flex-column'>
        <div className='clock-time'>{date.toLocaleTimeString()}</div>
        {show ? (
          <div className='clock-date'>
            {date.toLocaleDateString('en-US', options)}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Clock;
