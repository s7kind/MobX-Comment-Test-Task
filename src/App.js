import React from "react";
import "./app.scss";
import ListItems from "./components/ListItem/ListItem";
import PersonStore from "./store/PersonStore";

const store = PersonStore.create({
    persons: [],
    isLoading: true
});

export default function App() {
    return (
        <div className="App">
            <ListItems store={store} />
        </div>
    );
}
