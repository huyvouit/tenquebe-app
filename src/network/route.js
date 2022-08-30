export const baseurl = 'http://3.35.47.121:3000/';

const default_pagenation_size = 50;

//주문관리======================================================================
//주문 접수
export const ORDER = id => `store-owner/orders/${id}/register`;
//주문 리스트
export const ORDER_LIST = (type, page) =>
  `# store-owner/orders?type=${type}&page=${page}&size=${default_pagenation_size}`;
//주문 상세
export const ORDER_DETAIL = id => `store-owner/orders/${id}`;
//주문 취소
export const CANCEL_ORDER = id => `store-owner/orders/${id}/cancel`;
//============================================================================

//상품관리======================================================================
export const PRODUCT_LIST_BY_STATUS = (status, page) =>
  `store-owner/products?status=${status}&page=${page}&size=${default_pagenation_size}`;
export const MODIFY_PRODUCT_PRICE = id => `store-owner/products/${id}/price`;
export const MODIFY_PRODUCT_STATUS = id => `store-owner/products/${id}/status`;
export const MODIFY_PRODUCT_INFO = id => `store-owner/products/${id}`;
//============================================================================

//더보기(점포관리 &계정관리)========================================================
//점포 조회
export const STORES = `/store-owner/stores`;
//점포상세
export const STORE = id => `/store-owner/stores/${id}`;
//계정정보 조회, 수정
export const MY_ACCOUNT = `/store-owner/users/me`;
//프로필 이미지 수정
export const MODIFY_PROFILE_IMAGE = `/users/me/photo`;
//============================================================================

//클레임 관리 ===================================================================
//클레임 조회
export const CLAIMS = '/store-owner/claims';
//취소 승인
export const CLAIMS_ACCEPT = orderId =>
  `/store-owner/claims/cancels/${orderId}/completed`;
//취소 반려
export const CLAIMS_REJECT = orderId =>
  `/store-owner/claims/cancels/${orderId}/reject`;
//반품 승인
export const RETRUNS_ACCEPT = orderId =>
  `/store-owner/claims/returns/${orderId}/completed`;
//반품 반려
export const RETRUNS_REJECT = orderId =>
  `/store-owner/claims/returns/${orderId}/reject`;
//교환 반려
export const EXCHANGES_REJECT = orderId =>
  `/store-owner/claims/exchanges/${orderId}/reject`;

//============================================================================

//문의 관리 ===================================================================
//문의 조회
export const INQUIRIES = page =>
  `/store-owner/comments?page=${page}&size=${default_pagenation_size}`;
//문의 상세
export const INQUIRY = id => `/store-owner/comments/${id}`;
//문의 답변, 답변 수정
export const INQUIRY_COMMENT = id => `/store-owner/comments/${id}/answer`;
//===========================================================================

//정산 관리 ===================================================================
//정산 조회
export const SETTLEMENTS = (fromAt, toAt, page) =>
  `store-owner/settlements?fromAt=${fromAt}&toAt=${toAt}&page=${page}&size=${default_pagenation_size}`;
//===========================================================================

// //auth-controller
// export const REQUEST_SMS = '/auth/sms/request'; //인증번호 요청
// export const CODE_VERIFY = '/auth/sms/verify'; //인증번호 검증

// //category-controller
// export const CATEGORIES = '/categories'; //카테고리 리스트

// //claim-controller
// export const CHECK_ORDER_CANCELED = '/claims/cancels/batch/check'; //주문취소 여부체크
// export const SEARCH_ORDER_CANCELED = '/claims/cancels/search'; //주문취소 검색
// export const CANCEL_COUNT_BY_STATUS =
//   '/claims/cancels/statistics/count-by-status'; //status에 따른 주문 취소카운트

// export const CHECK_EXCHANGES = '/claims/exchanges/batch/check'; //교환상태확인?
// export const CANCEL_EXCHANGE = '/claims/exchanges/cancel'; //교환 취소
// export const SERACH_EXCHANGES = '/claims/exchanges/search'; //교환 검색
// export const EXCHANGES_COUNT_BY_STATUS =
//   '/claims/exchanges/statistics/count-by-status'; //status에 따른 주문 교환 카운트

// export const HOLD_ORDER_RETRUNS = id => `/claims/returns/${id}/hold`; //주문취소 대기
// export const CHECK_ORDER_RETRUNS = '/claims/returns/batch/check'; //주문취소 확인
// export const SEARCH_ORDER_RETRUNS = '/claims/returns/search'; //주문취소 검색
// export const GET_RETRUNS_COUNT_BY_STATUS =
//   '/claims/returns/statistics/count-by-status'; //status에 따른 주문 환불 카운트
