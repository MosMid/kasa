function Collapse(props){
    return<details>
            <summary>{props.summary}</summary>
            <p>{props.content}</p>
    </details>
}
export default Collapse