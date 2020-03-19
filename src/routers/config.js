import { lazy } from 'react';
const config = [
                  {
                    path: '/user/about',
                    component: lazy(() => import('@/pages/About')),
                  },
                  {
                    path: '/user/articles',
                    component: lazy(() => import('@/pages/ArticleList')),
                    name: '文章',
                    icon: 'home'
                  },
                  {
                    path: '/user/article/:id',
                    component: lazy(() => import('@/pages/Article')),
                  },
                  {
                    path: '/user/categories',
                    component: lazy(() => import('@/pages/Categories')),
                    name: '分类',
                    icon: 'folder'
                  },
                  {
                    path: '/user/category/:name',
                    component: lazy(() => import('@/pages/ArticleList')),
                  },
                  {
                    path: '/admin/umanage',
                    name: '用户管理',
                    icon: 'setting',
                    childRoutes: [
                      {
                        path: '/admin/umanage/users',
                        component: lazy(() => import('@/pages/UserManage/UserList')),
                        name: '所有用户',
                        icon: 'user',
                    
                      },
                      {
                        path: '/admin/umanage/user/:id',
                        component: lazy(() => import('@/pages/UserManage/User')),
                        exact: true
                      },
                      {
                        path: '/admin/umanage/user/:id/edit',
                        component: lazy(() => import('@/pages/UserManage/EditUser')),
                      },
                      {
                        path: '/admin/umanage/adduser',
                        component: lazy(() => import('@/pages/UserManage/AddUser')),
                        name: '新增用户',
                        icon: 'create'
                      },
                      {
                        redirect: '/exception'
                      }    
                    ]
                  },
                  {
                    path: '/exception',
                    component: lazy(() => import('@/pages/Exception/404')),
                  },
                  {
                    redirect: '/exception'
                  },
                  
        ]

export default config;