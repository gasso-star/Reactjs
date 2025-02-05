import { Component } from 'react';
import Student from './Student';
import NoData from './NoData'

class Students extends Component {
    state = {
        data: this.props.AllData,
    };

    handleStudentRemoval = (student) => {
        if (
            confirm(
                `Are you sure you want to remove ${student.name} from  List?`
            ) == true
        ) {
            //alert('Ok student will be removed!!');
            //alert(this.state.data.length);
            //this.state.data = this.state.data.filter(x=>x.id != student.id);
            this.setState({
                data: this.state.data.filter((x) => x.id != student.id),
            });
            //alert(this.state.data.length);
        }
    };
    render() {
        if (this.state.data.length == 0) {
            return <NoData />;
        } else {
            return (
                <>
                    <h3>All Students</h3>
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

export default Students;
