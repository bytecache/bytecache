import http from 'utils/http';

export const listArticles = (params) => {
    return http<Page<Article>>({
        method: 'get',
        url: '/article/page',
        params: params.pageParam
    });
};
