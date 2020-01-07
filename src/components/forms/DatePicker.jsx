import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Popover from '../popovers/Popover';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const DatePicker = ({}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <React.Fragment>
      <Popover
        trigger={
          <input type="text" value={selectedDate && selectedDate.toLocaleDateString()} />
        }
      >
        <div className="elevation--2 rounded--all">
          <DayPicker
            className="fdsDatePicker"
            onDayClick={setSelectedDate}
            selectedDays={selectedDate}
          />
        </div>
      </Popover>
    </React.Fragment>
  );
};

DatePicker.propTypes = {};

export default DatePicker;
