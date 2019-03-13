import React, { Component } from 'react'
import { graphql } from 'react-apollo';

type Props = {
    data: any
}

type State = {
    territory: String,
    flowerCategory: String,
    type: String,
    potency: String
}

class SpotPricing extends Component<void, Props, void> {
    props: Props
    state: void

    constructor(props) {
        super(props)

        this.state = {
            territory: 'Ashlee',
            flowerCategory: 'Greenhouse',
            type: 'Bulk Flower',
            potency: 'Above 20%'
        }
    }

    render() {
        return (
            <div>
                <div id="spot-pricing" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.4/umd/react-dom.production.min.js"></script>
            </div>
        )
    }
}

export default graphql(gql`
    query SpotPricing {
        sys {
            id
        }
    }
`)(SpotPricing);