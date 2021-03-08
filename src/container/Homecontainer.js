import {connect} from 'react-redux';
import Home from "../component/Home";
import {addToCard} from  '../Services/Action/action';

const mapStateToProps= state=>({
    cardData: state.cardItems

})

const mapDispatchToProps = dispatch=>({
    addToCardHandler : data =>dispatch(addToCard(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)


// export default Home;

