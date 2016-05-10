import React from 'react';
import styles from './App.scss';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        let state = {
            COLLAPSED: styles.COLLAPSED,
            EXPANDED: styles.EXPANDED
        }[this.props.collapseState];

        return <div className={state}>
            <div className={styles.body}>
                {this.props.children}
            </div>
        </div>;
    }
}

export default App;
