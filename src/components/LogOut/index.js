import React from 'react';

import { auth } from '../../firebase';

const LogOutButton = () =>
  <button
    type="button"
    onClick={auth.doLogOut}
  >
    Log Out
  </button>

export default LogOutButton;
