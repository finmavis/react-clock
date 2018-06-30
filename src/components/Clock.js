import React from 'react';

const Clock = (props) => (
    <div className="wrapper d-flex justify-content-center align-items-center flex-column">
        <div className="toggle-date-switch d-flex justify-content-center align-items-center mb-3">
            <label className="switch">
                <input type="checkbox" onChange={props.changed} />
                <span className="slider"></span>
            </label>
            <label className="switch-label ml-2"><i className="far fa-calendar-alt"></i></label>
        </div>

        <div className="clock-wrapper d-flex justify-content-center align-items-center flex-column">
            <div className="clock-time">{(props.date).toLocaleTimeString()}</div>
            {props.showDate ? <div className="clock-date">{(props.date).toLocaleDateString('en-US', props.options)}</div> : null}
        </div>
    </div>
);

export default Clock;