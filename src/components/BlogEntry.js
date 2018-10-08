import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import Athlete from 'components/Athlete';
import requireAuth from 'components/requireAuth';

class BlogEntry extends Component {

    render() {
        return (           
            <div className="blog-post">
                <Athlete/>                    

                <div>
                    <h3>Awesome blog post title <small>3/6/2016</small></h3>
                    <img className="thumbnail" src="https://placehold.it/850x350" alt="Comment" />
                    <div className="callout">
                        <ul className="menu simple">
                            <li><CommentBox/></li>
                        </ul>
                    </div>
                </div>
            </div>            
        );
      }


}

export default connect(null, actions)(requireAuth(BlogEntry));
