import { connect } from "react-redux";
import PostLists from "../components/postLists";


const mapStateToProps = (state) =>({
    posts:state.posts
})

export default connect(mapStateToProps,null)(PostLists)