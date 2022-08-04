import requests from './request';

import mockRequests from './mockAjax';

export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');

export const reqGetBannerList = () => mockRequests.get('/banner');


