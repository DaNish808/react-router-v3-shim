import * as routerV3 from 'react-router'
import * as history from 'history'

export const createRouter3History = options => routerV3.useRouterHistory(history.createHistory)(options)

export default routerV3