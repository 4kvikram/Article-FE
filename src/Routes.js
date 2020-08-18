import React from 'react'
import { Route } from 'react-router-dom'
import ArticleList from './containers/ArticleListView'

import ArticleDetailsList from './containers/ArticleDetailsView'
const BaseRoute = () => {
    return (
        <div>
            <Route exact path='/' component={ArticleList} />
            <Route exact path='/:articleID' component={ArticleDetailsList} />
        </div>)
}

export default BaseRoute;