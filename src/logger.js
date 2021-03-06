const React=require("react");
const E=React.createElement;
const styles={
	log:{color:"green"},
	timestamp:{color:"silver"},
	error:{color:"red"},
	warn:{color:"orange"},
	normal:{color:"green"},
	container:{height:"95%",overflow:"auto"}
}
class Logger extends React.Component {
	renderLog(_log,key){
		const log=_log.slice();
		var style=styles.normal;
		var timestamp=log.shift();
		if (styles[log[0]]) {
			style=styles[log.shift()];
		}
		const logmessage=log.join(" ");
		const ts=timestamp.toTimeString().substr(0,8);
		return E("div",{key,style:styles.log},
			E("span",{}," ",E("span",{style},logmessage)));
	}
	render(){
		return E("div",{style:styles.container},
			E("div",{style:styles.timestamp}
				,new Date().toString().replace(/GMT.+/,"")
				,",started at: "+this.props.starttime.toString().replace(/GMT.+/,"")),
			this.props.logs.map(this.renderLog.bind(this))
		);
	}
}
module.exports=Logger;