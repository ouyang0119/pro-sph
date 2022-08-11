import requests from './request';

import mockRequests from './mockAjax';

export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');

export const reqGetBannerList = () => mockRequests.get('/banner');

export const reqGetFloorList = () => mockRequests.get('/floor');

export const reqGetSearchInfo = (params) => requests({url:"/list",method:"post",data:params});

export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});


