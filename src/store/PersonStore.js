import {types, flow} from "mobx-state-tree";
import axios from "axios";

const Person = types.model({
    id: types.maybe(types.integer),
    name: types.string,
    birthYear: types.string,
    comment: types.maybe(types.string)
});

const PersonStore = types
    .model({
        persons: types.array(Person),
        isLoading: types.boolean
    })
    .actions(self => ({
        fetchPersons: flow(function* fetchPersons() {
            self.persons = [];
            self.isLoading = true;
            let arr = []
            try {
                const res = yield axios.get(`https://swapi.dev/api/people/`)
                    .then(({data}) => {
                        Object.keys(data.results).map((key, index) => {
                            let dataRes = data.results[key];
                            let obj = {
                                id: index,
                                name: dataRes.name,
                                birthYear: dataRes.birth_year,
                                comment: ''
                            }
                            arr.push(obj)
                        });
                    })
                self.isLoading = false;
                self.persons = arr;

            } catch (error) {
                console.error("Failed to fetch persons", error);
            }
        }),
        addComment(id, text) {
            self.persons[id].comment = text.toString()
        },
        deleteComment(id) {
            self.persons[id].comment = ''
        }
    }))

export default PersonStore