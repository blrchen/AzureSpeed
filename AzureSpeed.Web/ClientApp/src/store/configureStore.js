﻿import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import * as Latency from './latency';
import * as Upload from './upload';
import * as UploadLargeFile from './uploadLargeFile';
import * as Download from './download';
import * as CloudRegionFinder from './cloudRegionFinder';
import * as IpRange from './ipRange';

export default function configureStore(history, initialState) {
  const reducers = {
    latency: Latency.reducer,
    upload: Upload.reducer,
    uploadLargeFile: UploadLargeFile.reducer,
    download: Download.reducer,
    cloudRegionFinder: CloudRegionFinder.reducer,
    ipRange: IpRange.reducer
  };

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
