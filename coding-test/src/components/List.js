import React, {Component} from "react";

class List extends Component {
    render() {
        let arr = [];
        let data = this.props.data;
        let i = 0;
        while (i < data.length) {
            arr.push(<tr key={data[i].id}>
                <td>{data[i].id}</td>
                <td>{data[i].item}</td>
                <td><button type="button" onClick={(e)=>{
                        e.preventDefault();
                        this.props.onDelete();
                        }}>del</button></td>
                <td><button type="button" onClick={(e)=>{
                        e.preventDefault();
                        this.props.onEdit();
                        }}>edit</button></td>
                </tr>);
            i++;
        }
        arr.reverse();

        return (
            <table>
            <tbody>
                {arr}
            </tbody>                
            </table>
        );
    }
}

export default List;