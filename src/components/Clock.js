import React from 'react';

const Clock = ({ changed, date, showDate, options }) => (
  <div className='wrapper d-flex justify-content-center align-items-center flex-column'>
    <div className='toggle-date-switch d-flex justify-content-center align-items-center mb-3'>
      <label className='switch'>
        <input type='checkbox' onChange={changed} />
        <span className='slider' />
      </label>
      <label className='switch-label ml-2'>
        <i className='far fa-calendar-alt' />
      </label>
    </div>

    <div className='clock-wrapper d-flex justify-content-center align-items-center flex-column'>
      <div className='clock-time'>{date.toLocaleTimeString()}</div>
      {showDate ? (
        <div className='clock-date'>
          {date.toLocaleDateString('en-US', options)}
        </div>
      ) : null}
    </div>
  </div>
);

export default Clock;
