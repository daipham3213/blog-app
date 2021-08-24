import axiosClient from './middleware/axiosClient';
import { ListResponse, PaginationParams } from '../models/common';
import { ArticleCreateModel, ArticleListModel } from '../models/article';

const URL_API = 'api/article/';

export interface ArticleListParams {
    author__username?: string;
    category__code?: string;
    tags__code?: string;
    publish_date?: string;

    [key: string]: any;
}


const getArticleList = (params: ArticleListParams): Promise<ListResponse<ArticleListModel>> => {
    // const filtered_url = new URL(URL_API);
    // const p = new URLSearchParams(params);
    // filtered_url.search = p.toString();
    return axiosClient
        .get(
            URL_API,
            {params}
        )
        .catch(reason => {
            return reason.response;
        });
};

const searchArticle = (keyword: string) => {
    return axiosClient
        .get(
            URL_API + '?search=' + keyword,
        )
        .catch(reason => {
            return reason.response;
        });
};

const getArticle = (slug: string) => {
    return axiosClient
        .get(
            URL_API + slug,
        )
        .catch(reason => {
            return reason.response;
        });
};

const postArticle = (model: ArticleCreateModel) => {
    return axiosClient
        .post(
            URL_API,
            { ...model },
        ).catch(reason => {
            return reason.response;
        });
};

const deleteArticleList = (slug_list: string[]) => {
    return axiosClient
        .delete(
            URL_API,
            { data: slug_list },
        )
        .catch(reason => {
            return reason.response;
        });
};

const deleteArticle = (slug: string) => {
    return axiosClient
        .get(
            URL_API + slug,
        );
};

const editArticle = (slug: string, model: ArticleCreateModel) => {
    return axiosClient
        .put(
            URL_API + slug,
            { slug, ...model },
        );
};

const ArticleService = {
    getArticle,
    getArticleList,
    postArticle,
    deleteArticleList,
    deleteArticle,
    editArticle,
    searchArticle,
};

export default ArticleService;