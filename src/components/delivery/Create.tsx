import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IValues {
    customer_name: string,
    delivery_weight: number,
    customer_address: string,
}

export interface IFormState {
    [key: string]: any;
    values: IValues[];
    submitSuccess: boolean;
    loading: boolean;
}

class CreateDelivery extends React.Component<RouteComponentProps, IFormState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            customer_name: '',
            delivery_weight: '',
            customer_address: '',
            values: [],
            loading: false,
            submitSuccess: false,
        }
    }

    // method receives the details of the delivery from the application state and posts it to the database
    private processFormSubmission = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {
            customer_name: this.state.customer_name,
            delivery_weight: this.state.delivery_weight,
            customer_address: this.state.customer_address,
        }
        this.setState({ submitSuccess: true, values: [...this.state.values, formData], loading: false });
        
        // TODO POST
        
    }

    // obtain the values of all input fields and calls this.setState() to update the state of the application
    private handleInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }

    //creates a form with the input fields to hold the values ​​of the delivery
    public render() {
        const { submitSuccess, loading } = this.state;
        return (
            <div>
                <div className={"col-md-12 form-wrapper"}>
                    <h2> Create Delivery </h2>
                    {!submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            Fill the form below to create a new delivery
                    </div>
                    )}
                    {submitSuccess && (
                        <div className="alert alert-info" role="alert">
                            The form was successfully submitted!
                            </div>
                    )}
                    <form id={"create-post-form"} onSubmit={this.processFormSubmission} noValidate={true}>
                        <div className="form-group col-md-12">
                            <label htmlFor="customer_name"> First Name </label>
                            <input type="text" id="customer_name" onChange={(e) => this.handleInputChanges(e)} name="customer_name" className="form-control" placeholder="Customer name" />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="delivery_weight"> Last Name </label>
                            <input type="text" id="delivery_weight" onChange={(e) => this.handleInputChanges(e)} name="delivery_weight" className="form-control" placeholder="Weight Delivery" />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="customer_address"> Customer Address </label>
                            <input type="text" id="customer_address" onChange={(e) => this.handleInputChanges(e)} name="customer_address" className="form-control" placeholder="Customer Address" />
                        </div>
                        
                        <div className="form-group col-md-4 pull-right">
                            <button className="btn btn-success" type="submit">
                                Create Delivery
                            </button>
                            {loading &&
                                <span className="fa fa-circle-o-notch fa-spin" />
                            }
                        </div>
                    </form>
                </div>
                <div className={"col-md-12 form-wrapper"}>
                    <button className="btn btn-success" type="submit">
                                Reset Delivery
                    </button>
                </div>
            </div>
        )
    }
}
export default withRouter(CreateDelivery)