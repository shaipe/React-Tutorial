import React from 'react';

/**
 * React Input Component
 */
class Input extends React.Component{

    constructor (props){
        super(props);
        let val = props.value === undefined ? "" : props.value;
        console.log(val);
        this.state = {value: val}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
        
        let val = e.target.value;
        this.setState({value: val});
        
        // 调用父级元素传入的更改状态方法
        let func = this.props.change;
        let v = {};
        v[e.target.name] = val;
        if (typeof(func) == "function"){
            func(v);
        }
    }

    /**
     * 
     */
    componentDidMount(){
        //console.log("eweewwewe======",this.props);
        console.log(this.props.value);
        this.setState({value: this.props.value});
    }

    render = () =>{
        let p = this.props;
        let inputType = this.props.type === undefined ? "text" : this.props.type.toLowerCase();
        let cssName = (p.cssName === undefined ? "" : p.cssName);
        // this.value = p.value;
        console.log(inputType, this.state.value, p.value);
        let ele = <div className={"form-group " + cssName}  key="text">
            <p className="name">{p.label + "："}</p>
            <input type="text"
                     name={p.name}
                     value={this.state.value}
                     onChange={this.handleChange}
                     placeholder={p.placeholder} 
                     className={p.className} />
        </div>

        if( inputType === "textarea"){
            console.log(p.value);
            ele = <div className={"form-group " + cssName} key="textarea">
                <p className="name">{p.label + "："}</p>
                <textarea name={p.name} onChange={this.handleChange} value={this.state.value}></textarea>
            </div>
        }
        else if(inputType === "checkbox"){
            let chk = {};
            // console.log(this.state.value, p.value);
            if (this.state.value === p.checked){
                chk = {checked:true};
            }
            ele = <div className={"form-group ml" + cssName} key="checkbox">
                <label>
                <input type="checkbox"
                       name={p.name} id={p.id} value={p.value} onChange={this.handleChange}  {...chk}/>&nbsp;{p.label}
                </label>
            </div>
        }
        else if(inputType === "select"){
            let opts = p.options;
            if (opts === undefined){
                opts = [];
            }
            ele = (<div className={"form-group " + cssName} key="select">
                    <p className="name">{p.label + "："}</p>
                    <select name={p.name} onChange={this.handleChange} value={p.value}>
                        <option value="">请选择</option>
                        {
                            opts.map((item, idx) => (
                                React.createElement("option", {key: idx, value: item.value}, `${item.label}`)
                            ))
                        }
                    </select>
                </div>)
        }

        return [
            ele
        ];
    }
}

export default Input