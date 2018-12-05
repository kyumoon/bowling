import * as React from 'react';
import {inject, observer} from 'mobx-react'

@inject('store')
@observer
class Statics extends React.Component<any,any>{

    public render(){

        return (
            <div>
                Statics!!!!!!!!!!!!!
            </div>
        );
    }

}

export default Statics;