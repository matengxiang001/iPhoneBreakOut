import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import error from '../views/error'
import upgrade from '../views/upgrade'
import sources from '../views/sources'
import breakoutRelevant from '../views/breakoutRelevant'
import addSource from '../views/addSource'
import breakout from '../views/breakout'
import PanGu from '../views/PanGu'
import YaLu from '../views/YaLu'
import Electra from '../views/Electra'
import Unc0ver from '../views/Unc0ver'
import Chimera from '../views/Chimera'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sb',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mt',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/jfq',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/oy',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/404',
      name: 'error',
      component: error
    },
    {
      path: '/sb/upgrade',
      name: 'upgrade',
      component: upgrade
    },
    {
      path: '/sb/sources',
      name: 'sources',
      component: sources
    },
    {
      path: '/sb/breakoutRelevant',
      name: 'breakoutRelevant',
      component: breakoutRelevant
    },
    {
      path: '/sb/sources/addSource',
      name: 'addSource',
      component: addSource
    },
    {
      path: '/sb/breakout',
      name: 'breakout',
      component: breakout
    },
    {
      path: '/sb/breakout/pangu',
      name: 'PanGu',
      component: PanGu
    },
    {
      path: '/sb/breakout/yalu',
      name: 'YaLu',
      component: YaLu
    },
    {
      path: '/sb/breakout/electra',
      name: 'Electra',
      component: Electra
    },
    {
      path: '/sb/breakout/unc0ver',
      name: 'Unc0ver',
      component: Unc0ver
    },
    {
      path: '/sb/breakout/chimera',
      name: 'Chimera',
      component: Chimera
    },
    {
      path: '/mt/upgrade',
      name: 'upgrade',
      component: upgrade
    },
    {
      path: '/mt/sources',
      name: 'sources',
      component: sources
    },
    {
      path: '/mt/breakoutRelevant',
      name: 'breakoutRelevant',
      component: breakoutRelevant
    },
    {
      path: '/mt/sources/addSource',
      name: 'addSource',
      component: addSource
    },
    {
      path: '/mt/breakout',
      name: 'breakout',
      component: breakout
    },
    {
      path: '/mt/breakout/pangu',
      name: 'PanGu',
      component: PanGu
    },
    {
      path: '/mt/breakout/yalu',
      name: 'YaLu',
      component: YaLu
    },
    {
      path: '/mt/breakout/electra',
      name: 'Electra',
      component: Electra
    },
    {
      path: '/mt/breakout/unc0ver',
      name: 'Unc0ver',
      component: Unc0ver
    },
    {
      path: '/mt/breakout/chimera',
      name: 'Chimera',
      component: Chimera
    },
    {
      path: '/jfq/upgrade',
      name: 'upgrade',
      component: upgrade
    },
    {
      path: '/jfq/sources',
      name: 'sources',
      component: sources
    },
    {
      path: '/jfq/breakoutRelevant',
      name: 'breakoutRelevant',
      component: breakoutRelevant
    },
    {
      path: '/jfq/sources/addSource',
      name: 'addSource',
      component: addSource
    },
    {
      path: '/jfq/breakout',
      name: 'breakout',
      component: breakout
    },
    {
      path: '/jfq/breakout/pangu',
      name: 'PanGu',
      component: PanGu
    },
    {
      path: '/jfq/breakout/yalu',
      name: 'YaLu',
      component: YaLu
    },
    {
      path: '/jfq/breakout/electra',
      name: 'Electra',
      component: Electra
    },
    {
      path: '/jfq/breakout/unc0ver',
      name: 'Unc0ver',
      component: Unc0ver
    },
    {
      path: '/jfq/breakout/chimera',
      name: 'Chimera',
      component: Chimera
    },
    {
      path: '/oy/upgrade',
      name: 'upgrade',
      component: upgrade
    },
    {
      path: '/oy/sources',
      name: 'sources',
      component: sources
    },
    {
      path: '/oy/breakoutRelevant',
      name: 'breakoutRelevant',
      component: breakoutRelevant
    },
    {
      path: '/oy/sources/addSource',
      name: 'addSource',
      component: addSource
    },
    {
      path: '/oy/breakout',
      name: 'breakout',
      component: breakout
    },
    {
      path: '/oy/breakout/pangu',
      name: 'PanGu',
      component: PanGu
    },
    {
      path: '/oy/breakout/yalu',
      name: 'YaLu',
      component: YaLu
    },
    {
      path: '/oy/breakout/electra',
      name: 'Electra',
      component: Electra
    },
    {
      path: '/oy/breakout/unc0ver',
      name: 'Unc0ver',
      component: Unc0ver
    },
    {
      path: '/oy/breakout/chimera',
      name: 'Chimera',
      component: Chimera
    }
  ],
})
