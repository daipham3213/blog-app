export interface CategoryViewModel{
    id: string;
    code: string;
    name: string;
}

export interface CategoryModel{
    id: string;
    name: string;
    code: string;
    remarks: string;
    create_date: Date;
    modified_date: Date;
    created_by: string;
}

export interface CategoryCreateModel {
    name: string;
    code: string;
    remarks: string;
}

