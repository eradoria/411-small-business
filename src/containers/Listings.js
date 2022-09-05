import { connect } from 'react-redux'
import Listings from '../components/Listings'
// import { removeCar } action here
import { removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (index) => dispatch(removeListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)