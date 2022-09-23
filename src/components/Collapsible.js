import './Collapsible.css'
import useCollapse from 'react-collapsed';

function Collapsible(props){
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    let up = false
    return <div className="collapsible">
        <div className="header" {...getToggleProps()}>
        {isExpanded ? 
        (<div>
            <div>{props.title}</div>
            <p className='chevronUp'>&#10094;</p>
        </div>) : 
        (<div>
            <div>{props.title}</div>
            <p className='chevronDown'>&#10094;</p>
        </div>)}
            
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.content}
            </div>
        </div>
    </div>
}

export default Collapsible