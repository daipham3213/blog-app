export interface PaginationParams {
    limit?: number;
    offset?: number;
    next?: number;
    previous?: number;
    count?: number;
}

export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
}

export interface ArticleListParams {
    author__username?: string;
    category__code?: string;
    tags__code?: string;
    publish_date?: string;

    [key: string]: any;
}
