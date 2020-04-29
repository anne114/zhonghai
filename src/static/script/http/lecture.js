import request from './index'
export function get_lecture_list(data) {
    return request({
        url: '/api/Lecture/Search',
        method: 'POST',
        data
    }).catch(res => {
        console.log(res);
    })

}