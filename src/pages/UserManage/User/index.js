import React from 'react';

import './style.less';

const User= (props) => {
  return <div>user {props.match.params.id}</div>;
};

export default User;