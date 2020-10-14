import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface IState {
    deliveries: any[];
}

export default class Home extends React.Component<RouteComponentProps, IState> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { deliveries: [] }
    }

    public componentDidMount(): void {
        // TODO get delivery list
    }

    public deleteDelivery(id: number) {
        // TODO delete delivery
    }

    public render() {
        const deliveries = this.state.deliveries;
        return (
            <div>
                {deliveries.length === 0 && (
                    <div className="text-center">
                        <h2>No delivery found at the moment</h2>
                    </div>
                )}
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Street</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Lat</th>
                                    <th scope="col">Lon</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deliveries && deliveries.map(delivery =>
                                    <tr key={delivery.id}>
                                        <td>{delivery.first_name}</td>
                                        <td>{delivery.last_name}</td>
                                        <td>{delivery.email}</td>
                                        <td>{delivery.phone}</td>
                                        <td>{delivery.address}</td>
                                        <td>{delivery.description}</td>
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                    <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteDelivery(delivery.id)}>Delete Delivery</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}