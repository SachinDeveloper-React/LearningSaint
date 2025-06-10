//
export const SOURCE = `APP`;
export const SITEID = 1;
export const COMPANYNAME = 'Learning Saint';
//

export const LOGINURL = 'api/login';
export const REGISTERURL = 'api/register';
export const LOGOUTURL = 'api/logout';
export const COURSEPRICE = 'api/getCoursePrices';
export const USERDETAIL = 'api/user';
export const BATCHES = 'api/batches';
export const CLASSES = 'api/classes';
export const RECORDINGS = 'api/recordings';
export const ASSIGNMENT = 'api/assignments';
export const EBOOK = 'api/ebooks';
export const CREATEORDER = 'api/createOrder';
export const CREATEORDERBYRAZORPAY = '/api/order/razorpay';
export const VERIFYSIGNATUREBYRAZORPAY = '/api/order/razorpay/verifyOrder';
export const UPDATEPAYMENT = 'api/updatePayment';
export const GETORDERDETAILS = 'api/getOrderDetails';
export const STRIPEINTENTDELETE = 'payment/stripe/delete';
export const STRIPEINTENTUPDATE = 'payment/stripe/update';
export const GETORDERLIST = 'api/getOrders';
export const GEOIPLOCATION = 'api/getDetails';

export const api_token =
  '?api_token=zxUcPukvuXHaCM6E7eqfLwGUncdJD6lF1qGcjEAifQjy1iAUvVw0Qu2hJLQj';
export const GETBLOGSENDPONT = `api/getBlogs`;
export const GETBLOGSENDPONTDETAIL = `api/getBlog`;
export const GETBLOGS = `${GETBLOGSENDPONT}/${SITEID}${api_token}`;
// URLS
export const WEBSITEURL = 'https://www.learningsaint.com/';
export const APPLEARNINGURL = 'https://app.learningsaint.com';
export const STAGINGLEARNINGURL = 'https://staging.learningsaint.com/';

export const EBOOK_DOWNLOAD_PATH = `${APPLEARNINGURL}/public/ebooks/`;
export const ASSIGNMENT_DOWNLOAD_PATH = `${APPLEARNINGURL}/public/files/`;

export const FAVICON = `${WEBSITEURL}assets/images/favicon.png`;

// RAZOR PAY IDS
export const isProduction = true;
export const RAZORPAYKEY_ID = !isProduction
  ? 'rzp_test_LqXyOATu70QOPr'
  : 'rzp_live_efWyhMJ7Duqqla';
export const RAZORPAYKEY_SECRET = !isProduction
  ? 'L6kkR6Z82fYeu2rwwPx3RtlV'
  : 'GWDDepHeMhUltPiHWT0c4yTz';
