import React, { useEffect } from "react";

const List = () => {

    useEffect(() => {
        document.title = "liste"
    }, []);

    return (
        <div>
            <ul>
                <li>mot 1</li>
                <li>mot 2</li>
                <li>mot 3</li>
                <li>mot 4</li>
                <li>mot 5</li>
            </ul>
        </div>
    )
}

export default List