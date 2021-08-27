import React, { useState } from 'react';
import { SearchOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import SearchInput from './SearchInput';
import { makeStyles } from '@material-ui/core/styles';

interface ISearchBar {
    style?: any;
}

const useStyles = makeStyles((theme) =>({
    root: {
        padding: '0 1rem',
    }
}))

const SearchBar: React.FunctionComponent<ISearchBar> = (props) => {
    const classes= useStyles();

    const [isExpanded, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!isExpanded);
    };

    return (
        <div {...props} onClick={handleClick} className={classes.root}>
            {!isExpanded ? (
                <IconButton color={'inherit'}>
                    <SearchOutlined />
                </IconButton>
            ) : (
                <SearchInput/>
            )}
        </div>
    );
};

export default SearchBar;