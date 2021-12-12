import http from 'utils/http';

export const listArticles = (params:any) => {
    return http<Page<Article>>({
        method: 'get',
        url: '/article/page',
        params:{... params.pageParam,pageSize:15}
    });
};
