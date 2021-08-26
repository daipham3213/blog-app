import { CategoryViewModel } from './category';
import { TagsViewModel } from './tags';

export interface ArticleCreateModel {
    title: string;
    code: string;
    author: string;
    glance: string;
    contents: string;
    image_title: string;
    category: string[];
    tags: string[];
    publish_date: Date;
}

export interface ArticleListModel {
    title: string;
    code: string;
    author: string;
    glance: string;
    contents: string;
    image_title: string;
    category: CategoryViewModel[];
    tags: TagsViewModel[];
    views: number;
    publish_date: Date;
}

export interface ArticleDetailsModel {
    title: string;
    code: string;
    author: string;
    glance: string;
    image_title: string;
    publish_date: Date;
    views: string;
    contents: string;
    auditor_current: any;
    is_valid: boolean;
    in_workflow: any;
    category: CategoryViewModel[];
    tags: TagsViewModel[];
}



