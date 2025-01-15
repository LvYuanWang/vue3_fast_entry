import request from './requestApi';

// 获取用户信息
export function getUserInfo() {
  return request({
    url: '/users',
    method: 'GET'
  });
}

/**
 * 根据 id 来获取用户的信息
 * @param {*} id 
 * @returns 
 */
export function getUserByIdApi(id) {
  return request({
    url: `/users/${id}`,
    method: 'GET'
  })
}

/**
 * 新增用户
 * @param {*} data 
 * @returns 
 */
export function addUserApi(data) {
  return request({
    url: '/users',
    method: 'POST',
    data
  })
}

/**
 * 编辑用户数据
 * @param {*} id 唯一标识
 * @param {*} data 编辑后的数据
 * @returns 
 */
export function editUserByIdApi(id, data) {
  return request({
    url: `/users/${id}`,
    method: 'PATCH',
    data
  })
}

/**
 * 根据 id 删除用户
 * @param {*} id 
 * @returns 
 */
export function deleteUserByIdApi(id) {
  return request({
    url: `/users/${id}`,
    method: 'DELETE'
  })
}