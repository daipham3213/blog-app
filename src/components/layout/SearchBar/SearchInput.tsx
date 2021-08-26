import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import { CircularProgress, InputAdornment, TextField } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import ArticleService from '../../../services/article.service';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            width: '500px',
        },
        color: 'inherit',
    },
    searchBox: {
        color: '#FFFFFF',
        ".MuiFormLabel-root" : {
            color: '#FFFFFF',
        }
    }
}))

const SearchInput: React.FunctionComponent = (props) => {
    const timeout = useRef({});
    const classes = useStyles();

    const [results, setResults] = useState([{title: 'The Shawshank Redemption', year: 1994}]);
    const [search, setSearch] = useState('');
    const [isLoading, setLoading] = useState(false);

    const toggleLoad = (val: boolean) => setLoading(val ?? !isLoading);

    const changeSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const input = (params: AutocompleteRenderInputParams) => {
        return (
            <TextField
                {...params}
                label='Search for articles'
                margin='normal'
                variant='outlined'
                placeholder={'Title, contents, name...'}
                autoFocus
                className={classes.searchBox}
                onChange={changeSearch}
                InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    startAdornment: <InputAdornment color='inherit' position='end'><SearchOutlined /></InputAdornment>,
                    endAdornment: (
                        <React.Fragment>
                            {isLoading ? <CircularProgress color='inherit' size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                    ),
                }}
            />
        )
    }

    useEffect(() => {
        if (!search.length) return;

        if (timeout.current) {
            clearTimeout(timeout.current as NodeJS.Timeout)
        }

        timeout.current = setTimeout(() => {
            toggleLoad(true)
            console.log(search);
            // ArticleService.searchArticle(search)
            //     .then((response) => {
            //         if (response.status === 200) {
            //             setResults(response.data.results)
            //             // if (response.data.results?.length > 5 && searchVal?.length>0)
            //             // setResults(prevState: any => [...prevState, {
            //             //     title: 'See more results',
            //             //     code: searchVal,
            //             //     isMore: true
            //             // }])
            //         }
            //         toggleLoad(false)
            //     })
        }, 500)
    }, [search])

    return (
        <div {...props} className={classes.root}>
            <Autocomplete
                freeSolo
                color={'inherit'}
                size={'small'}
                id='search-box'
                disableClearable
                options={results.map((opt: any) => opt.title)}
                renderInput={(params) => input(params) }
                className={classes.searchBox}
            />
            {props.children}
        </div>
    );
};

export default SearchInput;