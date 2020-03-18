import React from 'react';

class SearchBar extends React.Component {

    state = { name: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.name);
    }
    
    render() {
        return (
            <div className="ui placeholder segment">
                <div className="ui one column stackable center aligned grid">
                    <div className="middle aligned row">
                        <div className="column">
                            <div className="ui icon header">
                                <h1>ZERO CARBON</h1>
                                <i className="search icon"></i>
                                Kerko pjese per veture:
                                    </div>
                            <div className="field field-search" style={{'maxWidth':'50rem'}}>
                                <div className="ui search">
                                    <div className="ui icon input" style={{'width':'100%'}}>
                                        <form onSubmit={this.onFormSubmit} className="ui form" style={{'width':'100%'}}>
                                            <div className="field" style={{'maxWidth':'100%'}}>
                                                <input style={{'width':'100%'}}
                                                    className="prompt"
                                                    type="text"
                                                    placeholder="kerko permes kodit . . ."
                                                    value={this.state.name}
                                                    onChange={(event) => this.setState({ name: event.target.value })}
                                                />
                                            </div>
                                            <div className="results"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default SearchBar;