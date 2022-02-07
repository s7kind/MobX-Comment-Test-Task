import React, {useEffect} from "react";
import {observer} from "mobx-react";
import Loader from "../Loader/Loader";
import './list-item.scss'
import SingleItem from "./SingleItem/SingleItem";

export default observer(function ListItems({store}) {


    useEffect(() => {
        store.fetchPersons();
    }, []);

    return (
        <div className="app container">
            <div className="app__wrap">
                <h1 className="app__title">Comments App</h1>

                {store.isLoading ?
                    <Loader/>
                    :
                    <div className="person__list">
                        {store.persons.map((person, index) => {
                            return (
                                <SingleItem key={index} store={store} {...person}/>
                            )
                        })}

                    </div>
                }
            </div>
        </div>
    );
});
