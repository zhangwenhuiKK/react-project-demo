import React from 'react'
import { Link } from 'react-router-dom';
const UserList = ({ match }) => {
    const dataList = []
    return <div>
        <ul>
            <li> <Link to={`/admin/umanage/user/1`}>user 1</Link></li>
            <li> <Link to={`/admin/umanage/user/2`}>user 2</Link></li>
            <li> <Link to={`/admin/umanage/user/3`}>user 3</Link></li>
        </ul>
    </div>
}
export default UserList