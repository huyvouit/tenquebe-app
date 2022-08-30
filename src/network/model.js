import {Send} from 'network';
import {
  CANCEL_ORDER,
  CLAIMS,
  CLAIMS_ACCEPT,
  CLAIMS_REJECT,
  EXCHANGES_REJECT,
  INQUIRIES,
  INQUIRY,
  INQUIRY_COMMENT,
  MODIFY_PRODUCT_INFO,
  MODIFY_PRODUCT_PRICE,
  MODIFY_PRODUCT_STATUS,
  MODIFY_PROFILE_IMAGE,
  MY_ACCOUNT,
  ORDER,
  ORDER_DETAIL,
  ORDER_LIST,
  PRODUCT_LIST_BY_STATUS,
  RETRUNS_ACCEPT,
  RETRUNS_REJECT,
  SETTLEMENTS,
  STORES,
} from './route';

//GET ======================================================================
//type  - 1 : 신규, 처리중 , 2 : 접수 완료
export function get_order_list({type, page}) {
  return Send(ORDER_LIST(type, page), 'GET', undefined, true, false);
}
//id - 주문 id
export function get_order_detail({id}) {
  return Send(ORDER_DETAIL(id), 'GET', undefined, true, false);
}
//status - 상품 상태값
export function get_products_by_status(status, page) {
  return Send(
    PRODUCT_LIST_BY_STATUS(status, page),
    'GET',
    undefined,
    true,
    false,
  );
}
export function get_store_list() {
  return Send(STORES, 'GET', undefined, true, false);
}
export function get_inquiries({page}) {
  return Send(INQUIRIES(page), 'GET', undefined, true, false);
}
// from , to  : YYYY-MM-DD
export function get_settilement_list({from, to, page}) {
  return Send(SETTLEMENTS(from, to, page), 'GET', undefined, true, false);
}

//==========================================================================

//POST ======================================================================
export function get_claim_list({body}) {
  //body ={"type": type,"storeId": ""}  type - 1 : 전체 , 2 : 취소 , 3 : 반품 , 4 : 교환
  return Send(CLAIMS, 'POST', body, true, false);
}

//==========================================================================

//PUT ======================================================================
// id - orderID
export function accept_order({id}) {
  return Send(ORDER(id), 'PUT', undefined, true, false);
}
// id - orderID
export function cancel_order({id}) {
  return Send(CANCEL_ORDER(id), 'PUT', undefined, true, false);
}
// id - product id , body = { amount : int}
export function modify_product_price({id, body}) {
  return Send(MODIFY_PRODUCT_PRICE(id), 'PUT', body, true, false);
}
// id - product id , body = { status : }  status - 1 : 판매중 , 2 : 판매중지 , 3 : 대기
export function modify_product_status({id, body}) {
  return Send(MODIFY_PRODUCT_STATUS(id), 'PUT', body, true, false);
}
// id - orderId
export function accept_cancel_order({id}) {
  return Send(CLAIMS_ACCEPT(id), 'PUT', undefined, true, false);
}
// id - orderId
export function reject_cancel_order({id}) {
  return Send(CLAIMS_REJECT(id), 'PUT', undefined, true, false);
}
// id - orderId
export function accept_retruns_order({id}) {
  return Send(RETRUNS_ACCEPT(id), 'PUT', undefined, true, false);
}
// id - orderId
export function reject_retruns_order({id}) {
  return Send(RETRUNS_REJECT(id), 'PUT', undefined, true, false);
}
// id - orderId
export function reject_exchanges_order({id}) {
  return Send(EXCHANGES_REJECT(id), 'PUT', undefined, true, false);
}

//==========================================================================

//PATCH ======================================================================
// id - product id , body ={"name": "","price": 10000,"stock": 1,"status": 1}
export function update_product_info({id, body}) {
  return Send(MODIFY_PRODUCT_INFO(id), 'PATCH', body, true, false);
}
// body = {"address": {"main": "","detail": "","postCode": 12345},"tel": "01012345678",}
export function update_my_info({body}) {
  return Send(MY_ACCOUNT, 'PATCH', body, true, false);
}
export function update_my_profile_image({body}) {
  //body = {"file": file}
  return Send(MODIFY_PROFILE_IMAGE, 'PATCH', body, true, false);
}
export function get_inquiry({id}) {
  return Send(INQUIRY(id), 'PATCH', undefined, true, false);
}
export function update_inquiry_comment({id, body}) {
  //body = {"contents": string}
  return Send(INQUIRY_COMMENT(id), 'PATCH', body, true, false);
}

//==========================================================================
