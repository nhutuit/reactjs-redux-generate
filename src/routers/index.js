/**
* @Author: Tran Van Nhut <nhutdev>
* @Date:   2016-12-05T12:08:17+07:00
* @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2016-12-05T14:27:44+07:00
*/

import Body from '../components/body/index';

import Layout from '../view/layout/index';
import ViewIndex from '../view/index';
import ReactBase from 'react-base';
import {push} from 'react-router-redux';
import React from 'react';
import {Route, IndexRoute} from 'react-router';

const requireAuthentication = ReactBase.AuthWrapper.UserAuthWrapper({
  authSelector: state => state.authData,
  predicate: auth => auth.isAuthenticated,
  redirectAction: push,
  wrapperDisplayName: 'UserIsAuthenticated'
});

module.exports = (
  <Route path='/' component={ViewIndex}>
    <Route component={Layout.Index.default}>
      <IndexRoute component={Body}/>
    </Route>
  </Route>
);
