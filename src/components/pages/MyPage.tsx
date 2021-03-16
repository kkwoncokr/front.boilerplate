

import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { withRouter,RouteComponentProps } from 'react-router';
import { LOGIN_CHECK } from '../../apollo/querys/Auth';
import useLogout from '../../hooks/useLogout';
import MyInfo from '../component/user/MyInfo'


function MyPage({history}:RouteComponentProps) {
    const {handleLogout} = useLogout();
    const currentUser = useQuery(LOGIN_CHECK);
    const user = currentUser.data?.user;

    const token = localStorage.getItem('Authorization')
    useEffect(() => {
        if (!token) {
            history.push('/signin')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])

    if (!user) return null;
    return(
        <MyInfo onClick={handleLogout} user={user}/>
    );
}

export default withRouter(MyPage);