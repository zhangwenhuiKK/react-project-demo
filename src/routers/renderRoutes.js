import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loading from '@/components/Loading';

export const renderRoutes = ( routes, role ) => {
    if (!Array.isArray(routes)) {
        return null;
    }

    return <Switch>
            {routes.map((route, index) => {
                if (route.redirect) {
                    return (
                      <Redirect
                        key={route.path || index}
                        to={route.redirect}
                      />
                    );
                  }else{
                    return renderRoute(route, role)
                  }
            })}
          </Switch>
  }
 const renderRoute = (route, role) => {
      if(route.path.includes('admin') && role != 1){
         return null
      }
      const childRoutes = renderRoutes(route.childRoutes, role)
      return (
        <Route
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => {
              if(route.component) {
                return( 
                      <Suspense fallback={<Loading />}>
                          <route.component {...props} childRoutes ={ childRoutes } />
                      </Suspense>
                      )
               }else{
                 return childRoutes
               }
            }}
          />
        );
  }
