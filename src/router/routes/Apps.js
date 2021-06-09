import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/Dashboard',
    className: 'ecommerce-application',
    component: lazy(() => import('../../UserScreens/Dashboard'))
  },
  {
    path: '/stocks',
    className: 'ecommerce-application',
    component: lazy(() => import('../../UserScreens/Stocks'))
  },
  {
    path: '/apps/profile',
    component: lazy(() => import('../../views/pages/profile'))
  },
  {
    path: '/home',
    component: lazy(() => import('../../UserScreens/Home'))
  },
  {
    path: '/addsalesinvoice',
    component: lazy(() => import('../../UserScreens/AddSalesInvoice'))
  },
  {
    path: '/addpurchaseinvoice',
    component: lazy(() => import('../../UserScreens/AddPurchaseInvoice'))
  },
  {
    path: '/addproduct',
    component: lazy(() => import('../../UserScreens/AddNewProduct'))
  },
  {
    path: '/apps/product/list',
    component: lazy(() => import('../../views/apps/product/list'))
  },
  {
    path: '/apps/inwardpayment/list',
    component: lazy(() => import('../../views/apps/inwardPayment/list'))
  },
  {
    path: '/apps/outwardpayment/list',
    component: lazy(() => import('../../views/apps/outwardPayment/list'))
  },
  {
    path: '/apps/transport/list',
    component: lazy(() => import('../../views/apps/transport/list'))
  },
  {
    path: '/apps/setting/list',
    component: lazy(() => import('../../views/apps/staffMember/list'))
  },
  {
    path: '/apps/customer/list',
    component: lazy(() => import('../../views/apps/customer/list'))
  },
  {
    path: '/apps/saleinvoice/list',
    component: lazy(() => import('../../views/apps/saleInvoice/list'))
  },
  {
    path: '/apps/purchaseinvoice/list',
    component: lazy(() => import('../../views/apps/purchaseInvoice/list'))
  },
  {
    path: '/apps/stock/list',
    component: lazy(() => import('../../views/apps/stock/list'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: '/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  }
]

export default AppRoutes
