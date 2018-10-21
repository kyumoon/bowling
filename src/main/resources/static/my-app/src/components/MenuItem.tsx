import * as React from 'react';


class MenuItem extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            menuList: [
                {index: 0, name: 'SCORE', url: ''},

            ]
        }
    }

    public render() {
        const menuList = this.state.menuList.map((item:any)=>{
            return <li key={item.index}>{item.name}</li>
        });
        return (
            <ul>
                {menuList}
            </ul>
        );
    }
}

export default MenuItem