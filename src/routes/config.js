export default {
  menus: [ // 菜单相关路由
    {
      key: '/app/a',
      title: 'Dashboard',
      icon: 'mobile',
      subs: []
    },
    {
      key: '/app/b',
      title: 'Manage',
      icon: 'mobile',
      subs: []
    },
    {
      key: '/app/c',
      title: 'My Finances',
      icon: 'mobile',
      subs: []
    },
    {
      key: '/app/dashboard/index',
      title: 'Investment',
      icon: 'mobile',
      subs: [{
          key: '/app/dashboard/index',
          title: 'Explore Opportunities',
          component: 'Dashboard'
        },
        {
          key: '/app/dashboard/portfolio',
          title: 'My Portfolio',
          component: 'Portfolio'
        }
      ]
    },
    {
      key: '/app/d',
      title: 'Pay or request',
      icon: 'mobile',
      subs: []
    },
    {
      key: '/app/e',
      title: 'Notifications',
      icon: 'mobile',
      subs: []
    },
    {
      key: '/app/f',
      title: 'Chats',
      icon: 'mobile',
      subs: []
    },
    {
      key: '/app/g',
      title: 'Homes',
      icon: 'mobile',
      subs: []
    }
  ],
  others: [] // 非菜单相关路由
}