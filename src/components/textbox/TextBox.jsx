import React from 'react';

export class TextBox extends React.Component {
    render() {
        const categories = this.props.categories;
        const categoryLi = categories.map((d) => 
            <tr>
                <td className="text-left pb-2 w-100">
                    <a href="#" className="text-muted">
                        {d.name}
                    </a>
                </td>
                <td className="text-white text-right pb-2 w-100">
                    {d.amount}
                </td>
            </tr>
        );
        const component = (
            <div className="table-responsive">
                <table className="table-borderless">
                    <tbody>
                        {categoryLi}
                    </tbody>
                </table>
            </div>
            
        );

        return component;
    }
}