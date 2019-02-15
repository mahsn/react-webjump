import React from 'react';

const  List = props => {
    return (
        <ul>
        {
            props.repositories && props.repositories.map(repo => {
                return (
                    <li key={repo.id} > {repo.name}</li>
                )
            })
        }
        </ul>
    );
}

export default List;