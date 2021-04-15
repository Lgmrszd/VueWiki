export default [
  {
    path: '/developers/websocketapi',
    name: 'WikiDeveloperWebSocketAPI',
    component: () => import('@/views/developers/WebSocketAPI')
  },
  {
    path: '/developers/api',
    name: 'WikiDeveloperAPI',
    component: () => import('@/views/developers/API')
  },
  {
    path: '/developerapi',
    name: 'WikiDeveloperLAPI',
    component: () => import('@/views/developers/API')
  }
]
