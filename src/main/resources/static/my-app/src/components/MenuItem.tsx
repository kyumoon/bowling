import * as React from 'react';
// import * from 'react-router';


class MenuItem extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            menuList: [
                {index: 0, name: 'Score', url: '/'},
                {index: 1, name: 'Statics', url: '/Statics'},
            ]
        }
    }

    public render() {
        const menuList = this.state.menuList.map((item:any)=>{
            return <li className={item.index%2==0?'seperator':''} key={item.index}>{item.name}</li>
        });
        return (
            <ul>
                {menuList}
            </ul>
        );
    }
}

export default MenuItem