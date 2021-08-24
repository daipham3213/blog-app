export interface TagsViewModel{
    id: string,
    code: string,
    name: string,
}

export interface TagsModel{
    id: string;
    name: string;
    code: string;
    remarks: string;
    create_date: Date;
    modified_date: Date;
    created_by: string;
}

export interface TagsCreateModel {
    name: string;
    code: string;
    remarks: string;
}