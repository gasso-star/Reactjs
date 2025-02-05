import { Component } from 'react';
import Student from './Student';
import NoData from './NoData';

class Honorlist extends Component {
    state = {
        title: 'Homor List has 2 Students',
        data: this.props.AllData
    };

    handleStudentRemoval = (student) => {
        if (
            confirm(
                `Are you sure you want to remove ${student.name} from Homor List?`
            ) == true
        ) {
            // alert(this.state.data.length);
            this.setState(
                {
                    data: this.state.data.filter((x) => x.id != student.id),
                },
                () => {
                    this.setState({
                        title: `Homor List has ${this.state.data.length} Students`,
                    });
                }
            );
            //this.state.title = `Homor List has ${this.state.data.length} Students`;
        }
    };
    render() {
        if (this.state.data.length == 0) {
            return <NoData />;
        } else {
            return (
                <>
                    <h3>{this.state.title}</h3>
                    {this.state.data.map((e) => {
                        return (
                            <Student
                                key={e.id}
                                balblabla={'rony'}
                                id={e.id}
                                name={e.name}
                                grade={e.grade}
                                handleRemoveBtn={() => {
                                    this.handleStudentRemoval(e);
                                }}
                            ></Student>
                        );
                    })}
                </>
            );
        }
    }
}

export default Honorlist;
