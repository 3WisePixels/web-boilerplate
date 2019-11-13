import React, { useState } from 'react';
import { useStateValue } from '../../state';

import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div>
    	<ul>
    	<li>
    		<Link to="/home">
				Home
			</Link>
		</li>
    	<li>
    		<Link to="/about">
    			About
			</Link>
		</li>
    	</ul>
    </div>
  )
}

export default Header;
