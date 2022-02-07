import React, {useState} from 'react';
import Button from "../../Button/Button";
import {observer} from "mobx-react";

export default observer(function SingleItem({store, id, name, birthYear, comment}) {
    const [inputText, setInputText] = useState('');

    const addComment = () => {
        if (inputText !== '') {
            store.addComment(id, inputText);
            setInputText('');
        } else {
            alert('Комментарий не может быть пустим')
        }
    };

    const removeComment = () => {
      store.deleteComment(id)
    }

    return (
        <div className="person__el">
            <div className="person__el--wrap">
                <div className="person__el--info">
                    <div className="person__el--name">
                        <span>Имя: </span>{name}
                    </div>
                    <time className="person__el--date">
                        <span>Дата рождения: </span>
                        {birthYear}
                    </time>
                </div>
                <div className="person__el--add">
                    <input
                        type="text"
                        onChange={event => setInputText(event.target.value)}
                        value={inputText}
                        placeholder="Комментарий"
                    />
                    <Button onClick={addComment}><span>Добавить</span></Button>
                </div>
            </div>

            <div className="person__el--comments">
                <span style={{marginBottom: '10px'}}>Комментарий:</span>

                {comment === ''
                    ? <p>Пока нет коментария</p>
                    :
                    (
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {comment}
                            <span onClick={removeComment} className="remove__comment" style={{cursor: 'pointer', marginTop: '15px'}}>Удалить комментарий</span>
                        </div>
                    )
                }
            </div>
        </div>
    );
});