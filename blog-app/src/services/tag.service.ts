import axiosClient from './middleware/axiosClient';

const URL_API = 'api/tag/';

export interface TaskFilterModel {
    create_date?: Date;
    is_active?: Boolean;
}

const getTagList = (params: TaskFilterModel) => {
    // const filtered_url = new URL(URL_API);
    // filtered_url.search = new URLSearchParams(payload).toString();
    return axiosClient.get(
        URL_API,
        {params}
    )
        .catch(reason => {
            return reason.response;
        });
};

const getTag = (slug: string) => {
    return axiosClient
        .get(
            URL_API + slug,
        )
        .catch(reason => {
            return reason.response;
        });
};
const deleteTagList = (id_list: string[]) => {
    return axiosClient
        .delete(
            URL_API,
            { data: id_list },
        )
        .catch(reason => {
            return reason.response;
        });
};
const postTag = (name = '', remarks = '', code = '') => {
    return axiosClient
        .post(
            URL_API,
            { name, remarks, code },
        )
        .catch(reason => {
            return reason.response;
        });
};
const editTag = (slug: string, name = '', remarks = '', code = '') => {
    return axiosClient
        .put(
            URL_API + slug,
            { name, remarks, code },
        );

};
const deleteTag = (slug: string) => {
    return axiosClient
        .delete(
            URL_API + slug,
        );
};

const TagService = {
    getTagList, getTag, deleteTagList, postTag, editTag, deleteTag,
};
export default TagService;