import {connect} from "react-redux";

import ProductView from "./../components/ProductView";

const mapStateToProps = (state) => {
    return {
        title: "Product View",
        product: state.productState.product
    }
}

export default connect(mapStateToProps)(ProductView);