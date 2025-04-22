import React from 'react'

const ListsComponent = () => {
    return (
        <div>
            <h3>Упорядоченный список</h3>
            <ol>
                <li>Пункт 1
                    <ol>
                        <li>Подпункт 1.1</li>
                    </ol>
                </li>
                <li>Пункт 2</li>
            </ol>

            <h3>Неупорядоченный список</h3>
            <ul>
                <li>Элемент A
                    <ul>
                        <li>Подэлемент A</li>
                    </ul>
                </li>
                <li>Элемент B</li>
            </ul>
        </div>
    )
}

export default ListsComponent